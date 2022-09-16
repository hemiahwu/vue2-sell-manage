<template>
  <div class="account-add">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>添加账号</span>
      </div>
      <div class="content">
        <!-- 表单 -->
        <el-form
          :model="accountForm"
          size="small"
          ref="accountForm"
          label-width="100px"
          :rules="rules"
        >
          <el-form-item label="账号" prop="account">
            <el-input v-model="accountForm.account"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              v-model="accountForm.password"
              type="password"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="用户组" prop="userGroup">
            <el-select
              v-model="accountForm.userGroup"
              placeholder="请选择用户组"
            >
              <el-option value="普通用户"></el-option>
              <el-option value="超级管理员"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm">提交</el-button>
            <el-button @click="reset">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accountForm: {
        account: "",
        password: "",
        userGroup: "",
      },

      rules: {
        account: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 3, max: 6, message: "长度在 3 到 6 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 6, message: "长度在 3 到 6 个字符", trigger: "blur" },
        ],
        userGroup: [
          {
            required: true,
            message: "请选择用户组",
            trigger: "change",
          },
        ],
      },
    };
  },
  methods: {
    submitForm() {
      this.$refs.accountForm.validate((valid) => {
        if (valid) {
          console.log("发起ajax请求");
        } else {
          // 校验失败
          this.$message("请填写正确的内容");
        }
      });
    },

    reset() {
      this.$refs.accountForm.resetFields();
    },
  },
};
</script>

<style lang="less" scoped>
.el-form {
  .el-input {
    width: 195px;
  }
}
</style>