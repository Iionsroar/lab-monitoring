import { boot } from 'quasar/wrappers'
import { createAuth0 } from '@auth0/auth0-vue';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ( { app } ) => {
  app.use(createAuth0({
      domain: process.env.auth0_domain,
      client_id: process.env.auth0_client_id,
      redirect_uri: window.location.origin
  }))
})
