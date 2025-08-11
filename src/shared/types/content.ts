// Tipos de domínio para Gerenciamento de Conteúdo
// Seguindo DDD (Domain-Driven Design) e SOLID

// ===== ENTIDADES DE DOMÍNIO =====

export interface ContentItem {
    id: string
    type: 'learning_path' | 'lesson' | 'quiz'
    title: string
    description: string
    technology: string
    difficulty: 'beginner' | 'intermediate' | 'advanced'
    status: 'draft' | 'published' | 'archived'
    content: string // markdown content
    metadata: ContentMetadata
    createdAt: Date
    updatedAt: Date
    createdBy: string
    version: number
}

export interface ContentMetadata {
    estimatedTime: number // em minutos
    tags: string[]
    prerequisites: string[]
    learningObjectives: string[]
    resources: ContentResource[]
    seo: SEOMetadata
}

export interface ContentResource {
    id: string
    type: 'link' | 'file' | 'video' | 'image'
    title: string
    url: string
    description?: string
}

export interface SEOMetadata {
    title: string
    description: string
    keywords: string[]
    slug: string
}

// ===== OBJETOS DE VALOR =====

export interface ContentVersion {
    version: number
    content: string
    changes: string
    createdAt: Date
    createdBy: string
}

export interface ContentDraft {
    id: string
    originalId?: string
    content: ContentItem
    isNew: boolean
    lastSaved: Date
}

// ===== SERVIÇOS DE DOMÍNIO =====

export interface ContentService {
    createContent(content: Omit<ContentItem, 'id' | 'createdAt' | 'updatedAt' | 'version'>): ContentItem
    updateContent(id: string, updates: Partial<ContentItem>): ContentItem
    deleteContent(id: string): void
    publishContent(id: string): void
    archiveContent(id: string): void
    createVersion(id: string, changes: string): ContentVersion
    validateContent(content: ContentItem): ContentValidationResult
}

export interface ContentValidationResult {
    isValid: boolean
    errors: string[]
    warnings: string[]
}

// ===== REPOSITÓRIOS =====

export interface ContentRepository {
    getAllContent(): ContentItem[]
    getContentById(id: string): ContentItem | null
    getContentByType(type: ContentItem['type']): ContentItem[]
    getContentByTechnology(technology: string): ContentItem[]
    getContentByStatus(status: ContentItem['status']): ContentItem[]
    saveContent(content: ContentItem): void
    deleteContent(id: string): void
    getContentVersions(id: string): ContentVersion[]
    saveDraft(draft: ContentDraft): void
    getDraft(id: string): ContentDraft | null
}

// ===== TIPOS AUXILIARES =====

export interface ContentFilter {
    type?: ContentItem['type']
    technology?: string
    difficulty?: ContentItem['difficulty']
    status?: ContentItem['status']
    search?: string
}

export interface ContentStats {
    totalContent: number
    publishedContent: number
    draftContent: number
    archivedContent: number
    contentByType: Record<ContentItem['type'], number>
    contentByTechnology: Record<string, number>
    averageTimeToPublish: number // em dias
}

export interface ContentAction {
    id: string
    type: 'create' | 'update' | 'delete' | 'publish' | 'archive'
    contentId: string
    contentTitle: string
    performedBy: string
    timestamp: Date
    details: Record<string, any>
}

// ===== ENUMS =====

export enum ContentType {
    LEARNING_PATH = 'learning_path',
    LESSON = 'lesson',
    QUIZ = 'quiz',
}

export enum ContentStatus {
    DRAFT = 'draft',
    PUBLISHED = 'published',
    ARCHIVED = 'archived',
}

export enum ContentDifficulty {
    BEGINNER = 'beginner',
    INTERMEDIATE = 'intermediate',
    ADVANCED = 'advanced',
}

export enum ResourceType {
    LINK = 'link',
    FILE = 'file',
    VIDEO = 'video',
    IMAGE = 'image',
}
