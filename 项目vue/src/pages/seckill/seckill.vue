<template>
<div>
    <el-button type="primary" @click="add()">添加</el-button>
    
    <!-- 添加弹框 -->
    <v-add :info="info" ref="add"></v-add>

    <!-- 列表 -->
    <v-list @edit="edit"></v-list>
</div>
</template>
<script>
import vAdd from "./components/add.vue"
import vList from "./components/list.vue"
export default {
 components:{
    vAdd,
    vList
},
 data(){
return {
   info:{
      show:false,
      title:"",
      isAdd:true,
       title: "活动添加",
   }
}
   },
methods:{
   add(){
      this.info.show = true;
      this.info.isAdd = true;
      this.info.title = "活动添加";
    },
    edit(id){
      this.info.show = true
      this.info.isAdd = false;
       this.info.title = "活动编辑";
       this.$refs.add.getDetail(id);
    }
},
 mounted(){},}
</script>
<style scoped>
</style>