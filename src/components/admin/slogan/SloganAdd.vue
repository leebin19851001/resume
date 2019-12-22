<template>
  <div class='form-container'>
    <el-form ref='form' :model='form' label-width='80px'>
      <el-form-item v-if="form.id" label='编号'>
        <el-input v-model='form.id' disabled></el-input>
      </el-form-item>
      <el-form-item label='标题'>
        <el-input v-model='form.title'></el-input>
      </el-form-item>
      <el-form-item label='内容'>
        <el-input v-model='form.content'></el-input>
      </el-form-item>
      <el-form-item>
        <el-button v-if="form.id" type='primary' @click='onSubmit("update")'>更新</el-button>
        <el-button v-else type='primary' @click='onSubmit("add")'>立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import api from '../../../api/index.js'
export default {
  data () {
    return {
      form: {
        id: '',
        title: '',
        content: ''
      }
    }
  },
  mounted () {
    let temp = this.$router.history.current.params
    if (temp) {
      this.form = {
        id: temp.id,
        title: temp.title,
        content: temp.content
      }
    }
  },
  methods: {
    onSubmit (val) {
      if (val === 'add') {
        api.addSlogan({ title: this.form.title, content: this.form.content }).then(res => {
          alert('添加成功')
          this.form = {
            id: '',
            title: '',
            content: ''
          }
        }).catch(err => {
          console.log(err)
        })
      } else {
        api.updateSlogan({ id: this.form.id, title: this.form.title, content: this.form.content }).then(res => {
          alert('更新成功')
          this.$router.push('sloganList')
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .form-container {
    width: 400px;
  }
</style>
