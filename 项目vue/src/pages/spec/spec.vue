<template>
<div>
 <el-button type="primary" @click="add()">添加</el-button>
   <!-- 添加弹框 -->
   <v-add :info='info' ref='add'></v-add>

 <!-- 列表 -->
 <v-list @edit="edit($event)"> </v-list>

</div>
</template>
<script>
import vAdd from "./components/add"
import vList from "./components/list"
export default {
 components:{
    vAdd,
    vList
},
 data(){
return {
     info:{
         show:false,
         title:"添加商品规格",
         isAdd:true
     }
}
   },
methods:{
   add(){
       this.info.show= true
       this.info.title = "添加商品规格"
       this.info.isAdd = true
   },
   edit(id){
        this.info.show = true;
      this.info.title = "编辑商品规格";
      this.info.isAdd = false;
      
      this.$refs.add.getDetail(id);
   }
},
 mounted(){},}
</script>
<style scoped>
</style>