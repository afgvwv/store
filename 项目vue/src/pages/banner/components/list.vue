<template>
<div>
    <el-table :data="list" style="width: 100%">
      <el-table-column prop="uid" label="轮播图标题" width="180"></el-table-column>
      <el-table-column prop="nickname" label="图片" width="180"></el-table-column>
      
      <el-table-column label="状态">
        <template slot-scope="scope">
          <el-button v-if="scope.row.status==1" type="primary">启用</el-button>
          <el-button v-else type="info">禁用</el-button>
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
         <el-button type="primary" @click="dialogFormVisible(scope.row.id)" >编辑</el-button>
          <del-btn @confirm="del(scope.row.uid)"></del-btn>
        </template>
      </el-table-column>

    
    </el-table>
</div>
</template>
<script>
import {mapGetters,mapActions}  from "vuex"
export default {
    computed:{
      ...mapGetters({
           list: "member/list",
      })
    },
    methods:{
     ...mapActions({
         "requestList":"member/requestList",
         requestOne:'member/requestOne'
     }),
    //  aa(){
    //    console.log('aaaa')
    //  },
     dialogFormVisible(id){
       console.log(id);
       this.$emit('changed')
       this.requestOne({uid:id})
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
</style>