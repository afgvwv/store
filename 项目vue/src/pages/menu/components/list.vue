<template>
  <div>
    <el-table :data="list" style="width: 100%;"
       row-key="id"
       border
       default-expand-all
       :tree-props="{children:'children',hasChildren:'hasChildren'}"
    >
      <el-table-column type="expand"></el-table-column>
      <el-table-column label="菜单编号" prop="id" width="180"></el-table-column>
      <el-table-column label="菜单名称" prop="title"></el-table-column>
      <el-table-column label="菜单图标" prop="icon">
        <template slot-scope="scope">
          <i :class="scope.row.icon"></i>
        </template>
      </el-table-column>
      <el-table-column label="菜单地址" prop="url"></el-table-column>
      <el-table-column label="状态" prop="status">
        <template slot-scope="scope">
          <el-button type="primary" v-if="scope.row.status==1">启用</el-button>
          <el-button type="info" v-else>禁用</el-button>
        </template>
      </el-table-column>
      <el-table-column label="操作" prop="desc">
        <template slot-scope="scope">
          <el-button type="primary" @click="edit(scope.row.id)">编辑</el-button>
          <el-button type="danger" @click="del(scope.row.id)">删除</el-button>
          <!-- <del-btn @confirm="scope.row.id"></del-btn> -->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { requestMenuDelete } from "../../../unit/request";
import { successAlert, warningAlert } from '../../../unit/alert';
export default {
  components: {},
  computed: {
    ...mapGetters({
      list: "menu/list",
    }),
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      requestList: "menu/requestList",
    }),
    // 删除
    del(id) {
      this.$confirm("你确定要删除吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          requestMenuDelete({ id: id }).then(res=>{
            if(res.data.code==200){
              successAlert(res.data.msg)
              this.requestList()
            }else{
              warningAlert(res.data.msg)
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    // 封装的删除按钮
      // del(id){
      //    requestMenuDelete({ id: id }).then(res=>{
      //       if(res.data.code==200){
      //         successAlert(res.data.msg)
      //         this.requestList()
      //       }else{
      //         warningAlert(res.data.msg)
      //       }
      //     });
      // },

    // 点击了编辑按钮
    edit(id){
        this.$emit("edit",id)
    }

  },
  mounted() {
    this.requestList();
  },
};
</script>
<style scoped>
</style>