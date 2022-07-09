import { createApp } from 'vue';
import App from './App.vue';
import EditableInputPlugin from "./EditableInputPlugin";

const app = createApp(App);

app.use(EditableInputPlugin);

app.mount('#app')