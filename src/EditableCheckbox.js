import {EditableCheckboxPlugin} from "./components";

export default {
    install: (app, options) => {
        app.component("EditableCheckbox", EditableCheckboxPlugin)
    }
}

export {EditableCheckboxPlugin};