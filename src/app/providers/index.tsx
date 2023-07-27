import { FC, ReactNode } from 'react';
import { WithRouter } from './WithRouter';
import { WithReactQuery } from './WithReactQuery';
import { WithStrictMode } from './WithStrictMode';

interface Props {
  children?: ReactNode;
}

export const WithProviders: FC<Props> = function WithProviders({
  children,
}) {
  return (
    <WithStrictMode>
      <WithRouter>
        <WithReactQuery>
          {children}
        </WithReactQuery>
      </WithRouter>
    </WithStrictMode>
  );
};
