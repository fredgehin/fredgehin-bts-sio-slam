import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'fr-FR',
  title: 'BTS SIO',
  description:
    'Site contenant des mémos et des TPs pour les étudiants en BTS SIO.',

  themeConfig: {
    nav: [
      { text: 'Accueil', link: '/index' },

      // ...
    ],

    sidebar: [
      {
        text: 'Memos',
        items: [
          { text: 'Cours', link: '/cours' },
          // ...
        ],
      },
      {
        text: 'TPs',
        items: [
          { text: 'TP', link: '/tp' },
          // ...
        ],
      },
      {
        text: 'Bloc par Bloc',
        items: [
          { text: 'Bloc 1', link: 'bloc-par-bloc/bloc1' },
          { text: 'Bloc 2', link: 'bloc-par-bloc/bloc2' },
          { text: 'Bloc 3', link: 'bloc-par-bloc/bloc3' },
          { text: 'Ateliers Pro', link: 'bloc-par-bloc/ateliers' },
        ],
      },
    ],
  },
});
