<template>
    <div class="editable-input-wrapper">

        <div
            v-show="!state.active"
            class="editable"
            @click="showInput"
        >
            {{state.editableValue || displayValue}}
        </div>

        <div>
            <textarea v-model="state.editableValue" class="form-control" v-show="state.active" ref="editableInput">

            </textarea>
        </div>

        <div ref="inputs">
            <slot name="inputs"></slot>
        </div>
    </div>

</template>

<script setup>
import {onMounted, reactive, ref, nextTick} from "vue";

const emit = defineEmits(['posted'])

const props = defineProps({
    value: {type: String, default: ''},
    inputName: {type: String, default: 'editable-input'},
    displayValue: {type: String, default: '(not set)'},
    defaultShowInput: {type: Boolean, default: false}
});

const editableInput = ref(null)
const inputs = ref(null)
const state = reactive({
    editableValue: props.value,
    active: false,
    errorMsg: '',
    selectText: null,
});

onMounted(() => {
    if (props.defaultShowInput) {
        state.active = true;
    }
})

function showInput() {
    state.active = true;

    nextTick(() => {
        if (editableInput.value) {
            editableInput.value.select();
        }
    })
}

</script>