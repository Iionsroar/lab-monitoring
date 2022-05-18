<template>
  <!-- <q-page class="flex flex-center"> -->
  <q-page :style="bgImg" class="flex flex-center">
    <p class="text-h2">
      Welcome<span v-if="user">,<br>{{name}}!</span>
      <span v-else>!</span>
    </p>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',

  data: function () {
    return {
      user: this.$auth0.user,
      bgImg: { backgroundImage: "url(bg-white.png)" },
    }
  },

  computed: {
    name: function () {
      if (this.user.email) {
        return this.user.email.split("@")[0].toUpperCase().replace(".", " ")
      }
      return ""
    }
  }

})
</script>
