<template>
    <div class='small-form-wrapper'>
        <div @click="showInput" v-show="!active" class="editable">{{editableValue || displayValue}}</div>
        <input type="text" v-model="editableValue" v-show="active" class="form-control" ref="editableInput">
        <div class="btn-wrapper">
            <button v-show="active" class="btn btn-primary" @click="submit">
                <b-icon-check></b-icon-check>
            </button>
            <button v-show="active" class="btn btn-default" @click="deactivate">
                <b-icon-x></b-icon-x>
            </button>
        </div>
        <div v-show="active">{{errorMsg}}</div>
    </div>
</template>

<script>
export default {
  name: 'EditableInput',
    props: {
        value: String,
        url: String,
        inputName: String,
        inputs: Object,
        displayValue: {type: String, default:'(not set)'},
        defaultShowInput: {type: Boolean, default: false}
    },
    data() {
        return {
            editableValue: this.value,
            active:false,
            errorMsg: ''
        }
    },
    mounted: function () {
        if(this.defaultShowInput) { this.active = true; }
    },
    methods: {
        showInput: function () {
            this.active = true;
            this.$nextTick(() => {
                this.$refs.editableInput.select();
            })
        },
        deactivate: function () {
            this.active = false;
            this.editableValue = this.value;
        },
        submit: function () {
            const form = new FormData();
            form.append(this.inputName,this.editableValue);

            let inputs = this.inputs;
            Object.keys(inputs).forEach(function (index) {
                form.append(index,inputs[index]);
            });

            this.$http.post(this.url,form)
                .then(response => {
                    if(response.data.success === false) {
                        this.$data.errorMsg = response.data.message;
                    } else {
                        this.active = false;
                    }
                });
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
        margin-bottom: 0;
        font-weight: normal;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        -ms-touch-action: manipulation;
        touch-action: manipulation;
        cursor: pointer;
        background-image: none;
        border: 1px solid transparent;
        padding: 6px 12px;
        font-size: 14px;
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
