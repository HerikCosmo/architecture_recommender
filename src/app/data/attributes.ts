export interface QualityAttribute {
    id: string;
    name: string;
    description: string;
    examples: string[];
    relatedFeatures: string[];
}

export const priorityLevels = [
    { label: "Won't Have", value: 0, color: 'bg-gray-300', description: 'Não é necessário' },
    { label: "Could Have", value: 1, color: 'bg-blue-400', description: 'Desejável' },
    { label: "Should Have", value: 3, color: 'bg-orange-400', description: 'Importante' },
    { label: "Must Have", value: 5, color: 'bg-red-400', description: 'Essencial' }
  ] as const;

export const mockQualityAttributes: QualityAttribute[] = [
  {
    id: 'performance',
    name: 'Eficiência de desempenho',
    description: 'Capacidade do sistema de processar requisições e executar operações em tempo hábil, otimizando o uso de recursos computacionais.',
    examples: [
      'Sistemas de trading em tempo real',
      'Aplicações de streaming de vídeo',
      'Jogos online multiplayer',
      'Sistemas de busca em larga escala'
    ],
    relatedFeatures: [
      'Processamento de grandes volumes de dados',
      'Resposta em tempo real',
      'Cache de dados',
      'Otimização de consultas'
    ]
  },
  {
    id: 'reusability',
    name: 'Reusabilidade',
    description: 'Capacidade de reutilizar componentes, módulos e código em diferentes contextos e aplicações.',
    examples: [
      'Bibliotecas compartilhadas entre projetos',
      'Plataformas de componentes reutilizáveis',
      'Frameworks corporativos',
      'Sistemas modulares'
    ],
    relatedFeatures: [
      'Componentes independentes',
      'APIs bem definidas',
      'Bibliotecas compartilhadas',
      'Padrões de design consistentes'
    ]
  },
  {
    id: 'security',
    name: 'Segurança',
    description: 'Proteção do sistema contra acessos não autorizados, garantindo confidencialidade, integridade e autenticidade dos dados.',
    examples: [
      'Sistemas bancários',
      'Aplicações de saúde',
      'E-commerce',
      'Sistemas governamentais'
    ],
    relatedFeatures: [
      'Autenticação e autorização',
      'Criptografia de dados',
      'Auditoria e logs',
      'Proteção contra ataques'
    ]
  },
  {
    id: 'testability',
    name: 'Testabilidade',
    description: 'Facilidade de testar o sistema e seus componentes de forma automatizada e eficiente.',
    examples: [
      'Sistemas críticos de missão',
      'Aplicações com alta rotatividade de equipe',
      'Produtos com ciclos de release frequentes',
      'Sistemas com requisitos de qualidade rigorosos'
    ],
    relatedFeatures: [
      'Testes unitários',
      'Testes de integração',
      'Mocks e stubs',
      'Cobertura de código'
    ]
  },
  {
    id: 'modifiability',
    name: 'Modificabilidade',
    description: 'Facilidade de modificar o sistema para adicionar novas funcionalidades ou alterar as existentes.',
    examples: [
      'Produtos em constante evolução',
      'Startups com pivôs frequentes',
      'Sistemas com requisitos voláteis',
      'Plataformas de experimentação'
    ],
    relatedFeatures: [
      'Baixo acoplamento',
      'Alta coesão',
      'Separação de responsabilidades',
      'Extensibilidade'
    ]
  },
  {
    id: 'reliability',
    name: 'Confiabilidade',
    description: 'Capacidade do sistema de funcionar corretamente sob condições especificadas durante um período determinado.',
    examples: [
      'Sistemas de controle industrial',
      'Aplicações médicas',
      'Sistemas de transporte',
      'Infraestrutura crítica'
    ],
    relatedFeatures: [
      'Tratamento de erros',
      'Recuperação de falhas',
      'Validação de dados',
      'Monitoramento'
    ]
  },
  {
    id: 'availability',
    name: 'Disponibilidade',
    description: 'Capacidade do sistema de estar operacional e acessível quando necessário.',
    examples: [
      'Serviços cloud 24/7',
      'E-commerce global',
      'Sistemas de emergência',
      'Plataformas SaaS'
    ],
    relatedFeatures: [
      'Redundância',
      'Failover automático',
      'Balanceamento de carga',
      'Disaster recovery'
    ]
  },
  {
    id: 'scalability',
    name: 'Escalabilidade',
    description: 'Capacidade do sistema de lidar com crescimento de carga, usuários e dados mantendo o desempenho.',
    examples: [
      'Redes sociais',
      'Plataformas de e-learning',
      'Marketplaces',
      'Aplicações com crescimento viral'
    ],
    relatedFeatures: [
      'Escalabilidade horizontal',
      'Escalabilidade vertical',
      'Particionamento de dados',
      'Distributed computing'
    ]
  }
];
