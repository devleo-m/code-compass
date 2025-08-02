// 1. Imports
import Link from 'next/link';
import { Button } from '@/shared/components';
import { APP_CONFIG } from '@/shared/utils/constants';

// 2. Componente
export default function LandingPage() {
  // 3. Render
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">
                {APP_CONFIG.name}
              </h1>
            </div>
            <Link href="/login">
              <Button variant="primary">
                Entrar
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Aprenda JavaScript e TypeScript de forma interativa
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {APP_CONFIG.description}. Trilhas estruturadas, quizzes interativos e 
            acompanhamento de progresso para dominar as tecnologias web.
          </p>
          <Link href="/login">
            <Button size="lg" variant="primary">
              Começar Agora
            </Button>
          </Link>
        </div>
      </section>

      {/* Cards de Tecnologias */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Escolha sua trilha de aprendizado
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* JavaScript Card */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">JS</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                JavaScript
              </h4>
              <p className="text-gray-600 mb-6">
                Domine os fundamentos da linguagem mais popular da web. 
                Do básico ao avançado, com exemplos práticos e projetos reais.
              </p>
              <Link href="/login">
                <Button variant="outline" className="w-full">
                  Estudar JavaScript
                </Button>
              </Link>
            </div>

            {/* TypeScript Card */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">TS</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                TypeScript
              </h4>
              <p className="text-gray-600 mb-6">
                Evolua do JavaScript para TypeScript. Tipagem estática, 
                melhor tooling e desenvolvimento mais seguro e produtivo.
              </p>
              <Link href="/login">
                <Button variant="outline" className="w-full">
                  Estudar TypeScript
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Por que escolher o Code Compass?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-xl">📚</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Conteúdo Estruturado
              </h4>
              <p className="text-gray-600">
                Trilhas de aprendizado organizadas do básico ao avançado, 
                com progressão lógica e clara.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-xl">🎯</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Quizzes Interativos
              </h4>
              <p className="text-gray-600">
                Teste seus conhecimentos com quizzes dinâmicos e receba 
                feedback imediato sobre seu progresso.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-xl">📊</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Acompanhamento de Progresso
              </h4>
              <p className="text-gray-600">
                Visualize seu progresso, conquiste badges e mantenha-se 
                motivado com metas claras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h4 className="text-2xl font-bold mb-4">
            {APP_CONFIG.name}
          </h4>
          <p className="text-gray-300 mb-6">
            Plataforma educacional para desenvolvedores
          </p>
          <div className="text-sm text-gray-400">
            © 2024 Code Compass. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
