'use client'

// Página Principal do Sistema de Administração
// Seguindo DDD e Clean Architecture

import { Layout } from '@/shared/components'
import { ProtectedRoute } from '@/shared/components/ProtectedRoute'
import { AdminDashboard } from '@/features/admin/components/AdminDashboard'
import { useAuth } from '@/shared/hooks/useAuth'

export default function AdminPage() {
    const { user } = useAuth()
    
    // Verificar se o usuário é admin
    if (!user || user.type !== 'admin') {
        return (
            <ProtectedRoute>
                <Layout>
                    <div className='min-h-screen flex items-center justify-center'>
                        <div className='text-center'>
                            <div className='text-6xl mb-4'>🚫</div>
                            <h2 className='text-2xl font-bold text-gray-900 mb-4'>Acesso Negado</h2>
                            <p className='text-gray-600 mb-6'>
                                Você não tem permissão para acessar esta área.
                            </p>
                        </div>
                    </div>
                </Layout>
            </ProtectedRoute>
        )
    }
    
    if (!user) {
        return (
            <ProtectedRoute>
                <Layout>
                    <div className='min-h-screen flex items-center justify-center'>
                        <div className='text-center'>
                            <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4'></div>
                            <p className='text-gray-600'>Carregando...</p>
                        </div>
                    </div>
                </Layout>
            </ProtectedRoute>
        )
    }

    return (
        <ProtectedRoute>
            <Layout>
                <div className='max-w-7xl mx-auto py-6'>
                    <AdminDashboard userId={user.id} />
                </div>
            </Layout>
        </ProtectedRoute>
    )
} 