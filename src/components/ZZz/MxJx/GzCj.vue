<template>
    <div class="jjrz">
        <div class="rzly">
            <h3>工装场景</h3>
            <div>
                <ul class="jright">
                    <li index=0 class="qbll">全部</li>
                    <li index=1>餐饮娱乐</li>
                    <li index=2>酒店空间</li>
                    <li index=3>商业空间</li>
                    <li index=4>办公机构</li>
                    <li index=5>公共空间</li>
                </ul>
            </div>
        </div>
        <div class="rzlyx">
            <div class="rzlynr" v-for="jj in date[aa].item" :key="jj">
                <div>
                    <a href="#">
                        <img :src="jj.srcs" alt="" class="ig1">
                    </a>
                </div>
                <div class="rzlynrr">
                    <h4><a href="#">{{jj.name}}</a></h4>
                    <div class="info">
                        <span>{{jj.span1}}</span>
                        <div class="infor">
                            <i class="i1"></i>
                            <span>{{jj.span2}}</span>
                            <i class="i2"></i>
                            <span>{{jj.span3}}</span>
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
                aa: 0,
                jjrr: [{
                    srcs: 'http://small.justeasy.cn/201809/20180907154506_5b922c8234170.jpg', name: '现代办公室', span1: 'ID:309794', span2: '84', span3: '3'
                },
                {
                    srcs: 'http://small.justeasy.cn/201809/20180907213908_5b927f7cc76be.jpg', name: ' 现代办公室休闲餐饮区', span1: 'ID:309865', span2: '43', span3: '0'
                },
                {
                    srcs: 'http://small.justeasy.cn/201809/20180913140214_5b99fd66ed477.jpg', name: ' 现代售楼处-前台大厅', span1: 'ID:310793', span2: '73', span3: '2'
                },
                {
                    srcs: 'http://small.justeasy.cn/201809/20180911105947_5b972fa3796fa.jpg', name: '现代电梯厅', span1: 'ID:310560', span2: '88', span3: '2'
                },
                {
                    srcs: 'http://small.justeasy.cn/201809/20180911114743_5b973adf033ac.jpg', name: '工业风餐厅', span1: 'ID:310580', span2: '234', span3: '5'
                },
                {
                    srcs: 'http://small.justeasy.cn/201809/20180911222846_5b97d11eb4b6e.jpg', name: '现代服装店', span1: 'ID:310760', span2: '118', span3: '1'
                },
                {
                    srcs: 'http://small.justeasy.cn/201809/20180907151523_5b92258b8af12.jpg', name: '现代办公接待大堂', span1: 'ID:310187', span2: '152', span3: '2'
                },
                {
                    srcs: 'http://small.justeasy.cn/201809/20180911152316_5b976d6415c09.jpg', name: '后现代办公前台接待台', span1: 'ID:310653', span2: '503', span3: '6'
                }],
                date: [
                    {
                        id: 1,
                        item: [{
                            srcs: 'http://small.justeasy.cn/201809/20180907154506_5b922c8234170.jpg', name: '现代办公室', span1: 'ID:309794', span2: '84', span3: '3'
                        },
                        {
                            srcs: 'http://small.justeasy.cn/201809/20180907213908_5b927f7cc76be.jpg', name: ' 现代办公室休闲餐饮区', span1: 'ID:309865', span2: '43', span3: '0'
                        },
                        {
                            srcs: 'http://small.justeasy.cn/201809/20180913140214_5b99fd66ed477.jpg', name: ' 现代售楼处-前台大厅', span1: 'ID:310793', span2: '73', span3: '2'
                        },
                        {
                            srcs: 'http://small.justeasy.cn/201809/20180911105947_5b972fa3796fa.jpg', name: '现代电梯厅', span1: 'ID:310560', span2: '88', span3: '2'
                        },
                        {
                            srcs: 'http://small.justeasy.cn/201809/20180911114743_5b973adf033ac.jpg', name: '工业风餐厅', span1: 'ID:310580', span2: '234', span3: '5'
                        },
                        {
                            srcs: 'http://small.justeasy.cn/201809/20180911222846_5b97d11eb4b6e.jpg', name: '现代服装店', span1: 'ID:310760', span2: '118', span3: '1'
                        },
                        {
                            srcs: 'http://small.justeasy.cn/201809/20180907151523_5b92258b8af12.jpg', name: '现代办公接待大堂', span1: 'ID:310187', span2: '152', span3: '2'
                        },
                        {
                            srcs: 'http://small.justeasy.cn/201809/20180911152316_5b976d6415c09.jpg', name: '后现代办公前台接待台', span1: 'ID:310653', span2: '503', span3: '6'
                        }]
                    }, {
                        item: [{
                            srcs: 'http://small.justeasy.cn/201809/20180911210334_5b97bd2644c71.jpg', name: '意大利 米洛提 Minotti 现代客厅', span1: 'ID:310443', span2: '84', span3: '2'
                        },
                        {
                            srcs: 'http://small.justeasy.cn/201809/20180907124155_5b920193af873.jpg', name: ' 现代卧室', span1: 'ID:309737', span2: '146', span3: '2'
                        },
                        {
                            srcs: 'http://small.justeasy.cn/201809/20180913012123_5b994b13135e2.jpg', name: ' 现代儿童房', span1: 'ID:311040', span2: '97', span3: '3'
                        },
                        {
                            srcs: 'http://small.justeasy.cn/201809/20180912221524_5b991f7c0f6ad.jpg', name: '现代卫生间', span1: 'ID:311026', span2: '110', span3: '6'
                        },
                        {
                            srcs: 'http://small.justeasy.cn/201809/20180912112709_5b98878d2eb4f.jpg', name: '现代客餐厅', span1: 'ID:310858', span2: '218', span3: '3'
                        },
                        {
                            srcs: 'http://small.justeasy.cn/201809/20180906163559_5b90e6ef23a65.jpg', name: '现代风格客餐厅', span1: 'ID:309523', span2: '258', span3: '2'
                        },
                        {
                            srcs: 'http://small.justeasy.cn/201809/20180910074006_5b95af56c8756.jpg', name: '现代简约卧室样板房', span1: 'ID:310187', span2: '163', span3: '5'
                        },
                        {
                            srcs: 'http://small.justeasy.cn/201809/20180909132127_5b94add7bccdb.jpg', name: '现代玄关入口楼梯', span1: 'ID:310115', span2: '187', span3: '1'
                        }]
                    }, {
                        item: [{
                            srcs: 'http://small.justeasy.cn/pano/20180909/f7d7c533be94d96cc37bb6ebc76e6e11/20180909122408_5b94a068dd387.tiles/thumb.jpg', name: '现代轻奢客餐厅全景', span1: 'ID:310103', span2: '321', span3: '1'
                        },
                        {
                            srcs: 'http://small.justeasy.cn/pano/20180907/ffc35649d11e790e8ed42a31808d02f8/20180907102648_5b91e1e84c749.tiles/thumb.jpg', name: ' 现代客餐厅全景', span1: 'ID:309681', span2: '621', span3: '3'
                        },
                        {
                            srcs: 'http://small.justeasy.cn/pano/20180904/bc4af0339a483d626ded5d9d9efcd2d2/20180904192308_5b8e6b1c20e4d.tiles/thumb.jpg', name: ' 现代售楼处-前台大厅', span1: 'ID:309141', span2: '1667', span3: '13'
                        },
                        {
                            srcs: 'http://small.justeasy.cn/pano/20180809/2af796931a1b4481201d972807d646f6/20180809191255_5b6c21b78b8be.tiles/thumb.jpg', name: '新中式茶室会议室全景', span1: 'ID:303620', span2: '2530', span3: '11'
                        },
                        {
                            srcs: 'http://small.justeasy.cn/pano/20180805/4ddbea4b5a4defa480ea8b8fadc2653a/20180805220926_5b670516c8022.tiles/thumb.jpg', name: '现代客餐厅全景', span1: 'ID:302601', span2: '6268', span3: '42'
                        },
                        {
                            srcs: 'http://small.justeasy.cn/pano/20180731/5a27a0e0406c8dcb6406e10313408bef/20180731154608_5b6013c023ac5.tiles/thumb.jpg', name: '现代客厅全景', span1: 'ID:301144', span2: '4155', span3: '19'
                        },
                        {
                            srcs: 'http://small.justeasy.cn/pano/20180730/d96079de237c949d2d57662024de5af7/20180730141509_5b5eaced773a6.tiles/thumb.jpg', name: '现代客餐厅全景', span1: 'ID:300857', span2: '389', span3: '1'
                        },
                        {
                            srcs: 'http://small.justeasy.cn/pano/20180730/bc4af0339a483d626ded5d9d9efcd2d2/20180730092913_5b5e69e99b48a.tiles/thumb.jpg', name: '现代客餐厅全景', span1: 'ID:300756', span2: '4854', span3: '69'
                        }]
                    }, {
                        id: 1,
                        item: [{
                            srcs: 'http://small.justeasy.cn/201809/20180907154506_5b922c8234170.jpg', name: '现代办公室', span1: 'ID:309794', span2: '84', span3: '3'
                        },
                        {
                            srcs: 'http://small.justeasy.cn/201809/20180907213908_5b927f7cc76be.jpg', name: ' 现代办公室休闲餐饮区', span1: 'ID:309865', span2: '43', span3: '0'
                        },
                        {
                            srcs: 'http://small.justeasy.cn/201809/20180913140214_5b99fd66ed477.jpg', name: ' 现代售楼处-前台大厅', span1: 'ID:310793', span2: '73', span3: '2'
                        },
                        {
                            srcs: 'http://small.justeasy.cn/201809/20180911105947_5b972fa3796fa.jpg', name: '现代电梯厅', span1: 'ID:310560', span2: '88', span3: '2'
                        },
                        {
                            srcs: 'http://small.justeasy.cn/201809/20180911114743_5b973adf033ac.jpg', name: '工业风餐厅', span1: 'ID:310580', span2: '234', span3: '5'
                        },
                        {
                            srcs: 'http://small.justeasy.cn/201809/20180911222846_5b97d11eb4b6e.jpg', name: '现代服装店', span1: 'ID:310760', span2: '118', span3: '1'
                        },
                        {
                            srcs: 'http://small.justeasy.cn/201809/20180907151523_5b92258b8af12.jpg', name: '现代办公接待大堂', span1: 'ID:310187', span2: '152', span3: '2'
                        },
                        {
                            srcs: 'http://small.justeasy.cn/201809/20180911152316_5b976d6415c09.jpg', name: '后现代办公前台接待台', span1: 'ID:310653', span2: '503', span3: '6'
                        }]
                    }, {
                        item: [{
                            srcs: 'http://small.justeasy.cn/201809/20180911210334_5b97bd2644c71.jpg', name: '意大利 米洛提 Minotti 现代客厅', span1: 'ID:310443', span2: '84', span3: '2'
                        },
                        {
                            srcs: 'http://small.justeasy.cn/201809/20180907124155_5b920193af873.jpg', name: ' 现代卧室', span1: 'ID:309737', span2: '146', span3: '2'
                        },
                        {
                            srcs: 'http://small.justeasy.cn/201809/20180913012123_5b994b13135e2.jpg', name: ' 现代儿童房', span1: 'ID:311040', span2: '97', span3: '3'
                        },
                        {
                            srcs: 'http://small.justeasy.cn/201809/20180912221524_5b991f7c0f6ad.jpg', name: '现代卫生间', span1: 'ID:311026', span2: '110', span3: '6'
                        },
                        {
                            srcs: 'http://small.justeasy.cn/201809/20180912112709_5b98878d2eb4f.jpg', name: '现代客餐厅', span1: 'ID:310858', span2: '218', span3: '3'
                        },
                        {
                            srcs: 'http://small.justeasy.cn/201809/20180906163559_5b90e6ef23a65.jpg', name: '现代风格客餐厅', span1: 'ID:309523', span2: '258', span3: '2'
                        },
                        {
                            srcs: 'http://small.justeasy.cn/201809/20180910074006_5b95af56c8756.jpg', name: '现代简约卧室样板房', span1: 'ID:310187', span2: '163', span3: '5'
                        },
                        {
                            srcs: 'http://small.justeasy.cn/201809/20180909132127_5b94add7bccdb.jpg', name: '现代玄关入口楼梯', span1: 'ID:310115', span2: '187', span3: '1'
                        }]
                    }, {
                        item: [{
                            srcs: 'http://small.justeasy.cn/pano/20180909/f7d7c533be94d96cc37bb6ebc76e6e11/20180909122408_5b94a068dd387.tiles/thumb.jpg', name: '现代轻奢客餐厅全景', span1: 'ID:310103', span2: '321', span3: '1'
                        },
                        {
                            srcs: 'http://small.justeasy.cn/pano/20180907/ffc35649d11e790e8ed42a31808d02f8/20180907102648_5b91e1e84c749.tiles/thumb.jpg', name: ' 现代客餐厅全景', span1: 'ID:309681', span2: '621', span3: '3'
                        },
                        {
                            srcs: 'http://small.justeasy.cn/pano/20180904/bc4af0339a483d626ded5d9d9efcd2d2/20180904192308_5b8e6b1c20e4d.tiles/thumb.jpg', name: ' 现代售楼处-前台大厅', span1: 'ID:309141', span2: '1667', span3: '13'
                        },
                        {
                            srcs: 'http://small.justeasy.cn/pano/20180809/2af796931a1b4481201d972807d646f6/20180809191255_5b6c21b78b8be.tiles/thumb.jpg', name: '新中式茶室会议室全景', span1: 'ID:303620', span2: '2530', span3: '11'
                        },
                        {
                            srcs: 'http://small.justeasy.cn/pano/20180805/4ddbea4b5a4defa480ea8b8fadc2653a/20180805220926_5b670516c8022.tiles/thumb.jpg', name: '现代客餐厅全景', span1: 'ID:302601', span2: '6268', span3: '42'
                        },
                        {
                            srcs: 'http://small.justeasy.cn/pano/20180731/5a27a0e0406c8dcb6406e10313408bef/20180731154608_5b6013c023ac5.tiles/thumb.jpg', name: '现代客厅全景', span1: 'ID:301144', span2: '4155', span3: '19'
                        },
                        {
                            srcs: 'http://small.justeasy.cn/pano/20180730/d96079de237c949d2d57662024de5af7/20180730141509_5b5eaced773a6.tiles/thumb.jpg', name: '现代客餐厅全景', span1: 'ID:300857', span2: '389', span3: '1'
                        },
                        {
                            srcs: 'http://small.justeasy.cn/pano/20180730/bc4af0339a483d626ded5d9d9efcd2d2/20180730092913_5b5e69e99b48a.tiles/thumb.jpg', name: '现代客餐厅全景', span1: 'ID:300756', span2: '4854', span3: '69'
                        }]
                    },
                ],
                itt: [],
            }
        },
        mounted() {
            // this.itt = this.date[0].item;
            var that = this
            $('.jright li').on('mouseenter', function () {

                that.aa = $(this).attr('index');
                $(this).css({
                    color: '#ee7800'
                })
            })
            $('.jright li').on('mouseleave', function () {
                $(this).css({
                    color: 'black'
                })
            })

        },
    }
</script>

<style scoped>
    .jjrz {
        width: 1200px;
        margin: 0 auto;
    }

    .rzly {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px
    }

    .jright {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .qbll::before {
        content: "" !important;

    }

    .jright>li::before {
        color: #ccc;
        content: "|";
        padding: 0 15px;
    }

    .jright>li {
        display: inline-block;
        font-size: 14px;
        cursor: pointer;
    }

    .jright>li:hover {
        color: #ee7800;
    }

    .rzlyx {
        width: 1200px;
        margin: 0 auto;
        margin-top: 10px;
        margin-bottom: 20px;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .rzlynr {
        float: left;
        width: 285px;
        /* margin-left: 20px; */
        position: relative;
        overflow: hidden;
        background: #fff;
        margin-bottom: 20px;
        /* margin-right: 15px; */
    }

    .rzlynrr {
        padding: 10px;
    }

    .rzlynrr>h4 {
        width: 100%;
        height: 30px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .rzlynrr>h4>a {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #333;
        font: normal 14px/24px "Microsoft YaHei";
    }

    .rzlynrr>h4>a:hover {
        color: #ee7800;

    }

    .info {
        width: 100%;
        display: table;
        color: #666;
        margin-top: 4px;
        font: normal 14px/24px "Microsoft YaHei";
        overflow: hidden;
    }

    .infor {
        float: right;
        font: normal 14px/24px "Microsoft YaHei";
    }

    .i1 {
        width: 20px;
        height: 18px;
        display: inline-block;
        margin-right: 5px;
        margin-top: 3px;
        vertical-align: sub;
        background: url('../../../assets/mxj1.png') center no-repeat;
    }

    .i2 {
        width: 20px;
        height: 18px;
        display: inline-block;
        margin-right: 5px;
        margin-top: 3px;
        vertical-align: sub;
        background: url('../../../assets/mxj2.png') center no-repeat;

    }

    .ig1 {
        width: 285px;
        height: 285px;
    }
</style>