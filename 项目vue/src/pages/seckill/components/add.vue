<template>
  <div>
    <el-dialog :title="info.title" :visible.sync="info.show" @click="add()">
      <el-form :model="form">
        <el-form-item label="活动名称" label-width="80px">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>

     <el-form-item label="活动期限" label-width="80px">
          <div class="block">
            <!-- <span class="demonstration">默认</span> -->
            <el-date-picker
              v-model="value1"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            ></el-date-picker>
          </div>
        </el-form-item>

        <el-form-item label="一级分类" label-width="80px">
          <el-select v-model="form.first_cateid" @change="changeFirstCateId()">
            <el-option label="--请选择--" value disabled></el-option>
            <!-- 动态数据 -->
            <el-option v-for="item in cateList" :key="item.id" :label="item.catename" :value="item.id"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="二级分类" label-width="80px">
          <el-select v-model="form.second_cateid" @change="changeSecondCateId()">
            <el-option label="--请选择--" value disabled></el-option>
            <!-- 动态数据 -->
            <el-option v-for="item in secondCateArr" :key="item.id" :label="item.catename" :value="item.id"></el-option>
          </el-select>
        </el-form-item>
         

       <el-form-item label="商品" label-width="80px">
          <el-select v-model="form.goodsid">
            <el-option label="--请选择--" value disabled></el-option>

            <!-- 动态数据 -->
            <el-option
              v-for="item in newGoodsList"
              :key="item.id"
              :label="item.goodsname"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="状态" label-width="80px">
          <el-switch v-model="form.status" :active-value="1" :inactive-value="2"></el-switch>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel()">取 消</el-button>
        <el-button type="primary" @click="add(form)" v-if="info.isAdd">添 加</el-button>
        <el-button type="primary" @click="update" v-else>修 改</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import {
  requestSeckillAdd,
  requestSeckillDetail,
  requestSeckillUpdate,
requestGoodsList
} from "../../../unit/request";
import { successAlert, warningAlert } from "../../../unit/alert";
import { mapGetters, mapActions } from "vuex";
export default {
  props: ["info"],
  components: {},
  computed: {
    ...mapGetters({
       list: "seckill/list",
      //商品一级分类编号first_cateid
      cateList: "cate/list",
      //商品二级分类编号second_cateid
      specList: "spec/list",
      //商品编号goodsid
      goodsList: "goods/list",
    })
  },
  data() {
    return {
        value1:[],
         newGoodsList: [],
       //  二级分类的数组
      secondCateArr: [],
      form: {
        title: "",
        begintime: "",
        endtime: "",
        first_cateid: "",
        second_cateid: "",
        goodsid: "",
      
        status: 1
      }
    };
  },
  methods: {
    ...mapActions({
      requestSeckillList: "Seckill/requestList",
      //获取分类列表
      requestCateList: "cate/requestList",
      //获取规格列表
      requestSpecList: "spec/requestList",
      //获取商品列表
      requestGoodsList: "goods/requestList",
    }),
    changeSecondCateId(){
       requestGoodsList({
        fid: this.form.first_cateid,
        sid: this.form.second_cateid,
      }).then((res) => {
        this.newGoodsList = res.data.list;
      });
    },

    //  改变事件
    changeFirstCateId(bool){
         let index = this.cateList.findIndex((item)=>item.id==this.form.first_cateid)
         console.log(index);
        this.secondCateArr = this.cateList[index].children;
        if(!bool){
        this.form.second_cateid = ""
        }
    },
    //  重置内容
    empty() {
      this.form = {
        title: "",
        img: null,
        status: 1
      };
      
    },
    cancel() {
      this.info.show = false;
    },
    add() {
    if(valid){
       this.form.begintime = this.value1[0].getTime();
          this.form.endtime = this.value1[1].getTime();
           requestSeckillAdd(this.form).then(res=>{
        if (res.data.code == 200) {
          successAlert(res.data.msg);
          this.empty();
          this.cancel();
          // 再次请求list数据
          this.requestList();
        } else {
          warningAlert(res.data.msg);
        }
      });
    }
     
    },
   

    //  获取某一条数据
    getDetail(id) {
      requestSeckillDetail({ id: id }).then(res => {
        this.form = res.data.list;
       this. changeFirstCateId(true);
        this.changeSecondCateId();
         this.value1 = [
          new Date(res.data.list.begintime * 1),
          new Date(res.data.list.endtime * 1),
        ];
        this.form.id = id;
      });
    },
    // 修改
    update() {
     requestSeckillUpdate(this.form).then(res => {
       if(valid){
         if (res.data.code == 200) {
          successAlert(res.data.msg);
          this.empty();
          this.cancel();
          this.requestEdit();
        } 
       }
        else {
          warningAlert(res.data.msg);
        }
      });
    }
  },
  mounted() {
     if (this.cateList.length == 0) {
      this.requestCateList();
    }
    this.requestSpecList()
    this.requestSeckillList()
  },
  
};
</script>
<style scoped lang="stylus">

</style>