<template>
    <div>
        <div class="jxdb">
            <div class="yx">
                精选文章 
                <span class="fs14">/ Selected Articles</span>
            </div>
            <div class="more">
                <a href="#">查看更多</a>
            </div>
        </div>
        <jwnr/>
        <fbxt/>
    </div>
</template>

<script>
import jwnr from "@/components/XgT/JwNr";
import fbxt from "@/components/XgT/FbXt";

export default {
    components:{
        jwnr,
        fbxt,
    }
}
</script>

<style scoped>
    .jxdb{
        width: 1200px;
        margin: 0 auto;
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .yx{
        font: normal 24px/28px "Microsoft YaHei";
        color: #333;
    }
    .fs14{
        font-size: 14px;
        line-height: 24px;
        margin-left: 10px;
    }
    .more>a{
        color: #666;
        background: url('../../assets/yzt.png')no-repeat right;
        padding-right: 25px;
        font: normal 14px/24px "Microsoft YaHei",tahoma,arial,Hiragino Sans GB;
    }
</style>
