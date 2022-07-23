import {EditableCheckbox} from "./components";

export default {
    install: (app, options) => {
        app.component("EditableCheckbox", EditableCheckbox)
    }
}

export {EditableCheckbox};