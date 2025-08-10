'use client'

// Componente de Lista de Conquistas
// Seguindo SOLID - Single Responsibility Principle

import { Card } from '@/shared/components'
import { useProgressStore } from '@/shared/stores/progressStore'

export function AchievementsList() {
    const { getAchievements } = useProgressStore()
    const achievements = getAchievements()

    // Conquistas padrão se não houver nenhuma
    const defaultAchievements = [
        {
            id: 'first_lesson',
            title: 'Primeiro Passo',
            description: 'Complete sua primeira lição',
            icon: '🎯',
            category: 'learning' as const,
            isEarned: true,
            earnedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
        },
        {
            id: 'first_quiz',
            title: 'Teste de Conhecimento',
            description: 'Complete seu primeiro quiz',
            icon: '✅',
            category: 'quiz' as const,
            isEarned: true,
            earnedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)
        },
        {
            id: 'streak_3',
            title: 'Consistência',
            description: 'Estude por 3 dias consecutivos',
            icon: '🔥',
            category: 'streak' as const,
            isEarned: false,
            earnedAt: new Date()
        },
        {
            id: 'perfect_score',
            title: 'Perfeição',
            description: 'Obtenha 100% em um quiz',
            icon: '🏆',
            category: 'quiz' as const,
            isEarned: false,
            earnedAt: new Date()
        }
    ]

    const displayAchievements = achievements.length > 0 ? achievements : defaultAchievements

    const getAchievementColor = (isEarned: boolean) => {
        return isEarned 
            ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white' 
            : 'bg-gray-100 text-gray-400'
    }

    const formatDate = (date: Date) => {
        return date.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        })
    }

    return (
        <Card className='p-6'>
            <h2 className='text-xl font-semibold text-gray-900 mb-4'>Conquistas</h2>
            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {displayAchievements.map((achievement) => (
                    <div 
                        key={achievement.id} 
                        className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                            achievement.isEarned 
                                ? 'border-yellow-400 shadow-lg' 
                                : 'border-gray-200'
                        }`}
                    >
                        <div className='flex items-start space-x-3'>
                            <div className={`text-3xl p-2 rounded-full ${getAchievementColor(achievement.isEarned)}`}>
                                {achievement.icon}
                            </div>
                            <div className='flex-1'>
                                <h3 className={`font-semibold ${
                                    achievement.isEarned ? 'text-gray-900' : 'text-gray-500'
                                }`}>
                                    {achievement.title}
                                </h3>
                                <p className={`text-sm ${
                                    achievement.isEarned ? 'text-gray-600' : 'text-gray-400'
                                }`}>
                                    {achievement.description}
                                </p>
                                {achievement.isEarned && (
                                    <p className='text-xs text-gray-500 mt-1'>
                                        Conquistado em {formatDate(achievement.earnedAt)}
                                    </p>
                                )}
                            </div>
                            {achievement.isEarned && (
                                <div className='text-yellow-500 text-xl'>✨</div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {displayAchievements.length === 0 && (
                <div className='text-center py-8 text-gray-500'>
                    <div className='text-4xl mb-2'>🏆</div>
                    <p>Nenhuma conquista disponível</p>
                </div>
            )}
        </Card>
    )
} 