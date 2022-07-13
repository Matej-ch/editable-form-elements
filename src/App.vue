<template>
    <div id="app">
        <editable-input
            value="editable value"
            input-name="price"
        />

        <div class="w-full"/>

        <editable-input
            :default-show-input=true
            value=""
            input-name="price"
        />

        <div class="w-full"/>

        <editable-input
            value=""
            input-name="price"
        />

        <div class="w-full"/>

        <editable-select
            value="SK"
            :default-show-input=true
            :options="{SK:'Slovakia',CZ:'Czech republic',PL:'Poland'}"
            input-name="price"
        />

        <editable-select
            value="SK"
            :default-show-input=false
            :options="{SK:'Slovakia',CZ:'Czech republic',PL:'Poland'}"
            input-name="price"
        />

        <div class="w-full"/>

        <editable-textarea value="This is text in textarea" input-name="text-input"/>

        <editable-textarea value="This is text in textarea 2" input-name="text-input" :default-show-input=true />
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