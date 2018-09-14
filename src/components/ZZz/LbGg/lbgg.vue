<template>
    <div>
        <div class="div_3">
            <div class="div_4">
                <img src="../../../assets/gglb.jpg" alt="">
                <span>公告&nbsp;:</span>&nbsp;&nbsp;
                <a href="#">送福利啦！200套小户型最新案例免费领取！ </a>
            </div>
            <a href="#">最近更新</a>
        </div>
        <div class="div_5">
            <li class="div_6">

                <div @mouseenter="asesnter" @mouseleave="asleave">
                    <img src="../../../assets/mx1.png" alt="">

                    <span>
                        <h4 class="hh1">年会员专区</h4>
                        <p>年会员模型持续更新中...</p>
                    </span>

                </div>

            </li>
            <li class="div_6">
                <div @mouseenter="bsesnter" @mouseleave="bsleave">
                    <img src="../../../assets/mx2.png" alt="">
                    <span>
                        <h4 class="hh2">品牌模型</h4>
                        <p>知名品牌家具模型...</p>
                    </span>
                </div>

            </li>
            <li class="div_6">
                <div @mouseenter="csesnter" @mouseleave="csleave">
                    <img src="../../../assets/mx3.png" alt="">


                    <span>

                        <h4 class="hh3">名师模型</h4>
                        <p>优秀设计案例模型...</p>
                    </span>

                </div>
            </li>
            <li class="div_6">
                <div @mouseenter="dsesnter" @mouseleave="dsleave">
                    <img src="../../../assets/mx4.png" alt="">


                    <span>
                        <h4 class="hh4">悬赏模型</h4>
                        <p>接悬赏赚现金</p>
                    </span>
                </div>

            </li>
        </div>
    </div>
</template>

<script>
    


    export default {
        methods: {
            asesnter() {
                $('.hh1').css({
                    color: '#ee7800'

                })
            },
            asleave() {
                $('.hh1').css({
                    color: 'black'

                })
            },
            bsesnter() {
                $('.hh2').css({
                    color: '#ee7800'

                })
            },
            bsleave() {
                $('.hh2').css({
                    color: 'black'

                })
            },
            csesnter() {
                $('.hh3').css({
                    color: '#ee7800'

                })
            },
            csleave() {
                $('.hh3').css({
                    color: 'black'

                })
            },

            dsesnter() {
                $('.hh4').css({
                    color: '#ee7800'

                })
            },
            dsleave() {
                $('.hh4').css({
                    color: 'black'

                })
            },
        }
    }
</script>

<style scoped>
    .div_3 {
        width: 1200px;
        height: 24px !important;
        margin-top: 30px !important;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .div_4 {
        background: #f5f5f5;
        border-radius: 20px;
        color: #333;
        width: 980px;
        padding: 8px 15px;
    }

    .div_4>img {
        width: 13px;
        height: 14px;
        line-height: 24px;
    }

    .div_4>a {
        color: #ee7800;
        line-height: 24px;
    }

    .div_3>a {
        font: bold 20px/38px "Microsoft YaHei";
        color: #333;
        background: url('../../../assets/xy.png') right no-repeat;
        padding-right: 50px;
    }

    .div_5 {
        width: 1200px;
        margin: 0 auto;
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .div_6 {
        width: 292px;
        height: 90px;
        background-color: #f5f5f5;
        border-radius: 2px;
        /* text-align: center; */
    }

    .div_6>div {
        width: 252px;
        height: 60px;
        display: flex;
        align-items: center;
        cursor: pointer;
        /* justify-content: space-between; */

        margin-top: 20px;
        padding: 0 30px;
    }

    .div_6>div>img {
        margin-right: 15px;
    }

    .div_6>div>span>p {
        color: #666;
        font-size: 14px;
        box-sizing: border-box;
    }
</style>