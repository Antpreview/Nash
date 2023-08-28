export default {
    // site-level options
    title: 'Nash',
    description: 'flowers.',
    titleTemplate: 'Nash | :title',
    lastUpdated: true,
    
  
    themeConfig: {
      logo: 'assets/img/logo-main.svg',
      nav: [
        { text: 'Posts', link: '/posts/' },
        { text: 'Config', link: '/config' },
        { text: 'Changelog', link: 'https://github.com/...' }
      ],
      sidebar: {
        "/posts/fsr3.0": [""],
      },
    }
  }