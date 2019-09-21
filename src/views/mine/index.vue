<template>
    <div>
        <Header title="我的喵喵"></Header>
        <div class="content">
           <Login></Login>
        </div>
        <TabBar></TabBar>
    </div>
</template>
<script>
/**
 * 同样是tapbar vue 和 mui 是两种不同的解决方案
 * 1 vue是子页面的形式，就是说这些上边和下边是共用的，所以不变化，中间变化的动态数据是子页面。
 * 2 vue 的解决方案是把复用的模板抽取出来，然后不同的页面去调用这些模板。
 * **/


    import Header from '@/components/Header';
    import TabBar from '@/components/TabBar';
    import Login from '@/components/Login';

    export default{
        name:'mine',
        components:{
             Header,
            TabBar,
            Login
        }
    }




</script>
<style>

</style>