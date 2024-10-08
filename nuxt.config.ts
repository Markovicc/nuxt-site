// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  runtimeConfig: {
    
    public: {
      apiBase: process.env.API_URL || 'http://localhost:1337/api'
    }
  },

  devtools: { enabled: true },





  
 

  app: {
    pageTransition: {
      name: 'fade',
      mode: 'out-in'
    },
    layoutTransition: {
      name: 'slide',
      mode: 'out-in'
    }
  },

  css: [
    "/assets/css/animate.min.css",
    'bootstrap/dist/css/bootstrap.min.css',
    "/assets/css/flaticon.css",
    "/assets/css/boxicons.min.css",
    "/assets/css/style.css",
    "/assets/css/responsive.css",
  ],

  modules: [
    '@bootstrap-vue-next/nuxt',
    'vue3-carousel-nuxt',
    '@nuxtjs/strapi',
    "@stefanobartoletti/nuxt-social-share"
  ],

  experimental: {
    inlineSSRStyles: id => !id?.includes('entry'),
    
  },
  socialShare: {
    baseUrl: 'http://localhost:3000/' // required!
    // other optional module options
  },

  



  carousel: {
    prefix: 'MyPrefix'
  },

  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337',
    prefix: '/api',
    admin: '/admin',
    version: 'v4',
    cookie: {},
    cookieName: 'strapi_jwt'
  },
  
  compatibilityDate: '2024-07-18'
} as any)