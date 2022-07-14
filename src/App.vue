<template>
    <div id="app">

        <div style="display: grid;gap: 1rem;grid-template-columns: repeat(4,1fr);margin: 2rem 2rem;width: 100%">
            <editable-input
                value="editable value"
                input-name="price"
            />

            <editable-input
                :default-show-input=true
                value="editable value"
                input-name="price"
            />

            <editable-input
                value=""
                input-name="price"
            />

            <editable-input
                value="Also hidden inputs here"
                input-name="price">
                <template #inputs>
                    <input type="hidden" value="hello">
                </template>
            </editable-input>
        </div>

        <div style="display: grid;gap: 1rem;grid-template-columns: repeat(4,1fr);margin: 2rem  2rem;width: 100%">
            <editable-select
                value="SK"
                :default-show-input=false
                :options="{SK:'Slovakia',CZ:'Czech republic',PL:'Poland'}"
                input-name="price"
            />

            <editable-select
                value="SK"
                :default-show-input=true
                :options="{SK:'Slovakia',CZ:'Czech republic',PL:'Poland'}"
                input-name="price"
            />

            <editable-select
                value=""
                :options="{SK:'Slovakia',CZ:'Czech republic',PL:'Poland'}"
                input-name="price"
            />

            <editable-select
                value=""
                :options="{SK:'Slovakia',CZ:'Czech republic',PL:'Poland'}"
                input-name="price"
            >
                <template #inputs>
                    <input type="hidden" value="hello">
                </template>

            </editable-select>

        </div>

        <div style="display: grid;gap: 1rem;grid-template-columns: repeat(4,1fr);margin: 2rem  2rem;width: 100%">
            <editable-textarea value="This is text in textarea" input-name="text-input"/>

            <editable-textarea value="This is text in textarea 2"
                               input-name="text-input"
                               :default-show-input="true"
                               :maxLength=256
            />

            <editable-textarea value="" input-name="text-input"/>
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

.w-full {
    width: 100%;
    padding: 30px;
    margin: 15px;
}
</style>
<script>

</script>