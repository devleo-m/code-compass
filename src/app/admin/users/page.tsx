'use client'

import { Layout, ProtectedRoute } from '@/shared/components'
import { AdminUsers } from '@/features/admin/components/AdminUsers'

export default function AdminUsersPage() {
    return (
        <ProtectedRoute requiredRole='admin'>
            <Layout>
                <AdminUsers />
            </Layout>
        </ProtectedRoute>
    )
} 