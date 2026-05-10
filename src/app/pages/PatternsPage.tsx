import { Boxes } from "lucide-react";
import type { ArchitecturePattern } from "../data/architectures";
import { PatternInfo } from "../components/PatternInfo";
import { useEffect, useState } from "react";
import { getArchitecturePatterns } from "../services/api";

export function PatternsPage() {
  const [patterns, setPatterns] = useState<ArchitecturePattern[]>([])

  useEffect(() => {
    const fetchPatterns = async() => {
      try {
        const data = await getArchitecturePatterns();
        setPatterns(data);
      } catch(err) {
        console.error("Erro ao buscar atributos: ", err);
      }
    }

    fetchPatterns();
  }, []);

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
        {patterns.map((arch) => (
          <PatternInfo key={arch.id} arch={arch} />
        ))}
      </div>
    </div>
  )
}
