<template>
    <div>
        <div class="xxz">
            <h3>成为模型上传者</h3>
            <span>赋有匠人精神的原创主义者，都会获得社会丰厚的馈赠</span>
        </div>
        <div class="ph">
            <div class="phc">
                <a href="#" style="color: #999;font: normal 14px/24px Microsoft YaHei;">
                    查看更多
                    <i class="i6">></i>
                </a>
            </div>
            <a href="" class="zy">上传模型赚现金</a>
        </div>
        <div class="boxs">
            <ul>
                <li class="shut">
                    <div class="aa">
                        <span class="income">￥9230.34</span>
                        <span class="cylindrical"></span>
                        <span class="number">1</span>
                        <div class="photo">
                            <div>
                                <img src="http://big.justeasy.cn/avatar/201709/20170901172156_59a926b47ff31.jpg" alt="">
                            </div>
                        </div>
                        <span class="ellipsis">好设之图</span>
                    </div>
                </li>
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
        margin-top: 20px;
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

    .ph {
        width: 1200px;
        height: 35px;
        margin: 0 auto;
        position: relative;
        text-align: center;
        margin-bottom: 20px;
    }

    .phc {
        position: absolute;
        right: 0;
        top: 10px;
    }

    .i6 {
        display: inline-block;
        border-radius: 4px;
        background: #e6e6e6;
        color: #666;
        width: 24px;
        height: 24px;
        margin-left: 8px;
        line-height: 24px;
        text-align: center;
    }
    .zy{
        position: absolute;
        right: 120px;
        top: 7px;
        background: #fbdec2;
        border-radius: 4px;
        display: inline-block;
        text-align: center;
        font-size: 14px;
        border: 1px solid #e70;
        color: #e70;
        padding: 4px 10px;
    }
    .boxs{
        width: 1200px;
        margin: 0 auto;
    }
    .shut{
        width: 80px;
        height: 360px;
        text-align: center;
        position: relative;
    }
    .aa{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 70px;
    }
    .income{
        font: normal 12px/24px "Microsoft YaHei";
        display: block;
        color: #ff9900;
    }
    .cylindrical{
        width: 22px;
        height: 200px;
        background: url('../../../assets/hg.jpg')  repeat-y;
        display: block;
        margin: 0 auto;
    }
    .number{
        width: 43px;
        height: 41px;
        margin: 0 auto -4px;
        font: bold 18px/38px "Microsoft YaHei";
        color: #fff;
        display: block;
        background: url('../../../assets/dbb.png') center no-repeat;
    }
    .photo{
        width: 48px;
        height: 48px;
        overflow: hidden;
        margin: 0 auto;
        border-radius: 50%;
        border: 4px solid #f8f8f8;
    }
    .photo img{
        width: 100%;
        height: 100%;
    }
    .ellipsis{
        font-size: 12px;
        color: #333;
        height: 24px;
        white-space: nowrap;
        text-overflow: ellipsis;
        display: block;
        overflow: hidden;
    }
</style>