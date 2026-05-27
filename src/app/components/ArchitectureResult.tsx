import { useState } from "react";
import type { ArchitecturePattern } from "../data/architectures";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ArchitectureResultProps {
  architecture: ArchitecturePattern;
  score: number;
  maxScore: number;
  rank: number;
}

export function ArchictectureResult({
  architecture,
  score,
  maxScore,
  rank
}: ArchitectureResultProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const percentage = maxScore > 0 ? (score / maxScore) * 100 : 0;

  const getRankColor = (rank: number) => {
    if (rank === 1) return 'bg-yellow-100 border-yellow-400';
    if (rank === 2) return 'bg-gray-100 border-gray-400';
    if (rank === 3) return 'bg-orange-100 border-orange-400';
    return 'bg-white border-gray-200';
  }

  return (
    <div className={`border-2 rounded-lg p-4 ${getRankColor(rank)} shadow-sm`}>
      <div className="flex items-center gap-3 mb-3">
        <div className="text-2xl font-bold">{rank}°</div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-mono text-sm bg-gray-800 text-white px-2 py-1 rounded">
              {architecture.code}
            </span>
            <h3 className="font-semibold">{architecture.name}</h3>
          </div>
          <div className="mt-1">
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full transition-all" style={{width: `${percentage}%`}} />
              </div>
              <span className="text-sm font-medium">{score.toFixed(1)} pts</span>
            </div>
          </div>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 hover:bg-gray-200 rounded-full transition-colors"
        >
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}

        </button>
      </div>

      {isExpanded && (
      <div className="space-y-3 text-sm border-t pt-3 mt-3">
        <div>
          <p className="font-medium text-gray-700 mb-1">Descrição:</p>
          <p className="text-gray-600">{architecture.description}</p>
        </div>

        <div>
          <p className="font-medium text-gray-700 mb-1">Exemplos de uso:</p>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {architecture.examples.map((example, idx) => (
              <li key={idx}>{example}</li>
            ))}
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          <div>
            <p className="font-medium text-green-700 mb-1">Prós:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {architecture.pros.map((pro, idx) => (
                <li key={idx}>{pro}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-medium text-red-700 mb-1">Contras:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {architecture.cons.map((con, idx) => (
                <li key={idx}>{con}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )}
    </div>
  )
}
