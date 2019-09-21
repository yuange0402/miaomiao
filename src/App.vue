<template>

    <!--keep-alive 大概的意思是当组件被打开后，然后被放入后台，然后数据并不会被清除，而是放在了内存中，再次返回的时候
    还是原来的样子，如果每次进入页面都需要获取最新的数据还要做另外的处理。
    -->
    <keep-alive>
        <router-view/>
    </keep-alive>
</template>

