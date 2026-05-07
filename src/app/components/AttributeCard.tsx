import { useState } from "react";
import { priorityLevels, type QualityAttribute } from "../data/attributes";

interface AttributeCardProps {
  attribute: QualityAttribute;
  priorityValue: number;
  onPriorityChange: (attributeId: string, value: number) => void;
}

export function AttributeCard({
  attribute,
  priorityValue,
  onPriorityChange,
}: AttributeCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="border rounded-lg p-4 hover:border-blue-300 transiton-colors">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-gray-800">
          {attribute.name}
        </h3>
        <span className="text-sm px-3 py-1 rounded-full bg-gray-100 font-medium">Peso: {priorityValue}</span>
      </div>

      <p className="text-sm text-gray-600 mb-3 leading-relaxed">{attribute.description}</p>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-sm text-blue-600 hover:text-blue-800 font-medium mb-3"
        >
          {isExpanded ? 'Ver menos detalhes' : 'Ver mais detalhes'}
      </button>

      {isExpanded && (
        <div className="mb-3 p-3 bg-gray-50 rounded-lg space-y-2 text-sm">
          <div>
            <p className="font-medium text-gray-700 mb-1">Exemplos de uso</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 pl-2">
              {attribute.examples.map((example, idx) => (
                <li key={idx}>{example}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-medium text-gray-700 mb-1">Funcionalidades relacionadas:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 pl-2">
              {attribute.relatedFeatures.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className="grid grid-cols-4 gap-2">
        {priorityLevels.map(level => (
          <button
            key={level.value}
            onClick={() => onPriorityChange(attribute.id, level.value)}
            className={`px-2 py-3 rounded-md border-2 transition-all text-xs ${priorityValue === level.value ? 'border-blue-600 bg-blue-50 shadow-md scale-105' : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'}`}
            >
              <div className={`w-3 h-3 rounded-full ${level.color} mx-auto mb-1`} />
              <div className="font-semibold text-sm mb-0.5">{level.value}</div>
              <div className="font-medium text-xs leading-tight">{level.label}</div>
              <div className="text-gray-500 text-xs mt-0.5">{level.description}</div>
          </button>
        ))}
      </div>
    </div>
  )
}
