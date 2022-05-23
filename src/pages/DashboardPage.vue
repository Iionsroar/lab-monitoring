<!-- TODO -->
<template>
  <q-page :style="bgImg">
    <div class="q-pa-lg">
      <q-card class="my-card">
        <q-card-section>
          <div class="text-h6">Lab Session #1: Template (Test)</div>
          <div class="text-subtitle2">by {{user.name}}</div>
        </q-card-section>

        <q-markup-table>
          <thead>
            <tr>
              <th class="text-left">Dessert (100g serving)</th>
              <th class="text-right">Calories</th>
              <th class="text-right">Fat (g)</th>
              <th class="text-right">Carbs (g)</th>
              <th class="text-right">Protein (g)</th>
              <th class="text-right">Sodium (mg)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-left">Frozen Yogurt</td>
              <td class="text-right">159</td>
              <td class="text-right">6</td>
              <td class="text-right">24</td>
              <td class="text-right">4</td>
              <td class="text-right">87</td>
            </tr>
            <tr>
              <td class="text-left">Ice cream sandwich</td>
              <td class="text-right">237</td>
              <td class="text-right">9</td>
              <td class="text-right">37</td>
              <td class="text-right">4.3</td>
              <td class="text-right">129</td>
            </tr>
            <tr>
              <td class="text-left">Eclair</td>
              <td class="text-right">262</td>
              <td class="text-right">16</td>
              <td class="text-right">23</td>
              <td class="text-right">6</td>
              <td class="text-right">337</td>
            </tr>
            <tr>
              <td class="text-left">Cupcake</td>
              <td class="text-right">305</td>
              <td class="text-right">3.7</td>
              <td class="text-right">67</td>
              <td class="text-right">4.3</td>
              <td class="text-right">413</td>
            </tr>
            <tr>
              <td class="text-left">Gingerbread</td>
              <td class="text-right">356</td>
              <td class="text-right">16</td>
              <td class="text-right">49</td>
              <td class="text-right">3.9</td>
              <td class="text-right">327</td>
            </tr>
          </tbody>
        </q-markup-table>
      </q-card>
    </div>
  </q-page>
</template>

<style lang="sass" scoped>
.my-card
  width: 100%
  min-width: 350px
</style>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DashboardPage',

  data () {
    return {
      user: this.$auth0.user,
      bgImg: { backgroundImage: "url(bg-white.png)" },
    }
  },

  computed: {
    // name: function () {
    //   // compute only when this.user.email becomes accessible
    //   // produces errors otherwise
    //   if (this.user.email) {
    //     return this.user.email.split("@")[0].toUpperCase().replace(".", " ")
    //   }
    //   return ""
    // }
  }

})
</script>