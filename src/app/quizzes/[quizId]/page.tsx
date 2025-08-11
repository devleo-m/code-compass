'use client'

import { useRouter } from 'next/navigation'
// 1. Imports
import { useCallback, useEffect, useState } from 'react'
import { QuizQuestion } from '@/features/quiz/components/QuizQuestion'
import { Button, Card, Layout } from '@/shared/components'
import { ProtectedRoute } from '@/shared/components/ProtectedRoute'
import { getQuiz } from '@/shared/data/quizzes'
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
    const [isTimerPaused, setIsTimerPaused] = useState(false)
    const [showTimeWarning, setShowTimeWarning] = useState(false)

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
        _setAnswers((prev) => ({ ...prev, [questionId]: selectedAnswers }))
    }

    const handleNextQuestion = () => {
        if (!quiz) return
        if (currentQuestionIndex < quiz.questions.length - 1) {
            _setCurrentQuestionIndex((prev) => prev + 1)
        }
    }

    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            _setCurrentQuestionIndex((prev) => prev - 1)
        }
    }

    const toggleTimerPause = () => {
        setIsTimerPaused((prev) => !prev)
    }

    const getTimerColor = () => {
        if (!timeRemaining) return 'text-gray-900'
        if (timeRemaining < 30) return 'text-red-600 animate-pulse'
        if (timeRemaining < 60) return 'text-orange-600'
        if (timeRemaining < 120) return 'text-yellow-600'
        return 'text-green-600'
    }

    const getTimerIcon = () => {
        if (!timeRemaining) return '⏱️'
        if (timeRemaining < 30) return '🚨'
        if (timeRemaining < 60) return '⚠️'
        if (timeRemaining < 120) return '⏰'
        return '⏱️'
    }

    const handleCompleteQuiz = useCallback(() => {
        if (!quiz) return

        let correctAnswers = 0
        let totalPoints = 0

        quiz.questions.forEach((question) => {
            const userAnswer = answers[question.id]
            if (userAnswer) {
                const correctAnswer = Array.isArray(question.correctAnswer)
                    ? question.correctAnswer
                    : [question.correctAnswer]

                const isCorrect =
                    correctAnswer.every((answer: string) => userAnswer.includes(answer)) &&
                    userAnswer.length === correctAnswer.length

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
            timeSpent: quiz.timeLimit ? quiz.timeLimit * 60 - (timeRemaining || 0) : 0,
            answers,
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
            timeSpent: quiz.timeLimit ? quiz.timeLimit * 60 - (timeRemaining || 0) : 0,
            startedAt: new Date().toISOString(),
            completedAt: new Date().toISOString(),
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
                const quizData = getQuiz(quizId)

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
        if (timeRemaining === null || timeRemaining <= 0 || isCompleted || isTimerPaused) return

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
    }, [timeRemaining, isCompleted, handleCompleteQuiz, isTimerPaused])

    // Alertas de tempo
    useEffect(() => {
        if (timeRemaining !== null && timeRemaining <= 60 && timeRemaining > 0) {
            setShowTimeWarning(true)
            const timeout = setTimeout(() => setShowTimeWarning(false), 3000)
            return () => clearTimeout(timeout)
        }
    }, [timeRemaining])

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
                            <div className='space-y-3'>
                                {/* Alerta de tempo */}
                                {showTimeWarning && (
                                    <div className='bg-red-50 border border-red-200 rounded-lg p-3 animate-pulse'>
                                        <div className='flex items-center justify-center text-red-700'>
                                            <span className='text-lg mr-2'>⚠️</span>
                                            <span className='font-medium'>Tempo acabando! Apresse-se!</span>
                                        </div>
                                    </div>
                                )}

                                <div className='flex items-center justify-between'>
                                    <div className='text-sm text-gray-600'>
                                        Questões respondidas: {getAnsweredQuestionsCount()}/{quiz.questions.length}
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <div className={`text-lg font-mono ${getTimerColor()}`}>
                                            {getTimerIcon()} {formatTime(timeRemaining)}
                                        </div>
                                        <Button
                                            variant='outline'
                                            size='sm'
                                            onClick={toggleTimerPause}
                                            className='px-3 py-1 text-sm'
                                        >
                                            {isTimerPaused ? '▶️ Retomar' : '⏸️ Pausar'}
                                        </Button>
                                    </div>
                                </div>

                                {/* Barra de progresso do tempo */}
                                <div className='w-full bg-gray-200 rounded-full h-1'>
                                    <div
                                        className={`h-1 rounded-full transition-all duration-300 ${
                                            timeRemaining < 30
                                                ? 'bg-red-500'
                                                : timeRemaining < 60
                                                  ? 'bg-orange-500'
                                                  : timeRemaining < 120
                                                    ? 'bg-yellow-500'
                                                    : 'bg-green-500'
                                        }`}
                                        style={{
                                            width: `${quiz.timeLimit ? (timeRemaining / (quiz.timeLimit * 60)) * 100 : 0}%`,
                                        }}
                                    />
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
                            <Button variant='outline' onClick={() => router.push('/quizzes')}>
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
