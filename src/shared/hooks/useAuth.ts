'use client';

import { useRouter } from 'next/navigation';
// 1. Imports
import { useEffect, useState } from 'react';
import type { User } from '@/shared/types';
import { AUTH_CONFIG, STORAGE_KEYS } from '@/shared/utils/constants';

// 2. Tipos/Interfaces
interface LoginCredentials {
  email: string;
  password: string;
}

interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

// 3. Hook
export function useAuth() {
  // 4. Estados
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isLoading: true,
    error: null,
  });

  // 5. Hooks
  const router = useRouter();

  // 6. Lógica
  useEffect(() => {
    // Verificar se há usuário salvo no localStorage
    const savedUser = localStorage.getItem(STORAGE_KEYS.user);
    if (savedUser) {
      try {
        const user = JSON.parse(savedUser) as User;
        setAuthState({ user, isLoading: false, error: null });
      } catch {
        localStorage.removeItem(STORAGE_KEYS.user);
        setAuthState({ user: null, isLoading: false, error: null });
      }
    } else {
      setAuthState({ user: null, isLoading: false, error: null });
    }
  }, []);

  const login = async (credentials: LoginCredentials): Promise<boolean> => {
    setAuthState((prev) => ({ ...prev, isLoading: true, error: null }));

    try {
      // Simulação de delay de API
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Verificar credenciais
      let user: User | null = null;

      if (
        credentials.email === AUTH_CONFIG.admin.email &&
        credentials.password === AUTH_CONFIG.admin.password
      ) {
        user = {
          id: 'admin-1',
          email: AUTH_CONFIG.admin.email,
          name: 'Administrador',
          type: 'admin',
          createdAt: new Date(),
          lastLogin: new Date(),
          preferences: {
            theme: 'light',
            notifications: true,
          },
        };
      } else if (
        credentials.email === AUTH_CONFIG.student.email &&
        credentials.password === AUTH_CONFIG.student.password
      ) {
        user = {
          id: 'student-1',
          email: AUTH_CONFIG.student.email,
          name: 'Aluno',
          type: 'student',
          createdAt: new Date(),
          lastLogin: new Date(),
          preferences: {
            theme: 'light',
            notifications: true,
          },
        };
      } else {
        throw new Error('Credenciais inválidas');
      }

      // Salvar no localStorage
      localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(user));

      setAuthState({ user, isLoading: false, error: null });
      return true;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Erro ao fazer login';
      setAuthState((prev) => ({
        ...prev,
        isLoading: false,
        error: errorMessage,
      }));
      return false;
    }
  };

  const logout = () => {
    // Limpar localStorage
    localStorage.removeItem(STORAGE_KEYS.user);

    // Limpar estado
    setAuthState({ user: null, isLoading: false, error: null });

    // Redirecionar para página inicial
    router.push('/');
  };

  const updateUser = (updates: Partial<User>) => {
    if (authState.user) {
      const updatedUser = { ...authState.user, ...updates };
      localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(updatedUser));
      setAuthState((prev) => ({ ...prev, user: updatedUser }));
    }
  };

  // 7. Retorno
  return {
    user: authState.user,
    isLoading: authState.isLoading,
    error: authState.error,
    login,
    logout,
    updateUser,
    isAuthenticated: !!authState.user,
    isAdmin: authState.user?.type === 'admin',
    isStudent: authState.user?.type === 'student',
  };
}
