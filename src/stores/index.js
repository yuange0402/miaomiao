import Vue from 'vue'
import Vuex from 'vuex'

//引入子状态
import city from './city'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
    //其他的文件暴露，然后引入，然后在这里注册。
    modules:{
       //key 和 value 都是一样的，那么只需要写一个就可以了
       city
    }
})
