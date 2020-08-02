import {requestBannerList,requestBannerUpdate,requestBannerDetail} from "../../unit/request"
const state = {
// 列表数据
    list:[],
    // 获取详情
    detail:{}
}
const mutations={
    // 修改数据
    changeList(state,arr){
        state.list = arr
    },
    requestOne(state,arr){
        state.detail = arr
    },
    
}
const actions={
      requestList(context){
        //   发起请求
        requestBannerList().then(res=>{
              context.commit("changeList",res.data.list)
        })
      },
     // 获取详情数据
     requestOne(context,id){
        requestBannerDetail(id).then(res=>{
            context.commit("requestOne",res.data.list)
        })
     },
    //   添加更新后的数据
    requestEdit(context,update){
        requestBannerUpdate(update).then(res=>{
            context.dispatch('requestList')
        })
    },
   
}
const getters ={
    list(state){
        return state.list
    },
    detail(state){
        return state.detali
    }
}
export default{
   state,
   mutations,
   actions,
   getters,
   namespaced:true
}