import axios  from "axios"
import qs from "qs"
const baseUrl = "/api"


//请求拦截
// axios.interceptors.request.use(config => {
//      if (config.url != baseUrl + '/api/userlogin') {
//          config.headers.authorization = store.state.user.token;
//      }
//      return config
//  })
 

// 响应拦截
 axios.interceptors.response.use(res=>{
      console.group("本次路径"+res.config.url)
      console.log(res)
      console.groupEnd()
      return res
 })



//  菜单添加
export const requestMenuAdd=(params)=>{
     return axios({
          url:baseUrl+"/api/menuadd",
          method:"post",
          data:qs.stringify(params)
     })
}

// 菜单列表接口
export const requestMenuList=(params)=>{
     return axios({
          url:baseUrl+"/api/menulist",
          method:"get",
          params:params
     })
}

// 菜单某一条数据的方法
export const requestMenuDetail=(params)=>{
     return axios({
          url:baseUrl+"/api/menuinfo",
          method:"get",
          params
     })
}

// 菜单的修改
export const requestMenuUpdate=(params)=>{
     return axios({
          url:baseUrl+"/api/menuedit",
          method:"post",
          data:qs.stringify(params)
     })
}

// 菜单删除
export const requestMenuDelete=(params)=>{
     return axios({
          url:baseUrl+"/api/menudelete",
          method:"post",
          data:qs.stringify(params)
     })
}

// 角色添加
export const requestRoleAdd=params=>axios({
        url:baseUrl+"/api/roleadd",
        method:"post",
        data:qs.stringify(params)
})

// 角色列表
export const requestRoleList=params=>axios({
     url:baseUrl+"/api/rolelist",
     method:"get",
})

// 角色获取
export const requestRoleDetail=params=>axios({
     url:baseUrl+"/api/roleinfo",
     method:"get",
    params
})

// 角色修改
export const requestRoleUpdate=params=>axios({
     url:baseUrl+"/api/roleedit",
     method:"post",
     data:qs.stringify(params)
})

// 角色删除
export const requestRoleDelete=params=>axios({
     url:baseUrl+"/api/roledelete",
     method:"post",
     data:qs.stringify(params)
})

// 


// 管理员添加
export const requestManageAdd=params=>axios({
     url:baseUrl+"/api/useradd",
     method:"post",
     data:qs.stringify(params)
})

// 管理员总数
export const requestManageCount=()=>axios({
     url:baseUrl+"/api/usercount",
     method:"get",
   })
   
// 管理员列表
export const requestManageList=params=>axios({
  url:baseUrl+"/api/userlist",
  method:"get",
  params
})

// 管理员获取
export const requestManageDetail=params=>axios({
  url:baseUrl+"/api/userinfo",
  method:"get",
 params
})

// 管理员修改
export const requestManageUpdate=params=>axios({
  url:baseUrl+"/api/useredit",
  method:"post",
  data:qs.stringify(params)
})

// 管理员删除
export const requestManageDelete=params=>axios({
  url:baseUrl+"/api/userdelete",
  method:"post",
  data:qs.stringify(params)
})

// 管理员登录
export const requestLogin =params=>axios({
     url:baseUrl+"/api/userlogin",
     method:"post",
     data:qs.stringify(params)
   })


   // 分类添加
export const requestCateAdd=(params)=>{
     var formData = new FormData()
     for(let i in params){
          formData.append(i,params[i])
     }
     return axios({
          url:baseUrl+"/api/cateadd",
          method:"post",
          data:formData
     })
}

// 分类列表接口
export const requestCateList=(params)=>{
     return axios({
          url:baseUrl+"/api/catelist",
          method:"get",
          params:params
     })
}

// 分类某一条数据的方法
export const requestCateDetail=(params)=>{
     return axios({
          url:baseUrl+"/api/cateinfo",
          method:"get",
          params
     })
}

//分类的修改
export const requestCateUpdate=(params)=>{
     var formData = new FormData()
     for(let i in params){
          formData.append(i,params[i])
     }
     return axios({
          url:baseUrl+"/api/cateedit",
          method:"post",
          data:formData
     })
}

// 分类删除
export const requestCateDelete=(params)=>{
     return axios({
          url:baseUrl+"/api/catedelete",
          method:"post",
          data:qs.stringify(params)
     })
}


// 商品规格添加
export const requestSpecAdd = (params)=>{
     return axios({
            url:baseUrl+"/api/specsadd",
            method:"post",
            data:qs.stringify(params)
     })
}
// 商品规格总数
export const requestSpecCount = ()=>{
     return axios({
            url:baseUrl+"/api/specscount",
            method:"get",
            params
     })
}

// 商品规格列表
export const requestSpecList = (params)=>{
     return axios({
            url:baseUrl+"/api/specslist",
            method:"get",
            params:params
     })
}

// 商品规格详情
export const requestSpecDetail = (params)=>{
     return axios({
            url:baseUrl+"/api/specsinfo",
            method:"get",
            params
     })
}

// 商品规格修改
export const requestSpecUpdate = (params)=>{
     return axios({
            url:baseUrl+"/api/specsedit",
            method:"post",
            data:qs.stringify(params)
     })
}

// 商品规格删除
export const requestSpecDelete = (params)=>{
     return axios({
            url:baseUrl+"/api/specsdelete",
            method:"post",
            data:qs.stringify(params)
     })
}




// 商品添加
export const requestGoodsAdd = (params)=>{
     let formData = new FormData()
     for(let i in params){
          formData.append(i,params[i])
     }
     return axios({
            url:baseUrl+"/api/goodsadd",
            method:"post",
            data:formData
     })
}
// 商品总数
export const requestGoodsCount = (params)=>{
     return axios({
            url:baseUrl+"/api/goodscount",
            method:"get",
            params
     })
}

// 商品列表
export const requestGoodsList = (params)=>{
     return axios({
            url:baseUrl+"/api/goodslist",
            method:"get",
            params:params
     })
}

// 商品详情
export const requestGoodsDetail = (params)=>{
     return axios({
            url:baseUrl+"/api/goodsinfo",
            method:"get",
            params
     })
}

// 商品修改
export const requestGoodsUpdate = (params)=>{
     let formData = new FormData()
     for(let i in params){
          formData.append(i,params[i])
     }
     return axios({
            url:baseUrl+"/api/goodsedit",
            method:"post",
            data:formData
     })
}

// 商品删除
export const requestGoodsDelete = (params)=>{
     return axios({
            url:baseUrl+"/api/goodsdelete",
            method:"post",
            data:qs.stringify(params)
     })
}



// 会员列表
export const requestMemberList = (params)=>{
     return axios({
            url:baseUrl+"/api/memberlist",
            method:"get",
            params:params
     })
}

// 会员详情
export const requestMemberDetail = (params)=>{
     return axios({
            url:baseUrl+"/api/memberinfo",
            method:"get",
            params
     })
}

// 会员修改
export const requestMemberUpdate = (params)=>{
     
     return axios({
            url:baseUrl+"/api/memberedit",
            method:"post",
            data:qs.stringify(params)
     })
}




// 轮播图添加
export const requestBannerAdd = (params)=>{
    
     return axios({
            url:baseUrl+"/api/banneradd",
            method:"post",
            data:qs.stringify(params)
     })
}

// 轮播图列表
export const requestBannerList = (params)=>{
     return axios({
            url:baseUrl+"/api/bannerlist",
            method:"get",
            params
     })
}

// 轮播图详情
export const requestBannerDetail = (params)=>{
     return axios({
            url:baseUrl+"/api/bannerinfo",
            method:"get",
            params
     })
}

// 轮播图修改
export const requestBannerUpdate = (params)=>{
     
     return axios({
            url:baseUrl+"/api/banneredit",
            method:"post",
            data:qs.stringify(params)
     })
}

// 轮播图删除
export const requestBannerDelete = (params)=>{
     return axios({
            url:baseUrl+"/api/bannerdelete",
            method:"post",
            data:qs.stringify(params)
     })
}

