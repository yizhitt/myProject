<template>
  <div id="app">
    <Header></Header>
    <router-view />
    <Footer v-show="$route.meta.show"></Footer>

    <!-- <Top></Top>
    <Table></Table> -->
  </div>
</template>

<script>
import Top from './components/Top'
import Table from './components/Table'
import Header from './components/Header/index'
import Footer from './components/Footer/index'
import { areaList } from '@vant/area-data'
export default {
  name: 'App',
  data() {
    return { areaList }
  },
  components: { Top, Table, Header, Footer },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
