'use client';

// 1. Imports
import { useMemo, useState } from 'react';
import { Button } from '@/shared/components';
import type {
  LearningFilters,
  LearningPath,
  Lesson,
  Module,
  SearchResult,
} from '@/shared/types/learning';

// 2. Tipos/Interfaces
interface SearchAndFiltersProps {
  paths: LearningPath[];
  onSearch: (results: SearchResult[]) => void;
  onFiltersChange: (filters: LearningFilters) => void;
  className?: string;
}

interface FilterOption {
  value: string;
  label: string;
  count?: number;
}

// 3. Componente principal
export function SearchAndFilters({
  paths,
  onSearch,
  onFiltersChange,
  className = '',
}: SearchAndFiltersProps) {
  // 4. Estados
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<LearningFilters>({});
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  // 5. Lógica
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const query = searchQuery.toLowerCase();
    const results: SearchResult[] = [];

    paths.forEach((path) => {
      // Buscar no nome e descrição da trilha
      if (
        path.name.toLowerCase().includes(query) ||
        path.description.toLowerCase().includes(query)
      ) {
        results.push({
          type: 'path',
          id: path.id,
          title: path.name,
          description: path.description,
          path: `/learning/${path.id}`,
          relevance: 100,
        });
      }

      // Buscar nos módulos
      path.modules.forEach((module) => {
        if (
          module.title.toLowerCase().includes(query) ||
          module.description.toLowerCase().includes(query)
        ) {
          results.push({
            type: 'module',
            id: module.id,
            title: module.title,
            description: module.description,
            path: `/learning/${path.id}/module/${module.id}`,
            relevance: 80,
          });
        }

        // Buscar nas lições
        module.lessons.forEach((lesson) => {
          if (
            lesson.title.toLowerCase().includes(query) ||
            lesson.description.toLowerCase().includes(query) ||
            lesson.content.toLowerCase().includes(query)
          ) {
            results.push({
              type: 'lesson',
              id: lesson.id,
              title: lesson.title,
              description: lesson.description,
              path: `/learning/${path.id}/module/${module.id}/lesson/${lesson.id}`,
              relevance: 60,
            });
          }
        });
      });
    });

    // Ordenar por relevância
    return results.sort((a, b) => b.relevance - a.relevance);
  }, [searchQuery, paths]);

  const handleSearch = () => {
    onSearch(searchResults);
  };

  const handleFiltersChange = (newFilters: Partial<LearningFilters>) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
    onFiltersChange(updatedFilters);
  };

  const clearFilters = () => {
    setFilters({});
    onFiltersChange({});
  };

  // 6. Render
  return (
    <div className={`space-y-4 ${className}`}>
      {/* Barra de busca */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg
            className="h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          placeholder="Buscar lições, módulos ou trilhas..."
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
          <Button
            variant="primary"
            size="sm"
            onClick={handleSearch}
            disabled={!searchQuery.trim()}
          >
            Buscar
          </Button>
        </div>
      </div>

      {/* Filtros */}
      <div className="border border-gray-200 rounded-lg">
        <button
          onClick={() => setIsFiltersOpen(!isFiltersOpen)}
          className="w-full px-4 py-2 text-left flex items-center justify-between hover:bg-gray-50"
        >
          <span className="font-medium text-gray-900">Filtros</span>
          <svg
            className={`w-5 h-5 text-gray-500 transform transition-transform ${
              isFiltersOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isFiltersOpen && (
          <div className="px-4 pb-4 space-y-4">
            {/* Dificuldade */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Dificuldade
              </label>
              <div className="space-y-2">
                {[
                  { value: 'beginner', label: 'Iniciante' },
                  { value: 'intermediate', label: 'Intermediário' },
                  { value: 'advanced', label: 'Avançado' },
                ].map((option) => (
                  <label key={option.value} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.difficulty === option.value}
                      onChange={(e) =>
                        handleFiltersChange({
                          difficulty: e.target.checked
                            ? (option.value as any)
                            : undefined,
                        })
                      }
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Duração */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Duração
              </label>
              <div className="space-y-2">
                {[
                  { value: 'short', label: 'Curta (< 10h)' },
                  { value: 'medium', label: 'Média (10-30h)' },
                  { value: 'long', label: 'Longa (> 30h)' },
                ].map((option) => (
                  <label key={option.value} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.duration === option.value}
                      onChange={(e) =>
                        handleFiltersChange({
                          duration: e.target.checked
                            ? (option.value as any)
                            : undefined,
                        })
                      }
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <div className="space-y-2">
                {[
                  { value: 'not_started', label: 'Não iniciado' },
                  { value: 'in_progress', label: 'Em andamento' },
                  { value: 'completed', label: 'Concluído' },
                ].map((option) => (
                  <label key={option.value} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.status === option.value}
                      onChange={(e) =>
                        handleFiltersChange({
                          status: e.target.checked
                            ? (option.value as any)
                            : undefined,
                        })
                      }
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Botões de ação */}
            <div className="flex space-x-2 pt-2">
              <Button variant="outline" size="sm" onClick={clearFilters}>
                Limpar Filtros
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => onFiltersChange(filters)}
              >
                Aplicar Filtros
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// 7. Componente de resultados de busca
export function SearchResults({
  results,
  onResultClick,
}: {
  results: SearchResult[];
  onResultClick: (result: SearchResult) => void;
}) {
  if (results.length === 0) {
    return (
      <div className="text-center py-8">
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <h3 className="mt-2 text-sm font-medium text-gray-900">
          Nenhum resultado encontrado
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          Tente ajustar seus termos de busca ou filtros.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-900">
        Resultados ({results.length})
      </h3>

      <div className="space-y-3">
        {results.map((result) => (
          <div
            key={`${result.type}-${result.id}`}
            className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => onResultClick(result)}
          >
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                {result.type === 'path' && <span className="text-2xl">📚</span>}
                {result.type === 'module' && (
                  <span className="text-2xl">📖</span>
                )}
                {result.type === 'lesson' && (
                  <span className="text-2xl">📝</span>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="text-sm font-medium text-gray-900 truncate">
                    {result.title}
                  </h4>
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                      result.type === 'path'
                        ? 'bg-blue-100 text-blue-800'
                        : result.type === 'module'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-purple-100 text-purple-800'
                    }`}
                  >
                    {result.type === 'path'
                      ? 'Trilha'
                      : result.type === 'module'
                        ? 'Módulo'
                        : 'Lição'}
                  </span>
                </div>

                <p className="text-sm text-gray-600 line-clamp-2">
                  {result.description}
                </p>

                <div className="mt-2 flex items-center space-x-4 text-xs text-gray-500">
                  <span>Relevância: {result.relevance}%</span>
                </div>
              </div>

              <div className="flex-shrink-0">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
