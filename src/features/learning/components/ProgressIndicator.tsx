'use client'

// 1. Imports
import type { Badge, UserProgress } from '@/shared/types/learning'

// 2. Tipos/Interfaces
interface ProgressIndicatorProps {
    progress: UserProgress
    className?: string
}

interface ProgressStatsProps {
    completed: number
    total: number
    label: string
    icon: React.ReactNode
    className?: string
}

// 3. Componente de estatísticas
function ProgressStats({ completed, total, label, icon, className = '' }: ProgressStatsProps) {
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0

    return (
        <div className={`bg-white rounded-lg p-4 shadow-sm ${className}`}>
            <div className='flex items-center space-x-3'>
                <div className='w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center'>{icon}</div>
                <div className='flex-1'>
                    <p className='text-sm font-medium text-gray-900'>{label}</p>
                    <p className='text-2xl font-bold text-blue-600'>
                        {completed}/{total}
                    </p>
                    <p className='text-xs text-gray-500'>{percentage}% completo</p>
                </div>
            </div>
        </div>
    )
}

// 4. Componente principal
export function ProgressIndicator({ progress, className = '' }: ProgressIndicatorProps) {
    // 5. Lógica
    const getProgressColor = (percentage: number) => {
        if (percentage >= 80) return 'bg-green-500'
        if (percentage >= 50) return 'bg-yellow-500'
        return 'bg-blue-500'
    }

    const getProgressText = (percentage: number) => {
        if (percentage >= 80) return 'Excelente!'
        if (percentage >= 50) return 'Bom progresso!'
        if (percentage >= 25) return 'Continue assim!'
        return 'Vamos começar!'
    }

    // 6. Render
    return (
        <div className={`space-y-6 ${className}`}>
            {/* Progresso geral */}
            <div className='bg-white rounded-lg p-6 shadow-sm'>
                <div className='flex items-center justify-between mb-4'>
                    <h3 className='text-lg font-semibold text-gray-900'>Progresso Geral</h3>
                    <span className='text-sm text-gray-500'>{Math.round(progress.overallProgress)}%</span>
                </div>

                {/* Barra de progresso principal */}
                <div className='mb-4'>
                    <div className='w-full bg-gray-200 rounded-full h-3'>
                        <div
                            className={`h-3 rounded-full transition-all duration-500 ${getProgressColor(progress.overallProgress)}`}
                            style={{ width: `${progress.overallProgress}%` }}
                        />
                    </div>
                </div>

                {/* Texto motivacional */}
                <p className='text-sm text-gray-600'>{getProgressText(progress.overallProgress)}</p>
            </div>

            {/* Estatísticas detalhadas */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <ProgressStats
                    completed={progress.completedLessons}
                    total={progress.totalLessons}
                    label='Lições Concluídas'
                    icon={
                        <svg className='w-5 h-5 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
                            />
                        </svg>
                    }
                />

                <ProgressStats
                    completed={progress.completedQuizzes}
                    total={progress.totalQuizzes}
                    label='Quizzes Concluídos'
                    icon={
                        <svg className='w-5 h-5 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                            />
                        </svg>
                    }
                />
            </div>

            {/* Badges conquistadas */}
            {progress.badges.length > 0 && (
                <div className='bg-white rounded-lg p-6 shadow-sm'>
                    <h3 className='text-lg font-semibold text-gray-900 mb-4'>Conquistas</h3>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                        {progress.badges.map((badge) => (
                            <BadgeCard key={badge.id} badge={badge} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

// 7. Componente de badge
function BadgeCard({ badge }: { badge: Badge }) {
    return (
        <div className='text-center p-4 bg-gray-50 rounded-lg'>
            <div className={`w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center text-2xl`}>
                {badge.icon}
            </div>
            <h4 className='text-sm font-medium text-gray-900 mb-1'>{badge.name}</h4>
            <p className='text-xs text-gray-600'>{badge.description}</p>
            {badge.earnedAt && (
                <p className='text-xs text-gray-500 mt-2'>
                    Conquistado em {new Date(badge.earnedAt).toLocaleDateString()}
                </p>
            )}
        </div>
    )
}

// 8. Componente de progresso circular
export function CircularProgress({ percentage, size = 120 }: { percentage: number; size?: number }) {
    const radius = (size - 20) / 2
    const circumference = 2 * Math.PI * radius
    const strokeDasharray = circumference
    const strokeDashoffset = circumference - (percentage / 100) * circumference

    return (
        <div className='relative inline-block'>
            <svg width={size} height={size} className='transform -rotate-90'>
                {/* Círculo de fundo */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke='currentColor'
                    strokeWidth='8'
                    fill='transparent'
                    className='text-gray-200'
                />

                {/* Círculo de progresso */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke='currentColor'
                    strokeWidth='8'
                    fill='transparent'
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap='round'
                    className='text-blue-600 transition-all duration-500'
                />
            </svg>

            {/* Texto central */}
            <div className='absolute inset-0 flex items-center justify-center'>
                <div className='text-center'>
                    <div className='text-2xl font-bold text-gray-900'>{Math.round(percentage)}%</div>
                    <div className='text-sm text-gray-600'>Completo</div>
                </div>
            </div>
        </div>
    )
}

// 9. Componente de meta de progresso
export function ProgressGoal({ current, target, label }: { current: number; target: number; label: string }) {
    const percentage = Math.min((current / target) * 100, 100)

    return (
        <div className='bg-white rounded-lg p-4 shadow-sm'>
            <div className='flex items-center justify-between mb-2'>
                <span className='text-sm font-medium text-gray-700'>{label}</span>
                <span className='text-sm text-gray-600'>
                    {current}/{target}
                </span>
            </div>

            <div className='w-full bg-gray-200 rounded-full h-2'>
                <div
                    className='bg-blue-600 h-2 rounded-full transition-all duration-300'
                    style={{ width: `${percentage}%` }}
                />
            </div>

            <p className='text-xs text-gray-500 mt-1'>{Math.round(percentage)}% da meta alcançada</p>
        </div>
    )
}
