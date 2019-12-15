<template>
  <div class="container">
    <ul class="my-nav">
      <li v-for="(item, index) in list" :key="index">
        <router-link tag="a" :to="item.link">{{item.name}}</router-link>
      </li>
    </ul>

    <ul class="my-login" v-if="isLogin">
      <li>
        <a >{{ loginUser.user_name }}</a>
      </li>
      <li>
        <a @click="logOut">退出登陆</a>
      </li>
    </ul>
    <ul class="my-login" v-else>
      <li>
        <router-link tag="a" to="/login">登陆</router-link>
      </li>
      <li>
        <router-link tag="a" to="/register">注册</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['list'],
  methods: {
    logOut () {
      this.$store.dispatch('loginStore/logOut', {})
      this.$router.push('/login')
    }
  },
  computed: {
    loginUser () {
      return this.$store.state.loginStore.user
    },
    isLogin () {
      return this.$store.state.loginStore.isLogin
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
