'use client'

// Componente Principal de Gerenciamento de Conteúdo
// Seguindo SOLID - Single Responsibility Principle

import { useEffect, useState } from 'react'
import { Button, Card } from '@/shared/components'
import { useContentStore } from '@/shared/stores/contentStore'
import type { ContentItem } from '@/shared/types/content'
import { ContentEditor } from './ContentEditor'
import { ContentFilters } from './ContentFilters'
import { ContentList } from './ContentList'

export function ContentManager() {
    const { initializeContent, isLoading, error, selectedContent, selectContent, createDraft } = useContentStore()

    const [showEditor, setShowEditor] = useState(false)

    // Inicializar conteúdo quando o componente montar
    useEffect(() => {
        initializeContent()
    }, [initializeContent])

    const handleCreateContent = () => {
        createDraft()
        setShowEditor(true)
    }

    const handleEditContent = (content: ContentItem) => {
        selectContent(content)
        setShowEditor(true)
    }

    const handleCloseEditor = () => {
        setShowEditor(false)
        selectContent(null)
    }

    if (isLoading) {
        return (
            <div className='space-y-6'>
                <div className='animate-pulse'>
                    <div className='h-8 bg-gray-200 rounded mb-4'></div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        {[1, 2, 3].map((i) => (
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
                    <p>Erro ao carregar conteúdo: {error}</p>
                </div>
            </Card>
        )
    }

    return (
        <div className='space-y-6'>
            {/* Header */}
            <div className='bg-white rounded-lg shadow-sm p-6'>
                <div className='flex items-center justify-between'>
                    <div>
                        <h1 className='text-3xl font-bold text-gray-900 mb-2'>Gerenciamento de Conteúdo</h1>
                        <p className='text-gray-600'>Crie, edite e gerencie trilhas, lições e quizzes</p>
                    </div>
                    <Button variant='primary' onClick={handleCreateContent}>
                        ➕ Criar Conteúdo
                    </Button>
                </div>
            </div>

            {/* Filtros */}
            <ContentFilters />

            {/* Lista de Conteúdo */}
            <ContentList onEditContent={handleEditContent} />

            {/* Editor de Conteúdo */}
            {showEditor && <ContentEditor content={selectedContent} onClose={handleCloseEditor} />}
        </div>
    )
}
