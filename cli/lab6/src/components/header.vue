<template>
    <header>
        <h2>{{title}}</h2>
    </header>
</template>

<script>
export default {
  data () {
    return {
         title: 'Vue Ninjas',
    }
  }
}
</script>

<style scoped>
header{
    background: lightgreen;
    padding: 10px;
}
h2{
    color: #222;
    text-align: center;
}
</style>
