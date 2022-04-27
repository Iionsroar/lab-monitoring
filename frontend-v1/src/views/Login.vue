<!-- 
DOING
https://vuejs.org/tutorial/#step-2
https://quasar.dev/quasar-cli/installation CONTINUE @ `quasar create`
 -->

<template>
  <el-card :header-style="{background: '#409EFF'}">

    <template #header>
      <div>
        <span>Lab Monitoring Dashboard</span>
      </div>
    </template>

    <el-form :model="form">
      <el-form-item label="Username">
        <el-input v-model="form.username" />
      </el-form-item>
      <el-form-item label="Password">
        <el-input v-model="form.password" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" id="loginButton">Log In</el-button>
      </el-form-item>
    </el-form>

  </el-card>
</template>

<script lang="ts" setup>
import {reactive} from 'vue'

const form = reactive({
  username: '',
  password: '',
})

const onSubmit = () => {
  console.log('logged in!')
}
  
</script>

<style>
  #loginButton {
    margin-left:  auto;
  }
</style>