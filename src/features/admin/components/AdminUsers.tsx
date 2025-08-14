'use client'

import { useEffect, useState } from 'react'
import { Card, Button } from '@/shared/components'
import { useAdminStore } from '@/shared/stores/adminStore'
import type { UserManagement } from '@/shared/types/admin'

export function AdminUsers() {
    const { 
        users, 
        isLoading, 
        error,
        loadUsers, 
        selectUser, 
        blockUser, 
        unblockUser, 
        deleteUser,
        getUserStats 
    } = useAdminStore()

    const [filterStatus, setFilterStatus] = useState<string>('all')
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        loadUsers()
    }, [loadUsers])

    // Filtrar usuários
    const filteredUsers = users.filter(user => {
        const matchesStatus = filterStatus === 'all' || user.status === filterStatus
        const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             user.email.toLowerCase().includes(searchTerm.toLowerCase())
        return matchesStatus && matchesSearch
    })

    // Obter cor do status
    const getStatusColor = (status: UserManagement['status']) => {
        switch (status) {
            case 'active':
                return 'bg-green-100 text-green-800'
            case 'inactive':
                return 'bg-yellow-100 text-yellow-800'
            case 'blocked':
                return 'bg-red-100 text-red-800'
            default:
                return 'bg-gray-100 text-gray-800'
        }
    }

    // Obter texto do status
    const getStatusText = (status: UserManagement['status']) => {
        switch (status) {
            case 'active':
                return 'Ativo'
            case 'inactive':
                return 'Inativo'
            case 'blocked':
                return 'Bloqueado'
            default:
                return status
        }
    }

    // Formatar data
    const formatDate = (date: Date) => {
        return new Intl.DateTimeFormat('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        }).format(date)
    }

    // Formatar tempo
    const formatTime = (seconds: number) => {
        const hours = Math.floor(seconds / 3600)
        const minutes = Math.floor((seconds % 3600) / 60)
        return `${hours}h ${minutes}m`
    }

    if (isLoading) {
        return (
            <div className='space-y-4'>
                {[1, 2, 3].map(i => (
                    <div key={i} className='bg-white rounded-lg shadow-sm p-6 animate-pulse'>
                        <div className='flex items-center space-x-4'>
                            <div className='w-12 h-12 bg-gray-300 rounded-full'></div>
                            <div className='flex-1'>
                                <div className='h-4 bg-gray-300 rounded mb-2'></div>
                                <div className='h-3 bg-gray-300 rounded'></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    if (error) {
        return (
            <Card className='p-6'>
                <div className='text-center'>
                    <div className='text-red-500 text-6xl mb-4'>⚠️</div>
                    <h3 className='text-xl font-semibold text-gray-900 mb-2'>Erro ao carregar usuários</h3>
                    <p className='text-gray-600 mb-4'>{error}</p>
                    <Button variant='primary' onClick={loadUsers}>
                        Tentar Novamente
                    </Button>
                </div>
            </Card>
        )
    }

    return (
        <div className='space-y-6'>
            {/* Header */}
            <div className='bg-white rounded-lg shadow-sm p-6'>
                <h2 className='text-2xl font-bold text-gray-900 mb-2'>Gerenciamento de Usuários</h2>
                <p className='text-gray-600'>Gerencie usuários, visualize estatísticas e controle acesso</p>
            </div>

            {/* Filtros */}
            <div className='bg-white rounded-lg shadow-sm p-6'>
                <div className='flex flex-wrap gap-4'>
                    {/* Busca */}
                    <div className='flex-1 min-w-64'>
                        <label htmlFor='search' className='block text-sm font-medium text-gray-700 mb-2'>
                            Buscar usuário
                        </label>
                        <input
                            id='search'
                            type='text'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder='Nome ou email...'
                            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>

                    {/* Filtro por status */}
                    <div>
                        <label htmlFor='status-filter' className='block text-sm font-medium text-gray-700 mb-2'>
                            Status
                        </label>
                        <select
                            id='status-filter'
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value)}
                            className='px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        >
                            <option value='all'>Todos os status</option>
                            <option value='active'>Ativos</option>
                            <option value='inactive'>Inativos</option>
                            <option value='blocked'>Bloqueados</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Lista de usuários */}
            <div className='space-y-4'>
                <div className='flex items-center justify-between'>
                    <h3 className='text-lg font-semibold text-gray-900'>
                        {filteredUsers.length} usuário{filteredUsers.length !== 1 ? 's' : ''} encontrado{filteredUsers.length !== 1 ? 's' : ''}
                    </h3>
                </div>

                {filteredUsers.length === 0 ? (
                    <Card className='p-6'>
                        <div className='text-center'>
                            <div className='text-gray-400 text-6xl mb-4'>👥</div>
                            <h3 className='text-xl font-semibold text-gray-900 mb-2'>Nenhum usuário encontrado</h3>
                            <p className='text-gray-600'>Tente ajustar os filtros para encontrar usuários</p>
                        </div>
                    </Card>
                ) : (
                    <div className='space-y-4'>
                        {filteredUsers.map(user => {
                            const stats = getUserStats(user.id)
                            return (
                                <Card key={user.id} className='p-6 hover:shadow-md transition-shadow'>
                                    <div className='flex items-start justify-between'>
                                        {/* Informações do usuário */}
                                        <div className='flex items-start space-x-4 flex-1'>
                                            {/* Avatar */}
                                            <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center'>
                                                <span className='text-blue-600 font-semibold text-lg'>
                                                    {user.name.charAt(0)}
                                                </span>
                                            </div>

                                            {/* Detalhes */}
                                            <div className='flex-1'>
                                                <div className='flex items-center space-x-3 mb-2'>
                                                    <h4 className='text-lg font-semibold text-gray-900'>{user.name}</h4>
                                                    <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(user.status)}`}>
                                                        {getStatusText(user.status)}
                                                    </span>
                                                    <span className='text-sm text-gray-500'>{user.type}</span>
                                                </div>
                                                
                                                <p className='text-gray-600 mb-2'>{user.email}</p>
                                                
                                                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-sm'>
                                                    <div>
                                                        <span className='text-gray-500'>Registro:</span>
                                                        <p className='font-medium'>{formatDate(user.registrationDate)}</p>
                                                    </div>
                                                    <div>
                                                        <span className='text-gray-500'>Último login:</span>
                                                        <p className='font-medium'>{formatDate(user.lastLogin)}</p>
                                                    </div>
                                                    <div>
                                                        <span className='text-gray-500'>Progresso:</span>
                                                        <p className='font-medium'>{user.progress.completedLessons}/{user.progress.totalLessons} lições</p>
                                                    </div>
                                                    <div>
                                                        <span className='text-gray-500'>Tempo total:</span>
                                                        <p className='font-medium'>{formatTime(user.activity.totalTimeSpent)}</p>
                                                    </div>
                                                </div>

                                                {stats && (
                                                    <div className='mt-3 p-3 bg-gray-50 rounded-lg'>
                                                        <h5 className='text-sm font-medium text-gray-700 mb-2'>Estatísticas Detalhadas</h5>
                                                        <div className='grid grid-cols-2 md:grid-cols-4 gap-3 text-sm'>
                                                            <div>
                                                                <span className='text-gray-500'>Média:</span>
                                                                <p className='font-medium'>{stats.averageScore}%</p>
                                                            </div>
                                                            <div>
                                                                <span className='text-gray-500'>Sequência:</span>
                                                                <p className='font-medium'>{stats.streakDays} dias</p>
                                                            </div>
                                                            <div>
                                                                <span className='text-gray-500'>Quizzes:</span>
                                                                <p className='font-medium'>{stats.quizzesTaken}</p>
                                                            </div>
                                                            <div>
                                                                <span className='text-gray-500'>Conquistas:</span>
                                                                <p className='font-medium'>{stats.achievements.length}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Ações */}
                                        <div className='flex flex-col space-y-2 ml-4'>
                                            <Button
                                                variant='outline'
                                                size='sm'
                                                onClick={() => selectUser(user.id)}
                                            >
                                                Ver Detalhes
                                            </Button>
                                            
                                            {user.status === 'active' ? (
                                                <Button
                                                    variant='outline'
                                                    size='sm'
                                                    onClick={() => blockUser(user.id)}
                                                    className='text-red-600 border-red-300 hover:bg-red-50'
                                                >
                                                    Bloquear
                                                </Button>
                                            ) : (
                                                <Button
                                                    variant='outline'
                                                    size='sm'
                                                    onClick={() => unblockUser(user.id)}
                                                    className='text-green-600 border-green-300 hover:bg-green-50'
                                                >
                                                    Desbloquear
                                                </Button>
                                            )}
                                            
                                            <Button
                                                variant='outline'
                                                size='sm'
                                                onClick={() => deleteUser(user.id)}
                                                className='text-red-600 border-red-300 hover:bg-red-50'
                                            >
                                                Deletar
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            )
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}
