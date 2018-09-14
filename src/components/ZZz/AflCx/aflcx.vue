<template>
    <div>
        <div class="toubu">
            <h3>按分类查看</h3>
            <span>View by classification</span>
        </div>
        <div class="dibuu">   
            <div class="xbb"  v-for="iggg in iggm" :key="iggg">
                <a href="#" >
                    <img :src="iggg.srcc" alt="">
                    <br>
                    <p class="sff">{{iggg.name}}</p>
                </a>
            </div>

        </div>
    </div>

</template>

<script>
    import fl1 from '@/assets/fl1.png'
    import fl2 from '@/assets/fl2.png'
    import fl3 from '@/assets/fl3.png'
    import fl4 from '@/assets/fl4.png'
    import fl5 from '@/assets/fl5.png'
    import fl6 from '@/assets/fl6.png'
    import fl7 from '@/assets/fl7.png'
    import fl8 from '@/assets/fl8.png'
    import fl9 from '@/assets/fl9.png'
    import fl10 from '@/assets/fl10.png'
    import fl11 from '@/assets/fl11.png'
    import fl12 from '@/assets/fl12.png'
    import fl13 from '@/assets/fl13.png'
    import fl14 from '@/assets/fl14.png'
    import fl15 from '@/assets/fl15.png'
    import fl16 from '@/assets/fl16.png'
    import fl17 from '@/assets/fl17.png'
    import fl18 from '@/assets/fl18.png'
    import fl19 from '@/assets/fl19.png'

     var that =this
    export default {
        data(){
            return{
                iggm:[{name:'沙发',srcc:fl1},{name:'椅子',srcc:fl2},{name:'灯具',srcc:fl3},{name:'床具',srcc:fl4},{name:'桌几',srcc:fl5},{name:'厨柜',srcc:fl6},{name:'陈设饰品',srcc:fl7},{name:'厨卫用品',srcc:fl8},{name:'构建五金',srcc:fl9},{name:'植物花草',srcc:fl10},{name:'家装空间',srcc:fl11},{name:'餐饮娱乐',srcc:fl12},{name:'酒店空间',srcc:fl13},{name:'办公机构',srcc:fl14},{name:'商业空间',srcc:fl15},{name:'公共空间',srcc:fl16},{name:'建筑户外',srcc:fl17},{name:'全景空间',srcc:fl18},{name:'人物/器械',srcc:fl19}],
            }
        },
        methods:{
            // fsesnter(){
            //     $('.sff').css({
            //         color: '#ee7800'
            //     })
                
            // },
            // fsleave(){
            //     $('.sff').css({
            //         color: '#333'
            //     })
            // }
        }
    }
</script>

<style scoped>
    .toubu {
        width: 1200px;
        margin: 0 auto;
        margin-top: 30px;
        text-align: center;
    }

    .toubu>h3 {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    .dibuu{
        width: 1200px;
        margin: 0 auto;
        height: 240px;

    }
    .xbb:hover .sff{
        color: #ee7800
    }
    .xbb:hover{
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
        
    }

    .xbb{
        width: 120px;
        height: 120px;
        float: left;
        text-align: center;
    }
    .xbb>a{
        width: 100%;
        /* height: 120px; */
        display: block;
        color: #333;
        text-align: center;
        font-size: 14px;
        margin-top: 20px;
    }
</style>