<template>
  <div class="content-container" dirction="vertical">
    <!-- input  -->

    <div></div>

    <!-- button -->
    <div></div>

    <!--   list -->
    <div>
      <el-table :data="goodsData" tooltip-effect="dark" style="width: 100%">
        <el-table-column lable="商品" width="100">
          <template #default="scope">
            <div style="text-align: center">
              <el-image
                :src="scope.row.img"
                style="width: 60px; height: 100px"
              ></el-image>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="价格" width="100" prop="price">
        </el-table-column>
        <el-table-column label="销量" width="100" prop="sellCount">
        </el-table-column>
        <el-table-column label="库存" width="100" prop="count">
        </el-table-column>
        <el-table-column label="退款数量" width="100" prop="back">
        </el-table-column>
        <el-table-column label="退款金额" width="100" prop="backPrice">
        </el-table-column>
        <el-table-column label="操作" width="100" prop="name">
          <template #default="scope">
            <el-button
              @click="operate(scope.row)"
              :type="scope.row.state ? 'danger' : 'success'"
              >{{ scope.row.state ? "下架" : "上架" }}</el-button
            >
          </template>
        </el-table-column>
        <el-table-column label="管理员" width="100" prop="owner">
        </el-table-column>
        <el-table-column label="更新时间" width="200" prop="time">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import Mock from "../../mock/Mock";
import { ElMessage } from "element-plus";

export default {
  data() {
    return {
      goodsData: [],
      //模拟分类数据
      categorys: ["全部", "男装", "女装"],
      queryParams: {
        name: "",
        id: "",
        category: "",
        sellMode: 2, //0 否 1是 2 全部
        expMode: 2,
      },
    };
  },
  computed: {
    sellModeString: {
      get() {
        if (this.queryParams.sellMode == 2) {
          return "全部";
        }
        return this.queryParams.sellMode == 0 ? "否" : "是";
      },
      set(val) {
        this.queryParams.sellMode = val;
      },
    },
    expModeString: {
      get() {
        if (this.queryParams.expMode == 2) {
          return "全部";
        }
        return this.queryParams.expMode == 0 ? "否" : "是";
      },
      set(val) {
        this.queryParams.expMode = val;
      },
    },
  },
  //组件挂载时获取数据
  mounted() {
    this.goodsData = Mock.getGoods(this.$route.params.type);
  },

  beforeRouteUpdate(to) {
    this.goodsData = Mock.getGoods(to.params.type);
  },
  methods: {
    operate(item) {
      const str = JSON.stringify(item);
      ElMessage({
        showClose: true,
        message: str,
        type: "success",
      });
      item.state = !item.state;
    },
  },
};
</script>
