import Vue from 'vue'
import App from './App.vue'
import router from './routers/index'
import store from './stores/index'
import axios from 'axios';


Vue.prototype.axios = axios;

//vue 过滤器，主要是理解出进去的两个参数就可以了
//第一个 参数 url 意思是 dom上面进行渲染的数据，然后当你调用过滤器的时候他会把这个参数放进去，你可以在方法里面获取这个数据
//然后对这个数据进行处理.
//第二个参数是你自己对过滤器这个方法传递的参数.

//做成全局组件就可以直接使用了，不然的话需要在每个组件里面引入和注册，很麻烦。
import Scroller from '@/components/Scroller';
Vue.component('Scroller',Scroller);

Vue.filter('setWH',(url,arg)=>{
   return url.replace(/w\.h/,arg)
})


Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
