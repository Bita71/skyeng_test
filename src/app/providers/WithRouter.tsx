import { FC, ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

interface Props {
  children: ReactNode,
}

export const WithRouter: FC<Props> = function WithRouter({
  children,
}) {
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  );
};
