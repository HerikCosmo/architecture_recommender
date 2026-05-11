import type { ArchitecturePattern } from "../data/architectures";
import type { QualityAttribute } from "../data/attributes";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

export async function getAttributes(): Promise<QualityAttribute[]> {
  const attributesRef = collection(db, "attributes");
  const snapshot = await getDocs(attributesRef);

  const attributesList = snapshot.docs.map(doc => {
    const data = doc.data();

    return {
      id: doc.id,
      name: data.name,
      description: data.description,
      examples: data.examples,
      relatedFeatures: data.relatedFeatures
    }  as QualityAttribute;
  });

  return attributesList;
}

export async function getArchitecturePatterns(): Promise<ArchitecturePattern[]> {
  const patternsRef = collection(db, "architecturePatterns")
  const snapshot = await getDocs(patternsRef);

  const patternsList = snapshot.docs.map(doc => {
    const data = doc.data();

    return {
      id: doc.id,
      name: data.name,
      code: data.code,
      description: data.description,
      examples: data.examples,
      pros: data.pros,
      cons: data.cons,
      imageURL: data.imageURL || "",
      attributeScores: data.attributeScores
    } as ArchitecturePattern
  });

  return patternsList;
}
