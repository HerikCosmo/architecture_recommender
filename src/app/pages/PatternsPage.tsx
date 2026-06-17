import { Boxes } from "lucide-react";
import type { ArchitecturePattern } from "../data/architectures";
import { PatternInfo } from "../components/PatternInfo";
import { useEffect, useState } from "react";
import { getArchitecturePatterns } from "../services/api";
import { Loading } from "../components/Loading";

export function PatternsPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [patterns, setPatterns] = useState<ArchitecturePattern[]>([])

  useEffect(() => {
    const fetchPatterns = async() => {
      try {
        const data = await getArchitecturePatterns();
        setPatterns(data);
      } catch(err) {
        console.error("Erro ao buscar estilos de arquitetura: ", err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPatterns();
  }, []);

  if(isLoading) {
    return <Loading />
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-3">
          <Boxes className="text-blue-600" size={40} />
          <h1 className="text-3xl font-bold text-gray-800">Estilos Arquiteturais</h1>
        </div>
        <p className="text-gray-600 max-w 2xl mx-auto">
          Explore os diferentes estilos arquiteturais disponíveis para seu projeto
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
