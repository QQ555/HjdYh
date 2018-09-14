<template>
    <div class="jjrz">
        <div class="rzly">
            <h3>家装空间</h3>
            <div>
                <ul class="jright">
                    <li class="qbll">全部</li>
                    <li>客厅</li>
                    <li>餐厅</li>
                    <li>卧室</li>
                    <li>书房</li>
                    <li>厨房</li>
                    <li>茶室</li>
                </ul>
            </div>
        </div>
        <div class="rzlyx">
            <div class="rzlynr" v-for="jj in jjrr" :key="jj">
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
                jjrr: [{
                    srcs:'http://small.justeasy.cn/201809/20180911210334_5b97bd2644c71.jpg', name:'意大利 米洛提 Minotti 现代客厅', span1:'ID:310443', span2:'84', span3:'2'
                },
                {
                    srcs:'http://small.justeasy.cn/201809/20180907124155_5b920193af873.jpg', name:' 现代卧室', span1:'ID:309737', span2:'146', span3:'2'
                },
                {
                    srcs:'http://small.justeasy.cn/201809/20180913012123_5b994b13135e2.jpg', name:' 现代儿童房', span1:'ID:311040', span2:'97', span3:'3'
                },
                {
                    srcs:'http://small.justeasy.cn/201809/20180912221524_5b991f7c0f6ad.jpg', name:'现代卫生间', span1:'ID:311026', span2:'110', span3:'6'
                },
                {
                    srcs:'http://small.justeasy.cn/201809/20180912112709_5b98878d2eb4f.jpg', name:'现代客餐厅', span1:'ID:310858', span2:'218', span3:'3'
                },
                {
                    srcs:'http://small.justeasy.cn/201809/20180906163559_5b90e6ef23a65.jpg', name:'现代风格客餐厅', span1:'ID:309523', span2:'258', span3:'2'
                },
                {
                    srcs:'http://small.justeasy.cn/201809/20180910074006_5b95af56c8756.jpg', name:'现代简约卧室样板房', span1:'ID:310187', span2:'163', span3:'5'
                },
                {
                    srcs:'http://small.justeasy.cn/201809/20180909132127_5b94add7bccdb.jpg', name:'现代玄关入口楼梯', span1:'ID:310115', span2:'187', span3:'1'
                }]
            }
        }
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
     .ig1{
        width: 285px;
        height: 285px;
    }
</style>