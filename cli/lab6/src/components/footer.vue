<template>
    <footer>
        <p>{{title}}</p>
        <p>{{copy_rights}}</p>
    </footer>
</template>

<script>
import {bus} from "../main";

export default {
   props: {
      title: {
        type: String,
        required: true
      }
    },
  data () {
    return {
            copy_rights: 'Copyright 2017 Vue Ninjas'
    }
  },
   created(){
        bus.$on('changeTitleAgain', (data) => {
            this.title = data;
        });
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
