<template>
  <div class="left-nav" :style="{ width: isCollapse ? '' : '200px' }">
    <div class="header">
      <img
        class="avatar"
        width="50"
        height="50"
        src="../../assets/imgs/logo.png"
        alt="logo"
      />
      <span v-show="!isCollapse">外卖后台管理系统</span>
    </div>

    <el-menu
      class="box"
      :collapse="isCollapse"
      background-color="#304156"
      text-color="#fff"
      unique-opened
      router
      :default-active="currentActive"
      :collapse-transition="false"
    >
      <el-menu-item index="/home">
        <i class="iconfont icon-home"></i>
        <span slot="title">后台首页</span>
      </el-menu-item>
      <el-menu-item index="/order">
        <i class="iconfont icon-order"></i>
        <span slot="title">订单管理</span>
      </el-menu-item>
      <el-submenu index="/goods">
        <template slot="title">
          <i class="iconfont icon-goods"></i>
          <span slot="title">商品管理</span>
        </template>
        <el-menu-item index="/goods/list">商品列表</el-menu-item>
        <el-menu-item index="/goods/add">商品添加</el-menu-item>
        <el-menu-item index="/goods/category">商品分类</el-menu-item>
      </el-submenu>
      <el-menu-item index="/shop">
        <i class="iconfont icon-shop"></i>
        <span slot="title">店铺管理</span>
      </el-menu-item>
      <el-submenu index="/account">
        <template slot="title">
          <i class="iconfont icon-account"></i>
          <span slot="title">账号管理</span>
        </template>
        <el-menu-item index="/account/list">账号列表</el-menu-item>
        <el-menu-item index="/account/add">账号添加</el-menu-item>
        <el-menu-item index="/account/passwordmodify">修改密码</el-menu-item>
        <el-menu-item index="/account/personal">个人中心</el-menu-item>
      </el-submenu>
      <el-submenu index="/total">
        <template slot="title">
          <i class="iconfont icon-total"></i>
          <span slot="title">销售统计</span>
        </template>
        <el-menu-item index="/total/goods">商品统计</el-menu-item>
        <el-menu-item index="/total/order">订单统计</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
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

    // 接收RightHeader注册的事件和传递的参数
    this.$bus.$on("changeCollapse", (data) => {
      this.isCollapse = data;
    });
  },
  computed: {
    currentActive() {
      return this.$route.path;
    },
  },
};
</script>

<style lang="less" scoped>
.left-nav {
  height: 100%;
  background-color: #304156;

  .header {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;

    @keyframes r {
      0% {
        transform: rotate(0deg);
      }
      50% {
        transform: rotate(360deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }

    .avatar {
      animation: r linear 1s;
    }
  }

  .el-menu {
    border-right: 0px;
    .iconfont {
      color: #fff;
      margin-right: 10px;
    }

    // 一级路由选中样式
    .is-active {
      background: #3276f4 !important;
      color: #fff !important;
    }

    /deep/ .el-menu {
      .el-menu-item {
        background-color: #202f3f !important;

        &:hover {
          background: #3276f4 !important;
          color: #fff !important;
        }
      }

      .is-active {
        background: #3276f4 !important;
        color: #fff !important;
      }
    }
  }
}

// 媒体查询
// @media screen and (min-width: 1000px) {
//   .left-nav {
//     width: 200px;
//   }
// }

@media screen and (max-width: 1000px) {
  .el-menu-item:hover {
    background: #3276f4 !important;
    color: #fff !important;
  }

  .el-menu {
    .is-active {
      background: #3276f4 !important;
      color: #fff !important;

      // 一级的选中效果
      /deep/ .el-submenu__title {
        background: #3276f4 !important;
        color: #fff !important;
      }
    }
    /deep/ .el-submenu__title:hover {
      background: #3276f4 !important;
      color: #fff !important;
    }
  }
}
</style>