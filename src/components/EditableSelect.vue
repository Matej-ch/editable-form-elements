<template>
    <div class="editable-input-wrapper">
        <div
            v-show="!state.active"
            class="editable"
            @click="showInput">
            {{state.editableValue || emptyValue}}
        </div>

        <div v-show="state.active">
            <select
                ref="selectDropdown"
                v-model="state.editableValue"
                class="form-control"
                @change="getSelectText">
                <option value="">
                    Choose...
                </option>
                <option
                    v-for="(v,i) in options"
                    :key="options[i]"
                    :value="i">
                    {{v}}
                </option>
            </select>
        </div>

        <div class="btn-wrapper" v-show="state.active">
            <button
                class="btn btn-primary"
                @click="submit">
                &#x2713;
            </button>
            <button
                class="btn btn-default"
                @click="deactivate">
                &#215;
            </button>
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
    value: {type: String, default: ''},
    options: {type: Object, default: null},
    name: {type: String, default: 'editable-input'},
    emptyValue: {type: String, default: '(not set)'},
    showInput: {type: Boolean, default: false}
});

const selectDropdown = ref(null)
const inputs = ref(null)

const state = reactive({
    editableValue: props.value,
    active: false,
    selectText: null,
});

onMounted(() => {
    if (props.showInput) {
        state.active = true;
    }

    if (props.value.length) {
        state.editableValue = props.options[props.value];
    } else {
        state.editableValue = '';
    }

    if (props.showInput) {
        state.editableValue = props.value;
    }
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
    form.append(props.name, state.editableValue);

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

    if (selectDropdown.value) {
        for (let i = 0; i < selectDropdown.value.options.length; i++) {
            if (selectDropdown.value.options[i].text === state.editableValue) {
                state.editableValue = selectDropdown.value.options[i].value;
                break;
            }
        }
    }
}

</script>

<style scoped>
.editable {
    color: #428bca;
    background: none;
    margin: 0;
    padding: 2px 1px;
    text-decoration: none;
    cursor: pointer;
    border-bottom: 1px dashed;
}

.btn-wrapper {
    display: flex;
    flex-direction: row;
}

.editable-input-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.form-control {
    display: block;
    height: 34px;
    padding: 4px 8px;
    font-size: 1em;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

.btn {
    display: inline-block;
    font-weight: bold;
    margin-bottom: 0;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    padding: 6px 12px;
    font-size: 1em;
    line-height: 1.42857143;
    border-radius: 4px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.btn-default {
    color: #333;
    background-color: #fff;
    border-color: #ccc;
}

.btn-primary {
    color: #fff;
    background-color: #337ab7;
    border-color: #2e6da4;
}

.btn-primary:hover {
    color: #fff;
    background-color: #286090;
    border-color: #204d74;
}

.btn-default:hover {
    color: #333;
    background-color: #e6e6e6;
    border-color: #adadad;
}
</style>
