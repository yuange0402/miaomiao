import Vue from 'vue'
import Router from 'vue-router'
import movieRouter from './movie'
import cinemaRouter from './cinema'
import mineRouter from './mine'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      movieRouter,
      cinemaRouter,
      mineRouter,
      {
          /**
           * 这也是一个路由，但是他是在最后一个位置，
           * 如果前边匹配到，那就不会往后边去匹配了，就不会用到这个路由了，
           * 如果前边都没有匹配到，那么到最后这个一定会被匹配到，
           * 那么会被重定向到一个固定的页面。
           * **/
          path:'/*',
          redirect:'/movie'
      }

  ]
})
