import { BookOpen, CheckCircle, Lightbulb } from "lucide-react"
import type { QualityAttribute } from "../data/attributes"

interface AttributeInfoProps {
  index: number,
  attribute: QualityAttribute
}

export function AttributeInfo({
  index,
  attribute
}: AttributeInfoProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg">
          {index + 1}
        </div>

        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            {attribute.name}
          </h2>

          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen size={18} className="text-blue-600" />
              <h3 className="font-semibold text-gray-700">Descrição</h3>
            </div>
            <p className="text-gray-600 leading-relaxed pl-6">
              {attribute.description}
            </p>
          </div>

          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb size={18} className="text-amber-600" />
              <h3 className="font-semibold text-gray-700">Exemplos de Uso</h3>
            </div>
            <ul className="grid md:grid-cols-2 gap-2 pl-6">
              {attribute.examples.map((example, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-600">•</span>
                  <span className="text-gray-600">{example}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle size={18} className="text-green-600" />
              <h3 className="font-semibold text-gray-700">Funcionalidades Relacionadas</h3>
            </div>
            <ul className="grid md:grid-cols-2 gap-2 pl-6">
              {attribute.relatedFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
