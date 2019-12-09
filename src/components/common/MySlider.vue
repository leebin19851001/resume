<template>
  <ul class="container">
    <li v-for="(item, index) in list" :key="index">
      <img :src="item.src" mode="scaleToFill" lazy-load="false" />
    </li>
  </ul>
</template>

<script>
export default {
  props: ['list']
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
