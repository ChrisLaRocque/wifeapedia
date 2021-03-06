import Middleware from './middleware'
import { Auth, authMiddleware, ExpiredAuthSessionError } from '~auth/runtime'

// Active schemes
import { Oauth2Scheme } from '~auth/runtime'

Middleware.auth = authMiddleware

export default function (ctx, inject) {
  // Options
  const options = {
  "resetOnError": false,
  "ignoreExceptions": false,
  "scopeKey": "scope",
  "rewriteRedirects": true,
  "fullPathRedirect": false,
  "watchLoggedIn": true,
  "redirect": {
    "login": "/login",
    "logout": "/",
    "home": "/",
    "callback": "/login"
  },
  "vuex": {
    "namespace": "auth"
  },
  "cookie": {
    "prefix": "auth.",
    "options": {
      "path": "/"
    }
  },
  "localStorage": {
    "prefix": "auth."
  },
  "defaultStrategy": "social"
}

  // Create a new Auth instance
  const $auth = new Auth(ctx, options)

  // Register strategies
  // social
  $auth.registerStrategy('social', new Oauth2Scheme($auth, {
  "endpoints": {
    "authorization": "https://accounts.google.com/o/oauth2/auth",
    "userInfo": "https://www.googleapis.com/oauth2/v3/userinfo",
    "logout": "https://example.com/logout"
  },
  "token": {
    "property": "access_token",
    "type": "Bearer",
    "maxAge": 1800
  },
  "refreshToken": {
    "property": "refresh_token",
    "maxAge": 2592000
  },
  "responseType": "code",
  "grantType": "authorization_code",
  "accessType": "offline",
  "redirectUri": "http://localhost:3000/login",
  "logoutRedirectUri": "http://localhost:3000/login",
  "clientId": "82783355399-ifi5bmi1tptg1hmpj9k98gq75rfucat7.apps.googleusercontent.com",
  "scope": [
    "openid",
    "profile",
    "email"
  ],
  "state": "UNIQUE_AND_NON_GUESSABLE",
  "codeChallengeMethod": "",
  "responseMode": "",
  "acrValues": "",
  "name": "social"
}))

  // Inject it to nuxt context as $auth
  inject('auth', $auth)
  ctx.$auth = $auth

  // Initialize auth
  return $auth.init().catch(error => {
    if (process.client) {
      // Don't console log expired auth session errors. This error is common, and expected to happen.
      // The error happens whenever the user does an ssr request (reload/initial navigation) with an expired refresh
      // token. We don't want to log this as an error.
      if (error instanceof ExpiredAuthSessionError) {
        return
      }

      console.error('[ERROR] [AUTH]', error)
    }
  })
}
