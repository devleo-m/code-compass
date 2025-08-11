'use client'

// Componente de Estatísticas Principais do Admin
// Seguindo SOLID - Single Responsibility Principle

import { Card } from '@/shared/components'
import type { AdminStats as AdminStatsType } from '@/shared/types/admin'

interface AdminStatsProps {
    stats: AdminStatsType
}

export function AdminStats({ stats }: AdminStatsProps) {
    const formatTime = (seconds: number) => {
        const hours = Math.floor(seconds / 3600)
        const days = Math.floor(hours / 24)
        if (days > 0) return `${days}d ${hours % 24}h`
        return `${hours}h`
    }

    const formatNumber = (num: number) => {
        if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
        if (num >= 1000) return `${(num / 1000).toFixed(1)}K`
        return num.toString()
    }

    const statsItems = [
        {
            title: 'Total de Usuários',
            value: formatNumber(stats.totalUsers),
            icon: '👥',
            color: 'bg-blue-500',
            description: `${stats.activeUsers} ativos`,
        },
        {
            title: 'Trilhas de Aprendizado',
            value: stats.totalLearningPaths.toString(),
            icon: '📚',
            color: 'bg-green-500',
            description: `${stats.totalLessons} lições`,
        },
        {
            title: 'Quizzes',
            value: stats.totalQuizzes.toString(),
            icon: '✅',
            color: 'bg-purple-500',
            description: 'Disponíveis',
        },
        {
            title: 'Progresso Médio',
            value: `${stats.averageProgress}%`,
            icon: '📊',
            color: 'bg-orange-500',
            description: `${stats.completionRate}% conclusão`,
        },
        {
            title: 'Tempo Total',
            value: formatTime(stats.totalTimeSpent),
            icon: '⏱️',
            color: 'bg-indigo-500',
            description: 'De estudo',
        },
        {
            title: 'Tecnologia Popular',
            value: stats.mostPopularTechnology.toUpperCase(),
            icon: '🔥',
            color: 'bg-red-500',
            description: 'Mais acessada',
        },
    ]

    return (
        <Card className='p-6'>
            <h2 className='text-xl font-semibold text-gray-900 mb-6'>Estatísticas da Plataforma</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {statsItems.map((item) => (
                    <div key={item.title} className='bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow'>
                        <div className='flex items-center justify-between mb-3'>
                            <div
                                className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center text-white text-xl`}
                            >
                                {item.icon}
                            </div>
                            <div className='text-right'>
                                <div className='text-2xl font-bold text-gray-900'>{item.value}</div>
                                <div className='text-sm text-gray-600'>{item.title}</div>
                            </div>
                        </div>
                        <div className='text-xs text-gray-500'>{item.description}</div>
                    </div>
                ))}
            </div>

            {/* Resumo Rápido */}
            <div className='mt-6 pt-6 border-t border-gray-200'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-center'>
                    <div>
                        <div className='text-lg font-semibold text-green-600'>
                            {Math.round((stats.activeUsers / stats.totalUsers) * 100)}%
                        </div>
                        <div className='text-sm text-gray-600'>Taxa de Atividade</div>
                    </div>
                    <div>
                        <div className='text-lg font-semibold text-blue-600'>
                            {Math.round(stats.totalTimeSpent / stats.totalUsers / 3600)}h
                        </div>
                        <div className='text-sm text-gray-600'>Tempo Médio por Usuário</div>
                    </div>
                    <div>
                        <div className='text-lg font-semibold text-purple-600'>
                            {Math.round(((stats.totalLessons + stats.totalQuizzes) / stats.totalUsers) * 10) / 10}
                        </div>
                        <div className='text-sm text-gray-600'>Conteúdo por Usuário</div>
                    </div>
                </div>
            </div>
        </Card>
    )
}
