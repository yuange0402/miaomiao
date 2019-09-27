<template>
   <div>
       <Headerr title="喵喵电影"/>

       <div id="content">
           <div class="movie_menu">
               <router-link tag="div" to="/movie/city" class="city_name">
                   <span>{{$store.state.city.nm}}</span><i class="iconfont icon-lower-triangle"></i>
               </router-link>
               <div class="hot_swtich">
                   <router-link to="/movie/nowPlaying" tag="div" class="hot_item">正在热映</router-link>
                   <router-link tag="div" to="/movie/comingSoon" class="hot_item">即将上映</router-link>
               </div>
               <router-link tag="div" to="/movie/search" class="search_entry">
                   <i class="iconfont icon-sousuo"></i>
               </router-link>
           </div>
           <!--二级路由,用来加载子路由的地方-->
           <keep-alive>
               <router-view></router-view>
           </keep-alive>
       </div>


       <AlterMsg></AlterMsg>



       <TabBar/>

   </div>
</template>
<script>

//    在组件里面引入另外的组件，这个组件是复用的
    import Headerr from '@/components/Header';
    import TabBar from '@/components/TabBar';
    import AlterMsg from '@/components/js/Message';

//   把引入进来的第三方组件，注册到自己的组件里面就可以直接在自己的模板里面使用了
    export default {
       name:'movie',
        components: {
            Headerr,
            TabBar,
            AlterMsg


        }
    }




</script>
<style scoped>

    #content .movie_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-between; align-items:center; background:white; z-index:10;}
    .movie_menu .city_name{ margin-left: 20px; height:100%; line-height: 45px;}
    .movie_menu .city_name.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
    .movie_menu .hot_swtich{ display: flex; height:100%; line-height: 45px;}
    .movie_menu .hot_item{ font-size: 15px; color:#666; width:80px; text-align:center; margin:0 12px; font-weight:700;}
    .movie_menu .hot_item.router-link-active{ color:red; border-bottom: 2px #ef4238 solid;}
    .movie_menu .search_entry{ margin-right:20px; height:100%; line-height: 45px;}
    .movie_menu .search_entry.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
    .movie_menu .search_entry i{  font-size:24px; color:red;}
</style>