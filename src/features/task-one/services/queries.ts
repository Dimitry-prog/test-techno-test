import { useQuery } from "@tanstack/react-query";
import { getFact } from "./api.ts";

export const useFact = () => {
  return useQuery({
    queryKey: ['fact'],
    queryFn: getFact,
    enabled: false
  })
}