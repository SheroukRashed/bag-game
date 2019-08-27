<template>
    <div>
        <ul>
            <li v-for="ninja in ninjas" @click="ninja.show = !ninja.show">{{ninja.name}}
                <p v-show="ninja.show">{{ninja.speciality}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
//   props:['ninjas'],
  props:{
      ninjas:{
          type: Array,
          required: true,
      },
  },
  data () {
    return {
         

    }
  }
}
</script>

<style scoped>

</style>
