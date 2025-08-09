'use client'

// 1. Imports
import { useEffect, useState } from 'react'
import { ModuleList } from '@/features/learning/components/ModuleList'
import { Button, Layout } from '@/shared/components'
import { getLearningPath } from '@/shared/data/learningPaths'
import { useAuth } from '@/shared/hooks/useAuth'
import type { LearningPath } from '@/shared/types/learning'

// 2. Tipos/Interfaces
interface LearningPathPageProps {
    params: Promise<{
        pathId: string
    }>
}

// 3. Componente
export default function LearningPathPage({ params }: LearningPathPageProps) {
    // 4. Estados
    const [learningPath, setLearningPath] = useState<LearningPath | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    // 5. Hooks
    const { isAuthenticated } = useAuth()

    // 6. Lógica
    useEffect(() => {
        // Extrair pathId dos parâmetros (que agora é uma Promise)
        const extractParams = async () => {
            try {
                const resolvedParams = await params

                // Carregar trilha de aprendizado
                const path = getLearningPath(resolvedParams.pathId)
                setLearningPath(path)
                setIsLoading(false)
            } catch (error) {
                console.error('Erro ao extrair parâmetros:', error)
                setIsLoading(false)
            }
        }

        extractParams()
    }, [params])

    // 7. Render
    if (!isAuthenticated) {
        return (
            <div className='min-h-screen flex items-center justify-center'>
                <div className='text-center'>
                    <h1 className='text-2xl font-bold text-gray-900 mb-4'>Acesso Negado</h1>
                    <p className='text-gray-600 mb-4'>Você precisa estar logado para acessar esta página.</p>
                </div>
            </div>
        )
    }

    if (isLoading) {
        return (
            <Layout>
                <div className='space-y-6'>
                    <div className='animate-pulse'>
                        <div className='h-8 bg-gray-300 rounded w-1/3 mb-4'></div>
                        <div className='h-4 bg-gray-300 rounded w-2/3 mb-8'></div>
                        <div className='space-y-4'>
                            {[1, 2, 3].map((i) => (
                                <div key={i} className='bg-white rounded-lg shadow-sm p-6'>
                                    <div className='h-6 bg-gray-300 rounded w-1/2 mb-2'></div>
                                    <div className='h-4 bg-gray-300 rounded w-3/4 mb-4'></div>
                                    <div className='h-8 bg-gray-300 rounded w-1/4'></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }

    if (!learningPath) {
        return (
            <Layout>
                <div className='text-center py-12'>
                    <h1 className='text-2xl font-bold text-gray-900 mb-4'>Trilha não encontrada</h1>
                    <p className='text-gray-600 mb-6'>A trilha que você está procurando não existe.</p>
                    <Button variant='primary' onClick={() => window.history.back()}>
                        Voltar
                    </Button>
                </div>
            </Layout>
        )
    }

    return (
        <Layout>
            <div className='space-y-8'>
                {/* Header da trilha */}
                <div className='bg-white rounded-lg shadow-sm p-6'>
                    <div className='flex items-start space-x-6'>
                        {/* Ícone */}
                        <div className='w-20 h-20 rounded-full flex items-center justify-center text-4xl bg-gray-100'>
                            {learningPath.icon}
                        </div>

                        {/* Informações */}
                        <div className='flex-1'>
                            <h1 className='text-3xl font-bold text-gray-900 mb-2'>{learningPath.name}</h1>
                            <p className='text-gray-600 mb-4'>{learningPath.description}</p>

                            {/* Estatísticas */}
                            <div className='flex items-center space-x-6 text-sm text-gray-500'>
                                <div className='flex items-center space-x-2'>
                                    <svg
                                        className='w-4 h-4'
                                        fill='none'
                                        stroke='currentColor'
                                        viewBox='0 0 24 24'
                                        aria-hidden='true'
                                    >
                                        <title>Ícone de livro</title>
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth={2}
                                            d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
                                        />
                                    </svg>
                                    <span>{learningPath.totalLessons} lições</span>
                                </div>
                                <div className='flex items-center space-x-2'>
                                    <svg
                                        className='w-4 h-4'
                                        fill='none'
                                        stroke='currentColor'
                                        viewBox='0 0 24 24'
                                        aria-hidden='true'
                                    >
                                        <title>Ícone de verificação</title>
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth={2}
                                            d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                                        />
                                    </svg>
                                    <span>{learningPath.totalQuizzes} quizzes</span>
                                </div>
                                <div className='flex items-center space-x-2'>
                                    <svg
                                        className='w-4 h-4'
                                        fill='none'
                                        stroke='currentColor'
                                        viewBox='0 0 24 24'
                                        aria-hidden='true'
                                    >
                                        <title>Ícone de relógio</title>
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth={2}
                                            d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                                        />
                                    </svg>
                                    <span>{learningPath.estimatedTime} horas</span>
                                </div>
                            </div>
                        </div>

                        {/* Dificuldade */}
                        <div className='text-right'>
                            <span
                                className={`
                inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
                ${
                    learningPath.difficulty === 'beginner'
                        ? 'bg-green-100 text-green-800'
                        : learningPath.difficulty === 'intermediate'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                }
              `}
                            >
                                {learningPath.difficulty === 'beginner'
                                    ? 'Iniciante'
                                    : learningPath.difficulty === 'intermediate'
                                      ? 'Intermediário'
                                      : 'Avançado'}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Tecnologias */}
                <div className='bg-white rounded-lg shadow-sm p-6'>
                    <h3 className='text-lg font-semibold text-gray-900 mb-4'>Tecnologias abordadas</h3>
                    <div className='flex flex-wrap gap-2'>
                        {learningPath.technologies.map((tech) => (
                            <span
                                key={tech}
                                className='inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800'
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Lista de módulos */}
                <ModuleList modules={learningPath.modules} pathId={learningPath.id} />
            </div>
        </Layout>
    )
}
