<template>
    <div class="editable-input-wrapper">
        <div
            v-show="!state.active"
            class="editable"
            @click="showInput">
            <span :class="value ? 'success' : 'danger'">
                {{state.editableValue}}
            </span>
        </div>

        <div v-show="state.active" style="display: flex">

            <label class="toggle__button sm" :class="{'active': value }">

                <span v-if="value" class="toggle__label">{{options[1]}}</span>

                <span v-if="!value" class="toggle__label">{{options[0]}}</span>

                <input
                    ref="editableInput"
                    v-model="value"
                    type="checkbox"
                    @click="submit"
                >
                <span class="toggle__switch sm" :class="{'bg-off': !value, 'bg-on': value}"/>
            </label>

            <span
                v-show="state.active"
                style="cursor: pointer;margin-left: 5px"
                @click="deactivate">
                &#215;
            </span>
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

    const inputEls = inputs.value.querySelectorAll('input');
    if (inputEls) {
        inputEls.forEach(input => {
            form.append(input.name, input.value);
        })
    }

    emit('posted', form)
    state.editableValue = props.options[+!props.value];
    setTimeout(() => state.active = false, 1000);
}

function showInput() {
    state.active = true;

    state.editableValue = props.value;
}
</script>

<style scoped lang="scss">
.editable span {
    margin: 0;
    text-decoration: none;
    cursor: pointer;
    border-bottom: 1px dashed;
    color: white;
    padding: 2px 5px;
    font-weight: bold;
    border-radius: 2px;
}

.editable span.success {
    background-color: #28a745;
}

.editable span.danger {
    background-color: #dc3545;
}

.bg-on {
    background: #adedcb;
    box-shadow: inset 0 0 1px #bcf0d4;
}

.bg-off {
    background: #8c8c8c;
    box-shadow: inset 0 0 1px #949494;
}

.pointer-events-none {
    pointer-events: none;
}

label {
    &.lg {
        margin-bottom: 10px;
        margin-top: 10px;
    }

    &.sm {
        margin-bottom: 5px;
    }
}

.active {
    .toggle__switch {


        &::after, &::before {
            transform: translateX(40px - 18px);
        }

        &.lg::after {
            left: 26px;
        }

        &.sm::after {
            left: 6px;
        }

        &::after {
            background: #53B883;
            box-shadow: 0 0 1px #53B883;
        }
    }
}

.toggle {
    &__button {
        vertical-align: middle;
        user-select: none;
        cursor: pointer;

        input[type="checkbox"] {
            opacity: 0;
            position: absolute;
            width: 1px;
            height: 1px;
        }
    }

    &__switch {
        display: inline-block;
        position: relative;
        margin-left: 10px;
        margin-right: 10px;
        transition: all .25s;

        &.sm {
            height: 12px;
            border-radius: 6px;
            width: 40px;
        }

        &.lg {
            height: 24px;
            border-radius: 12px;
            width: 80px;
        }

        &::after {
            background: #4D4D4D;
            box-shadow: 0 0 1px #666;
        }

        &::before {
            background: #4D4D4D;
            box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
            opacity: 0;
        }

        &.lg::after, &.lg::before {
            height: 36px;
            width: 36px;
            top: -6px;
        }

        &.sm::after, &.sm::before {
            height: 18px;
            width: 18px;
            top: -3px;
        }

        &::after, &::before {
            content: "";
            position: absolute;
            display: block;
            border-radius: 50%;
            left: 0;
            transform: translateX(0);
            transition: all .25s cubic-bezier(.5, -.6, .5, 1.6);
        }
    }
}

</style>