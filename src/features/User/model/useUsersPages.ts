import { useState } from "react";

export const useUsersPages = function useUsersPages() {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(12);

  return {
    page,
    setPage,
    perPage,
    setPerPage,
  }
};
