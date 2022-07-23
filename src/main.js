import {createApp} from 'vue';
import App from './App.vue';
import EditableInputPlugin from "./EditableInputPlugin";
import EditableCheckboxPlugin from "./EditableCheckboxPlugin";
import EditableRatingPlugin from "./EditableRatingPlugin.js";
import EditableSelectPlugin from "./EditableSelectPlugin.js";
import EditableTextareaPlugin from "./EditableTextareaPlugin.js";

const app = createApp(App);

app.use(EditableCheckboxPlugin);
app.use(EditableInputPlugin);
app.use(EditableRatingPlugin);
app.use(EditableSelectPlugin);
app.use(EditableTextareaPlugin);

app.mount('#app')