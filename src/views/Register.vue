<template>
  <div class="register">
    <div class="register-left">
      <p>已有账号？</p>
      <p>有账号就登录吧，好久不见</p>
      <p>登录</p>
    </div>
    <div class="register-right">
      <p>立即注册</p>
      <p>用户名</p>
      <p><input type="text" v-model="userId"></p>
      <p>邮箱</p>
      <p><input type="email" v-model="email"></p>
      <p>密码</p>
      <p><input type="password" v-model="password"></p>
      <p @click="login">注册</p>
    </div>
  </div>
</template>
<script>
import api from '../api/index'
export default {
  data () {
    return {
      userId: '',
      email: '',
      password: ''
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      api.queryUserInfoByUserId({ userId: 'zhagnsan' })
        .then(res => {
          console.log(res)
        }, reason => {
          console.log('22222222')
        })
    },
    login () {
      api.registerUser({ userId: this.userId, email: this.email, password: this.password })
        .then(res => {
          console.log('1111111')
        }, reason => {
          console.log('22222222')
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  .register {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 80px 500px;
    display: flex;
    .register-left {
      position: relative;
      width: 40%;
      height: 600px;
      background-image: url('../assets/img/bg.jpg');
      background-repeat: no-repeat;
      text-align: center;
      p {
        position: relative;
        margin:0 auto;
        color: #fff;
      }
      p:nth-child(1){
        font-size: 28px;
        top: 30px;
      }
      p:nth-child(2){
        top: 50px;
      }
      p:nth-child(3){
        top: 350px;
        opacity: 0.8;
        width: 100px;
        border-radius: 10px;
        border:2px solid snow;
        padding: 2px;
        font-weight: 700;
        cursor: pointer;
      }
    }
    .register-right {
      position: relative;
      width: 60%;
      height: 600px;
      box-sizing: border-box;
      border-top:1px solid black;
      border-bottom:1px solid black;
      border-right:1px solid black;
      text-align: center;
      p{
        position: relative;
        height: 20px;
      }
      p:nth-child(1) {
        font-size: 20px;
        top: 30px;
      }
      p:nth-child(2) {
        top: 50px;
      }
      p:nth-child(3) {
        top: 60px;
      }
      p:nth-child(4) {
        top: 70px;
      }
      p:nth-child(5) {
        top: 80px;
      }
      p:nth-child(6) {
        top: 90px;
      }
      p:nth-child(7) {
        top: 100px;
      }
      p:nth-child(8) {
        top: 200px;
        width: 100px;
        margin: 0 auto;
        padding: 4px 5px;
        background: rgb(211, 176, 122);
        border-radius: 10px;
        font-weight: 700;
        cursor: pointer;
      }
    }
  }
</style>
