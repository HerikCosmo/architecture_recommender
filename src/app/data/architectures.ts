export interface ArchitecturePattern {
    id: string;
    code: string;
    name: string;
    description: string;
    examples: string[];
    pros: string[];
    cons: string[];
    imageURL?: string;
    attributeScores: {
        performance: number;
        reusability: number;
        security: number;
        testability: number;
        modifiability: number;
        reliability: number;
        availability: number;
        scalability: number;
    }
}

export const mockArchitectures: ArchitecturePattern[] = [
  {
    id: 'layered',
    code: 'LAY',
    name: 'Arquitetura em Camadas',
    description: 'Organiza o sistema em camadas horizontais (apresentação, negócio, persistência) onde cada camada só se comunica com a camada adjacente.',
    examples: [
      'Aplicações web tradicionais',
      'Sistemas corporativos',
      'ERPs',
      'CRMs'
    ],
    pros: [
      'Fácil entendimento e organização',
      'Separação clara de responsabilidades',
      'Boa testabilidade',
      'Manutenção simplificada'
    ],
    cons: [
      'Pode ter problemas de performance',
      'Acoplamento entre camadas',
      'Dificuldade em mudanças que atravessam camadas',
      'Escalabilidade limitada'
    ],
    attributeScores: {
      performance: 3,
      reusability: 4,
      security: 4,
      testability: 5,
      modifiability: 4,
      reliability: 4,
      availability: 3,
      scalability: 3
    }
  },
  {
    id: 'microservices',
    code: 'MS',
    name: 'Microserviços',
    description: 'Divide a aplicação em serviços pequenos e independentes que se comunicam via APIs, cada um responsável por uma funcionalidade específica.',
    examples: [
      'Netflix',
      'Uber',
      'Amazon',
      'Aplicações cloud-native'
    ],
    pros: [
      'Alta escalabilidade',
      'Implantação independente',
      'Tecnologias heterogêneas',
      'Resiliência a falhas'
    ],
    cons: [
      'Complexidade operacional',
      'Overhead de comunicação',
      'Dificuldade em testes integrados',
      'Consistência de dados desafiadora'
    ],
    attributeScores: {
      performance: 4,
      reusability: 5,
      security: 4,
      testability: 4,
      modifiability: 5,
      reliability: 4,
      availability: 5,
      scalability: 5
    }
  },
  {
    id: 'soa',
    code: 'SBA',
    name: 'Arquitetura Orientada a Serviços',
    description: 'Organiza funcionalidades como serviços interoperáveis que se comunicam através de um barramento de serviços (ESB).',
    examples: [
      'Sistemas corporativos integrados',
      'Plataformas B2B',
      'Sistemas legados modernizados',
      'Integrações empresariais'
    ],
    pros: [
      'Reusabilidade de serviços',
      'Integração facilitada',
      'Governança centralizada',
      'Interoperabilidade'
    ],
    cons: [
      'ESB pode ser ponto único de falha',
      'Overhead de comunicação',
      'Complexidade de governança',
      'Performance pode ser afetada'
    ],
    attributeScores: {
      performance: 3,
      reusability: 5,
      security: 4,
      testability: 3,
      modifiability: 4,
      reliability: 3,
      availability: 3,
      scalability: 4
    }
  },
  {
    id: 'event-driven',
    code: 'EDA',
    name: 'Arquitetura Orientada a Eventos',
    description: 'Baseada na produção, detecção e reação a eventos. Componentes se comunicam de forma assíncrona através de eventos.',
    examples: [
      'Sistemas de IoT',
      'Trading platforms',
      'Sistemas de notificação',
      'Processamento de streams'
    ],
    pros: [
      'Baixo acoplamento',
      'Alta escalabilidade',
      'Processamento assíncrono',
      'Responsividade'
    ],
    cons: [
      'Difícil rastreamento de fluxo',
      'Complexidade em debugging',
      'Eventual consistency',
      'Overhead de mensageria'
    ],
    attributeScores: {
      performance: 5,
      reusability: 4,
      security: 3,
      testability: 3,
      modifiability: 4,
      reliability: 4,
      availability: 5,
      scalability: 5
    }
  },
  {
    id: 'pipes-filters',
    code: 'PF',
    name: 'Pipes and Filters',
    description: 'Processa dados através de uma sequência de componentes (filtros) conectados por canais (pipes), onde cada filtro transforma os dados.',
    examples: [
      'Processamento de dados em batch',
      'Compiladores',
      'Sistemas ETL',
      'Processamento de imagens'
    ],
    pros: [
      'Fácil reutilização de filtros',
      'Processamento paralelo',
      'Simplicidade conceitual',
      'Fácil manutenção'
    ],
    cons: [
      'Overhead de transformação',
      'Não adequado para interações complexas',
      'Dificuldade em tratamento de erros',
      'Performance pode ser afetada'
    ],
    attributeScores: {
      performance: 4,
      reusability: 5,
      security: 3,
      testability: 5,
      modifiability: 4,
      reliability: 4,
      availability: 3,
      scalability: 4
    }
  },
  {
    id: 'client-server',
    code: 'CL',
    name: 'Cliente-Servidor',
    description: 'Separa o sistema em clientes que solicitam serviços e servidores que os fornecem, comunicando-se através de rede.',
    examples: [
      'Aplicações web',
      'Apps mobile',
      'Sistemas de email',
      'Bancos de dados'
    ],
    pros: [
      'Centralização de dados',
      'Fácil manutenção do servidor',
      'Controle de acesso centralizado',
      'Compartilhamento de recursos'
    ],
    cons: [
      'Servidor pode ser gargalo',
      'Ponto único de falha',
      'Escalabilidade limitada',
      'Dependência de rede'
    ],
    attributeScores: {
      performance: 3,
      reusability: 3,
      security: 4,
      testability: 4,
      modifiability: 3,
      reliability: 3,
      availability: 3,
      scalability: 3
    }
  },
  {
    id: 'hexagonal',
    code: 'HX',
    name: 'Arquitetura Hexagonal',
    description: 'Também conhecida como Ports and Adapters, isola a lógica de negócio do mundo externo através de portas e adaptadores.',
    examples: [
      'Sistemas de domínio complexo',
      'Aplicações com múltiplas interfaces',
      'Sistemas que mudam de infraestrutura',
      'DDD applications'
    ],
    pros: [
      'Alto desacoplamento',
      'Fácil teste da lógica de negócio',
      'Flexibilidade tecnológica',
      'Manutenibilidade'
    ],
    cons: [
      'Curva de aprendizado',
      'Mais código boilerplate',
      'Complexidade inicial',
      'Overhead de abstração'
    ],
    attributeScores: {
      performance: 4,
      reusability: 4,
      security: 4,
      testability: 5,
      modifiability: 5,
      reliability: 4,
      availability: 4,
      scalability: 4
    }
  },
  {
    id: 'clean',
    code: 'CA',
    name: 'Clean Architecture',
    description: 'Organiza o código em camadas concêntricas com dependências apontando para dentro, mantendo a lógica de negócio independente de frameworks.',
    examples: [
      'Aplicações enterprise',
      'Sistemas de longo prazo',
      'Projetos com requisitos complexos',
      'Sistemas críticos'
    ],
    pros: [
      'Independência de frameworks',
      'Altamente testável',
      'Regras de negócio isoladas',
      'Manutenibilidade excelente'
    ],
    cons: [
      'Curva de aprendizado íngreme',
      'Mais código e abstrações',
      'Pode ser over-engineering para apps simples',
      'Setup inicial complexo'
    ],
    attributeScores: {
      performance: 4,
      reusability: 5,
      security: 4,
      testability: 5,
      modifiability: 5,
      reliability: 5,
      availability: 4,
      scalability: 4
    }
  },
  {
    id: 'serverless',
    code: 'SL',
    name: 'Serverless',
    description: 'Executa código em resposta a eventos sem gerenciar servidores, com cobrança por uso real (FaaS - Function as a Service).',
    examples: [
      'APIs simples',
      'Processamento de eventos',
      'Backends mobile',
      'Automações e webhooks'
    ],
    pros: [
      'Zero gerenciamento de infraestrutura',
      'Escalabilidade automática',
      'Custo otimizado',
      'Deploy rápido'
    ],
    cons: [
      'Cold start latency',
      'Vendor lock-in',
      'Debugging complexo',
      'Limitações de execução'
    ],
    attributeScores: {
      performance: 3,
      reusability: 3,
      security: 4,
      testability: 3,
      modifiability: 4,
      reliability: 4,
      availability: 5,
      scalability: 5
    }
  }
];
