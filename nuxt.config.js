const config = require('./.contentful.json');

export default {
  target: 'static', // default is 'server'
	modules: ['@nuxt/http', '@nuxtjs/markdownit'],
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

}