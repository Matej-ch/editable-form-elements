import {EditableSelect} from "./components";

export default {
    install: (app, options) => {
        app.component("EditableSelect", EditableSelect)
    }
}

export {EditableSelect};