<template>
  <div class="container">
    <ul class="my-nav">
      <li v-for="(item, index) in list" :key="index">
        <router-link tag="a" :to="item.link">{{item.name}}</router-link>
      </li>
    </ul>

    <ul class="my-login">
      <li v-for="(item, index) in loginList" :key="index">
        <router-link tag="a"  :to="item.link">{{item.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['list'],
  mounted () {
    const userStr = localStorage.getItem('loginUser')
    if (userStr) {
      const userObj = JSON.parse(userStr)
      console.log(userObj)
      this.loginList = [{
        name: userObj.user_name
      }, {
        name: '退出登录',
        link: '/logout'
      }]
    }
  },
  data () {
    return {
      loginList: [{
        name: '登陆',
        link: '/login'
      }, {
        name: '注册',
        link: '/register'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
  .container{
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background: transparent;
    padding: 0 50px;
    box-sizing: border-box;
    .my-nav{
      position: absolute;
      margin-left: 50px;
      height: 60px;
      li {
        float: left;
        margin-left: 20px;
        a {
          font-size: 18px;
          color: #fff;
          &:hover {
            color: #ff4400;
          }
        }
      }
    }

    .my-login {
      position: absolute;
      right: 50px;
      li {
        float: left;
        margin-right: 20px;
        a {
          font-size: 18px;
          color: #fff;
          &:hover {
            color: #ff4400;
          }
        }
      }
    }
  }
</style>
