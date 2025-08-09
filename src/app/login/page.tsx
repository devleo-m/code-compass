'use client';

// 1. Imports
import { useRouter } from 'next/navigation';
import { LoginForm } from '@/features/auth/components/LoginForm';
import { APP_CONFIG } from '@/shared/utils/constants';

// 2. Componente
export default function LoginPage() {
  // 3. Hooks
  const router = useRouter();

  // 4. Lógica
  const handleLoginSuccess = () => {
    // Redirecionar para o dashboard após login bem-sucedido
    router.push('/dashboard');
  };

  // 5. Render
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* Logo/Título */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {APP_CONFIG.name}
          </h1>
          <p className="text-gray-600">Faça login para acessar sua conta</p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <LoginForm onSuccess={handleLoginSuccess} />
        </div>
      </div>

      {/* Informações adicionais */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-600">
          Plataforma educacional para JavaScript e TypeScript
        </p>
      </div>
    </div>
  );
}
