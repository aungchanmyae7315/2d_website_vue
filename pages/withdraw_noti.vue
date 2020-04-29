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
                <img v-else-if="notification_detail.status == 'point_5000_reward'"  src="~static/images/noti_page/one_week_noti_icon.png" class="">
                <img v-else-if="notification_detail.status == 'bet_reward'"  src="~static/images/noti_page/bet_reward_icon.png" class="">
            </div>
        <div  v-if="notification_detail.status == 'win'">
            <div id="my-node">
            <el-card>
                <h6 v-if="this.profile.name == null " class="win_name">{{this.profile.phone}}</h6>
                <h6 v-else class="win_name">{{this.profile.name}}</h6>
                <h6>{{notification_detail.description}}</h6>
                <h5 class="amount">{{notification_detail.data.win_amt}} MMK  </h5>
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
                            <span>: {{notification_detail.data.bet_amt}}  ကျပ် </span>
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
            <div class="share_btn_win">
                 <span >
                    <img src="~static/icon_share/down_arrow_icon.png" alt="" class="share_icon"><br>
                    <el-button    class="" @click="SavePhoto()" type="text">{{$t('save_photo')}}</el-button> 
                </span>
            </div>
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
                <h5 class="amount">{{notification_detail.data.amount}}  ကျပ် </h5>
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

         <div  v-else-if="notification_detail.status == 'point_5000_reward'">
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

        <el-drawer
                title="I am the title"
                :visible.sync="drawer"
                :direction="direction"
                    size="35%"
                :with-header="false">
                
                 <social-sharing :networks="overriddenNetworks" 
                        :url="url"
                      title="SeinLucky"
                      description="Share Referal Code From Seinlucky"
                      :quote="$t('ကျွန်တော်ရည်ညွန်းကုဒ်')+' '+this.referal_code+' '+'ထည့်ပြီးအကောင့်သစ်ဖွင့်လိုက်ပါနော်'"
                      hashtags="seinlucky"
                    
                      twitter-user="vuejs"
                      inline-template>
                       
        <div class="social_icons">
      <el-row>
          <el-col :span="24">
            <ul>
              <li> 
                <network network="sms">
                    <i class="fa fa-commenting-o linkedin"></i> 
                      <h6 class="">SmS</h6>
                </network>
              </li>
              <li>
                 <network network="facebook">
                  <i class="fa fa-facebook facebook"></i> 
                   <h6 class="">Facebook</h6>
                </network>
              </li>
              <li>
                  <network network="messeager">
                    <img src="~static/icon_share/messeager_icon.png" class="social_img">
                      <h6 class="">Messeager</h6>
                </network>
              </li>
              
            </ul>
          </el-col>
          <el-col :span="24">
            <ul>
              <li>
                   <network network="whatsapp">
                    <i class="fa fa-whatsapp whatsapp"></i> 
                    <h6 class="">WhatsApp</h6>
                  </network>
              </li>
              <li>
                  <network network="viber">
                    <img src="~static/icon_share/viber_icon.png" class="social_img">
                  <h6 class="">Viber</h6>
                  </network> 
              </li>
              <li>

                 <network network="weChat">
                  <img src="~static/icon_share/weChat_icon.png" class="social_img">
                  <h6 class="">WeChat</h6>
                  </network>
              </li>
            </ul>
            
            
            
                </el-col>
         
            </el-row>
            </div>
        </social-sharing>

        </el-drawer>
      
    </div>


    
</template>
<style >
    .share_icon {
        width:30px;
        height: auto;
      }
      .el-button--text {
        color:#36793F;
      }
      .el-button--text:focus {
        color:#36793f;
        font-weight: bold;
      }
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
    .refel_img_two {
      margin-top:-50px;
    }
    .title {
        padding:0 20px;
        margin-top:20px;
        text-align: center;
        font-size: 15px;
    }
    .amount {
        color:#158220;
      
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
   .withdraw_noti .el-dialog {
  max-width: 480px;
  width:90%;
}

.facebook {
  background-color: #4b70ab;
}
.facebook:hover {
  background-color: #405f91;
}
.email {
  background-color: #d63533;
}
.email:hover {
  background-color: #b62d2b;
}
.linkedin {
  background-color: #0087be;
}
.linkedin:hover {
  background-color: #0073a2;
}
.twitter {
  background-color: #32b9e7;
}
.twitter:hover {
  background-color: #2b9dc4;
}
.googleplus {
  background-color: #fa5432;
}
.googleplus:hover {
  background-color: #d5472b;
}
.whatsapp {
  background-color: #00aff0;
}
.whatsapp:hover {
  background-color: #0095cc;
}
.telegram {
  background-color: #6291b2;
}
.telegram:hover {
  background-color: #537b97;
}
.skype {
  background-color: #00aff0;
}
.skype:hover {
  background-color: #0095cc;
}
.social_icons ul {
  padding:0;
  margin:0;
  list-style: none;
}
.social_icons ul li {
  display: inline-block;
  padding:0 12px;
}
.social_icons ul li h6 {
  font-size: 13px;
}
.social_icons i {
    font-size: 1.4em;
  color: white;
  text-decoration: none;
  border-radius: 100%;
  margin:5px 10px;
  width: 2.2em;
  height: 2.2em;
  text-align: center;
 display: inline-flex;
  -webkit-box-align: center;
          align-items: center;
  -webkit-box-pack: center;
          justify-content: center;
}
.social_img {
  width:60px;
}
.share_btn_win {
    text-align: center;
    margin:10px auto;
}
.share_btn_win .el-button.is-round {
    width:100%;
     background-image: linear-gradient(to bottom, #F5763C 0%, #ED5A49 51%, #E54656 100%);
    color:#fff;
}
        
</style>

<script>
import axios from 'axios'

import htmlToImage from 'html-to-image';
import SocialSharing from 'vue-social-sharing';

import Vue from 'vue'
const VueSelect = {
  install(Vue, options) {
    Vue.component('SocialSharing', SocialSharing)
  }
};
Vue.use(VueSelect)


export default {
    data() {
        return {
              overriddenNetworks: {
                    "viber": {
                        "sharer": "https://account.viber.com/en/login",
                        "type": "popup"
                    },
                    "weChat": {
                        "sharer": "https://web.wechat.com/",
                        "type": "popup"
                    },
                    "messeager": {
                        "sharer": "https://www.messenger.com/login.php",
                        "type": "popup"
                    },
                    "hello": {
                        "sharer": "https://www.messenger.com/login.php",
                        "type": "popup"
                    },
                    
        },
                url:this.url,
                share_img:'',
                referal_code:'',
                drawer: false,
                direction: 'btt',
                notification_detail:'',
                status:'',
                profile:''
        }
    },
    mounted() {
     

        let token = localStorage.getItem('token');
      if(token) {
         this.$axios.get("/v2/v1/referal_code",
                    {headers: {
                               "Authorization": "Bearer "+token
                         }
                        })
                    .then(response => {
                      
                     this.referal_code = response.data.data.generate_code
                     console.log(this.referal_code)
                    
                  
                  

                })
      }
      this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
        })
    },
     methods: {
          SavePhoto() {
        var app = this
          var node = document.getElementById('my-node');
 
        htmlToImage.toPng(node)
        .then(function (dataUrl) {
         
          var img = new Image();
          img.src = dataUrl;
           
            //document.body.appendChild(img);
            console.log(img.src)
           
            //   let token = localStorage.getItem('token');
            // if(token) {
           
            //  let formData = new FormData();
            //     formData.append('image', img.src);

            //   axios.post('https://build.seinchanthar.com/api/v2/v1/social_image',
            //       formData
            //      ,{
            //       headers: {
            //         "Authorization": "Bearer "+token,
            //         'content-type': 'multipart/form-data'
            //       }
            //     })
               
                
            //         .then(response => {
            //           console.log('all response')
            //          //console.log(this.topup_info = response.data.data)
            //          console.log(response.data)
            //             app.url = response.data;
            //          //this.img_url = response.data
            //     })
            // }
            var link = document.createElement('a');
            link.download = 'seinlucky.jpeg';
            link.href = dataUrl;
            link.click();
        })
        .catch(function (error) {
          console.error('oops, something went wrong!', error);
        
        });
  
      },

         goBack() {

              this.$router.push(`/notification?lang=${this.$store.state.locale}`); 

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