<template>
    <el-main class="wallet">
      <el-header class="wallet_header" >
        
              <div v-if="!$store.state.isLoggedIn" class="demo-type logout_wallet">
                 <nuxt-link :to="`${$t('/login')}?lang=${$store.state.locale}`">
                 <el-avatar :size="60" >  <img src="~static/images/icons/me_img.png" alt=""></el-avatar>
                <div  class="avatar_text">
                  <ul>
                    <li>
                      <span class="avatar_text_logout">{{$t('Please Login first')}}</span>
                      
                      </li>
                  
                  </ul>
                  </div>
                   </nuxt-link>
              </div>
        
              <div v-else class="demo-type">
              <nuxt-link :to="`${$t('/edit_profile_index')}?lang=${$store.state.locale}`">
                 <el-avatar :size="60" v-if="this.profile.profile == null"> 
                   <img src="~static/images/icons/me_img.png" alt="">
                  
                  
                  </el-avatar>
                  
                  <el-avatar :size="60" v-else > 
                  
                       <img :src="this.profile.profile" alt="">
                  
                  </el-avatar>
              </nuxt-link>
                 <div  class="avatar_text">
                  <ul>
                       <nuxt-link :to="`${$t('/edit_profile_index')}?lang=${$store.state.locale}`">
                          <li style="color:#fff;line-height:16px">
                            <span>{{this.profile.name}}</span><br>
                            <span>{{this.profile.phone}}</span>
                          
                          </li>
                     </nuxt-link>
                    <nuxt-link :to="`${$t('/wallet')}?lang=${$store.state.locale}`">
                          <li  style="line-height:13px" class="amount_mmk"><span>{{$t('you_balance')}} : </span>{{this.thousands_separators(myWallet)}} {{$t('kyat')}}</li>
                    </nuxt-link>
                  </ul>
                  </div>
              </div>
              <div v-if ="!$store.state.isLoggedIn">
               
              </div>
           
                <div v-else class="btn_group_wallet">
                  <nuxt-link  :to="`${$t('/withdrawal')}?lang=${$store.state.locale}`">
                    <el-button round class="withdraw_btn">{{ $t('Withdrawal') }}</el-button>
                  </nuxt-link>
                <nuxt-link  :to="`${$t('/topup')}?lang=${$store.state.locale}`">
                      <el-button type="warning" round>{{ $t('Top Up') }}</el-button>
                </nuxt-link>
                <nuxt-link  :to="`${$t('/twoD/wallet/transaction_status')}?lang=${$store.state.locale}`">
                  <el-button style="width:93%" class="tran_status_btn" round><img src="~static/images/topup_withdraw/exchange-alt-solid.svg" alt="" style="padding:0 10px;">{{$t('transaction_status')}}</el-button>
                </nuxt-link>
               </div>

            
            </el-header>
             <div class="longText" id="hidingScrollBar">
                <div class=" hideScrollBar_wallet ">
                  <div class="topup_withdraw">
                        <nuxt-link  :to="`${$t('/topup_youtube')}?lang=${$store.state.locale}`"><img src="~static/images/topup_withdraw/youtube-brands.svg" alt="" >
                       
                         <p class="under-below">{{$t('How to top up money?')}}</p>
                         </nuxt-link>
                         <nuxt-link  :to="`${$t('/withdraw_youtube')}?lang=${$store.state.locale}`"> <img src="~static/images/topup_withdraw/youtube-brands.svg" alt="">
                        
                           <p class="under-below">{{$t('How to withdraw money?')}}</p>
                      
                         </nuxt-link>
                  </div>
                <el-card class="time_card">
                    <span>{{$t('sein_lucky_office_hours')}}</span>
                    <el-divider></el-divider>
                    <span>{{$t('mon-sat')}}</span><br>
                    <span>{{$t('morning')}} 9:00 AM - 11:50 AM</span><br>
                    <span>{{$t('evening')}} 01:00 PM - 05:30 PM</span>
                </el-card>
                    
                <el-card class="bank_card" style="width:98%">
                  

                  <h5>{{ $t('Sein Lucky Bank Accounts') }}</h5>
                  <p><span style="color:red;">{{$t('Warning')}} !!!</span> {{$t('there_is_no_other')}}</p>
                  <div v-if="this.bank_account">
                    <div v-for="(bank_info, b) in bank_account" :key="b">
                    
                       <div  class="demo-type wallet_type">
                    
                            <el-image :src="bank_info.bank_icon">
                              <div slot="placeholder" class="image-slot">
                                Loading<span class="dot">...</span>
                              </div>
                            </el-image>
                            <div  class="avatar_text">
                              <ul style="position:relative;top:-8px;">
                                <li style="font-size:14px;">{{bank_info.bank_name}}</li>
                                <li style="font-size:14px;" class="bank_number">
                                  <span class="code text-red">{{ bank_info.card_number }}</span>
                                  <input type="hidden" readonly :id="'code'+(bank_info.id)" :value="bank_info.card_number">
                                </li>
                              </ul>
                            </div>
                            <div class="result_icon" style="padding-top:18px;">
                                <span class="  copy-btn ml-auto" @click.stop.prevent="copyTestingCode(bank_info.id)">
                                {{ $t('Copy') }}
                              </span>
                            </div>
                        </div>
                    </div>
                      </div>
                      <div v-else style="position:relative;bottom:10px;">
                        <span style="color:#fff">Loading...
                          <div class="loadingio-spinner-spin-utmcam2hc7s"><div class="ldio-3y54ncgf8i">
                          <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>
                          </div></div>

                        </span>
                      </div>
                  </el-card>
                </div>
                </div>

          <el-footer class="footer">
              <el-menu
                
                class="el-menu-demo"
                mode="horizontal"
                text-align="center"
                
                background-color="#14612D"
                text-color="#fff"
                width="100%"
                active-text-color="#ffd04b">
                  <nuxt-link  :to="`${$t('/')}?lang=${$store.state.locale}`">
                    <el-menu-item index="1">
                        <img src="~static/icons_header/dimond_icon.png" alt="">
                        <h5 class="main_icon">{{$t('home_title')}}</h5>
                    </el-menu-item>
                </nuxt-link>
                <nuxt-link  :to="`${$t('/wallet')}?lang=${$store.state.locale}`">
                  <el-menu-item index="2"  @click="HomeRefresh" v-loading.fullscreen.lock="fullscreenLoading">
                      <img src="~static/icons_header/dimond_t_icon.png" alt="">
                      <h5 class="main_icon" style="font-weight:bold;color:#ccab48">{{$t('wallet_title')}}</h5>
                  </el-menu-item>
                </nuxt-link>
                 <nuxt-link :to="`${$t('/promotion')}?lang=${$store.state.locale}`"> 
                <el-menu-item index="2">
                  <img src="~static/icons_header/promotion_icon.png" alt="">
                    <h5 class="main_icon">{{$t('promotion_title')}}</h5>
                </el-menu-item>
                </nuxt-link>
                 <nuxt-link  :to="`${$t('/service')}?lang=${$store.state.locale}`">
                  <el-menu-item index="3">
                    <img src="~static/icons_header/service_icon.png" alt="">
                    <h5 class="main_icon">{{$t('service_title')}}</h5>
                  </el-menu-item>
                </nuxt-link>
                <nuxt-link  :to="`${$t('/me')}?lang=${$store.state.locale}`">
                  <el-menu-item index="4">
                    <img src="~static/icons_header/me_icon.png" alt="">
                    <h5 class="main_icon">{{$t('me_title')}}</h5>
                </el-menu-item>
                </nuxt-link>


              </el-menu>
          </el-footer>
           <HasError></HasError>
  </el-main>
</template>
<style>
  
  .wallet_header {
     
        height:auto !important;
    }
  .hideScrollBar_wallet {
     
    width: 100%;
    height: 100%;
    overflow: auto;
    margin-left: 15px;
    padding-right: 28px; /*This would hide the scroll bar of the right. To be sure we hide the scrollbar on every browser, increase this value*/
    padding-top:60px;
    padding-bottom: 330px; /*This would hide the scroll bar of the bottom if there is one*/

    }
  .wallet_header .demo-type {
   
    padding:0 10px;
    height:63px;
  }
    .header {
        background-color :#2A612D;
        
    }
    .btn_group_wallet {
      text-align: center;
      padding-top:10px;
    }
    .btn_group_wallet .el-button.is-round {
      width:46%;
    }
    .btn_group_wallet .el-button--warning {
      color: #000;
      background-color: #fff;
      border-color: #fff;
    }
    .withdraw_btn {
      background: unset;
      border-color: #fff;
      color:#fff;
    }
    .el-main {
      margin-top:-1px !important;
    }
    .copy-btn {
      cursor: pointer;
      background: #fff;
      padding:7px;
      border-radius: 23px;
      font-size:11px;
    }
    .wallet .bank_card {
      background-color: #252E39;
      border:2pt solid #FFEA72;
      border-radius: 13px;
    }
    .wallet .time_card {
      margin-bottom:15px;
      border-radius: 13px;
      color:#fff;
      border:0;
      background-color: #2B6F42;
    }
    .wallet .time_card .el-divider--horizontal {
      margin:11px auto;
    }
    .wallet  h5 {
      color:#fff;
    }
    .wallet .el-card__body p {
      color:#CCCCCC;
      padding-bottom:15px;
      border-bottom:1px solid #425266;
    }
    .wallet .avatar_text {
      padding:0;
    }
    .wallet .el-card .demo-type .avatar_text {
      position:unset !important;
    }
    .wallet .bank_number {
      color:#CCCCCC;
      font-size: 13px;
    }
    .wallet .el-card .demo-type {
      padding:0;
     
     
    }
    .wallet .el-card .el-button.is-round {
      padding:6px 7px;
      margin-top:5px;
    }
    .wallet .el-card__body {
      padding:15px;
    }
    .el-popover--plain {
      text-align: center;
      padding:4px !important;
    }
    .wallet_type .el-avatar--circle {
      border-radius: 22%;
    }
    .wallet_type .el-button {
      font-size: 11px;
    }
    .wallet_type .el-avatar ul {
      padding:5px;
    }
    .wallet_type img {
      width:50px;
      height:auto;
      float:left;
      border-radius: 9px;
      /* margin-right:8px; */
    }
    .logout_wallet ul li span {
      position: relative;
      bottom: 7px;
      
    }
    .topup_withdraw {
      margin-bottom:20px;
      text-align: left;

    }
    .topup_withdraw img {
      width:25px;
      margin:5px 8px;
      height:auto;
      float: left;
    }
    .topup_withdraw  a  {
      color:#fff;
      
      text-decoration: underline;
      text-decoration-style: solid;
    }
    .under-below { 
      font-size: 15px;
      font-weight: bold;
      -webkit-text-underline-position: under;
      -ms-text-underline-position: below;
      text-underline-position: under; 
    }
    .tran_status_btn {
      width:93%;
      margin-top:10px;
      color:#fff;
      border:0;
      background-color:#2B6F42;
      
    }
    @media screen and (max-width: 320px) {
      .wallet_type img {
        width:46px;
      }
    }


@keyframes ldio-3y54ncgf8i {
  0% {
    opacity: 1;
    backface-visibility: hidden;
    transform: translateZ(0) scale(1.5,1.5);
  } 100% {
    opacity: 0;
    backface-visibility: hidden;
    transform: translateZ(0) scale(1,1);
  }
}
.ldio-3y54ncgf8i div > div {
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #0d8e43;
  animation: ldio-3y54ncgf8i 1s linear infinite;
}.ldio-3y54ncgf8i div:nth-child(1) > div {
  left: 74px;
  top: 44px;
  animation-delay: -0.875s;
}
.ldio-3y54ncgf8i > div:nth-child(1) {
  transform: rotate(0deg);
  transform-origin: 80px 50px;
}.ldio-3y54ncgf8i div:nth-child(2) > div {
  left: 65px;
  top: 65px;
  animation-delay: -0.75s;
}
.ldio-3y54ncgf8i > div:nth-child(2) {
  transform: rotate(45deg);
  transform-origin: 71px 71px;
}.ldio-3y54ncgf8i div:nth-child(3) > div {
  left: 44px;
  top: 74px;
  animation-delay: -0.625s;
}
.ldio-3y54ncgf8i > div:nth-child(3) {
  transform: rotate(90deg);
  transform-origin: 50px 80px;
}.ldio-3y54ncgf8i div:nth-child(4) > div {
  left: 23px;
  top: 65px;
  animation-delay: -0.5s;
}
.ldio-3y54ncgf8i > div:nth-child(4) {
  transform: rotate(135deg);
  transform-origin: 29px 71px;
}.ldio-3y54ncgf8i div:nth-child(5) > div {
  left: 14px;
  top: 44px;
  animation-delay: -0.375s;
}
.ldio-3y54ncgf8i > div:nth-child(5) {
  transform: rotate(180deg);
  transform-origin: 20px 50px;
}.ldio-3y54ncgf8i div:nth-child(6) > div {
  left: 23px;
  top: 23px;
  animation-delay: -0.25s;
}
.ldio-3y54ncgf8i > div:nth-child(6) {
  transform: rotate(225deg);
  transform-origin: 29px 29px;
}.ldio-3y54ncgf8i div:nth-child(7) > div {
  left: 44px;
  top: 14px;
  animation-delay: -0.125s;
}
.ldio-3y54ncgf8i > div:nth-child(7) {
  transform: rotate(270deg);
  transform-origin: 50px 20px;
}.ldio-3y54ncgf8i div:nth-child(8) > div {
  left: 65px;
  top: 23px;
  animation-delay: 0s;
}
.ldio-3y54ncgf8i > div:nth-child(8) {
  transform: rotate(315deg);
  transform-origin: 71px 29px;
}
.loadingio-spinner-spin-utmcam2hc7s {
  width: 44px;
  height: 44px;
  display: inline-block;
  overflow: hidden;
  position: relative;
  top:18px;
}
.ldio-3y54ncgf8i {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(0.44);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-3y54ncgf8i div { box-sizing: content-box; }
/* generated by https://loading.io/ */

</style>
<script>
 import axios from 'axios'
 import HasError from '~/components/HasError.vue'
  export default {

     mounted() {
     
    
      this.updateIsLoggedIn();
     
   },
    components: {
     HasError
    },
    data() {
      return {
        fullscreenLoading: false,
        bank_account:'',
        

        card_number:'',
        visible: false,
        profile:'',
        message:'',
        myWallet:'',
        blockUser:'',
        group_type:'',
      };
    },
     created() {
        let token = localStorage.getItem('token');
         var  nowTimestamp =  Math.round(new Date().getTime()/1000) 
        var lastTimestamp = localStorage.getItem('bank_group_time')
        var diff = nowTimestamp - lastTimestamp;
          // 8 hours == 28800 seconds
      if(token) {
           if (diff < 28800 ) {
        
            this.bank_account = JSON.parse(localStorage.getItem('bank_account'))
           
        } else {
           
              this.$axios.get("/v2/v1/bank_card_grouping",
                    {headers: {
                               "Authorization": "Bearer "+token
                         }
                        })
                    .then(response => {
                      console.log(response)
                        this.bank_account = response.data.data[0].bank_group
                        this.$store.commit('bank_card_grouping', this.bank_account);
                        this.bank_group_time = Math.round(new Date().getTime()/1000);
                        this.$store.commit('bankgroupTime', this.bank_group_time);
                })
         
            
            
        }
      }else {
         console.log('not login')
            this.$axios.get('/v1/admin-bank')
                .then(response => {
                  this.bank_account = response.data.data
                }) 
      }
       
        
      
         
        if(token) {
              this.$axios.get("/v2/v1/profile",
                    {headers: {
                               "Authorization": "Bearer "+token
                         }
                        })
                    .then(response => {
                      console.log(response)
                      this.blockUser = response.data.data.trash
                      this.profile = response.data.data
                      this.myWallet = this.profile.wallet
                      if(this.blockUser == 0) {
                      }else {
                        this.$store.commit('logOut');
                        this.$router.push(`/home?lang=${this.$store.state.locale}`); 
                      }
                })
        }          
    },

    methods: {
       HomeRefresh() {
      this.fullscreenLoading = true;
        setTimeout(() => {
          
          this.fullscreenLoading = false;
          location.reload();
        }, 1000);
    },
      thousands_separators(num){
        var num_parts = num.toString().split(".");
        num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return num_parts.join(".");
      },
      updateIsLoggedIn() {
        this.$store.commit('updateIsLoggedIn', this.hasUserInfo());
      },
      hasUserInfo() {
        return Boolean(localStorage.getItem('userInfo'));
      },
      copyTestingCode (data) {
          let testingCodeToCopy = document.querySelector('#code'+data)
          testingCodeToCopy.setAttribute('type', 'text')    
           testingCodeToCopy.setAttribute('readonly', true);
          testingCodeToCopy.select()

          try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
             this.$message({
               message:this.$t('copy_success'),
              position: 'top',
              showClose: true,
          
            });
          } catch (err) {
              alert('Oops, unable to copy');
          }
          testingCodeToCopy.setAttribute('type', 'hidden')
          window.getSelection().removeAllRanges()
        }, 
    }
  };
</script>
