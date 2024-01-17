import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'LU CS Docs',
			social: {
				github: 'https://github.com/PostGuitarist/liberty-macos-docs',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Setup VSCode for C++', link: '/guides/vscode-setup/' },
						{ label: 'Setup Azure for Databases', link: '/guides/azuredb-setup/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
