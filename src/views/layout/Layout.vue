<template>
  <div class="layout">
    <!-- 导航 -->
    <left-nav></left-nav>
    <div class="content">
      <right-header></right-header>

      <!-- 子级路由的容器 -->
      <div class="out">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import LeftNav from "./LeftNav.vue";
import RightHeader from "./RightHeader.vue";
export default {
  components: { LeftNav, RightHeader },
};
</script>

<style lang="less" scoped>
.layout {
  height: 100%;
  display: flex;
  .content {
    flex: 1;
    background-color: #ccc;
    display: flex;
    flex-direction: column;
    .out {
      flex: 1;
      overflow-y: scroll;
    }
  }
}
</style>