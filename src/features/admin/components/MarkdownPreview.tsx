'use client'

import { useState } from 'react'
import { Card, Button } from '@/shared/components'

interface MarkdownPreviewProps {
    content: string
    title?: string
}

export function MarkdownPreview({ content, title }: MarkdownPreviewProps) {
    const [isExpanded, setIsExpanded] = useState(false)

    // Função removida pois não está sendo usada
    // const convertMarkdownToHTML = (markdown: string): string => {
    //     return markdown
    //         .replace(/^### (.*$)/gim, '<h3 class="text-lg font-semibold text-gray-900 mt-4 mb-2">$1</h3>')
    //         .replace(/^## (.*$)/gim, '<h2 class="text-xl font-bold text-gray-900 mt-6 mb-3">$1</h2>')
    //         .replace(/^# (.*$)/gim, '<h1 class="text-2xl font-bold text-gray-900 mt-8 mb-4">$1</h1>')
    //         .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')
    //         .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
    //         .replace(/```([\s\S]*?)```/g, '<pre class="bg-gray-100 p-4 rounded-md overflow-x-auto my-4"><code class="text-sm">$1</code></pre>')
    //         .replace(/`([^`]+)`/g, '<code class="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">$1</code>')
    //         .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">$1</a>')
    //         .replace(/^\* (.*$)/gim, '<li class="ml-4">$1</li>')
    //         .replace(/^- (.*$)/gim, '<li class="ml-4">$1</li>')
    //         .replace(/\n\n/g, '</p><p class="mb-4">')
    //         .replace(/^(?!<[h|p|u|o|li|pre])(.*$)/gim, '<p class="mb-4">$1</p>')
    //         .replace(/<p class="mb-4"><\/p>/g, '')
    //         .replace(/<p class="mb-4">\s*<\/p>/g, '')
    // }

    // const htmlContent = convertMarkdownToHTML(content) // Removido pois não está sendo usado

    return (
        <Card className='p-6'>
            <div className='flex items-center justify-between mb-4'>
                <h3 className='text-lg font-semibold text-gray-900'>
                    👁️ Preview do Conteúdo
                </h3>
                <Button
                    variant='outline'
                    size='sm'
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    {isExpanded ? '🔽 Recolher' : '🔼 Expandir'}
                </Button>
            </div>

            <div className={`bg-white border rounded-lg p-6 ${isExpanded ? 'max-h-none' : 'max-h-96 overflow-y-auto'}`}>
                {title && (
                    <h1 className='text-2xl font-bold text-gray-900 mb-6 border-b pb-4'>
                        {title}
                    </h1>
                )}
                
                {content ? (
                    <div className='prose prose-sm max-w-none'>
                        <div className='whitespace-pre-wrap'>{content}</div>
                    </div>
                ) : (
                    <div className='text-center py-8 text-gray-500'>
                        <div className='text-4xl mb-2'>📝</div>
                        <p>Digite algum conteúdo para ver o preview</p>
                    </div>
                )}
            </div>

            {content && (
                <div className='mt-4 text-sm text-gray-600'>
                    <div className='flex items-center justify-between'>
                        <span>📊 {content.length} caracteres</span>
                        <span>📖 ~{Math.ceil(content.length / 200)} min de leitura</span>
                    </div>
                </div>
            )}
        </Card>
    )
} 