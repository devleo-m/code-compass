'use client'

// 1. Imports
import { useState } from 'react'
import type { QuizQuestionItem } from '@/shared/types/quiz'

// 2. Tipos/Interfaces
interface QuizQuestionProps {
    question: QuizQuestionItem
    onAnswer: (questionId: string, selectedAnswers: string[]) => void
    isAnswered: boolean
    userAnswer?: string[]
}

// 3. Componente
export function QuizQuestion({ question, onAnswer, isAnswered, userAnswer }: QuizQuestionProps) {
    // 4. Estados
    const [selectedAnswers, setSelectedAnswers] = useState<string[]>(userAnswer || [])

    // 5. Lógica
    const handleOptionClick = (optionId: string) => {
        if (isAnswered) return // Não permite mudar resposta após responder

        let newAnswers: string[]

        if (question.type === 'multiple_choice') {
            // Múltipla escolha: adiciona/remove da seleção
            if (selectedAnswers.includes(optionId)) {
                newAnswers = selectedAnswers.filter((id) => id !== optionId)
            } else {
                newAnswers = [...selectedAnswers, optionId]
            }
        } else {
            // Escolha única ou verdadeiro/falso: substitui seleção
            newAnswers = [optionId]
        }

        setSelectedAnswers(newAnswers)
        onAnswer(question.id, newAnswers)
    }

    const isOptionSelected = (optionId: string) => {
        return selectedAnswers.includes(optionId)
    }

    const getOptionStyle = (optionId: string) => {
        const baseStyle = 'p-4 rounded-lg border-2 cursor-pointer transition-all duration-200'

        if (isAnswered) {
            const isCorrect = question.options.find((opt) => opt.id === optionId)?.isCorrect
            const wasSelected = isOptionSelected(optionId)

            if (isCorrect) {
                return `${baseStyle} border-green-500 bg-green-50 text-green-800`
            } else if (wasSelected && !isCorrect) {
                return `${baseStyle} border-red-500 bg-red-50 text-red-800`
            } else {
                return `${baseStyle} border-gray-200 bg-gray-50 text-gray-500 cursor-not-allowed`
            }
        } else {
            return isOptionSelected(optionId)
                ? `${baseStyle} border-blue-500 bg-blue-50 text-blue-800`
                : `${baseStyle} border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50`
        }
    }

    // 6. Render
    return (
        <div className='bg-white rounded-lg shadow-sm p-6 space-y-6'>
            {/* Cabeçalho da questão */}
            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-3'>
                    <span className='text-sm font-medium text-gray-500'>Questão {question.id}</span>
                    <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                            question.difficulty === 'easy'
                                ? 'bg-green-100 text-green-800'
                                : question.difficulty === 'medium'
                                  ? 'bg-yellow-100 text-yellow-800'
                                  : 'bg-red-100 text-red-800'
                        }`}
                    >
                        {question.difficulty === 'easy'
                            ? 'Fácil'
                            : question.difficulty === 'medium'
                              ? 'Médio'
                              : 'Difícil'}
                    </span>
                    <span className='text-sm text-gray-500'>{question.points} pontos</span>
                </div>

                {question.type === 'multiple_choice' && (
                    <span className='text-sm text-blue-600 font-medium'>Múltipla escolha</span>
                )}
            </div>

            {/* Pergunta */}
            <div>
                <h3 className='text-lg font-semibold text-gray-900 mb-4'>{question.question}</h3>
            </div>

            {/* Opções */}
            <div className='space-y-3'>
                {question.options.map((option) => (
                    <button
                        key={option.id}
                        type='button'
                        className={`w-full text-left ${getOptionStyle(option.id)}`}
                        onClick={() => handleOptionClick(option.id)}
                        disabled={isAnswered}
                        aria-label={`Opção ${option.id}: ${option.text}`}
                    >
                        <div className='flex items-center space-x-3'>
                            {/* Checkbox/Radio */}
                            <div className='flex-shrink-0'>
                                {question.type === 'multiple_choice' ? (
                                    <div
                                        className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                                            isOptionSelected(option.id)
                                                ? 'border-blue-500 bg-blue-500'
                                                : 'border-gray-300'
                                        }`}
                                    >
                                        {isOptionSelected(option.id) && (
                                            <svg
                                                className='w-3 h-3 text-white'
                                                fill='currentColor'
                                                viewBox='0 0 20 20'
                                                aria-hidden='true'
                                            >
                                                <path
                                                    fillRule='evenodd'
                                                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                    clipRule='evenodd'
                                                />
                                            </svg>
                                        )}
                                    </div>
                                ) : (
                                    <div
                                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                                            isOptionSelected(option.id)
                                                ? 'border-blue-500 bg-blue-500'
                                                : 'border-gray-300'
                                        }`}
                                    >
                                        {isOptionSelected(option.id) && (
                                            <div className='w-2 h-2 bg-white rounded-full'></div>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Texto da opção */}
                            <span className='flex-1'>{option.text}</span>
                        </div>
                    </button>
                ))}
            </div>

            {/* Explicação (após responder) */}
            {isAnswered && question.explanation && (
                <div className='mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg'>
                    <h4 className='font-semibold text-blue-900 mb-2'>Explicação:</h4>
                    <p className='text-blue-800'>{question.explanation}</p>
                </div>
            )}
        </div>
    )
}
