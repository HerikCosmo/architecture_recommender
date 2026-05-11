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
