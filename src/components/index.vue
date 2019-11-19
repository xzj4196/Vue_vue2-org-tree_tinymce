<template>
  <div>
    {{ msg }}
    <tinymce-editor v-model="msg"
                    :disabled="disabled"
                    @onClick="onClick"
                    ref="editor"></tinymce-editor>
    <button @click="clear">清空内容</button>
    <button @click="disabled = true">禁用</button>
  </div>
</template>

<script>
  import TinymceEditor from './tinymce'
  export default {
    name:'index',
    components: {
      TinymceEditor
    },
    data() {
      return {
        msg: 'Welcome to Use Tinymce Editor',
        disabled: false,
        ip:''
      }
    },
    methods: {
      //鼠标单击的事件
      onClick(keyObj, node) {
        var activeEditor = tinymce.activeEditor;
        var editBody = activeEditor.getBody();
        activeEditor.selection.select(editBody);
        var text = activeEditor.selection.getContent( { 'format' : 'text' } );
        console.log(text)
      },
      //清空内容
      clear() {
        this.$refs.editor.clear()
      }
    }
  }
</script>

<style scoped>
</style>
