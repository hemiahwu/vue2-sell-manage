<template>
  <div class="login">
    <div class="login-form">
      <div class="login-header">
        <h3>系统登录</h3>
      </div>
      <el-form ref="loginForm" :model="loginForm" :rules="rules">
        <el-form-item prop="account">
          <el-input
            prefix-icon="el-icon-user-solid"
            v-model="loginForm.account"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            @change="submitForm"
            :type="visible ? 'text' : 'password'"
            prefix-icon="el-icon-lock"
            v-model="loginForm.password"
          >
            <i
              @click="changeMode"
              slot="suffix"
              class="iconfont"
              :class="visible ? 'icon-eye-open' : 'icon-eye-close'"
            ></i>
          </el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        account: "",
        password: "",
      },
      visible: false,
      rules: {
        account: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 3, max: 6, message: "长度在 3 到 6 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 6, message: "长度在 3 到 6 个字符", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    changeMode() {
      this.visible = !this.visible;
    },
    submitForm() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          console.log("发起ajax请求");
        } else {
          // 校验失败
          this.$message("请填写正确的内容");
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  background: #333;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .login-form {
    width: 400px;
    background: rgba(0, 0, 0, 0.1);
    padding: 20px;
    border-radius: 10px;

    .login-header {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 60px;
      color: #fff;
    }

    /deep/ .el-input {
      input {
        background-color: transparent;
        color: #fff;
        letter-spacing: 1px;
      }
    }

    .el-button {
      width: 100%;
    }
  }
}
</style>