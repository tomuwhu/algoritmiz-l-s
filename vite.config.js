import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	build: {
  	chunkSizeWarningLimit: 1000 // kB
	},
	plugins: [sveltekit()]
});
