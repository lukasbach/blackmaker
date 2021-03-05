import { Helmet } from 'react-helmet';
import React from 'react';

export const NoPaddingDecorator = (Story: () => JSX.Element) => {
  return (
    <>
      <Helmet>
        <style>{' .story-inner { padding: 0 !important; } '}</style>
      </Helmet>
      <Story />
    </>
  );
};
