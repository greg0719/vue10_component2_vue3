<template>
  <course-intro
    v-for="course in courses"
    :key="course.id"
    :id="course.id"
    :name="course.name"
    :duration="course.duration"
    :current="course.current"
    @toggle-current="toggleCurrentStatus"
  ></course-intro>
</template>

<script>
export default {
  name: "App",
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
  methods: {
    toggleCurrentStatus(id) {
      console.log(`should change id:${id}`);
      const couser = this.courses.find((course) => course.id === id);
      console.log(`before change :${couser.current}`);
      couser.current = !couser.current;
      console.log(`after change :${couser.current}`);
    },
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
