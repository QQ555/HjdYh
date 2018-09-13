<template>
    <div id="rs">
        <span id="liboss">
            <li>
                <a href="#">餐厅</a></li>
            <li>
                <a href="#">卧室</a></li>
            <li>
                <a href="#">吊灯</a></li>
            <li>
                <a href="#">客厅</a></li>
            <li>
                <a href="#">北欧沙发</a></li>
            <li>
                <a href="#">桌椅组合</a></li>
            <li>
                <a href="#">摆件</a></li>
            <li>
                <a href="#">样板间</a></li>
            <li>
                <a href="#">家装</a></li>
            <li>
                <a href="#">别墅</a></li>
            <li>
                <a href="#">全景模型</a></li>
        </span>
        <li id="xixi" @mouseenter="sesnter" @mouseleave="sleave">
            更多热搜词
            <div class="ctt">
                <ul id="gdd">
                    <li v-for="gg in gd" :key="gg"><a href="">{{gg}}</a></li>
                </ul>
            </div>
        </li>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                gd: ['餐桌椅', '椅子', '休闲椅', '双人床', '床具', '水晶灯', '吸顶灯', '台灯', '电视柜', '边柜', '玄关柜', '边几', '茶几', '挂画', '装饰画', '植物', '门', '吧台', '客餐厅', '窗帘', '住宅', '卫生间', '餐饮空间', '娱乐会所', '酒店客房', '酒店大堂', '办公机构', '商业空间', '建筑', '儿童房', '户外', '书房', '地毯', '别墅', '大理石', '图块', '木地板', '楼梯', '木纹', 'CAD', '画', '办公室', '石材', '地板', '图库', '墙纸', '餐厅', '地砖', '衣柜', '壁纸', '电视背景墙', '文化石', '酒店', '新中式沙发', '水泥', '中式', '沙发', '木饰面', '欧式', '中式沙发', '仿古砖', 'KTV', '现代沙发', '意大利沙发']
            }
        },
        methods: {
            sesnter(){
                $('.ctt').css({
                    display:"block"
                })
            },
            sleave(){
                $('.ctt').css({
                    display:"none"
                })
            }
        }
    }
</script>

<style scoped>
    #rs {
        width: 1200px;
        text-align: center;
        padding-bottom: 10px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;

    }

    #liboss {
        display: flex;
    }

    #liboss>li {
        display: block;
        margin: 0 6px;
        line-height: 40px;
        cursor: pointer;
        position: relative;
    }

    #liboss>li>a {
        color: #666;
        line-height: 40px;
        font-size: 14px;
    }

    #liboss>li>a:hover {
        color: #ff8d1c;
    }

    #xixi {
        margin: 0 6px;
        line-height: 40px;
        cursor: pointer;
        position: relative;
        color: #e70;
        font-size: 14px;
    }

    #xixi::after {
        content: "";
        width: 0;
        height: 0;
        border-width: 4px;
        border-style: solid;
        border-color: #ccc transparent transparent transparent;
        margin-left: 4px;
        font-size: inherit;
        text-rendering: auto;
        position: absolute;
        top: 18px;
    }


    .ctt {
        width: 1020px;
        height: 210px;
        /* padding: 10px; */
        border-radius: 5px;
        background: #fff;
        position: absolute;
        box-shadow: 0 0 4px rgba(0, 0, 0, .1);
        /* display: none; */
        right: -169px;
        display: none;
    }

    .ctt:before {
        content: "";
        display: block;
        border-color: transparent;
        border-bottom-color: wheat;
        border-width: 10px;
        border-style: solid;
        width: 0;
        height: 0;
        position: absolute;
        bottom: 100%;
        right: 19%;
    }

    #gdd {
        /* max-height: 170px; */
        overflow: hidden;
        padding-bottom: 10px;
        box-sizing: border-box;
        margin-top: 10px;
    }

    #gdd>li {
        background: #f5f5f5;
        color: #333;
        border-radius: 4px;
        padding: 0 15px;
        margin-bottom: 10px;
        line-height: 24px;
        height: 24px;
        overflow: hidden;
        display: inline-block;
        float: left;
        margin: 0 6px;
        cursor: pointer;
        position: relative;
        box-sizing: border-box;
        margin: 7px 7px;
    }

    #gdd>li>a {
        font-size: 12px;
        display: block;
        line-height: 24px;
        color: #666;
        text-align: left !important;
    }
    #gdd>li>a:hover{
        color: #ff8d1c;
        
    }
</style>