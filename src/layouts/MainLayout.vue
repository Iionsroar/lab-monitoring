<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-blue-grey-9 q-py-sm">
        <q-btn
          flat
          dense
          round
          icon="menu"
          class="q-mr-sm"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-avatar>
          <img src="icons/rnd-favicon-2-128x123.png">
        </q-avatar>

        <q-toolbar-title>
          Lab Monitoring
        </q-toolbar-title>

        <template v-if="user">
          <q-avatar color="white" text-color="blue-grey-9">{{ userNameInitial }}</q-avatar>
          <q-btn flat color="white" @click="logout" label="Log out"/>
        </template>
        <q-btn v-else flat color="white" @click="login" label="Log in"/>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  // REFERENCE LINKS (NOTE COMMENT IN PRODUCTION)
  {
    title: 'Quasar',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev/vue-components/button'
  },
  // {
  //   title: 'Discord Chat Channel',
  //   caption: 'chat.quasar.dev',
  //   icon: 'chat',
  //   link: 'https://chat.quasar.dev'
  // },
  // {
  //   title: 'Forum',
  //   caption: 'forum.quasar.dev',
  //   icon: 'record_voice_over',
  //   link: 'https://forum.quasar.dev'
  // },
  // {
  //   title: 'Twitter',
  //   caption: '@quasarframework',
  //   icon: 'rss_feed',
  //   link: 'https://twitter.quasar.dev'
  // },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/lab-monitoring',
    icon: 'code',
    link: 'https://github.com/Iionsroar/lab-monitoring'
  },
  {
    title: 'Facebook',
    caption: '@UECCSSRnDUnit',
    icon: 'public',
    link: 'https://www.facebook.com/UECCSSRnDUnit'
  },
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data: function () {
    return {
      user: this.$auth0.user
    }
  },

  computed: {
    userNameInitial() {
      if (this.user.email) {
        return this.user.email.charAt(0).toUpperCase()
      }
      return ""
    }
  },

  methods: {
    login () {
      this.$auth0.loginWithRedirect();
    },
    logout () {
      this.$auth0.logout({ returnTo: window.location.origin })
    }
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
