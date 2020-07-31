<template>
  <div>
    <el-table
      :data="list"
      style="width: 100%;"
      row-key="id"
      border
      default-expand-all
      :tree-props="{children:'children',hasChildren:'hasChildren'}"
    >
      <el-table-column type="expand"></el-table-column>
      <el-table-column label="分类编号" prop="id" width="180"></el-table-column>
      <el-table-column label="分类名称" prop="catename"></el-table-column>
      <el-table-column label="图片" prop="icon">
        <template slot-scope="scope">
          <img :src="$imgPre+scope.row.img" alt />
        </template>
      </el-table-column>
      <el-table-column label="状态" prop="status">
        <template slot-scope="scope">
          <el-button type="primary" v-if="scope.row.status==1">启用</el-button>
          <el-button type="info" v-else>禁用</el-button>
        </template>
      </el-table-column>
      <el-table-column label="操作" prop="desc">
        <template slot-scope="scope">
          <el-button type="primary" @click="edit(scope.row.id)">编辑</el-button>
          <del-btn type="danger" @confirm="del(scope.row.id)">删除</del-btn>
          <!-- <del-btn @confirm="scope.row.id"></del-btn> -->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { requestCateDelete } from "../../../unit/request";
import { successAlert, warningAlert } from "../../../unit/alert";
export default {
  components: {},
  computed: {
    ...mapGetters({
      list: "cate/list"
    })
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      requestList: "cate/requestList"
    }),
    // 删除
    del(id) {
      requestCateDelete({ id: id }).then(res => {
        if (res.data.code == 200) {
          successAlert(res.data.msg);
          this.requestList();
        } else {
          warningAlert(res.data.msg);
        }
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
    edit(id) {
      this.$emit("edit", id);
    }
  },
  mounted() {
    this.requestList();
  }
};
</script>
<style>
img {
  width: 100px;
  height: 100px;
}
</style>