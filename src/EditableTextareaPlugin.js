import {EditableTextarea} from "./components";

export default {
    install: (app, options) => {
        app.component("EditableTextarea", EditableTextarea)
    }
}

export {EditableTextarea};