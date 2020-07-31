<template>
<div>

   <!-- 列表 -->
    <v-list @changed='change'></v-list>
    <!--修改弹框  -->
    <v-change :info="info" v-if="info.show" ></v-change>
</div>
</template>
<script>
import vList from "./components/list.vue"
import vChange from "./components/change.vue"
export default {
 components:{
      vList,
      vChange
},
 data(){
return {
      info:{
         // 控制弹框出现状态
         show:false,
         title:"会员修改",
         
      }
}
   },
methods:{
   change(){
      this.info.show = !this.info.show
   }
},
 mounted(){},}
</script>
<style scoped>
</style>