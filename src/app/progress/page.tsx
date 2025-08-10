'use client'

// Página Principal do Sistema de Progresso
// Seguindo DDD e Clean Architecture

import { ProgressOverview } from '@/features/progress/components/ProgressOverview'
import { Layout } from '@/shared/components'
import { ProtectedRoute } from '@/shared/components/ProtectedRoute'
import { useAuth } from '@/shared/hooks/useAuth'

export default function ProgressPage() {
    const { user } = useAuth()

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
                <div className='max-w-6xl mx-auto py-6'>
                    <ProgressOverview userId={user.id} />
                </div>
            </Layout>
        </ProtectedRoute>
    )
}
