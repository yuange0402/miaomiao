<template>

    <div>

       <Header title="喵喵影院"/>

        <div id="content">
            <div class="cinema_menu">
                <router-link tag="div" to="/cinema/allCity" class="city_switch">
                    全城 <i class="iconfont icon-lower-triangle"></i>
                </router-link>
                <router-link tag="div" to="/cinema/allCity" class="brand_swtich">
                    品牌 <i class="iconfont icon-lower-triangle"></i>
                </router-link>
                <router-link tag="div" to="/cinema/" class="feature_switch">
                    特色 <i class="iconfont icon-lower-triangle"></i>
                </router-link>
            </div>
            <!--二级路由,用来加载子路由的地方-->
            <keep-alive>
                <router-view></router-view>
            </keep-alive>

        </div>




        <TabBar/>
    </div>

</template>
<script>
    import Header from '@/components/Header';
    import TabBar from '@/components/TabBar';


    export default{
        name:'cinema',
        components:{
            Header,
            TabBar
        }
    }




</script>
<style scoped>
    #content .cinema_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around; align-items:center; background:white;}
    #content .cinema_menu .city_switch.router-link-active{color: #007aff;}
</style>