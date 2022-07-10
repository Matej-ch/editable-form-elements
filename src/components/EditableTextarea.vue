<template>
    <div class="small-form-wrapper">
        <div v-show="!state.active" class="editable" @click="showInput">
            <slot></slot>
        </div>

        <div v-if="!state.active">
            <textarea>
                {{state.editableValue}}
            </textarea>
        </div>

    </div>

</template>

<script setup>
import {onMounted, reactive,ref,nextTick} from "vue";

const emit = defineEmits(['posted'])

const props = defineProps({
    value:  {type:String, default: ''},
    inputName: {type:String,default: 'editable-input'},
    inputs: {type:Object,default: null},
    displayValue: {type: String, default:'(not set)'},
    defaultShowInput: {type: Boolean, default: false}
});

const editableInput = ref(null)

const state = reactive({
    editableValue: props.value,
    active:false,
    errorMsg: '',
    selectText: null,
});

function showInput() {
    state.active = true;

    nextTick(() => {
        if(editableInput.value) {
            editableInput.value.select();
        }
    })
}

</script>