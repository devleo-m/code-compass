'use client'

import Link from 'next/link'
// 1. Imports
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button, Card, Layout, ProtectedRoute } from '@/shared/components'
import { getAllLearningPaths } from '@/shared/data/learningPaths'
import { useAuth } from '@/shared/hooks/useAuth'
import type { LearningPath } from '@/shared/types/learning'

// 2. Componente
export default function DashboardPage() {
    // 3. Estados
    const [learningPaths, setLearningPaths] = useState<LearningPath[]>([])
    const [isLoading, setIsLoading] = useState(true)

    // 4. Hooks
    const { user } = useAuth()
    const router = useRouter()

    // 5. Lógica
    useEffect(() => {
        // Carregar trilhas de aprendizado
        const paths = getAllLearningPaths()
        setLearningPaths(paths)
        setIsLoading(false)
    }, [])

    // 6. Render
    return (
        <ProtectedRoute>
            <Layout>
                <div className='space-y-8'>
                    {/* Header */}
                    <div className='bg-white rounded-lg shadow-sm p-6'>
                        <div className='flex items-center justify-center justify-between'>
                            <div>
                                <h1 className='text-3xl font-bold text-gray-900'>Olá, {user?.name}! 👋</h1>
                                <p className='text-gray-600 mt-2'>Bem-vindo ao seu dashboard de aprendizado</p>
                            </div>
                            <div className='text-right'>
                                <p className='text-sm text-gray-500'>Tipo de conta</p>
                                <p className='text-lg font-semibold text-blue-600 capitalize'>{user?.type}</p>
                            </div>
                        </div>
                    </div>

                    {/* Dashboard Diferenciado por Tipo de Usuário */}
                    {user?.type === 'admin' ? (
                        <div className='text-center py-12'>
                            <h2 className='text-2xl font-bold text-gray-900 mb-4'>Painel Administrativo</h2>
                            <p className='text-gray-600 mb-6'>Use o painel administrativo para gerenciar a plataforma</p>
                            <Button variant='primary' onClick={() => router.push('/admin/dashboard')}>
                                Acessar Painel Admin
                            </Button>
                        </div>
                    ) : (
                        <StudentDashboard learningPaths={learningPaths} isLoading={isLoading} />
                    )}
                </div>
            </Layout>
        </ProtectedRoute>
    )
}

// Componente Dashboard para Alunos
function StudentDashboard({ learningPaths, isLoading }: { learningPaths: LearningPath[]; isLoading: boolean }) {
    return (
        <div className='space-y-8'>
            {/* Trilhas de Aprendizado */}
            <div className='space-y-6'>
                <div className='flex items-center justify-between'>
                    <h2 className='text-2xl font-bold text-gray-900'>Trilhas de Aprendizado</h2>
                    <Link href='/progress'>
                        <Button variant='outline'>Ver Progresso</Button>
                    </Link>
                </div>

                {isLoading ? (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {[1, 2, 3].map((i) => (
                            <div key={i} className='bg-white rounded-lg shadow-sm p-6 animate-pulse'>
                                <div className='w-16 h-16 bg-gray-300 rounded-full mb-4'></div>
                                <div className='h-4 bg-gray-300 rounded mb-2'></div>
                                <div className='h-3 bg-gray-300 rounded mb-4'></div>
                                <div className='h-8 bg-gray-300 rounded'></div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {learningPaths.map((path) => (
                            <Card key={path.id} className='p-6 hover:shadow-lg transition-shadow'>
                                <div className='text-center'>
                                    {/* Ícone */}
                                    <div className='w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl'>
                                        {path.icon}
                                    </div>

                                    {/* Título e descrição */}
                                    <h3 className='text-xl font-bold text-gray-900 mb-2'>{path.name}</h3>
                                    <p className='text-gray-600 mb-4'>{path.description}</p>

                                    {/* Estatísticas */}
                                    <div className='flex items-center justify-center space-x-4 mb-4 text-sm text-gray-500'>
                                        <div className='flex items-center space-x-1'>
                                            <svg
                                                className='w-4 h-4'
                                                fill='none'
                                                stroke='currentColor'
                                                viewBox='0 0 24 24'
                                                aria-label='Ícone de lições'
                                                role='img'
                                            >
                                                <path
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                    strokeWidth={2}
                                                    d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
                                                />
                                            </svg>
                                            <span>{path.totalLessons} lições</span>
                                        </div>
                                        <div className='flex items-center space-x-1'>
                                            <svg
                                                className='w-4 h-4'
                                                fill='none'
                                                stroke='currentColor'
                                                viewBox='0 0 24 24'
                                                aria-label='Ícone de tempo'
                                                role='img'
                                            >
                                                <path
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                    strokeWidth={2}
                                                    d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                                                />
                                            </svg>
                                            <span>{path.estimatedTime}h</span>
                                        </div>
                                    </div>

                                    {/* Dificuldade */}
                                    <div className='mb-4'>
                                        <span
                                            className={`
                      inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                      ${
                          path.difficulty === 'beginner'
                              ? 'bg-green-100 text-green-800'
                              : path.difficulty === 'intermediate'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-red-100 text-red-800'
                      }
                    `}
                                        >
                                            {path.difficulty === 'beginner'
                                                ? 'Iniciante'
                                                : path.difficulty === 'intermediate'
                                                  ? 'Intermediário'
                                                  : 'Avançado'}
                                        </span>
                                    </div>

                                    {/* Botão de ação */}
                                    <Link href={`/learning/${path.id}`} className='block'>
                                        <Button variant='primary' className='w-full'>
                                            Começar Trilha
                                        </Button>
                                    </Link>
                                </div>
                            </Card>
                        ))}
                    </div>
                )}
            </div>

            {/* Seção de atividades recentes */}
            <div className='bg-white rounded-lg shadow-sm p-6'>
                <h3 className='text-lg font-semibold text-gray-900 mb-4'>Atividades Recentes</h3>
                <div className='text-center py-8 text-gray-500'>
                    <svg
                        className='w-12 h-12 mx-auto mb-4 text-gray-300'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        aria-hidden='true'
                    >
                        {/* depois analisar esse aria-hidden acima */}
                        <title>Ícone de atividade</title>
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
                        />
                    </svg>
                    <p>Nenhuma atividade recente</p>
                    <p className='text-sm'>Comece uma trilha para ver suas atividades aqui</p>
                </div>
            </div>
        </div>
    )
}
