import { createApp } from 'vue'
import App from './App.vue'
import CourseIntro from './components/CourseIntro.vue'
import mitt from 'mitt'

const app = createApp(App);
const emitter = mitt();
app.component("course-intro", CourseIntro)
app.config.globalProperties.emitter = emitter;
app.mount('#app');
