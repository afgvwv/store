<template>
<div>
    <el-table :data="list" style="width: 100%">
      <el-table-column prop="title" label="轮播图标题" width="180"></el-table-column>
      <el-table-column prop="img" label="图片" width="180">
         <template slot-scope="scope">
          <img :src="$imgPre+scope.row.img" alt />
        </template>
      </el-table-column>
          
      <el-table-column label="状态">
        <template slot-scope="scope">
          <el-button v-if="scope.row.status==1" type="primary">启用</el-button>
          <el-button v-else type="info">禁用</el-button>
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
         <el-button type="primary" @click="edit(scope.row.id)" >编辑</el-button>
          <del-btn @confirm="del(scope.row.id)"></del-btn>
        </template>
      </el-table-column>

    
    </el-table>
   
</div>
</template>
<script>
import {mapGetters,mapActions}  from "vuex"
import { requestBannerDelete}  from "../../../unit/request"
import {successAlert,warningAlert} from "../../../unit/alert"
export default {
    computed:{
      ...mapGetters({
           list: "banner/list",
      })
    },
    methods:{
     ...mapActions({
         "requestList":"banner/requestList",
          requestOne:"banner/requestOne",
     }),
    //  aa(){
    //    console.log('aaaa')
    //  },
     edit(id){
       this.$emit('edit',id)
       this.requestOne({id:id})
     },
     del(id){
          requestBannerDelete({ id: id }).then((res) => {
        if (res.data.code == 200) {
          successAlert("删除成功");
          this.requestList();
        } else {
          warningAlert(res.data.msg);
        }
      });
     }
    },
 components:{
},
 data(){
return {

}
   },
 mounted(){
      this.requestList();
 },}
</script>
<style scoped>
img{
  width: 120px;
      height: 120px;
}
</style>