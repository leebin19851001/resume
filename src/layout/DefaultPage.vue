<template>
  <div class="container">
    <div id="myNav-container" class="myNav-container">
      <MyNav :list="list" />
    </div>
    <router-view/>
  </div>
</template>
<script>
import MyNav from '../components/common/MyNav'
export default {
  data () {
    return {
      list: [{
        id: '1',
        name: '首页',
        link: '/index',
        active: true
      }, {
        id: '2',
        name: '个人简历',
        link: '/resume',
        active: false
      }, {
        id: '3',
        name: '关于',
        link: '/About',
        active: false
      }]
    }
  },
  components: {
    MyNav
  }
}
</script>

<style lang="scss" scoped>
  .container {
    height: 100%;
    .myNav-container {
      position: fixed;
      top: 0;
      height: 60px;
      width: 100%;
      padding: 0 auto;
      line-height: 60px;
    }
  }
</style>
