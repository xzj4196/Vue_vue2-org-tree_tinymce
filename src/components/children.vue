<template>
  <div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%">
      <span>{{data}}</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="getDataList">获取</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "children",
    data () {
      return {
        dialogVisible: false,
        data: []
      };
    },
    props: ['msg'],
    mounted () {
      this.dialogVisible = true
      console.log(this.$parent.data)
    },
    watch: {
      msg: {
        handler (val) {
          this.data = val
          // this.get()
        },
        deep: true
      }
    },
    methods: {
      getDataList () {
        // 调用parent方法
        // this.$parent.getData()
        // setTimeout(function () {
        //   if (!that.$parent.data) {
        //     that.data = that.$parent.data
        //     console.log(894789416516)
        console.log(this.data)
        //   } else {
        //     that.$parent.getData()
        //     console.log(21354)
        //   }
        //
        // }, 10)

      },
      get () {
        console.log(478879879)
        this.data = this.$parent.data
      }
    }
  }
</script>

<style scoped>

</style>
