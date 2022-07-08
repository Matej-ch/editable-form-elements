import {App} from "vue";
import {EditableInput} from "./components";

export default {
    install: (app,options) => {
        app.component("EditableInput",EditableInput)
    }
}

export {EditableInput};