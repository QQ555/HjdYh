<template>
    <div>
        <div class="tbtjs">
            <div class="tbtjsz">
                特别推荐
                <span>
                    / Special Recommendation
                </span>
            </div>

            <div class="zxdty">
                <span>最新动态：</span>
                <div :style="{height:height*lineNum + 'px'}" class="rollScreen_container" id="rollScreen_container">
                    <ul class="rollScreen_list" :style={transform:transform} :class="{rollScreen_list_unanim:num===0}">
                        <li class="rollScreen_once" v-for="(item,index) in contentArr" :key=index :style="{height:height+'px'}">
                            <a href="#" class="ys">{{item}}</a>
                            <span>5小时</span>
                        </li>
                        <li class="rollScreen_once" v-for="(item,index) in contentArr" :key=index+contentArr.length
                            :style="{height:height+'px'}">
                            <a href="#" class="ys">{{item}}</a>
                            <span>5小时</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="gallery">
            <ul>
                <li class="log" v-for="(uio,index) in ttbt" :key="index">
                    <div class="dom_1">
                        <a href="#"><img :src="uio.srt" alt=""></a>
                    </div>
                    <div class="dom_2">
                        <span><strong>{{uio.sname}}</strong></span>
                    </div>
                    <div class="dom_3">
                        <span class="yc">原创</span>
                        <span class="rq">
                            <em>{{uio.rsz}}</em>
                            人气
                        </span>
                        /
                        <span>
                            <em>{{uio.tsz}}</em>
                            推荐
                        </span>
                        /
                        <span>
                            <em>{{uio.psz}}</em>
                            评论
                        </span>
                    </div>
                    <div class="dom_4">
                        <a href="#" class="aaaas">
                            <img class="xyq" :src="uio.set" alt="">
                            <span>{{uio.dyw}}</span>
                        </a>
                        <span class="sj">{{uio.sj}}</span>
                    </div>
                </li>
            </ul>

        </div>
    </div>
</template>

<script>
    export default {
        props: {
            height: {
                default: 22,
                type: Number
            },
            lineNum: {
                default: 1,
                type: Number
            }
        },
        data: function () {
            return {
                contentArr: [' 壹空间设计表现发布了作品《现代客餐厅》', ' 琼^O^♬ 无穷发布了作品《东方首府1001》', ' 蜂衣发布了作品《长兴蜂衣表现临摹作品》', ' 建E官方发布了作品《3DMax大型空建模教程》', ' 1838发布了作品《现代风格》', ' wx_145070813发布了作品《碧桂园-400平米钻石郡》', ' 深爱不及永伴发布了作品《古典美式》'],
                num: 0,


                ttbt: [{ srt: 'http://small.justeasy.cn/effect/201809/20180917183600_5b9f83906269a.jpg', sname: '【IQOSA】别墅设计方案 ▎【black espresso Studio】—表现', rsz: '63', tsz: '4', psz: '0', set: 'http://small.justeasy.cn/xueyuan/201712/f0aea76a3f92085a83f4fee475d1204e.jpg', dyw: 'black espresso', sj: '2小时' },
                { srt: 'http://small.justeasy.cn/effect/201809/20180915144043_5b9ca96b40185.jpg', sname: '【学习】', rsz: ' 108', tsz: '5', psz: '0', set: 'http://big.justeasy.cn//avatar/201612/876919_5860c72801694_150.jpg', dyw: 'The mood', sj: '9小时' },
                { srt: 'http://small.justeasy.cn/effect/201809/20180915143744_5b9ca8b8b6f26.png', sname: '【学习】', rsz: '  185', tsz: ' 10', psz: '2', set: 'http://big.justeasy.cn//avatar/201612/876919_5860c72801694_150.jpg', dyw: 'The mood', sj: '9小时' },
                { srt: 'http://small.justeasy.cn/effect/201809/20180915161821_5b9cc04da47e3.jpg', sname: '原谅和宽容——ORANGE DESGIN', rsz: '   135', tsz: ' 3', psz: '1', set: 'http://big.justeasy.cn//avatar/201803/20180328121117_5abb15e5a9231.jpg', dyw: 'Orange Desgin', sj: '10小时' }]
            }
        },
        computed: {
            transform: function () {
                return 'translateY(-' + this.num * this.height + 'px)'
            }
        },
        created: function () {
            let _this = this
            setInterval(function () {
                if (_this.num !== _this.contentArr.length) {
                    _this.num++
                } else {
                    _this.num = 0
                }
            }, 3000)
        },
        mounted(){
            // var o = 0;
            // $('.log').on('mouseenter',function(){
            //     $(this).css({

            //         border:'10px solid white',
            //         borderBottom: 'none !important',
            //         boxShadow:' 0 0 12px rgba(0, 0, 0, 0.1)'
            //     })
            // }),
            // $('.log').on('mouseleave',function(){
            //     $(this).css({
            //         border:'none',
            //         boxShadow:'none'
            //     })
            // })
        }
    }
</script>

<style scoped>
    .tbtjs {
        margin-top: 30px !important;
        width: 1200px;
        margin: 0 auto;
        overflow: hidden;
    }

    .tbtjsz {
        font: normal 24px/28px "Microsoft YaHei";
        color: #333;
        float: left;
    }

    .tbtjsz>span {
        font-size: 14px;
        margin-left: 10px;
        line-height: 24px;
        color: #333;
    }


    .rollScreen_container {
        display: inline-block;
        position: relative;
        overflow: hidden;
    }

    .rollScreen_list {
        transition: 1s linear;
    }

    .rollScreen_list_unanim {
        transition: none
    }

    .ys {
        color: #e70;
        width: 330px;
        display: block;
    }

    .zxdty {
        width: 620px;
        height: 40px;
        background: wheat;
        border-radius: 20px;
        padding: 0 20px;
        line-height: 24px;
        white-space: nowrap;
        float: right;
        display: flex;
        align-items: center;
    }

    .rollScreen_once {
        width: 500px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .gallery {
        width: 1200px;
        margin: 0 auto;
        overflow: hidden;
        margin-top: 15px;
        
    }

    .gallery>ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .log {
        width: 285px;
        float: left;
        background: #fff;
        position: relative;
        box-sizing: border-box;
    }

    /* .log:hover .tm {
        opacity: 1;

    }

    .tm {
        width: 305px;
        height: 332px;
        position: absolute;
        z-index: 1;
        top: -10px;
        transition: transform 0.2s;
        right: -10px;
        bottom: 0;
        left: -10px;
        background-color: #fff;
        box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
        opacity: 0;
    }

    .tm::before {
        content: "";
        position: absolute;
        top: -1px;
        right: -1px;
        bottom: -1px;
        left: -1px;
        border: 1px solid rgba(0, 0, 0, 0.05);
    } */

    .dom_1 {
        z-index: 100;
    }

    .dom_1 img {
        width: 100%;
        height: 214px;
    }

    .dom_2 {
        font: normal 14px/30px "Microsoft YaHei";
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-left: 10px;
        z-index: 100;

    }

    .dom_3 {
        color: #999;
        font: normal 12px/24px "Microsoft YaHei";
        padding-left: 15px;
        z-index: 100;

    }

    .yc {
        height: 20px;
        padding: 0 5px;
        margin-right: 3px;
        background: #e8e8e8;
        text-align: center;
        line-height: 19px;
        color: #666;
        font-size: 12px;
    }

    .rq {
        margin-right: 3px;
        color: #999;
        font: normal 12px/24px "Microsoft YaHei";
    }

    .dom_4 {
        padding-left: 15px;
        overflow: hidden;
        margin-top: 15px;
        z-index: 100;

    }

    .aaaas {
        overflow: hidden;
        color: #333;
        font: normal 14px/24px "Microsoft YaHei", tahoma, arial, Hiragino Sans GB;
    }

    .xyq {
        float: left;
        margin-top: 3px;
        width: 20px;
        height: 20px;
        display: block;
        border-radius: 50%;
    }

    .sj {
        font: normal 12px/24px "Microsoft YaHei";
        color: #999;
        float: right;
        margin-right: 10px;
        
    }
</style>