'use client'

// Componente Principal do Dashboard de Administração
// Seguindo SOLID - Single Responsibility Principle

import { useEffect } from 'react'
import { Card } from '@/shared/components'
import { useAdminStore } from '@/shared/stores/adminStore'
import { AdminContent } from './AdminContent'
import { AdminStats } from './AdminStats'
import { AdminTechnologyStats } from './AdminTechnologyStats'
import { AdminUsers } from './AdminUsers'

interface AdminDashboardProps {
    userId: string
}

export function AdminDashboard({ userId: _userId }: AdminDashboardProps) {
    const { initializeAdminData, isLoading, error, stats } = useAdminStore()

    // Inicializar dados quando o componente montar
    useEffect(() => {
        initializeAdminData()
    }, [initializeAdminData])

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

            {/* Estatísticas por Tecnologia */}
            <AdminTechnologyStats />

            {/* Usuários */}
            <AdminUsers />

            {/* Conteúdo */}
            <AdminContent />
        </div>
    )
}
