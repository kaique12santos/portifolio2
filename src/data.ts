import { Project, SkillCategory, ContactInfo } from './types';

export const developerInfo = {
  name: 'Kaique Caitano',
  title: 'Desenvolvedor Backend',
  avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALbZNFeSbBdGYNabcDT3yGcLYGY2UX9sDxPQ5jGCCVIU1cX6-JgFG1M6FyVpogxA3HWC5cLMKRba3xFrRHrue_49Ka1RAA9PpEHvfsBofpVQpXrvjIolpH269AuaWrdnMhbjIV2XvLXfhQ0Y7liqDiVoEMdgtkNh17kQi6Z4Wzk2SMVoqNv-aL3H8NRIbFmxoThAipWMqx1HFFT8PkAfoaI2eVBhF8Nd9UGO8ELCGnzcCry4xK5u8PLMa1ARlX8L2evizsr3MkZGQ',
  tagline: 'Especialista em Node.js, APIs RESTful e Arquitetura de Software. Focado em construir sistemas escaláveis e seguros com precisão técnica.',
  bioParagraphs: [
    'Graduando em Desenvolvimento de Software Multiplataforma (DSM) na Fatec Zona Leste. Minha trajetória é pautada pelo compromisso com a excelência técnica, aplicando padrões de Clean Code e princípios de segurança desde a concepção do código.',
    'Acredito que o backend é o coração de qualquer aplicação de sucesso. Por isso, foco em arquiteturas robustas que permitem crescimento sustentável e performance otimizada.'
  ],
  resumeUrl: '#', // Can display a modern embedded interactive Resume viewer instead!
};

export const projectsData: Project[] = [
  {
    id: 'sislab',
    title: 'SisLab - Sistema de Reserva de Laboratórios',
    description: 'Plataforma desenvolvida para otimizar o agendamento e gestão de laboratórios acadêmicos, garantindo disponibilidade em tempo real e controle de acesso.',
    longDescription: 'O SisLab foi projetado para resolver conflitos de agendamento em ambientes acadêmicos complexos. Ele fornece um fluxo intuitivo para professores e coordenadores solicitarem horários, enquanto o backend gerencia validações rígidas de concorrência, capacidade e permissão de recursos.',
    role: 'Desenvolvedor Backend Principal',
    technologies: ['Node.js', 'React', 'MySQL'],
    iconName: 'biotech',
    orderString: '01',
    githubUrl: 'https://github.com/kaiquecaitano/sislab',
    liveUrl: '#',
    features: [
      'Validação de conflitos em tempo real para reservas concorrentes.',
      'Sistema de controle de acesso baseado em cargos (RBAC) para professores e administradores.',
      'Painel de visualização de ocupação com gráficos de utilização por laboratório.',
      'Envio automatizado de notificações de confirmação e alteração de agendamentos.'
    ],
    architecture: [
      'Arquitetura em Camadas (Layered Architecture) para desacoplamento de regras de negócios.',
      'Banco de dados MySQL normalizado em Terceira Forma Normal (3NF) com triggers e constraints de integridade.',
      'REST API estruturada sob os verbos HTTP corretos e códigos de status semânticos.'
    ]
  },
  {
    id: 'sgpi',
    title: 'SGPI - Gestão de Projetos Integradores',
    description: 'API robusta construída sob os pilares da Clean Architecture para gerenciar o ciclo de vida de projetos interdisciplinares, integrando diversos módulos de acompanhamento.',
    longDescription: 'O SGPI é um ecossistema de APIs projetado para simplificar a coordenação, entrega e avaliação de projetos acadêmicos multidisciplinares. Ele unifica alunos, orientadores e avaliadores sob o mesmo fluxo de entregas, notas e feedbacks.',
    role: 'Desenvolvedor Backend & Arquiteto',
    technologies: ['REST API', 'Clean Architecture', 'Express'],
    iconName: 'account_tree',
    orderString: '02',
    githubUrl: 'https://github.com/kaiquecaitano/sgpi-api',
    liveUrl: '#',
    features: [
      'Modelagem orientada ao domínio (DDD) para separar núcleos de avaliação e gerenciamento.',
      'Upload e versionamento seguro de arquivos de documentação do projeto.',
      'Pipeline de avaliação estruturado com pesos configuráveis e cálculo automático de médias de notas.',
      'Autenticação baseada em JWT com controle preciso de sessões.'
    ],
    architecture: [
      'Clean Architecture (Entities, Use Cases, Controllers, Presenters) garantindo total independência de frameworks.',
      'Injeção de dependência nativa manual para desacoplar a camada de infraestrutura da camada de regras de negócio.',
      'Tratamento global de erros robusto com Express middleware e classes customizadas de erro de aplicação.'
    ]
  },
  {
    id: 'api-gateway',
    title: 'Custom API Gateway & Rate Limiter',
    description: 'Serviço proxy reverso inteligente com autenticação de chaves de API, limitação de taxa baseada em IP/Token e cache estratégico utilizando Redis.',
    longDescription: 'Para reforçar o portfólio backend com ferramentas de infraestrutura, este API Gateway atua como um ponto único de entrada para microsserviços. Ele distribui requisições com segurança e protege os servidores internos contra picos de tráfego nocivos.',
    role: 'Desenvolvedor de Infraestrutura e Backend',
    technologies: ['Node.js', 'Redis', 'Express', 'TypeScript'],
    iconName: 'terminal',
    orderString: '03',
    githubUrl: 'https://github.com/kaiquecaitano/api-gateway',
    liveUrl: '#',
    features: [
      'Algoritmo Token Bucket para Rate Limiting flexível por rota e por usuário.',
      'Roteamento reverso dinâmico e rewrite de paths com suporte a balanceamento de carga básico.',
      'Cache de respostas de requisições GET com expiração configurável (TTL) no Redis.',
      'Segurança robusta através de validação de assinaturas HMAC e chaves API pré-geradas.'
    ],
    architecture: [
      'Arquitetura orientada a middlewares escaláveis com monitoramento passivo de latência.',
      'Cache de alta velocidade com Redis em cluster e failover automático.',
      'Testes unitários e de integração com cobertura superior a 90% usando Jest.'
    ]
  }
];

export const skillsData: SkillCategory[] = [
  {
    title: 'BACKEND',
    iconName: 'storage',
    skills: [
      { name: 'Node.js', level: 'expert', active: true },
      { name: 'TypeScript', level: 'expert', active: true },
      { name: 'Express', level: 'expert', active: true },
      { name: 'NestJS', level: 'learning', active: false }
    ]
  },
  {
    title: 'BANCO DE DADOS',
    iconName: 'database',
    skills: [
      { name: 'MySQL', level: 'expert', active: true },
      { name: 'PostgreSQL', level: 'expert', active: true },
      { name: 'MongoDB', level: 'learning', active: false },
      { name: 'Redis', level: 'learning', active: false }
    ]
  },
  {
    title: 'FRONTEND',
    iconName: 'desktop_windows',
    skills: [
      { name: 'React', level: 'expert', active: true },
      { name: 'Tailwind CSS', level: 'expert', active: true },
      { name: 'HTML5/CSS3', level: 'expert', active: true },
      { name: 'Next.js', level: 'learning', active: false }
    ]
  },
  {
    title: 'DEVOPS & TOOLS',
    iconName: 'terminal',
    skills: [
      { name: 'Docker', level: 'expert', active: true },
      { name: 'Git / GitHub', level: 'expert', active: true },
      { name: 'AWS (Basic)', level: 'learning', active: false },
      { name: 'CI/CD', level: 'learning', active: false }
    ]
  }
];

export const contactsData: ContactInfo[] = [
  {
    platform: 'LinkedIn',
    label: 'kaique-caitano',
    value: 'LinkedIn',
    url: 'https://www.linkedin.com/in/kaique-caitano/'
  },
  {
    platform: 'GitHub',
    label: 'kaiquecaitano',
    value: 'GitHub',
    url: 'https://github.com/kaiquecaitano'
  },
  {
    platform: 'Email',
    label: 'kaiqueyakushi@gmail.com',
    value: 'kaiqueyakushi@gmail.com',
    url: 'mailto:kaiqueyakushi@gmail.com'
  }
];
