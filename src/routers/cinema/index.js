export default{
   path:'/cinema',
    //组件如果写在路由里面，那么会在需要的时候才会加载组件，不是在项目启动的时候就加载组件
 //   有好处也有坏处，对于大项目的话启动比较快。
 component:()=> import('@/views/cinema'),
    children:[
        {
            path:'allCity',
            component:()=>import('@/components/CinemaList')
        },
    ]


}
