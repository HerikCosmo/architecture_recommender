import type { QualityAttributesConflict } from "../data/attributes";

interface CardConflictProps {
  activeConflicts: QualityAttributesConflict[];
  attributeNames: Record<string, string>;
}

export function CardConflict({
  activeConflicts,
  attributeNames
}: CardConflictProps) {
  if (activeConflicts.length === 0) return null;

  return (
    <>
      <button
          onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
          className="fixed top-6 right-6 z-50 flex items-center bg-amber-100 text-amber-900 px-4 py-2 rounded-full shadow-md border border-amber-300 hover:bg-amber-200 transition-all cursor-pointer"
        >
          <span className="mr-2 text-sm font-bold">
            {activeConflicts.length} {activeConflicts.length === 1 ? 'Atrito detectado' : 'Atritos detectados'}
          </span>
          <span className="ml-1 text-xs opacity-75">(Clique para ver)</span>
        </button>

        <div className=" bg-amber-50 border border-amber-200 rounded-lg p-5 my-4">
          <h3 className="text-amber-900 font-bold mb-4 flex items-center text-lg">
            Atenção aos Atritos Arquiteturais
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeConflicts.map((conflict, index) => (
              <div key={index} className="bg-white p-3 border border-amber-100 rounded-md shadow-sm">
                 <strong className="text-amber-800 text-sm block mb-1 capitalize">
                   {attributeNames[conflict.attr1Id]} vs {attributeNames[conflict.attr2Id]}
                 </strong>
                 <p className="text-amber-700 text-xs leading-relaxed">
                   {conflict.description}
                 </p>
              </div>
            ))}
          </div>
        </div>
    </>
  );
}
