import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _05733aa6 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _0ed5fb6d = () => interopDefault(import('../pages/_series/index.vue' /* webpackChunkName: "pages/_series/index" */))
const _78b7530e = () => interopDefault(import('../pages/_series/seasons/index.vue' /* webpackChunkName: "pages/_series/seasons/index" */))
const _5a2c0141 = () => interopDefault(import('../pages/_series/seasons/_season/index.vue' /* webpackChunkName: "pages/_series/seasons/_season/index" */))
const _fa3d4408 = () => interopDefault(import('../pages/_series/seasons/_season/episodes/index.vue' /* webpackChunkName: "pages/_series/seasons/_season/episodes/index" */))
const _5cb13985 = () => interopDefault(import('../pages/_series/seasons/_season/episodes/_episode/index.vue' /* webpackChunkName: "pages/_series/seasons/_season/episodes/_episode/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _05733aa6,
    name: "index"
  }, {
    path: "/:series",
    component: _0ed5fb6d,
    name: "series"
  }, {
    path: "/:series/seasons",
    component: _78b7530e,
    name: "series-seasons"
  }, {
    path: "/:series/seasons/:season",
    component: _5a2c0141,
    name: "series-seasons-season"
  }, {
    path: "/:series/seasons/:season/episodes",
    component: _fa3d4408,
    name: "series-seasons-season-episodes"
  }, {
    path: "/:series/seasons/:season/episodes/:episode",
    component: _5cb13985,
    name: "series-seasons-season-episodes-episode"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
