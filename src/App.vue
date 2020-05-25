<template>
  <div id="app">
    <editable-input :inputs="{modelid:'121',isEditable:1}" value='editable value' input-name='price' url='/path/to/update'/>

    <div class="w-full"></div>

    <editable-input :default-show-input=true :inputs="{modelid:'121',isEditable:1}" value='' input-name='price' url='/path/to/update'/>

    <div class="w-full"></div>

    <editable-input :inputs="{modelid:'121',isEditable:1}" value='' input-name='price' url='/path/to/update'/>
  </div>
</template>

<script>
import EditableInput from './components/EditableInput.vue'

export default {
  name: 'App',
  components: {
    EditableInput
  }
}
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
