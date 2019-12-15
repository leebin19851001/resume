<template>
  <div class="ad-item" >
    <p class="title">{{ item.title }}</p>
    <p class="content">{{ item.content }}</p>
  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>
<style lang="scss" scoped>
  .ad-item {
    padding-top: 30px;
    p {
      color: #fff;
      font-weight: 300;
    }
    .title {
      font-size: 20px;
      margin-bottom: 10px;
    }
    .content {
      font-size: 14px;
    }
  }
</style>
