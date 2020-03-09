<template>
    <main>
        <section class="withdraw_success">
            <img src="~static/images/refel_page/refel_img_two.png" class="">
            <h4>{{$t('Completed')}}</h4>
            <el-card style="border-radius:19px;margin-bottom:30px">
                 <span>{{$t('sein_lucky_office_hours')}}</span>
                  <el-divider></el-divider>
                <span>{{$t('mon-sat')}}</span><br>
                <span>9:00 AM - 5:30 PM</span>

            </el-card>
            <p style="color:#5AAF46">{{$t('topup_approved_5_minutes')}}</p>
            <p>{{$t('if_not_in_office_hours')}}</p>
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
                this.$router.push(`wallet?lang=${this.$store.state.locale}`); 
           
        }
    }
}
</script>