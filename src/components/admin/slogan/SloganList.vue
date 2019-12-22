<template>
  <el-table :data='tableData' style='width: 100%'>
    <el-table-column prop='title' label='标题' width='180'></el-table-column>
    <el-table-column prop='content' label='内容'></el-table-column>
    <el-table-column prop='ctime' label='日期' width='180'></el-table-column>
    <el-table-column label='操作' width='180'>
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="editSlogan(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="deleteSlogan(scope.$index, scope.row)">删除</el-button>
      </template>
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
    },
    editSlogan (index, row) {
      this.$router.push({ name: 'sloganAdd', params: { ...row } })
    },
    deleteSlogan (index, row) {
      api.deleteSloganById({ id: row.id }).then(res => {
        this.getSlogan()
      })
    }
  }
}
</script>
