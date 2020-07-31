import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

import {state,mutations,getters} from "./mutations"
import actions from "./actions"
import menu from "./moudle/menu"
import role from "./moudle/role"
import manage from "./moudle/manage"
import cate from "./moudle/cate"
import spec from "./moudle/spec"
import goods from "./moudle/goods"
import member from "./moudle/member"

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules:{
        menu,
        role,
        manage,
        cate,
        spec,
        goods,
        member
    }
})