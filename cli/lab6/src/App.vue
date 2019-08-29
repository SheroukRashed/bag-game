<template>
  <div id="app">
    <myheader v-bind:title="title" v-on:changeTitle="updateTitle($event)"></myheader>
    <myninjas v-bind:ninjas="ninjas"></myninjas>

    <myfooter v-bind:title="title"></myfooter>
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
          ninjas: [
                {name: 'Ryu', speciality: 'Vue Components', show: false},
                {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
                {name: 'Hitoshi', speciality: 'Click Events', show: false},
                {name: 'Tango', speciality: 'Conditionals', show: false},
                {name: 'Kami', speciality: 'Webpack', show: false},
                {name: 'Yoshi', speciality: 'Data Diggin', show: false}
            ],
          title: 'Original Title'
    }
  },
  methods: {
    updateTitle: function(updatedTitle){
      this.title = updatedTitle;
    },
  }
}
</script>

<style>
  #ninjas{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
</style>
