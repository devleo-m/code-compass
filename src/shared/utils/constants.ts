// Constantes da aplicação Code Compass

export const APP_CONFIG = {
    name: 'Code Compass',
    version: '1.0.0',
    description: 'Plataforma educacional interativa para programação',
} as const

export const AUTH_CONFIG = {
    // Credenciais simuladas para desenvolvimento
    admin: {
        email: 'admin@codecompass.com',
        password: 'admin123',
    },
    student: {
        email: 'aluno@codecompass.com',
        password: 'aluno123',
    },
} as const

export const STORAGE_KEYS = {
    user: 'code-compass-user',
    progress: 'code-compass-progress',
    theme: 'code-compass-theme',
    notes: 'code-compass-notes',
    navigationHistory: 'code-compass-navigation-history',
} as const

export const ROUTES = {
    home: '/',
    login: '/login',
    dashboard: '/dashboard',
    learning: {
        frontend: '/learning/frontend',
        backend: '/learning/backend',
        sql: '/learning/sql',
        react: '/learning/react',
        javascript: '/learning/javascript',
        typescript: '/learning/typescript',
        node: '/learning/node',
        go: '/learning/go',
        reactNative: '/learning/react-native',
        aws: '/learning/aws',
        docker: '/learning/docker',
        linux: '/learning/linux',
        mongodb: '/learning/mongodb',
        postgres: '/learning/postgres',
        redis: '/learning/redis',
        git: '/learning/git',
    },
    lesson: '/lesson',
    quiz: '/quiz',
    progress: '/progress',
    profile: '/profile',
    admin: {
        dashboard: '/admin/dashboard',
        content: '/admin/content',
        users: '/admin/users',
        analytics: '/admin/analytics',
        settings: '/admin/settings',
    },
} as const

// Configuração das trilhas de aprendizado
export const LEARNING_PATHS = {
    frontend: {
        id: 'frontend',
        name: 'Frontend',
        description: 'Desenvolvimento de interfaces web',
        color: 'blue',
        icon: '🌐',
        technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue', 'Angular'],
    },
    backend: {
        id: 'backend',
        name: 'Backend',
        description: 'Desenvolvimento de APIs e sistemas',
        color: 'green',
        icon: '⚙️',
        technologies: ['Node.js', 'Python', 'Java', 'C#', 'PHP'],
    },
    sql: {
        id: 'sql',
        name: 'SQL',
        description: 'Linguagem de consulta estruturada',
        color: 'purple',
        icon: '🗄️',
        technologies: ['MySQL', 'PostgreSQL', 'SQLite', 'SQL Server'],
    },
    react: {
        id: 'react',
        name: 'React',
        description: 'Biblioteca JavaScript para interfaces',
        color: 'cyan',
        icon: '⚛️',
        technologies: ['React Hooks', 'Context API', 'Redux', 'Next.js'],
    },
    javascript: {
        id: 'javascript',
        name: 'JavaScript',
        description: 'Linguagem de programação web',
        color: 'yellow',
        icon: '🟨',
        technologies: ['ES6+', 'DOM', 'Async/Await', 'Modules'],
    },
    typescript: {
        id: 'typescript',
        name: 'TypeScript',
        description: 'JavaScript com tipagem estática',
        color: 'blue',
        icon: '🔷',
        technologies: ['Types', 'Interfaces', 'Generics', 'Decorators'],
    },
    node: {
        id: 'node',
        name: 'Node.js',
        description: 'Runtime JavaScript no servidor',
        color: 'green',
        icon: '🟢',
        technologies: ['Express', 'NPM', 'Event Loop', 'Streams'],
    },
    go: {
        id: 'go',
        name: 'Go',
        description: 'Linguagem de programação da Google',
        color: 'blue',
        icon: '🐹',
        technologies: ['Goroutines', 'Channels', 'Interfaces', 'Modules'],
    },
    reactNative: {
        id: 'react-native',
        name: 'React Native',
        description: 'Desenvolvimento mobile multiplataforma',
        color: 'cyan',
        icon: '📱',
        technologies: ['Mobile', 'Navigation', 'Native Modules', 'Expo'],
    },
    aws: {
        id: 'aws',
        name: 'AWS',
        description: 'Serviços em nuvem da Amazon',
        color: 'orange',
        icon: '☁️',
        technologies: ['EC2', 'S3', 'Lambda', 'RDS', 'CloudFormation'],
    },
    docker: {
        id: 'docker',
        name: 'Docker',
        description: 'Containerização de aplicações',
        color: 'blue',
        icon: '🐳',
        technologies: ['Containers', 'Images', 'Docker Compose', 'Kubernetes'],
    },
    linux: {
        id: 'linux',
        name: 'Linux',
        description: 'Sistema operacional e comandos',
        color: 'orange',
        icon: '🐧',
        technologies: ['Shell', 'Bash', 'Systemd', 'Package Managers'],
    },
    mongodb: {
        id: 'mongodb',
        name: 'MongoDB',
        description: 'Banco de dados NoSQL',
        color: 'green',
        icon: '🍃',
        technologies: ['Documents', 'Aggregation', 'Indexes', 'Replication'],
    },
    postgres: {
        id: 'postgres',
        name: 'PostgreSQL',
        description: 'Banco de dados relacional avançado',
        color: 'blue',
        icon: '🐘',
        technologies: ['ACID', 'JSON', 'Extensions', 'Partitioning'],
    },
    redis: {
        id: 'redis',
        name: 'Redis',
        description: 'Banco de dados em memória',
        color: 'red',
        icon: '🔴',
        technologies: ['Cache', 'Pub/Sub', 'Data Structures', 'Persistence'],
    },
    git: {
        id: 'git',
        name: 'Git & GitHub',
        description: 'Controle de versão e colaboração',
        color: 'gray',
        icon: '📚',
        technologies: ['Version Control', 'Branches', 'Pull Requests', 'CI/CD'],
    },
} as const

export const BREAKPOINTS = {
    mobile: 640,
    tablet: 768,
    desktop: 1024,
    large: 1280,
} as const
