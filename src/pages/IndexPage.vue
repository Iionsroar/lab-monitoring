<template>
  <q-page :style="bgImg" class="flex q-pa-lg" style="min-height: 744px;">
    <div class="q-mb-xl q-ml-xl text-blue-grey-8">
      <div class="row text-weight-medium text-uppercase" style="letter-spacing: 10px; font-size: 100px; margin-top: 15%">Welcome</div>

      <div class="row" style="font-size: 22px; letter-spacing: 2px;">
        <div class="col">UE CCSS R&D</div>
        <div class="col-6">Laboratory Monitoring</div>
      </div>

      <div style="position: absolute; left: 5%; bottom: 6%; font-family: 'SourceHanSansCN'; font-size: 18px">Coordinate with your teacher or administrator to get access to the application</div>
    </div>
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
