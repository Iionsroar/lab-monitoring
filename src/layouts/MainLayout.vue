<template>
  <q-layout view="lHh lpR fFf">
    <q-header elevated height-hint="98">
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
          <q-avatar color="white">
            <img :src="user.picture" alt="Profile Picture">
            <!-- <p class="hidden">{{ userNameInitial }}</p> NOTE for testing purposes --> -->
          </q-avatar>
          <!-- <q-avatar color="white" text-color="blue-grey-9">{{ userNameInitial }}</q-avatar> -->
          <q-btn flat color="white" @click="logout" label="Log out"/>
        </template>
        <q-btn v-else flat color="white" @click="login" label="Log in"/>

      </q-toolbar>

      <q-tabs 
        inline-label 
        v-model="tab"
        v-if="user"
        class="bg-blue-grey-9" 
        align="left"
      >
        <q-route-tab to="/dashboard" name="lab-report" icon="assessment" label="Lab Report" />
        <q-route-tab to="/my-courses" name="my-courses" icon="history_edu" label="My Courses" />
        <q-route-tab to="/monitor-lab" name="monitor-lab" icon="track_changes" label="Monitor Lab" />
      </q-tabs>
      <p class="hidden" v-else>{{ userNameInitial }}</p>
    </q-header>

    <q-drawer
      class="bg-blue-grey-1"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Development
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

    <q-footer v-if="user">
      <q-banner v-if="!user.email_verified" dense inline-actions class="text-dark bg-blue-grey-2">
        You still haven't verified your email.
        <template v-slot:action>
          <q-btn flat @click="verify" label="Verify Email" />
        </template>
      </q-banner>
    </q-footer>
  </q-layout>
</template>

<script>
import { computed, defineComponent, ref } from 'vue'
import { useRoute } from 'vue-router'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  // REFERENCE LINKS (NOTE COMMENT IN PRODUCTION)
  {
    title: 'Quasar',
    caption: 'quasar.dev',
    icon: 'insights',
    link: 'https://quasar.dev/vue-components/button'
  },
  {
    title: 'Quasar Colors',
    caption: 'quasar.color',
    icon: 'insights',
    link: 'https://quasar.dev/style/color-palette'
  },
  {
    title: 'VueJS 3',
    caption: 'vuejs3.dev',
    icon: 'fullscreen',
    link: 'https://vuejs.org/tutorial/#step-1'
  },
  {
    title: 'Auth0',
    caption: 'auth.dev',
    icon: 'fullscreen',
    link: 'https://vuejs.org/tutorial/#step-1'
  },
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

  data() {
    return {
      user: this.$auth0.user,
      tab: ref('lab-report'), // start tab at name=lab-report
    }
  },

  computed: {
    userNameInitial() {
      if (this.user) {
        return this.user.email.charAt(0).toUpperCase()
      }
      this.goToIndex()
      return ""
    }
  },

  methods: {
    goToIndex() {
      const route = useRoute()
      const path = computed(() => route.path)

      if (!this.user) {
        this.$router.push('/')
      } else if (route.path == '/') {
        this.$router.push('/dashboard')
      } else {
        this.$router.push(path)
      }
    },
    login () {
      this.$auth0.loginWithRedirect();
    },
    logout () {
      this.$auth0.logout({ returnTo: window.location.origin })
    },
    verify () {
      window.open("https://mail.google.com/", "_blank")
    },
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
  },

  updated() {
    this.goToIndex()
  },

  mounted() {
    this.goToIndex()
  },
})
</script>
