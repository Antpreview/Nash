export default {
    // site-level options
    title: 'Nash',
    description: 'flowers.',
    titleTemplate: 'Nash | :title',
    lastUpdated: true,
    base: '/Nash/',
  
    themeConfig: {
      logo: 'assets/img/logo-main.svg',
      lastUpdatedText: 'Ultima Actualización',
      socialLinks: [
        {
          icon: 'youtube',
          link: 'https://www.youtube.com/channel/UC2sq2AAhmQuPCUw__wQKMsA',
        },
        {
          icon: 'facebook',
          link: 'https://www.facebook.com/profile.php?id=61550705733294',
        }
      ],
      nav: [
        {text: "Inicio", link: "/"},
        { text: 'Posts', link: '/posts/' }
      ],
      docFooter: {
        prev: 'Pagina anterior',
        next: 'Proxima pagina'
      },
      footer: {
        message: 'Released under the MIT License.',
        copyright:
          'Copyright © 2023-present <a href="https://github.com/Antpreview">WipoDev</a>',
      },
      sidebar: {
        "/posts/": [
          {
          text: 'AMD',
          collapsed: true,
          items: [
            {
              text: '2023',
              collapsed: true,
              items: [
                { text: 'FSR 3.0 Gamecoom2003 Amd', link: '/posts/AMD/2023/agosto/fsr3.0_amd' },
              ],
            },
          ],
        },
        {
          text: 'Intel',
          collapsed: true,
          items: [
            { text: 'FSR 3.0 Gamecoom2003 intel', link: '/posts/intel/fsr3.0_intell' },
          ],
        },
      ],
      }
    }
  }