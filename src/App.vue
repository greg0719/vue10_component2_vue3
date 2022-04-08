<template>
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <course-intro
    v-for="course in courses"
    :key="course.id"
    :id="course.id"
    :name="course.name"
    :duration="course.duration"
    :current="course.current"
    
  ></course-intro>
</template>

<script>
import CourseIntro from "./components/CourseIntro.vue";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    CourseIntro,
  },
  data() {
    return {
      courses: [
        { id: "poop", name: "python oop", duration: 35, current: true },
        {
          id: "bdpy",
          name: "python and big data",
          duration: 35,
          current: false,
        },
      ],
    };
  },
  created() {
    console.log("created");
    this.emitter.on("toggle-current", (idx) => {
      console.log(`${idx} should change status`);
      const course = this.courses.find((course) => course.id === idx);
      console.log(`before status change : ${course.current}`);
      course.current = !course.current;
      console.log(`after status change : ${course.current}`);
    });
  },
};
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
