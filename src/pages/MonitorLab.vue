<!-- 
  TODO 
    Display if no session for the day
-->
<!-- 
  DESC
  Automatically displays/ indicates specific course for current date/time 
  A timeline of laboratory sessions for the day
-->
<template>
  <q-page :style="bgImg" class="q-px-xl q-py-md">
    <q-timeline color="secondary">

      <q-timeline-entry class="text-blue-grey-9" heading>
        {{ getDate }} <span>&nbsp;</span> {{ this.time }}
      </q-timeline-entry>

      <TimelineEntry 
        v-for="session in sessions"
        :key="session.name"
        v-bind="session"
      />

    </q-timeline>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import TimelineEntry from 'components/TimelineEntry.vue'

const linksList = [
  {
    name: 'Quasar (Test)',
    code: 'CCQ_1101',
    icon: 'insights',
    color: 'primary'
  },
  {
    name: 'VueJS 3 (Test)',
    code: 'CCV_1101',
    icon: 'fullscreen',
    color: 'secondary'
  },
  {
    name: 'Auth0 (Test)',
    code: 'CCA_1101',
    icon: 'fullscreen',
    color: 'accent'
  },
  {
    name: 'Quasar Awesome (Test)',
    code: 'CCQ_1102',
    icon: 'favorite',
    color: 'dark'
  },
  {
    name: 'Github (Test)',
    code: 'CCG_1101',
    icon: 'code',
    color: 'positive'
  },
  {
    name: 'Facebook (Test)',
    code: 'CCF_1101',
    icon: 'public',
    color: 'negative'
  }
]

export default defineComponent({
  name: 'MonitorLab',

  components: {
    TimelineEntry
  },

  data() {
    return {
      user: this.$auth0.user,
      bgImg: { backgroundImage: "url(bg-white.png)" },
      interval: null,
      time: "",
      sessions: linksList
    }
  },

  computed: {
    getDate() {
      let today = new Date();
      let str = today.toDateString().split(" ")
      let dayOfTheWeek = str[0]
      let month = str[1]
      let day = str[2]
      let year = str[3]
      return `${dayOfTheWeek} -  ${month} ${day}, ${year}`;
    }
  },

  beforeUnmount() {
    // prevent memory leak
    clearInterval(this.interval)
  },

  mounted() {
    // update the time every second
    this.interval = setInterval(() => {
      this.time = Intl.DateTimeFormat(navigator.language, {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      }).format()
    }, 1000)
  }

})
</script>