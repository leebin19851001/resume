<template>
  <el-table :data='tableData' style='width: 100%'>
    <el-table-column prop='title' label='标题' width='180'></el-table-column>
    <el-table-column prop='content' label='内容'></el-table-column>
    <el-table-column prop='ctime' label='日期' width='180'></el-table-column>
    <el-table-column label='操作' width='180'>
      <el-button type="primary" plain>编辑</el-button>
      <el-button type="danger" @click="dialogVisible = true" plain>删除</el-button>
    </el-table-column>
    <Dialog :dialogVisible = 'dialogVisible'/>
  </el-table>
</template>

<script>
import api from '../../../api/index'
import Dialog from '../../common/Dialog'
export default {
  components: {
    Dialog
  },
  data () {
    return {
      tableData: [],
      dialogVisible: false
    }
  },
  mounted () {
    this.getSlogan()
  },
  methods: {
    getSlogan () {
      api.getSloganAll().then(res => {
        this.tableData = res.data.data
      })
    }
  }
}
</script>
