import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { APP_CONFIG } from '@/shared/utils/constants'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

export const metadata: Metadata = {
    title: APP_CONFIG.name,
    description: APP_CONFIG.description,
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='pt-BR'>
            <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
        </html>
    )
}
