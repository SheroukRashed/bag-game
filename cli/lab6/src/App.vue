<template>
  <div id="app">
    <myheader></myheader>
    <myninjas></myninjas>

    <myfooter></myfooter>
  </div>
</template>

<script>
import header from './components/header';
import footer from './components/footer';
import ninjas from './components/ninjas';

export default {
  components:{
    myheader: header,
    myfooter: footer,
    myninjas: ninjas,

  },
  data () {
    return {
    }
  }
}
</script>

<style>

</style>
