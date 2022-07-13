import {EditableInput} from "./components";
import {EditableTextarea} from "./components";
import {EditableSelect} from "./components";
import {EditableCheckbox} from "./components";

export default {
    install: (app,options) => {
        app.component("EditableInput",EditableInput)
        app.component("EditableTextarea",EditableTextarea)
        app.component("EditableSelect",EditableSelect)
        app.component("EditableCheckbox",EditableCheckbox)
    }
}

export {EditableInput, EditableTextarea,EditableSelect,EditableCheckbox };