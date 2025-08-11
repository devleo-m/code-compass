'use client'

// Componente de Visão Geral do Progresso
// Seguindo SOLID - Single Responsibility Principle

import { useEffect } from 'react'
import { Card } from '@/shared/components'
import { useProgressStore } from '@/shared/stores/progressStore'
import { AchievementsList } from './AchievementsList'
import { ProgressChart } from './ProgressChart'
import { ProgressStats } from './ProgressStats'
import { RecentActivity } from './RecentActivity'

interface ProgressOverviewProps {
    userId: string
}

export function ProgressOverview({ userId }: ProgressOverviewProps) {
    const {
        initializeProgress,
        isLoading,
        error,
        getOverallProgress,
        getProgressStats,
        getCurrentStreak,
        getTotalTimeSpent,
    } = useProgressStore()

    // Inicializar progresso quando o componente montar
    useEffect(() => {
        initializeProgress(userId)
    }, [userId, initializeProgress])

    const overallProgress = getOverallProgress()
    const stats = getProgressStats()
    const currentStreak = getCurrentStreak()
    const totalTimeSpent = getTotalTimeSpent()

    if (isLoading) {
        return (
            <div className='space-y-6'>
                <div className='animate-pulse'>
                    <div className='h-8 bg-gray-200 rounded mb-4'></div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        {[1, 2, 3].map((i) => (
                            <div key={i} className='h-24 bg-gray-200 rounded'></div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <Card className='p-6'>
                <div className='text-center text-red-600'>
                    <p>Erro ao carregar progresso: {error}</p>
                </div>
            </Card>
        )
    }

    return (
        <div className='space-y-6'>
            {/* Header */}
            <div className='bg-white rounded-lg shadow-sm p-6'>
                <h1 className='text-3xl font-bold text-gray-900 mb-2'>Meu Progresso</h1>
                <p className='text-gray-600'>Acompanhe sua jornada de aprendizado</p>
            </div>

            {/* Progresso Geral */}
            <Card className='p-6'>
                <div className='flex items-center justify-between mb-4'>
                    <h2 className='text-xl font-semibold text-gray-900'>Progresso Geral</h2>
                    <div className='text-2xl font-bold text-blue-600'>{overallProgress}%</div>
                </div>

                {/* Barra de Progresso */}
                <div className='w-full bg-gray-200 rounded-full h-3 mb-4'>
                    <div
                        className='bg-blue-600 h-3 rounded-full transition-all duration-500'
                        style={{ width: `${overallProgress}%` }}
                    />
                </div>

                {/* Estatísticas Rápidas */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <div className='text-center p-4 bg-blue-50 rounded-lg'>
                        <div className='text-2xl font-bold text-blue-600'>{currentStreak}</div>
                        <div className='text-sm text-gray-600'>Dias Consecutivos</div>
                    </div>
                    <div className='text-center p-4 bg-green-50 rounded-lg'>
                        <div className='text-2xl font-bold text-green-600'>{Math.round(totalTimeSpent / 3600)}h</div>
                        <div className='text-sm text-gray-600'>Tempo Total</div>
                    </div>
                    <div className='text-center p-4 bg-purple-50 rounded-lg'>
                        <div className='text-2xl font-bold text-purple-600'>{stats.completionRate}%</div>
                        <div className='text-sm text-gray-600'>Taxa de Conclusão</div>
                    </div>
                </div>
            </Card>

            {/* Estatísticas Detalhadas */}
            <ProgressStats stats={stats} />

            {/* Gráfico de Progresso */}
            <ProgressChart />

            {/* Atividades Recentes */}
            <RecentActivity />

            {/* Conquistas */}
            <AchievementsList />
        </div>
    )
}
