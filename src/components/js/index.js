import alertMsg  from '@/components/js/Message';
import Vue from 'vue';

export var messageBox = (function () {
    var defaults = {
        title:'',
        content:'',
        cancel:'',
        ok:'',
        handleCancel:function () {},
        handleOk:function () {},



    };

    return function (opts){
        for(var attr in opts){
            defaults[attr] = opts[attr];
        }

        var MyComponent = Vue.extend(alertMsg);
        var vm = new MyComponent({
            el:document.createElement('div'),
            data:{
                title:defaults.title,
                content:defaults.content,
                cancel:defaults.cancel,
                ok:defaults.ok,


            },
            methods:{
                handleCancel(){
                    defaults.handleCancel && defaults.handleCancel.bind(this);
                    document.body.removeChild(vm.$el);
                },
                handleOk(){
                    defaults.handleOk()&& defaults.handleOk().bind(this);
                    document.body.removeChild(vm.$el);
                }


            }

        })



    }




})()