'use client';

// 1. Imports
import Link from 'next/link';
import { Button } from '@/shared/components';
import { useAuth } from '@/shared/hooks/useAuth';
import { APP_CONFIG, ROUTES } from '@/shared/utils/constants';

// 2. Tipos/Interfaces
interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

// 3. Componente
export function Layout({ children, title }: LayoutProps) {
  // 4. Hooks
  const { user, logout, isAdmin } = useAuth();

  // 5. Lógica
  const handleLogout = () => {
    logout();
  };

  // 6. Render
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo e Navegação */}
            <div className="flex items-center space-x-8">
              <Link href={isAdmin ? ROUTES.admin.dashboard : ROUTES.dashboard}>
                <h1 className="text-xl font-bold text-blue-600">
                  {APP_CONFIG.name}
                </h1>
              </Link>
              
              {/* Menu de Navegação */}
              <nav className="hidden md:flex space-x-6">
                {isAdmin ? (
                  <>
                    <Link href={ROUTES.admin.dashboard} className="text-gray-700 hover:text-blue-600">
                      Dashboard
                    </Link>
                    <Link href={ROUTES.admin.content} className="text-gray-700 hover:text-blue-600">
                      Conteúdo
                    </Link>
                    <Link href={ROUTES.admin.users} className="text-gray-700 hover:text-blue-600">
                      Usuários
                    </Link>
                    <Link href={ROUTES.admin.analytics} className="text-gray-700 hover:text-blue-600">
                      Analytics
                    </Link>
                  </>
                ) : (
                  <>
                    <Link href={ROUTES.dashboard} className="text-gray-700 hover:text-blue-600">
                      Dashboard
                    </Link>
                    <Link href={ROUTES.learning.javascript} className="text-gray-700 hover:text-blue-600">
                      JavaScript
                    </Link>
                    <Link href={ROUTES.learning.typescript} className="text-gray-700 hover:text-blue-600">
                      TypeScript
                    </Link>
                    <Link href={ROUTES.progress} className="text-gray-700 hover:text-blue-600">
                      Progresso
                    </Link>
                  </>
                )}
              </nav>
            </div>

            {/* Perfil e Logout */}
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-700">
                Olá, <span className="font-medium">{user?.name}</span>
              </div>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                Sair
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {title && (
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          </div>
        )}
        {children}
      </main>
    </div>
  );
}
 