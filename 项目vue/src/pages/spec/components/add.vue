<template>
  <div class="add">
    <el-dialog :title="info.title" :visible.sync="info.show">
      <el-form :model="form">
        <el-form-item label="规格名称" label-width="80px">
          <el-input v-model="form.specsname" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="规格属性" v-for="(item,index) in attrArr" :key="index" label-width="80px">
          <el-input v-model="item.value" autocomplete="off"></el-input>
          <el-button type="primary" v-if="index==0" @click="addArr()">新增规格属性</el-button>
          <el-button type="danger" v-else @click="delAttr()">删除</el-button>
        </el-form-item>

        

        <el-form-item label="状态" label-width="80px">
          <el-switch v-model="form.status" :active-value="1" :inactive-value="2"></el-switch>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
          <el-button type="danger"  @click="update()">修 改</el-button>
          <el-button type="primary" v-if="info.isAdd" @click="add()">添 加</el-button>
          
        </div>
    </el-dialog>
  </div>
</template>
<script>
import { warningAlert,successAlert } from "../../../unit/alert";
import {requestSpecAdd,requestSpecDetail,requestSpecUpdate,}  from "../../../unit/request"
import { mapActions } from 'vuex';
export default {
  components: {},
  props: ["info"],
  data() {
    return {
       attrArr:[
         {
           value:""
         },
       ],
      form: {
        specsname: "",
        attrs:"",
       status: 1
      }
    };
  },
  methods: {
    ...mapActions({
    requestList:"spec/requestList",
    requestTotal:"spec/requestTotal"
    }),
     // 新增规格属性
      addArr(){
           this.attrArr.push({
             value:""
           })
      },
      // 删除规格属性
       delAttr(index){
         this.attrArr.splice(index,1)
       },
      //  置空
      empty(){
         this.form = {
          specsname: "",
          attrs:'',
          status: 1
         };
         this.attrArr = [
           {
             value:""
           }
         ]
      },
    //  取消
       cancel(){
        this.info.show=false;
        if(!this.info.isAdd){
          this.empty();
        }
      },
      // 添加
     add(){
       if(this.attrArr.some(item=>item.value=="")){
         warningAlert("属性规格均不能为空")
         return
       }
   
        this.form.attrs= JSON.stringify(this.attrArr.map(item=>item.value))
        // 发起添加请求
        requestSpecAdd(this.form).then((res)=>{
              if(res.data.code==200){
                successAlert(res.data.msg);
                // 清空
                this.empty();
                // 弹框消失
                this.cancel();
                // 重新获取列表数据
                this.requestList();
                // 重新获取总的数量
                this.requestTotal()
              }else{
                warningAlert(res.data.msg)
              }
        })
     },

      //  获取详情
      getDetail(id){
        // ajax
        requestSpecDetail({id:id}).then((res)=>{
        
        this.form = res.data.list[0];
        this.attrArr = JSON.parse(res.data.list[0].attrs).map(item=>{
          return {
            value:item
          }
        })
         
        })
      },
      // 点击了修改
      update(){
            if(this.attrArr.some(item=>item.value=="")){
         warningAlert("属性规格均不能为空")
         return
       }
   
        this.form.attrs= JSON.stringify(this.attrArr.map(item=>item.value))
        requestSpecUpdate(this.form).then((res)=>{
            if (res.data.code == 200) {
          successAlert("修改成功");
          this.empty();
          this.cancel();
          this.requestList();
        } else {
          warningAlert(res.data.msg);
        }
        })
      }
    
     
  },
  mounted() {
     
  }
};
</script>
<style scoped lang="stylus">
.add >>> .el-form-item__content{
  display: flex !important;
}

.add >>> .el-input{
  flex: 1;
}

.add >>> .el-button{
  width: auto;
}
</style>