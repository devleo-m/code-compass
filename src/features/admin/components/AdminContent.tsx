'use client'

// Componente de Gerenciamento de Conteúdo
// Seguindo SOLID - Single Responsibility Principle

import { Button, Card } from '@/shared/components'
import { useAdminStore } from '@/shared/stores/adminStore'

export function AdminContent() {
    const { content, updateContentStatus } = useAdminStore()

    const formatDate = (date: Date) => {
        return new Date(date).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        })
    }

    const getContentIcon = (type: string) => {
        switch (type) {
            case 'learning_path':
                return '📚'
            case 'quiz':
                return '✅'
            case 'lesson':
                return '📖'
            default:
                return '📄'
        }
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'published':
                return 'bg-green-100 text-green-800'
            case 'draft':
                return 'bg-yellow-100 text-yellow-800'
            case 'archived':
                return 'bg-gray-100 text-gray-800'
            default:
                return 'bg-gray-100 text-gray-800'
        }
    }

    const getTechnologyIcon = (technology: string) => {
        switch (technology.toLowerCase()) {
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

    const handleStatusChange = (contentId: string, currentStatus: string) => {
        const newStatus = currentStatus === 'published' ? 'draft' : 'published'
        updateContentStatus(contentId, newStatus as any)
    }

    return (
        <Card className='p-6'>
            <h2 className='text-xl font-semibold text-gray-900 mb-6'>Gerenciamento de Conteúdo</h2>

            <div className='space-y-4'>
                {content.map((item) => (
                    <div key={item.id} className='bg-gray-50 rounded-lg p-4'>
                        <div className='flex items-center justify-between mb-3'>
                            <div className='flex items-center space-x-3'>
                                <div className='text-2xl'>{getContentIcon(item.type)}</div>
                                <div>
                                    <h3 className='font-semibold text-gray-900'>{item.title}</h3>
                                    <div className='flex items-center space-x-2 text-sm text-gray-600'>
                                        <span>
                                            {getTechnologyIcon(item.technology)} {item.technology}
                                        </span>
                                        <span>•</span>
                                        <span className='capitalize'>{item.type.replace('_', ' ')}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='text-right'>
                                <div className='flex items-center space-x-2 mb-2'>
                                    <span
                                        className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}
                                    >
                                        {item.status === 'published'
                                            ? 'Publicado'
                                            : item.status === 'draft'
                                              ? 'Rascunho'
                                              : 'Arquivado'}
                                    </span>
                                    <Button
                                        variant='outline'
                                        size='sm'
                                        onClick={() => handleStatusChange(item.id, item.status)}
                                    >
                                        {item.status === 'published' ? 'Arquivar' : 'Publicar'}
                                    </Button>
                                </div>
                                <div className='text-sm text-gray-600'>Criado em: {formatDate(item.createdAt)}</div>
                            </div>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 text-sm'>
                            <div className='text-center'>
                                <div className='font-semibold text-blue-600'>{item.views}</div>
                                <div className='text-gray-600'>Visualizações</div>
                            </div>
                            <div className='text-center'>
                                <div className='font-semibold text-green-600'>{item.completions}</div>
                                <div className='text-gray-600'>Conclusões</div>
                            </div>
                            <div className='text-center'>
                                <div className='font-semibold text-purple-600'>{item.averageRating.toFixed(1)}</div>
                                <div className='text-gray-600'>Avaliação</div>
                            </div>
                            <div className='text-center'>
                                <div className='font-semibold text-orange-600'>
                                    {item.completions > 0 ? Math.round((item.completions / item.views) * 100) : 0}%
                                </div>
                                <div className='text-gray-600'>Taxa de Conclusão</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {content.length === 0 && (
                <div className='text-center py-8 text-gray-500'>
                    <div className='text-4xl mb-2'>📚</div>
                    <p>Nenhum conteúdo encontrado</p>
                </div>
            )}
        </Card>
    )
}
