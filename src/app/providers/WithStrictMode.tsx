import { FC, ReactNode, StrictMode } from 'react';

interface Props {
  children: ReactNode,
}

export const WithStrictMode: FC<Props> = function WithStrictMode({
  children,
}) {
  return (
    <StrictMode>
      {children}
    </StrictMode>
  );
};
