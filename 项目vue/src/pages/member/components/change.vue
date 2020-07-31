<template>
  <div>
    <el-dialog :title="info.title" :visible.sync="info.show">
      <el-form :model="form">
        <el-form-item label="手机号" label-width="80px">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
               
        <el-form-item label="昵称" label-width="80px">
          <el-input v-model="form.nickname"></el-input>
        </el-form-item>

        <el-form-item label="密码" label-width="80px">
          <el-input v-model="form.password" show-password></el-input>
        </el-form-item>

        <el-form-item label="状态" label-width="80px">
          <el-switch v-model="form.status" :active-value="1" :inactive-value="2"></el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="update()">修 改</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  props: ["info"],
  components: {},
  data() {
    return {
      form: {
        uid:"",
        nickname:"",
        phone:"",
        password:"",
        status: 1
      }
    };
  },
  watch:{
    detail(obj){
      this.form = obj
    }
  },
  computed:{
    ...mapGetters({
      detail:'member/detail'
    })
  },
  methods: {
    ...mapActions({
      requestEdit:'member/requestEdit'
    }),
    update() {
      this.info.show = false
      this.requestEdit(this.form)
    }
  },
  mounted() {}
};
</script>
<style scoped>
</style>