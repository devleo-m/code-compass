'use client'

import { useRouter } from 'next/navigation'
// 1. Imports
import { useEffect, useState } from 'react'
import { Button } from '@/shared/components'
import { useAuth } from '@/shared/hooks/useAuth'
import { AUTH_CONFIG } from '@/shared/utils/constants'

// 2. Tipos/Interfaces
interface LoginFormProps {
    onSuccess?: () => void
}

// 3. Componente
export function LoginForm({ onSuccess }: LoginFormProps) {
    // 4. Estados
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userType, setUserType] = useState<'admin' | 'student'>('student')

    // 5. Hooks
    const { login, isLoading, error } = useAuth()
    const router = useRouter()

    // 6. Lógica
    const handleUserTypeChange = (type: 'admin' | 'student') => {
        setUserType(type)
        if (type === 'admin') {
            setEmail(AUTH_CONFIG.admin.email)
            setPassword(AUTH_CONFIG.admin.password)
        } else {
            setEmail(AUTH_CONFIG.student.email)
            setPassword(AUTH_CONFIG.student.password)
        }
    }

    // Carregar credenciais automaticamente quando o componente montar
    useEffect(() => {
        setEmail(AUTH_CONFIG.student.email)
        setPassword(AUTH_CONFIG.student.password)
    }, [])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const success = await login({ email, password })
        if (success) {
            // Chamar callback se existir
            if (onSuccess) {
                onSuccess()
            } else {
                // Redirecionar para dashboard após login bem-sucedido
                router.push('/dashboard')
            }
        }
    }

    // 7. Render
    return (
        <div className='w-full max-w-md mx-auto'>
            <form onSubmit={handleSubmit} className='space-y-6'>
                {/* Seleção de tipo de usuário */}
                <fieldset className='space-y-2'>
                    <legend className='block text-sm font-medium text-gray-900'>Tipo de Usuário</legend>
                    <div className='flex space-x-4'>
                        <label className='flex items-center'>
                            <input
                                type='radio'
                                name='userType'
                                value='student'
                                checked={userType === 'student'}
                                onChange={() => handleUserTypeChange('student')}
                                className='mr-2'
                            />
                            <span className='text-sm font-medium text-gray-900'>Aluno</span>
                        </label>
                        <label className='flex items-center'>
                            <input
                                type='radio'
                                name='userType'
                                value='admin'
                                checked={userType === 'admin'}
                                onChange={() => handleUserTypeChange('admin')}
                                className='mr-2'
                            />
                            <span className='text-sm font-medium text-gray-900'>Administrador</span>
                        </label>
                    </div>
                </fieldset>

                {/* Email */}
                <div>
                    <label htmlFor='email' className='block text-sm font-medium text-gray-900'>
                        Email
                    </label>
                    <input
                        id='email'
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                        placeholder='Digite seu email'
                        required
                    />
                </div>

                {/* Senha */}
                <div>
                    <label htmlFor='password' className='block text-sm font-medium text-gray-900'>
                        Senha
                    </label>
                    <input
                        id='password'
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                        placeholder='Digite sua senha'
                        required
                    />
                </div>

                {/* Erro */}
                {error && <div className='text-red-600 text-sm bg-red-50 p-3 rounded-md'>{error}</div>}

                {/* Botão de login */}
                <Button type='submit' disabled={isLoading} className='w-full'>
                    {isLoading ? 'Entrando...' : 'Entrar'}
                </Button>

                {/* Credenciais de teste */}
                <div className='text-xs text-gray-600 bg-gray-50 p-3 rounded-md'>
                    <p className='font-medium mb-1 text-gray-900'>Credenciais de Teste:</p>
                    <p>
                        <strong>Admin:</strong> {AUTH_CONFIG.admin.email} / {AUTH_CONFIG.admin.password}
                    </p>
                    <p>
                        <strong>Aluno:</strong> {AUTH_CONFIG.student.email} / {AUTH_CONFIG.student.password}
                    </p>
                </div>
            </form>
        </div>
    )
}
