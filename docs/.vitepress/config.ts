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
          { text: 'HTML 5', link: '/memos/HTML5/readme' },
          { text: 'CSS', link: '/memos/CSS/readme' },
          { text: 'JavaScript', link: '/memos/JS/readme' },
          { text: 'PHP', link: '/memos/PHP/readme' },
          { text: 'C#', link: '/memos/CSHARP/readme' },
          { text: 'JAVA', link: '/memos/JAVA/readme' },
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
