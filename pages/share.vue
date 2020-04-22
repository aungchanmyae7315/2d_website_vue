<template>
     <div class="main_container share">
          <el-page-header  @back="goBack" title=""  >
                </el-page-header>
        <section>
           <img src="~static/images/icons/share_seinlucky_logo.png" class="logo" alt="logo">
            <h5>Sein Lucky App ကိုမျှဝေ၍ 5000 ပွိုင့် ရယူလိုက်ပါ</h5>

           <el-card>   
                 <h6  style="text-align:left;font-weight:bold">ဘာကြောင့် ပွိုင့်ရရှိတာလဲ။</h6>
                 <p style="text-align:left">သင်ဟာ အကောင့်ဖွင့်ချိန်တွင် ရည်ညွှန်းကုဒ် ဖြည့်သောကြောင့် ယခု ပွိုင့်လက်ဆောင်ရရှိပါသည်။</p>
                 <h6  style="text-align:left;font-weight:bold">ပွိုင့်ကို ဘာလုပ်လို့ရသလဲ။</h6>
                 <p style="text-align:left">ပွိုင့်ကို ငွေသားဖြင့်မထုတ်နိုင်ပါ။ သို့သော် ပွိုင့်ဖြင့် ထီထိုးနိုင်ပြီး ထီပေါက်ပါက ငွေသားဖြင့် ပြန်လျော်ပေးသောကြောင့် ပိုက်ဆံထုတ်နိုင်ပါသည်။</p>
            </el-card>
             <el-button @click="goSharepage" round="">Sein Lucky App ကိုမျှဝေမည်</el-button>
        </section>
       
    </div>
</template>
<style>
.share {
    padding:0 30px;
}
.share .el-header {
       background-color :#fff;

    }
      .el-page-header__left {
        margin:0;
    }
    .share .el-page-header {
        line-height: 43px;
        padding-top:20px;
        color:#000;
        cursor: pointer;

    }
    .share .el-page-header__content {
        color:#000;
        font-weight: bold;
    }
    .share {
        padding:20px;
        text-align: center;

    }
    .share img {
        width:160px;
        height: auto;
        margin-top:20px;
        padding-bottom:20px;
    }
    .share .el-card {
        margin:20px auto 40px auto;
    
    }
    .share .el-button.is-round {
        background: #158220;
        color:#fff;
        
    }


</style>

<script>
export default {
    mounted() {
      
    },
    data() {
        return {

        }
    },
    methods: {
        goBack() {
                this.$router.push(`/me?lang=${this.$store.state.locale}`); 
           
        },
        goSharepage() {
             this.$router.push(`/share_page?lang=${this.$store.state.locale}`);
        }
    }
}
</script>