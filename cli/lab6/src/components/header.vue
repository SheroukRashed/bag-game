<template>
    <header>
        <h2 @click="changeTitle">{{title}}</h2>
    </header>
</template>

<script>
import {bus} from '../main';

export default {
  props: {
      title: {
        type: String,
        required: true
      }
    },
  data () {
    return {

    }
  },
  methods: {
      changeTitle: function(){
        // this.$emit('changeTitle', 'Updated Title');
        this.title = 'Updated Title Again';
        bus.$emit('changeTitleAgain', this.title);

      }
    },
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
