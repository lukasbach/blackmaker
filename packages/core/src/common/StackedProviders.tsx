import * as React from 'react';
import { PropsWithChildren } from 'react';
import { Falsy } from './Falsy';

type ProviderType<T> = (providerProps: PropsWithChildren<T>) => React.ReactElement;
type ProviderDataWithProps<T = {}> = [ProviderType<T>, T];

export const StackedProviders: React.FC<{
  providers: Array<Falsy | ProviderType<{}> | ProviderDataWithProps>;
}> = props => {
  return (
    <>
      {props.providers.reduceRight((acc, Provider) => {
        if (!Provider) {
          return acc;
        }

        if (Array.isArray(Provider)) {
          const [ProviderComponent, providerProps] = Provider;
          return <ProviderComponent {...providerProps}>{acc}</ProviderComponent>;
        } else {
          return <Provider>{acc}</Provider>;
        }
      }, props.children)}
    </>
  );
};
