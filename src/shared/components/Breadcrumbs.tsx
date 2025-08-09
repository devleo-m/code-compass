'use client'

// 1. Imports
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// 2. Tipos/Interfaces
interface BreadcrumbItem {
    label: string
    href: string
    isActive?: boolean
}

interface BreadcrumbsProps {
    items?: BreadcrumbItem[]
    className?: string
}

// 3. Componente
export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
    // 4. Hooks
    const pathname = usePathname()

    // 5. Lógica
    const generateBreadcrumbs = (): BreadcrumbItem[] => {
        if (items) return items

        const pathSegments = pathname.split('/').filter(Boolean)
        const breadcrumbs: BreadcrumbItem[] = [{ label: 'Início', href: '/', isActive: pathname === '/' }]

        let currentPath = ''
        pathSegments.forEach((segment, index) => {
            currentPath += `/${segment}`

            // Mapear segmentos para labels mais amigáveis
            const label = getSegmentLabel(segment)

            breadcrumbs.push({
                label,
                href: currentPath,
                isActive: index === pathSegments.length - 1,
            })
        })

        return breadcrumbs
    }

    const getSegmentLabel = (segment: string): string => {
        const labelMap: Record<string, string> = {
            login: 'Login',
            dashboard: 'Dashboard',
            learning: 'Trilhas',
            progress: 'Progresso',
            profile: 'Perfil',
            admin: 'Administração',
            frontend: 'Frontend',
            backend: 'Backend',
            sql: 'SQL',
            react: 'React',
            javascript: 'JavaScript',
            typescript: 'TypeScript',
            node: 'Node.js',
            go: 'Go',
            'react-native': 'React Native',
            aws: 'AWS',
            docker: 'Docker',
            linux: 'Linux',
            mongodb: 'MongoDB',
            postgres: 'PostgreSQL',
            redis: 'Redis',
            git: 'Git & GitHub',
        }

        return labelMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1)
    }

    const breadcrumbs = generateBreadcrumbs()

    // 6. Render
    if (breadcrumbs.length <= 1) {
        return null
    }

    return (
        <nav className={`flex items-center space-x-2 text-sm ${className}`} aria-label='Breadcrumb'>
            {breadcrumbs.map((item, index) => (
                <div key={item.href} className='flex items-center'>
                    {index > 0 && (
                        <svg
                            className='w-4 h-4 text-gray-400 mx-2'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            aria-hidden='true'
                        >
                            <path
                                fillRule='evenodd'
                                d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                                clipRule='evenodd'
                            />
                        </svg>
                    )}

                    {item.isActive ? (
                        <span className='text-gray-900 font-medium' aria-current='page'>
                            {item.label}
                        </span>
                    ) : (
                        <Link href={item.href} className='text-gray-500 hover:text-gray-700 transition-colors'>
                            {item.label}
                        </Link>
                    )}
                </div>
            ))}
        </nav>
    )
}

// 7. Hook para usar breadcrumbs em componentes
export function useBreadcrumbs() {
    const pathname = usePathname()

    const getBreadcrumbs = () => {
        const pathSegments = pathname.split('/').filter(Boolean)
        const breadcrumbs: BreadcrumbItem[] = [{ label: 'Início', href: '/', isActive: pathname === '/' }]

        let currentPath = ''
        pathSegments.forEach((segment, index) => {
            currentPath += `/${segment}`

            const label = getSegmentLabel(segment)

            breadcrumbs.push({
                label,
                href: currentPath,
                isActive: index === pathSegments.length - 1,
            })
        })

        return breadcrumbs
    }

    const getSegmentLabel = (segment: string): string => {
        const labelMap: Record<string, string> = {
            login: 'Login',
            dashboard: 'Dashboard',
            learning: 'Trilhas',
            progress: 'Progresso',
            profile: 'Perfil',
            admin: 'Administração',
            frontend: 'Frontend',
            backend: 'Backend',
            sql: 'SQL',
            react: 'React',
            javascript: 'JavaScript',
            typescript: 'TypeScript',
            node: 'Node.js',
            go: 'Go',
            'react-native': 'React Native',
            aws: 'AWS',
            docker: 'Docker',
            linux: 'Linux',
            mongodb: 'MongoDB',
            postgres: 'PostgreSQL',
            redis: 'Redis',
            git: 'Git & GitHub',
        }

        return labelMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1)
    }

    return {
        breadcrumbs: getBreadcrumbs(),
        currentPath: pathname,
        getSegmentLabel,
    }
}
