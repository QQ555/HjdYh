<template>
    <div>
        <div class="vox">
            <div class="txwz">
                <ul>
                    <li class="mia" v-for="hhda in mgd" :key="hhda">
                        <div class="uss">
                            <a href="#" class="q1m">
                                <img class="igh" :src="hhda.oi" alt="">
                            </a>
                        </div>
                        <div class="aewq">
                            <h3>
                                <a href="#" class="a9">
                                    <span class="label-news">经验教程</span>
                                    {{hhda.lname}}
                                </a>
                            </h3>
                            <p>
                                <a href="#" class="a8">{{hhda.nro}}</a>
                                <br>
                                <a href="#" class="a8">{{hhda.tebie}}</a>
                            </p>
                            <div class="so">
                                <div class="detail">
                                    <img class="dmg" src="http://big.justeasy.cn//avatar/201708/20170822104945_599b9bc9c45d8.jpg"
                                        alt="">
                                    <div>
                                        <span class="dmgy">建E官方</span>
                                        /
                                        <span class="dmgy">{{hhda.dmk}}</span>
                                    </div>
                                </div>
                                <div class="rtp">
                                    <span>
                                        <em>{{hhda.rqq}}</em>
                                        人气
                                    </span>
                                    /
                                    <span>
                                        <em>{{hhda.ttj}}</em>
                                        推荐
                                    </span>
                                    /
                                    <span>
                                        <em>{{hhda.ppl}}</em>
                                        评论
                                    </span>
                                    <span class="ygy">
                                        {{hhda.zzhg}}
                                    </span>
                                </div>

                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="yjg">
                <div class="yjg1" @mouseenter="eccnter($event)" @mouseleave="leajjve()">
                    <div>
                        <img src="http://small.justeasy.cn/effect/201807/20180706103659_5b3ed5cb8d07a.jpg" alt="">
                    </div>
                    <div class="xhh">
                        <h3 class="qkk">【干货分享】Corona实用快速制图思路</h3>
                        <span class="label-news">经验教程</span>
                        <p class="huouo">
                            本文是2018年6月25日韦涛老师的《Corona商业写实班》第一讲干货分享，请耐心看完。
                        </p>
                        <div class="jha">
                            <span class="rwx">
                                建E官方
                            </span>
                            /
                            <span class="rwx">
                                建E设计发现
                            </span>

                        </div>
                    </div>
                </div>
                <div class="yjg2 yjg1" @mouseenter="eocnter($event)" @mouseleave="leayjve()">
                    <div>
                        <img src="http://small.justeasy.cn/effect/201807/20180705103438_5b3d83be172f8.jpg" alt="">
                    </div>
                    <div class="kka">
                        <h3 class="qkk">超写实风格Vray渲染五步法则</h3>
                        <span class="label-news">经验教程</span>
                        <p  class="huouo">Vray渲染五步法则，教你模拟出真实的效果</p>
                        <div class="jha">
                                <span class="rwx">
                                    猫咪啊
                                </span>
                                /
                                <span class="rwx">
                                    网络
                                </span>
    
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                mgd: [
                    {
                        oi: 'http://small.justeasy.cn/effect/201809/20180917114206_5b9f228e1009b.jpg',
                        lname: '3DMax大型空间异形吊灯建模教程  ',
                        nro: '今天要讲解的案例是一款大型空间异形吊灯。',
                        tebie: '<br><br><br>希望这个案例能带给大家不一样的思路，之后再遇到这种异形，再难不倒你...',
                        dmk: '建E学院',
                        rqq: ' 619 ',
                        ttj: ' 6 ',
                        ppl: '0',
                        zhhg: '3天前',
                        iggj: 'http://small.justeasy.cn/effect/201809/20180917114206_5b9f228e1009b.jpg'
                    },
                    {
                        oi: 'http://small.justeasy.cn/effect/201808/20180817173957_5b7697ed31bbb.jpg',
                        lname: '结合vray使用PS制作景深 ',
                        nro: '结合vray使用PS制作景深...',
                        dmk: '3DMAX吧网',
                        rqq: '  1605  ',
                        ttj: '  13  ',
                        ppl: '3',
                        zhhg: '1个月前',
                        iggj: 'http://small.justeasy.cn/effect/201808/20180817173957_5b7697ed31bbb.jpg'
                    },
                    {
                        oi: 'http://small.justeasy.cn/effect/201807/20180717180658_5b4dbfc219b82.jpg',
                        lname: ' 3dMax建模教程如何制作逼真的毛绒地毯模型  ',
                        nro: '3dsmax怎么制作逼真的毛绒地毯模型？',
                        tebie: '<br>3dsmax中想要中想要建模长方形的毛绒地毯，该怎么制作呢？',
                        dmk: '	3DMAX建模渲染',
                        rqq: '   2339   ',
                        ttj: '   48   ',
                        ppl: ' 0 ',
                        zhhg: '2个月前',
                        iggj: 'http://small.justeasy.cn/effect/201807/20180717180658_5b4dbfc219b82.jpg'
                    },
                ]
            }
        },
        methods:{
            eccnter(){
                $('.xhh').stop().animate({
                    top:0
                })
            },
            leajjve(){
                $('.xhh').stop().animate({
                    top:'220px',
                })
            },
            eocnter(){
                $('.kka').stop().animate({
                    top:0
                })
            },
            leayjve(){
                $('.kka').stop().animate({
                    top:"220px"
                })
            }
        }
    }
    
</script>

<style scoped>
    .vox {
        width: 1200px;
        /* background: wheat; */
        margin: 0 auto;
        margin-top: 30px;
        display: flex;
    }

    .txwz {
        width: 895px;
        background: #fff;
        height: 492px;
    }

    .mia {
        width: 865px;
        height: 144px;
        margin-top: 15px;
        margin-left: 15px;
        display: flex;
        box-sizing: border-box;
    }

    .mia:hover {
        background: #f4f4f4;

    }

    .aewq {
        position: relative;
    }

    .uss {
        height: 100%;
    }

    .igh {
        height: 144px;
        width: 215px;
        margin-top: -20px;
        margin-left: 0px;
        display: inline;
        margin-right: 20px;
    }

    .label-news {
        border-color: #009cff;
        color: #009cff;
        border: 1px solid #009cff;
        padding: 0 10px;
        font-size: 12px;
        border-radius: 20px;
        margin-right: 5px;
    }

    .a9 {
        color: #333;
        font: normal 16px/40px "Microsoft YaHei";
    }

    .a8 {
        color: #333;
        font: normal 14px/24px "Microsoft YaHei", tahoma, arial, Hiragino Sans GB;
    }

    .detail {
        font: normal 14px/24px "Microsoft YaHei", tahoma, arial, Hiragino Sans GB;
        color: #999;
        height: 42.5px;
        display: flex;
        align-items: center;
        float: left;
    }

    .dmg {
        width: 36px;
        height: 36px;
    }

    .q1m {
        padding-top: 20px;
        display: block;
    }

    dmgy {
        font: normal 14px/24px "Microsoft YaHei", tahoma, arial, Hiragino Sans GB;

        line-height: 42.5px;
    }



    .so {
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        width: 615px;
        margin-top: 5px;
        font-style: normal;
        font: normal 14px/24px "Microsoft YaHei", tahoma, arial, Hiragino Sans GB;
        color: #999;
        position: absolute;
        bottom: 5px;
    }

    .rtp {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 15px;
    }

    .ygy {
        margin-left: 30px;
    }

    a:hover {
        color: #e70;
    }

    .yjg {
        width: 290px;
        margin-right: 15px;
        float: right;
        margin-top: 15px;
    }

    .yjg1 {
        width: 290px;
        height: 220px;
        position: relative;
        overflow: hidden;
        cursor:pointer;
    }

    .xhh {
        position: absolute;
        text-align: center;
        background: rgba(0, 0, 0, .7);
        color: #fff;
        width: 250px;
        height: 200px;
        padding: 10px 18px;
        box-shadow: 0 0 4px rgba(0, 0, 0, .1);
        left: 0;
        top: 220px;
    }

    .qkk {
        font: normal 16px/40px "Microsoft YaHei";

    }
    
    .huouo{
        font: normal 14px/24px "Microsoft YaHei";
        color: #ccc;
        height: 72px;
        overflow: hidden;
        word-break: break-all;
        word-wrap: break-word;
        margin-top: 4px;
    }
    
    .jha{
        margin-top: 5px;
    }

    .rwx{
        font: normal 14px/24px "Microsoft YaHei";
    }

    .yjg2 {
        margin-top: 27px;
    }
    .kka{
        position: absolute;
        text-align: center;
        background: rgba(0, 0, 0, .7);
        color: #fff;
        width: 250px;
        height: 200px;
        padding: 10px 18px;
        box-shadow: 0 0 4px rgba(0, 0, 0, .1);
        left: 0;
        top: 220px;
    }
</style>