<template>
    <!--
    data":{"cinemas":[{"id":234,"mark":0,"nm":"和平影都","sellPrice":"13","addr":"黄浦区西藏中路290号（近汉口路）","distance":"1067.2km","tag":{"allowRefund":1,"buyout":0,"cityCardTag":0,"deal":0,"endorse":1,"hallType":["IMAX厅"],"hallTypeVOList":[{"name":"IMAX厅","url":""}],"sell":1,"snack":1,"vipTag":"折扣卡"},"promotion":{"cardPromotionTag":"开卡特惠，首单2张最高立减6元"}},{"id":15918,"mark":0,"nm":"比高电影城（江镇店）","sellPrice":"13","addr":"浦东新区祝桥镇江晖路409弄55-65号第2层","distance":"1083.9km","tag":{"allowRefund":0,"buyout":0,"cityCardTag":0,"deal":0,"endorse":1,"hallTypeVOList":[],"sell":1,"snack":1,"vipTag":"折扣卡"},"promotion":{"cardPromotionTag":"开卡特惠，首单2张最高立减4元"}},


    -->

    <div class="cinema_body">
        <ul>
            <li v-for="item in cinemaList">
                <div>
                    <span>{{item.nm}}</span>
                    <span class="q"><span class="price">{{item.sellPrice}}</span> 元起</span>
                </div>
                <div class="address">
                    <span>{{item.addr}}</span>
                    <span>{{item.distance}}</span>
                </div>
                <div class="card">
                  <div v-for="(value,key) in item.tag" v-if="value === 1">
                      {{key | formatCard}}
                  </div>
                </div>
            </li>
        </ul>
    </div>


</template>
<script>
    export default{
        name:'cinemaList',
        data(){
            return{
                cinemaList:[],
            }
        },
        mounted(){
            this.axios.get('/api/cinemaList?cityId=10').then((res)=>{
                if(res.data.msg === 'ok'){
                     this.cinemaList =res.data.data.cinemas;
                }
            })
        },
        methods:{

        },
        filters:{
/**
 * {"allowRefund":0,"buyout":0,"cityCardTag":0,"deal":0,"endorse":1,
 * "sell":1,"snack":1,"vipTag":"折扣卡"},
 *
 *
 * **/

            formatCard(key){
               var tags ={
                   "allowRefund":'vip',
                   "buyout":'小吃卡',
                   "cityCardTag":'饮料',
                   "deal":'快餐',
                   "endorse":'咖啡',
                 "sell":'免费',
                   "snack":'团购',
                   "vipTag":"折扣卡"
               }


               return tags[key];

            }
        }


    }
</script>
<style scoped>
    #content .cinema_body{ flex:1; overflow:auto;}
    .cinema_body ul{ padding:20px;}
    .cinema_body li{  border-bottom:1px solid #e6e6e6; margin-bottom: 20px;}
    .cinema_body div{ margin-bottom: 10px;}
    .cinema_body .q{ font-size: 11px; color:#f03d37;}
    .cinema_body .price{ font-size: 18px;}
    .cinema_body .address{ font-size: 13px; color:#666;}
    .cinema_body .address span:nth-of-type(2){ float:right; }
    .cinema_body .card{ display: flex;}
    .cinema_body .card div{ padding: 0 3px; height: 15px; line-height: 15px; border-radius: 2px; color: #f90; border: 1px solid #f90; font-size: 13px; margin-right: 5px;}
    .cinema_body .card div.or{ color: #f90; border: 1px solid #f90;}
    .cinema_body .card div.bl{ color: #589daf; border: 1px solid #589daf;}

</style>