'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
// 1. Imports
import { useEffect, useState } from 'react'
import { Button, Card, Layout } from '@/shared/components'
import { ProtectedRoute } from '@/shared/components/ProtectedRoute'
import { mockQuizzes } from '@/shared/data/quizzes'
import type { QuizItem } from '@/shared/types/quiz'

// 2. Componente
export default function QuizzesPage() {
    // 3. Estados
    const [quizzes, setQuizzes] = useState<QuizItem[]>([])
    const [filteredQuizzes, setFilteredQuizzes] = useState<QuizItem[]>([])
    const [selectedTechnology, setSelectedTechnology] = useState<string>('all')
    const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all')
    const [isLoading, setIsLoading] = useState(true)

    // 4. Hooks
    const router = useRouter()

    // 4. Efeitos
    useEffect(() => {
        // Simular carregamento
        setTimeout(() => {
            setQuizzes(mockQuizzes)
            setFilteredQuizzes(mockQuizzes)
            setIsLoading(false)
        }, 1000)
    }, [])

    useEffect(() => {
        // Filtrar quizzes
        let filtered = quizzes

        if (selectedTechnology !== 'all') {
            filtered = filtered.filter((quiz) => quiz.technology === selectedTechnology)
        }

        if (selectedDifficulty !== 'all') {
            filtered = filtered.filter((quiz) => quiz.difficulty === selectedDifficulty)
        }

        setFilteredQuizzes(filtered)
    }, [quizzes, selectedTechnology, selectedDifficulty])

    // 5. Lógica
    const getTechnologyIcon = (technology: string) => {
        switch (technology) {
            case 'javascript':
                return '🟨'
            case 'react':
                return '⚛️'
            case 'typescript':
                return '🔷'
            default:
                return '📚'
        }
    }

    const getDifficultyColor = (difficulty: QuizItem['difficulty']) => {
        switch (difficulty) {
            case 'beginner':
                return 'bg-green-100 text-green-800'
            case 'intermediate':
                return 'bg-yellow-100 text-yellow-800'
            case 'advanced':
                return 'bg-red-100 text-red-800'
            default:
                return 'bg-gray-100 text-gray-800'
        }
    }

    const getDifficultyText = (difficulty: QuizItem['difficulty']) => {
        switch (difficulty) {
            case 'beginner':
                return 'Iniciante'
            case 'intermediate':
                return 'Intermediário'
            case 'advanced':
                return 'Avançado'
            default:
                return difficulty
        }
    }

    // 6. Render
    return (
        <ProtectedRoute>
            <Layout>
                <div className='space-y-8'>
                    {/* Header */}
                    <div className='bg-white rounded-lg shadow-sm p-6'>
                        <h1 className='text-3xl font-bold text-gray-900 mb-2'>Quizzes Disponíveis</h1>
                        <p className='text-gray-600'>Teste seus conhecimentos com nossos quizzes interativos</p>
                    </div>

                    {/* Filtros */}
                    <div className='bg-white rounded-lg shadow-sm p-6'>
                        <h2 className='text-lg font-semibold text-gray-900 mb-4'>Filtros</h2>
                        <div className='flex flex-wrap gap-4'>
                            {/* Filtro por Tecnologia */}
                            <div>
                                <label
                                    htmlFor='technology-filter'
                                    className='block text-sm font-medium text-gray-700 mb-2'
                                >
                                    Tecnologia
                                </label>
                                <select
                                    id='technology-filter'
                                    value={selectedTechnology}
                                    onChange={(e) => setSelectedTechnology(e.target.value)}
                                    className='px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                                >
                                    <option value='all'>Todas as tecnologias</option>
                                    <option value='javascript'>JavaScript</option>
                                    <option value='react'>React</option>
                                    <option value='typescript'>TypeScript</option>
                                </select>
                            </div>

                            {/* Filtro por Dificuldade */}
                            <div>
                                <label
                                    htmlFor='difficulty-filter'
                                    className='block text-sm font-medium text-gray-700 mb-2'
                                >
                                    Dificuldade
                                </label>
                                <select
                                    id='difficulty-filter'
                                    value={selectedDifficulty}
                                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                                    className='px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                                >
                                    <option value='all'>Todas as dificuldades</option>
                                    <option value='beginner'>Iniciante</option>
                                    <option value='intermediate'>Intermediário</option>
                                    <option value='advanced'>Avançado</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Lista de Quizzes */}
                    <div className='space-y-6'>
                        <div className='flex items-center justify-between'>
                            <h2 className='text-xl font-semibold text-gray-900'>
                                {filteredQuizzes.length} quiz{filteredQuizzes.length !== 1 ? 'zes' : ''} encontrado
                                {filteredQuizzes.length !== 1 ? 's' : ''}
                            </h2>
                            <Button variant='outline' onClick={() => router.push('/quizzes/history')}>
                                📊 Ver Histórico
                            </Button>
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
                        ) : filteredQuizzes.length === 0 ? (
                            <div className='text-center py-12'>
                                <div className='text-6xl mb-4'>🤔</div>
                                <h3 className='text-xl font-semibold text-gray-900 mb-2'>Nenhum quiz encontrado</h3>
                                <p className='text-gray-600 mb-4'>
                                    Tente ajustar os filtros para encontrar mais quizzes
                                </p>
                                <Button
                                    variant='outline'
                                    onClick={() => {
                                        setSelectedTechnology('all')
                                        setSelectedDifficulty('all')
                                    }}
                                >
                                    Limpar Filtros
                                </Button>
                            </div>
                        ) : (
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                                {filteredQuizzes.map((quiz) => (
                                    <Card key={quiz.id} className='p-6 hover:shadow-lg transition-shadow'>
                                        <div className='text-center'>
                                            {/* Ícone da tecnologia */}
                                            <div className='text-4xl mb-4'>{getTechnologyIcon(quiz.technology)}</div>

                                            {/* Título e descrição */}
                                            <h3 className='text-xl font-bold text-gray-900 mb-2'>{quiz.title}</h3>
                                            <p className='text-gray-600 mb-4'>{quiz.description}</p>

                                            {/* Informações do quiz */}
                                            <div className='space-y-3 mb-6'>
                                                <div className='flex items-center justify-center space-x-4 text-sm text-gray-500'>
                                                    <div className='flex items-center space-x-1'>
                                                        <svg
                                                            className='w-4 h-4'
                                                            fill='none'
                                                            stroke='currentColor'
                                                            viewBox='0 0 24 24'
                                                            aria-hidden='true'
                                                        >
                                                            <path
                                                                strokeLinecap='round'
                                                                strokeLinejoin='round'
                                                                strokeWidth={2}
                                                                d='M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                                                            />
                                                        </svg>
                                                        <span>{quiz.questions.length} questões</span>
                                                    </div>
                                                    <div className='flex items-center space-x-1'>
                                                        <svg
                                                            className='w-4 h-4'
                                                            fill='none'
                                                            stroke='currentColor'
                                                            viewBox='0 0 24 24'
                                                            aria-hidden='true'
                                                        >
                                                            <path
                                                                strokeLinecap='round'
                                                                strokeLinejoin='round'
                                                                strokeWidth={2}
                                                                d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                                                            />
                                                        </svg>
                                                        <span>{quiz.estimatedTime} min</span>
                                                    </div>
                                                </div>

                                                {/* Dificuldade */}
                                                <span
                                                    className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(quiz.difficulty)}`}
                                                >
                                                    {getDifficultyText(quiz.difficulty)}
                                                </span>

                                                {/* Pontuação mínima */}
                                                <div className='text-sm text-gray-500'>
                                                    Aprovação: {quiz.passingScore}%
                                                </div>
                                            </div>

                                            {/* Botão de início */}
                                            <Link href={`/quizzes/${quiz.id}`}>
                                                <Button variant='primary' className='w-full'>
                                                    Começar Quiz
                                                </Button>
                                            </Link>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </Layout>
        </ProtectedRoute>
    )
}
