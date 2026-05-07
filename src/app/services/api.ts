import type { Architecture } from "../data/architectures";
import type { QualityAttribute } from "../data/attributes";

const API_URL = ""

export async function fetchAttributes(): Promise<QualityAttribute[]> {
  const response = await fetch(`${API_URL}/attributes`)
  if(!response) throw new Error("Erro ao buscar atributos")

  return await response.json()
}

export async function fetchArchitectures(): Promise<Architecture[]> {
  const response = await fetch(`${API_URL}/architectures`)
  if(!response) throw new Error("Erro ao buscar arquiteturas")

  return await response.json()
}
