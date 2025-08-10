'use client'

import { useEffect } from 'react'
import { Card, Button } from '@/shared/components'
import { useAdminStore } from '@/shared/stores/adminStore'
import { AdminStats } from './AdminStats'
import { ROUTES } from '@/shared/utils/constants'
import Link from 'next/link'

interface AdminDashboardProps {
    userId: string
}

export function AdminDashboard({ userId: _userId }: AdminDashboardProps) {
    const { loadStats, isLoading, error, stats } = useAdminStore()

    // Inicializar dados quando o componente montar
    useEffect(() => {
        loadStats()
    }, [loadStats])

    if (isLoading) {
        return (
            <div className='space-y-6'>
                <div className='animate-pulse'>
                    <div className='h-8 bg-gray-200 rounded mb-4'></div>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className='h-24 bg-gray-200 rounded'></div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <Card className='p-6'>
                <div className='text-center text-red-600'>
                    <p>Erro ao carregar dashboard: {error}</p>
                </div>
            </Card>
        )
    }

    if (!stats) {
        return (
            <Card className='p-6'>
                <div className='text-center text-gray-600'>
                    <p>Nenhum dado disponível</p>
                </div>
            </Card>
        )
    }

    return (
        <div className='space-y-6'>
            {/* Header */}
            <div className='bg-white rounded-lg shadow-sm p-6'>
                <h1 className='text-3xl font-bold text-gray-900 mb-2'>Dashboard Administrativo</h1>
                <p className='text-gray-600'>Gerencie a plataforma e acompanhe as métricas</p>
            </div>

            {/* Estatísticas Principais */}
            <AdminStats stats={stats} />

            {/* Ações Rápidas */}
            <div className='bg-white rounded-lg shadow-sm p-6'>
                <h2 className='text-xl font-semibold text-gray-900 mb-4'>Ações Rápidas</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <Link href={ROUTES.ADMIN_CONTENT}>
                        <Button variant='primary' className='w-full'>
                            📝 Gerenciar Conteúdo
                        </Button>
                    </Link>
                    <Link href={ROUTES.ADMIN_USERS}>
                        <Button variant='outline' className='w-full'>
                            👥 Gerenciar Usuários
                        </Button>
                    </Link>
                    <Link href={ROUTES.QUIZZES}>
                        <Button variant='outline' className='w-full'>
                            🧠 Ver Quizzes
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Atividade Recente */}
            <div className='bg-white rounded-lg shadow-sm p-6'>
                <h2 className='text-xl font-semibold text-gray-900 mb-4'>Atividade Recente</h2>
                <div className='space-y-3'>
                    {stats.recentActivity.map((activity) => (
                        <div key={`${activity.type}-${activity.timestamp.getTime()}`} className='flex items-center space-x-3 p-3 bg-gray-50 rounded-lg'>
                            <div className='text-2xl'>
                                {activity.type === 'quiz_completed' && '✅'}
                                {activity.type === 'content_created' && '📝'}
                                {activity.type === 'user_registered' && '👤'}
                            </div>
                            <div className='flex-1'>
                                <p className='text-sm text-gray-900'>{activity.description}</p>
                                <p className='text-xs text-gray-500'>
                                    {new Intl.DateTimeFormat('pt-BR', {
                                        day: '2-digit',
                                        month: '2-digit',
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    }).format(activity.timestamp)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tecnologias Populares */}
            <div className='bg-white rounded-lg shadow-sm p-6'>
                <h2 className='text-xl font-semibold text-gray-900 mb-4'>Tecnologias Populares</h2>
                <div className='space-y-3'>
                    {stats.popularTechnologies.map((tech) => (
                        <div key={tech.name} className='flex items-center justify-between p-3 bg-gray-50 rounded-lg'>
                            <span className='font-medium text-gray-900'>{tech.name}</span>
                            <span className='text-sm text-gray-600'>{tech.count} usuários</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
