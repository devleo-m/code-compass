'use client'

// Componente de Atividades Recentes
// Seguindo SOLID - Single Responsibility Principle

import { Card } from '@/shared/components'

export function RecentActivity() {
    // Simular atividades recentes
    const recentActivities = [
        {
            id: '1',
            type: 'lesson_completed',
            title: 'Variáveis e Tipos',
            description: 'Lição completada em JavaScript',
            timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 horas atrás
            icon: '📚'
        },
        {
            id: '2',
            type: 'quiz_completed',
            title: 'Quiz JavaScript Básico',
            description: 'Pontuação: 85%',
            timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 horas atrás
            icon: '✅'
        },
        {
            id: '3',
            type: 'achievement_earned',
            title: 'Primeiro Passo',
            description: 'Conquista desbloqueada',
            timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 horas atrás
            icon: '🏆'
        }
    ]

    const formatTimeAgo = (date: Date) => {
        const now = new Date()
        const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))
        
        if (diffInHours < 1) return 'Agora mesmo'
        if (diffInHours === 1) return '1 hora atrás'
        if (diffInHours < 24) return `${diffInHours} horas atrás`
        
        const diffInDays = Math.floor(diffInHours / 24)
        if (diffInDays === 1) return '1 dia atrás'
        return `${diffInDays} dias atrás`
    }

    return (
        <Card className='p-6'>
            <h2 className='text-xl font-semibold text-gray-900 mb-4'>Atividades Recentes</h2>
            
            <div className='space-y-4'>
                {recentActivities.map((activity) => (
                    <div key={activity.id} className='flex items-start space-x-3 p-3 bg-gray-50 rounded-lg'>
                        <div className='text-2xl'>{activity.icon}</div>
                        <div className='flex-1'>
                            <div className='font-medium text-gray-900'>{activity.title}</div>
                            <div className='text-sm text-gray-600'>{activity.description}</div>
                            <div className='text-xs text-gray-500 mt-1'>
                                {formatTimeAgo(activity.timestamp)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {recentActivities.length === 0 && (
                <div className='text-center py-8 text-gray-500'>
                    <div className='text-4xl mb-2'>📝</div>
                    <p>Nenhuma atividade recente</p>
                </div>
            )}
        </Card>
    )
} 