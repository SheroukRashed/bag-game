<template>
  <div>
    <h3>Trying Scooped</h3>
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

<style >
   li{
    color: rgb(179, 157, 199);
  }
  h3{
    color: greenyellow;
  }
 
</style>
