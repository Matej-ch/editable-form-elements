import {EditableRating} from "./components";

export default {
    install: (app, options) => {
        app.component("EditableRating", EditableRating)
    }
}

export {EditableRating};