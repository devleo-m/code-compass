'use client'

// Componente de Estatísticas Detalhadas
// Seguindo SOLID - Single Responsibility Principle

import { Card } from '@/shared/components'
import type { ProgressStats as ProgressStatsType } from '@/shared/types/progress'

interface ProgressStatsProps {
    stats: ProgressStatsType
}

export function ProgressStats({ stats }: ProgressStatsProps) {
    const formatTime = (seconds: number) => {
        const hours = Math.floor(seconds / 3600)
        const minutes = Math.floor((seconds % 3600) / 60)
        return `${hours}h ${minutes}m`
    }

    return (
        <Card className='p-6'>
            <h2 className='text-xl font-semibold text-gray-900 mb-4'>Estatísticas Detalhadas</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {/* Usuários Ativos */}
                <div className='text-center p-4 bg-blue-50 rounded-lg'>
                    <div className='text-3xl font-bold text-blue-600'>{stats.activeUsers}</div>
                    <div className='text-sm text-gray-600'>Usuários Ativos</div>
                </div>

                {/* Progresso Médio */}
                <div className='text-center p-4 bg-green-50 rounded-lg'>
                    <div className='text-3xl font-bold text-green-600'>{stats.averageProgress}%</div>
                    <div className='text-sm text-gray-600'>Progresso Médio</div>
                </div>

                {/* Tempo Total */}
                <div className='text-center p-4 bg-purple-50 rounded-lg'>
                    <div className='text-3xl font-bold text-purple-600'>{formatTime(stats.totalTimeSpent)}</div>
                    <div className='text-sm text-gray-600'>Tempo Total</div>
                </div>

                {/* Tecnologia Mais Popular */}
                <div className='text-center p-4 bg-orange-50 rounded-lg'>
                    <div className='text-3xl font-bold text-orange-600 capitalize'>{stats.mostPopularTechnology}</div>
                    <div className='text-sm text-gray-600'>Tecnologia Popular</div>
                </div>

                {/* Taxa de Conclusão */}
                <div className='text-center p-4 bg-indigo-50 rounded-lg'>
                    <div className='text-3xl font-bold text-indigo-600'>{stats.completionRate}%</div>
                    <div className='text-sm text-gray-600'>Taxa de Conclusão</div>
                </div>

                {/* Total de Usuários */}
                <div className='text-center p-4 bg-pink-50 rounded-lg'>
                    <div className='text-3xl font-bold text-pink-600'>{stats.totalUsers}</div>
                    <div className='text-sm text-gray-600'>Total de Usuários</div>
                </div>
            </div>
        </Card>
    )
}
