<template>
  <div class="right-header">
    <el-row :gutter="20">
      <!-- 面包屑 -->
      <el-col :span="12">
        <!-- 折叠图标 -->
        <i
          @click="changeCollapse"
          :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
        ></i>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item
            v-for="bread in breads"
            :key="bread.title"
            :to="bread.path"
            >{{ bread.title }}</el-breadcrumb-item
          >
        </el-breadcrumb>
      </el-col>
      <!-- 退出系统 -->
      <el-col :span="12" class="right-box">
        <el-dropdown>
          <span class="el-dropdown-link">
            欢迎您,Henry<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="a">个人中心</el-dropdown-item>
            <el-dropdown-item command="b">退出系统</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <!-- 头像 -->
        <el-avatar :size="50" :src="circleUrl"></el-avatar>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",

      breads: [
        // { path: "/home", title: "首页" },
        // { path: "/account", title: "账号列表" },
        // { path: "/account/passwordmodify", title: "修改密码" },
      ],
    };
  },
  created() {
    // 解决刷新
    this.isCollapse = document.body.clientWidth > 1000 ? false : true;

    // 监听窗口大小变化
    window.addEventListener("resize", () => {
      let w = document.body.clientWidth;
      if (w < 1000) this.isCollapse = true;
      if (w > 1000) this.isCollapse = false;
    });

    this.calcBreads();
  },
  methods: {
    changeCollapse() {
      this.isCollapse = !this.isCollapse;

      // 告诉导航组件
      this.$bus.$emit("changeCollapse", this.isCollapse);
    },

    calcBreads() {
      // console.log(this.$route.matched);
      const temp = [{ path: "/home", title: "首页" }];

      const routes = this.$route.matched
        .filter((v) => v.meta.title)
        .map((v) => ({ path: v.path, title: v.meta.title }));

      this.breads = [...temp, ...routes];
    },
  },
  watch: {
    "$route.path"() {
      console.log(this.$route.path);
      this.calcBreads();
    },
  },
};
</script>

<style lang="less" scoped>
.right-header {
  height: 60px;
  background-color: #fff;
  padding-left: 20px;
  padding-right: 20px;

  .el-col {
    display: flex;
    align-items: center;
    height: 60px;

    /deep/ i.el-icon-s-fold,
    i.el-icon-s-unfold {
      font-size: 24px;
      font-weight: 700;
      margin-right: 20px;
      color: #999;
    }
  }

  .right-box {
    display: flex;
    justify-content: flex-end;
    .el-avatar {
      margin-left: 10px;
    }
  }
}
</style>