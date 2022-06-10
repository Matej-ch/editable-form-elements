<template>
  <div id="app">
    <editable-input
      :inputs="{modelid:'25',isEditable:1}"
      value="editable value"
      input-name="price"
      url="/path/to/update"
    />

    <div class="w-full" />

    <editable-input
      :default-show-input="true"
      :inputs="{modelid:'121',isEditable:1}"
      value=""
      input-name="price"
      url="/path/to/update"
    />

    <div class="w-full" />

    <editable-input
      :inputs="{modelid:'121',isEditable:1}"
      value=""
      input-name="price"
      url="/path/to/update"
    />

    <div class="w-full" />

    <editable-input
      :inputs="{modelid:'356',isEditable:1}"
      value="SK"
      :options="{SK:'Slovakia',CZ:'Czech republic',PL:'Poland'}"
      input-name="price"
      url="/path/to/update"
    />
  </div>
</template>

<script setup>
import EditableInput from './components/EditableInput.vue'

</script>

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
