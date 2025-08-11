'use client'

import { useRouter, useSearchParams } from 'next/navigation'
// 1. Imports
import { useEffect, useState } from 'react'
import { Button, Card, Layout } from '@/shared/components'
import { ProtectedRoute } from '@/shared/components/ProtectedRoute'
import { getQuiz } from '@/shared/data/quizzes'
import type { QuizItem } from '@/shared/types/quiz'

// 2. Tipos/Interfaces
interface QuizResultsPageProps {
    params: Promise<{
        quizId: string
    }>
}

interface QuizResult {
    score: number
    totalPoints: number
    percentage: number
    correctAnswers: number
    totalQuestions: number
    passed: boolean
    timeSpent: number
    answers: Record<string, string[]>
}

// 3. Componente
export default function QuizResultsPage({ params }: QuizResultsPageProps) {
    // 4. Estados
    const [quiz, setQuiz] = useState<QuizItem | null>(null)
    const [results, setResults] = useState<QuizResult | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    // 5. Hooks
    const router = useRouter()
    const _searchParams = useSearchParams()

    // 6. Efeitos
    useEffect(() => {
        const loadResults = async () => {
            try {
                const { quizId } = await params
                const quizData = getQuiz(quizId)

                if (!quizData) {
                    setError('Quiz não encontrado')
                    return
                }

                setQuiz(quizData)

                // Carregar resultados reais do localStorage
                const savedResults = localStorage.getItem(`quiz_results_${quizId}`)

                if (!savedResults) {
                    setError('Resultados não encontrados. Complete o quiz primeiro.')
                    return
                }

                const resultsData: QuizResult = JSON.parse(savedResults)
                setResults(resultsData)
                setIsLoading(false)
            } catch (_err) {
                setError('Erro ao carregar os resultados')
                setIsLoading(false)
            }
        }

        loadResults()
    }, [params])

    // 7. Lógica
    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60)
        const remainingSeconds = seconds % 60
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
    }

    const getPerformanceMessage = (percentage: number) => {
        if (percentage >= 90) return 'Excelente! Você dominou o conteúdo!'
        if (percentage >= 80) return 'Muito bom! Você tem um bom conhecimento!'
        if (percentage >= 70) return 'Bom trabalho! Continue praticando!'
        if (percentage >= 60) return 'Passou! Mas pode melhorar mais.'
        if (percentage >= 50) return 'Você é ruim, vá estudar!'
        if (percentage >= 40) return 'Você é podre, seu lixo!'
        if (percentage >= 30) return 'Você é pior que uma merda, vai tomar no cu!'
        if (percentage >= 20) return 'LIXO! some daqui, você não merece ser humano!'
        if (percentage >= 10) return 'Desiste de ser programador, você não é capaz!'
        if (percentage < 10) return 'DESISTA DE SER PROGRAMADOR, VOCÊ É UM LIXO!'
        return 'Continue estudando! Você vai conseguir!'
    }

    const getPerformanceColor = (percentage: number) => {
        if (percentage >= 90) return 'text-green-600'
        if (percentage >= 80) return 'text-blue-600'
        if (percentage >= 70) return 'text-yellow-600'
        if (percentage >= 60) return 'text-orange-600'
        return 'text-red-600'
    }

    const getPerformanceIcon = (percentage: number) => {
        if (percentage >= 90) return '🏆'
        if (percentage >= 80) return '🎯'
        if (percentage >= 70) return '👍'
        if (percentage >= 60) return '✅'
        return '📚'
    }

    // 8. Render
    if (isLoading) {
        return (
            <ProtectedRoute>
                <Layout>
                    <div className='min-h-screen flex items-center justify-center'>
                        <div className='text-center'>
                            <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4'></div>
                            <p className='text-gray-600'>Carregando resultados...</p>
                        </div>
                    </div>
                </Layout>
            </ProtectedRoute>
        )
    }

    if (error || !quiz || !results) {
        return (
            <ProtectedRoute>
                <Layout>
                    <div className='min-h-screen flex items-center justify-center'>
                        <div className='text-center'>
                            <h2 className='text-2xl font-bold text-gray-900 mb-4'>Erro</h2>
                            <p className='text-gray-600 mb-6'>{error || 'Resultados não encontrados'}</p>
                            <Button variant='primary' onClick={() => router.push('/quizzes')}>
                                Voltar para Quizzes
                            </Button>
                        </div>
                    </div>
                </Layout>
            </ProtectedRoute>
        )
    }

    return (
        <ProtectedRoute>
            <Layout>
                <div className='max-w-4xl mx-auto space-y-6'>
                    {/* Header */}
                    <div className='bg-white rounded-lg shadow-sm p-6'>
                        <h1 className='text-3xl font-bold text-gray-900 mb-2'>Resultados do Quiz</h1>
                        <p className='text-gray-600'>{quiz.title}</p>
                    </div>

                    {/* Resultado Principal */}
                    <Card className='p-8 text-center'>
                        <div className='text-6xl mb-4'>{getPerformanceIcon(results.percentage)}</div>
                        <h2 className='text-2xl font-bold text-gray-900 mb-2'>
                            {results.passed ? 'Parabéns! Você passou!' : 'Continue estudando!'}
                        </h2>
                        <p className='text-lg text-gray-600 mb-6'>{getPerformanceMessage(results.percentage)}</p>

                        {/* Pontuação */}
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
                            <div className='text-center'>
                                <div className={`text-4xl font-bold ${getPerformanceColor(results.percentage)}`}>
                                    {results.percentage}%
                                </div>
                                <div className='text-sm text-gray-500'>Pontuação</div>
                            </div>
                            <div className='text-center'>
                                <div className='text-4xl font-bold text-blue-600'>
                                    {results.correctAnswers}/{results.totalQuestions}
                                </div>
                                <div className='text-sm text-gray-500'>Questões Corretas</div>
                            </div>
                            <div className='text-center'>
                                <div className='text-4xl font-bold text-green-600'>{formatTime(results.timeSpent)}</div>
                                <div className='text-sm text-gray-500'>Tempo Gasto</div>
                            </div>
                        </div>

                        {/* Barra de Progresso */}
                        <div className='mb-8'>
                            <div className='flex justify-between text-sm text-gray-600 mb-2'>
                                <span>Sua pontuação</span>
                                <span>
                                    {results.score}/{results.totalPoints} pontos
                                </span>
                            </div>
                            <div className='w-full bg-gray-200 rounded-full h-3'>
                                <div
                                    className={`h-3 rounded-full transition-all duration-300 ${
                                        results.passed ? 'bg-green-500' : 'bg-red-500'
                                    }`}
                                    style={{ width: `${results.percentage}%` }}
                                />
                            </div>
                            <div className='text-xs text-gray-500 mt-1'>
                                Pontuação mínima para aprovação: {quiz.passingScore}%
                            </div>
                        </div>
                    </Card>

                    {/* Estatísticas Detalhadas */}
                    <Card className='p-6'>
                        <h3 className='text-xl font-semibold text-gray-900 mb-4'>Estatísticas Detalhadas</h3>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <div>
                                <h4 className='font-medium text-gray-900 mb-3'>Informações do Quiz</h4>
                                <div className='space-y-2 text-sm'>
                                    <div className='flex justify-between'>
                                        <span className='text-gray-600'>Total de questões:</span>
                                        <span className='font-medium'>{results.totalQuestions}</span>
                                    </div>
                                    <div className='flex justify-between'>
                                        <span className='text-gray-600'>Questões corretas:</span>
                                        <span className='font-medium text-green-600'>{results.correctAnswers}</span>
                                    </div>
                                    <div className='flex justify-between'>
                                        <span className='text-gray-600'>Questões incorretas:</span>
                                        <span className='font-medium text-red-600'>
                                            {results.totalQuestions - results.correctAnswers}
                                        </span>
                                    </div>
                                    <div className='flex justify-between'>
                                        <span className='text-gray-600'>Taxa de acerto:</span>
                                        <span className='font-medium'>
                                            {Math.round((results.correctAnswers / results.totalQuestions) * 100)}%
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 className='font-medium text-gray-900 mb-3'>Informações de Tempo</h4>
                                <div className='space-y-2 text-sm'>
                                    <div className='flex justify-between'>
                                        <span className='text-gray-600'>Tempo gasto:</span>
                                        <span className='font-medium'>{formatTime(results.timeSpent)}</span>
                                    </div>
                                    <div className='flex justify-between'>
                                        <span className='text-gray-600'>Tempo limite:</span>
                                        <span className='font-medium'>
                                            {quiz.timeLimit ? `${quiz.timeLimit} min` : 'Sem limite'}
                                        </span>
                                    </div>
                                    <div className='flex justify-between'>
                                        <span className='text-gray-600'>Tempo médio por questão:</span>
                                        <span className='font-medium'>
                                            {formatTime(Math.round(results.timeSpent / results.totalQuestions))}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Ações */}
                    <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                        <Button variant='outline' onClick={() => router.push(`/quizzes/${quiz.id}`)}>
                            🔄 Tentar Novamente
                        </Button>
                        <Button variant='primary' onClick={() => router.push('/quizzes')}>
                            📚 Ver Outros Quizzes
                        </Button>
                        <Button variant='outline' onClick={() => router.push('/dashboard')}>
                            🏠 Voltar ao Dashboard
                        </Button>
                    </div>
                </div>
            </Layout>
        </ProtectedRoute>
    )
}
