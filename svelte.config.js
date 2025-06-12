import adapter from '@sveltejs/adapter-static';

const config = { 
  kit: { 
    adapter: adapter({
      pages: 'docs'
    }),
    paths: {
      base: '/algoritmiz-l-s'
    }
  }
};

export default config;
