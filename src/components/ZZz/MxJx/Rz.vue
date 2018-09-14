<template>
    <div>
        <div class="bosss">
            <div class="toubu">
                <h3>模型精选</h3>
                <span>Model selection</span>
            </div>
            <jjrz/>
            <jjkj/>
            <gzcj/>
            <qjmx/>
            <xzph/>
            <nhymx/>
            <ppmx/>
            <msal/>
        </div>
    </div>
</template>

<script>
import jjrz from "@/components/ZZz/MxJx/JjRz";
import jjkj from "@/components/ZZz/MxJx/JjKj";
import gzcj from "@/components/ZZz/MxJx/GzCj";
import qjmx from "@/components/ZZz/MxJx/QjMx";
import xzph from "@/components/ZZz/MxJx/XzPh";
import nhymx from "@/components/ZZz/MxJx/NhyMx";
import ppmx from "@/components/ZZz/MxJx/PpMx";
import msal from "@/components/ZZz/MxJx/MsAl";

export default {
  components: {
    jjrz,
    jjkj,
    gzcj,
    qjmx,
    xzph,
    nhymx,
    ppmx,
    msal
  }
};
</script>

<style scoped>
.bosss {
  width: 100%;
  background-color: #f5f5f5;
}
.toubu {
  width: 1200px;
  margin: 0 auto;
  text-align: center;
}
.toubu > h3 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}
</style>