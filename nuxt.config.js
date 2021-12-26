const config = require('./.contentful.json');

export default {
  target: 'static', // default is 'server'
	modules: ['@nuxt/http', '@nuxtjs/markdownit', '@nuxtjs/axios', '@nuxtjs/auth-next'],
  buildModules: ['@nuxtjs/tailwindcss'],
  plugins: ['~/plugins/preview.client.js'],
	head: {
    title: 'Wifeapedia',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Fan wiki for reality show WifeSwap'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
	env: {
		CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
    CTF_CPA_ACCESS_TOKEN: config.CTF_CPA_ACCESS_TOKEN
	},
  css: [
    '~/assets/css/main.scss'
  ],
  components: true,
  markdownit: {
    html: true,
  },
  generate: {
    fallback: true
  },
  // router: {
  //   middleware: ['auth']
  // },
  auth: {
    strategies: {
      social: {
        scheme: 'oauth2',
        endpoints: {
          authorization: 'https://accounts.google.com/o/oauth2/auth',
          token: undefined,
          userInfo: 'https://www.googleapis.com/oauth2/v3/userinfo',
          logout: 'https://example.com/logout'
        },
        token: {
          property: 'access_token',
          type: 'Bearer',
          maxAge: 1800
        },
        refreshToken: {
          property: 'refresh_token',
          maxAge: 60 * 60 * 24 * 30
        },
        responseType: 'code',
        grantType: 'authorization_code',
        accessType: 'offline',
        redirectUri: 'http://localhost:3000/login',
        logoutRedirectUri: 'http://localhost:3000/login',
        clientId: '82783355399-ifi5bmi1tptg1hmpj9k98gq75rfucat7.apps.googleusercontent.com',
        scope: ['openid', 'profile', 'email'],
        state: 'UNIQUE_AND_NON_GUESSABLE',
        codeChallengeMethod: '',
        responseMode: '',
        acrValues: '',
        // autoLogout: false
      }
    }
  }
}