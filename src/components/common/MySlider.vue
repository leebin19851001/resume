<template>
  <div class="container">
    <li v-for="(item, index) in list" :key="index" v-show="index === showImgIndex">
      <img :src="item.src" mode="scaleToFill" lazy-load="false" />
    </li>
  </div>
</template>

<script>
export default {
  props: ['list', 'len'],
  data () {
    return {
      showImgIndex: 0
    }
  },
  mounted () {
    let len = this.len
    setInterval(() => {
      if (this.showImgIndex === len - 1) {
        this.showImgIndex = -1
      }
      this.showImgIndex++
      console.log(this.showImgIndex)
    }, 3000)
  }
}
</script>

<style lang="scss" scoped>
  .container {
    height: 540px;
    overflow: hidden;
    li {
      width: 100%;
      height: 100%;
    }
  }
</style>
