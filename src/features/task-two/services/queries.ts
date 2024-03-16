import { useQuery } from "@tanstack/react-query";
import { getAge } from "./api.ts";

export const useAge = (name: string) => {
  const abortController = new AbortController();

  return useQuery({
    queryKey: ['age'],
    queryFn: () => getAge(name, abortController.signal),
    enabled: false,
  })
}