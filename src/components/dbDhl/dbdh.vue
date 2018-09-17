<template>
    <div>
        <div id="ds">
            <div class="box" id="shang">
                <div id="logo"></div>
                <div id="q1">
                    <div id="xz">
                        <a href="#" id="qs" @click="myClick"></a>
                        <div class="ssk">
                            <div class="xl">
                                <el-dropdown>
                                    <span class="el-dropdown-link" style="font-size: 14px !important; ">
                                        3D模型
                                        <i class="el-icon-arrow-down el-icon--right"></i>
                                    </span>
                                    <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item>3D模型</el-dropdown-item>
                                        <el-dropdown-item>S U模型</el-dropdown-item>
                                        <el-dropdown-item>贴图</el-dropdown-item>
                                        <el-dropdown-item>施工图</el-dropdown-item>
                                        <el-dropdown-item>设计案例</el-dropdown-item>
                                    </el-dropdown-menu>
                                </el-dropdown>
                            </div>

                            <input type="text" class="input_1">
                            <input type="text" class="input_2">
                        </div>
                    </div>
                    <div id="zt">
                        <ul id="ul1">
                            <li id="lao1" @mouseenter="enter" @mouseleave="leave">
                                <a href="#" style="display: flex;justify-content: center;align-items: center">
                                    <img src="../../assets/bz.png" alt="" style="width: 22px;height: 20px;">
                                    <div>快捷上传</div>
                                </a>
                                <div id="lao2">
                                    <ul>
                                        <li>
                                            <a href="#">3DMAX模型</a>
                                        </li>
                                        <li>
                                            <a href="#">SketchUp模型</a>
                                        </li>
                                        <li>
                                            <a href="#">合成全景</a>
                                        </li>
                                        <li>
                                            <a href="#">效果图</a>
                                        </li>
                                        <li>
                                            <a href="#">设计案例</a>
                                            
                                        </li>
                                        <li>
                                            <a href="#">上传贴图</a>
                                        </li>
                                        <li>
                                            <a href="#">上传施工图</a>
                                        </li>
                                    </ul>
                                </div>

                            </li>
                            <li>
                                <a href="#">签到送模型</a>
                            </li>
                            <li>
                                <a href="#">帮助中心</a>
                            </li>
                            <li>
                                <a href="#">在线充值</a>
                            </li>
                            <li>
                                <a href="#">我的收藏</a>
                            </li>
                        </ul>
                    </div>
                    <div id="yb">
                        <div>
                            <span id="span_1">请登录</span>
                            <span id="span_2" style="cursor: pointer;">注册</span>
                        </div>

                    </div>
                </div>

            </div>
        </div>
        <div id="xia">
            <div class="box" id="ly">
                <ul id="hello">
                    <li class="ltt" @mouseenter="jin" @mouseleave="li">
                        <!-- <a href="/"></a> -->
                        <router-link to="/">3D模型 </router-link>
                        <div id="ltt1">
                            <div id="tou">
                                <ul id="tou_ul">
                                    <li>
                                        <a id="qin" href="#">3D模型</a>
                                    </li>
                                    <li>
                                        <a href="#">年会员模型</a>
                                    </li>
                                    <li>
                                        <a href="#">品牌模型</a>
                                    </li>
                                    <li>
                                        <a href="#">名师模型</a>
                                    </li>
                                    <li>
                                        <a href="#">悬赏模型</a>
                                    </li>
                                    <li>
                                        <a href="#">免费素材</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="rm">
                                <div class="rmlg">
                                    <img src="../../assets/rm.png" alt="">
                                    <span>软装单体</span>
                                </div>
                                <div class="rmad">
                                    <a href="#" v-for='a in aa' :key="a">{{a}}</a>
                                </div>
                                <div class="rmad_1">
                                    <a class="bbq" href="#" v-for='b in bb' :key="b">{{b}} </a>
                                </div>
                            </div>
                            <div class="rm">
                                <div class="rmlg">
                                    <img src="../../assets/kj.png" alt="">
                                    <span>空间场景</span>
                                </div>
                                <div class="rmad">
                                    <a href="#" v-for='c in cc' :key="c">{{c}}</a>
                                </div>
                                <div class="rmad_1">
                                    <a class="aaq" href="#" v-for='d in dd' :key="d"> {{d}} </a>
                                    <a href="#" style="height:26px !important;"></a>
                                </div>
                                <div class="rmad_1">
                                    <a href="#" v-for='e in ee' :key="e"> {{e}} </a>
                                    <a href="#" style="height:26px !important;"></a>
                                    <a href="#" style="height:26px !important;"></a>
                                </div>
                                <div class="rmad_1">
                                    <a href="#" v-for='f in ff' :key="f"> {{f}} </a>
                                </div>
                            </div>
                            <div id="rmm">
                                <div class="rmlg">
                                    <img src="../../assets/wg.png" alt="">
                                    <span>品牌模型</span>
                                </div>
                                <div id="pp">
                                    <a href="#" v-for='g in gg' :key="g">{{g}} </a>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <!-- <a href="/nhy"></a> -->
                        <router-link to="nhy">年会员 </router-link>

                    </li>
                    <li class="ltt"   @mouseenter="ru" @mouseleave="kai">
                        <a href="#"> 贴图 </a>
                        <div id="tie">
                            <ul>
                                <li class="tie_1"><a href="#">贴图</a></li>
                                <li class="tie_1"><a href="#">材质库</a></li>
                                <li class="tie_1"><a href="#">光域网</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href="#"> SU模型 </a>
                    </li>
                    <li>
                        <a href="#">施工图
                        </a>
                    </li>
                    <li class="ltt" @mouseenter="zh" @mouseleave="yg">
                        <a href="#">设计案例 </a>
                        <div id="al">
                            <div id="kb">
                                <div id="df">
                                    <img src="../../assets/kb.png" alt="">
                                    <span>空间</span>
                                </div>
                                <div id="big-nav2">
                                    <a href="#" v-for='h in hh' :key="h">{{h}}</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <!-- <a href="/ggx">效果图 </a> -->
                        <router-link to="ggx">效果图 </router-link>
                    </li>
                    <li>
                        <a href="#">优选商城
                        </a>
                    </li>
                    <li>
                        <a href="#">选材中心</a>
                    </li>
                    <li>
                        <a href="#"> 建E全景 </a>
                    </li>
                    <li>
                        <a href="#">云渲染 </a>
                    </li>
                    <li>
                        <a href="#">建E学院</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import router from '../../router'

    export default {
        data() {
            return {
                aa: [
                    "沙发",
                    "床具",
                    "椅子",
                    "橱柜",
                    "桌几",
                    "灯具",
                    "陈设饰品",
                    "植物花草"
                ],
                bb: [
                    "组合沙发",
                    "双人床",
                    "桌椅组合",
                    "电视柜",
                    "餐桌",
                    "吊灯",
                    "摆件",
                    "构建五金",
                    "多人沙发",
                    "单人床",
                    "休闲椅",
                    "衣柜",
                    "书桌",
                    "落地灯",
                    "挂画",
                    "厨卫用品",
                    "单人沙发",
                    "床头柜",
                    "办公椅",
                    "书柜",
                    "茶几",
                    "吸顶灯",
                    "窗帘",
                    "人物/器材"
                ],
                cc: [
                    "家装空间",
                    "全景模型",
                    "酒店空间",
                    "办公机构",
                    "餐饮娱乐",
                    "商业空间",
                    "公共空间"
                ],
                dd: ["客厅", "住宅", "大堂", "办公室", "咖啡厅", "展厅", "建筑户外", " "],
                ee: ['餐厅', '别墅', '客房', '会议室', '网咖', '售楼处'],
                ff: ['卧室', '工装空间', '餐厅', '休息区', '娱乐会所', '商业零售'],
                gg: ['TONINO LAMBORGHINI', 'Global Views', '奥斯哥纳', 'TRUSSARDI', 'Misuraemme', 'BOCA DO LOBO', '更多'],
                hh:['样板间','普通住宅','别墅豪宅','办公空间','餐饮','酒店','售楼处','会所','购物空间','公共空间','展馆展厅','酒吧','健身运动','医疗','民宿','教育','美容养生','电影院','KTV']
            };
        },
        methods: {
           
            myClick() {
                $(".ssk").css({
                    display: "block"
                });
                $("#qs").css({
                    display: "none"
                });
            },
            enter() {
                $("#lao2").css({
                    display: "block"
                });
            },
            leave() {
                $("#lao2").css({
                    display: "none"
                });
            },
            jin() {
                $('#ltt1').css({
                    display: "block"
                })
            },
            li() {
                $('#ltt1').css({
                    display: "none"
                })
            },
            ru(){
                $('#tie').css({
                    display: "block"
                })
            },
            kai(){
                $('#tie').css({
                    display: "none"
                })
            },
            zh(){
                $('#al').css({
                    display: "block"
                })
            },
            yg(){
                $('#al').css({
                    display: "none"
                })
            }

        },
        mounted() {
            $(".bbq")
                .eq(7, 15, 23)
                .css({
                    display: "block",
                    fontWeight: "bold",
                    marginRight: "10px",
                    marginLeft: "5px",
                    color: "#666",
                    fontSize: "14px",
                    lineHeight: "26px",
                    minWidth: "70px",
                    textAlign: "left",
                    float: "left"
                });
            $(".bbq")
                .eq(15)
                .css({
                    display: "block",
                    fontWeight: "bold",
                    marginRight: "10px",
                    marginLeft: "5px",
                    color: "#666",
                    fontSize: "14px",
                    lineHeight: "26px",
                    minWidth: "70px",
                    textAlign: "left",
                    float: "left"
                });
            $(".bbq")
                .eq(23)
                .css({
                    display: "block",
                    fontWeight: "bold",
                    marginRight: "10px",
                    marginLeft: "5px",
                    color: "#666",
                    fontSize: "14px",
                    lineHeight: "26px",
                    minWidth: "70px",
                    textAlign: "left",
                    float: "left"
                });
            $(".aaq")
                .eq(6)
                .css({
                    display: "block",
                    fontWeight: "bold",
                    marginRight: "10px",
                    marginLeft: "5px",
                    color: "#666",
                    fontSize: "14px",
                    lineHeight: "26px",
                    minWidth: "70px",
                    textAlign: "left",
                    float: "left"
                });
        }
    };
</script>

<style scoped>
    .box {
        width: 1200px;
        height: 40px;
        margin: 0 auto;
    }

    /* logo导航 */

    #shang {
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* overflow: hidden; */
    }

    #ds {
        width: 100%;
        height: 40px;
        background-color: #f0f0f0;
    }

    #logo {
        width: 180px;
        height: 24px;
        background-image: url("../../assets/logo.png");
        float: left;
        /* margin-top: 5px; */
    }

    #q1 {
        height: 100%;
        float: right;

        /* overflow: hidden; */
    }

    #xz {
        width: 285px;
        height: 34px;
        position: relative;
        float: left;
    }

    #qs {
        display: block;
        width: 18px;
        height: 24px;
        background-image: url("../../assets/xz.png");
        background-repeat: no-repeat;
        position: absolute;
        right: 11px;
        top: 12px;
    }

    
    .ssk {
        width: 280px;
        height: 30px;
        background: #fff;
        margin-right: 5px;
        margin-top: 5px;
        border-radius: 40px !important;
        box-sizing: border-box;
        /* display: flex;
        justify-content: space-between;
        align-items: center; */
        overflow: hidden;
        position: relative;
        display: none;
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

    #zt {
        /* width: 550px; */
        height: 40px;
        float: left;
    }

    #ul1 {
        /* overflow: hidden; */
    }

    #ul1>li {
        float: left;
        line-height: 40px;
        /* width: 110px; */
        height: 100%;
        color: #333;
        font-size: 14px;
        background: url("../../assets/st.jpg") left center no-repeat;
        text-align: center;
        padding: 0 10px;
        position: relative;
    }

    #ul1 li a {
        display: block;
        /* width: 98px; */
        /* height: 100%; */
        padding: 0 6px;
        color: #333;
    }

    #ul1 li a:hover {
        color: #ff8d1c;
    }

    #yb {
        background: url("../../assets/st.jpg") left center no-repeat;
        padding-left: 15px;
        height: 40px;
        float: right;
    }

    #yb>div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        line-height: 40px;
    }

    #span_1 {
        padding: 0 10px;
        display: block;
        cursor: pointer;
        margin: 0 4px;
        border: 1px solid #fdaa15;
        color: #ff8d1c;
        border-radius: 40px !important;
        text-align: center;
        font: normal 14px/24px "Microsoft YaHei";
        margin-right: 5px;
        margin-right: 10px;
    }

    #lao1 {
        position: relative;
    }

    #lao2 {
        background-color: white;
        position: absolute;
        top: 38px;
        left: 0;
        min-width: 130px;
        text-align: center;
        width: auto;
        padding: 5px 0 !important;
        z-index: 99999999 !important;
        box-sizing: border-box;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
        display: none;
    }

    #lao2 ::before {
        content: "";
        width: 0;
        height: 0;
        position: absolute;
        border: 8px solid transparent;
        border-bottom: 8px solid #dbdbdb;
        left: 20px;
        top: -16px;
    }

    #triangle-up {
        width: 0;
        height: 0;
        border-left: 50px solid transparent;
        border-right: 50px solid transparent;
        border-bottom: 100px solid red;
    }

    #xia {
        width: 100%;
        background: #d5ba9f;
        padding: 10px 0;
        box-sizing: border-box;
    }

    #hello {
        display: flex;
        /* justify-content: space-between; */
        line-height: 40px;
    }

    #hello>li {
        margin: 0 20px;
    }

    #hello>li>a {
        font-size: 16px;
        color: #582f04;
    }

    .ltt {
        position: relative;
        clear: both;
    }

    .ltt>a::after {
        content: "";
        width: 0;
        height: 0;
        border-width: 7px;
        border-style: solid;
        border-color: #a48260 transparent transparent;
        font-size: 0;
        /*兼容IE6*/
        line-height: 0;
    }

    #ltt1 {
        width: 817px;
        height: 600px;
        background: #fff;
        position: absolute;
        top: 40px;
        z-index: 9999;
        border-top: 1px solid #f4f4f4;
        padding: 0 15px;
        box-sizing: border-box;
        left: 0 !important;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        display: none;
    }
    #ltt1 a:hover{
        color: #ff8d1c !important;

    }
    #tou {
        width: 682px;
        height: 40px;
        text-align: center;
        margin: 20px auto;
        background: url("../../assets/hq.png") center no-repeat;
    }

    #tou_ul>li {
        margin-right: 12px;
        padding: 0;
        display: inline-block;
        margin-left: 4px;
    }

    #tou_ul>li>a {
        line-height: 40px;
        color: #333;
        font-weight: normal;
        font-size: 14px;
    }

    #qin::before {
        content: "" !important;
    }

    #tou_ul>li>a::before {
        padding-right: 17px;
        color: #ccc;
        content: "|";
    }

    .rm {
        width: 100%;
        padding-bottom: 10px;
        border-bottom: 1px solid #eee;
        margin-bottom: 10px;
        box-sizing: border-box;
    }

    .rmlg {
        width: 100%;
        margin-bottom: 5px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
    }

    #rmlg>span {
        color: #333;
        font-weight: bold;
        font-size: 14px;
    }

    .rmad {
        width: 750px;
        padding-left: 28px;
        padding-bottom: 10px;
        overflow: hidden;
    }

    .rmad>a {
        display: block;
        font-weight: bold;
        margin-right: 10px;
        margin-left: 5px;
        color: #666;
        font-size: 14px;
        line-height: 26px;
        min-width: 70px;
        text-align: left;
        float: left;
    }

    .rmad_1 {
        width: 750px;
        padding-left: 28px;
        padding-bottom: 10px;
        overflow: hidden;
    }

    .rmad_1>a {
        margin-right: 10px;
        margin-left: 5px;
        font-weight: normal;
        color: #666;
        font-size: 14px;
        line-height: 26px;
        min-width: 70px;
        text-align: left;
        display: block;
        overflow: hidden;
        float: left;
    }

    #pp {
        width: 750px;
        padding-left: 28px;
        padding-bottom: 10px;
        box-sizing: border-box;
    }

    #pp>a {
        min-width: auto;
        margin-right: 20px !important;
        margin-left: 5px;
        font-weight: normal;
        color: #666;
        font-size: 14px;
        line-height: 26px;
        text-align: left;
        display: block;
        overflow: hidden;
        float: left;
    }

    #tie {
        padding: 10px 0;
        z-index: 9;
        background: #fff;
        box-shadow: 0 0 4px rgba(0, 0, 0, .1);
        position: absolute;
        top: 38px;
        left: -25px;
        min-width: 130px;
        text-align: center;
        width: auto;
        height:  116px !important ;
        box-sizing: border-box;
        display: none;
    }
    #tie>ul{
        height: 96px;
    }
    .tie_1{
        /* height: 24px; */
        /* padding: 4px 0; */
        width: 100%;
        line-height: 32px;
    }
    .tie_1>a{
        display: block;
        width: 100%;
        height: 100%;
        font-size: 14px;
        color: #333;
    }
    .tie_1>a:hover{
        background-color: #e6e6e6;
        color: #ff8d1c;
    }
    #al{
        top: 40px;
        left: -215px;
        z-index: 9999;
        border-top: 1px solid #f4f4f4;
        position: absolute;
        width: 520px;
        background: #fff;
        padding: 20px;
        box-shadow: 0 15px 20px rgba(0,0,0,0.3);
        box-sizing: border-box;
        display: none;
    }
    #kb{
        padding-bottom: 15px;
        border-bottom: none;
        margin-bottom: 15px;
        box-sizing: border-box;
    }
    #df{
        width: 100%;
        margin-bottom: 5px;
        display: flex;
        align-items: center;
    }
    #df>img{
        width: 20px;
        height: 20px;
        display: inline-block;
        margin-right: 10px;
        /* float: left; */
    }
    #df>span{
        color: #333;
        line-height: 24px;
        font-weight: bold;
        font-size: 14px;
    }
    #big-nav2{
        width: 100%;
        padding-left: 28px;
        padding-bottom: 10px;
        box-sizing: border-box;
    }
    #big-nav2>a{
        color: #666;
        font-size: 14px;
        line-height: 26px;
        margin-right: 20px;
        min-width: 70px;
        text-align: left;
        display: block;
        overflow: hidden;
        float: left;
    }
    #big-nav2>a:hover{
        color: #ff8d1c;
    }
</style>