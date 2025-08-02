# Code Compass - Plano Detalhado do Projeto

## 1. Visão Geral do Projeto

### 1.1 Conceito
O **Code Compass** é uma plataforma educacional interativa que oferece trilhas de aprendizado estruturadas para JavaScript e TypeScript. O projeto combina conteúdo teórico, quizzes interativos e gamificação para criar uma experiência de aprendizado envolvente.

### 1.2 Público-Alvo
- **Iniciantes**: Pessoas que estão começando a programar
- **Intermediários**: Desenvolvedores que querem aprimorar conhecimentos
- **Estudantes**: Alunos de cursos de programação
- **Profissionais**: Desenvolvedores que querem revisar conceitos

### 1.3 Objetivos
- Fornecer aprendizado estruturado e progressivo
- Criar experiência gamificada e envolvente
- Permitir acompanhamento de progresso individual
- Oferecer conteúdo prático e teórico integrado

## 2. Sistema de Cores e Design

### 2.1 Paleta de Cores Principal
```css
/* Cores Primárias */
--primary-blue: #2563eb;      /* Azul principal */
--primary-dark: #1e40af;      /* Azul escuro */
--primary-light: #3b82f6;     /* Azul claro */

/* Cores Secundárias */
--secondary-purple: #7c3aed;  /* Roxo para destaque */
--secondary-green: #10b981;   /* Verde para sucesso */
--secondary-orange: #f59e0b;  /* Laranja para alertas */

/* Cores Neutras */
--neutral-50: #f8fafc;        /* Fundo claro */
--neutral-100: #f1f5f9;       /* Fundo secundário */
--neutral-200: #e2e8f0;       /* Bordas */
--neutral-600: #475569;       /* Texto secundário */
--neutral-800: #1e293b;       /* Texto principal */
--neutral-900: #0f172a;       /* Fundo escuro */

/* Estados */
--success: #10b981;           /* Verde sucesso */
--warning: #f59e0b;           /* Laranja aviso */
--error: #ef4444;             /* Vermelho erro */
--info: #3b82f6;              /* Azul informação */
```

### 2.2 Tipografia
- **Fonte Principal**: Inter (Google Fonts)
- **Títulos**: Font-weight 600-700
- **Corpo**: Font-weight 400-500
- **Hierarquia**: h1 (2.5rem), h2 (2rem), h3 (1.5rem), h4 (1.25rem)

### 2.3 Design System
- **Border Radius**: 8px (padrão), 12px (cards), 16px (modais)
- **Shadows**: Subtle (0 1px 3px), Medium (0 4px 6px), Large (0 10px 15px)
- **Spacing**: 4px, 8px, 16px, 24px, 32px, 48px, 64px
- **Transitions**: 150ms ease-in-out

## 3. Estrutura de Páginas e Rotas

### 3.1 Páginas Públicas (Sem Login)
```
/                           # Landing Page
/login                      # Página de Login
```

### 3.2 Páginas do Aluno
```
/dashboard                  # Dashboard do Aluno
/learning/javascript        # Trilha JavaScript
/learning/typescript        # Trilha TypeScript
/lesson/[id]               # Página da Lição
/quiz/[id]                 # Quiz Interativo
/progress                   # Progresso Geral
/profile                    # Perfil do Aluno
```

### 3.3 Páginas do Admin
```
/admin/dashboard           # Dashboard Admin
/admin/content             # Gerenciar Conteúdo
/admin/users               # Gerenciar Usuários
/admin/analytics           # Analytics
/admin/settings            # Configurações
```

## 4. Detalhamento das Páginas

### 4.1 Landing Page (/)
**Objetivo**: Apresentar o projeto e direcionar para login

**Elementos**:
- Header com logo e botão "Entrar"
- Hero section com título e descrição
- Cards de tecnologias (JavaScript/TypeScript)
- Seção de benefícios
- Footer com informações

**Layout**:
```
┌─────────────────────────────────────┐
│ Header: Logo + "Entrar"             │
├─────────────────────────────────────┤
│ Hero: Título + Descrição            │
├─────────────────────────────────────┤
│ Cards: JS | TS                      │
├─────────────────────────────────────┤
│ Benefícios: 3 colunas               │
├─────────────────────────────────────┤
│ Footer: Links + Info                │
└─────────────────────────────────────┘
```

### 4.2 Página de Login (/login)
**Objetivo**: Autenticação simulada

**Elementos**:
- Formulário de login
- Credenciais fixas:
  - Admin: admin@codecompass.com / admin123
  - Aluno: aluno@codecompass.com / aluno123
- Seleção de tipo de usuário
- Validação de campos

**Layout**:
```
┌─────────────────────────────────────┐
│ Logo + Título                       │
├─────────────────────────────────────┤
│ Formulário de Login                 │
│ - Email                             │
│ - Senha                             │
│ - Tipo (Admin/Aluno)                │
│ - Botão "Entrar"                    │
├─────────────────────────────────────┤
│ Credenciais de Teste                │
└─────────────────────────────────────┘
```

### 4.3 Dashboard do Aluno (/dashboard)
**Objetivo**: Visão geral do progresso e acesso rápido

**Elementos**:
- Header com navegação e perfil
- Cards de progresso geral
- Trilhas disponíveis (JS/TS)
- Últimas atividades
- Próximas lições recomendadas

**Layout**:
```
┌─────────────────────────────────────┐
│ Header: Nav + Perfil                │
├─────────────────────────────────────┤
│ Progresso Geral: 3 cards            │
├─────────────────────────────────────┤
│ Trilhas: JS | TS                    │
├─────────────────────────────────────┤
│ Atividades Recentes                 │
├─────────────────────────────────────┤
│ Próximas Lições                     │
└─────────────────────────────────────┘
```

### 4.4 Trilha de Aprendizado (/learning/[tech])
**Objetivo**: Listar módulos e lições da tecnologia

**Elementos**:
- Breadcrumb de navegação
- Lista de módulos organizados
- Indicadores de progresso
- Status de cada lição (não iniciado, em progresso, concluído)
- Filtros e busca

**Layout**:
```
┌─────────────────────────────────────┐
│ Breadcrumb: Home > JavaScript       │
├─────────────────────────────────────┤
│ Header: Título + Progresso Geral    │
├─────────────────────────────────────┤
│ Módulos:                            │
│ ┌─────────────────────────────────┐ │
│ │ Módulo 1: Fundamentos           │ │
│ │ [✓] [✓] [○] [○] [○]            │ │
│ └─────────────────────────────────┘ │
│ ┌─────────────────────────────────┐ │
│ │ Módulo 2: Variáveis e Tipos     │ │
│ │ [○] [○] [○] [○] [○]            │ │
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘
```

### 4.5 Página da Lição (/lesson/[id])
**Objetivo**: Exibir conteúdo teórico da lição

**Elementos**:
- Breadcrumb de navegação
- Conteúdo em markdown
- Navegação entre lições (anterior/próximo)
- Botão para iniciar quiz
- Sistema de anotações
- Indicador de progresso

**Layout**:
```
┌─────────────────────────────────────┐
│ Breadcrumb: Home > JS > Módulo 1    │
├─────────────────────────────────────┤
│ Navegação: ← Anterior | Próximo →   │
├─────────────────────────────────────┤
│ Conteúdo da Lição                   │
│ (Markdown renderizado)              │
├─────────────────────────────────────┤
│ Ações: [Anotar] [Quiz] [Concluir]   │
└─────────────────────────────────────┘
```

### 4.6 Quiz Interativo (/quiz/[id])
**Objetivo**: Avaliar conhecimento através de perguntas

**Elementos**:
- Barra de progresso do quiz
- Timer (opcional)
- Pergunta atual
- Alternativas de resposta
- Feedback imediato
- Navegação entre perguntas

**Layout**:
```
┌─────────────────────────────────────┐
│ Progresso: [████████░░] 8/10        │
├─────────────────────────────────────┤
│ Pergunta 8 de 10                    │
│ "Qual é a diferença entre let e var?"│
├─────────────────────────────────────┤
│ Alternativas:                       │
│ ○ let tem escopo de bloco           │
│ ○ var tem escopo de bloco           │
│ ○ Não há diferença                  │
│ ○ let é mais lento                  │
├─────────────────────────────────────┤
│ Ações: [Anterior] [Próximo]         │
└─────────────────────────────────────┘
```

### 4.7 Dashboard do Admin (/admin/dashboard)
**Objetivo**: Visão geral do sistema para administradores

**Elementos**:
- Header com navegação admin
- Estatísticas gerais (usuários, conteúdo, quizzes)
- Gráficos de atividade
- Ações rápidas
- Notificações do sistema

**Layout**:
```
┌─────────────────────────────────────┐
│ Header: Admin Nav + Logout          │
├─────────────────────────────────────┤
│ Stats: Usuários | Conteúdo | Quizzes│
├─────────────────────────────────────┤
│ Gráficos de Atividade               │
├─────────────────────────────────────┤
│ Ações Rápidas:                      │
│ [Adicionar Lição] [Criar Quiz]      │
├─────────────────────────────────────┤
│ Notificações do Sistema             │
└─────────────────────────────────────┘
```

## 5. Estrutura de Dados

### 5.1 Usuário (User)
```typescript
interface User {
  id: string;
  email: string;
  name: string;
  type: 'admin' | 'student';
  createdAt: Date;
  lastLogin: Date;
  preferences: {
    theme: 'light' | 'dark';
    notifications: boolean;
  };
}
```

### 5.2 Trilha de Aprendizado (LearningPath)
```typescript
interface LearningPath {
  id: string;
  technology: 'javascript' | 'typescript';
  title: string;
  description: string;
  modules: Module[];
  totalLessons: number;
  estimatedTime: number; // em minutos
}
```

### 5.3 Módulo (Module)
```typescript
interface Module {
  id: string;
  title: string;
  description: string;
  order: number;
  lessons: Lesson[];
  quiz?: Quiz;
}
```

### 5.4 Lição (Lesson)
```typescript
interface Lesson {
  id: string;
  title: string;
  content: string; // markdown
  order: number;
  estimatedTime: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
}
```

### 5.5 Quiz (Quiz)
```typescript
interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  timeLimit?: number; // em segundos
  passingScore: number; // porcentagem
}
```

### 5.6 Pergunta (Question)
```typescript
interface Question {
  id: string;
  text: string;
  type: 'multiple-choice' | 'true-false';
  options: string[];
  correctAnswer: number;
  explanation?: string;
}
```

### 5.7 Progresso (Progress)
```typescript
interface Progress {
  userId: string;
  lessonId: string;
  status: 'not-started' | 'in-progress' | 'completed';
  completedAt?: Date;
  score?: number;
  timeSpent: number; // em segundos
  notes?: string;
}
```

## 6. Fluxo de Usuário

### 6.1 Fluxo do Aluno
```
1. Acessa Landing Page
2. Clica em "Entrar"
3. Faz login como aluno
4. Vê Dashboard com progresso
5. Escolhe trilha (JS ou TS)
6. Vê lista de módulos
7. Clica em uma lição
8. Lê conteúdo teórico
9. Faz anotações (opcional)
10. Inicia quiz da lição
11. Responde perguntas
12. Vê resultados
13. Volta para trilha
14. Continua próxima lição
```

### 6.2 Fluxo do Admin
```
1. Acessa Landing Page
2. Clica em "Entrar"
3. Faz login como admin
4. Vê Dashboard admin
5. Acessa "Gerenciar Conteúdo"
6. Cria/edita lições
7. Cria/edita quizzes
8. Visualiza analytics
9. Gerencia usuários
```

## 7. Funcionalidades Específicas

### 7.1 Sistema de Gamificação
- **Pontos**: Ganha pontos por completar lições
- **Badges**: Conquistas por marcos específicos
- **Níveis**: Sistema de progressão por nível
- **Ranking**: Comparação com outros alunos (opcional)

### 7.2 Sistema de Anotações
- Anotações por lição
- Exportação de anotações
- Busca em anotações
- Compartilhamento (futuro)

### 7.3 Sistema de Progresso
- Progresso por lição
- Progresso por módulo
- Progresso geral
- Gráficos de evolução
- Metas personalizadas

### 7.4 Sistema de Quizzes
- Diferentes tipos de pergunta
- Timer opcional
- Feedback imediato
- Explicações das respostas
- Histórico de tentativas

## 8. Responsividade

### 8.1 Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### 8.2 Adaptações Mobile
- Menu hambúrguer
- Cards empilhados
- Botões maiores
- Navegação simplificada
- Conteúdo otimizado

## 9. Performance e SEO

### 9.1 Otimizações
- Lazy loading de componentes
- Code splitting por rota
- Otimização de imagens
- Cache de conteúdo
- Bundle analysis

### 9.2 SEO
- Meta tags dinâmicas
- Sitemap
- URLs semânticas
- Schema markup
- Open Graph tags

## 10. Acessibilidade

### 10.1 Implementações
- ARIA labels e roles
- Navegação por teclado
- Contraste adequado
- Screen reader friendly
- Foco visível

### 10.2 Testes
- Testes de acessibilidade
- Validação de contraste
- Testes com screen readers
- Navegação por teclado

---

**Próxima etapa**: Aprovação deste plano e início da Fase 1 do desenvolvimento. 