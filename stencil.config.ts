import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'tiny-stencil-demo',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
      // dir: 'docs'
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    }
  ],
};
