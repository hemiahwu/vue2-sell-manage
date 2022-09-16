<template>
  <div class="account-list">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>账号列表</span>
      </div>
      <div class="content">
        <!-- 表格 -->
        <el-table :data="tableData" style="width: 100%">
          <!-- 选择框 -->
          <el-table-column type="selection" width="55"> </el-table-column>

          <!-- 账号 -->
          <el-table-column prop="account" label="账号" width="220">
          </el-table-column>

          <!-- 用户组 -->
          <el-table-column prop="userGroup" label="用户组" width="220">
          </el-table-column>

          <!-- 用户组 -->
          <el-table-column prop="date" label="创建时间" width="220">
          </el-table-column>

          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
                >编辑</el-button
              >
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>

        <el-pagination
          :page-sizes="[10, 20, 30, 40]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          background
        >
        </el-pagination>
        <div>
          <el-button size="small" type="danger">批量删除</el-button>
          <el-button size="small" type="primary">取消选择</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: 1,
          date: "2016-05-02",
          account: "admin",
          userGroup: "超级管理员",
        },
        {
          id: 2,
          date: "2016-05-04",
          account: "user",
          userGroup: "普通账号",
        },
        {
          id: 3,
          date: "2016-05-01",
          account: "henry",
          userGroup: "超级管理员",
        },
        {
          id: 4,
          date: "2016-05-03",
          account: "bucky",
          userGroup: "普通用户",
        },
      ],
      pageSize: 10,
      total: 900,
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },

    handleDelete(index, row) {},
  },
};
</script>

<style lang="less" scoped>
.el-pagination {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>