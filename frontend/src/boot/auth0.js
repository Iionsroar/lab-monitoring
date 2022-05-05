import { boot } from 'quasar/wrappers'
import { createAuth0 } from '@auth0/auth0-vue';
// import { envSetup, envGet } from 'env.json'
// import { env } from 'frontend/env.js'
// import dotenv from 'dotenv'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ( { app } ) => {
  // dotenv.config
  // envSetup()
  app.use(createAuth0({
      domain: process.env.auth0_domain,
      client_id: process.env.auth0_client_id,
      redirect_uri: window.location.origin
  }))
  // console.log(envGet('auth0_client_id'))
  // console.log(process.env) // remove this after you've confirmed it working
  // domain: envGet('AUTH0_DOMAIN')

  // createAuth0({
  //   domain: "dev-y19lra5e.us.auth0.com",
  //   client_id: "PCtxVPQORXBV9voAlemVTGDDLkIurUxw",
  //   redirect_uri: window.location.origin
  // })
})
