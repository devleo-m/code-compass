'use client'

// 1. Imports
import { useState } from 'react'
import type { Badge } from '@/shared/types/learning'

// 2. Tipos/Interfaces
interface BadgeSystemProps {
    badges: Badge[]
    className?: string
}

interface BadgeCardProps {
    badge: Badge
    onClick?: () => void
    className?: string
}

// 3. Componente de badge individual
export function BadgeCard({ badge, onClick, className = '' }: BadgeCardProps) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <button
            type='button'
            className={`relative group cursor-pointer ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
        >
            {/* Badge */}
            <div className='relative'>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl ${badge.color}`}>
                    {badge.icon}
                </div>

                {/* Indicador de conquista */}
                {badge.isEarned && (
                    <div className='absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center'>
                        <svg className='w-3 h-3 text-white' fill='currentColor' viewBox='0 0 20 20' aria-hidden='true'>
                            <path
                                fillRule='evenodd'
                                d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                clipRule='evenodd'
                            />
                        </svg>
                    </div>
                )}
            </div>

            {/* Tooltip */}
            {isHovered && (
                <div className='absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap z-10'>
                    <div className='font-medium'>{badge.name}</div>
                    <div className='text-xs text-gray-300'>{badge.description}</div>
                    {badge.earnedAt && (
                        <div className='text-xs text-gray-400 mt-1'>
                            Conquistado em {new Date(badge.earnedAt).toLocaleDateString()}
                        </div>
                    )}
                    <div className='absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900'></div>
                </div>
            )}
        </button>
    )
}

// 4. Componente principal do sistema
export function BadgeSystem({ badges, className = '' }: BadgeSystemProps) {
    const earnedBadges = badges.filter((badge) => badge.isEarned)
    const lockedBadges = badges.filter((badge) => !badge.isEarned)

    return (
        <div className={`space-y-6 ${className}`}>
            {/* Header */}
            <div className='flex items-center justify-between'>
                <h3 className='text-lg font-semibold text-gray-900'>Conquistas</h3>
                <div className='text-sm text-gray-600'>
                    {earnedBadges.length}/{badges.length} conquistadas
                </div>
            </div>

            {/* Badges conquistadas */}
            {earnedBadges.length > 0 && (
                <div>
                    <h4 className='text-sm font-medium text-gray-700 mb-3'>Conquistas Desbloqueadas</h4>
                    <div className='grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4'>
                        {earnedBadges.map((badge) => (
                            <BadgeCard key={badge.id} badge={badge} />
                        ))}
                    </div>
                </div>
            )}

            {/* Badges bloqueadas */}
            {lockedBadges.length > 0 && (
                <div>
                    <h4 className='text-sm font-medium text-gray-700 mb-3'>Conquistas Bloqueadas</h4>
                    <div className='grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4'>
                        {lockedBadges.map((badge) => (
                            <BadgeCard key={badge.id} badge={badge} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

// 5. Componente de progresso de badge
export function BadgeProgress({
    badge,
    currentValue,
    targetValue,
}: {
    badge: Badge
    currentValue: number
    targetValue: number
}) {
    const percentage = Math.min((currentValue / targetValue) * 100, 100)
    const isCompleted = currentValue >= targetValue

    return (
        <div className='bg-white rounded-lg p-4 shadow-sm'>
            <div className='flex items-center space-x-3 mb-3'>
                <BadgeCard badge={badge} className='w-12 h-12' />
                <div className='flex-1'>
                    <h4 className='font-medium text-gray-900'>{badge.name}</h4>
                    <p className='text-sm text-gray-600'>{badge.description}</p>
                </div>
            </div>

            {/* Barra de progresso */}
            <div className='mb-2'>
                <div className='flex items-center justify-between text-sm mb-1'>
                    <span className='text-gray-600'>Progresso</span>
                    <span className='text-gray-900'>
                        {currentValue}/{targetValue}
                    </span>
                </div>
                <div className='w-full bg-gray-200 rounded-full h-2'>
                    <div
                        className={`h-2 rounded-full transition-all duration-300 ${
                            isCompleted ? 'bg-green-500' : 'bg-blue-500'
                        }`}
                        style={{ width: `${percentage}%` }}
                    />
                </div>
            </div>

            {/* Status */}
            <div className='flex items-center space-x-2'>
                {isCompleted ? (
                    <>
                        <svg
                            className='w-4 h-4 text-green-600'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            aria-hidden='true'
                        >
                            <path
                                fillRule='evenodd'
                                d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                clipRule='evenodd'
                            />
                        </svg>
                        <span className='text-sm text-green-600 font-medium'>Conquista desbloqueada!</span>
                    </>
                ) : (
                    <>
                        <svg
                            className='w-4 h-4 text-blue-600'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            aria-hidden='true'
                        >
                            <path
                                fillRule='evenodd'
                                d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                clipRule='evenodd'
                            />
                        </svg>
                        <span className='text-sm text-blue-600'>Continue para desbloquear</span>
                    </>
                )}
            </div>
        </div>
    )
}

// 6. Componente de notificação de conquista
export function BadgeNotification({ badge, onClose }: { badge: Badge; onClose: () => void }) {
    return (
        <div className='fixed top-4 right-4 bg-white rounded-lg shadow-lg border border-green-200 p-4 max-w-sm z-50 animate-slide-in'>
            <div className='flex items-start space-x-3'>
                <div className='w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-2xl'>
                    {badge.icon}
                </div>
                <div className='flex-1'>
                    <h4 className='font-semibold text-gray-900'>Nova Conquista!</h4>
                    <p className='text-sm text-gray-600'>{badge.name}</p>
                    <p className='text-xs text-gray-500 mt-1'>{badge.description}</p>
                </div>
                <button onClick={onClose} className='text-gray-400 hover:text-gray-600' type='button'>
                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                    </svg>
                </button>
            </div>
        </div>
    )
}

// 7. Dados de badges padrão
export const defaultBadges: Badge[] = [
    {
        id: 'first-lesson',
        name: 'Primeiro Passo',
        description: 'Complete sua primeira lição',
        icon: '🎯',
        color: 'blue',
        criteria: {
            type: 'lessons_completed',
            value: 1,
            condition: 'equals',
        },
        isEarned: false,
    },
    {
        id: 'lesson-streak',
        name: 'Consistente',
        description: 'Complete 5 lições em sequência',
        icon: '🔥',
        color: 'orange',
        criteria: {
            type: 'streak',
            value: 5,
            condition: 'equals',
        },
        isEarned: false,
    },
    {
        id: 'perfect-quiz',
        name: 'Perfeição',
        description: 'Acerte 100% em um quiz',
        icon: '⭐',
        color: 'yellow',
        criteria: {
            type: 'perfect_score',
            value: 1,
            condition: 'equals',
        },
        isEarned: false,
    },
    {
        id: 'module-complete',
        name: 'Módulo Completo',
        description: 'Complete um módulo inteiro',
        icon: '��',
        color: 'purple',
        criteria: {
            type: 'lessons_completed',
            value: 10,
            condition: 'greater_than',
        },
        isEarned: false,
    },
    {
        id: 'time-dedicated',
        name: 'Dedicado',
        description: 'Passe 2 horas estudando',
        icon: '⏰',
        color: 'green',
        criteria: {
            type: 'time_spent',
            value: 120,
            condition: 'greater_than',
        },
        isEarned: false,
    },
]
