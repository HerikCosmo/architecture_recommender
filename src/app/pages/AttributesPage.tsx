import { BookOpen } from "lucide-react";
import type { QualityAttribute } from "../data/attributes";
import { AttributeInfo } from "../components/AttributeInfo";
import { useEffect, useState } from "react";
import { getAttributes } from "../services/api";

export function AttributesPage() {
  const [attributes, setAttributes] = useState<QualityAttribute[]>([]);

  useEffect(() => {
    const fetchAttributes = async() => {
      try {
        const data = await getAttributes();
        setAttributes(data);
      } catch(err) {
        console.error("Erro ao buscar atributos: ", err);
      }
    }

    fetchAttributes();
  }, [])

  return (
    <div className="max-w 6-xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-3">
          <BookOpen className="text-blue-600" size={40} />
          <h1 className="text-3xl font-bold text-gray-800">
            Atributos de Qualidade
          </h1>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Conheça os atributos de qualidade que podem ser considerados na escolha da arquitetura de software
        </p>
      </div>

      <div className="space-y-6">
        {attributes.map((attribute, index) => (
          <AttributeInfo key={attribute.id} attribute={attribute} index={index} />
        ))}
      </div>
    </div>
  );
}
