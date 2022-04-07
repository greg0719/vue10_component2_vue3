<template>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <course-intro id="poop" name="python oop" duration=35 current="true"></course-intro>
  <course-intro id="bdpy" name="python and big data" duration=35 current="false"></course-intro>
</template>

<script>
import CourseIntro from './components/CourseIntro.vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    CourseIntro
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
