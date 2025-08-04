'use client';

// 1. Imports
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from './Button';

// 2. Tipos/Interfaces
interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error?: Error;
}

// 3. Componente
export class ErrorBoundary extends Component<Props, State> {
  // 4. Estado inicial
  public state: State = {
    hasError: false
  };

  // 5. Método estático para capturar erros
  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  // 6. Método para log de erros
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary capturou um erro:', error, errorInfo);
    
    // Chama callback personalizado se fornecido
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  // 7. Método para resetar o erro
  private handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  // 8. Render
  public render() {
    if (this.state.hasError) {
      // Renderiza fallback personalizado se fornecido
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Renderiza fallback padrão
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
                         {/* Ícone de Erro */}
             <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
               <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
               </svg>
             </div>

            {/* Título */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ops! Algo deu errado
            </h2>

            {/* Mensagem */}
            <p className="text-gray-600 mb-6">
              Encontramos um problema inesperado. Tente recarregar a página ou entre em contato conosco se o problema persistir.
            </p>

            {/* Detalhes do Erro (apenas em desenvolvimento) */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-6 text-left">
                <summary className="cursor-pointer text-sm font-medium text-gray-700 mb-2">
                  Detalhes do erro (desenvolvimento)
                </summary>
                <div className="bg-gray-100 p-4 rounded text-xs font-mono text-gray-800 overflow-auto">
                  <div className="mb-2">
                    <strong>Erro:</strong> {this.state.error.message}
                  </div>
                  <div>
                    <strong>Stack:</strong>
                    <pre className="whitespace-pre-wrap mt-1">
                      {this.state.error.stack}
                    </pre>
                  </div>
                </div>
              </details>
            )}

            {/* Botões de Ação */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                variant="primary" 
                onClick={this.handleReset}
                className="flex-1 sm:flex-none"
              >
                Tentar Novamente
              </Button>
              
              <Button 
                variant="outline" 
                onClick={() => window.location.reload()}
                className="flex-1 sm:flex-none"
              >
                Recarregar Página
              </Button>
            </div>

            {/* Link de Suporte */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Precisa de ajuda?{' '}
                                 <a 
                   href="/contato" 
                   className="text-blue-600 hover:text-blue-800 font-medium"
                 >
                   Entre em contato
                 </a>
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// 9. Hook para usar ErrorBoundary em componentes funcionais
export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  fallback?: ReactNode,
  onError?: (error: Error, errorInfo: ErrorInfo) => void
) {
  return function WrappedComponent(props: P) {
    return (
      <ErrorBoundary fallback={fallback} onError={onError}>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
}

// 10. Componente de erro simples para uso rápido
export function ErrorFallback({ 
  error, 
  resetErrorBoundary 
}: { 
  error: Error; 
  resetErrorBoundary: () => void;
}) {
  return (
    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
      <div className="flex items-center space-x-3">
                 <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
         </svg>
        <div className="flex-1">
          <h3 className="text-sm font-medium text-red-800">
            Erro: {error.message}
          </h3>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={resetErrorBoundary}
        >
          Tentar Novamente
        </Button>
      </div>
    </div>
  );
} 