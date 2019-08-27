<template>
    <footer>
        <p>{{copy_rights}}</p>
    </footer>
</template>

<script>
export default {
  data () {
    return {
            copy_rights: 'Copyright 2017 Vue Ninjas'
    }
  }
}
</script>

<style scoped>
footer{
    background: #222;
    padding: 6px;
}
p{
        color: lightgreen;
        text-align: center;
}
</style>
