<template>
    <main>
        <section class="withdraw_success">
            <img src="~static/images/refel_page/refel_img_two.png" class="">
            <h4>{{$t('Completed')}}</h4>
            <el-card style="border-radius:19px;margin-bottom:30px">
                 <span>Sein Lucky ရုံးဖွင့်ချိန်များ</span>
                  <el-divider></el-divider>
                <span>တနင်္လာ - စနေ</span><br>
                <span>09:00 AM - 5:30 AM</span>

            </el-card>
            <p style="color:#5AAF46">ရုံးဖွင့်ချိန်တွင် (၅) မိနစ်အတွင်း ငွေဝင်ပါမည်။</p>
            <p>ရုံးဖွင့်ချိန်ကျော်ပြီးနောက်ငွေဖြည့်လျှင် ရုံးစဖွင့်ချိန်မှ (၅) မိနစ်အတွင်း ငွေဝင်ပါမည်။</p>
             <el-button @click="goBack" round="">{{$t('Confirm')}}</el-button>
        </section>
       
    </main>
</template>
<style>
    .withdraw_success {
        padding:20px;
        text-align: center;

    }
    .withdraw_success img {
        width:60px;
        height: auto;
        padding-top:60px;
        padding-bottom:20px;
    }
     .withdraw_success .el-button.is-round{
        
        position: relative;
        top:100px;
        max-width: 480px;
        width:100%;
        margin-bottom:20px;
        background-color: #158220;
        color:#fff;
    }

</style>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        goBack() {
                this.$router.push(`wallet?lang=${this.$store.state.locale}`); 
           
        }
    }
}
</script>