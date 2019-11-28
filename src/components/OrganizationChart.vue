<template>

  <div>
    <div class="col-md-10 col-md-offset-1">
      <div class="page-header">
        <h3>基于Vue的组织架构树组件</h3>
      </div>
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <form class="form-horizontal row">
            <div class="col-md-4">
              <div class="checkbox">
                <label>
                  <input
                    type="checkbox"
                    v-model="horizontal"
                  > Horizontal
                </label>
              </div>
            </div>
            <div class="col-md-4">
              <div class="checkbox">
                <label>
                  <input
                    type="checkbox"
                    v-model="collapsable"
                  > Collapsable
                </label>
              </div>
            </div>
            <div class="col-md-4">
              <div class="checkbox">
                <label>
                  <input
                    type="checkbox"
                    v-model="expandAll"
                    @change="expandChange"
                  > Expand All
                </label>
              </div>
            </div>
            <p><br></p>
            <p><br></p>
            <div class="col-md-6">
              <div class="form-group">
                <label class="control-label col-md-5">labelClassName:</label>
                <div class="col-md-7">
                  <select
                    class="form-control"
                    v-model="labelClassName"
                  >
                    <option value="bg-white">bg-white</option>
                    <option value="bg-orange">bg-orange</option>
                    <option value="bg-gold">bg-gold</option>
                    <option value="bg-gray">bg-gray</option>
                    <option value="bg-lightpink">bg-lightpink</option>
                    <option value="bg-chocolate">bg-chocolate</option>
                    <option value="bg-tomato">bg-tomato</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <p><br></p>
      <div class="text-center">
        <vue2-org-tree name="test"
                       :data="data"
                       :horizontal="horizontal"
                       :collapsable="collapsable"
                       :label-class-name="labelClassName"
                       :render-content="renderContent"
                       @on-expand="onExpand"
                       @on-node-click="onNodeClick"
        />
      </div>
    </div>


  </div>


</template>

<script>

  export default {

    name: "OrganizationChart",
    data() {
      return {
        data: {
          id: 0,
          label: "XXX科技有限公司",
          children: [
            {
              id: 2,
              label: "产品研发部",
              children: [
                {
                  id: 5,
                  label: "研发-前端"
                },
                {
                  id: 6,
                  label: "研发-后端"
                },
                {
                  id: 9,
                  label: "UI设计"
                },
                {
                  id: 10,
                  label: "产品经理"
                }
              ]
            },
            {
              id: 3,
              label: "销售部",
              children: [
                {
                  id: 7,
                  label: "销售一部"
                },
                {
                  id: 8,
                  label: "销售二部"
                }
              ]
            },
            {
              id: 4,
              label: "财务部"
            },
            {
              id: 9,
              label: "HR人事"
            }
          ]
        },
        horizontal: false,
        collapsable: true,
        expandAll: false,
        labelClassName: "bg-white",
        value: '',
        dataList: [
          {name: '黄金糕', command: 'a'},
          {name: '狮子头', command: 'b'},
          {name: '螺蛳粉', command: 'c'},
          {name: '双皮奶', command: 'd'},
          {name: '蚵仔煎', command: 'e'}
        ]
      }
    },
    components: {
      // Adropdown
    },
    methods: {
      // renderContent(h, data) {
      //   return data.label
      // },
      onExpand(data) {
        if ("expand" in data) {
          data.expand = !data.expand
          if (!data.expand && data.children) {
            this.collapse(data.children)
          }
        } else {
          this.$set(data, "expand", true)
        }
      },
      onNodeClick(e, data) {
        // alert(data.label)
      },
      renderContent(h, data) {
        return h('span', {}, [
          h('el-dropdown', {
            on: {
              command: this.handleClick
            }
          }, [
            h('a', {domProps: {innerHTML: data.label}}, []),
            h('el-dropdown-menu', {}, [
              data.children ? h('el-dropdown-item', {
                  domProps: {innerHTML: '黄金糕'},
                  attrs: {command: data.id.toString()},  // command 必须是字符串类型  具体为什么本人还没有弄清 文档显示可以是 数字 字符串 对象格式
                },
                []) : '', // 判断子节点是否存在 存在显示 不存在为空
              h('el-dropdown-item', {
                  domProps: {innerHTML: '狮子头'},
                  attrs: {command: data.id.toString()},
                },
                []),
              h('el-dropdown-item', {
                  domProps: {innerHTML: '螺蛳粉'},
                  attrs: {command: data.id.toString()},
                },
                [])
            ])
          ])
        ])
      },
      handleClick(command) {
        this.$message.success(`{ id : ${command}, name : 想怎么玩怎么玩 }`)
      },
      collapse(list) {
        var _this = this
        list.forEach(function (child) {
          if (child.expand) {
            child.expand = false
          }
          child.children && _this.collapse(child.children)
        })
      },
      expandChange() {
        this.toggleExpand(this.data, this.expandAll)
      },
      toggleExpand(data, val) {
        var _this = this
        if (Array.isArray(data)) {
          data.forEach(function (item) {
            _this.$set(item, "expand", val)
            if (item.children) {
              _this.toggleExpand(item.children, val)
            }
          })
        } else {
          this.$set(data, "expand", val)
          if (data.children) {
            _this.toggleExpand(data.children, val)
          }
        }
      }
    }

  }
</script>

<style type="text/css">

  .org-tree-node-label {
    white-space: nowrap;
    cursor: pointer;
  }

  .bg-white {
    background-color: white
  }

  .bg-orange {
    background-color: orange
  }

  .bg-gold {
    background-color: gold
  }

  .bg-gray {
    background-color: gray
  }

  .bg-lightpink {
    background-color: lightpink
  }

  .bg-chocolate {
    background-color: chocolate
  }

  .bg-tomato {
    background-color: tomato
  }
</style>

