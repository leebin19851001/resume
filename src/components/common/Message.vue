<template>
  <div class="message">
    {{msg}}
  </div>
</template>

<script>
export default {
  props: ['msg']
}
</script>

<style lang="scss" scoped>
  .message {
    height: 30px;
    width: 200px;
    background: rgba($color: #1474c2f6, $alpha: 0.9);
    color: #fff;
    line-height: 30px;
    padding: 0 20px;
    border-radius: 5px;
    margin: 0 auto;
  }
</style>
