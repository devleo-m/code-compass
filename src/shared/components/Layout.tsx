'use client'

import Link from 'next/link'
// 1. Imports
import { useState } from 'react'
import { useAuth } from '@/shared/hooks/useAuth'
import { LEARNING_PATHS, ROUTES } from '@/shared/utils/constants'
import { Breadcrumbs } from './Breadcrumbs'
import { Footer } from './Footer'

// 2. Tipos/Interfaces
interface LayoutProps {
    children: React.ReactNode
}

// 3. Componente
export function Layout({ children }: LayoutProps) {
    // 4. Estados
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    // 5. Hooks
    const { user, logout } = useAuth()

    // 6. Lógica
    const handleLogout = () => {
        logout() // Agora o logout já inclui redirecionamento automático
    }

    // 7. Render
    return (
        <div className='min-h-screen bg-gray-50'>
            {/* Header */}
            <header className='bg-white shadow-sm'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='flex justify-between items-center py-4'>
                        {/* Logo */}
                        <Link href={ROUTES.dashboard} className='text-xl font-bold text-blue-600'>
                            Code Compass
                        </Link>

                        {/* Navigation Links */}
                        <div className='hidden md:flex items-center space-x-8'>
                            <Link href='/dashboard' className='text-gray-700 hover:text-blue-600 transition-colors'>
                                Dashboard
                            </Link>
                            <Link href='/learning' className='text-gray-700 hover:text-blue-600 transition-colors'>
                                Trilhas
                            </Link>
                            <Link href='/quizzes' className='text-gray-700 hover:text-blue-600 transition-colors'>
                                Quizzes
                            </Link>
                        </div>

                        {/* User Menu */}
                        <div className='flex items-center space-x-4'>
                            <div className='flex items-center space-x-2'>
                                <div className='w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center'>
                                    <span className='text-blue-600 font-semibold text-sm'>
                                        {user?.name?.charAt(0).toUpperCase()}
                                    </span>
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-sm text-gray-700'>Olá, {user?.name}</span>
                                    <span
                                        className={`text-xs px-2 py-1 rounded-full ${
                                            user?.type === 'admin'
                                                ? 'bg-red-100 text-red-700'
                                                : 'bg-green-100 text-green-700'
                                        }`}
                                    >
                                        {user?.type === 'admin' ? '👨‍💼 Admin' : '👨‍🎓 Aluno'}
                                    </span>
                                </div>
                            </div>
                            <button
                                type='button'
                                onClick={handleLogout}
                                className='text-sm text-gray-700 hover:text-red-600'
                            >
                                Sair
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            type='button'
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className='md:hidden p-2'
                            aria-label='Abrir menu mobile'
                        >
                            <svg
                                className='w-6 h-6'
                                fill='none'
                                stroke='currentColor'
                                viewBox='0 0 24 24'
                                aria-hidden='true'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M4 6h16M4 12h16M4 18h16'
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <div className='md:hidden py-4 border-t border-gray-200'>
                            <nav className='space-y-2'>
                                <Link href={ROUTES.dashboard} className='block text-gray-700 hover:text-blue-600'>
                                    Dashboard
                                </Link>
                                <div className='space-y-1'>
                                    <div className='text-sm font-medium text-gray-900 mb-2'>Trilhas:</div>
                                    <div className='grid grid-cols-2 gap-1 pl-4'>
                                        {Object.values(LEARNING_PATHS).map((path) => (
                                            <Link
                                                key={path.id}
                                                href={`/learning/${path.id}`}
                                                className='text-sm text-gray-700 hover:text-blue-600'
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                {path.icon} {path.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                                <Link href={ROUTES.progress} className='block text-gray-700 hover:text-blue-600'>
                                    Progresso
                                </Link>
                            </nav>
                        </div>
                    )}
                </div>
            </header>

            {/* Main Content */}
            <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
                {/* Breadcrumbs */}
                <div className='mb-6'>
                    <Breadcrumbs />
                </div>

                {children}
            </main>

            {/* Footer */}
            <Footer />
        </div>
    )
}
