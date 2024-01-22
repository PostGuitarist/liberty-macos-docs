import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: <span>LU CS Docs</span>,
  useNextSeoProps() {
    return {
      titleTemplate: '%s – LU CS Docs'
    }
  },
  project: {
    link: 'https://github.com/PostGuitarist/liberty-macos-docs',
  },
  chat: {
    link: 'https://discord.gg/egVb7yPpVf',
  },
  docsRepositoryBase: 'https://github.com/PostGuitarist/liberty-macos-docs',
  footer: {
    text: 'Made with ❤️ by Cameron and Zaden', 
  },
}

export default config
