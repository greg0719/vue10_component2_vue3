<template>
  <li>
    <h2>props current-{{ current }}</h2>
    <h2>{{ id }}-{{ isCurrent }}</h2>
    <button @click="toggleCurrent">is current</button>
    <button @click="toggleCourseDetail">Show detail</button>
    <ul v-if="detailsVisible">
      <li>{{ name }}</li>
      <li>{{ duration }}</li>
    </ul>
  </li>
</template>
<script>
export default {
  //props: { id: String, name: String, duration: Number, current: Boolean },
  props: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    duration: { type: Number, required: true, validator: function(value) {
      return value > 7;
    } },
    current: { type: Boolean, required: false, default: false },
  },
  data() {
    return {
      isCurrent: this.current,
      detailsVisible: true,
    };
  },
  methods: {
    toggleCourseDetail() {
      this.detailsVisible = !this.detailsVisible;
    },
    toggleCurrent() {
      this.isCurrent = !this.isCurrent;
      
      this.$emit('toggle-current', this.id);
    },
  },
};
</script>
<style>
#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 4px 8px rgba(0, 0, 128, 0.26);
  margin: 1rem auto;
  border-radius: 5px;
  text-align: center;
  width: 50%;
  max-width: 40rem;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px sold #ff0077;
  background-color: #c0ffee;
  color: black;
}
</style>