import adapter from '@sveltejs/adapter-static';

const config = { 
  kit: { 
    adapter: adapter({
      pages: 'docs',
      assets: 'docs',
      fallback: null
    }),
    paths: {
      base: '/algoritmiz-l-s'
    },
    prerender: {
      entries: ['*']
    }
  }
};

export default config;
