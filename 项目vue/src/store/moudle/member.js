import {requestMemberList,requestMemberDetail,requestMemberUpdate} from "../../unit/request"
const state = {
// 列表数据
    list:[],
    detail:{}
}
const mutations={
    // 修改数据
    changeList(state,arr){
        state.list = arr
    },
    requestOne(state,arr){
        state.detail = arr
    }
}
const actions={
      requestList(context){
        //   发起请求
        requestMemberList().then(res=>{
              context.commit("changeList",res.data.list)
        })
      },
    //   获取详情数据
      requestOne(context,id){
        requestMemberDetail(id).then(res=>{
            context.commit('requestOne',res.data.list)
        })
      },
    //   点击编辑获取更新后的数据
      requestEdit(context,payload){
        requestMemberUpdate(payload).then(res=>{
            context.dispatch('requestList')
        })
      },
      requestDel(context,id){
          delete(id).then(res=>{
              context.dispatch('requestList')
          })
      }
}
const getters ={
    list(state){
        return state.list
    },
    detail(state){
        return state.detail
    }
}
export default{
   state,
   mutations,
   actions,
   getters,
   namespaced:true
}