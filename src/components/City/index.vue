<template>
    <div class="city_body">
        <div class="city_list">
            <div class="city_hot">
                <h2>热门城市</h2>
                <ul class="clearfix">
                    <li v-for="item in hotList">{{item.nm}}</li>
                </ul>
            </div>



            <div class="city_sort" v-for="item in cityList">
                <div>
                    <h2>{{item.index}}</h2>
                    <ul>
                        <li v-for="city in item.list">{{city.nm}}</li>
                    </ul>
                </div>
            </div>



        </div>


        <div class="city_index">
            <ul>

                <li v-for="item in cityList">{{item.index}}</li>
            </ul>
        </div>




    </div>

</template>
<script>
    export default {
       name:'city',
        data(){
           return{
              cityList:[],
               hotList:[]
           }
        },
        mounted(){
           this.axios.get('/api/cityList').then((res)=>{
              if(res.data.msg ==='ok'){
                  var cities = res.data.data.cities;
                 var {cityList,hotList}= this.formatCityList(cities);
                 this.cityList = cityList;
                 this.hotList = hotList;
              }

           })
        },
        methods:{
            formatCityList(cities){
                var cityList = [];
                var hotList = [];

                for(var i=0;i<cities.length;i++){
                    if(cities[i].isHot ===1){
                        hotList.push(cities[i]);
                    }
                }
                for(var i=0;i<cities.length;i++){
                    var firstLetter = cities[i].py.substring(0,1).toUpperCase();
//                    判断这些首字母是不是已经存在所以数组里面了
                    if(judgeIndex(firstLetter)){//返回true ，说明数组里已经有了
                        for(var j =0; j<cityList.length;j++){
                            if (cityList[j].index === firstLetter){
                                cityList[j].list.push({nm:cities[i].nm,id:cities[i].id})
                            }
                        }
                    }else {
                        //说明数组里还没有这个索引，第一次添加
                        cityList.push({index:firstLetter,list:[{nm:cities[i].nm,id:cities[i].id}]})

                    }


                }
                function judgeIndex(firstLetter) {
                    for (var i=0;i<cityList.length;i++){
                        if(firstLetter == cityList[i].index){
                            return true;
                        }
                    }

                    return false;
                }

/**
 *  排序函数的使用
 * 1 简单的字母排序可以直接调用sort 就可以是先数组里的字母按照顺序排列
 * 2 如果是数组或者是其他的复杂数组要自己定义一个排序规则。
 * 3 这个排序规则用一个函数定义，并且把函数作为参数出给sort 函数输入进去。
 * 4 这个函数的写法
 *    ① 传入两个参数，作为任意的两个数组元素的比较规则。
 *    ② 在函数里面定义这两个参数的比较规则
 *    ③ 然后return 1 或者 0 或者 -1 （大有0 小于0 等于0 是那种情况），作为比较结果，
 *
 * **/
                cityList.sort((a,b)=>{
                    if(a.index>b.index){
                        return 1;
                    }else if(a.index<b.index){
                        return -1;
                    }else{
                        return 0;
                    }
                })

                return{
                    cityList,
                    hotList
                }


            },
            handleToIndex(index){

            }






        }
    }

</script>
<style scoped>



    #content .city_body{ margin-top: 45px; display: flex; width:100%;  top: 0; bottom: 0;}
    .city_body .city_list{ flex:1; overflow: auto; background: #FFF5F0;}
    .city_body .city_list::-webkit-scrollbar{
        background-color:transparent;
        width:0;
    }
    .city_body .city_hot{ margin-top: 20px;}
    .city_body .city_hot h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
    .city_body .city_hot ul li{ float: left; background: #fff; width: 29%; height: 33px; margin-top: 15px; margin-left: 3%; padding: 0 4px; border: 1px solid #e6e6e6; border-radius: 3px; line-height: 33px; text-align: center; box-sizing: border-box;}
    .city_body .city_sort div{ margin-top: 20px;}
    .city_body .city_sort h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
    .city_body .city_sort ul{ padding-left: 10px; margin-top: 10px;}
    .city_body .city_sort ul li{ line-height: 30px; line-height: 30px;}
    .city_body .city_index{ width:20px; display: flex; flex-direction:column; justify-content:center; text-align: center; border-left:1px #e6e6e6 solid;}

</style>