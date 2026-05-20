import { Image, Lightbulb, ThumbsDown, ThumbsUp } from "lucide-react";
import type { ArchitecturePattern } from "../data/architectures"
import { useState } from "react";

interface PatternInfoProps {
  arch: ArchitecturePattern
}

export function PatternInfo({
  arch
}: PatternInfoProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-sm bg-white/20 px-3 py-1 rounded">
              {arch.code}
            </span>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-xs underline hover:no-underline"
            >
              {isExpanded ? 'Ver menos' : 'Ver detalhes'}
            </button>
          </div>
          <h2 className="text-xl font-bold">{arch.name} </h2>
        </div>

        <div className="p-4">
          <div className="mb-4">
            <p className="text-gray-700 leading-relaxed">{arch.description}</p>
          </div>

          {arch.imageURL ? (
            <figure className="flex flex-col items-center my-2">
              <img
                src={arch.imageURL}
                alt={`Diagrama da arquitetura ${arch.name}`}
                className="w-full max-h-80 object-contain rounded-lg border border-gray-200 shadow-sm bg-white"
              />

              <figcaption className="mt-2 text-xs text-gray-400 text-center italic">
                Fonte: Referência da arquitetura {arch.name}
              </figcaption>
            </figure>
          ) : (
            <div className="mb-bg-gray-100 rounded-lg p-8 flex flex-col items center justify-center border-2 border-dashed border-gray-300">
              <Image className="text-gray-400 mb-2" scale={48} />
              <p className="text-gray-500 text-sm">Diagrama: {arch.name}</p>
              <p className="text-gray-400 text-xs mt-1">
                [Image de referência da arquitetura {arch.code}]
              </p>
          </div>
          )}

          {isExpanded && (
            <div className="space-y-4 border-t pt-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb size={18} className="text-amber-600" />
                  <h3 className="font-semibold text-gray-700">Exemplos de Uso</h3>
                </div>
                <ul className="space-y-1 pl-6">
                  {arch.examples.map((example, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-600 mt-1">•</span>
                      <span className="text-gray-600 text-sm">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <ThumbsUp size={18} className="text-green-600" />
                  <h3 className="font-semibold text-gray-700">Vantagens</h3>
                </div>
                <ul className="space-y-1 pl-6">
                  {arch.pros.map((pro, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span className="text-gray-600 text-sm">{pro}</span>
                      </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <ThumbsDown size={18} className="text-red-600" />
                  <h3 className="font-semibold text-gray-700">Desvantagens</h3>
                </div>
                <ul className="space-y-1 pl-6">
                  {arch.cons.map((con, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">✗</span>
                        <span className="text-gray-600 text-sm">{con}</span>
                      </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700 mb-2">
                  Adequação aos Atributos de Qualidade
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(arch.attributeScores).map(([attr, score]) => {
                    const attrNames: Record<string, string> = {
                      performance: 'Desempenho',
                      reusability: 'Reusabilidade',
                      security: 'Segurança',
                      testability: 'Testabilidade',
                      modifiability: 'Modificabilidade',
                      reliability: 'Confiabilidade',
                      availability: 'Disponibilidade',
                      scalability: 'Escalabilidade'
                    };

                    return (
                      <div
                        key={attr}
                        className="text-sm"
                        >
                          <div className="flex justify-between mb-1">
                            <span className="text-gray-600 text-xs">{attrNames[attr]}</span>
                            <span className="font-medium text-xs">{score}/5</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <div
                              className="bg-blue-600 h-1.5 rounded-full"
                              style={{ width: `${(score / 5) * 100}%`}}
                            />
                          </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
    </div>
  )
}
