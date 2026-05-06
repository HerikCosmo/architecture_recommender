export interface Architecture {
    id: string;
    code: string;
    name: string;
    description: string;
    examples: string[];
    pros: string[];
    cons: string[];
    attributesScores: {
        performance: number;
        reusability: number;
        security: number;
        testability: number;
        modifiability: number;
        reliability: number;
        availability: number;
        scability: number;
    }
}