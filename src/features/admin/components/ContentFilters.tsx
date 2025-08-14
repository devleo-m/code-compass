'use client'

// Componente Filtros de Conteúdo
// Seguindo SOLID - Single Responsibility Principle

import { useState, useEffect } from 'react'
import { Card, Button } from '@/shared/components'
import { useContentStore } from '@/shared/stores/contentStore'
import type { ContentFilter } from '@/shared/types/content'

export function ContentFilters() {
    const { filter, setFilter } = useContentStore()
    const [localFilter, setLocalFilter] = useState<ContentFilter>(filter)

    // Sincronizar filtro local com o store
    useEffect(() => {
        setLocalFilter(filter)
    }, [filter])

    // Aplicar filtros
    const applyFilters = () => {
        setFilter(localFilter)
    }

    // Limpar filtros
    const clearFilters = () => {
        const emptyFilter: ContentFilter = {}
        setLocalFilter(emptyFilter)
        setFilter(emptyFilter)
    }

    // Atualizar campo local
    const updateLocalFilter = (field: keyof ContentFilter, value: any) => {
        setLocalFilter(prev => ({ ...prev, [field]: value }))
    }

    return (
        <Card className='p-6'>
            <div className='space-y-4'>
                {/* Header */}
                <div className='flex items-center justify-between'>
                    <h3 className='text-lg font-semibold text-gray-900'>Filtros</h3>
                    <div className='flex items-center space-x-2'>
                        <Button
                            variant='outline'
                            size='sm'
                            onClick={clearFilters}
                        >
                            🗑️ Limpar
                        </Button>
                        <Button
                            variant='primary'
                            size='sm'
                            onClick={applyFilters}
                        >
                            🔍 Aplicar
                        </Button>
                    </div>
                </div>

                {/* Filtros */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {/* Busca */}
                    <div>
                        <label htmlFor='search' className='block text-sm font-medium text-gray-700 mb-2'>
                            Buscar
                        </label>
                        <input
                            id='search'
                            type='text'
                            value={localFilter.search || ''}
                            onChange={(e) => updateLocalFilter('search', e.target.value)}
                            placeholder='Título ou descrição...'
                            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>

                    {/* Tipo */}
                    <div>
                        <label htmlFor='type' className='block text-sm font-medium text-gray-700 mb-2'>
                            Tipo
                        </label>
                        <select
                            id='type'
                            value={localFilter.type || ''}
                            onChange={(e) => updateLocalFilter('type', e.target.value || undefined)}
                            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        >
                            <option value=''>Todos os tipos</option>
                            <option value='learning_path'>Trilha de Aprendizado</option>
                            <option value='lesson'>Lição</option>
                            <option value='quiz'>Quiz</option>
                        </select>
                    </div>

                    {/* Tecnologia */}
                    <div>
                        <label htmlFor='technology' className='block text-sm font-medium text-gray-700 mb-2'>
                            Tecnologia
                        </label>
                        <select
                            id='technology'
                            value={localFilter.technology || ''}
                            onChange={(e) => updateLocalFilter('technology', e.target.value || undefined)}
                            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        >
                            <option value=''>Todas as tecnologias</option>
                            <option value='javascript'>JavaScript</option>
                            <option value='typescript'>TypeScript</option>
                            <option value='react'>React</option>
                            <option value='node'>Node.js</option>
                        </select>
                    </div>

                    {/* Dificuldade */}
                    <div>
                        <label htmlFor='difficulty' className='block text-sm font-medium text-gray-700 mb-2'>
                            Dificuldade
                        </label>
                        <select
                            id='difficulty'
                            value={localFilter.difficulty || ''}
                            onChange={(e) => updateLocalFilter('difficulty', e.target.value || undefined)}
                            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        >
                            <option value=''>Todas as dificuldades</option>
                            <option value='beginner'>Iniciante</option>
                            <option value='intermediate'>Intermediário</option>
                            <option value='advanced'>Avançado</option>
                        </select>
                    </div>
                </div>

                {/* Status */}
                <div>
                    <label htmlFor='status' className='block text-sm font-medium text-gray-700 mb-2'>
                        Status
                    </label>
                    <div className='flex items-center space-x-4'>
                        {[
                            { value: 'draft', label: 'Rascunho', icon: '📝' },
                            { value: 'published', label: 'Publicado', icon: '✅' },
                            { value: 'archived', label: 'Arquivado', icon: '📦' }
                        ].map(status => (
                            <label key={status.value} className='flex items-center'>
                                <input
                                    id={`status-${status.value}`}
                                    type='radio'
                                    name='status'
                                    value={status.value}
                                    checked={localFilter.status === status.value}
                                    onChange={(e) => updateLocalFilter('status', e.target.value)}
                                    className='mr-2'
                                />
                                <span className='text-sm text-gray-700'>
                                    {status.icon} {status.label}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Filtros Ativos */}
                {Object.keys(localFilter).length > 0 && (
                    <div className='pt-4 border-t'>
                        <h4 className='text-sm font-medium text-gray-700 mb-2'>Filtros Ativos:</h4>
                        <div className='flex flex-wrap gap-2'>
                            {localFilter.search && (
                                <span className='inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800'>
                                    Busca: "{localFilter.search}"
                                    <button
                                        type='button'
                                        onClick={() => updateLocalFilter('search', undefined)}
                                        className='ml-1 text-blue-600 hover:text-blue-800'
                                    >
                                        ×
                                    </button>
                                </span>
                            )}
                            {localFilter.type && (
                                <span className='inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800'>
                                    Tipo: {localFilter.type}
                                    <button
                                        type='button'
                                        onClick={() => updateLocalFilter('type', undefined)}
                                        className='ml-1 text-green-600 hover:text-green-800'
                                    >
                                        ×
                                    </button>
                                </span>
                            )}
                            {localFilter.technology && (
                                <span className='inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800'>
                                    Tecnologia: {localFilter.technology}
                                    <button
                                        type='button'
                                        onClick={() => updateLocalFilter('technology', undefined)}
                                        className='ml-1 text-purple-600 hover:text-purple-800'
                                    >
                                        ×
                                    </button>
                                </span>
                            )}
                            {localFilter.difficulty && (
                                <span className='inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800'>
                                    Dificuldade: {localFilter.difficulty}
                                    <button
                                        type='button'
                                        onClick={() => updateLocalFilter('difficulty', undefined)}
                                        className='ml-1 text-yellow-600 hover:text-yellow-800'
                                    >
                                        ×
                                    </button>
                                </span>
                            )}
                            {localFilter.status && (
                                <span className='inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800'>
                                    Status: {localFilter.status}
                                    <button
                                        type='button'
                                        onClick={() => updateLocalFilter('status', undefined)}
                                        className='ml-1 text-orange-600 hover:text-orange-800'
                                    >
                                        ×
                                    </button>
                                </span>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </Card>
    )
} 