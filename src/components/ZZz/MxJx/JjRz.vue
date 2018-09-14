<template>
    <div class="jjrz">
        <div class="rzly">
            <h3>家具软装</h3>
            <div>
                <ul class="jright">
                    <li class="qbll">全部</li>
                    <li>沙发</li>
                    <li>床具</li>
                    <li>椅子</li>
                    <li>灯具</li>
                    <li>桌几</li>
                    <li>橱柜</li>
                    <li>陈设饰品</li>
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
        <div class="ggw">
            <div>
                <img src="http://small.justeasy.cn/piclink/201809/20180906160919_5b90e0af90486.png" alt="">
            </div>
            <div>
                <img src="http://small.justeasy.cn/piclink/201809/20180914091632_5b9b0bf041482.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                jjrr: [{
                    srcs:'http://small.justeasy.cn/201809/20180913121614_5b99e48e42000.jpg', name:'现代轻奢客厅', span1:'ID:311105', span2:'141', span3:'2'
                },
                {
                    srcs:'http://small.justeasy.cn/201809/20180913132242_5b99f4222ef45.jpg', name:'意大利范思哲Versace Home奢华边柜摆件组合', span1:'ID:311123', span2:'89', span3:'2'
                },
                {
                    srcs:'http://small.justeasy.cn/201809/20180912175713_5b98e2f960021.jpg', name:' 现代休闲沙发', span1:'ID:310958', span2:'100', span3:'3'
                },
                {
                    srcs:'http://small.justeasy.cn/201809/20180913155258_5b9a175a5e195.jpg', name:'现代墙饰组合', span1:'ID:311176', span2:'58', span3:'0'
                },
                {
                    srcs:'http://small.justeasy.cn/201809/20180913121230_5b99e3aee59ef.jpg', name:'欧式沙发组合', span1:'ID:311104', span2:'89', span3:'2'
                },
                {
                    srcs:'http://small.justeasy.cn/201809/20180913135226_5b99fb1a9115a.jpg', name:'现代北欧餐桌椅吧台组合', span1:'ID:311129', span2:'153', span3:'2'
                },
                {
                    srcs:'http://small.justeasy.cn/201809/20180913121729_5b99e4d9c2820.jpg', name:'现代床具组合', span1:'ID:311107', span2:'116', span3:'3'
                },
                {
                    srcs:'http://small.justeasy.cn/201809/20180913092533_5b99bc8da663a.jpg', name:'现代椅子茶几组合', span1:'ID:311054', span2:'167', span3:'15'
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
        flex-wrap: wrap;
        justify-content: space-between;
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
    .ggw{
        width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
     .ig1{
        width: 285px;
        height: 285px;
    }
</style>