'use client';

// 1. Imports
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/shared/hooks/useAuth';

// 2. Tipos/Interfaces
interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: 'admin' | 'student';
}

// 3. Componente
export function ProtectedRoute({ children, requiredRole }: ProtectedRouteProps) {
  // 4. Hooks
  const { isLoading, isAuthenticated, isAdmin, isStudent } = useAuth();
  const router = useRouter();

  // 5. Lógica
  useEffect(() => {
    if (!isLoading) {
      // Se não está autenticado, redireciona para login
      if (!isAuthenticated) {
        router.push('/login');
        return;
      }

      // Se tem role específico, verifica permissão
      if (requiredRole) {
        if (requiredRole === 'admin' && !isAdmin) {
          router.push('/dashboard'); // Redireciona para dashboard do aluno
          return;
        }
        if (requiredRole === 'student' && !isStudent) {
          router.push('/admin/dashboard'); // Redireciona para dashboard do admin
          return;
        }
      }
    }
  }, [isLoading, isAuthenticated, isAdmin, isStudent, requiredRole, router]);

  // 6. Render
  // Mostra loading enquanto verifica autenticação
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  // Se não está autenticado, não renderiza nada (será redirecionado)
  if (!isAuthenticated) {
    return null;
  }

  // Se tem role específico e não tem permissão, não renderiza nada
  if (requiredRole) {
    if (requiredRole === 'admin' && !isAdmin) {
      return null;
    }
    if (requiredRole === 'student' && !isStudent) {
      return null;
    }
  }

  // Renderiza o conteúdo protegido
  return <>{children}</>;
} 