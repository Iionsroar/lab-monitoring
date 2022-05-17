<template>
  <div class="fullscreen bg-blue-grey-8 text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh">
        401
      </div>

      <div class="text-h2" style="opacity:.4">
        Coordinate with your teacher or administrator to get access to the application
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue-grey-8"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UserUnverified'
})
</script>
