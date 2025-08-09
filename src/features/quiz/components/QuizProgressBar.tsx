'use client'

// 1. Imports
import { useState, useEffect } from 'react'

// 2. Tipos/Interfaces
interface QuizProgressBarProps {
    currentQuestion: number
    totalQuestions: number
    answeredQuestions: number
    timeRemaining?: number | null
    className?: string
}

// 3. Componente
export function QuizProgressBar({
    currentQuestion,
    totalQuestions,
    answeredQuestions,
    timeRemaining,
    className = ''
}: QuizProgressBarProps) {
    // 4. Estados
    const [timeDisplay, setTimeDisplay] = useState<string>('')

    // 5. Efeitos
    useEffect(() => {
        if (timeRemaining !== null && timeRemaining !== undefined) {
            const minutes = Math.floor(timeRemaining / 60)
            const seconds = timeRemaining % 60
            setTimeDisplay(`${minutes}:${seconds.toString().padStart(2, '0')}`)
        }
    }, [timeRemaining])

    // 6. Lógica
    const progressPercentage = (currentQuestion / totalQuestions) * 100
    const answeredPercentage = (answeredQuestions / totalQuestions) * 100

    const getTimeColor = () => {
        if (!timeRemaining) return 'text-gray-900'
        if (timeRemaining < 60) return 'text-red-600'
        if (timeRemaining < 300) return 'text-yellow-600'
        return 'text-green-600'
    }

    // 7. Render
    return (
        <div className={`bg-white rounded-lg shadow-sm p-4 ${className}`}>
            {/* Informações principais */}
            <div className='flex items-center justify-between mb-4'>
                <div className='flex items-center space-x-6'>
                    <div className='text-center'>
                        <div className='text-2xl font-bold text-blue-600'>{currentQuestion}</div>
                        <div className='text-xs text-gray-500'>Questão Atual</div>
                    </div>
                    <div className='text-center'>
                        <div className='text-2xl font-bold text-green-600'>{answeredQuestions}</div>
                        <div className='text-xs text-gray-500'>Respondidas</div>
                    </div>
                    <div className='text-center'>
                        <div className='text-2xl font-bold text-gray-600'>{totalQuestions}</div>
                        <div className='text-xs text-gray-500'>Total</div>
                    </div>
                </div>

                {/* Timer */}
                {timeRemaining !== null && (
                    <div className='text-center'>
                        <div className={`text-2xl font-mono font-bold ${getTimeColor()}`}>
                            ⏱️ {timeDisplay}
                        </div>
                        <div className='text-xs text-gray-500'>Tempo Restante</div>
                    </div>
                )}
            </div>

            {/* Barra de progresso */}
            <div className='space-y-2'>
                <div className='flex justify-between text-sm text-gray-600'>
                    <span>Progresso</span>
                    <span>{Math.round(progressPercentage)}%</span>
                </div>
                <div className='w-full bg-gray-200 rounded-full h-3 relative'>
                    {/* Barra de progresso geral */}
                    <div
                        className='bg-blue-600 h-3 rounded-full transition-all duration-300'
                        style={{ width: `${progressPercentage}%` }}
                    />
                    {/* Barra de questões respondidas */}
                    <div
                        className='bg-green-500 h-3 rounded-full transition-all duration-300 absolute top-0'
                        style={{ width: `${answeredPercentage}%` }}
                    />
                </div>
                
                {/* Legendas */}
                <div className='flex items-center justify-between text-xs text-gray-500'>
                    <div className='flex items-center space-x-2'>
                        <div className='w-3 h-3 bg-blue-600 rounded'></div>
                        <span>Progresso</span>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <div className='w-3 h-3 bg-green-500 rounded'></div>
                        <span>Respondidas</span>
                    </div>
                </div>
            </div>
        </div>
    )
} 