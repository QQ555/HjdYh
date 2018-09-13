<template>
    <div id="d1">
        <div id="baba">
            <div id="d2" @mouseenter="senter" @mouseleave="lseave">
                <span>3D模型</span>
            </div>
            <div class="no-empty-div">
                <ul id="enn">
                    <li>3D模型</li>
                    <li>SU模型</li>
                    <li>贴图</li>
                    <li>施工图</li>
                    <li>设计案例</li>
                </ul>
            </div>
        </div>
        <div id="form">
            <form action="">
                <input type="text" placeholder="请输入关键词、ID或以图搜图">
                <span></span>
            </form>
        </div>
        <div id="fdj">
                <input type="text">
        </div>
    </div>

</template>

<script>
    export default {
        methods: {
            senter() {
                $('.no-empty-div').css({
                    display: "block"
                })
            },
            lseave() {
                $('.no-empty-div').css({
                    display: "none"
                })
            }
        }
    }
</script>

<style scoped>
    #d1 {
        width: 702px;
        height: 40px;
        background: #fff;
        border: 1px solid #e6e6e6;
        margin: 20px auto 0;
        border-radius: 40px;
    }

    #baba {
        position: relative;
        width: 105px;
        text-align: center;
        cursor: pointer;
        float: left;
        box-sizing: border-box;
        font-size: 14px;
    }

    #d2 {
        line-height: 40px;
        background: #f5f5f5;
        border-radius: 40px 0 0 40px;
        cursor: pointer;
        box-sizing: border-box;
    }

    #d2::after {
        content: "";
        width: 0;
        height: 0;
        border-width: 4px;
        border-style: solid;
        border-color: black transparent transparent transparent;
        margin-left: 4px;
        font-size: inherit;
        text-rendering: auto;
        position: absolute;
        top: 18px;
    }

    .no-empty-div {
        width: 105px;
        /* padding: 10px; */
        border-radius: 5px;
        background: #fff;
        position: absolute;
        box-shadow: 0 0 4px rgba(0, 0, 0, .1);
        display: none;
        z-index: 100;
    }

    .no-empty-div:before {
        content: "";
        display: block;
        border-color: transparent;
        border-bottom-color: #fff;
        border-width: 10px;
        border-style: solid;
        width: 0;
        height: 0;
        position: absolute;
        bottom: 100%;
        right: 41%;
    }

    #enn>li {
        line-height: 36px;
        width: auto;
        box-sizing: border-box;
        text-align: center;
        cursor: pointer;
        font-size: 14px;
        width: 100%;

    }

    #enn>ul {
        width: 100%;
    }

    #enn>li:hover {
        color: #ff8d1c;
        background-color: #e6e6e6;

    }

    #form {
        width: 504px;
        height: 32px;
        padding: 4px 0;
        box-sizing: border-box;
        float: left;
        position: relative;
    }

    #form>form>input {
        background: none;
        width: 100%;
        line-height: 32px;
        height: 32px;
        box-sizing: border-box;
        padding: 0 10px;
        border: none;
        font-size: 14px;
    }

    #form>form>span {
        position: absolute;
        right: 10px;
        top: 11px;
        background: url('../../../assets/zx.png') center no-repeat;
        display: block;
        width: 24px;
        height: 20px;
        cursor: pointer;
        display: block;
    }
    #fdj{
        width: 90px;
        height: 40px;
        border-radius: 0 40px 40px 0;
        background: #fba70a;
        float: right;
        box-sizing: border-box;
    }
    #fdj>input{
        width: 100%;
        height: 100%;
        background: url('../../../assets/bxzl.png') center no-repeat;
        cursor: pointer;
        border: none;
    }
</style>