import type { ArchitecturePattern } from "../data/architectures";
import type { QualityAttribute } from "../data/attributes";
import { db, DATABASE_ID } from "../config/appwrite";

export async function getAttributes(): Promise<QualityAttribute[]> {
  const response = await db.listRows({
    databaseId: DATABASE_ID,
    tableId: 'attributes'
  })

  const attributesList = response.rows.map(row => {
    return {
      id: row.id,
      name: row.name,
      description: row.description,
      examples: row.examples,
      relatedFeatures: row.relatedFeatures
    } as QualityAttribute;
  });

  return attributesList;
}

export async function getArchitecturePatterns(): Promise<ArchitecturePattern[]> {
  const response = await db.listRows({
    databaseId: DATABASE_ID,
    tableId: 'architecturePatterns'
  });

  const patternsList = response.rows.map(row => {
     return {
      id: row.$id,
      name: row.name,
      code: row.code,
      description: row.description,
      examples: row.examples,
      pros: row.pros,
      cons: row.cons,
      imageURL: row.imageURL || "",
      attributeScores: JSON.parse(row.attributeScores)
    } as ArchitecturePattern
  });

  return patternsList;
}
