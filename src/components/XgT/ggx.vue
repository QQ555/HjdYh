<template>
    <div>
        <section class="secc">
            <div class="lql">
                <div class="xlb">
                    <ul>
                        <li class="poa">
                            <a href="#">
                                <img class="ggt" src="http://small.justeasy.cn/piclink/201809/20180912160016_5b98c790e27d4.jpg"
                                    alt="">
                            </a>
                            <div class="lbdb">
                                <h3 class="hkh">一组后现代案例</h3>
                            </div>
                        </li>
                    </ul>

                </div>
                <ul class="xhx">
                    <li index="0"></li>
                    <li index="1"></li>
                    <li index="2"></li>
                    <li index="3"></li>
                    <li index="4"></li>
                </ul>
            </div>
            <div class="zyg">
                <div class="zygs">
                    <span class="qwe">效果图QQ群：435951954</span>
                    <div class="btns">
                        <a href="#" class="fbzp">发布作品</a>
                        <a href="#" class="zpgl">作品管理</a>
                    </div>
                </div>
                <div class="zygx">
                    <a href="#"><img src="../../assets/x.png" alt=""></a>
                </div>
            </div>
        </section>
        <tbtj/>
        <jxwz/>
    </div>
</template>

<script>
import tbtj from "@/components/XgT/TbTj";
import jxwz from "@/components/XgT/JxWz";


    export default {
        data() {
            return {
                cmm: [
                    "http://small.justeasy.cn/piclink/201809/20180912160016_5b98c790e27d4.jpg",
                    "http://small.justeasy.cn/piclink/201809/20180906141443_5b90c5d35db74.jpg",
                    "http://small.justeasy.cn/piclink/201809/20180903112015_5b8ca86fcd25d.jpg",
                    "http://small.justeasy.cn/piclink/201809/20180917102556_5b9f10b45113a.jpg",
                    "http://small.justeasy.cn/piclink/201808/20180830161023_5b87a66fbc538.jpg"
                ],
            };
        },
        mounted() {
            var b = 0;
            var that = this;
            $(".xhx>li").eq(0).css({
                background: '#e70'
            })
            function aip() {
                var i = b++ % 5;
                $(".ggt").attr("src", that.cmm[i]);
                $(".xhx>li").eq(i).css({
                    background: '#e70'
                }).siblings().css({
                    background: ''
                })
            }
            var shith = setInterval(aip, 2000)

            $(".xhx>li").on('mouseenter', function () {
                b = $(this).attr('index');
                $('.ggt').attr('src', that.cmm[b])
                $(this).css({
                    background: "#e70"
                }).siblings().css({
                    background: ''
                })
            })
            $('.lql').on('mouseenter', function () {
                clearInterval(shith);
            })
            $('.lql').on('mouseleave', function () {
                shith = setInterval(aip, 2000)
            })
        },
        components:{
            tbtj,
            jxwz,
        }
    };
</script>

<style scoped>
    .secc {
        width: 1200px;
        margin: 10px auto;
        overflow: hidden;
        background: #f4f4f4;
    }

    .lql {
        width: 900px;
        float: left;
    }

    .xlb {
        float: left;
        width: 900px;
        height: 447px;
        margin-top: 0;
        position: relative;
        margin-bottom: 10px;
    }

    .poa {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
    }

    .poa>a {
        width: 100%;
        height: 100%;
        display: block;
    }

    .poa>a>img {
        width: 100%;
        height: 100%;
    }

    .lbdb {
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 5px 0;
    }

    .lbdb>h3 {
        width: 470px;
        margin-left: 20px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: block;
        float: left;
        color: #fff;
        font: normal 16px/40px "Microsoft YaHei";
    }

    .xhx {
        list-style: none;
        width: 900px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .xhx>li {
        width: 19.5%;
        height: 7px;
        border: 1px solid #666;
        cursor: pointer;
        background: #d1d1d1;
    }

    .zyg {
        width: 290px;
        float: right;
    }

    .zygs {
        width: 100%;
        height: 119px;
        background: url('../../assets/s.png') no-repeat center;
        background-size: 100% 100%;
        text-align: center;
        padding-top: 128px;
    }

    .qwe{
        
        color: #fff;
        font: normal 14px/24px "Microsoft YaHei",tahoma,arial,Hiragino Sans GB;
    }

    .btns{
        overflow: hidden;
        padding: 20px 27px;
    }

    .fbzp{
        width: 56px;
        padding: 4px 25px;
        margin: 0 5px;
        border: 1px solid #fff;
        color: #fff;
        display: block;
        text-align: center;
        border-radius: 2px;
        cursor: pointer;
        font: normal 14px/24px "Microsoft YaHei",tahoma,arial,Hiragino Sans GB;
        float: left;
    }
    .fbzp:hover{
        background: #d1d1d1
    }
    .zpgl{
        width: 56px;
        padding: 4px 25px;
        margin: 0 5px;
        border: 1px solid #93b3e4;
        background: rgba(255,255,255,.2);
        color: #fff;
        display: block;
        text-align: center;
        cursor: pointer;
        font: normal 14px/24px "Microsoft YaHei",tahoma,arial,Hiragino Sans GB;
        float: left;
    }
    .zygx{
        width: 290px;
        height: 200px;
        overflow: hidden;
        margin-top: 20px;
    }
    .zygx>a>img{
        width: 100%;
        height: 100%;
    }
</style>