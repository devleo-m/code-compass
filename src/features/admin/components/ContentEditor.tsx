'use client'

// Componente Editor de Conteúdo
// Seguindo SOLID - Single Responsibility Principle

import { useState, useEffect } from 'react'
import { Card, Button } from '@/shared/components'
import { useContentStore } from '@/shared/stores/contentStore'
import { MarkdownPreview } from './MarkdownPreview'
import type { ContentItem } from '@/shared/types/content'
// import type { ContentItem, ContentDraft } from '@/shared/types/content' // Removido pois não está sendo usado

interface ContentEditorProps {
    content?: ContentItem | null
    onClose: () => void
}

export function ContentEditor({ content, onClose }: ContentEditorProps) {
    const { 
        // currentDraft, // Removido pois não está sendo usado
        // saveDraft, // Removido pois não está sendo usado
        createContent, 
        updateContent,
        validateContent 
    } = useContentStore()

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        technology: 'javascript',
        difficulty: 'beginner' as 'beginner' | 'intermediate' | 'advanced',
        content: '',
        estimatedTime: 30,
        tags: [] as string[],
        prerequisites: [] as string[],
        learningObjectives: [] as string[],
        seoTitle: '',
        seoDescription: '',
        seoKeywords: [] as string[],
        seoSlug: ''
    })

    const [validation, setValidation] = useState({
        isValid: true,
        errors: [] as string[],
        warnings: [] as string[]
    })

    const [isSaving, setIsSaving] = useState(false)
    const [activeTab, setActiveTab] = useState<'content' | 'metadata' | 'seo'>('content')

    // Carregar dados do conteúdo existente
    useEffect(() => {
        if (content) {
            setFormData({
                title: content.title,
                description: content.description,
                technology: content.technology,
                difficulty: content.difficulty,
                content: content.content,
                estimatedTime: content.metadata.estimatedTime,
                tags: content.metadata.tags,
                prerequisites: content.metadata.prerequisites,
                learningObjectives: content.metadata.learningObjectives,
                seoTitle: content.metadata.seo.title,
                seoDescription: content.metadata.seo.description,
                seoKeywords: content.metadata.seo.keywords,
                seoSlug: content.metadata.seo.slug
            })
        }
    }, [content])

    // Validar formulário
    const validateForm = () => {
        const contentToValidate: ContentItem = {
            id: content?.id || '',
            type: 'lesson',
            title: formData.title,
            description: formData.description,
            technology: formData.technology,
            difficulty: formData.difficulty,
            status: 'draft',
            content: formData.content,
            metadata: {
                estimatedTime: formData.estimatedTime,
                tags: formData.tags,
                prerequisites: formData.prerequisites,
                learningObjectives: formData.learningObjectives,
                resources: [],
                seo: {
                    title: formData.seoTitle,
                    description: formData.seoDescription,
                    keywords: formData.seoKeywords,
                    slug: formData.seoSlug
                }
            },
            createdAt: new Date(),
            updatedAt: new Date(),
            createdBy: 'admin',
            version: 1
        }

        const result = validateContent(contentToValidate)
        setValidation(result)
        return result.isValid
    }

    // Salvar rascunho
    const handleSaveDraft = () => {
        if (!validateForm()) return

        setIsSaving(true)
        
        const draftContent: ContentItem = {
            id: content?.id || `draft_${Date.now()}`,
            type: 'lesson',
            title: formData.title,
            description: formData.description,
            technology: formData.technology,
            difficulty: formData.difficulty,
            status: 'draft',
            content: formData.content,
            metadata: {
                estimatedTime: formData.estimatedTime,
                tags: formData.tags,
                prerequisites: formData.prerequisites,
                learningObjectives: formData.learningObjectives,
                resources: [],
                seo: {
                    title: formData.seoTitle,
                    description: formData.seoDescription,
                    keywords: formData.seoKeywords,
                    slug: formData.seoSlug
                }
            },
            createdAt: content?.createdAt || new Date(),
            updatedAt: new Date(),
            createdBy: 'admin',
            version: content?.version || 1
        }

        if (content) {
            updateContent(content.id, draftContent)
        } else {
            createContent(draftContent)
        }

        setTimeout(() => {
            setIsSaving(false)
            onClose()
        }, 1000)
    }

    // Publicar conteúdo
    const handlePublish = () => {
        if (!validateForm()) return

        setIsSaving(true)
        
        const publishedContent: ContentItem = {
            id: content?.id || `content_${Date.now()}`,
            type: 'lesson',
            title: formData.title,
            description: formData.description,
            technology: formData.technology,
            difficulty: formData.difficulty,
            status: 'published',
            content: formData.content,
            metadata: {
                estimatedTime: formData.estimatedTime,
                tags: formData.tags,
                prerequisites: formData.prerequisites,
                learningObjectives: formData.learningObjectives,
                resources: [],
                seo: {
                    title: formData.seoTitle,
                    description: formData.seoDescription,
                    keywords: formData.seoKeywords,
                    slug: formData.seoSlug
                }
            },
            createdAt: content?.createdAt || new Date(),
            updatedAt: new Date(),
            createdBy: 'admin',
            version: content?.version || 1
        }

        if (content) {
            updateContent(content.id, publishedContent)
        } else {
            createContent(publishedContent)
        }

        setTimeout(() => {
            setIsSaving(false)
            onClose()
        }, 1000)
    }

    // Atualizar campo
    const updateField = (field: string, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }))
    }

    // Adicionar tag
    const addTag = (tag: string) => {
        if (tag && !formData.tags.includes(tag)) {
            updateField('tags', [...formData.tags, tag])
        }
    }

    // Remover tag
    const removeTag = (tagToRemove: string) => {
        updateField('tags', formData.tags.filter(tag => tag !== tagToRemove))
    }

    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50'>
            <Card className='w-full max-w-6xl max-h-[90vh] overflow-hidden'>
                {/* Header */}
                <div className='bg-gray-50 px-6 py-4 border-b'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-xl font-bold text-gray-900'>
                            {content ? 'Editar Conteúdo' : 'Criar Novo Conteúdo'}
                        </h2>
                        <Button variant='ghost' onClick={onClose}>
                            ✕
                        </Button>
                    </div>
                </div>

                {/* Tabs */}
                <div className='flex border-b'>
                    {[
                        { id: 'content', label: 'Conteúdo', icon: '📝' },
                        { id: 'metadata', label: 'Metadados', icon: '🏷️' },
                        { id: 'seo', label: 'SEO', icon: '🔍' }
                    ].map(tab => (
                        <button
                            key={tab.id}
                            type='button'
                            onClick={() => setActiveTab(tab.id as any)}
                            className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                                activeTab === tab.id
                                    ? 'border-blue-500 text-blue-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            {tab.icon} {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className='flex-1 overflow-y-auto p-6'>
                    {activeTab === 'content' && (
                        <div className='space-y-6'>
                            {/* Título e Descrição */}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                <div>
                                    <label htmlFor='title' className='block text-sm font-medium text-gray-700 mb-2'>
                                        Título *
                                    </label>
                                    <input
                                        id='title'
                                        type='text'
                                        value={formData.title}
                                        onChange={(e) => updateField('title', e.target.value)}
                                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                                        placeholder='Digite o título do conteúdo'
                                    />
                                </div>
                                <div>
                                    <label htmlFor='technology' className='block text-sm font-medium text-gray-700 mb-2'>
                                        Tecnologia
                                    </label>
                                    <select
                                        id='technology'
                                        value={formData.technology}
                                        onChange={(e) => updateField('technology', e.target.value)}
                                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                                    >
                                        <option value='javascript'>JavaScript</option>
                                        <option value='typescript'>TypeScript</option>
                                        <option value='react'>React</option>
                                        <option value='node'>Node.js</option>
                                    </select>
                                </div>
                            </div>

                                                            <div>
                                    <label htmlFor='description' className='block text-sm font-medium text-gray-700 mb-2'>
                                        Descrição *
                                    </label>
                                    <textarea
                                        id='description'
                                        value={formData.description}
                                        onChange={(e) => updateField('description', e.target.value)}
                                        rows={3}
                                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                                        placeholder='Digite uma descrição do conteúdo'
                                    />
                                </div>

                            {/* Dificuldade */}
                            <div>
                                <label htmlFor='difficulty' className='block text-sm font-medium text-gray-700 mb-2'>
                                    Dificuldade
                                </label>
                                <select
                                    id='difficulty'
                                    value={formData.difficulty}
                                    onChange={(e) => updateField('difficulty', e.target.value as 'beginner' | 'intermediate' | 'advanced')}
                                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                                >
                                    <option value='beginner'>Iniciante</option>
                                    <option value='intermediate'>Intermediário</option>
                                    <option value='advanced'>Avançado</option>
                                </select>
                            </div>

                            {/* Conteúdo Markdown */}
                            <div>
                                <label htmlFor='content' className='block text-sm font-medium text-gray-700 mb-2'>
                                    Conteúdo (Markdown) *
                                </label>
                                <textarea
                                    id='content'
                                    value={formData.content}
                                    onChange={(e) => updateField('content', e.target.value)}
                                    rows={15}
                                    className='w-full px-3 py-2 border border-gray-300 rounded-md font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                                    placeholder='Digite o conteúdo em Markdown...'
                                />
                            </div>

                            {/* Preview do Conteúdo */}
                            <MarkdownPreview content={formData.content} title={formData.title} />
                        </div>
                    )}

                    {activeTab === 'metadata' && (
                        <div className='space-y-6'>
                            {/* Tempo Estimado */}
                            <div>
                                <label htmlFor='estimatedTime' className='block text-sm font-medium text-gray-700 mb-2'>
                                    Tempo Estimado (minutos)
                                </label>
                                <input
                                    id='estimatedTime'
                                    type='number'
                                    value={formData.estimatedTime}
                                    onChange={(e) => updateField('estimatedTime', parseInt(e.target.value))}
                                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                                    min={1}
                                />
                            </div>

                            {/* Tags */}
                            <div>
                                <label htmlFor='tags' className='block text-sm font-medium text-gray-700 mb-2'>
                                    Tags
                                </label>
                                <div className='flex flex-wrap gap-2 mb-2'>
                                    {formData.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className='inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800'
                                        >
                                            {tag}
                                            <button
                                                type='button'
                                                onClick={() => removeTag(tag)}
                                                className='ml-1 text-blue-600 hover:text-blue-800'
                                            >
                                                ×
                                            </button>
                                        </span>
                                    ))}
                                </div>
                                <div className='flex gap-2'>
                                    <input
                                        id='tags'
                                        type='text'
                                        placeholder='Adicionar tag'
                                        className='flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                                        onKeyPress={(e) => {
                                            if (e.key === 'Enter') {
                                                e.preventDefault()
                                                addTag(e.currentTarget.value)
                                                e.currentTarget.value = ''
                                            }
                                        }}
                                    />
                                    <Button
                                        variant='outline'
                                        onClick={() => {
                                            const input = document.querySelector('input[placeholder="Adicionar tag"]') as HTMLInputElement
                                            if (input) {
                                                addTag(input.value)
                                                input.value = ''
                                            }
                                        }}
                                    >
                                        Adicionar
                                    </Button>
                                </div>
                            </div>

                            {/* Objetivos de Aprendizado */}
                            <div>
                                <label htmlFor='learningObjectives' className='block text-sm font-medium text-gray-700 mb-2'>
                                    Objetivos de Aprendizado
                                </label>
                                <textarea
                                    id='learningObjectives'
                                    value={formData.learningObjectives.join('\n')}
                                    onChange={(e) => updateField('learningObjectives', e.target.value.split('\n').filter(Boolean))}
                                    rows={4}
                                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                                    placeholder='Digite um objetivo por linha...'
                                />
                            </div>
                        </div>
                    )}

                    {activeTab === 'seo' && (
                        <div className='space-y-6'>
                            {/* SEO Title */}
                            <div>
                                <label htmlFor='seoTitle' className='block text-sm font-medium text-gray-700 mb-2'>
                                    Título SEO
                                </label>
                                <input
                                    id='seoTitle'
                                    type='text'
                                    value={formData.seoTitle}
                                    onChange={(e) => updateField('seoTitle', e.target.value)}
                                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                                    placeholder='Título para SEO'
                                />
                            </div>

                            {/* SEO Description */}
                            <div>
                                <label htmlFor='seoDescription' className='block text-sm font-medium text-gray-700 mb-2'>
                                    Descrição SEO
                                </label>
                                <textarea
                                    id='seoDescription'
                                    value={formData.seoDescription}
                                    onChange={(e) => updateField('seoDescription', e.target.value)}
                                    rows={3}
                                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                                    placeholder='Descrição para SEO'
                                />
                            </div>

                            {/* SEO Keywords */}
                            <div>
                                <label htmlFor='seoKeywords' className='block text-sm font-medium text-gray-700 mb-2'>
                                    Palavras-chave SEO
                                </label>
                                <input
                                    id='seoKeywords'
                                    type='text'
                                    value={formData.seoKeywords.join(', ')}
                                    onChange={(e) => updateField('seoKeywords', e.target.value.split(',').map(k => k.trim()).filter(Boolean))}
                                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                                    placeholder='palavra-chave1, palavra-chave2, palavra-chave3'
                                />
                            </div>

                            {/* SEO Slug */}
                            <div>
                                <label htmlFor='seoSlug' className='block text-sm font-medium text-gray-700 mb-2'>
                                    Slug URL
                                </label>
                                <input
                                    id='seoSlug'
                                    type='text'
                                    value={formData.seoSlug}
                                    onChange={(e) => updateField('seoSlug', e.target.value)}
                                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                                    placeholder='url-amigavel'
                                />
                            </div>
                        </div>
                    )}
                </div>

                {/* Validation Messages */}
                {(validation.errors.length > 0 || validation.warnings.length > 0) && (
                    <div className='px-6 py-4 bg-gray-50 border-t'>
                        {validation.errors.length > 0 && (
                            <div className='mb-2'>
                                <h4 className='text-sm font-medium text-red-800 mb-1'>Erros:</h4>
                                <ul className='text-sm text-red-600 space-y-1'>
                                    {validation.errors.map((error) => (
                                        <li key={error}>• {error}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {validation.warnings.length > 0 && (
                            <div>
                                <h4 className='text-sm font-medium text-yellow-800 mb-1'>Avisos:</h4>
                                <ul className='text-sm text-yellow-600 space-y-1'>
                                    {validation.warnings.map((warning) => (
                                        <li key={warning}>• {warning}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                )}

                {/* Footer */}
                <div className='bg-gray-50 px-6 py-4 border-t flex items-center justify-between'>
                    <div className='flex items-center space-x-4'>
                        <Button
                            variant='outline'
                            onClick={handleSaveDraft}
                            disabled={isSaving}
                        >
                            {isSaving ? 'Salvando...' : '💾 Salvar Rascunho'}
                        </Button>
                        <Button
                            variant='primary'
                            onClick={handlePublish}
                            disabled={isSaving || !validation.isValid}
                        >
                            {isSaving ? 'Publicando...' : '🚀 Publicar'}
                        </Button>
                    </div>
                    <Button variant='ghost' onClick={onClose}>
                        Cancelar
                    </Button>
                </div>
            </Card>
        </div>
    )
} 