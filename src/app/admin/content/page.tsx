'use client'

// Página de Gerenciamento de Conteúdo
// Seguindo SOLID - Single Responsibility Principle

import { Layout, ProtectedRoute } from '@/shared/components'
import { ContentManager } from '@/features/admin/components/ContentManager'

export default function AdminContentPage() {
    return (
        <ProtectedRoute requiredRole='admin'>
            <Layout>
                <ContentManager />
            </Layout>
        </ProtectedRoute>
    )
} 