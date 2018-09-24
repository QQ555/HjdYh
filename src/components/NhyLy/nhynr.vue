<template>
    <div>
        <div class="hyid">
            <div class="box">
                <h2>年会员模型</h2>
            </div>
            <div class="public-scroll">
                <div class="xos">
                    <div class="flet1">
                        <div class="list">
                            <span class="tow2" v-for="(item,index) in asl" v-on:click="lois(index)" v-bind:class="{active:index==isActive}">{{item}}</span>
                            <!-- <span v-on:click="lois(index)" v-bind:class="{active:index==isActive}">最近更新</span> -->
                        </div>
                        <div class="three">
                            <span class="tow2">
                                <input type="checkbox">
                                <span>模型精选</span>
                            </span>
                            <span class="tow2">
                                <input type="checkbox">
                                <span>单体</span>
                            </span>
                        </div>
                    </div>
                    <div class="ssk">
                        <div class="xl">
                            <span>3D模型</span>
                        </div>
                        <input type="text" class="input_1">
                        <input type="text" class="input_2">
                    </div>
                </div>
            </div>
            <!-- <div class="rzlyx">
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
            </div> -->
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
    </div>
</template>

<script>
    export default {
        data() {
            return {
                jjrr: [{
                    item: [{
                        srcs: 'http://small.justeasy.cn/201712/20171201165846_5a2119c639e64.jpg', name: '新中式卧室', span1: 'ID:310103', span2: '321', span3: '1'
                    },
                    {
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
                    }, {
                        srcs: 'http://small.justeasy.cn/201711/20171128090154_5a1cb58299769.jpg', name: ' 现代客餐厅', span1: 'ID:309681', span2: '621', span3: '3'
                    },
                    {
                        srcs: 'http://small.justeasy.cn/201711/20171129184650_5a1e901ad80c8.jpg', name: '  C&C壹挚设计 华标峰湖御园·山居墅新中式客厅', span1: 'ID:309141', span2: '1667', span3: '13'
                    },
                    {
                        srcs: 'http://small.justeasy.cn/201712/20171201173733_5a2122dd5aa25.jpg', name: '新中式卧室', span1: 'ID:303620', span2: '2530', span3: '11'
                    },
                    {
                        srcs: 'http://small.justeasy.cn/201712/20171201165846_5a2119c639e64.jpg', name: '新中式卧室', span1: 'ID:310103', span2: '321', span3: '1'
                    },
                    {
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
                    }, {
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
                ],
                asl: ["综合排序", "最近更新"],
                isActive: 0
            };
        },
        methods: {
            lois(index) {
                this.isActive = index;
            },
            handleScroll() {
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                console.log(scrollTop)
                if (scrollTop > 931) {
                    $('.public-scroll').css({
                        position: 'fixed',
                        borderBottom: '1px solid #f0f0f0',
                        background: '#fff',
                        top: '0px',
                    })
                }
                else {
                    $('.public-scroll').css({
                        position: 'static',
                        borderBottom: 'none',
                        background: 'none',
                        zIndex: '999',
                        width: '100%'
                        /* background: #f4f4f4; */

                    })
                }
            },
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll)
        }
    };
</script>

<style scoped>
    .hyid {
        width: 100%;
        background: #f4f4f4;
    }

    .box {
        width: 1200px;
        margin: 0 auto;
        text-align: center;
    }

    .box>h2 {
        width: 100%;
        height: 110px;
        line-height: 110px;
        color: #333;
        font-size: 36px;
    }

    .public-scroll {
        position: static;
        border-bottom: none;
        background: none;
        z-index: 999;
        width: 100%;
        /* background: #f4f4f4; */
    }

    .xos {
        width: 1200px;
        height: 60px;
        margin: 0 auto;
        z-index: 999;
        line-height: 40px;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .flet1 {
        float: left;
        overflow: hidden;
    }

    .list {
        float: left;
    }

    .one1 {
        color: #ee7700;
        border-bottom: 2px solid #ee7700;
        display: inline-block;
        margin-right: 38px;
        height: 35px;
        line-height: 56px;
        cursor: pointer;
        font: normal 14px/24px "Microsoft YaHei", tahoma, arial, Hiragino Sans GB;
    }

    .active {
        color: #ee7700;
        border-bottom: 2px solid #ee7700;
        display: inline-block;
        margin-right: 38px;
        height: 35px;
        line-height: 56px;
        cursor: pointer;
        font: normal 14px/24px "Microsoft YaHei", tahoma, arial, Hiragino Sans GB;
    }

    .tow2 {
        display: inline-block;
        margin-right: 38px;
        height: 35px;
        line-height: 56px;
        cursor: pointer;
        font: normal 14px/24px "Microsoft YaHei", tahoma, arial, Hiragino Sans GB;
    }

    .three {
        float: left;
    }

    .ssk {
        width: 280px;
        height: 30px;
        background: #fff;
        margin-right: 5px;
        margin-top: 5px;
        border-radius: 40px !important;
        box-sizing: border-box;
        overflow: hidden;
        position: relative;
        float: right;
        line-height: 21px;
    }

    .xl {
        width: 80px;
        height: 30px;
        padding-top: 5px;
        padding-left: 5px;
        float: left;
    }

    .input_1 {
        background: #fff;
        line-height: 20px;
        width: 148px;
        padding: 0;
        height: 20px;
        margin-top: 5px;
        border: none;
        border-left: 1px solid #e6e6e6;
        box-sizing: border-box;
        float: left;
        margin-left: 5px;
    }

    .input_2 {
        position: absolute;
        right: 0;
        top: 0;
        width: 40px;
        height: 30px;
        display: block;
        background: #ff8d1c url("../../assets/cz.png") center no-repeat;
        border-radius: 0 40px 40px 0;
        cursor: pointer;
        border: none;
        z-index: 2;
        float: left;
    }

    .rzlyx {
        width: 1200px;
        margin: 0 auto;
        margin-top: 10px;
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

    .ig1 {
        width: 285px;
        height: 285px;
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
        background: url("../../assets/mxj1.png") center no-repeat;
    }

    .i2 {
        width: 20px;
        height: 18px;
        display: inline-block;
        margin-right: 5px;
        margin-top: 3px;
        vertical-align: sub;
        background: url("../../assets/mxj2.png") center no-repeat;
    }
</style>