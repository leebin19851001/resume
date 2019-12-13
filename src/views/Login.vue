<template>
    <div class="login-container">
      <div class="msg-container" v-show="isShow">
        <Message :msg="showMsg"/>
      </div>
      <div class="register">
        <div class="register-left">
          <p>欢迎回来</p>
          <p>用户名</p>
          <p><input type="text" v-model="userName"></p>
          <p>密码</p>
          <p><input type="password" v-model="password"></p>
          <p>忘记密码</p>
          <p @click="login">登陆</p>
        </div>
        <div class="register-right">
          <p>还未注册？</p>
          <p>立即注册，发现大量机会</p>
          <router-link tag="p" to="/register">注册</router-link>
        </div>
    </div>
  </div>
</template>
<script>
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
    async login () {
      const result = await this.$store.dispatch('loginStore/login', { userName: this.userName, password: md5.hex_md5(this.password) })
      console.log(result)
      if (result) {
        this.$router.push('/')
      } else {
        alert('账号错误')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .login-container {
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
      .register-right {
        position: relative;
        width: 40%;
        height: 80%;
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
          top: 300px;
          opacity: 0.8;
          width: 100px;
          border-radius: 10px;
          border:2px solid snow;
          padding: 2px;
          font-weight: 700;
          cursor: pointer;
        }
      }
      .register-left {
        position: relative;
        width: 60%;
        height: 80%;
        box-sizing: border-box;
        border-top:1px solid black;
        border-bottom:1px solid black;
        border-left:1px solid black;
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
          top: 100px;
        }
        p:nth-child(7) {
          top: 220px;
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
