<template>
  <new-course @add-course="addCourse"></new-course>
  <course-intro
    v-for="course in courses"
    :key="course.id"
    :id="course.id"
    :name="course.name"
    :duration="course.duration"
    :current="course.current"
    @toggle-current="toggleCurrentStatus"
    @delete-current="delCourse"
  ></course-intro>
</template>

<script>
import NewCourse from "./components/NewCourse.vue";
export default {
  components: { NewCourse },
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
    addCourse(id, name, duration) {
      console.log("ready to add a new course");
      const newCourse = {
        id: id,
        name: name,
        duration: parseInt(duration),
        current: false,
      };
      this.courses.push(newCourse);
    },
    delCourse(id) {
      console.log(`should delete id:${id}`);
      console.log("before del courses length : " + this.courses.length);
      this.courses = this.courses.filter((course) => {
        return course.id !== id;
      });
      console.log("after del courses length : " + this.courses.length);
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

#app li,
#app form {
  box-shadow: 0 4px 8px rgba(0, 0, 128, 0.26);
  margin: 1rem auto;
  border-radius: 5px;
  text-align: center;
  width: 50%;
  max-width: 40rem;
}
</style>
