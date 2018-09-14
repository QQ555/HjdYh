<template>
    <div class="jjrz">
        <div class="rzly">
            <h3>全景模型</h3>
            <div class="div_5">
              <a href="#">
                  查看更多
                  <i class="i3">></i>
              </a>
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
                    srcs:'http://small.justeasy.cn/pano/20180909/f7d7c533be94d96cc37bb6ebc76e6e11/20180909122408_5b94a068dd387.tiles/thumb.jpg', name:'现代轻奢客餐厅全景', span1:'ID:310103', span2:'321', span3:'1'
                },
                {
                    srcs:'http://small.justeasy.cn/pano/20180907/ffc35649d11e790e8ed42a31808d02f8/20180907102648_5b91e1e84c749.tiles/thumb.jpg', name:' 现代客餐厅全景', span1:'ID:309681', span2:'621', span3:'3'
                },
                {
                    srcs:'http://small.justeasy.cn/pano/20180904/bc4af0339a483d626ded5d9d9efcd2d2/20180904192308_5b8e6b1c20e4d.tiles/thumb.jpg', name:' 现代售楼处-前台大厅', span1:'ID:309141', span2:'1667', span3:'13'
                },
                {
                    srcs:'http://small.justeasy.cn/pano/20180809/2af796931a1b4481201d972807d646f6/20180809191255_5b6c21b78b8be.tiles/thumb.jpg', name:'新中式茶室会议室全景', span1:'ID:303620', span2:'2530', span3:'11'
                },
                {
                    srcs:'http://small.justeasy.cn/pano/20180805/4ddbea4b5a4defa480ea8b8fadc2653a/20180805220926_5b670516c8022.tiles/thumb.jpg', name:'现代客餐厅全景', span1:'ID:302601', span2:'6268', span3:'42'
                },
                {
                    srcs:'http://small.justeasy.cn/pano/20180731/5a27a0e0406c8dcb6406e10313408bef/20180731154608_5b6013c023ac5.tiles/thumb.jpg', name:'现代客厅全景', span1:'ID:301144', span2:'4155', span3:'19'
                },
                {
                    srcs:'http://small.justeasy.cn/pano/20180730/d96079de237c949d2d57662024de5af7/20180730141509_5b5eaced773a6.tiles/thumb.jpg', name:'现代客餐厅全景', span1:'ID:300857', span2:'389', span3:'1'
                },
                {
                    srcs:'http://small.justeasy.cn/pano/20180730/bc4af0339a483d626ded5d9d9efcd2d2/20180730092913_5b5e69e99b48a.tiles/thumb.jpg', name:'现代客餐厅全景', span1:'ID:300756', span2:'4854', span3:'69'
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
    .div_5>a{
        color: #999;
        font: normal 14px/24px "Microsoft YaHei";
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .div_5>a:hover{
        color: #ee7800;
        font: normal 14px/24px "Microsoft YaHei";
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .i3{
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
    .ig1{
        width: 285px;
        height: 285px;
    }
</style>