<template>
<div>
    <el-button type="primary" @click="add()">添加</el-button>
    
    <!-- 添加弹框 -->
    <v-add :info="info" res="add"></v-add>

    <!-- 列表 -->
    <v-list></v-list>
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
      isAdd:true
   }
}
   },
methods:{
   add(){
      this.info.show = true
    },
    edit(id){
      this.info.show = !this.info.show
      this.info.isAdd = false;
       this.$refs.add.getDetail(id);
    }
},
 mounted(){},}
</script>
<style scoped>
</style>