<!-- TODO -->
<template>
  <q-page :style="bgImg" class="q-pa-md row">
    <CourseItem
      v-for="link in essentialLinks"
      :key="link.name"
      v-bind="link"
    />
  </q-page>
</template>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 500px
</style>

<script>
import { defineComponent, ref } from 'vue'
import CourseItem from 'components/CourseItem.vue'
const linksList = [
  {
    name: 'Quasar (Test)',
    code: 'CCQ_1101',
    icon: 'insights',
    link: 'https://quasar.dev/vue-components/button'
  },
  {
    name: 'VueJS 3 (Test)',
    code: 'CCV_1101',
    icon: 'fullscreen',
    link: 'https://vuejs.org/tutorial/#step-1'
  },
  {
    name: 'Auth0 (Test)',
    code: 'CCA_1101',
    icon: 'fullscreen',
    link: 'https://vuejs.org/tutorial/#step-1'
  },
  {
    name: 'Quasar Awesome (Test)',
    code: 'CCQ_1102',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  },
  {
    name: 'Github (Test)',
    code: 'CCG_1101',
    icon: 'code',
    link: 'https://github.com/Iionsroar/lab-monitoring'
  },
  {
    name: 'Facebook (Test)',
    code: 'CCF_1101',
    icon: 'public',
    link: 'https://www.facebook.com/UECCSSRnDUnit'
  },
  {
    name: 'Quasar (Test)',
    code: 'CCQ_1101',
    icon: 'insights',
    link: 'https://quasar.dev/vue-components/button'
  },
  {
    name: 'VueJS 3 (Test)',
    code: 'CCV_1101',
    icon: 'fullscreen',
    link: 'https://vuejs.org/tutorial/#step-1'
  },
  {
    name: 'Auth0 (Test)',
    code: 'CCA_1101',
    icon: 'fullscreen',
    link: 'https://vuejs.org/tutorial/#step-1'
  },
  {
    name: 'Quasar Awesome (Test)',
    code: 'CCQ_1102',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  },
  {
    name: 'Github (Test)',
    code: 'CCG_1101',
    icon: 'code',
    link: 'https://github.com/Iionsroar/lab-monitoring'
  },
  {
    name: 'Facebook (Test)',
    code: 'CCF_1101',
    icon: 'public',
    link: 'https://www.facebook.com/UECCSSRnDUnit'
  },
]

export default defineComponent({
  name: 'MyCourses',

  components: {
    CourseItem
  },

  data () {
    return {
      user: this.$auth0.user,
      essentialLinks: linksList,
      bgImg: { backgroundImage: "url(bg-white.png)" },
    }
  },
})
</script>