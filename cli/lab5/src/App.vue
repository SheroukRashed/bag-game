<template>
  <div>
    <h3>{{title}}</h3>
    <h4>{{greeting()}}</h4>
    <NinjaList></NinjaList>
    <NinjaListTwo></NinjaListTwo>

  </div>
</template>

<script>
import Cone from './Cone.vue'

export default {
  components: {
    NinjaListTwo: Cone,
  },

  data () {
    return {
      title: "Vue From CLI",
    }
  },

  methods: {
    greeting: function(){
      return "Welcome";
    },
  },
}
</script>

<style>

</style>
