'use client'

// 1. Imports
import { Button, Card, Layout, ProtectedRoute } from '@/shared/components'
import { useAuth } from '@/shared/hooks/useAuth'

// 2. Componente
export default function AdminDashboardPage() {
    // 3. Hooks
    const { user } = useAuth()

    // 4. Render
    return (
        <ProtectedRoute requiredRole="admin">
            <Layout>
                <div className='space-y-8'>
                    {/* Header */}
                    <div className='bg-white rounded-lg shadow-sm p-6'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <h1 className='text-3xl font-bold text-gray-900'>Painel Administrativo 👨‍💼</h1>
                                <p className='text-gray-600 mt-2'>Bem-vindo, {user?.name}! Gerencie a plataforma Code Compass</p>
                            </div>
                            <div className='text-right'>
                                <p className='text-sm text-gray-500'>Tipo de conta</p>
                                <p className='text-lg font-semibold text-red-600 capitalize'>{user?.type}</p>
                            </div>
                        </div>
                    </div>

                    {/* Estatísticas da Plataforma */}
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                        <Card className='p-6 text-center'>
                            <div className='text-3xl font-bold text-blue-600 mb-2'>150</div>
                            <div className='text-gray-600'>Usuários Ativos</div>
                        </Card>
                        <Card className='p-6 text-center'>
                            <div className='text-3xl font-bold text-green-600 mb-2'>12</div>
                            <div className='text-gray-600'>Trilhas Criadas</div>
                        </Card>
                        <Card className='p-6 text-center'>
                            <div className='text-3xl font-bold text-purple-600 mb-2'>85%</div>
                            <div className='text-gray-600'>Taxa de Conclusão</div>
                        </Card>
                        <Card className='p-6 text-center'>
                            <div className='text-3xl font-bold text-orange-600 mb-2'>24</div>
                            <div className='text-gray-600'>Quizzes Ativos</div>
                        </Card>
                    </div>

                    {/* Ações de Administração */}
                    <div className='space-y-6'>
                        <h2 className='text-2xl font-bold text-gray-900'>Gerenciamento da Plataforma</h2>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                            {/* Criar Nova Trilha */}
                            <Card className='p-6 hover:shadow-lg transition-shadow'>
                                <div className='text-center'>
                                    <div className='w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4'>
                                        <svg
                                            className='w-8 h-8 text-blue-600'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                            aria-label='Ícone de adicionar'
                                            role='img'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M12 6v6m0 0v6m0-6h6m-6 0H6'
                                            />
                                        </svg>
                                    </div>
                                    <h3 className='text-xl font-bold text-gray-900 mb-2'>Criar Nova Trilha</h3>
                                    <p className='text-gray-600 mb-4'>Crie uma nova trilha de aprendizado para os usuários</p>
                                    <Button variant='primary' className='w-full'>
                                        Criar Trilha
                                    </Button>
                                </div>
                            </Card>

                            {/* Gerenciar Conteúdo */}
                            <Card className='p-6 hover:shadow-lg transition-shadow'>
                                <div className='text-center'>
                                    <div className='w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4'>
                                        <svg
                                            className='w-8 h-8 text-green-600'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                            aria-label='Ícone de editar'
                                            role='img'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
                                            />
                                        </svg>
                                    </div>
                                    <h3 className='text-xl font-bold text-gray-900 mb-2'>Editar Conteúdo</h3>
                                    <p className='text-gray-600 mb-4'>Edite trilhas, lições e quizzes existentes</p>
                                    <Button variant='outline' className='w-full'>
                                        Gerenciar Conteúdo
                                    </Button>
                                </div>
                            </Card>

                            {/* Gerenciar Usuários */}
                            <Card className='p-6 hover:shadow-lg transition-shadow'>
                                <div className='text-center'>
                                    <div className='w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4'>
                                        <svg
                                            className='w-8 h-8 text-purple-600'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                            aria-label='Ícone de usuários'
                                            role='img'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z'
                                            />
                                        </svg>
                                    </div>
                                    <h3 className='text-xl font-bold text-gray-900 mb-2'>Gerenciar Usuários</h3>
                                    <p className='text-gray-600 mb-4'>Visualize estatísticas e gerencie contas de usuários</p>
                                    <Button variant='outline' className='w-full'>
                                        Ver Usuários
                                    </Button>
                                </div>
                            </Card>

                            {/* Criar Quiz */}
                            <Card className='p-6 hover:shadow-lg transition-shadow'>
                                <div className='text-center'>
                                    <div className='w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-4'>
                                        <svg
                                            className='w-8 h-8 text-yellow-600'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                            aria-label='Ícone de quiz'
                                            role='img'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                                            />
                                        </svg>
                                    </div>
                                    <h3 className='text-xl font-bold text-gray-900 mb-2'>Criar Quiz</h3>
                                    <p className='text-gray-600 mb-4'>Crie quizzes para testar o conhecimento dos usuários</p>
                                    <Button variant='outline' className='w-full'>
                                        Criar Quiz
                                    </Button>
                                </div>
                            </Card>

                            {/* Relatórios */}
                            <Card className='p-6 hover:shadow-lg transition-shadow'>
                                <div className='text-center'>
                                    <div className='w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4'>
                                        <svg
                                            className='w-8 h-8 text-red-600'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                            aria-label='Ícone de relatórios'
                                            role='img'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                                            />
                                        </svg>
                                    </div>
                                    <h3 className='text-xl font-bold text-gray-900 mb-2'>Relatórios</h3>
                                    <p className='text-gray-600 mb-4'>Visualize relatórios detalhados da plataforma</p>
                                    <Button variant='outline' className='w-full'>
                                        Ver Relatórios
                                    </Button>
                                </div>
                            </Card>

                            {/* Configurações */}
                            <Card className='p-6 hover:shadow-lg transition-shadow'>
                                <div className='text-center'>
                                    <div className='w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4'>
                                        <svg
                                            className='w-8 h-8 text-gray-600'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                            aria-label='Ícone de configurações'
                                            role='img'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
                                            />
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                                            />
                                        </svg>
                                    </div>
                                    <h3 className='text-xl font-bold text-gray-900 mb-2'>Configurações</h3>
                                    <p className='text-gray-600 mb-4'>Configure parâmetros da plataforma</p>
                                    <Button variant='outline' className='w-full'>
                                        Configurar
                                    </Button>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </Layout>
        </ProtectedRoute>
    )
} 