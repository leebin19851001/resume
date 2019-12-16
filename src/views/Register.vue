<template>
    <div class="login-container">
      <div class="msg-container" v-show="isShow">
        <Message :msg="showMsg"/>
      </div>
      <div class="register">
        <div class="register-left">
          <p>已有账号？</p>
          <p>有账号就登录吧，好久不见</p>
          <router-link tag="p" to="/login">登录</router-link>
        </div>
        <div class="register-right">
          <p>立即注册</p>
          <p>用户名</p>
          <p><input type="text" v-model="userName"></p>
          <p>邮箱</p>
          <p><input type="email" v-model="email"></p>
          <p>密码</p>
          <p><input type="password" v-model="password"></p>
          <p @click="rigster">注册</p>
        </div>
    </div>
  </div>
</template>
<script>
import api from '../api/index'
import md5 from '../utils/md5'
import Message from '../components/common/Message'
export default {
  components: {
    Message
  },
  data () {
    return {
      userName: '',
      email: '',
      password: '',
      isShow: false,
      showMsg: ''
    }
  },
  methods: {
    getData () {
      api.queryUserInfoByUserId({ userId: 'zhagnsan' })
        .then(res => {
          this.userName = res.data.data[0]['user_name']
          this.email = res.data.data[0]['email']
          this.password = res.data.data[0]['password']
        }, reason => {
          console.log(reason)
        })
    },
    rigster () {
      let flag = this.verify()
      if (!flag) {
        return undefined
      }
      api.registerUser({ userName: this.userName, email: this.email, password: md5.hex_md5(this.password) })
        .then(res => {
          this.showMessage(res.data.msg)
        }, reason => {
          this.showMessage(reason.data.msg)
        })
    },
    showMessage (msg) {
      this.isShow = true
      this.showMsg = msg
      setTimeout(() => {
        this.isShow = false
      }, 3000)
    },
    verify () {
      if (this.userName.length === 0 || this.userName === '') {
        this.showMessage('用户名不能为空')
        return false
      }
      if (this.password.length === 0 || this.password === '') {
        this.showMessage('密码不能为空')
        return false
      }
      if (this.email.length === 0 || this.email === '') {
        this.showMessage('邮箱不能为空')
        return false
      }
      return true
    }
  }
}
</script>

<style lang="scss" scoped>
  .login-container{
    width: 100%;
    height: 100%;
    .msg-container {
      position: fixed;
      top: 10px;
      width: 100%;
      text-align: center;
    }
    .register {
      position: relative;
      box-sizing: border-box;
      width: 100%;
      height: 80%;
      padding: 50px 30% 0px;
      display: flex;
      .register-left {
        position: relative;
        width: 40%;
        height: 80%;
        background-image: url('../assets/img/bg.jpg');
        background-repeat: no-repeat;
        text-align: center;
        min-height: 340px;
        min-width: 200px;
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
          top: 250px;
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
        height: 80%;
        box-sizing: border-box;
        border-top:1px solid black;
        border-bottom:1px solid black;
        border-right:1px solid black;
        text-align: center;
        min-height: 340px;
        min-width: 200px;
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
          top: 170px;
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
  }
</style>
