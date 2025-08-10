# Code Compass - Guia de Desenvolvimento

## 1. Contexto e Objetivo Geral

O **Code Compass** é uma plataforma educacional interativa para aprendizado de JavaScript e TypeScript. O projeto visa criar uma experiência gamificada e estruturada para iniciantes e intermediários, combinando conteúdo teórico, quizzes interativos e atividades práticas.

### Objetivos Principais:
- Fornecer um caminho de aprendizado estruturado e progressivo
- Implementar gamificação para engajamento do usuário
- Criar uma interface intuitiva e responsiva
- Permitir acompanhamento de progresso individual
- Oferecer conteúdo prático e teórico integrado
- **NOVO**: Separar claramente as funcionalidades de admin e aluno
- **NOVO**: Implementar sistema de autorização robusto

## 2. Arquitetura e Tecnologias

### Stack Principal:
- **Framework**: Next.js 15 (App Router)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Gerenciamento de Estado**: Zustand
- **Conteúdo**: Markdown/MDX
- **Linting/Formatting**: Biome
- **Testes**: Jest + React Testing Library (configurado posteriormente)
- **Persistência**: LocalStorage (100% Frontend)

### Estrutura de Pastas (Domain-Driven):
```
src/
├── app/                 # App Router (Next.js 14)
├── features/            # Domínios/Recursos
│   ├── learning-path/   # Módulo de trilha de aprendizado
│   ├── quizzes/         # Módulo de quizzes
│   ├── progress/        # Módulo de progresso
│   ├── auth/            # Módulo de autenticação simulada (admin/aluno)
│   └── admin/           # Módulo de administração (CRUD de conteúdo)
├── shared/              # Componentes e utilitários compartilhados
│   ├── components/      # Componentes reutilizáveis
│   ├── hooks/           # Custom hooks
│   ├── utils/           # Funções utilitárias
│   └── types/           # Tipos TypeScript
└── content/             # Conteúdo estático (markdown, dados)
```

## 3. Princípios SOLID e Clean Code

### Single Responsibility Principle (SRP):
- Cada componente deve ter uma única responsabilidade
- Separação clara entre lógica de negócio e apresentação
- Hooks customizados para lógica reutilizável

### Open/Closed Principle (OCP):
- Componentes extensíveis através de props
- Sistema de plugins para quizzes e conteúdo
- Configuração via arquivos de dados

### Liskov Substitution Principle (LSP):
- Interfaces consistentes para tipos de conteúdo
- Polimorfismo para diferentes tipos de quiz
- Contratos claros entre componentes

### Interface Segregation Principle (ISP):
- Interfaces específicas para cada domínio
- Props opcionais quando apropriado
- Separação de responsabilidades em hooks

### Dependency Inversion Principle (DIP):
- Inversão de dependências via props e context
- Abstração de serviços externos
- Testabilidade através de mocks

## 4. Regras de Negócio do Frontend

### 4.1 Gestão de Estado:
- **Zustand** para estado global da aplicação
- **Local Storage** para persistência de progresso e dados do usuário
- **Simulação de autenticação** via LocalStorage (admin/aluno)
- **Sem backend** - tudo manipulado no frontend

### 4.2 Navegação e Roteamento:
- Navegação baseada em breadcrumbs
- Histórico de navegação preservado
- URLs semânticas e SEO-friendly
- **NOVO**: Proteção de rotas baseada em autorização

### 4.3 Responsividade:
- Mobile-first design
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Componentes adaptativos

### 4.4 Performance:
- Lazy loading de componentes
- Code splitting por rota
- Otimização de imagens
- Bundle analysis

### 4.5 Acessibilidade:
- ARIA labels e roles
- Navegação por teclado
- Contraste adequado
- Screen reader friendly

### 4.6 **NOVO**: Sistema de Autorização:
- **Admin**: Acesso total para criar, editar e gerenciar conteúdo
- **Aluno**: Acesso limitado apenas para estudar e acompanhar progresso
- **Separação clara**: Admin não pode estudar, aluno não pode criar conteúdo
- **Proteção de rotas**: Middleware ou componentes wrapper para verificação

## 5. Roadmap de Desenvolvimento

### **📊 PROGRESSO ATUAL - DEZEMBRO 2024**

**Status Geral**: ✅ **Fases 1, 2, 2.5, 3 e 4 Concluídas** | **Próximo Foco**: Sistema de Progresso

#### **✅ Fases Concluídas:**
- **Fase 1**: Fundação e Estrutura Base (100% completo)
- **Fase 2**: Autenticação Simulada (100% completo)
- **Fase 2.5**: Segurança e Autorização (100% completo)
- **Fase 3**: Módulo de Trilha de Aprendizado (100% completo)
- **Fase 4**: Módulo de Quizzes (100% completo)

#### **🎯 Próximos Passos:**
1. **Imediato**: Implementar Fase 5 (Sistema de Progresso)
2. **Curto Prazo**: Sistema de Administração (Fase 5.5)
3. **Médio Prazo**: Integração e Polimento (Fase 6)
4. **Longo Prazo**: Testes e Deploy (Fase 7)

### Fase 1: Fundação e Estrutura Base
**Status**: ✅ Concluída | **Duração Estimada**: 2-3 dias

#### 1.1 Configuração Inicial do Projeto
- [x] Criar projeto Next.js 15 com TypeScript
- [x] Configurar Tailwind CSS
- [x] Configurar Biome para linting e formatação
- [ ] Configurar Jest e React Testing Library (quando necessário)

#### 1.2 Estrutura de Pastas e Configuração
- [x] Criar estrutura de pastas seguindo DDD
- [x] Configurar aliases de importação (tsconfig.json)
- [x] Configurar variáveis de ambiente
- [x] Criar arquivos de configuração base

#### 1.3 Componentes Base
- [x] Layout principal (Header, Navigation, Footer) - **Implementado completo**
- [x] Sistema de design tokens
- [x] Componentes base (Button, Card)
- [x] Sistema de loading e error boundaries
- [x] Footer - **Implementado**

### Fase 2: Autenticação Simulada
**Status**: ✅ **Concluída - Requer Correções de Segurança** | **Duração Estimada**: 1-2 dias

#### 2.1 Sistema de Login Simulado
- [x] Página de login com credenciais fixas
- [x] Simulação de admin (acesso total)
- [x] Simulação de aluno (acesso limitado)
- [x] Persistência de sessão no LocalStorage
- [x] **CORREÇÃO IMPLEMENTADA**: Compatibilidade Next.js 15
- [x] **CORREÇÃO IMPLEMENTADA**: Build funcionando perfeitamente
- [x] **CORREÇÃO IMPLEMENTADA**: Linting configurado e funcionando
- [ ] **CORREÇÃO NECESSÁRIA**: Proteção de rotas baseada no tipo de usuário
- [ ] **CORREÇÃO NECESSÁRIA**: Redirecionamento correto no logout

#### 2.2 Página Inicial (Landing Page)
- [x] Design da página inicial
- [x] Seleção de tecnologia (JavaScript/TypeScript)
- [x] Componentes de apresentação
- [x] Animações e transições - **Implementado**

#### 2.3 Sistema de Navegação
- [x] Menu de navegação
- [x] Breadcrumbs - **Implementado**
- [x] Histórico de navegação - **Implementado**
- [x] URLs semânticas

### **NOVA FASE**: Fase 2.5: Segurança e Autorização
**Status**: ✅ **Concluída - Implementação Completa** | **Duração Estimada**: 2-3 dias

#### 2.5.1 Proteção de Rotas
- [x] Implementar middleware de proteção de rotas - **Implementado**
- [x] Criar componente `ProtectedRoute` para páginas sensíveis - **Implementado**
- [x] Verificar autenticação antes de renderizar conteúdo - **Implementado**
- [x] Redirecionar usuários não autenticados para login - **Implementado**

#### 2.5.2 Sistema de Logout e Redirecionamento
- [x] Implementar redirecionamento automático no logout - **Implementado**
- [x] Usar `useRouter` do Next.js para navegação programática - **Implementado**
- [x] Redirecionar para página inicial (`/`) após logout - **Implementado**
- [x] Limpar estado da aplicação no logout - **Implementado**

#### 2.5.3 Separação de Funcionalidades por Tipo de Usuário
- [x] **Admin**: Dashboard focado em criação de conteúdo - **Implementado**
- [x] **Aluno**: Dashboard focado em estudo e progresso - **Implementado**
- [x] Componentes condicionais baseados no tipo de usuário - **Implementado**
- [x] Rotas específicas para admin (ex: `/admin/content`) - **Implementado**

#### 2.5.4 Validação de Autorização
- [x] Verificar permissões antes de renderizar funcionalidades - **Implementado**
- [x] Bloquear acesso a funcionalidades não autorizadas - **Implementado**
- [x] Feedback visual para ações não permitidas - **Implementado**
- [x] Logs de tentativas de acesso não autorizado - **Implementado**

#### 2.5.5 Interface de Usuário Inteligente
- [x] Menu de usuário com ícone personalizado - **Implementado**
- [x] Indicador visual do tipo de usuário (Admin/Aluno) - **Implementado**
- [x] Layout responsivo e acessível - **Implementado**

### Fase 3: Módulo de Trilha de Aprendizado
**Status**: ✅ **Concluída - Correções de Segurança Implementadas** | **Duração Estimada**: 3-4 dias

#### 3.1 Estrutura de Dados
- [x] Definir schema de dados para trilhas - **Implementado**
- [x] Criar tipos TypeScript - **Implementado**
- [x] Dados mock para todas as tecnologias - **Implementado**

#### 3.2 Componentes da Trilha
- [x] Lista de módulos/lições - **Implementado**
- [x] Indicadores de progresso - **Implementado**
- [x] Sistema de badges/conquistas - **Implementado**
- [x] Filtros e busca - **Implementado**

#### 3.3 Páginas de Conteúdo
- [x] Visualizador de markdown - **Implementado**
- [x] Navegação entre lições - **Implementado**
- [x] Sistema de anotações - **Implementado**
- [x] Progresso automático - **Implementado**

#### 3.4 **CORREÇÃO NECESSÁRIA**: Dashboard Diferenciado
- [x] **Admin**: Ver botões de "Criar Trilha", "Editar Conteúdo", "Gerenciar Usuários" - **Implementado**
- [x] **Aluno**: Ver botões de "Começar Trilha", "Ver Progresso", "Anotações" - **Implementado**
- [x] Componentes condicionais baseados no tipo de usuário - **Implementado**
- [x] Interface específica para cada perfil - **Implementado**

### Fase 4: Módulo de Quizzes
**Status**: ✅ **Concluída** | **Duração Estimada**: 4-5 dias

#### 4.1 Estrutura de Quizzes
- [x] Schema de dados para quizzes - **Implementado**
- [x] Tipos de perguntas (múltipla escolha, verdadeiro/falso) - **Implementado**
- [x] Sistema de pontuação - **Implementado**
- [x] Dados mock para testes - **Implementado**

#### 4.2 Interface do Quiz
- [x] Componente de pergunta - **Implementado**
- [x] Timer (opcional) - **Implementado**
- [x] Barra de progresso - **Implementado**
- [x] Feedback imediato - **Implementado**

#### 4.3 Páginas de Quiz
- [x] Página de lista de quizzes - **Implementado**
- [x] Página de quiz individual - **Implementado**
- [x] Página de resultados - **Implementado**
- [x] Sistema de navegação - **Implementado**

#### 4.4 Resultados e Análise
- [x] Página de resultados - **Implementado**
- [x] Análise de respostas - **Implementado**
- [x] Sugestões de estudo - **Implementado**
- [x] Histórico de tentativas - **Implementado**

### Fase 5: Sistema de Progresso
**Status**: ⏳ Pendente | **Duração Estimada**: 2-3 dias

#### 5.1 Gestão de Estado
- [ ] Store Zustand para progresso
- [ ] Persistência no localStorage
- [ ] Sincronização entre módulos
- [ ] Backup e restore

#### 5.2 Dashboard de Progresso
- [ ] Visão geral do progresso
- [ ] Gráficos e estatísticas
- [ ] Metas e objetivos
- [ ] Certificados/conquistas

### **NOVA FASE**: Fase 5.5: Sistema de Administração
**Status**: ⏳ **Pendente - Média Prioridade** | **Duração Estimada**: 4-5 dias

#### 5.5.1 Dashboard de Admin
- [ ] Visão geral de estatísticas da plataforma
- [ ] Número total de usuários ativos
- [ ] Trilhas mais populares
- [ ] Métricas de engajamento

#### 5.5.2 Gerenciamento de Conteúdo
- [ ] CRUD de trilhas de aprendizado
- [ ] Editor de markdown para lições
- [ ] Sistema de upload de arquivos
- [ ] Versionamento de conteúdo

#### 5.5.3 Gerenciamento de Usuários
- [ ] Lista de todos os usuários
- [ ] Estatísticas individuais de progresso
- [ ] Sistema de roles e permissões
- [ ] Bloqueio/desbloqueio de contas

#### 5.5.4 Sistema de Quizzes (Admin)
- [ ] Criação de quizzes personalizados
- [ ] Banco de perguntas
- [ ] Configuração de dificuldade
- [ ] Análise de resultados

### Fase 6: Integração e Polimento
**Status**: ⏳ Pendente | **Duração Estimada**: 2-3 dias

#### 6.1 Integração Completa
- [ ] Conectar todos os módulos
- [ ] Fluxo de navegação completo
- [ ] Testes de integração
- [ ] Otimização de performance

#### 6.2 Polimento e UX
- [ ] Animações e micro-interações
- [ ] Feedback visual e sonoro
- [ ] Modo escuro/claro
- [ ] Responsividade completa

### Fase 7: Testes e Deploy
**Status**: ⏳ Pendente | **Duração Estimada**: 2-3 dias

#### 7.1 Testes
- [ ] Configurar Jest e React Testing Library
- [ ] Testes unitários
- [ ] Testes de integração
- [ ] Testes E2E
- [ ] Testes de acessibilidade

#### 7.2 Deploy e CI/CD
- [ ] Configuração de build
- [ ] Deploy automatizado
- [ ] Monitoramento
- [ ] Documentação

### Fase 8: Configurações Finais e Otimizações
**Status**: ⏳ Pendente | **Duração Estimada**: 1-2 dias

#### 8.1 Configurações de Desenvolvimento
- [ ] Configurar Husky para pre-commit hooks
- [ ] Configurar lint-staged
- [ ] Otimizações finais de performance
- [ ] Bundle analysis

#### 8.2 Documentação e Finalização
- [ ] README completo
- [ ] Documentação de componentes
- [ ] Guia de contribuição
- [ ] Deploy final

## 6. Critérios de Aceitação

### Para cada fase:
- [ ] Código segue princípios SOLID
- [ ] Componentes são testáveis
- [ ] Interface é responsiva
- [ ] Performance é adequada
- [ ] Acessibilidade é mantida
- [ ] Documentação está atualizada

### **NOVO**: Para funcionalidades de segurança:
- [ ] Rotas protegidas não são acessíveis sem autenticação
- [ ] Logout redireciona corretamente
- [ ] Admin e aluno veem interfaces apropriadas
- [ ] Tentativas de acesso não autorizado são bloqueadas

### Para o projeto completo:
- [ ] 100% de cobertura de testes críticos
- [ ] Performance score > 90 (Lighthouse)
- [ ] Acessibilidade score > 95
- [ ] SEO score > 90
- [ ] Zero erros de console
- [ ] Deploy funcionando

## 7. Definições de Pronto (Definition of Done)

### Para cada tarefa:
- [ ] Código implementado
- [ ] Testes escritos e passando
- [ ] Code review aprovado
- [ ] Documentação atualizada
- [ ] Funcionalidade testada manualmente
- [ ] Performance validada

### **NOVO**: Para funcionalidades de segurança:
- [ ] Proteção de rotas implementada e testada
- [ ] Logout funciona corretamente
- [ ] Separação de funcionalidades por tipo de usuário
- [ ] Testes de segurança passando

### Para cada fase:
- [ ] Todas as tarefas da fase completadas
- [ ] Integração com fases anteriores funcionando
- [ ] Testes de regressão passando
- [ ] Aprovação do usuário

## 8. Notas e Observações

### **ATUALIZADO**: Prioridades:
1. **Segurança**: Proteção de rotas e autorização (ALTA PRIORIDADE)
2. **Funcionalidade**: Sistema deve funcionar corretamente
3. **Usabilidade**: Interface intuitiva e responsiva
4. **Performance**: Carregamento rápido e eficiente
5. **Manutenibilidade**: Código limpo e bem estruturado

### **ATUALIZADO**: Decisões Técnicas:
- Usar App Router do Next.js 15 para melhor performance
- Zustand para estado global (mais simples que Redux)
- Tailwind CSS para desenvolvimento rápido
- TypeScript para type safety
- **Biome** para linting e formatação (mais rápido que ESLint)
- **100% Frontend** - sem backend, tudo via LocalStorage
- Autenticação simulada (admin/aluno) com credenciais fixas
- **NOVO**: Sistema de autorização robusto com proteção de rotas
- **NOVO**: Separação clara entre funcionalidades de admin e aluno
- Husky configurado apenas no final para não atrapalhar desenvolvimento

### **ATUALIZADO**: Futuras Melhorias:
- Backend real para persistência (quando necessário)
- Gamificação avançada
- Comunidade e fóruns
- Certificados digitais
- Sistema de autenticação real
- **NOVO**: Sistema de moderação de conteúdo
- **NOVO**: Analytics avançados para admin

### **NOVO**: Problemas Identificados e Soluções:
- **Problema**: Logout não redireciona corretamente
  - **Solução**: Implementar `useRouter` do Next.js para redirecionamento automático
- **Problema**: Dashboard não tem proteção de rota
  - **Solução**: Criar middleware ou componente `ProtectedRoute`
- **Problema**: Admin e aluno compartilham o mesmo dashboard
  - **Solução**: Implementar componentes condicionais baseados no tipo de usuário
- **Problema**: Falta de separação de responsabilidades
  - **Solução**: Criar módulo específico de administração

---

**Última atualização**: Dezembro 2024
**Versão**: 1.1
**Próxima revisão**: Após implementação da Fase 2.5 (Segurança e Autorização)