<script>
  export default {
    name: "create-table",
    props: ['data'],
    render(h, data = this.data) {
      console.log(data)
      return h("el-table", {
        attrs: {
          border: 'border', data: data
        }
      }, [
        h("el-table-column", {
          attrs: {
            prop: 'date',
            label: '日期'
          }
        }, []),
        h("el-table-column", {
          attrs: {
            prop: 'name',
            label: '姓名'
          }
        }, []),
        h("el-table-column", {
          attrs: {
            prop: 'address',
            label: '地址'
          }
        }, []),
        h("el-table-column", {
          attrs: {
            prop: 'province',
            label: '省份'
          }
        }, []),
        h("el-table-column", {
          attrs: {
            prop: 'zip',
            label: '邮编'
          }
        }, [])
      ])
    }
  }
</script>


