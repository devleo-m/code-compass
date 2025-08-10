'use client'

// 1. Imports
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Layout, Button, Card } from '@/shared/components'
import { ProtectedRoute } from '@/shared/components/ProtectedRoute'

// 2. Tipos/Interfaces
interface QuizAttempt {
    id: string
    quizId: string
    quizTitle: string
    score: number
    totalPoints: number
    percentage: number
    correctAnswers: number
    totalQuestions: number
    passed: boolean
    timeSpent: number
    startedAt: string
    completedAt: string
}

// 3. Componente
export default function QuizHistoryPage() {
    // 4. Estados
    const [attempts, setAttempts] = useState<QuizAttempt[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [filter, setFilter] = useState<'all' | 'passed' | 'failed'>('all')

    // 5. Hooks
    const router = useRouter()

    // 6. Efeitos
    useEffect(() => {
        const loadHistory = () => {
            try {
                const historyData = localStorage.getItem('quiz_attempts_history')
                if (historyData) {
                    const history = JSON.parse(historyData)
                    setAttempts(history.reverse()) // Mais recentes primeiro
                }
                setIsLoading(false)
            } catch (_err) {
                setIsLoading(false)
            }
        }

        loadHistory()
    }, [])

    // 7. Lógica
    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60)
        const remainingSeconds = seconds % 60
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
    }

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
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

    const filteredAttempts = attempts.filter(attempt => {
        if (filter === 'passed') return attempt.passed
        if (filter === 'failed') return !attempt.passed
        return true
    })

    const getStats = () => {
        if (attempts.length === 0) return null

        const totalAttempts = attempts.length
        const passedAttempts = attempts.filter(a => a.passed).length
        const averageScore = Math.round(attempts.reduce((sum, a) => sum + a.percentage, 0) / totalAttempts)
        const totalTime = attempts.reduce((sum, a) => sum + a.timeSpent, 0)

        return {
            totalAttempts,
            passedAttempts,
            failedAttempts: totalAttempts - passedAttempts,
            passRate: Math.round((passedAttempts / totalAttempts) * 100),
            averageScore,
            totalTime
        }
    }

    const stats = getStats()

    // 8. Render
    if (isLoading) {
        return (
            <ProtectedRoute>
                <Layout>
                    <div className='min-h-screen flex items-center justify-center'>
                        <div className='text-center'>
                            <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4'></div>
                            <p className='text-gray-600'>Carregando histórico...</p>
                        </div>
                    </div>
                </Layout>
            </ProtectedRoute>
        )
    }

    return (
        <ProtectedRoute>
            <Layout>
                <div className='max-w-6xl mx-auto space-y-6'>
                    {/* Header */}
                    <div className='bg-white rounded-lg shadow-sm p-6'>
                        <h1 className='text-3xl font-bold text-gray-900 mb-2'>Histórico de Tentativas</h1>
                        <p className='text-gray-600'>Acompanhe seu progresso em todos os quizzes</p>
                    </div>

                    {/* Estatísticas Gerais */}
                    {stats && (
                        <Card className='p-6'>
                            <h2 className='text-xl font-semibold text-gray-900 mb-4'>Estatísticas Gerais</h2>
                            <div className='grid grid-cols-2 md:grid-cols-6 gap-4'>
                                <div className='text-center'>
                                    <div className='text-2xl font-bold text-blue-600'>{stats.totalAttempts}</div>
                                    <div className='text-sm text-gray-500'>Total de Tentativas</div>
                                </div>
                                <div className='text-center'>
                                    <div className='text-2xl font-bold text-green-600'>{stats.passedAttempts}</div>
                                    <div className='text-sm text-gray-500'>Aprovado</div>
                                </div>
                                <div className='text-center'>
                                    <div className='text-2xl font-bold text-red-600'>{stats.failedAttempts}</div>
                                    <div className='text-sm text-gray-500'>Reprovado</div>
                                </div>
                                <div className='text-center'>
                                    <div className='text-2xl font-bold text-purple-600'>{stats.passRate}%</div>
                                    <div className='text-sm text-gray-500'>Taxa de Aprovação</div>
                                </div>
                                <div className='text-center'>
                                    <div className='text-2xl font-bold text-orange-600'>{stats.averageScore}%</div>
                                    <div className='text-sm text-gray-500'>Média Geral</div>
                                </div>
                                <div className='text-center'>
                                    <div className='text-2xl font-bold text-indigo-600'>{formatTime(stats.totalTime)}</div>
                                    <div className='text-sm text-gray-500'>Tempo Total</div>
                                </div>
                            </div>
                        </Card>
                    )}

                    {/* Filtros */}
                    <div className='flex flex-wrap gap-2'>
                        <Button
                            variant={filter === 'all' ? 'primary' : 'outline'}
                            onClick={() => setFilter('all')}
                        >
                            Todas ({attempts.length})
                        </Button>
                        <Button
                            variant={filter === 'passed' ? 'primary' : 'outline'}
                            onClick={() => setFilter('passed')}
                        >
                            Aprovadas ({attempts.filter(a => a.passed).length})
                        </Button>
                        <Button
                            variant={filter === 'failed' ? 'primary' : 'outline'}
                            onClick={() => setFilter('failed')}
                        >
                            Reprovadas ({attempts.filter(a => !a.passed).length})
                        </Button>
                    </div>

                    {/* Lista de Tentativas */}
                    {filteredAttempts.length === 0 ? (
                        <Card className='p-8 text-center'>
                            <div className='text-6xl mb-4'>📚</div>
                            <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                                Nenhuma tentativa encontrada
                            </h3>
                            <p className='text-gray-600 mb-6'>
                                {filter === 'all' 
                                    ? 'Você ainda não fez nenhum quiz. Comece agora!'
                                    : `Nenhuma tentativa ${filter === 'passed' ? 'aprovada' : 'reprovada'} encontrada.`
                                }
                            </p>
                            <Button variant='primary' onClick={() => router.push('/quizzes')}>
                                Ver Quizzes Disponíveis
                            </Button>
                        </Card>
                    ) : (
                        <div className='space-y-4'>
                            {filteredAttempts.map((attempt) => (
                                <Card key={attempt.id} className='p-6'>
                                    <div className='flex items-center justify-between'>
                                        <div className='flex-1'>
                                            <div className='flex items-center gap-3 mb-2'>
                                                <span className='text-2xl'>{getPerformanceIcon(attempt.percentage)}</span>
                                                <h3 className='text-lg font-semibold text-gray-900'>
                                                    {attempt.quizTitle}
                                                </h3>
                                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                    attempt.passed 
                                                        ? 'bg-green-100 text-green-800' 
                                                        : 'bg-red-100 text-red-800'
                                                }`}>
                                                    {attempt.passed ? 'Aprovado' : 'Reprovado'}
                                                </span>
                                            </div>
                                            
                                            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-sm'>
                                                <div>
                                                    <span className='text-gray-600'>Pontuação:</span>
                                                    <span className={`ml-1 font-medium ${getPerformanceColor(attempt.percentage)}`}>
                                                        {attempt.percentage}%
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className='text-gray-600'>Questões:</span>
                                                    <span className='ml-1 font-medium'>
                                                        {attempt.correctAnswers}/{attempt.totalQuestions}
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className='text-gray-600'>Tempo:</span>
                                                    <span className='ml-1 font-medium'>
                                                        {formatTime(attempt.timeSpent)}
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className='text-gray-600'>Data:</span>
                                                    <span className='ml-1 font-medium'>
                                                        {formatDate(attempt.completedAt)}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className='flex gap-2'>
                                            <Button
                                                variant='outline'
                                                size='sm'
                                                onClick={() => router.push(`/quizzes/${attempt.quizId}`)}
                                            >
                                                Tentar Novamente
                                            </Button>
                                            <Button
                                                variant='outline'
                                                size='sm'
                                                onClick={() => router.push(`/quizzes/${attempt.quizId}/results`)}
                                            >
                                                Ver Resultados
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    )}

                    {/* Ações */}
                    <div className='flex justify-center'>
                        <Button
                            variant='primary'
                            onClick={() => router.push('/quizzes')}
                        >
                            📚 Ver Todos os Quizzes
                        </Button>
                    </div>
                </div>
            </Layout>
        </ProtectedRoute>
    )
} 