'use client'

// 1. Imports
import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { Layout, Button, Card } from '@/shared/components'
import { ProtectedRoute } from '@/shared/components/ProtectedRoute'
import { QuizQuestion } from '@/features/quiz/components/QuizQuestion'
import { getQuizById } from '@/shared/data/quizzes'
import type { QuizItem } from '@/shared/types/quiz'

// 2. Tipos/Interfaces
interface QuizPageProps {
    params: Promise<{
        quizId: string
    }>
}

// 3. Componente
export default function QuizPage({ params }: QuizPageProps) {
    // 4. Estados
    const [quiz, setQuiz] = useState<QuizItem | null>(null)
    const [currentQuestionIndex, _setCurrentQuestionIndex] = useState(0)
    const [answers, _setAnswers] = useState<Record<string, string[]>>({})
    const [isCompleted, _setIsCompleted] = useState(false)
    const [timeRemaining, setTimeRemaining] = useState<number | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    // 5. Hooks
    const router = useRouter()

    // 6. Lógica
    const getProgressPercentage = () => {
        if (!quiz) return 0
        return (Object.keys(answers).length / quiz.questions.length) * 100
    }

    const getAnsweredQuestionsCount = () => {
        return Object.keys(answers).length
    }

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60)
        const remainingSeconds = seconds % 60
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
    }

    const handleAnswer = (questionId: string, selectedAnswers: string[]) => {
        _setAnswers(prev => ({ ...prev, [questionId]: selectedAnswers }))
    }

    const handleNextQuestion = () => {
        if (!quiz) return
        if (currentQuestionIndex < quiz.questions.length - 1) {
            _setCurrentQuestionIndex(prev => prev + 1)
        }
    }

    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            _setCurrentQuestionIndex(prev => prev - 1)
        }
    }

    const handleCompleteQuiz = useCallback(() => {
        if (!quiz) return
        
        let correctAnswers = 0
        let totalPoints = 0
        
        quiz.questions.forEach(question => {
            const userAnswer = answers[question.id]
            if (userAnswer) {
                const correctAnswer = Array.isArray(question.correctAnswer) 
                    ? question.correctAnswer 
                    : [question.correctAnswer]
                
                const isCorrect = correctAnswer.every((answer: string) => 
                    userAnswer.includes(answer)
                ) && userAnswer.length === correctAnswer.length
                
                if (isCorrect) {
                    correctAnswers++
                }
                totalPoints += question.points || 1
            }
        })
        
        const score = Math.round((correctAnswers / quiz.questions.length) * 100)
        const passed = score >= (quiz.passingScore || 70)
        
        const results = {
            score,
            totalPoints,
            percentage: score,
            correctAnswers,
            totalQuestions: quiz.questions.length,
            passed,
            timeSpent: quiz.timeLimit ? (quiz.timeLimit * 60) - (timeRemaining || 0) : 0,
            answers
        }
        
        // Salvar resultados no localStorage para a página de resultados
        localStorage.setItem(`quiz_results_${quiz.id}`, JSON.stringify(results))
        
        // Salvar no histórico de tentativas
        const attemptId = `attempt_${Date.now()}`
        const attempt = {
            id: attemptId,
            quizId: quiz.id,
            quizTitle: quiz.title,
            score,
            totalPoints,
            percentage: score,
            correctAnswers,
            totalQuestions: quiz.questions.length,
            passed,
            timeSpent: quiz.timeLimit ? (quiz.timeLimit * 60) - (timeRemaining || 0) : 0,
            startedAt: new Date().toISOString(),
            completedAt: new Date().toISOString()
        }
        
        // Carregar histórico existente
        const existingHistory = localStorage.getItem('quiz_attempts_history')
        const history = existingHistory ? JSON.parse(existingHistory) : []
        
        // Adicionar nova tentativa
        history.push(attempt)
        
        // Manter apenas as últimas 50 tentativas
        if (history.length > 50) {
            history.splice(0, history.length - 50)
        }
        
        // Salvar histórico atualizado
        localStorage.setItem('quiz_attempts_history', JSON.stringify(history))
        
        router.push(`/quizzes/${quiz.id}/results`)
    }, [quiz, answers, timeRemaining, router])

    // 7. Efeitos
    useEffect(() => {
        const loadQuiz = async () => {
            try {
                const { quizId } = await params
                const quizData = getQuizById(quizId)
                
                if (!quizData) {
                    setError('Quiz não encontrado')
                    return
                }

                setQuiz(quizData)
                
                // Inicializar timer se o quiz tiver limite de tempo
                if (quizData.timeLimit) {
                    setTimeRemaining(quizData.timeLimit * 60) // Converter para segundos
                }
                
                setIsLoading(false)
            } catch (_err) {
                setError('Erro ao carregar o quiz')
                setIsLoading(false)
            }
        }

        loadQuiz()
    }, [params])

    // Timer countdown
    useEffect(() => {
        if (timeRemaining === null || timeRemaining <= 0 || isCompleted) return

        const interval = setInterval(() => {
            setTimeRemaining((prev) => {
                if (prev === null || prev <= 1) {
                    clearInterval(interval)
                    handleCompleteQuiz()
                    return 0
                }
                return prev - 1
            })
        }, 1000)

        return () => clearInterval(interval)
    }, [timeRemaining, isCompleted, handleCompleteQuiz])

    // 8. Render
    if (isLoading) {
        return (
            <ProtectedRoute>
                <Layout>
                    <div className='min-h-screen flex items-center justify-center'>
                        <div className='text-center'>
                            <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4'></div>
                            <p className='text-gray-600'>Carregando quiz...</p>
                        </div>
                    </div>
                </Layout>
            </ProtectedRoute>
        )
    }

    if (error || !quiz) {
        return (
            <ProtectedRoute>
                <Layout>
                    <div className='min-h-screen flex items-center justify-center'>
                        <div className='text-center'>
                            <h2 className='text-2xl font-bold text-gray-900 mb-4'>Erro</h2>
                            <p className='text-gray-600 mb-6'>{error || 'Quiz não encontrado'}</p>
                            <Button variant='primary' onClick={() => router.push('/quizzes')}>
                                Voltar para Quizzes
                            </Button>
                        </div>
                    </div>
                </Layout>
            </ProtectedRoute>
        )
    }

    const currentQuestion = quiz.questions[currentQuestionIndex]
    const isAnswered = answers[currentQuestion.id] !== undefined
    const isLastQuestion = currentQuestionIndex === quiz.questions.length - 1

    return (
        <ProtectedRoute>
            <Layout>
                <div className='max-w-4xl mx-auto space-y-6'>
                    {/* Header do Quiz */}
                    <div className='bg-white rounded-lg shadow-sm p-6'>
                        <div className='flex items-center justify-between mb-4'>
                            <div>
                                <h1 className='text-2xl font-bold text-gray-900'>{quiz.title}</h1>
                                <p className='text-gray-600 mt-1'>{quiz.description}</p>
                            </div>
                            <div className='text-right'>
                                <div className='text-sm text-gray-500'>Questão</div>
                                <div className='text-lg font-semibold text-blue-600'>
                                    {currentQuestionIndex + 1} de {quiz.questions.length}
                                </div>
                            </div>
                        </div>

                        {/* Barra de Progresso */}
                        <div className='mb-4'>
                            <div className='flex justify-between text-sm text-gray-600 mb-2'>
                                <span>Progresso</span>
                                <span>{Math.round(getProgressPercentage())}%</span>
                            </div>
                            <div className='w-full bg-gray-200 rounded-full h-2'>
                                <div
                                    className='bg-blue-600 h-2 rounded-full transition-all duration-300'
                                    style={{ width: `${getProgressPercentage()}%` }}
                                />
                            </div>
                        </div>

                        {/* Timer */}
                        {timeRemaining !== null && (
                            <div className='flex items-center justify-between'>
                                <div className='text-sm text-gray-600'>
                                    Questões respondidas: {getAnsweredQuestionsCount()}/{quiz.questions.length}
                                </div>
                                <div className={`text-lg font-mono ${timeRemaining < 60 ? 'text-red-600' : 'text-gray-900'}`}>
                                    ⏱️ {formatTime(timeRemaining)}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Questão Atual */}
                    <Card className='p-6'>
                        <QuizQuestion
                            question={currentQuestion}
                            onAnswer={handleAnswer}
                            isAnswered={isAnswered}
                            userAnswer={answers[currentQuestion.id]}
                        />
                    </Card>

                    {/* Navegação */}
                    <div className='flex items-center justify-between'>
                        <Button
                            variant='outline'
                            onClick={handlePreviousQuestion}
                            disabled={currentQuestionIndex === 0}
                        >
                            ← Questão Anterior
                        </Button>

                        <div className='flex space-x-4'>
                            <Button
                                variant='outline'
                                onClick={() => router.push('/quizzes')}
                            >
                                Sair do Quiz
                            </Button>
                            
                            <Button
                                variant='primary'
                                onClick={isLastQuestion ? handleCompleteQuiz : handleNextQuestion}
                                disabled={!isAnswered}
                            >
                                {isLastQuestion ? 'Finalizar Quiz' : 'Próxima Questão →'}
                            </Button>
                        </div>
                    </div>
                </div>
            </Layout>
        </ProtectedRoute>
    )
} 