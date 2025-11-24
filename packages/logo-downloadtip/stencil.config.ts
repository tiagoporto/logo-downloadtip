import { Config } from '@stencil/core'

export const config: Config = {
  namespace: 'tiagoporto',
  validatePrimaryPackageOutputTarget: true,
  sourceMap: false,
  outputTargets: [
    {
      type: 'dist-custom-elements',
      // customElementsExportBehavior: 'auto-define-custom-elements',
      isPrimaryPackageOutputTarget: true,
      dir: 'dist',
      // minify: true,
      externalRuntime: false,
    },
    // {
    //   type: 'docs-readme',
    // },
    {
      type: 'docs-vscode',
      file: 'vscode-data.json',
    },
  ],
  testing: {
    browserHeadless: 'shell',
  },
}
