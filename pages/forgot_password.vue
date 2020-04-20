<template>
   <div class="main_container forgot_password">
      <el-header>
           <!-- <nuxt-link  :to="`${$t('/')}?lang=${$store.state.locale}`"> -->
               <el-page-header title="" @back="goBack"  content="စကားဝှက်မေ့သွားပါသလား? ">
                </el-page-header>
           <!-- </nuxt-link> -->
      </el-header>
      <section class="forgot_password_item">
           <p>စကားဝှက်မေ့သွားပါက အောက်ပါ ဝန်ဆောင်မှု ဖုန်းနံပါတ်တစ်ခုသို့ ဆက်သွယ်မေးမြန်းနိုင်ပါသည်။</p>
           <p>အကောင့်ပိုင်ဆိုင်‌ကြောင်း အထောက်အထား မေးခွန်းများ ဖြေဆိုရပါမည်။</p><br>
          
           <el-card shadow="always" v-for="(phone , p) in contact" :key="p">
                <div style="float:left;margin-top:6px;"><i class="el-icon-mobile-phone" style="color:#5AAF46;padding:0 10px;font-size:21;font-weight:bold;"></i>{{phone}}</div>
                <el-button round @click="dial(phone)"  style="float:right;margin:0 auto 20px auto;background:#F0F0FF;color:#5AAF46">Call Now</el-button>
            </el-card>
           
            <!-- <el-card shadow="always">
                <div style="float:left;margin-top:6px;"><i class="el-icon-mobile-phone" style="color:#5AAF46;padding:0 10px;font-size:21;font-weight:bold;"></i>09774134567</div>
                 <a href="tel:123-456-7890"><el-button round style="float:right;margin:0 auto 20px auto;background:#F0F0FF;color:#5AAF46">Call Now</el-button></a>
            </el-card> -->
      </section>
      
    </div>
</template>

<style>

   .forgot_password .el-header {
       background-color :#fff;

    }
    .el-page-header__left {
        margin:0;
    }
    .forgot_password .el-page-header {
        line-height: 43px;
        color:#000;
        padding:0 20px;
    }
    .forgot_password .el-page-header__content {
        color:#000;
        font-weight: bold;
    }
    .forgot_password_item {
      text-align: center;
      
      padding:20px;
    }
    .forgot_password_item .el-card {
      margin:15px auto;
    }
</style>


<script>
import axios from 'axios'
export default {
    mounted() {
    
    },
    data() {
        return {
           contact:[],
        }
    },
     methods: {
        goBack() {
             this.$router.push(`/login?lang=${this.$store.state.locale}`); 
         },
        dial: function(data){
            window.location ='tel:'+data;
        },
     },
     created() {
       this.$axios.get("/v1/contact")
    
            
                .then(response => {
                    this.contact = response.data.data[0].phone_number
            });
     },

}
</script>