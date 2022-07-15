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

        <div v-show="state.active">
            <input
                ref="editableInput"
                v-model="state.editableValue"
                type="checkbox"
                class="form-control"
                @keyup.enter="submit">
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

const selectDropdown = ref(null)
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

function valueFromSelect() {
    let optionsCollection = Array.from(selectDropdown.value.options);
    let selectedOption = optionsCollection.find(option => {
        return option.value === props.value;
    });
    state.editableValue = selectedOption.text;
}

function getSelectText() {
    state.selectText = selectDropdown.value.options[selectDropdown.value.selectedIndex].text;
}

function deactivate() {
    state.active = false;
    valueFromSelect();
    emit('deactivated');
}

function submit() {
    const form = new FormData();
    form.append(props.inputName, state.editableValue);

    const inputEls = inputs.value.querySelectorAll('input');
    if (inputEls) {
        inputEls.forEach(input => {
            form.append(input.name, input.value);
        })
    }

    emit('posted', form)
    state.editableValue = props.options[selectDropdown.value.value];
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