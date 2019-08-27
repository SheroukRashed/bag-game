<template>
  <div>
    <ul>
        <li v-for="ninja in ninjas">
            {{ninja}}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ninjas: ["Don","mike","Raf"],
    }
  },
 
}
</script>

<style>

</style>
