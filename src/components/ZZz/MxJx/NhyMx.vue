<template>
    <div>
        <div class="xxz">
            <h3>年会员模型</h3>
            <span>Annual membership model</span>
        </div>
        <div class="ddd">
            <div>
                <select name="" id="" class="xk">
                    <option value="">2018</option>
                    <option value="">2017</option>
                    <option value="">2016</option>
                    <option value="">2015</option>
                    <option value="">2014</option>
                    <option value="">2013</option>
                    <option value="">2012</option>

                </select>
                <ul class="yf">
                    <li v-for="(item,index) in asl" v-on:click="lois(index)" v-bind:class="{active:index==isActive}">{{item}}</li>
                </ul>
            </div>
            <div class="div_5">
                <a href="#">
                    查看更多
                    <i class="i3">></i>
                </a>
            </div>
        </div>
        <div class="rzlyx">
            <div class="rzlynr" v-for="jj in jjrr[isActive].item" :key="jj">
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
                asl: ['9月', '8月', '7月', '6月', '5月', '4月', '3月', '2月', '1月'],
                isActive: 0,
                jjrr: [{
                    item: [{
                        srcs: 'http://small.justeasy.cn/201712/20171201165846_5a2119c639e64.jpg', name: '新中式卧室', span1: 'ID:310103', span2: '321', span3: '1'
                    },
                    {
                        srcs: 'http://small.justeasy.cn/201711/20171128090154_5a1cb58299769.jpg', name: ' 现代客餐厅', span1: 'ID:309681', span2: '621', span3: '3'
                    },
                    {
                        srcs: 'http://small.justeasy.cn/201711/20171129184650_5a1e901ad80c8.jpg', name: '  C&C壹挚设计 华标峰湖御园·山居墅新中式客厅', span1: 'ID:309141', span2: '1667', span3: '13'
                    },
                    {
                        srcs: 'http://small.justeasy.cn/201712/20171201173733_5a2122dd5aa25.jpg', name: '新中式卧室', span1: 'ID:303620', span2: '2530', span3: '11'
                    }]
                }, {
                    item: [{
                        srcs: 'http://small.justeasy.cn/201808/20180831111548_5b88b2e4d1fc9.jpg', name: '现代客餐厅', span1: 'ID:310103', span2: '321', span3: '1'
                    },
                    {
                        srcs: 'http://small.justeasy.cn/201808/20180831100456_5b88a248818ec.jpg', name: ' 现代轻奢客餐厅', span1: 'ID:309681', span2: '621', span3: '3'
                    },
                    {
                        srcs: 'http://small.justeasy.cn/201808/20180831100230_5b88a1b6087ec.jpg', name: '新中式休闲区', span1: 'ID:309141', span2: '1667', span3: '13'
                    },
                    {
                        srcs: 'http://small.justeasy.cn/201808/20180828154049_5b84fc813e94f.jpg', name: '新中式售楼处', span1: 'ID:303620', span2: '2530', span3: '11'
                    }]
                },
                {
                    item: [{
                        srcs: 'http://small.justeasy.cn/201807/20180731115815_5b5fde571a30c.jpg', name: '新中式客厅', span1: 'ID:310103', span2: '321', span3: '1'
                    },
                    {
                        srcs: 'http://small.justeasy.cn/201807/20180731085819_5b5fb42b1b156.jpg', name: ' 新中式卧室', span1: 'ID:309681', span2: '621', span3: '3'
                    },
                    {
                        srcs: 'http://small.justeasy.cn/201807/20180730101202_5b5e73f2a2496.jpg', name: '现代客厅', span1: 'ID:309141', span2: '1667', span3: '13'
                    },
                    {
                        srcs: 'http://small.justeasy.cn/201807/20180726104305_5b59353918e41.jpg', name: '现代客厅', span1: 'ID:303620', span2: '2530', span3: '11'
                    }]
                }, {
                    item: [{
                        srcs: 'http://small.justeasy.cn/201806/20180629110814_5b35a29e124c4.jpg', name: '新中式客餐厅', span1: 'ID:310103', span2: '321', span3: '1'
                    },
                    {
                        srcs: 'http://small.justeasy.cn/201806/20180628144936_5b348500628c7.jpg', name: ' 黄全 新中式酒店大堂', span1: 'ID:309681', span2: '621', span3: '3'
                    },
                    {
                        srcs: 'http://small.justeasy.cn/201806/20180627092452_5b32e764b5f9c.jpg', name: '新中式售楼处', span1: 'ID:309141', span2: '1667', span3: '13'
                    },
                    {
                        srcs: 'http://small.justeasy.cn/201806/20180626132658_5b31cea2f33fd.jpg', name: '黄全 集艾设计 新中式售楼处', span1: 'ID:303620', span2: '2530', span3: '11'
                    }]
                },
                {
                    item: [{
                        srcs: 'http://small.justeasy.cn/201712/20171201165846_5a2119c639e64.jpg', name: '新中式卧室', span1: 'ID:310103', span2: '321', span3: '1'
                    },
                    {
                        srcs: 'http://small.justeasy.cn/201711/20171128090154_5a1cb58299769.jpg', name: ' 现代客餐厅', span1: 'ID:309681', span2: '621', span3: '3'
                    },
                    {
                        srcs: 'http://small.justeasy.cn/201711/20171129184650_5a1e901ad80c8.jpg', name: '  C&C壹挚设计 华标峰湖御园·山居墅新中式客厅', span1: 'ID:309141', span2: '1667', span3: '13'
                    },
                    {
                        srcs: 'http://small.justeasy.cn/201712/20171201173733_5a2122dd5aa25.jpg', name: '新中式卧室', span1: 'ID:303620', span2: '2530', span3: '11'
                    }]
                }, {
                    item: [{
                        srcs: 'http://small.justeasy.cn/201808/20180831111548_5b88b2e4d1fc9.jpg', name: '现代客餐厅', span1: 'ID:310103', span2: '321', span3: '1'
                    },
                    {
                        srcs: 'http://small.justeasy.cn/201808/20180831100456_5b88a248818ec.jpg', name: ' 现代轻奢客餐厅', span1: 'ID:309681', span2: '621', span3: '3'
                    },
                    {
                        srcs: 'http://small.justeasy.cn/201808/20180831100230_5b88a1b6087ec.jpg', name: '新中式休闲区', span1: 'ID:309141', span2: '1667', span3: '13'
                    },
                    {
                        srcs: 'http://small.justeasy.cn/201808/20180828154049_5b84fc813e94f.jpg', name: '新中式售楼处', span1: 'ID:303620', span2: '2530', span3: '11'
                    }]
                },
                {
                    item: [{
                        srcs: 'http://small.justeasy.cn/201807/20180731115815_5b5fde571a30c.jpg', name: '新中式客厅', span1: 'ID:310103', span2: '321', span3: '1'
                    },
                    {
                        srcs: 'http://small.justeasy.cn/201807/20180731085819_5b5fb42b1b156.jpg', name: ' 新中式卧室', span1: 'ID:309681', span2: '621', span3: '3'
                    },
                    {
                        srcs: 'http://small.justeasy.cn/201807/20180730101202_5b5e73f2a2496.jpg', name: '现代客厅', span1: 'ID:309141', span2: '1667', span3: '13'
                    },
                    {
                        srcs: 'http://small.justeasy.cn/201807/20180726104305_5b59353918e41.jpg', name: '现代客厅', span1: 'ID:303620', span2: '2530', span3: '11'
                    }]
                }, {
                    item: [{
                        srcs: 'http://small.justeasy.cn/201806/20180629110814_5b35a29e124c4.jpg', name: '新中式客餐厅', span1: 'ID:310103', span2: '321', span3: '1'
                    },
                    {
                        srcs: 'http://small.justeasy.cn/201806/20180628144936_5b348500628c7.jpg', name: ' 黄全 新中式酒店大堂', span1: 'ID:309681', span2: '621', span3: '3'
                    },
                    {
                        srcs: 'http://small.justeasy.cn/201806/20180627092452_5b32e764b5f9c.jpg', name: '新中式售楼处', span1: 'ID:309141', span2: '1667', span3: '13'
                    },
                    {
                        srcs: 'http://small.justeasy.cn/201806/20180626132658_5b31cea2f33fd.jpg', name: '黄全 集艾设计 新中式售楼处', span1: 'ID:303620', span2: '2530', span3: '11'
                    }]
                },
                {
                    item: [{
                        srcs: 'http://small.justeasy.cn/201807/20180731115815_5b5fde571a30c.jpg', name: '新中式客厅', span1: 'ID:310103', span2: '321', span3: '1'
                    },
                    {
                        srcs: 'http://small.justeasy.cn/201807/20180731085819_5b5fb42b1b156.jpg', name: ' 新中式卧室', span1: 'ID:309681', span2: '621', span3: '3'
                    },
                    {
                        srcs: 'http://small.justeasy.cn/201807/20180730101202_5b5e73f2a2496.jpg', name: '现代客厅', span1: 'ID:309141', span2: '1667', span3: '13'
                    },
                    {
                        srcs: 'http://small.justeasy.cn/201807/20180726104305_5b59353918e41.jpg', name: '现代客厅', span1: 'ID:303620', span2: '2530', span3: '11'
                    }]
                },
                ]
                // jjrr[0]
            }
        },
        methods: {
            lois(index) {
                this.isActive = index

            }
        }
    }
</script>

<style scoped>
    .xxz {
        width: 1200px;
        text-align: center;
        margin: 0 auto;
    }

    .xxz>h3 {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 10px;

    }

    .xxz>span {
        color: #666;
        text-transform: uppercase;
        font-size: 12px;
    }

    .ddd {
        margin: 20px auto 0;
        width: 1200px;
        position: relative;
        display: table;
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .ddd>div {
        display: flex;
    }

    .xk {
        width: 80px;
        height: 32px;
        border: 1px solid #ccc;
        border-radius: 40px !important;
        padding: 0 10px;
        background: #fff url('../../../assets/yf.png') 90% center no-repeat;
        font: normal 14px/24px "Microsoft YaHei";
        font-family: inherit;
        font-size: inherit;
        font-style: inherit;
        font-weight: inherit;
        outline: 0;
        appearance: none;
    }

    .yf {
        display: flex;
        align-items: center;
    }

    .yf>li {

        margin: 0 10px;
        cursor: pointer;
        line-height: 30px;
        padding: 0 10px;
        border-radius: 40px;
    }

    .div_5>a {
        color: #999;
        font: normal 14px/24px "Microsoft YaHei";
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .div_5>a:hover {
        color: #ee7800;
        font: normal 14px/24px "Microsoft YaHei";
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .i3 {
        display: inline-block;
        border-radius: 4px;
        background: #e6e6e6;
        color: #666;
        width: 24px;
        height: 24px;
        margin-left: 8px;
        line-height: 24px;
        text-align: center;
        line-height: 24px;
    }

    .active {
        background-color: #ee7800;
        color: white;
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