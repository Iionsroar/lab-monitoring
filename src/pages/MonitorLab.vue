<!-- TODO -->
<!-- Automatically displays/ indicates specific course for current date/time -->
<template>
  <!-- TEST ONLEE -->
  <q-page :style="bgImg" class="flex flex-center q-pa-md">
    <q-btn
      size="35px"
      round
      color="blue-grey-9"
      >
      <q-avatar>
        <img :src="user.picture">
      </q-avatar>
    </q-btn>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MonitorLab',

  data: function () {
    return {
      user: this.$auth0.user,
      bgImg: { backgroundImage: "url(bg-white.png)" }
    }
  },

})
</script>