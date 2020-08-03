<template>
  <el-container class="page">
    <el-aside width="200px">
      <el-menu
        class="el-menu-vertical-demo"
        background-color="#20222a"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
        :unique-opened="true"
      >
        <el-menu-item index="/home">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <!-- 有目录的循环 -->
        <el-submenu v-show="hasChildern"  :index="item.id+''" v-for="item in user.menus" :key="item.title">
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{item.title}}</span>
          </template>
          <el-menu-item :index="i.url+''" v-for="i in item.children" :key="i.id">{{i.title}}</el-menu-item>
         
        </el-submenu>
        <!-- 没有目录只有菜单 -->
       <el-menu-item v-show="!hasChildern"  index="i.url" v-for="i in user.menus" :key="i.id">
          <span slot="title">{{i.title}}</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <div class="header-con">
          <span>{{user.username}}</span>

          <el-button type="primary" @click="exit()">退出</el-button>
        </div>
      </el-header>
      <el-main>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">{{$route.name}}</a></el-breadcrumb-item>
          <el-breadcrumb-item>{{$route.name}}</el-breadcrumb-item>
        
         
        </el-breadcrumb>
        <router-view class="view"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import {mapGetters,mapActions} from "vuex"
export default {
computed:{
       ...mapGetters({
         user:"user"
       }),
      //  用来判断是否有目录
       hasChildern(){
        return  this.user.menus[0].children?true:false
       }
},
 methods: {
     ...mapActions({
       changeUser:"changeUser"
     }),
     // 退出
         exit(){
               this.changeUser(null)
              this.$router.push("/login")
         
         }
  },
  data() {
    return {
      
    };
  },
 
  mounted() {},
};
</script>
<style scoped>
.page {
  height: 100vh;
}
.el-aside {
  background: #20222a;
}
.el-header {
  background: #b3c0d1;
  overflow: hidden;
}
.header-con {
  float: right;
}
.header-con span {
  line-height: 60px;
  color: #fff;
}
.view{
   padding-top: 20px;
}
</style>