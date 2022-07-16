<template>
    <div class="editable-input-wrapper">
        <div
            v-show="!state.active"
            class="editable"
            @click="showInput">
            <span>
                {{state.editableValue}}
            </span>
        </div>

        <div v-show="state.active" style="display: flex">
            <input
                ref="editableInput"
                v-model="state.editableValue"
                type="checkbox"
                class="form-control"
                @click="submit">

            <div class="btn-wrapper" v-show="state.active">
                <span
                    style="padding: 5px;cursor: pointer"
                    @click="deactivate">
                    &#215;
                </span>
            </div>
        </div>

        <div ref="inputs">
            <slot name="inputs"></slot>
        </div>
    </div>
</template>

<script setup>
import {onMounted, reactive, ref} from "vue";

const emit = defineEmits(['posted', 'deactivated'])

const props = defineProps({
    value: {type: Boolean, default: false},
    options: {type: Object, default: {1: 'Yes', 0: 'No'}},
    inputName: {type: String, default: 'editable-input'},
    defaultShowInput: {type: Boolean, default: false},
});

const inputs = ref(null)

const state = reactive({
    editableValue: props.value,
    active: false,
    selectText: null,
});

onMounted(() => {
    if (props.defaultShowInput) {
        state.active = true;
    }

    state.editableValue = props.options[+props.value];
})


function deactivate() {
    state.active = false;
    emit('deactivated');
}

function submit() {
    const form = new FormData();
    form.append(props.inputName, state.editableValue);

    console.log(props.inputName, state.editableValue);
    const inputEls = inputs.value.querySelectorAll('input');
    if (inputEls) {
        inputEls.forEach(input => {
            form.append(input.name, input.value);
        })
    }

    emit('posted', form)
    state.active = false;
}

function showInput() {
    state.active = true;

    state.editableValue = props.value;
}
</script>

<style scoped>
.editable span {
    margin: 0;
    text-decoration: none;
    cursor: pointer;
    border-bottom: 1px dashed;

    color: white;
    padding: 2px 5px;
    font-weight: bold;
    border-radius: 2px;
    background-color: #28a745;
}

</style>