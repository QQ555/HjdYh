<template>
    <div id="tt">
        <span id="xx" @click="myClick">x</span>
    </div>
</template>

<script>
    // var div = document.querySelector('div')
    export default {
        
        methods:{
            myClick(){
                $('#tt').css({
                    display:"none"
                })
            }
        }
    }
</script>

<style scoped>
    div {
        width: 100%;
        height: 80px;
        background-image: url('http://small.justeasy.cn/piclink/201809/20180907102815_5b91e23fcce49.png');
        /* position: relative; */
    }
    
    #xx{
        position: absolute;
        right: 370px;
        top: -25px;
        display: block;
        font-size: 50px;
        color: white;
    }

</style>