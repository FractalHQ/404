import vercel from '@sveltejs/adapter-vercel'
import mdsvexConfig from './mdsvex.config.js'
import preprocess from 'svelte-preprocess'
import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: [
		preprocess({
			postcss: true
		}),
		mdsvex(mdsvexConfig)
	],
	kit: {
		target: '#svelte',
		adapter: vercel(),
		ssr: !!process.env.SSR,
		vite: {
			server: {
				fs: {
					strict: false
				}
			}
		}
	}
}

export default config
