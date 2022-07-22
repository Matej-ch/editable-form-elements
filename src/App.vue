<template>
    <div id="app">

        <div class="grid">
            <editable-input
                value="editable value"
                name="price"
                type="number"
            />

            <editable-input
                :show-input=true
                value="editable value"
                name="price"
            />

            <editable-input
                value=""
                name="price"
                empty-value="Empty value"
            />

            <editable-input
                value="Also hidden inputs here"
                name="price">
                <template #inputs>
                    <input type="hidden" value="hello">
                </template>
            </editable-input>
        </div>

        <div class="grid">
            <editable-select
                value="SK"
                :show-input=false
                :options="{SK:'Slovakia',CZ:'Czech republic',PL:'Poland'}"
                name="price"
            />

            <editable-select
                value="SK"
                :show-input=true
                :options="{SK:'Slovakia',CZ:'Czech republic',PL:'Poland'}"
                name="price"
            />

            <editable-select
                value=""
                :options="{SK:'Slovakia',CZ:'Czech republic',PL:'Poland'}"
                name="price"
            />

            <editable-select
                value=""
                :options="{SK:'Slovakia',CZ:'Czech republic',PL:'Poland'}"
                name="price"
            >
                <template #inputs>
                    <input type="hidden" value="hello">
                </template>

            </editable-select>

        </div>

        <div class="grid">
            <editable-textarea value="This is text in textarea" name="text-input"/>

            <editable-textarea value="This is text in textarea 2"
                               name="text-input"
                               :show-input="true"
                               :maxLength=256
            />

            <editable-textarea value="" name="text-input"/>
        </div>

        <div class="grid">
            <editable-checkbox :value=false>
                <template #inputs>
                    <input type="hidden" value="hello">
                </template>
            </editable-checkbox>

            <editable-checkbox :value=true :show-input=false>
            </editable-checkbox>

        </div>

    </div>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin: 60px auto;
    flex-flow: wrap;
}

.grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(4, 1fr);
    margin: 2rem 2rem;
    width: 100%
}

</style>
<script>
import EditableCheckbox from "./components/EditableCheckbox.vue";

export default {
    components: {EditableCheckbox}
}
</script>