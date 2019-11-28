<template>
  <div>
    <el-button type="primary" @click="ShowDialog">主要按钮</el-button>
    <Children v-if="addOrUpdateVisible" :msg="data"></Children>
  </div>

</template>

<script>

  import Children from './children'

  export default {
    name: "parent",
    data () {
      return {
        addOrUpdateVisible: false,
        name: 'mgkjsj',
        data: []
      }
    },
    components: {
      Children
    },
    methods: {
      ShowDialog () {
        this.addOrUpdateVisible = true
        this.getData()
      },
      getData () {
        console.log(12654)
        this.$http.get('https://api.coindesk.com/v1/bpi/currentprice.json')
          .then(response => {
            this.data = response.data
          })
          .catch(function (error) { // 请求失败处理
            console.log(error);
          })
      }
    }

  }
</script>

<style scoped>

</style>
