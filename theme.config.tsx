import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span className="momentmm-logo">Momentmm.xyz</span>,
  project: {
    link: 'https://github.com/momentmm',
  },
  chat: {
    link: 'https://discord.gg/momentmm',
  },
  docsRepositoryBase: 'https://github.com/momentmm/docs',
  primaryHue: { light: 265, dark: 275 },
  primarySaturation: 70,
  footer: {
    text: 'Momentmm.xyz - Official Documentation',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Momentmm.xyz'
    }
  },
}

export default config
