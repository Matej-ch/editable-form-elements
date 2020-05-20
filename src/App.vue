<template>
  <div id="app">
    <editable-input :inputs="{modelid:'121',isEditable:1}" value='' inputname='price' url='/path/to/update'/>
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
  margin-top: 60px;
}
</style>
