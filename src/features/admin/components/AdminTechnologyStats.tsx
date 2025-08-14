'use client'

// Componente de Estatísticas por Tecnologia
// Seguindo SOLID - Single Responsibility Principle

import { Card } from '@/shared/components'
import { useAdminStore } from '@/shared/stores/adminStore'

export function AdminTechnologyStats() {
    const { technologyStats } = useAdminStore()

    const formatTime = (seconds: number) => {
        const hours = Math.floor(seconds / 3600)
        return `${hours}h`
    }

    const getTechnologyIcon = (technology: string) => {
        switch (technology.toLowerCase()) {
            case 'javascript':
                return '🟨'
            case 'react':
                return '⚛️'
            case 'typescript':
                return '🔷'
            default:
                return '📚'
        }
    }

    return (
        <Card className='p-6'>
            <h2 className='text-xl font-semibold text-gray-900 mb-6'>Estatísticas por Tecnologia</h2>

            <div className='space-y-4'>
                {technologyStats.map((tech, _index) => (
                    <div key={tech.technology} className='bg-gray-50 rounded-lg p-4'>
                        <div className='flex items-center justify-between mb-3'>
                            <div className='flex items-center space-x-3'>
                                <div className='text-2xl'>{getTechnologyIcon(tech.technology)}</div>
                                <div>
                                    <h3 className='font-semibold text-gray-900 capitalize'>{tech.technology}</h3>
                                    <p className='text-sm text-gray-600'>#{tech.popularity} em popularidade</p>
                                </div>
                            </div>
                            <div className='text-right'>
                                <div className='text-lg font-bold text-blue-600'>{tech.totalUsers} usuários</div>
                                <div className='text-sm text-gray-600'>{tech.averageProgress}% progresso</div>
                            </div>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-sm'>
                            <div className='text-center'>
                                <div className='font-semibold text-green-600'>{tech.completionRate}%</div>
                                <div className='text-gray-600'>Taxa de Conclusão</div>
                            </div>
                            <div className='text-center'>
                                <div className='font-semibold text-purple-600'>{formatTime(tech.totalTimeSpent)}</div>
                                <div className='text-gray-600'>Tempo Total</div>
                            </div>
                            <div className='text-center'>
                                <div className='font-semibold text-orange-600'>{tech.averageProgress}%</div>
                                <div className='text-gray-600'>Progresso Médio</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    )
}
