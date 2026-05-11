import { useEffect, useState } from "react";
import { AttributeCard } from "../components/AttributeCard";
import { priorityLevels, type QualityAttribute } from "../data/attributes";
import { type ArchitecturePattern } from "../data/architectures";
import { Calculator, Target } from "lucide-react";
import { ArchictectureResult } from "../components/ArchitectureResult";
import { getArchitecturePatterns, getAttributes } from "../services/api";

export function MainPage() {
  const [attributes, setAttributes] = useState<QualityAttribute[]>([]);
  const [patterns, setPatterns] = useState<ArchitecturePattern[]>([]);

  const [priorities, setPriorities] = useState<Record<string, number>>({});

  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const fetchAllData = async() => {
      try {
        const [fetchPatterns, fetchAttributes] = await Promise.all([
          getArchitecturePatterns(),
          getAttributes()
        ]);

        setPatterns(fetchPatterns);
        setAttributes(fetchAttributes);

        const initialPriorities = Object.fromEntries(
          fetchAttributes.map(attr => [attr.id, 0])
        );

        setPriorities(initialPriorities);
      } catch(err) {
        console.error("Erro ao carregar dados: ", err);
      }
    }

    fetchAllData();
  }, []);

  const hasSelectedPriorities = Object.values(priorities).some(p => p > 0);

  const calculateScores = () => {
    return patterns
      .filter(arch => {
        const hasConflict = Object.entries(priorities).some(([attrId, priority]) => {
          const attrScore = arch.attributeScores[attrId as keyof typeof arch.attributeScores];
          return priority === 5 && attrScore === 0;
        })

        return !hasConflict;
      })
      .map(arch => {
        let score = 0;
        Object.entries(priorities).forEach(([attrId, priority]) => {
          const attrScore = arch.attributeScores[attrId as keyof typeof arch.attributeScores];
          score += priority * attrScore; // w_i * a_i
        });
        return { architecture: arch, score }
      })
      .sort((a, b) => b.score - a.score);
  };

  const results = calculateScores();

  const maxScore = Math.max(...results.map(r => r.score), 1);

  const handlePriorityChange = (attributeId: string, value: number) => {
    setPriorities(prev => ({
      ...prev,
      [attributeId]: value
    }));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {!showResults && (
        <>
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Target className="text-blue-600" size={40} />
              <h1 className="text-3xl font-bold text-gray-800">
                Seleção de Atributos
              </h1>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Selecione o nível de prioridade para cada atributo de qualidade do seu sistema
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="font-semibold mb-3 text-gray-800">Legenda de Prioridades:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {priorityLevels.map(level => (
                <div key={level.value} className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded ${level.color}`} />
                  <div>
                    <div className="text-sm font-medium">{level.label}</div>
                    <div className="text-xs text-gray-500">{level.description}</div>
                  </div>
                </div>
              ))}
            </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Atributos de Qualidade
          </h2>
          <div className="space-y-4">
            {attributes.map(attribute => (
              <AttributeCard
                key={attribute.id}
                attribute={attribute}
                priorityValue={priorities[attribute.id]}
                onPriorityChange={handlePriorityChange}
              />
            ))}
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => setShowResults(true)}
            disabled={!hasSelectedPriorities}
            className={`inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-lg transition-all ${
              hasSelectedPriorities
              ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <Calculator size={24} />
            Processar e Ver Ranking
          </button>
          {!hasSelectedPriorities && (
            <p className="text-sm text-gray-500 mt-2">
              Selecione ao menos um atributo com prioridade maior que 0
            </p>
          )}
        </div>
        </>
      )}

      {showResults && (
        <>
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-3">
              Ranking de Arquiteturas
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto mb-4">
              Baseado nas prioridades selecionadas, estas são as arquiteturas mais compatíveis
            </p>
            <button
              onClick={() => setShowResults(false)}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Voltar para seleção
            </button>
          </div>

          <div className="space-y-4">
            {results.map((result, index) => (
              <ArchictectureResult
                key={result.architecture.id}
                architecture={result.architecture}
                score={result.score}
                maxScore={maxScore}
                rank={index + 1}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
