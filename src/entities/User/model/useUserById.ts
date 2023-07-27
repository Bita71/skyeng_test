import { useQuery } from "@tanstack/react-query";
import { userById } from "../constants";
import { getUserById } from "../api";

interface Params {
  id: number,
  enabled?: boolean,
}

export const useUserById = function useUserById({
  id,
  enabled = true,
}: Params) {
  return useQuery({
    queryKey: userById(id),
    queryFn: () => getUserById(id),
    enabled,
  })
};
