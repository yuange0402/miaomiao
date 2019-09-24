<template>
    <div class="search_body">
        <div class="search_input">
            <div class="search_input_wrapper">
                <i class="iconfont icon-sousuo"></i>
                <input type="text" v-model="searchMsg">
            </div>
        </div>

        <!--
        cat: "灾难,动作,剧情"
dir: "陈国辉"
dur: 120
enm: "The Bravest"
globalReleased: true
id: 1243361
img: "http://p0.meituan.net/w.h/movie/f75fcb7696d55452e32794b2219700b9840805.jpg"
movieType: 0
nm: "烈火英雄"
onlinePlay: false
pubDesc: "2019-08-01大陆上映"
rt: "2019-08-01"
sc: 9.4
show: ""
showst: 3
star: "黄晓明,杜江,谭卓"
type: 0
ver: "2D/IMAX 2D/中国巨幕/全景声/starmax/4DX"
version: "v2d imax"
vodPlay: false
wish: 164442
wishst: 0
__proto__: Ob
        -->
        <div class="search_result">
            <h3>电影/电视剧/综艺</h3>
            <ul>
                <li v-for="movie in searchList">
                    <div class="img"><img :src="movie.img | setWH('128.180')"></div>
                    <div class="info">
                        <p><span>{{movie.nm}}</span><span>{{movie.sc}}</span></p>
                        <p>{{movie.enm}}</p>
                        <p>{{movie.cat}}</p>
                        <p>{{movie.rt}}</p>
                    </div>
                </li>

            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name:'search',
        data(){
            return{
                searchMsg:'',
                searchList:[]
            }
        },
        methods:{
            cancelRequest(){
                if(typeof this.source === 'function'){
                    this.source('终止请求');
                }
            }
        },
       watch:{
            searchMsg(msg){
                var that =this;
//              调用取消方法
                this.cancelRequest();
                this.axios.get('/api/searchList?cityId=10&kw='+msg,{
                    cancelTokenn:new this.axios.CancelToken(function (c) {
                        that.source = c;
                    })
                }).then((res)=>{
                    this.searchList = res.data.data.movies.list;
                })
            },
       }



    }

</script>
<style scoped>


    #content .search_body{ flex:1; overflow:auto;}
    .search_body .search_input{ padding: 8px 10px; background-color: #f5f5f5; border-bottom: 1px solid #e5e5e5;}
    .search_body .search_input_wrapper{ padding: 0 10px; border: 1px solid #e6e6e6; border-radius: 5px; background-color: #fff; display: flex; line-height: 20px;}
    .search_body .search_input_wrapper i{font-size: 16px; padding: 4px 0;}
    .search_body .search_input_wrapper input{ border: none; font-size: 13px; color: #333; padding: 4px 0; outline: none; margin-left: 5px; width:100%;}
    .search_body .search_result{}
    .search_body .search_result h3{ font-size: 15px; color: #999; padding: 9px 15px; border-bottom: 1px solid #e6e6e6;}
    .search_body .search_result ul{}
    .search_body .search_result li{ border-bottom:1px #c9c9c9 dashed; padding: 10px 15px; box-sizing:border-box; display: flex;}
    .search_body .search_result .img{ width: 60px; float:left; }
    .search_body .search_result .img img{ width: 100%; }
    .search_body .search_result .info{ float:left; margin-left: 15px; flex:1;}
    .search_body .search_result .info p{ height: 22px; display: flex; line-height: 22px; font-size: 12px;}
    .search_body .search_result .info p:nth-of-type(1) span:nth-of-type(1){ font-size: 18px; flex:1; }
    .search_body .search_result .info p:nth-of-type(1) span:nth-of-type(2){ font-size: 16px; color:#fc7103;}

</style>