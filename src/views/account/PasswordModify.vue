<template>
  <div class="password-modify">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>修改密码</span>
      </div>
      <div class="content">
        <!-- 表单 -->
        <el-form size="small" label-width="90px">
          <el-form-item label="原密码">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="新密码">
            <el-input type="password"></el-input>
          </el-form-item>
          <el-form-item label="确认新密码">
            <el-input type="password"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary">提交</el-button>
            <el-button>重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.el-form {
  .el-input {
    width: 320px;
  }
}
</style>