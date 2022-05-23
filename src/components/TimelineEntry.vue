<template>
  <q-timeline-entry
    :title="name"
    :subtitle="schedule"
    :color="color"
    :icon="icon"
  >
    <div>
      {{ sessionDescription }}
    </div>
  </q-timeline-entry>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TimelineEntry',
  // NOTE update required props when using actual values
  props: {
    name: {
      type: String,
      required: true
    },

    code: {
      type: String,
      default: ''
    },

    // NOTE might require different type
    // TODO add validator, must follow default format bcs it will be computed
    schedule: {
      type: String,
      default: '7:30 AM - 8:30 AM',
      // required: true
    },

    color: {
      type: String,
      default: 'blue-grey-7'
    },

    icon: {
      type: String,
      default: ''
    },

    sessionDescription: {
      type: String,
      default: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      // required: true
    }
  }
})
</script>
