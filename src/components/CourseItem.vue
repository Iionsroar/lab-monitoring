<template>
  <div class="column q-pa-md">
    <q-card class="my-card">
      <q-parallax
        src="https://cdn.quasar.dev/img/parallax1.jpg"
        :height="120"
      />

      <q-card-section>
        <div class="text-h6">{{ name }}</div>
        <div class="text-subtitle2">{{ code }}</div>
      </q-card-section>
    </q-card>
  </div>
</template>

<style lang="sass" scoped>
.my-card
  width: 100%
  min-width: 360px
</style>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CourseItem',
  props: {
    name: {
      type: String,
      required: true
    },

    code: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  }
})
</script>
