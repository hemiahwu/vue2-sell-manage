<template>
  <div class="goods-list">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>商品列表</span>
      </div>
      <div class="content">
        <!-- 表格 -->
        <el-table :data="tableData" style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="商品ID">
                  <span>{{ props.row.id }}</span>
                </el-form-item>
                <el-form-item label="商品名称">
                  <span>{{ props.row.name }}</span>
                </el-form-item>
                <el-form-item label="所属分类">
                  <span>{{ props.row.category }}</span>
                </el-form-item>

                <el-form-item label="商品价格">
                  <span>{{ props.row.price }}</span>
                </el-form-item>

                <el-form-item label="创建时间">
                  <span>{{ props.row.date }}</span>
                </el-form-item>
                <el-form-item label="商品评价">
                  <span>{{ props.row.rating }}</span>
                </el-form-item>
                <el-form-item label="商品销量">
                  <span>{{ props.row.sellCount }}</span>
                </el-form-item>
                <el-form-item label="商品描述">
                  <span>{{ props.row.desc }}</span>
                </el-form-item>
                <el-form-item label="商品图片">
                  <!-- <span>{{ props.row.imgurl }}</span> -->
                  <img width="50" height="50" :src="props.row.imgurl" alt="" />
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <!-- 商品名称 -->
          <el-table-column label="商品名称" prop="id"> </el-table-column>
          <!-- 所属分类 -->
          <el-table-column label="所属分类" prop="name"> </el-table-column>
          <!-- 商品价格 -->
          <el-table-column label="商品价格" prop="price"> </el-table-column>
          <!-- 商品图片 -->
          <el-table-column label="商品图片">
            <template slot-scope="scope">
              <img width="100" height="60" :src="scope.row.imgurl" alt="" />
            </template>
          </el-table-column>
          <!-- 商品描述 -->
          <el-table-column label="商品描述" prop="desc"> </el-table-column>
          <!-- 操作 -->
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                type="primary"
                size="mini"
                @click="handleEdit(scope.row)"
                >编辑</el-button
              >
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.row)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
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
          id: "12987122",
          name: "肯德基",
          category: "美食",
          desc: "全球知名西餐，奶香浓而不腻",
          imgurl:
            "https://gimg3.baidu.com/search/src=http%3A%2F%2Fgips0.baidu.com%2Fit%2Fu%3D3713482720%2C770435118%26fm%3D3030%26app%3D3030%26f%3DJPEG%3Fw%3D121%26h%3D74%26s%3D06D38A767E672E0124AB4FEB0300E01E&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f242,150&n=0&g=0n&q=100&fmt=auto?sec=1663434000&t=2fd42b23b6e3aa6e32c82b9ea93179cb",
          price: "25",
          date: "2023-12-31",
          rating: 100,
          sellCount: 200,
        },
        {
          id: "12987122",
          name: "肯德基",
          category: "美食",
          desc: "全球知名西餐，奶香浓而不腻",
          imgurl:
            "https://gimg3.baidu.com/search/src=http%3A%2F%2Fgips0.baidu.com%2Fit%2Fu%3D3713482720%2C770435118%26fm%3D3030%26app%3D3030%26f%3DJPEG%3Fw%3D121%26h%3D74%26s%3D06D38A767E672E0124AB4FEB0300E01E&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f242,150&n=0&g=0n&q=100&fmt=auto?sec=1663434000&t=2fd42b23b6e3aa6e32c82b9ea93179cb",
          price: "25",
          date: "2023-12-31",
          rating: 100,
          sellCount: 200,
        },
      ],
    };
  },
  methods: {
    handleEdit(row) {},
    handleDelete(row) {},
  },
};
</script>

<style lang="less" scoped>
.demo-table-expand {
  font-size: 0;
}

.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}

.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>