<template>

  <div>
    <router-link v-for="(item,index) in data" :to="{path:item.path}" :key="index">{{item.value}}<br></router-link>
  </div>

</template>

<script>
  export default {
    name: "home",
    data () {
      return {
        data: [
          {path: '/', value: 'home'},
          {path: '/index', value: 'index'},
          {path: '/type', value: 'type'},
          {path: '/time', value: 'time'},
          {path: '/table', value: 'table'},
          {path: '/DataTable', value: 'DataTable'},
          {path: '/parent', value: 'parent'},
          {path: '/txt', value: 'Txt'},
        ]
      }
    }
  }
</script>

<style scoped>

</style>
