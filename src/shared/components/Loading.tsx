'use client'

// 1. Imports
import { useEffect, useState } from 'react'

// 2. Tipos/Interfaces
interface LoadingProps {
    size?: 'sm' | 'md' | 'lg'
    text?: string
    fullScreen?: boolean
    className?: string
}

// 3. Componente
export function Loading({ size = 'md', text = 'Carregando...', fullScreen = false, className = '' }: LoadingProps) {
    // 4. Estados
    const [dots, setDots] = useState('')

    // 5. Efeitos
    useEffect(() => {
        const interval = setInterval(() => {
            setDots((prev) => (prev.length >= 3 ? '' : prev + '.'))
        }, 500)

        return () => clearInterval(interval)
    }, [])

    // 6. Lógica
    const spinnerSizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-8 h-8',
        lg: 'w-12 h-12',
    }

    // 7. Render
    const spinner = (
        <div
            className={`animate-spin rounded-full border-2 border-gray-300 border-t-blue-600 ${spinnerSizeClasses[size]}`}
        />
    )

    const content = (
        <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
            {spinner}
            {text && (
                <p className='text-gray-600 text-sm font-medium'>
                    {text}
                    {dots}
                </p>
            )}
        </div>
    )

    if (fullScreen) {
        return (
            <div className='fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50'>{content}</div>
        )
    }

    return content
}

// 8. Componente de Loading para Páginas
export function PageLoading() {
    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-50'>
            <Loading size='lg' text='Carregando página' />
        </div>
    )
}

// 9. Componente de Loading para Botões
export function ButtonLoading({ size = 'sm' }: { size?: 'sm' | 'md' | 'lg' }) {
    return (
        <div className='flex items-center space-x-2'>
            <Loading size={size} text='' />
            <span>Carregando...</span>
        </div>
    )
}

// 10. Componente de Loading para Cards
export function CardLoading() {
    return (
        <div className='bg-white rounded-lg shadow-md p-6 animate-pulse'>
            <div className='flex items-center space-x-4'>
                <div className='w-12 h-12 bg-gray-300 rounded-full'></div>
                <div className='flex-1 space-y-2'>
                    <div className='h-4 bg-gray-300 rounded w-3/4'></div>
                    <div className='h-3 bg-gray-300 rounded w-1/2'></div>
                </div>
            </div>
        </div>
    )
}
