import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'web-components-stock-price',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      dir: 'docs',
      serviceWorker: null,
    },
  ],
  testing: {
    browserHeadless: "new",
  },
};
