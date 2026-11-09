import { ServiceItem, SkillCategory, TimelineItem, FaqItem, PortfolioItem, TestimonialItem } from '../types';

export const PERSONAL_INFO = {
  fullName: 'Felizardo Augusto José Franko',
  shortName: 'Felizardo Franko',
  brandName: 'Fk Tech',
  agencyName: 'FrankTech Serviços Digitais',
  titlePt: 'Técnico de Informática e Empreendedor Digital',
  titleEn: 'IT Support Specialist & Digital Entrepreneur',
  email: 'felizardofrankoo@gmail.com',
  phone: '+258 84 200 1781',
  phonePrimary: '+258 84 200 1781',
  phoneAlt: '+258 86 200 1781',
  whatsappNumber: '258842001781', // Clean digits for WhatsApp API
  location: 'Pemba, Cabo Delgado, Moçambique',
  locationShort: 'Pemba, Moçambique',
  taglinePt: 'Tecnologia que funciona, formação que transforma, serviços digitais que fazem o seu negócio crescer.',
  taglineEn: 'Reliable technology, empowering training, and digital services that make your business grow.',
  socials: {
    // TODO: Adicionar URLs reais das redes sociais quando disponíveis
    linkedin: '',
    facebook: '',
    instagram: '',
    github: '',
  },
  // Factual highlights without invented numbers
  stats: [
    {
      title: 'Pemba, Cabo Delgado',
      desc: 'Atendimento presencial e remoto',
      titleEn: 'Pemba, Cabo Delgado',
      descEn: 'On-site & remote assistance'
    },
    {
      title: 'Suporte L1 e L2',
      desc: 'Redes, servidores e hardware',
      titleEn: 'L1 & L2 Support',
      descEn: 'Networks, servers & hardware'
    },
    {
      title: 'Windows Server e AD',
      desc: 'Administração e utilizadores',
      titleEn: 'Windows Server & AD',
      descEn: 'Administration & users'
    },
    {
      title: 'Formação em Informática',
      desc: 'Formador em programas profissionais',
      titleEn: 'IT Training',
      descEn: 'Trainer in professional programs'
    },
  ],
};

// 1. SERVIÇOS: UMA LISTA ÚNICA
// Grupo A: "Suporte de TI e Redes" | Grupo B: "Serviços Digitais (FrankTech)"
export const SERVICES: ServiceItem[] = [
  // --- GRUPO A: Suporte de TI e Redes ---
  {
    id: 'it-infrastructure',
    title: 'Suporte e Infraestrutura de TI',
    titleEn: 'IT Support & Infrastructure',
    group: 'it-support',
    description: 'Diagnóstico técnico, reparação de computadores, administração de Windows Server e apoio contínuo a utilizadores.',
    descriptionEn: 'Technical diagnostics, computer repair, Windows Server administration, and ongoing user support.',
    deliverables: [
      'Suporte técnico de Nível 1 e 2 presencial em Pemba e assistência remota',
      'Configuração e administração de Active Directory e Windows Server',
      'Manutenção preventiva periódica e substituição de hardware avariado',
      'Instalação de sistemas operativos e ferramentas essenciais de trabalho'
    ],
    deliverablesEn: [
      'Level 1 & 2 technical support on-site in Pemba and remote assistance',
      'Configuration and administration of Active Directory and Windows Server',
      'Periodic preventive maintenance and hardware component replacement',
      'Installation of operating systems and essential business software'
    ],
    icon: 'Server'
  },
  {
    id: 'networking-wifi',
    title: 'Redes Estruturadas & Wi-Fi',
    titleEn: 'Structured Networks & Wi-Fi',
    group: 'it-support',
    description: 'Instalação de cablagem de rede, montagem de bastidores rack e garantia de sinal Wi-Fi estável em escritórios.',
    descriptionEn: 'Network cabling installation, rack cabinet assembly, and stable office Wi-Fi coverage.',
    deliverables: [
      'Cablagem estruturada de rede Cat6 com patch panels e fichas RJ45',
      'Montagem e arrumação de armários rack de telecomunicações',
      'Configuração de roteadores, switches e pontos de acesso Wi-Fi',
      'Diagnóstico e resolução de quebras de ligação ou lentidão de rede'
    ],
    deliverablesEn: [
      'Structured Cat6 network cabling with patch panels and RJ45 terminations',
      'Assembly and tidy cabling for telecom rack cabinets',
      'Configuration of routers, switches, and office Wi-Fi access points',
      'Diagnostics and resolution of connectivity loss or network slowdowns'
    ],
    icon: 'Network'
  },
  {
    id: 'admin-data-management',
    title: 'Apoio Administrativo & Gestão de Dados',
    titleEn: 'Administrative Support & Data Management',
    group: 'it-support',
    description: 'Estruturação de folhas de cálculo avançadas em Excel, registo de inventário e organização de arquivos de escritório.',
    descriptionEn: 'Advanced Excel spreadsheet design, IT asset inventory tracking, and digital office filing.',
    deliverables: [
      'Criação de folhas de cálculo no Excel com fórmulas e tabelas de controlo',
      'Registo e inventariação sistemática de equipamentos informáticos',
      'Apoio administrativo e organização de documentação digital',
      'Elaboração de relatórios técnicos de intervenção e guias simples'
    ],
    deliverablesEn: [
      'Custom Microsoft Excel spreadsheets with formulas and control tables',
      'Systematic IT equipment inventory tracking and documentation',
      'Administrative support and organized digital document archives',
      'Preparation of technical intervention reports and basic guides'
    ],
    icon: 'FileSpreadsheet'
  },
  {
    id: 'security-backups',
    title: 'Segurança & Cópias de Segurança',
    titleEn: 'Security & Data Backups',
    group: 'it-support',
    description: 'Protecção de ficheiros essenciais da sua empresa contra perdas com rotinas automáticas de cópia local e em nuvem.',
    descriptionEn: 'Safeguarding critical business files against data loss through scheduled local and cloud backup routines.',
    deliverables: [
      'Configuração de rotinas automáticas de backup para discos e nuvem',
      'Instalação e configuração de antivírus e regras básicas de firewall',
      'Testes periódicos de recuperação de ficheiros e pastas de trabalho',
      'Recomendações práticas para prevenção de fraudes e perda acidental'
    ],
    deliverablesEn: [
      'Automated scheduled backup routines to external storage and cloud',
      'Antivirus installation and basic security firewall configurations',
      'Periodic file recovery tests on critical operational folders',
      'Best practice recommendations for preventing data loss'
    ],
    icon: 'ShieldCheck'
  },

  // --- GRUPO B: Serviços Digitais (FrankTech) ---
  {
    id: 'landing-pages',
    title: 'Landing Pages & Sites Rápidos',
    titleEn: 'Landing Pages & Fast Websites',
    group: 'franktech',
    description: 'Páginas web simples e rápidas adaptadas a telemóveis e redes móveis de Moçambique, com botão directo para o WhatsApp.',
    descriptionEn: 'Clean, lightning-fast web pages optimized for mobile devices and Mozambique cellular networks, with direct WhatsApp links.',
    deliverables: [
      'Página única responsiva com carregamento leve (adaptada a 3G e 4G)',
      'Botão de contacto directo por WhatsApp configurado',
      'Estrutura clara com apresentação de serviços e localização',
      'Apoio na configuração de domínio próprio para o seu negócio'
    ],
    deliverablesEn: [
      'Responsive single-page design with lightweight loading (optimized for 3G/4G)',
      'Direct WhatsApp conversion button pre-configured',
      'Clear layout highlighting services, credentials, and location',
      'Guidance on domain registration and connection'
    ],
    typicalTimeline: '3 a 7 dias úteis',
    typicalTimelineEn: '3 to 7 business days',
    icon: 'Globe'
  },
  {
    id: 'monthly-maintenance',
    title: 'Avença Mensal de Suporte',
    titleEn: 'Monthly Support Retainer',
    group: 'franktech',
    description: 'Acompanhamento preventivo continuado de computadores, impressoras e rede do seu escritório para evitar paragens.',
    descriptionEn: 'Continuous preventive check-ups for office computers, printers, and local network to prevent downtime.',
    deliverables: [
      'Visitas periódicas programadas para verificação de computadores',
      'Atendimento prioritário na resolução de falhas técnicas do dia-a-dia',
      'Verificação contínua do estado das cópias de segurança',
      'Apoio directo aos colaboradores na utilização de sistemas'
    ],
    deliverablesEn: [
      'Scheduled periodic on-site visits for computer inspection',
      'Priority response for everyday technical malfunctions',
      'Continuous verification of scheduled data backups',
      'Direct user assistance on operating systems and common software'
    ],
    typicalTimeline: 'Acompanhamento mensal',
    typicalTimelineEn: 'Monthly contract',
    icon: 'Clock'
  },
  {
    id: 'graphic-design',
    title: 'Design de Materiais Gráficos',
    titleEn: 'Marketing & Graphic Design',
    group: 'franktech',
    description: 'Flyers digitais, cartazes e artes promocionais para divulgar os seus serviços e promoções no WhatsApp e redes sociais.',
    descriptionEn: 'Digital flyers, posters, and promotional graphics designed to announce products and services via WhatsApp and social channels.',
    deliverables: [
      'Peças gráficas em alta resolução com estética profissional',
      'Formatos optimizados para envio rápido e sem perda no WhatsApp',
      'Ficheiros finais prontos a utilizar ou imprimir localmente',
      'Adaptação às cores e identidade visual do seu negócio'
    ],
    deliverablesEn: [
      'High-resolution digital graphics with a clean, professional aesthetic',
      'Formats optimized for fast mobile sending via WhatsApp',
      'Final files ready for digital sharing or local commercial printing',
      'Visual alignment with your existing business identity'
    ],
    typicalTimeline: '24h a 72h',
    typicalTimelineEn: '24h to 72h',
    icon: 'Palette'
  },
  {
    id: 'corporate-email',
    title: 'E-mails Corporativos & Domínios',
    titleEn: 'Corporate Email & Domains',
    group: 'franktech',
    description: 'Caixas de correio profissionais com o nome do seu negócio (ex.: info@oseunegocio.co.mz) para reforçar a credibilidade.',
    descriptionEn: 'Professional email inboxes branded with your company domain (e.g. info@yourbusiness.co.mz) to build client trust.',
    deliverables: [
      'Registo e ligação técnica de domínio web próprio',
      'Criação de caixas de e-mail corporativo para a equipa',
      'Configuração das contas no telemóvel e computadores de trabalho',
      'Apoio na migração ou reencaminhamento de mensagens'
    ],
    deliverablesEn: [
      'Technical connection and setup of your custom web domain',
      'Creation of corporate email accounts for team members',
      'Setup assistance on work computers and mobile devices',
      'Guidance on message redirection and mailbox management'
    ],
    typicalTimeline: '1 a 3 dias úteis',
    typicalTimelineEn: '1 to 3 business days',
    icon: 'Mail'
  }
];

// 1.3 Competências Técnicas resumidas e factualizadas
export const SKILLS_CATEGORIES: SkillCategory[] = [
  {
    title: 'Sistemas & Redes',
    titleEn: 'Systems & Networks',
    skills: [
      { name: 'Suporte Técnico L1 / L2', level: 'Avançado' },
      { name: 'Redes LAN / WAN & Wi-Fi', level: 'Avançado' },
      { name: 'Windows Server & Active Directory', level: 'Intermédio' },
      { name: 'Cópias de Segurança & Backups', level: 'Intermédio' },
    ]
  },
  {
    title: 'Hardware & Equipamentos',
    titleEn: 'Hardware & Equipment',
    skills: [
      { name: 'Diagnóstico & Reparação de Hardware', level: 'Avançado' },
      { name: 'Impressoras & Periféricos de Rede', level: 'Intermédio' },
      { name: 'Montagem de Racks & Bastidores', level: 'Intermédio' },
    ]
  },
  {
    title: 'Ofimática & Dados',
    titleEn: 'Office Tools & Data',
    skills: [
      { name: 'Microsoft Excel (Tabelas & Fórmulas)', level: 'Intermédio' },
      { name: 'Microsoft Office & Google Workspace', level: 'Intermédio' },
      { name: 'Apoio Administrativo e Inventário', level: 'Intermédio' },
    ]
  },
  {
    title: 'Serviços Digitais (FrankTech)',
    titleEn: 'Digital Services (FrankTech)',
    skills: [
      { name: 'Desenvolvimento Web & Landing Pages', level: 'Intermédio' },
      { name: 'Design Gráfico para Negócios', level: 'Intermédio' },
      { name: 'E-mails Corporativos & Domínios', level: 'Intermédio' },
    ]
  }
];

// Percurso profissional factual
export const TIMELINE: TimelineItem[] = [
  {
    year: 'Actualidade',
    period: 'Actualidade',
    role: 'Técnico de Informática e Assistente Administrativo',
    organization: 'RHDC',
    location: 'Pemba, Cabo Delgado',
    type: 'support',
    summary: 'Suporte técnico de nível 1 e 2, redes LAN/WAN, Active Directory, Windows Server e manutenção de hardware, com tarefas de apoio administrativo.',
    achievements: [
      'Atendimento e resolução de incidentes técnicos em computadores e redes de escritório',
      'Apoio na gestão de utilizadores e procedimentos de inventário'
    ]
  },
  {
    year: 'Actualidade',
    period: 'Actualidade',
    role: 'Formador de Informática',
    organization: 'Programa UGCS/CV5 em Saúde',
    location: 'Pemba, Cabo Delgado',
    type: 'training',
    summary: 'Formação profissional prática em módulos de informática aplicada, capacitando formandos em ferramentas de produtividade e folhas de cálculo.',
    achievements: [
      'Planeamento de aulas práticas e acompanhamento individual de formandos',
      'Ensino prático de folhas de cálculo em Excel e processamento de texto'
    ]
  },
  {
    year: '2024 – Presente',
    period: '2024 – Presente',
    role: 'Fundador & Especialista Digital',
    organization: 'FrankTech Serviços Digitais',
    location: 'Pemba, Cabo Delgado',
    type: 'business',
    summary: 'Prestação de serviços digitais e assistência informática independente a pequenos negócios e profissionais em Pemba.',
    achievements: [
      'Desenvolvimento de páginas web rápidas com ligação directa a WhatsApp',
      'Criação de materiais gráficos promocionais e assistência informática a escritórios'
    ]
  },
  {
    year: 'Período anterior',
    period: 'Período anterior',
    role: 'Prestação de serviços de TI independente',
    organization: 'Serviços Independentes',
    location: 'Pemba, Cabo Delgado',
    type: 'support',
    summary: 'Atendimento de suporte técnico a particulares e pequenos escritórios, reparação de computadores e configuração de pequenas redes.',
    achievements: [
      'Instalação de redes locais de escritório e manutenção de computadores',
      'Configuração de sistemas operativos e recuperação de ficheiros'
    ]
  },
  {
    year: '2019 – 2020',
    period: '2019 – 2020',
    role: 'Estagiário de Tecnologias de Informação',
    organization: 'Aeroporto de Nampula (ADM – Aeroportos de Moçambique)',
    location: 'Nampula, Moçambique',
    type: 'internship',
    summary: 'Estágio curricular supervisionado na área de tecnologias de informação do aeroporto, apoiando postos de atendimento e redes locais.',
    achievements: [
      'Apoio técnico na conectividade dos terminais de atendimento aeroportuário',
      'Manutenção preventiva periódica em postos de trabalho e periféricos'
    ]
  },
  {
    year: '2017 – 2019',
    period: '2017 – 2019',
    role: 'Estudante – Curso Médio de Informática e Gestão',
    organization: 'A Politécnica (Instituto Superior Politécnico e Universitário)',
    location: 'Nampula / Pemba, Moçambique',
    type: 'education',
    summary: 'Formação técnico-profissional articulando redes de computadores, arquitetura de sistemas, bases de dados e fundamentos de gestão.',
    achievements: [
      'Conclusão do plano curricular com componente teórica e prática em laboratório'
    ]
  }
];

// 4. FAQ: PERGUNTAS FREQUENTES (Factual e realista)
export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'atendimento-presencial',
    questionPt: 'Atende presencialmente ou só à distância?',
    questionEn: 'Do you provide on-site or only remote support?',
    answerPt: 'Atendo presencialmente em Pemba e dou suporte remoto quando o problema se resolve à distância.',
    answerEn: 'I provide on-site support in Pemba and remote assistance whenever the issue can be resolved remotely.'
  },
  {
    id: 'como-pedir-orcamento',
    questionPt: 'Como peço um orçamento?',
    questionEn: 'How do I request a quote?',
    answerPt: 'Envie uma mensagem pelo WhatsApp ou use o botão "Pedir orçamento". Descreva o problema ou o serviço pretendido e respondo com uma proposta.',
    answerEn: 'Send a message on WhatsApp or click the "Request a quote" button. Describe the issue or desired service and I will reply with a proposal.'
  },
  {
    id: 'quanto-custa',
    questionPt: 'Quanto custa?',
    questionEn: 'How much does it cost?',
    answerPt: 'O valor depende do serviço e da dimensão do pedido. Faço o orçamento depois de perceber o que precisa, sem compromisso.',
    answerEn: 'Pricing depends on the specific service and project scope. I provide a quote after understanding your requirements, with no obligation.'
  },
  {
    id: 'quanto-tempo-demora',
    questionPt: 'Quanto tempo demora?',
    questionEn: 'How long does it take?',
    answerPt: 'Depende do serviço. Os serviços digitais têm um prazo típico indicado em cada serviço, e confirmo o prazo na proposta.',
    answerEn: 'It depends on the service. Digital services have typical delivery timelines indicated on each service card, and I confirm the timeframe in the formal proposal.'
  },
  {
    id: 'zonas-de-cobertura',
    questionPt: 'Que zonas cobre?',
    questionEn: 'What areas do you cover?',
    answerPt: 'Presencial em Pemba. Suporte remoto para o resto de Moçambique, quando o serviço o permite.',
    answerEn: 'On-site in Pemba. Remote support across the rest of Mozambique whenever the nature of the service permits.'
  },
  {
    id: 'emergencia-tecnica',
    questionPt: 'O que faço numa emergência técnica?',
    questionEn: 'What should I do during an IT emergency?',
    answerPt: 'Contacte-me directamente pelo WhatsApp ou por chamada, descrevendo o problema. Respondo o mais brevemente possível.',
    answerEn: 'Contact me directly via WhatsApp or phone call, describing the malfunction. I will respond as promptly as possible.'
  }
];

// 4.3 e 6. FORMAS DE PAGAMENTO (sem números de conta nem de carteira)
export const PAYMENT_METHODS: string[] = ['M-Pesa', 'e-Mola'];

// 5.1 TRABALHOS FEITOS (Portfolio)
// Desligado até haver trabalhos reais com autorização expressa do cliente para apresentação pública
// TODO: adicionar só trabalhos reais, com autorização do cliente para os mostrar.
export const PORTFOLIO_ITEMS: PortfolioItem[] = [];

// 5.4 DEPOIMENTOS DE CLIENTES
// Desligado até haver autorizações expressas
// TODO: adicionar só depoimentos reais, com autorização do cliente para os mostrar.
export const TESTIMONIALS: TestimonialItem[] = [];

// Curriculum Vitae factual para visualização e impressão
export const CV_DATA = {
  fullName: 'Felizardo Augusto José Franko',
  title: 'Técnico de Informática e Empreendedor Digital',
  contact: {
    email: 'felizardofrankoo@gmail.com',
    phone: '+258 84 200 1781',
    phonePrimary: '+258 84 200 1781',
    phoneAlt: '+258 86 200 1781',
    location: 'Pemba, Província de Cabo Delgado, Moçambique',
    nationality: 'Moçambicana',
    languages: 'Português (Nativo), Inglês (Técnico / Operacional)',
  },
  summary: 'Profissional de Tecnologias de Informação com formação técnico-profissional concluída no Curso Médio de Informática e Gestão pelo Instituto Superior Politécnico e Universitário (A Politécnica). Atua como Técnico de Informática e Assistente Administrativo na RHDC em Pemba, com experiência prática em suporte técnico L1/L2, redes estruturadas, administração de Windows Server e Active Directory, e manutenção de hardware. Exerce também a função de Formador de Informática no Programa UGCS/CV5 em Saúde e é fundador da FrankTech Serviços Digitais.',
  education: [
    {
      institution: 'A Politécnica – Instituto Superior Politécnico e Universitário',
      course: 'Curso Médio de Informática e Gestão',
      period: '2017 – 2019',
      details: 'Formação técnico-profissional em arquitetura de computadores, redes locais, sistemas informáticos e fundamentos de gestão administrativa.'
    }
  ],
  experience: [
    {
      role: 'Técnico de Informática e Assistente Administrativo',
      company: 'RHDC',
      location: 'Pemba, Cabo Delgado',
      period: 'Actualidade',
      responsibilities: [
        'Suporte técnico de 1º e 2º nível para resolução de falhas em computadores, sistemas e redes;',
        'Administração de utilizadores e permissões no Active Directory e Windows Server;',
        'Manutenção preventiva e correctiva de computadores e periféricos de escritório;',
        'Apoio na organização de procedimentos administrativos e inventariação.'
      ]
    },
    {
      role: 'Formador de Informática',
      company: 'Programa UGCS/CV5 em Saúde',
      location: 'Pemba, Cabo Delgado',
      period: 'Actualidade',
      responsibilities: [
        'Ministração de módulos de formação profissional prática em informática;',
        'Capacitação no uso de folhas de cálculo em Excel e processamento de texto;',
        'Preparação de exercícios práticos e acompanhamento individual de formandos.'
      ]
    },
    {
      role: 'Fundador & Consultor de Tecnologias',
      company: 'FrankTech Serviços Digitais',
      location: 'Pemba, Cabo Delgado',
      period: '2024 – Presente',
      responsibilities: [
        'Criação de landing pages e websites de apresentação para negócios locais;',
        'Design de materiais gráficos promocionais e identidades digitais;',
        'Assistência técnica informática para pequenos escritórios em Pemba.'
      ]
    },
    {
      role: 'Prestação de serviços de TI independente',
      company: 'Actividade Independente',
      location: 'Pemba e arredores',
      period: 'Período anterior',
      responsibilities: [
        'Manutenção e diagnóstico de computadores e equipamentos de escritório;',
        'Instalação de redes locais de pequena dimensão e configuração de Wi-Fi.'
      ]
    },
    {
      role: 'Estagiário de Tecnologias de Informação',
      company: 'Aeroporto de Nampula (ADM – Aeroportos de Moçambique)',
      location: 'Nampula, Moçambique',
      period: '2019 – 2020',
      responsibilities: [
        'Estágio curricular supervisionado no departamento de TI do aeroporto;',
        'Apoio aos postos de atendimento e acompanhamento de redes de dados;',
        'Participação na manutenção preventiva de equipamentos informáticos.'
      ]
    }
  ],
  keySkills: [
    'Suporte Técnico L1/L2 Presencial e Remoto',
    'Windows Server & Active Directory (AD)',
    'Redes Estruturadas LAN / WAN / Wi-Fi',
    'Manutenção e Diagnóstico de Hardware',
    'Microsoft Excel & Gestão Administrativa',
    'Cópias de Segurança (Backup) e Protecção Básica',
    'Apoio Administrativo & Gestão de Documentos',
    'Desenvolvimento Web Simples & FrankTech'
  ]
};
