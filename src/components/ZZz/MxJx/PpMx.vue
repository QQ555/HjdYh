<template>
    <div>
        <div class="xxz">
            <h3>品牌模型</h3>
            <span>Brand model</span>
            <div class="rkk">
                <a href="#">
                    查看更多
                    <i>></i>
                </a>
            </div>
        </div>
        <div class="ppp">
            <ul style="margin-left:-20px">
                <li class="lpp">
                    <a href="#" class="adv">
                        <div class="g1">
                            <img src="http://small.justeasy.cn/task/201807/20180718132224_5b4ece90831ce.jpg" alt="">
                        </div>
                        <div class="g2">
                            TONINO LAMBORGHINI
                        </div>
                        <div class="g3">
                            意大利
                        </div>
                        <div class="g4">
                            <ul>
                                <li><img src="http://small.justeasy.cn/201805/20180501092325_5ae7c18d76200.jpg" alt=""></li>
                                <li><img src="http://small.justeasy.cn/201805/20180503001853_5ae9e4ed8fc90.jpg" alt=""></li>
                                <li><img src="http://small.justeasy.cn/201805/20180516172328_5afbf8909d1bb.jpg" alt=""></li>
                                <li><img src="http://small.justeasy.cn/201806/20180620065054_5b2988ceb13e8.jpg" alt=""></li>
                            </ul>
                        </div>
                    </a>
                </li>
                <li class="lpp">
                    <a href="#" class="adv">
                        <div class="g1">
                            <img src="http://small.justeasy.cn/task/201807/20180718132224_5b4ece90831ce.jpg" alt="">
                        </div>
                        <div class="g2">
                            TONINO LAMBORGHINI
                        </div>
                        <div class="g3">
                            意大利
                        </div>
                        <div class="g4">
                            <ul>
                                <li><img src="http://small.justeasy.cn/201805/20180501092325_5ae7c18d76200.jpg" alt=""></li>
                                <li><img src="http://small.justeasy.cn/201805/20180503001853_5ae9e4ed8fc90.jpg" alt=""></li>
                                <li><img src="http://small.justeasy.cn/201805/20180516172328_5afbf8909d1bb.jpg" alt=""></li>
                                <li><img src="http://small.justeasy.cn/201806/20180620065054_5b2988ceb13e8.jpg" alt=""></li>
                            </ul>
                        </div>
                    </a>
                </li>
                <li class="lpp"><a href="#" class="adv">
                        <div class="g1">
                            <img src="http://small.justeasy.cn/task/201807/20180718132224_5b4ece90831ce.jpg" alt="">
                        </div>
                        <div class="g2">
                            TONINO LAMBORGHINI
                        </div>
                        <div class="g3">
                            意大利
                        </div>
                        <div class="g4">
                            <ul>
                                <li><img src="http://small.justeasy.cn/201805/20180501092325_5ae7c18d76200.jpg" alt=""></li>
                                <li><img src="http://small.justeasy.cn/201805/20180503001853_5ae9e4ed8fc90.jpg" alt=""></li>
                                <li><img src="http://small.justeasy.cn/201805/20180516172328_5afbf8909d1bb.jpg" alt=""></li>
                                <li><img src="http://small.justeasy.cn/201806/20180620065054_5b2988ceb13e8.jpg" alt=""></li>
                            </ul>
                        </div>
                    </a></li>
                <li class="lpp"><a href="#" class="adv">
                        <div class="g1">
                            <img src="http://small.justeasy.cn/task/201807/20180718132224_5b4ece90831ce.jpg" alt="">
                        </div>
                        <div class="g2">
                            TONINO LAMBORGHINI
                        </div>
                        <div class="g3">
                            意大利
                        </div>
                        <div class="g4">
                            <ul>
                                <li><img src="http://small.justeasy.cn/201805/20180501092325_5ae7c18d76200.jpg" alt=""></li>
                                <li><img src="http://small.justeasy.cn/201805/20180503001853_5ae9e4ed8fc90.jpg" alt=""></li>
                                <li><img src="http://small.justeasy.cn/201805/20180516172328_5afbf8909d1bb.jpg" alt=""></li>
                                <li><img src="http://small.justeasy.cn/201806/20180620065054_5b2988ceb13e8.jpg" alt=""></li>
                            </ul>
                        </div>
                    </a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {

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

    .rkk>a {
        color: #999;
    }

    .rkk>a>i {
        display: inline-block;
        border-radius: 4px;
        background: #e6e6e6;
        color: #666;
        width: 24px;
        height: 24px;
        margin-left: 8px;
        line-height: 24px;
        text-align: center;
        font-size: inherit;
        text-rendering: auto;
    }

    .ppp {
        width: 1200px;
        margin: 0 auto;
        display: table;
        background: #fff;
        margin-top: 20px;
    }
    .ppp>ul{
        display: flex;
        justify-content: space-between;
        overflow: hidden;
    }
    .lpp {
        padding: 13px;
        background: #fff;
        width: 285px;
        height: 422px;
        float: left;
        margin-bottom: 20px;
        text-align: center;
        cursor: pointer;
        font: normal 14px/24px "Microsoft YaHei";
    }

    .adv {
        color: #333;
        text-align: center;
    }

    .g1 {
        width: 100px;
        height: 74px;
        margin: 0 auto;
    }

    .g1>img {
        width: 100%;
        height: 100%;
    }

    .g2 {
        width: 259px;
        height: 24px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: bold;
        margin: 5px 0 0;
        font: normal 14px/24px "Microsoft YaHei";
    }

    .g3 {
        color: #999;
        display: table;
        text-align: center;
        width: 100%;
        margin-bottom: 10px;
    }

    .g4 {
        width: 100%;
        height: 257px;
    }

    .g4>ul {
        margin-left: -3px;
        margin-top: -3px;
    }

    .g4>ul>li {
        width: 127px;
        height: 127px;
        float: left;
        margin-left: 3px;
        margin-top: 3px;
    }

    .g4>ul>li>img {
        width: 100%;
        height: 100%;
    }
</style>