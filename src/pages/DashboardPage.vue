<template>
  <q-page>
    <q-banner class="text-white bg-blue-grey-5">
      Welcome back {{name}}!
    </q-banner>

    <div>
      <q-splitter
        v-model="splitterModel"
        :limits="[12,12]"
        style="height: 100%"
      >

        <template v-slot:before>
          <q-tabs
            v-model="tab"
            vertical
            class="text-teal"
          >
            <q-tab name="lab-report" icon="assessment" label="Lab Report" />
            <q-tab name="my-courses" icon="history_edu" label="My Courses" />
            <q-tab name="monitor-lab" icon="track_changes" label="Monitor Lab" />
          </q-tabs>
        </template>

        <template v-slot:after>
          <q-tab-panels
            v-model="tab"
            animated
            swipeable
            vertical
            transition-prev="jump-up"
            transition-next="jump-up"
          >
            <q-tab-panel name="lab-report">
              <div class="text-h4 q-mb-md">Lab Report</div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            </q-tab-panel>

            <q-tab-panel name="my-courses">
              <div class="text-h4 q-mb-md">My Courses</div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            </q-tab-panel>

            <q-tab-panel name="monitor-lab">
              <div class="text-h4 q-mb-md">Monitor Lab</div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            </q-tab-panel>
          </q-tab-panels>
        </template>

      </q-splitter>
    </div>
  </q-page>
</template>


<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'DashboardPage',

  data: function () {
    return {
      splitterModel: ref(12), // start q-splitter at 12% 
      tab: ref('lab-report'), // start tab at name=lab-report
      user: this.$auth0.user,
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
