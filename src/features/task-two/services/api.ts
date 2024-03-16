import { AgeType } from "../types";

export const getAge = async (name: string, signal: AbortSignal): Promise<AgeType> => {
  const res = await fetch(`https://api.agify.io/?name=${name}`, { signal })
  const data: AgeType = await res.json();
  return data;
}