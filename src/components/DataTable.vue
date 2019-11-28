<template>
  <div>
    <el-button type="primary" @click="exportExcel1()">导出</el-button>
    <!--<el-table-->
    <!--:data="tableData"-->
    <!--style="width: 100%">-->
    <!--<el-table-column-->
    <!--prop="date"-->
    <!--label="日期"-->
    <!--width="150">-->
    <!--</el-table-column>-->
    <!--<el-table-column label="配送信息">-->
    <!--<el-table-column-->
    <!--prop="name"-->
    <!--label="姓名"-->
    <!--width="120">-->
    <!--</el-table-column>-->
    <!--<el-table-column label="地址">-->
    <!--<el-table-column-->
    <!--prop="province"-->
    <!--label="省份"-->
    <!--width="120">-->
    <!--</el-table-column>-->
    <!--<el-table-column-->
    <!--prop="city"-->
    <!--label="市区"-->
    <!--width="120">-->
    <!--</el-table-column>-->
    <!--<el-table-column-->
    <!--prop="address"-->
    <!--label="地址"-->
    <!--width="300">-->
    <!--</el-table-column>-->
    <!--<el-table-column-->
    <!--prop="zip"-->
    <!--label="邮编"-->
    <!--width="120">-->
    <!--</el-table-column>-->
    <!--</el-table-column>-->
    <!--</el-table-column>-->
    <!--</el-table>-->
    <el-table
      id='outTable'
      :data="tableData"
      style="width: 100%;margin-bottom: 20px;"
      row-key="id"
      border
      default-expand-all
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
      <el-table-column
        prop="id"
        label="ID"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    <el-button type="primary" @click="exportExcel()">导出</el-button>
  </div>
</template>

<script>
  import FileSaver from 'file-saver'
  import XLSX from 'xlsx'

  export default {
    data() {
      return {
        tableData: [{
          id: 1,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: 2,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          id: 3,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          children: [{
            id: 31,
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            id: 32,
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }]
        }, {
          id: 4,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        tableData1: [{
          id: 1,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: 2,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          id: 3,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          hasChildren: true
        }, {
          id: 4,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],

      }
    },
    methods: {
      exportExcel() {
        //excel数据导出
        require.ensure([], () => {
          const {
            export_json_to_excel
          } = require('../assets/js/Export2Excel');
          // const tHeader = ['时间', '姓名', '省', '市', '地址', '备注'];
          // const filterVal = ['date', 'name', 'province', 'city', 'payType', 'address', 'zip'];
          const tHeader = this.exportExcel1('tHeader')
          const filterVal = this.exportExcel1('filterVal')
          const list = this.tableData;
          const data = this.formatJson(filterVal, list);
          export_json_to_excel(tHeader, data, this.GetTimeStamp());
        })
      },
      formatJson(filterVal, jsonData) {
        return jsonData.map(v => filterVal.map(j => v[j]))
      },
      exportExcel1(val) {
        const list = []
        if (val === 'tHeader') {
          document.querySelectorAll('#outTable thead th div').forEach((item, index) => {
            list.push(item.innerHTML.replace(/<\/?.+?\/?>/g, ''))
          })
        } else if (val === 'filterVal') {
          for (var item in this.tableData[0]) {
            list.push(item)
          }
        }
        return list

        // console.log(tHeader, filterVal)
        // console.log(new Date().toLocaleString().split(' ')[0])
        // this.tableData.concat(this.tableData, this.tableData1)
        /* generate workbook object from table */
        /* var wb = XLSX.utils.table_to_book(document.querySelector('#outTable'))
         // console.log(wb)
         /!* get binary string as output *!/
         // var wbout = XLSX.write(wb, {bookType: 'xlsx', bookSST: true, type: 'array'})
         var wbout = XLSX.write(wb, {bookType: 'xlsx', bookSST: true, type: 'array'})
         try {
           FileSaver.saveAs(new Blob([wbout], {type: 'application/octet-stream'}), 'sheetjs.xlsx')
         } catch (e) {
           if (typeof console !== 'undefined') console.log(e, wbout)
         }
         return wbout*/
      },

      // 获取时间戳
      GetTimeStamp() {
        var date = new Date()
        var year = date.getFullYear().toString()
        var month = (date.getMonth() + 1).toString()
        var strDate = date.getDate().toString()
        var strHours = date.getHours().toString()
        var strMinutes = date.getMinutes().toString()
        var strSeconds = date.getSeconds().toString()
        var currentdate = year + month + strDate + strHours + strMinutes + strSeconds
        return currentdate
      }
    }
  }
</script>
