<template>
    <div>
        <!-- <img src="../../assets/fl9.png" alt=""> -->
        <div class="nhybj">
            <div class="nhy1">
                <div class="nhy2">
                    <div class="nhy3">
                        <div class="nhy4">
                            <h2>年会员</h2>
                            <h2>享专属特权</h2>
                        </div>
                        <div class="nhy5">
                            <a href="#">立即开通</a>
                        </div>
                    </div>
                    <div class="nhy6">
                        <ul class="nhy7">
                            <li class="nhy7i">
                                <div class="qqhy">
                                    <div></div>
                                </div>
                                <h3>免费下载</h3>
                                <p>年会员模型</p>
                            </li>
                            <li class="nhy7i">
                                <div class="zhe">
                                    <div></div>
                                </div>
                                <h3>九折下载</h3>
                                <p>普通模型</p>
                            </li>
                            <li class="nhy7i">
                                <div class="shui">
                                    <div></div>
                                </div>
                                <h3>去水印</h3>
                                <p>全景合成</p>
                            </li>
                            <li class="nhy7i">
                                <div class="lb">
                                    <div></div>
                                </div>
                                <h3>月度礼包</h3>
                                <p>年会员专属</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="nhy8">
                    <div class="kda">
                        <div class="nhy9">
                            <i class="icon"></i>
                            <span>月度礼包 </span>
                            <span>年会员专享</span>
                            <i class="iocn"></i>
                        </div>
                        <div class="gift-btn">
                            <span>登录领取</span>
                        </div>
                    </div>

                    <div class="gift-btmbox">
                        <ul class="ul1">
                            <li>
                                <div>
                                    <span class="sz">3</span>
                                    <span class="zg">张</span>
                                </div>
                                <div class="xzz">
                                    <span>3D模型下载券</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span class="sz">2</span>
                                    <span class="zg">张</span>
                                </div>
                                <div class="xzz">
                                    <span>SU模型下载券</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span class="zg">￥</span>
                                    <span class="sz">10</span>
                                </div>
                                <div class="xzz">
                                    <span>渲染币</span>
                                </div>
                            </li>
                            <li>
                                <div class="gwxq">
                                    <span class="zg">￥</span>
                                    <span class="zs">5</span>
                                    <span class="m98">满498减5</span>
                                </div>
                                
                                <div class="xzz">
                                    <span>金点充值券</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span class="zg">￥</span>
                                    <span class="sz">10</span>
                                </div>
                                <div class="xzz">
                                    <span>金点充值券</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
        <nhynr/>
    </div>
</template>

<script>
// import nhynr from "nhynr"
import nhynr from '@/components/NhyLy/nhynr'

export default {
  components: {
    nhynr
  }
};
</script>

<style scoped>
.nhybj {
  width: 100%;
  height: 720px;
  background: url("../../assets/nhy1.jpg") no-repeat center;
  background-size: 100% 100%;
}

.nhy1 {
  width: 1200px;
  margin: 0 auto;
  padding-top: 52px;
  padding-left: 44px;
}

.nhy2 {
  width: 1095px;
  height: 320px;
  background: url("../../assets/nhy2.png") no-repeat;
  display: flex;
  justify-content: space-between;
}

.nhy3 {
  width: 360px;
  height: 320px;
  padding-left: 70px;
  padding-top: 60px;
}

.nhy4 {
  height: 118px;
  width: 280px;
}

.nhy4 h2 {
  color: #c9a276;
  font-size: 40px;
  font-weight: bold;
  height: 56px;
}

.nhy5 {
  margin-top: 10px;
  margin-left: 15px;
  box-sizing: border-box;
}

.nhy5 > a {
  display: block;
  width: 164px;
  height: 50px;
  background: linear-gradient(to right, #d3b38c, #c09161);
  text-align: center;
  line-height: 50px;
  border-radius: 50px;
  color: #fff;
  font-size: 20px;
  box-shadow: 4px 4px 10px #ccc;
  cursor: pointer;
  box-sizing: border-box;
}

.nhy6 {
  padding-top: 54px;
  margin-left: 20px;
}

.nhy7 {
  padding-top: 20px;
  padding-left: 50px;
  width: 720px;
  display: flex;
}

.nhy7i {
  width: 84px;
  margin-right: 70px;
}

.qqhy {
  width: 80px;
  height: 80px;
  background: linear-gradient(to right, #d2b28a, #c09363);
  border-radius: 50% 50%;
}

.qqhy > div {
  width: 100%;
  height: 100%;
  background: url("../../assets/mian.png") no-repeat center;
}

.nhy7i > h3 {
  font-size: 18px;
  color: #c9a277;
  font-weight: bold;
  height: 40px;
  line-height: 40px;
  width: 100%;
  text-align: center;
}

.nhy7i > p {
  font-size: 16px;
  color: #c9a277;
  height: 20px;
  line-height: 20px;
  width: 100%;
  text-align: center;
}

.zhe {
  width: 80px;
  height: 80px;
  background: linear-gradient(to right, #d2b28a, #c09363);
  border-radius: 50% 50%;
}

.zhe > div {
  width: 100%;
  height: 100%;
  background: url("../../assets/zhe.png") no-repeat center;
}

.shui {
  width: 80px;
  height: 80px;
  background: linear-gradient(to right, #d2b28a, #c09363);
  border-radius: 50% 50%;
}

.shui > div {
  width: 100%;
  height: 100%;
  background: url("../../assets/shui.png") no-repeat center;
}

.lb {
  width: 80px;
  height: 80px;
  background: linear-gradient(to right, #d2b28a, #c09363);
  border-radius: 50% 50%;
}

.lb > div {
  width: 100%;
  height: 100%;
  background: url("../../assets/lib.png") no-repeat center;
}

.nhy8 {
  width: 1095px;
  height: 300px;
  background: url("../../assets/ydlb.jpg") center center no-repeat;
  margin-top: 10px;
  position: relative;
  /* justify-content: space-around; */
}

.nhy9 {
  height: 50px;
  font-size: 28px;
  font-weight: bold;
  line-height: 50px;
  padding-left: 80px;
  padding-top: 20px;
}

.icon {
  width: 23px !important;
  height: 50px;
  background: url("../../assets/mgg.png") center center no-repeat;
}

.iocn {
  width: 297px;
  height: 50px;
  background: url("../../assets/mrg.png") center center no-repeat;
}

.nhy9 > span {
  color: #945228;
  display: inline-block;
}

.gift-btn {
  margin-right: 70px;
  /* margin-top: 20px; */
  position: absolute;
  right: 0;
  top: 20px;
}

.gift-btn {
  width: 150px;
  height: 50px;
  line-height: 50px;
  background: #2e2c2f;
  display: block;
  color: #fff;
  font-size: 20px;
  text-align: center;
  border-radius: 50px;
  cursor: pointer;
}

.kda {
  width: 1015px;
}

.gift-btmbox {
  margin-top: 30px;
  width: 960px;
  margin-left: 75px;
}

.ul1 {
  width: 1020px;
  margin-top: 34px;
  overflow: hidden;
}

.ul1 > li {
  width: 140px;
  height: 150px;
  background: url("../../assets/zjp.png") center no-repeat;
  margin-right: 60px;
  text-align: center;
  float: left;
}

.sz {
  font-size: 40px;
  font-weight: bold;
  display: inline-block;
  color: #c9a276;
  line-height: 85px;
}

.zg {
  font-size: 20px;
  padding-left: 4px;
  display: inline-block;
  height: 40px;
  line-height: 50px;
  color: #c9a276;
}

.xzz {
  width: 140px;
  font-size: 23px;
  color: #c9a276;
  text-align: center;
  overflow: hidden;
  margin-top: 15px;
}

.xzz > span {
  height: 60px;
  line-height: 60px;
  color: #333;
  font: normal 14px/24px "Microsoft YaHei", tahoma, arial, Hiragino Sans GB;
}
.m98 {
  display: block;
  height: 24px;
  line-height: 24px;
  text-align: center;
  color: #333;
  margin-top: 4px;
  font: normal 14px/24px "Microsoft YaHei", tahoma, arial, Hiragino Sans GB;
}
.zs {
  line-height: 40px;
  font-size: 40px;
  font-weight: bold;
  display: inline-block;
  color: #c9a276;
}

.gwxq {
  margin-top: 15px;
}
</style>