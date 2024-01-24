import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>LU CS Docs</span>,
  useNextSeoProps() {
    return {
      titleTemplate: '%s – LU CS Docs'
    }
  },
  head: (
    <>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-LG03E2EJLB"></script>
      <script>{
        `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-LG03E2EJLB');`
      }</script>
    </>
  ),
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
