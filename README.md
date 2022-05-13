# lab-monitoring

![process](public/process.png)



## Auth0

1. Create a [Vue Login App](https://auth0.com/docs/quickstart/spa/vuejs) via Auth0 website to manage logins of the frontend
2. Follow quickstart instructions for [**configuring**](https://auth0.com/docs/quickstart/spa/vuejs#configure-auth0) your Auth0 App
3. Get domain and client_id of your Auth0 app and store to .env (see .env.example inside the frontend directory)



### Auth0 Config

1. Rules

   1. Add access control

      - `Check if user email domain matches configured domain` (@ue.edu.ph)
      -  `Set roles to a user`

   2. Enrich profile

      - `Add user roles from a SQL Server database`

      - `Default picture for null avatars`

      - `Enrich profile with the locations where the user logs in`

   3. Webhook

      - `Track Logins in MixPanel` or `Track Logins and signups with Splunk HEC`



## Frontend

Install dependencies
```sh
npm install
```

Start the app in development mode (hot-code reloading, error reporting, etc.)
```sh
quasar dev
```

Lint with [ESLint](https://eslint.org/)
```sh
npm run lint
```

Format the files

```sh
npm run format
```

Build the app for production

```sh
quasar build
```

Customize the configuration, see [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).



## Modules

- Login

  - Admin/ Instructor Login

  - Student Access

- Dashboard

  - Admin
    - check [auth0 rules](https://manage.auth0.com/dashboard/us/dev-y19lra5e/rules)
  - Instructor
  - Student



## Docs

### Auth0

- [User Profile Structure](https://auth0.com/docs/manage-users/user-accounts/user-profiles/user-profile-structure)

#### Vue JS 3

- [Quickstart](https://vuejs.org/guide/quick-start.html#with-build-tools)
- [Hands-on tutorial](https://vuejs.org/tutorial/#step-1)
- [Examples](https://vuejs.org/examples/#handling-input)
- [Vue Awesome](https://github.com/vuejs/awesome-vue)

#### Quasar v2
- [Configuring Quasar App](https://quasar.dev/quasar-cli-webpack/quasar-config-js)
- [Quasar App Flow](https://quasar.dev/quasar-cli-webpack/boot-files#quasar-app-flow)
- [Boot Files](https://quasar.dev/quasar-cli-webpack/boot-files#usage-of-boot-files)
- [Quasar Awesome](https://github.com/quasarframework/quasar-awesome)

