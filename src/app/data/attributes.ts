export interface QualityAttribute {
    id: string;
    name: string;
    description: string;
    examples: string[];
    relatedFeatures: string[];
}

export interface QualityAttributesConflict {
  attr1Id: string;
  attr2Id: string;
  description: string;
}

export const priorityLevels = [
    { label: "Won't Have", value: 0, color: 'bg-gray-300', description: 'Não é necessário' },
    { label: "Could Have", value: 1, color: 'bg-blue-400', description: 'Desejável' },
    { label: "Should Have", value: 3, color: 'bg-orange-400', description: 'Importante' },
    { label: "Must Have", value: 5, color: 'bg-red-400', description: 'Essencial' }
  ] as const;
