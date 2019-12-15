<template>
  <div class="myad-container">
    <AdvanceItem v-for="(item, index) in dataList" :key="index" :item="item"/>
  </div>
</template>

<script>
import AdvanceItem from './AdvanceItem'
export default {
  props: ['dataList'],
  components: {
    AdvanceItem
  }
}
</script>

<style lang="scss" scoped>
  .myad-container {
    display: flex;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    background: rgba($color: #000000, $alpha: 0.3);
    div {
      flex-grow: 1;
    }
  }
</style>
