'use client'

// Componente de Gerenciamento de Usuários
// Seguindo SOLID - Single Responsibility Principle

import { Button, Card } from '@/shared/components'
import { useAdminStore } from '@/shared/stores/adminStore'

export function AdminUsers() {
    const { users, updateUserStatus } = useAdminStore()

    const formatDate = (date: Date) => {
        return new Date(date).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        })
    }

    const formatTime = (seconds: number) => {
        const hours = Math.floor(seconds / 3600)
        return `${hours}h`
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'active':
                return 'bg-green-100 text-green-800'
            case 'inactive':
                return 'bg-gray-100 text-gray-800'
            case 'blocked':
                return 'bg-red-100 text-red-800'
            default:
                return 'bg-gray-100 text-gray-800'
        }
    }

    const getRoleIcon = (role: string) => {
        return role === 'admin' ? '👑' : '👤'
    }

    const handleStatusChange = (userId: string, currentStatus: string) => {
        const newStatus = currentStatus === 'active' ? 'blocked' : 'active'
        updateUserStatus(userId, newStatus as any)
    }

    return (
        <Card className='p-6'>
            <h2 className='text-xl font-semibold text-gray-900 mb-6'>Gerenciamento de Usuários</h2>

            <div className='space-y-4'>
                {users.map((user) => (
                    <div key={user.id} className='bg-gray-50 rounded-lg p-4'>
                        <div className='flex items-center justify-between mb-3'>
                            <div className='flex items-center space-x-3'>
                                <div className='text-2xl'>{getRoleIcon(user.role)}</div>
                                <div>
                                    <h3 className='font-semibold text-gray-900'>{user.name}</h3>
                                    <p className='text-sm text-gray-600'>{user.email}</p>
                                </div>
                            </div>
                            <div className='text-right'>
                                <div className='flex items-center space-x-2 mb-2'>
                                    <span
                                        className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(user.status)}`}
                                    >
                                        {user.status === 'active'
                                            ? 'Ativo'
                                            : user.status === 'inactive'
                                              ? 'Inativo'
                                              : 'Bloqueado'}
                                    </span>
                                    <Button
                                        variant='outline'
                                        size='sm'
                                        onClick={() => handleStatusChange(user.id, user.status)}
                                    >
                                        {user.status === 'active' ? 'Bloquear' : 'Ativar'}
                                    </Button>
                                </div>
                                <div className='text-sm text-gray-600'>Último login: {formatDate(user.lastLogin)}</div>
                            </div>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 text-sm'>
                            <div className='text-center'>
                                <div className='font-semibold text-blue-600'>{user.progress}%</div>
                                <div className='text-gray-600'>Progresso</div>
                            </div>
                            <div className='text-center'>
                                <div className='font-semibold text-green-600'>{formatTime(user.totalTimeSpent)}</div>
                                <div className='text-gray-600'>Tempo Total</div>
                            </div>
                            <div className='text-center'>
                                <div className='font-semibold text-purple-600'>{user.quizzesCompleted}</div>
                                <div className='text-gray-600'>Quizzes</div>
                            </div>
                            <div className='text-center'>
                                <div className='font-semibold text-orange-600'>{user.lessonsCompleted}</div>
                                <div className='text-gray-600'>Lições</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {users.length === 0 && (
                <div className='text-center py-8 text-gray-500'>
                    <div className='text-4xl mb-2'>👥</div>
                    <p>Nenhum usuário encontrado</p>
                </div>
            )}
        </Card>
    )
}
