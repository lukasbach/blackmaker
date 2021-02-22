import * as React from 'react';
import { PropsWithChildren } from 'react';
import { Falsy } from './Falsy';

type ProviderWithoutProps<T> = ((providerProps: PropsWithChildren<T>) => React.ReactElement) | React.FC<{}>;
type ProviderWithPropsInner<T> = ProviderWithoutProps<T> | React.FC<T> | React.Provider<T>;
type ProviderWithProps<T = any> = [ProviderWithPropsInner<T>, T];

export const StackedProviders: React.FC<{
  providers: Array<Falsy | ProviderWithoutProps<{}> | ProviderWithProps>;
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
