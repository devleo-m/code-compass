'use client'

// 1. Imports
import Link from 'next/link'
import { APP_CONFIG } from '@/shared/utils/constants'

// 2. Tipos/Interfaces
interface FooterProps {
    className?: string
}

// 3. Componente
export function Footer({ className = '' }: FooterProps) {
    // 4. Render
    return (
        <footer className={`bg-gray-900 text-white ${className}`}>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                    {/* Logo e Descrição */}
                    <div className='col-span-1 md:col-span-2'>
                        <Link href='/' className='text-2xl font-bold text-blue-400'>
                            {APP_CONFIG.name}
                        </Link>
                        <p className='mt-4 text-gray-300 max-w-md'>
                            {APP_CONFIG.description}. Aprenda programação de forma interativa e estruturada.
                        </p>
                        <div className='mt-6 flex space-x-4'>
                            <a
                                href='https://github.com'
                                className='text-gray-400 hover:text-white transition-colors'
                                aria-label='GitHub'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                                    <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                                </svg>
                                <span className='sr-only'>GitHub</span>
                            </a>
                            <a
                                href='https://linkedin.com'
                                className='text-gray-400 hover:text-white transition-colors'
                                aria-label='LinkedIn'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                                    <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                                </svg>
                                <span className='sr-only'>LinkedIn</span>
                            </a>
                        </div>
                    </div>

                    {/* Links Rápidos */}
                    <div>
                        <h3 className='text-lg font-semibold mb-4'>Links Rápidos</h3>
                        <ul className='space-y-2'>
                            <li>
                                <Link href='/login' className='text-gray-300 hover:text-white transition-colors'>
                                    Entrar
                                </Link>
                            </li>
                            <li>
                                <Link href='/learning' className='text-gray-300 hover:text-white transition-colors'>
                                    Trilhas
                                </Link>
                            </li>
                            <li>
                                <Link href='/progress' className='text-gray-300 hover:text-white transition-colors'>
                                    Progresso
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Suporte */}
                    <div>
                        <h3 className='text-lg font-semibold mb-4'>Suporte</h3>
                        <ul className='space-y-2'>
                            <li>
                                <a href='/ajuda' className='text-gray-300 hover:text-white transition-colors'>
                                    Central de Ajuda
                                </a>
                            </li>
                            <li>
                                <a href='/contato' className='text-gray-300 hover:text-white transition-colors'>
                                    Contato
                                </a>
                            </li>
                            <li>
                                <a href='/sobre' className='text-gray-300 hover:text-white transition-colors'>
                                    Sobre Nós
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Linha de Copyright */}
                <div className='mt-8 pt-8 border-t border-gray-800'>
                    <div className='flex flex-col md:flex-row justify-between items-center'>
                        <p className='text-gray-400 text-sm'>
                            © {new Date().getFullYear()} {APP_CONFIG.name}. Todos os direitos reservados.
                        </p>
                        <div className='mt-4 md:mt-0 flex space-x-6 text-sm'>
                            <a href='/termos' className='text-gray-400 hover:text-white transition-colors'>
                                Termos de Uso
                            </a>
                            <a href='/privacidade' className='text-gray-400 hover:text-white transition-colors'>
                                Política de Privacidade
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
