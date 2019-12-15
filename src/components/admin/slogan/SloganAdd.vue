<template>
  <div class='form-container'>
    <el-form ref='form' :model='form' label-width='80px'>
      <el-form-item label='标题'>
        <el-input v-model='form.title'></el-input>
      </el-form-item>
      <el-form-item label='内容'>
        <el-input v-model='form.content'></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type='primary' @click='onSubmit'>立即创建</el-button>
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
        title: '',
        content: ''
      }
    }
  },
  methods: {
    onSubmit () {
      api.addSlogan({ title: this.form.title, content: this.form.content }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .form-container {
    width: 400px;
  }
</style>
