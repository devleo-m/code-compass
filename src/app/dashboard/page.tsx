'use client';

import Link from 'next/link';
// 1. Imports
import { useEffect, useState } from 'react';
import { Button, Card, Layout, ProtectedRoute } from '@/shared/components';
import { getAllLearningPaths } from '@/shared/data/learningPaths';
import { useAuth } from '@/shared/hooks/useAuth';
import type { LearningPath } from '@/shared/types/learning';

// 2. Componente
export default function DashboardPage() {
  // 3. Estados
  const [learningPaths, setLearningPaths] = useState<LearningPath[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // 4. Hooks
  const { user } = useAuth();

  // 5. Lógica
  useEffect(() => {
    // Carregar trilhas de aprendizado
    const paths = getAllLearningPaths();
    setLearningPaths(paths);
    setIsLoading(false);
  }, []);

  // 6. Render
  return (
    <ProtectedRoute>
      <Layout>
        <div className="space-y-8">
          {/* Header */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Olá, {user?.name}! 👋
                </h1>
                <p className="text-gray-600 mt-2">
                  Bem-vindo ao seu dashboard de aprendizado
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Tipo de conta</p>
                <p className="text-lg font-semibold text-blue-600 capitalize">
                  {user?.type}
                </p>
              </div>
            </div>
          </div>

          {/* Dashboard Diferenciado por Tipo de Usuário */}
          {user?.type === 'admin' ? (
            <AdminDashboard />
          ) : (
            <StudentDashboard
              learningPaths={learningPaths}
              isLoading={isLoading}
            />
          )}
        </div>
      </Layout>
    </ProtectedRoute>
  );
}

// Componente Dashboard para Administradores
function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Estatísticas da Plataforma */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">150</div>
          <div className="text-gray-600">Usuários Ativos</div>
        </Card>
        <Card className="p-6 text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">12</div>
          <div className="text-gray-600">Trilhas Criadas</div>
        </Card>
        <Card className="p-6 text-center">
          <div className="text-3xl font-bold text-purple-600 mb-2">85%</div>
          <div className="text-gray-600">Taxa de Conclusão</div>
        </Card>
      </div>

      {/* Ações de Administração */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Painel de Administração
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Criar Nova Trilha */}
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-label="Ícone de adicionar"
                  role="img"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Criar Nova Trilha
              </h3>
              <p className="text-gray-600 mb-4">
                Crie uma nova trilha de aprendizado para os usuários
              </p>
              <Button variant="primary" className="w-full">
                Criar Trilha
              </Button>
            </div>
          </Card>

          {/* Gerenciar Conteúdo */}
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-label="Ícone de editar"
                  role="img"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Editar Conteúdo
              </h3>
              <p className="text-gray-600 mb-4">
                Edite trilhas, lições e quizzes existentes
              </p>
              <Button variant="outline" className="w-full">
                Gerenciar Conteúdo
              </Button>
            </div>
          </Card>

          {/* Gerenciar Usuários */}
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-label="Ícone de usuários"
                  role="img"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Gerenciar Usuários
              </h3>
              <p className="text-gray-600 mb-4">
                Visualize estatísticas e gerencie contas de usuários
              </p>
              <Button variant="outline" className="w-full">
                Ver Usuários
              </Button>
            </div>
          </Card>

          {/* Criar Quiz */}
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-label="Ícone de quiz"
                  role="img"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Criar Quiz
              </h3>
              <p className="text-gray-600 mb-4">
                Crie quizzes para testar o conhecimento dos usuários
              </p>
              <Button variant="outline" className="w-full">
                Criar Quiz
              </Button>
            </div>
          </Card>

          {/* Relatórios */}
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-label="Ícone de relatórios"
                  role="img"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Relatórios
              </h3>
              <p className="text-gray-600 mb-4">
                Visualize relatórios detalhados da plataforma
              </p>
              <Button variant="outline" className="w-full">
                Ver Relatórios
              </Button>
            </div>
          </Card>

          {/* Configurações */}
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-label="Ícone de configurações"
                  role="img"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Configurações
              </h3>
              <p className="text-gray-600 mb-4">
                Configure parâmetros da plataforma
              </p>
              <Button variant="outline" className="w-full">
                Configurar
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

// Componente Dashboard para Alunos
function StudentDashboard({
  learningPaths,
  isLoading,
}: {
  learningPaths: LearningPath[];
  isLoading: boolean;
}) {
  return (
    <div className="space-y-8">
      {/* Trilhas de Aprendizado */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">
            Trilhas de Aprendizado
          </h2>
          <Link href="/progress">
            <Button variant="outline">Ver Progresso</Button>
          </Link>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-sm p-6 animate-pulse"
              >
                <div className="w-16 h-16 bg-gray-300 rounded-full mb-4"></div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-3 bg-gray-300 rounded mb-4"></div>
                <div className="h-8 bg-gray-300 rounded"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningPaths.map((path) => (
              <Card
                key={path.id}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  {/* Ícone */}
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                    {path.icon}
                  </div>

                  {/* Título e descrição */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {path.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{path.description}</p>

                  {/* Estatísticas */}
                  <div className="flex items-center justify-center space-x-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-label="Ícone de lições"
                        role="img"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                      <span>{path.totalLessons} lições</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-label="Ícone de tempo"
                        role="img"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{path.estimatedTime}h</span>
                    </div>
                  </div>

                  {/* Dificuldade */}
                  <div className="mb-4">
                    <span
                      className={`
                      inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                      ${
                        path.difficulty === 'beginner'
                          ? 'bg-green-100 text-green-800'
                          : path.difficulty === 'intermediate'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                      }
                    `}
                    >
                      {path.difficulty === 'beginner'
                        ? 'Iniciante'
                        : path.difficulty === 'intermediate'
                          ? 'Intermediário'
                          : 'Avançado'}
                    </span>
                  </div>

                  {/* Botão de ação */}
                  <Link href={`/learning/${path.id}`} className="block">
                    <Button variant="primary" className="w-full">
                      Começar Trilha
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Seção de atividades recentes */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Atividades Recentes
        </h3>
        <div className="text-center py-8 text-gray-500">
          <svg className="w-12 h-12 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {/* depois analisar esse aria-hidden acima */}
            <title>Ícone de atividade</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
          <p>Nenhuma atividade recente</p>
          <p className="text-sm">
            Comece uma trilha para ver suas atividades aqui
          </p>
        </div>
      </div>
    </div>
  );
}
