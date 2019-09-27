<template>
     <div class="wrapper" ref="wrapper">
         <slot></slot>
     </div>
</template>
<script>
    export default{
       name:'scroller',

//        这个props 我猜测是类似java 的接口，他写在父组件中，
//        子组件如果想要使用这个组件的话，那么需要完成这个接口，如果不完成的话就使用默认的。
        props:{
            handleToScroll:{
                type:Function,
                default:function (){}
            },
            handleToTouchEnd:{
                type:Function,
                default:function () {}
            }
        },
        mounted(){
           var scroll = new BScroll(this.$refs.wrapper,{
               tap:true,
               probeType:1
           });
        },
        methods:{

        },
    }
</script>
<style scoped>
   .wrapper{
       height:100%;
   }
</style>