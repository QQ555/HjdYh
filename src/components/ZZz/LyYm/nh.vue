<template>
    <div>

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
            }
        }
    }
</script>

<style scoped>
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