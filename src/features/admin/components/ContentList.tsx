'use client'

// Componente de Lista de Conteúdo
// Seguindo SOLID - Single Responsibility Principle

import { Button, Card } from '@/shared/components'
import { useContentStore } from '@/shared/stores/contentStore'
import type { ContentItem } from '@/shared/types/content'

interface ContentListProps {
    onEditContent: (content: ContentItem) => void
}

export function ContentList({ onEditContent }: ContentListProps) {
    const { getFilteredContent, deleteContent, publishContent, archiveContent } = useContentStore()

    const content = getFilteredContent()

    const getContentIcon = (type: string) => {
        switch (type) {
            case 'learning_path':
                return '📚'
            case 'lesson':
                return '📖'
            case 'quiz':
                return '✅'
            default:
                return '📄'
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

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case 'beginner':
                return 'bg-green-100 text-green-800'
            case 'intermediate':
                return 'bg-yellow-100 text-yellow-800'
            case 'advanced':
                return 'bg-red-100 text-red-800'
            default:
                return 'bg-gray-100 text-gray-800'
        }
    }

    const formatDate = (date: Date) => {
        return new Date(date).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        })
    }

    const handleDelete = (id: string) => {
        if (confirm('Tem certeza que deseja excluir este conteúdo?')) {
            deleteContent(id)
        }
    }

    const handlePublish = (id: string) => {
        publishContent(id)
    }

    const handleArchive = (id: string) => {
        archiveContent(id)
    }

    return (
        <Card className='p-6'>
            <h2 className='text-xl font-semibold text-gray-900 mb-6'>Lista de Conteúdo</h2>

            <div className='space-y-4'>
                {content.map((item) => (
                    <div key={item.id} className='bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow'>
                        <div className='flex items-start justify-between mb-3'>
                            <div className='flex items-start space-x-3'>
                                <div className='text-2xl'>{getContentIcon(item.type)}</div>
                                <div className='flex-1'>
                                    <h3 className='font-semibold text-gray-900'>{item.title}</h3>
                                    <p className='text-sm text-gray-600 mb-2'>{item.description}</p>
                                    <div className='flex items-center space-x-2 text-xs'>
                                        <span>
                                            {getTechnologyIcon(item.technology)} {item.technology}
                                        </span>
                                        <span>•</span>
                                        <span
                                            className={`px-2 py-1 rounded-full ${getDifficultyColor(item.difficulty)}`}
                                        >
                                            {item.difficulty === 'beginner'
                                                ? 'Iniciante'
                                                : item.difficulty === 'intermediate'
                                                  ? 'Intermediário'
                                                  : 'Avançado'}
                                        </span>
                                        <span>•</span>
                                        <span className={`px-2 py-1 rounded-full ${getStatusColor(item.status)}`}>
                                            {item.status === 'published'
                                                ? 'Publicado'
                                                : item.status === 'draft'
                                                  ? 'Rascunho'
                                                  : 'Arquivado'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='text-right text-xs text-gray-500'>
                                <div>Versão {item.version}</div>
                                <div>Criado em {formatDate(item.createdAt)}</div>
                                <div>Atualizado em {formatDate(item.updatedAt)}</div>
                            </div>
                        </div>

                        <div className='flex items-center justify-between'>
                            <div className='text-sm text-gray-600'>
                                <span>⏱️ {item.metadata.estimatedTime} min</span>
                                <span className='mx-2'>•</span>
                                <span>🏷️ {item.metadata.tags.length} tags</span>
                                <span className='mx-2'>•</span>
                                <span>📚 {item.metadata.resources.length} recursos</span>
                            </div>

                            <div className='flex items-center space-x-2'>
                                <Button variant='outline' size='sm' onClick={() => onEditContent(item)}>
                                    ✏️ Editar
                                </Button>

                                {item.status === 'draft' && (
                                    <Button variant='primary' size='sm' onClick={() => handlePublish(item.id)}>
                                        📤 Publicar
                                    </Button>
                                )}

                                {item.status === 'published' && (
                                    <Button variant='outline' size='sm' onClick={() => handleArchive(item.id)}>
                                        📦 Arquivar
                                    </Button>
                                )}

                                <Button
                                    variant='outline'
                                    size='sm'
                                    onClick={() => handleDelete(item.id)}
                                    className='text-red-600 hover:text-red-700'
                                >
                                    🗑️ Excluir
                                </Button>
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
