// Store Zustand para Gerenciamento de Conteúdo
// Seguindo SOLID e Clean Architecture

import { create } from 'zustand'
import type {
    ContentDraft,
    ContentFilter,
    ContentItem,
    ContentStats,
    ContentValidationResult,
    ContentVersion,
} from '@/shared/types/content'

// ===== INTERFACES (SOLID - Interface Segregation) =====

interface ContentState {
    // Estado
    content: ContentItem[]
    drafts: ContentDraft[]
    versions: Record<string, ContentVersion[]>
    currentDraft: ContentDraft | null
    selectedContent: ContentItem | null
    filter: ContentFilter
    stats: ContentStats | null
    isLoading: boolean
    error: string | null
}

interface ContentActions {
    // Ações
    initializeContent: () => void
    createContent: (content: Omit<ContentItem, 'id' | 'createdAt' | 'updatedAt' | 'version'>) => void
    updateContent: (id: string, updates: Partial<ContentItem>) => void
    deleteContent: (id: string) => void
    publishContent: (id: string) => void
    archiveContent: (id: string) => void
    createDraft: (content?: ContentItem) => void
    saveDraft: (draft: ContentDraft) => void
    loadDraft: (id: string) => void
    deleteDraft: (id: string) => void
    setFilter: (filter: Partial<ContentFilter>) => void
    selectContent: (content: ContentItem | null) => void
    setLoading: (loading: boolean) => void
    setError: (error: string | null) => void
}

interface ContentSelectors {
    // Seletores
    getFilteredContent: () => ContentItem[]
    getContentByType: (type: ContentItem['type']) => ContentItem[]
    getContentByStatus: (status: ContentItem['status']) => ContentItem[]
    getContentByTechnology: (technology: string) => ContentItem[]
    getDraftById: (id: string) => ContentDraft | null
    getContentVersions: (id: string) => ContentVersion[]
    validateContent: (content: ContentItem) => ContentValidationResult
}

// ===== TIPO COMBINADO =====

type ContentStore = ContentState & ContentActions & ContentSelectors

// ===== DADOS MOCK PARA DESENVOLVIMENTO =====

const mockContent: ContentItem[] = [
    {
        id: '1',
        type: 'learning_path',
        title: 'JavaScript Básico',
        description: 'Aprenda os fundamentos do JavaScript',
        technology: 'javascript',
        difficulty: 'beginner',
        status: 'published',
        content: '# JavaScript Básico\n\n## Introdução\n\nJavaScript é uma linguagem de programação...',
        metadata: {
            estimatedTime: 120,
            tags: ['javascript', 'básico', 'programação'],
            prerequisites: [],
            learningObjectives: ['Entender variáveis', 'Usar funções', 'Manipular arrays'],
            resources: [
                {
                    id: '1',
                    type: 'link',
                    title: 'MDN JavaScript',
                    url: 'https://developer.mozilla.org/javascript',
                    description: 'Documentação oficial',
                },
            ],
            seo: {
                title: 'JavaScript Básico - Code Compass',
                description: 'Aprenda JavaScript do zero',
                keywords: ['javascript', 'programação', 'web'],
                slug: 'javascript-basico',
            },
        },
        createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
        updatedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
        createdBy: 'admin',
        version: 1,
    },
    {
        id: '2',
        type: 'lesson',
        title: 'Variáveis e Tipos',
        description: 'Entenda como usar variáveis em JavaScript',
        technology: 'javascript',
        difficulty: 'beginner',
        status: 'published',
        content: '# Variáveis e Tipos\n\n## Declaração de Variáveis\n\nUse `let`, `const` ou `var`...',
        metadata: {
            estimatedTime: 30,
            tags: ['javascript', 'variáveis', 'tipos'],
            prerequisites: ['javascript-basico'],
            learningObjectives: ['Declarar variáveis', 'Entender tipos primitivos'],
            resources: [],
            seo: {
                title: 'Variáveis e Tipos - JavaScript',
                description: 'Aprenda sobre variáveis em JavaScript',
                keywords: ['javascript', 'variáveis', 'tipos'],
                slug: 'variaveis-tipos',
            },
        },
        createdAt: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000),
        updatedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        createdBy: 'admin',
        version: 1,
    },
    {
        id: '3',
        type: 'quiz',
        title: 'Quiz JavaScript Básico',
        description: 'Teste seus conhecimentos de JavaScript',
        technology: 'javascript',
        difficulty: 'beginner',
        status: 'draft',
        content: '# Quiz JavaScript Básico\n\n## Pergunta 1\n\nQual é a forma correta de declarar uma variável?',
        metadata: {
            estimatedTime: 15,
            tags: ['javascript', 'quiz', 'teste'],
            prerequisites: ['javascript-basico'],
            learningObjectives: ['Avaliar conhecimentos'],
            resources: [],
            seo: {
                title: 'Quiz JavaScript Básico',
                description: 'Teste seus conhecimentos',
                keywords: ['javascript', 'quiz'],
                slug: 'quiz-javascript-basico',
            },
        },
        createdAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000),
        updatedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
        createdBy: 'admin',
        version: 1,
    },
]

const mockStats: ContentStats = {
    totalContent: 3,
    publishedContent: 2,
    draftContent: 1,
    archivedContent: 0,
    contentByType: {
        learning_path: 1,
        lesson: 1,
        quiz: 1,
    },
    contentByTechnology: {
        javascript: 3,
    },
    averageTimeToPublish: 2.5,
}

// ===== STORE IMPLEMENTAÇÃO =====

export const useContentStore = create<ContentStore>((set, get) => ({
    // ===== ESTADO INICIAL =====
    content: [],
    drafts: [],
    versions: {},
    currentDraft: null,
    selectedContent: null,
    filter: {},
    stats: null,
    isLoading: false,
    error: null,

    // ===== AÇÕES =====
    initializeContent: () => {
        set({ isLoading: true, error: null })

        try {
            // Simular carregamento de dados
            setTimeout(() => {
                set({
                    content: mockContent,
                    stats: mockStats,
                    isLoading: false,
                })
            }, 1000)
        } catch (_error) {
            set({
                error: 'Erro ao carregar conteúdo',
                isLoading: false,
            })
        }
    },

    createContent: (newContent) => {
        const content: ContentItem = {
            ...newContent,
            id: `content_${Date.now()}`,
            createdAt: new Date(),
            updatedAt: new Date(),
            version: 1,
        }

        set((state) => ({
            content: [...state.content, content],
            stats: state.stats
                ? {
                      ...state.stats,
                      totalContent: state.stats.totalContent + 1,
                      contentByType: {
                          ...state.stats.contentByType,
                          [content.type]: (state.stats.contentByType[content.type] || 0) + 1,
                      },
                  }
                : null,
        }))
    },

    updateContent: (id, updates) => {
        set((state) => {
            const updatedContent = state.content.map((item) =>
                item.id === id ? { ...item, ...updates, updatedAt: new Date(), version: item.version + 1 } : item
            )

            return { content: updatedContent }
        })
    },

    deleteContent: (id) => {
        set((state) => {
            const filteredContent = state.content.filter((item) => item.id !== id)
            return { content: filteredContent }
        })
    },

    publishContent: (id) => {
        set((state) => {
            const updatedContent = state.content.map((item) =>
                item.id === id ? { ...item, status: 'published', updatedAt: new Date() } : item
            )

            return { content: updatedContent }
        })
    },

    archiveContent: (id) => {
        set((state) => {
            const updatedContent = state.content.map((item) =>
                item.id === id ? { ...item, status: 'archived', updatedAt: new Date() } : item
            )

            return { content: updatedContent }
        })
    },

    createDraft: (content) => {
        const draft: ContentDraft = {
            id: `draft_${Date.now()}`,
            originalId: content?.id,
            content: content || {
                id: '',
                type: 'lesson',
                title: '',
                description: '',
                technology: 'javascript',
                difficulty: 'beginner',
                status: 'draft',
                content: '',
                metadata: {
                    estimatedTime: 30,
                    tags: [],
                    prerequisites: [],
                    learningObjectives: [],
                    resources: [],
                    seo: {
                        title: '',
                        description: '',
                        keywords: [],
                        slug: '',
                    },
                },
                createdAt: new Date(),
                updatedAt: new Date(),
                createdBy: 'admin',
                version: 1,
            },
            isNew: !content,
            lastSaved: new Date(),
        }

        set((state) => ({
            drafts: [...state.drafts, draft],
            currentDraft: draft,
        }))
    },

    saveDraft: (draft) => {
        set((state) => {
            const updatedDrafts = state.drafts.map((d) => (d.id === draft.id ? { ...draft, lastSaved: new Date() } : d))

            return {
                drafts: updatedDrafts,
                currentDraft: draft,
            }
        })
    },

    loadDraft: (id) => {
        const { drafts } = get()
        const draft = drafts.find((d) => d.id === id)
        if (draft) {
            set({ currentDraft: draft })
        }
    },

    deleteDraft: (id) => {
        set((state) => ({
            drafts: state.drafts.filter((d) => d.id !== id),
            currentDraft: state.currentDraft?.id === id ? null : state.currentDraft,
        }))
    },

    setFilter: (filter) => {
        set((state) => ({
            filter: { ...state.filter, ...filter },
        }))
    },

    selectContent: (content) => {
        set({ selectedContent: content })
    },

    setLoading: (loading) => set({ isLoading: loading }),
    setError: (error) => set({ error }),

    // ===== SELETORES =====
    getFilteredContent: () => {
        const { content, filter } = get()
        let filtered = content

        if (filter.type) {
            filtered = filtered.filter((item) => item.type === filter.type)
        }
        if (filter.technology) {
            filtered = filtered.filter((item) => item.technology === filter.technology)
        }
        if (filter.difficulty) {
            filtered = filtered.filter((item) => item.difficulty === filter.difficulty)
        }
        if (filter.status) {
            filtered = filtered.filter((item) => item.status === filter.status)
        }
        if (filter.search) {
            const search = filter.search.toLowerCase()
            filtered = filtered.filter(
                (item) => item.title.toLowerCase().includes(search) || item.description.toLowerCase().includes(search)
            )
        }

        return filtered
    },

    getContentByType: (type) => {
        const { content } = get()
        return content.filter((item) => item.type === type)
    },

    getContentByStatus: (status) => {
        const { content } = get()
        return content.filter((item) => item.status === status)
    },

    getContentByTechnology: (technology) => {
        const { content } = get()
        return content.filter((item) => item.technology === technology)
    },

    getDraftById: (id) => {
        const { drafts } = get()
        return drafts.find((d) => d.id === id) || null
    },

    getContentVersions: (id) => {
        const { versions } = get()
        return versions[id] || []
    },

    validateContent: (content) => {
        const errors: string[] = []
        const warnings: string[] = []

        if (!content.title.trim()) {
            errors.push('Título é obrigatório')
        }
        if (!content.description.trim()) {
            errors.push('Descrição é obrigatória')
        }
        if (!content.content.trim()) {
            errors.push('Conteúdo é obrigatório')
        }
        if (content.title.length < 3) {
            warnings.push('Título muito curto')
        }
        if (content.description.length < 10) {
            warnings.push('Descrição muito curta')
        }

        return {
            isValid: errors.length === 0,
            errors,
            warnings,
        }
    },
}))
