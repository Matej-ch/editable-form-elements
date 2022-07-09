import { createApp } from 'vue';
import App from './App.vue';
import EditablePlugin from "./EditablePlugin";

const app = createApp(App);

app.use(EditablePlugin);

app.mount('#app')