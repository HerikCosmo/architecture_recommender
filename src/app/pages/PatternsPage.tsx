import { Boxes } from "lucide-react";
import { mockArchitectures as architectures } from "../data/architectures";
import { PatternInfo } from "../components/PatternInfo";

export function PatternsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-3">
          <Boxes className="text-blue-600" size={40} />
          <h1 className="text-3xl font-bold text-gray-800">Padrões Arquiteturais</h1>
        </div>
        <p className="text-gray-600 max-w 2xl mx-auto">
          Explore os diferentes padrões arquiteturais disponíveis para seu projeto
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {architectures.map((arch) => (
          <PatternInfo key={arch.id} arch={arch} />
        ))}
      </div>
    </div>
  )
}
