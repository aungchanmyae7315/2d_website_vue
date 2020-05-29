<template>
    <main>
        <section class="topup_success">
            <img src="~static/images/refel_page/refel_img_two.png" class="">
            <h4>{{$t('Completed')}}</h4>
            <el-card style="border-radius:19px;margin-bottom:30px">
                 <span>{{$t('sein_lucky_office_hours')}}</span>
                  <el-divider></el-divider>
                <span>{{$t('mon-sat')}}</span><br>
                <span>{{$t('morning')}} 9:00 AM - 11:50 AM</span><br>
                 <span>{{$t('evening')}} 12:00 PM - 06:00 PM</span>

            </el-card>
            <p style="color:#5AAF46">{{$t('top-up_is_pending_approved_10_minutes')}}</p>
            <p>{{$t('after_the_top_up_section')}}</p>
             <el-button @click="goBack" round="">{{$t('ok')}}</el-button>
        </section>
       
    </main>
</template>
<style>
    .topup_success {
        padding:20px;
        text-align: center;

    }
    .topup_success img {
        width:60px;
        height: auto;
        padding-top:30px;
        padding-bottom:20px;
    }
     .topup_success .el-button.is-round{
        
        position: relative;
        
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