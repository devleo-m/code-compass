'use client';

// 1. Imports
import Link from 'next/link';
import { Card } from '@/shared/components';
import type { Module } from '@/shared/types/learning';

// 2. Tipos/Interfaces
interface ModuleListProps {
  modules: Module[];
  pathId: string;
  className?: string;
}

// 3. Componente
export function ModuleList({
  modules,
  pathId,
  className = '',
}: ModuleListProps) {
  // 4. Lógica
  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 50) return 'bg-yellow-500';
    return 'bg-blue-500';
  };

  // 5. Render
  return (
    <div className={`space-y-6 ${className}`}>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Módulos da Trilha
      </h2>

      <div className="grid gap-6">
        {modules.map((module) => (
          <Card
            key={module.id}
            className="p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                {/* Header do módulo */}
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-sm">
                      {module.order}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {module.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {module.description}
                    </p>
                  </div>
                </div>

                {/* Estatísticas do módulo */}
                <div className="flex items-center space-x-6 mb-4">
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-4 h-4 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <title>Ícone de livro</title>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                    <span className="text-sm text-gray-600">
                      {module.lessons.length} lições
                    </span>
                  </div>

                  {module.quiz && (
                    <div className="flex items-center space-x-2">
                      <svg
                        className="w-4 h-4 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <title>Ícone de verificação</title>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-sm text-gray-600">Quiz</span>
                    </div>
                  )}
                </div>

                {/* Barra de progresso */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      Progresso
                    </span>
                    <span className="text-sm text-gray-600">
                      {module.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(module.progress)}`}
                      style={{ width: `${module.progress}%` }}
                    />
                  </div>
                </div>

                {/* Status do módulo */}
                <div className="flex items-center space-x-3">
                  {module.isCompleted ? (
                    <div className="flex items-center space-x-2">
                      <svg
                        className="w-5 h-5 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <title>Ícone de verificação completa</title>
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm font-medium text-green-600">
                        Concluído
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <title>Ícone de relógio</title>
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm font-medium text-blue-600">
                        Em andamento
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Botão de ação */}
              <div className="ml-6">
                <Link
                  href={`/learning/${pathId}/module/${module.id}`}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  {module.isCompleted ? 'Revisar' : 'Continuar'}
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <title>Ícone de seta direita</title>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

// 6. Componente de módulo individual
export function ModuleCard({
  module,
  pathId,
}: {
  module: Module;
  pathId: string;
}) {
  return (
    <Card className="p-4 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600 font-semibold">{module.order}</span>
          </div>
          <div>
            <h4 className="font-medium text-gray-900">{module.title}</h4>
            <p className="text-sm text-gray-600">
              {module.lessons.length} lições
            </p>
          </div>
        </div>

        <Link
          href={`/learning/${pathId}/module/${module.id}`}
          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          Ver módulo →
        </Link>
      </div>
    </Card>
  );
}
