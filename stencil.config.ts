import { Config } from '@stencil/core'

export const config: Config = {
  namespace: 'tiagoporto',
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
      serviceWorker: undefined, // disable service workers
    },
    {
      type: 'docs-vscode',
      file: 'vscode-data.json',
    },
  ],
  testing: {
    browserHeadless: 'shell',
  },
}
