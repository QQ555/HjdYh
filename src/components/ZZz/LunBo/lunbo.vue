<template>
    <div class="div_1">
        <!-- <el-carousel indicator-position="outside">
            <el-carousel-item v-for="item in imgages" :key="item">
                <img :src="item">
            </el-carousel-item>

        </el-carousel>
        <ol class="o1">
            <li><span>1</span></li>
            <li><span>2</span></li>
            <li><span>3</span></li>
            <li><span>4</span></li>
            <li><span>5</span></li>
            <li><span>6</span></li>
        </ol> -->
        <div>
            <div class="div_2">
                <div>
                    <img id="img1" src="http://small.justeasy.cn/piclink/201809/20180913103037_5b99cbcd256c0.jpg" alt="">
                </div>
                <ol class="o1">
                    <li><span index=0>1</span></li>
                    <li><span index=1>2</span></li>
                    <li><span index=2>3</span></li>
                    <li><span index=3>4</span></li>
                    <li><span index=4>5</span></li>
                    <li><span index=5>6</span></li>
                </ol>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                imes: ['http://small.justeasy.cn/piclink/201809/20180913103037_5b99cbcd256c0.jpg', 'http://small.justeasy.cn/piclink/201809/20180912104339_5b987d5bd579b.jpg', 'http://small.justeasy.cn/piclink/201809/20180911100050_5b9721d20af73.jpg', 'http://small.justeasy.cn/piclink/201809/20180910092509_5b95c7f50493e.jpg', 'http://small.justeasy.cn/piclink/201809/20180907170534_5b923f5ec6433.jpg', 'http://small.justeasy.cn/piclink/201809/20180907165434_5b923ccad079d.jpg']
            }
        },

        methods: {


        },
        mounted() {
            var a = 0;
            var that = this;
            function aite() {

                var i = a++ % 6;
                $('#img1').attr('src', that.imes[i])
                for (var t = 0; t < $('.o1 > li').length; t++) {
                    $('.o1 > li')[t].style.background = ''
                }
                $('.o1 > li')[i].style.background = 'gray'

            }
            var serr = setInterval(aite, 2000)

            $('.o1>li').on('mouseenter', function () {
                a = $(this).children().attr('index');
                // alert(that.a)
                $('#img1').attr('src', that.imes[a])
                $(this).css({
                    background: 'gray'
                }).siblings().css({
                    background: ''
                })

            })

            $('.div_2').on('mouseenter', function () {
                clearInterval(serr);
            })
            $('.div_2').on('mouseleave', function () {
                serr = setInterval(aite, 2000)
            })
        }

    }
</script>
<style>
    .div_1 {
        width: 1200px;
        height: 540px;
        margin: 0 auto;
        position: relative;
    }

    .div_2 {
        height: 100%;
        display: flex;
        overflow: hidden;
    }

    .o1 {
        width: 100%;
        position: absolute;
        bottom: 10px;
        text-align: center;
        z-index: 150;
    }

    .o1>li {
        margin: 0 2px;
        display: inline-block;
        margin-left: 8px;
        font-size: 14px;
        width: 28px;
        height: 28px;
        background: rgba(0, 0, 0, .3);
        border-radius: 50%;
        line-height: 28px !important;
        color: white !important;
    }
</style>