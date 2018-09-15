<template>
    <div>
        <div class="xxz">
            <h3>友情链接</h3>
            <span>Friendship link</span>
            <div class="rkk">
                友链QQ：2982125935
            </div>
        </div>
        <div class="links">
            <ul>
                <li v-for="qxz in yq" :key="qxz">
                    <a href="#">{{qxz}} </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                yq: [

                    '装修效果图',
                    '保障网',
                    '秀给网',
                    '装修网',
                    '南京装修',
                    '设计素材',
                    '中国室内设计联盟',
                    'CAD',
                    '3d模型下载',
                    '3dmax下载',
                    '装修公司',
                    '朱峰社区',
                    '全屋定制',
                    '木地板',
                    '整体橱柜',
                    '大作',
                    '中国设计之窗',
                    '我图网',
                    '土木在线论坛',
                    '土木工程'

                ]
            }
        }
    }
</script>

<style scoped>
    .xxz {
        width: 1200px;
        text-align: center;
        margin: 0 auto;
        position: relative;
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

    .rkk {
        position: absolute;
        right: 0;
        top: 4px;
        font: normal 14px/24px "Microsoft YaHei";
    }

    .links {
        width: 1200px;
        margin: 20px auto 50px;
        height:100px;
    }
    .links>ul{
        overflow: hidden;
    }
    .links li {
        margin-right: 24px;
        float: left;
    }

    .links li>a {
        color: #333;
        font: normal 14px/24px "Microsoft YaHei";
    }

    .links li>a:hover {
        color: #ee7800;
    }
</style>