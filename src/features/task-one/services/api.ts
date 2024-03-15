import { FactType } from "../types";

export const getFact = async (): Promise<FactType> => {
  const res = await fetch('https://catfact.ninja/fact')
  const data: FactType = await res.json();
  return data;
}