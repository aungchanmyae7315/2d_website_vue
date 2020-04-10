<template>
   <div class="main_container withdraw_noti">
      <el-header>
           <!-- <nuxt-link  :to="`${$t('notification')}?lang=${$store.state.locale}`"> -->
                 <el-page-header @back="goBack" title="">
                </el-page-header>
           <!-- </nuxt-link> -->
      </el-header>
      <section class="withdraw_notifi">
           <div class="refel_img_two">
                <img v-if="notification_detail.status == 'withdrawl'"  src="~static/images/noti_page/withdraw_icon.png" class="">
                <img v-else-if="notification_detail.status == 'top_up'"  src="~static/images/noti_page/topup_icon.png" class="">
                <img v-else-if="notification_detail.status == 'win'"  src="~static/images/noti_page/win_icon.png" class="">
                <img  v-else-if="notification_detail.status == 'morning_result'"  src="~static/images/noti_page/morning_result_icon.png" alt="" class="noti_icon">
                <img  v-else-if="notification_detail.status == 'evening_result'"  src="~static/images/noti_page/evening_result_icon.png" alt="" class="noti_icon">
                <img v-else-if="notification_detail.status == 'referal_code'"  src="~static/images/noti_page/new_member_icon.png" class="">
                <img v-else-if="notification_detail.status == 'reward_5000'"  src="~static/images/noti_page/one_week_noti_icon.png" class="">
                <img v-else-if="notification_detail.status == 'bet_reward'"  src="~static/images/noti_page/bet_reward_icon.png" class="">
            </div>
        <div  v-if="notification_detail.status == 'win'">
            <el-card>
                <h6 v-if="this.profile.name == null " class="win_name">{{this.profile.phone}}</h6>
                <h6 v-else class="win_name">{{this.profile.name}}</h6>
                <h6>{{notification_detail.description}}</h6>
                <h5 class="amount">{{notification_detail.data.win_amt}} {{$t('kyat')}} </h5>
                <div class="footer_card">
                    <br>
                    <el-row class="win_detail">
                        <el-col :span='12' style="text-align:left">
                            <span>ငွေသွင်းချိန်</span> 
                        </el-col>
                            <el-col :span = '12' style="text-align:left">
                            <span>: {{notification_detail.data.time}}</span>
                        </el-col>
                            <el-col :span='12' style="text-align:left">
                            <span>ပေါက်ဂဏာန်း</span> 
                        </el-col>
                            <el-col :span = '12' style="text-align:left">
                            <span>: {{notification_detail.data.number}}</span>
                        </el-col>
                            <el-col :span='12' style="text-align:left">
                            <span>ထိုးငွေ</span> 
                        </el-col>
                            <el-col :span = '12' style="text-align:left">
                            <span>: {{notification_detail.data.bet_amt}} {{$t('kyat')}}</span>
                        </el-col>
                    </el-row>
                    
                    </div>
            </el-card>
          
            <img src="~static/images/noti_page/win_stat_icon.png" alt="" class="win_star_icon">
            <el-card>  
                  <h6 style="text-align:left;font-weight:bold" v-if="this.profile.name == null " class="">{{this.profile.phone}}</h6>
                <h6 style="text-align:left;font-weight:bold" v-else class="">{{this.profile.name}}</h6> 
              
                 <p style="text-align:left">နှင့်အတူ Sein Lucky မှ ထပ်တူဝမ်းမြောက်ပါသည်။ သည်ထက်မက အောင်မြင်ပါစေ။</p>
            </el-card>
        </div>

         <div  v-else-if="notification_detail.status == 'morning_result'">
             <el-card data-aos="zoom-out-down"
                data-aos-easing="linear">
                <h5 class="title">{{notification_detail.title}} </h5>
                <h5 class="amount">{{notification_detail.data.number}}  </h5>
                <div class="footer_card" >
                    <p>ရက်စွဲ  {{notification_detail.data.time}}</p>
                </div>
            
            
            </el-card>
        </div>

         <div  v-else-if="notification_detail.status == 'evening_result'">
             <el-card data-aos="zoom-out-down"
                data-aos-easing="linear">
                <h5 class="title">{{notification_detail.title}} </h5>
                <h5 class="amount">{{notification_detail.data.number}}  </h5> 
                <div class="footer_card" >
                    <p>ရက်စွဲ  {{notification_detail.data.time}}</p>
                </div>
            
            
            </el-card>
        </div>

         <div  v-else-if="notification_detail.status == 'referal_code'">
             <el-card data-aos="zoom-out-down"
                data-aos-easing="linear">
                <h5 class="title">{{notification_detail.title}} </h5>
                <h5 class="amount">{{notification_detail.data.amount}} ကျပ်  </h5>
                <div class="footer_card" >
                    <p>ပွိုင့်ဝင်ချိန်  {{notification_detail.read_at}}</p>
                </div>
            
            
            </el-card>
              <img src="~static/images/noti_page/new_member_small.png" alt="" class="win_star_icon">
            <el-card>   
                 <h6  style="text-align:left;font-weight:bold">ဘာကြောင့် ပွိုင့်ရရှိတာလဲ။</h6>
                 <p style="text-align:left">သင်ဟာ အကောင့်ဖွင့်ချိန်တွင် ရည်ညွှန်းကုဒ် ဖြည့်သောကြောင့် ယခု ပွိုင့်လက်ဆောင်ရရှိပါသည်။</p>
                 <h6  style="text-align:left;font-weight:bold">ပွိုင့်ကို ဘာလုပ်လို့ရသလဲ။</h6>
                 <p style="text-align:left">ပွိုင့်ကို ငွေသားဖြင့်မထုတ်နိုင်ပါ။ သို့သော် ပွိုင့်ဖြင့် ထီထိုးနိုင်ပြီး ထီပေါက်ပါက ငွေသားဖြင့် ပြန်လျော်ပေးသောကြောင့် ပိုက်ဆံထုတ်နိုင်ပါသည်။</p>
            </el-card>
        </div>

         <div  v-else-if="notification_detail.status == 'reward_5000'">
             <el-card data-aos="zoom-out-down"
                data-aos-easing="linear">
                <h5 class="title">{{notification_detail.title}} </h5>
                <h5 class="amount">{{notification_detail.data.amount}} ကျပ်  </h5>
                <div class="footer_card" >
                    <p>ပွိုင့်ဝင်ချိန်  {{notification_detail.read_at}}</p>
                </div>
            
            
            </el-card>
              <img src="~static/images/noti_page/new_member_small.png" alt="" class="win_star_icon">
            <el-card>   
                 <h6  style="text-align:left;font-weight:bold">ဘာကြောင့် ပွိုင့်ရရှိတာလဲ။</h6>
                 <p style="text-align:left">သင်သည် Sein Lucky App ကို {{notification_detail.data.get_by}} အား မိတ်ဆက်ပေးခဲ့ပြီး ထိုသူ၏ ထီထိုးငွေသည် (20,000) ကျော်ပြီဖြစ်သောကြောင့် သင့် အား Sein Lucky မှ (5,000) ပွိုင့် ချီးမြှင့်လိုက်ပါသည်။</p>
                 <h6  style="text-align:left;font-weight:bold">ပွိုင့်ကို ဘာလုပ်လို့ရသလဲ။</h6>
                 <p style="text-align:left">ပွိုင့်ကို ငွေသားဖြင့်မထုတ်နိုင်ပါ။ သို့သော် ပွိုင့်ဖြင့် ထီထိုးနိုင်ပြီး ထီပေါက်ပါက ငွေသားဖြင့် ပြန်လျော်ပေးသောကြောင့် ပိုက်ဆံထုတ်နိုင်ပါသည်။</p>
            </el-card>
        </div>

         <div  v-else-if="notification_detail.status == 'bet_reward'">
             <el-card data-aos="zoom-out-down"
                data-aos-easing="linear">
                <h5 class="title">{{notification_detail.title}} </h5>
                <h5 class="amount">{{notification_detail.data.amount}} ကျပ်  </h5>
                <div class="footer_card" >
                    <p>ပွိုင့်ဝင်ချိန်  {{notification_detail.read_at}}</p>
                </div>
            
            
            </el-card>
              <img src="~static/images/noti_page/new_member_small.png" alt="" class="win_star_icon">
            <el-card>   
                 <h6  style="text-align:left;font-weight:bold">ဘာကြောင့် ပွိုင့်ရရှိတာလဲ။</h6>
                 <p style="text-align:left">သင်ဟာ အကောင့်ဖွင့်ချိန်တွင် ရည်ညွှန်းကုဒ် ဖြည့်သောကြောင့် ယခု ပွိုင့်လက်ဆောင်ရရှိပါသည်။</p>
                 <h6  style="text-align:left;font-weight:bold">ပွိုင့်ကို ဘာလုပ်လို့ရသလဲ။</h6>
                 <p style="text-align:left">ပွိုင့်ကို ငွေသားဖြင့်မထုတ်နိုင်ပါ။ သို့သော် ပွိုင့်ဖြင့် ထီထိုးနိုင်ပြီး ထီပေါက်ပါက ငွေသားဖြင့် ပြန်လျော်ပေးသောကြောင့် ပိုက်ဆံထုတ်နိုင်ပါသည်။</p>
            </el-card>
        </div>

       
        <div  v-else-if="notification_detail.status == 'withdrawl'">
            <el-card data-aos="zoom-out-down"
            data-aos-easing="linear">
            <h5 class="title">{{notification_detail.title}} </h5>
            <h5 class="amount">{{notification_detail.data.amount}} ကျပ် </h5>
                <div class="footer_card">
                    <p>ငွေထုတ်ချိန်  {{notification_detail.data.time}}</p>
                </div>

            
             </el-card>
        </div>

          
        <div  v-else-if="notification_detail.status == 'top_up'">
            <el-card data-aos="zoom-out-down"
            data-aos-easing="linear">
            <h5 class="title">{{notification_detail.title}} </h5>
            <h5 class="amount">{{notification_detail.data.amount}} ကျပ် </h5>
                <div class="footer_card">
                    <p>ငွေသွင်းချိန်  {{notification_detail.data.time}}</p>
                </div>
            
            </el-card>
        </div>

      
    
    
     

      </section>
      
    </div>
</template>
<style >
    .withdraw_notifi {
        text-align: center;
        padding:20px;
    }
      .withdraw_noti .el-page-header {
        line-height: 43px;
        color:#fff;
        padding:10px 20px;
    }
    .withdraw_noti .el-page-header__content {
        color:#fff;
    }
    .withdraw_noti .el-page-header__left {
        margin:0;
    }
    .withdraw_notifi .el-card {
        border-radius: 13px;
    }
        .refel_img_two img {
        width:80px;
        height:auto;
        position: relative;
        top: 43px;
        z-index: 1;
    }
    .title {
        padding:0 20px;
        margin-top:20px;
        text-align: center;
        font-size: 15px;
    }
    .amount {
        color:#158220;
        padding:7px 0;
        font-weight: bold;
    }
    .footer_card {
        border-top:1px solid #0000001A;
    }
    .footer_card p {
        margin: 15px auto 0 auto;
    }
    .win_detail span {
        font-size: 13px;
    }
   .win_star_icon {
        width: 40px;
        top: 23px;
        left: 106px;
        position: relative;

   }
   .win_name {
       padding-top:25px;
       font-weight: bold;
   }
        
</style>

<script>
import axios from 'axios'
export default {
    data() {
        return {
           notification_detail:'',
           status:'',
           profile:''
        }
    },
    mounted() {
     
      this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
        })
    },
     methods: {
         goBack() {

              this.$router.push(`/notification?lang=${this.$store.state.locale}`); 
            //    const loading = this.$loading({
            //     lock: true,
            //     text: 'Loading',
            //     spinner: 'el-icon-loading',
            //     background: 'rgba(0, 0, 0, 0.7)'
            //     });
            //     setTimeout(() => {
            //     loading.close();
            //     }, 2000);
         },

     },
       created() {

         let token = localStorage.getItem('token');
            let noti_id = localStorage.getItem('notification_id');
            console.log(noti_id);
                this.$axios.get("/v1/notification/detail?notification_id="+noti_id,
                    {headers: {
                               "Authorization": "Bearer "+token
                         }
                        })
                
                    .then(response => {
                       console.log(response)
                    this.notification_detail = response.data.data
                    console.log('leee pal')
                    console.log(this.notification_detail)
                })
          // let token = localStorage.getItem('token');
        if(token) {
              this.$axios.get("/v1/profile",
                    {headers: {
                               "Authorization": "Bearer "+token
                         }
                        })
                    .then(response => {
                     this.profile = response.data.data
                        console.log(this.profile)
                })
        }
                
     }
}
</script>