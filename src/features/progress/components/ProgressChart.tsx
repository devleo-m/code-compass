'use client'

// Componente de Gráfico de Progresso
// Seguindo SOLID - Single Responsibility Principle

import { Card } from '@/shared/components'
import { useProgressStore } from '@/shared/stores/progressStore'

export function ProgressChart() {
    const { pathProgress, quizProgress } = useProgressStore()

    // Dados para o gráfico (simulado por enquanto)
    const chartData = [
        { month: 'Jan', progress: 20 },
        { month: 'Fev', progress: 35 },
        { month: 'Mar', progress: 45 },
        { month: 'Abr', progress: 60 },
        { month: 'Mai', progress: 75 },
        { month: 'Jun', progress: 85 },
    ]

    const maxProgress = Math.max(...chartData.map((d) => d.progress))

    return (
        <Card className='p-6'>
            <h2 className='text-xl font-semibold text-gray-900 mb-4'>Progresso ao Longo do Tempo</h2>

            <div className='space-y-4'>
                {/* Gráfico de Barras Simples */}
                <div className='flex items-end justify-between h-32 space-x-2'>
                    {chartData.map((data) => (
                        <div key={data.month} className='flex-1 flex flex-col items-center'>
                            <div
                                className='w-full bg-blue-500 rounded-t transition-all duration-500 hover:bg-blue-600'
                                style={{
                                    height: `${(data.progress / maxProgress) * 100}%`,
                                    minHeight: '8px',
                                }}
                            />
                            <div className='text-xs text-gray-600 mt-2'>{data.month}</div>
                            <div className='text-xs font-medium text-gray-900'>{data.progress}%</div>
                        </div>
                    ))}
                </div>

                {/* Resumo */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t'>
                    <div className='text-center'>
                        <div className='text-lg font-semibold text-blue-600'>{Object.keys(pathProgress).length}</div>
                        <div className='text-sm text-gray-600'>Trilhas Iniciadas</div>
                    </div>
                    <div className='text-center'>
                        <div className='text-lg font-semibold text-green-600'>{Object.keys(quizProgress).length}</div>
                        <div className='text-sm text-gray-600'>Quizzes Realizados</div>
                    </div>
                    <div className='text-center'>
                        <div className='text-lg font-semibold text-purple-600'>
                            {chartData[chartData.length - 1]?.progress || 0}%
                        </div>
                        <div className='text-sm text-gray-600'>Progresso Atual</div>
                    </div>
                </div>
            </div>
        </Card>
    )
}
