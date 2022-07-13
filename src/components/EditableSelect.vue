<template>
    <div class="small-form-wrapper">
        <div
            v-show="!state.active"
            class="editable"
            @click="showInput"
        >
            {{ state.editableValue || displayValue }}
        </div>

        <div>
            <select
                v-show="state.active"
                ref="selectDropdown"
                v-model="state.editableValue"
                class="form-control"
                @change="getSelectText"
            >
                <option value="">
                    Choose...
                </option>
                <option
                    v-for="(v,i) in options"
                    :key="options[i]"
                    :value="i"
                >
                    {{ v }}
                </option>
            </select>
        </div>

        <div class="btn-wrapper">
            <button
                v-show="state.active"
                class="btn btn-primary"
                @click="submit"
            >
                &#x2713;
            </button>
            <button
                v-show="state.active"
                class="btn btn-default"
                @click="deactivate"
            >
                &#215;
            </button>
        </div>
        <div v-show="state.active">
            {{ state.errorMsg }}
        </div>
    </div>
</template>

<script setup>

import {onMounted, reactive,ref} from "vue";

const emit = defineEmits(['posted'])

const props = defineProps({
    value:  {type:String, default: ''},
    options: {type: Object, default:null},
    inputName: {type:String,default: 'editable-input'},
    displayValue: {type: String, default:'(not set)'},
    defaultShowInput: {type: Boolean, default: false}
});

const selectDropdown = ref(null)

const state = reactive({
    editableValue: props.value,
    active:false,
    errorMsg: '',
    selectText: null,
});

onMounted(() => {
    if(props.defaultShowInput) { state.active = true; }
    if(selectDropdown.value) {
        valueFromSelect();
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
    if(selectDropdown.value) {
        valueFromSelect();
    } else {
        state.editableValue = props.value;
    }
}

function submit() {
    const form = new FormData();
    form.append(props.inputName,state.editableValue);

    emit('posted',form)
}

function showInput() {
    state.active = true;

    if(selectDropdown.value) {
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
.small-form-wrapper {
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
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
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
