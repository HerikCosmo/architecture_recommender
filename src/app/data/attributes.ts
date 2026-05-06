export interface QualityAttributes {
    id: string;
    name: string;
    description: string;
    examples: string[];
    relatedFeatures: string[];
}

export const priorityLevels = [
    { label: "Won't Have", value: 0, color: "bg-gray-200"},
    { label: "Could Have", value: 1, color: "bg-blue-200"},
    { label: "Should Have", value: 3, color: "bg-orange-200"},
    { label: "Must Have", value: 5, color: "bg-red-200"}
] as const;