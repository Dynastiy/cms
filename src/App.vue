<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>

import Header from './components/nav/header'

export default {
  name: 'app',
  components: {
    Header
  },
  data () {
    return {
      
    }
  }
}
</script>

<style>

</style>
