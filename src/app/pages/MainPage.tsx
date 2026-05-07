import { useState } from "react";
import { AttributeCard } from "../components/AttributeCard";
import { priorityLevels, mockQualityAttributes as qualityAttributes } from "../data/attributes";
import { Calculator, Target } from "lucide-react";

export function MainPage() {
  const [priorities, setPriorities] = useState<Record<string, number>>(
    Object.fromEntries(qualityAttributes.map(attr => [attr.id, 0]))
  );

  const [showResults, setShowResults] = useState(false);

  const hasSelectedPriorities = Object.values(priorities).some(p => p > 0);

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
            {qualityAttributes.map(attribute => (
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
    </div>
  )
}
