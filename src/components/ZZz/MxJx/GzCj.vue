<template>
    <div class="jjrz">
        <div class="rzly">
            <h3>工装场景</h3>
            <div>
                <ul class="jright">
                    <li class="qbll">全部</li>
                    <li>餐饮娱乐</li>
                    <li>酒店空间</li>
                    <li>商业空间</li>
                    <li>办公机构</li>
                    <li>公共空间</li>
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
                    srcs:'http://small.justeasy.cn/201809/20180907154506_5b922c8234170.jpg', name:'现代办公室', span1:'ID:309794', span2:'84', span3:'3'
                },
                {
                    srcs:'http://small.justeasy.cn/201809/20180907213908_5b927f7cc76be.jpg', name:' 现代办公室休闲餐饮区', span1:'ID:309865', span2:'43', span3:'0'
                },
                {
                    srcs:'http://small.justeasy.cn/201809/20180913140214_5b99fd66ed477.jpg', name:' 现代售楼处-前台大厅', span1:'ID:310793', span2:'73', span3:'2'
                },
                {
                    srcs:'http://small.justeasy.cn/201809/20180911105947_5b972fa3796fa.jpg', name:'现代电梯厅', span1:'ID:310560', span2:'88', span3:'2'
                },
                {
                    srcs:'http://small.justeasy.cn/201809/20180911114743_5b973adf033ac.jpg', name:'工业风餐厅', span1:'ID:310580', span2:'234', span3:'5'
                },
                {
                    srcs:'http://small.justeasy.cn/201809/20180911222846_5b97d11eb4b6e.jpg', name:'现代服装店', span1:'ID:310760', span2:'118', span3:'1'
                },
                {
                    srcs:'http://small.justeasy.cn/201809/20180907151523_5b92258b8af12.jpg', name:'现代办公接待大堂', span1:'ID:310187', span2:'152', span3:'2'
                },
                {
                    srcs:'http://small.justeasy.cn/201809/20180911152316_5b976d6415c09.jpg', name:'后现代办公前台接待台', span1:'ID:310653', span2:'503', span3:'6'
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