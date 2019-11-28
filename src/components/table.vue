<template>
  <div>
    <el-button type="primary" @click="exportExcel()">导出</el-button>
    <el-table
      id='outTable'
      :data="tableData"
      border>
      <el-table-column
        prop="date"
        label="日期">
      </el-table-column>
      <el-table-column label="配送信息">
        <el-table-column
          prop="name"
          label="姓名">
        </el-table-column>
        <el-table-column label="地址">
          <el-table-column
            prop="province"
            label="省份">
          </el-table-column>
          <el-table-column
            prop="city"
            label="市区">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
          <el-table-column
            prop="zip"
            label="邮编">
          </el-table-column>
        </el-table-column>
      </el-table-column>
    </el-table>
    <create-table :data="this.tableData" style="margin-top: 50px"></create-table>
  </div>

</template>

<script>
  import CreateTable from './createTable'
  import FileSaver from 'file-saver'
  import XLSX from 'xlsx'

  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    } ,
    components:{
      CreateTable
    },
    methods: {
      exportExcel() {
        /* generate workbook object from table */
        // console.log(document.querySelector('#outTable'))
        var wb = XLSX.utils.table_to_book(document.querySelector('#outTable'))
        /* get binary string as output */
        // var wbout = XLSX.write(wb, {bookType: 'xlsx', bookSST: true, type: 'array'})
        var wbout = XLSX.write(wb, {bookType: 'xlsx', bookSST: true, type: 'array'})
        try {
          FileSaver.saveAs(new Blob([wbout], {type: 'application/octet-stream'}), 'sheetjs.xlsx')
        } catch (e) {
          if (typeof console !== 'undefined') console.log(e, wbout)
        }
        return wbout
      }
    }
  }
</script>

<style scoped>

</style>
