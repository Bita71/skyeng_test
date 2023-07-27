import { useQuery } from "@tanstack/react-query";
import { usersList } from "../constants";
import { UsersParams, getUsers } from "../api";

interface Params extends UsersParams {
  enabled?: boolean,
}

export const useUsers = function useUsers({
  enabled = true,
  ...params
}: Params) {
  return useQuery({
    queryKey: usersList(params),
    queryFn: () => getUsers(params),
    enabled,
  })
};
