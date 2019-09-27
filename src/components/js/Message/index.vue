<template>
     <div class="messageBox">
         <h2>{{title}}</h2>
         <p>{{content}}</p>
         <div>
             <div>{{ cancel }}</div>
             <div>{{ ok }}</div>
         </div>
     </div>
</template>
<script>
    export default{

    }
</script>
<style>
    .messageBox{
        width:200px;
        height:140px;
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-100px,-70px);
        border:1px solid snow;
        background-color:red;

    }

    .messageBox h2{
        text-align: center;
        font-size: 18px;
        line-height: 40px;


    }

    .messageBox p{
        text-align: center;line-height: 40px;
    }

    .messageBox > div{
        display: flex;
        position: absolute;
        bottom: 0px;
        width:100%;
        border-top: 1px #ccc solid;


    }


    .messageBox div div{
        flex:1;
        text-align: center;
        line-height: 30px;
        border-right: 1px #ccc

    }


</style>