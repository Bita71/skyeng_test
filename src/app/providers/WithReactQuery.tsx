import { FC, ReactNode } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// Время актуальности данных в кеше (5 мин.)
const STALE_TIME = 300000;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: STALE_TIME,
    },
  },
});

interface Props {
  children: ReactNode,
}

export const WithReactQuery: FC<Props> = function WithReactQuery({
  children,
}) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
