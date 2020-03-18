<template>
    <main>
        <section class="withdraw_success">
            <img src="~static/images/refel_page/refel_img_two.png" class="">
            <h4>{{$t('Completed')}}</h4>
            <el-card style="border-radius:19px;margin-bottom:30px">
                 <span>{{$t('sein_lucky_office_hours')}}</span>
                  <el-divider></el-divider>
                <span>{{$t('mon-sat')}}</span><br>
                <span>နံနက် 9:00 AM - 11:40 AM</span>
                 <span>ညနေ 12:00 PM - 3:40 PM</span>

            </el-card>
            <p style="color:#5AAF46">သတ်မှတ်ချိန်အတွင်းငွေဖြည့်ပါက (၁၀) မိနစ်အတွင်း ငွေရောက်ပါမည်။</p>
            <p>သတ်မှတ်ချိန်ကျော်လွန်သွားပါက လာမည့် ငွေဖြည့် section တွင် ပြန်ဖြည့်ပေးပါမည်။</p>
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
    mounted() {
      this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
        })
    },
    data() {
        return {

        }
    },
    methods: {
        goBack() {
                this.$router.push(`/wallet?lang=${this.$store.state.locale}`); 
           
        }
    }
}
</script>