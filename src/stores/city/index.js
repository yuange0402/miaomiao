//状态参数
const state = {
   nm:'北京',
    id:1
};

const actions ={

};

//这里面写修改状态的方法
const mutations={
    //修改状态的方法一般用大写
    CITY_INFO(state , payload){
        state.nm = payload.nm;
    }
}
export default {
    //给当前的状态一个命名空间，区分当前的状态文件
    namespace:true,
    //暴露文件的三个属性
    state,
    actions,
    mutations

}