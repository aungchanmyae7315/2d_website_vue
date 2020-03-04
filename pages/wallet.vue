<template>
    <el-main class="wallet">
      <el-header class="wallet_header" >
        
              <div v-if="!$store.state.isLoggedIn" class="demo-type logout_wallet">
                 <nuxt-link :to="`${$t('login')}?lang=${$store.state.locale}`">
                 <el-avatar :size="60" >  <img src="~static/images/icons/me_img.png" alt=""></el-avatar>
                <div  class="avatar_text">
                  <ul>
                    <li>
                      <span>{{$t('Please Login first')}}</span>
                      
                      </li>
                  
                  </ul>
                  </div>
                   </nuxt-link>
              </div>
        
              <div v-else class="demo-type">
                 <el-avatar :size="60" v-if="this.profile.image == null"> 
                    <img src="~static/images/icons/me_img.png" alt="">
                  
                  </el-avatar>
                  <el-avatar :size="60" v-else > 
                   <img :src="this.profile.image" alt="">
                  
                  </el-avatar>
                <div  class="avatar_text">
                  <ul>
                    <li>{{ $t('my_balance') }}</li>
                    <li class="amount_mmk">{{this.profile.wallet}}</li>
                  </ul>
                  </div>
              </div>
              <div v-if ="!$store.state.isLoggedIn">
               
              </div>
           
                <div v-else class="btn_group_wallet">
                  <nuxt-link  :to="`${$t('withdrawal')}?lang=${$store.state.locale}`">
                    <el-button round class="withdraw_btn">{{ $t('Withdrawal') }}</el-button>
                  </nuxt-link>
                <nuxt-link  :to="`${$t('topup')}?lang=${$store.state.locale}`">
                      <el-button type="warning" round>{{ $t('Top Up') }}</el-button>
                </nuxt-link>
              
               </div>

         
            </el-header>
             <div class="longText" id="hidingScrollBar">
                <div class=" hideScrollBar_wallet ">
                  <div class="topup_withdraw">
                     <a href="https://www.seinlucky.com/topup"> <p class="under-below">{{$t('How to top up money?')}}</p></a>
                     <a href="https://www.seinlucky.com/withdraw"><p class="under-below">{{$t('How to withdraw money?')}}</p></a>
                  </div>
                    
                <el-card data-aos="fade-up" data-aos-duration="800">
                  

                  <h5>{{ $t('Sein Lucky Bank Accounts') }}</h5>
                  <p><span style="color:red;">{{$t('Warning')}} !!!</span> {{$t('there_is_no_other')}}</p>
                    
                    <div v-for="(bank_info, b) in bank_account" :key="b">
                     <div class="demo-type wallet_type">
                      <img :src="bank_info.bank_icon" alt="">
                      <div  class="avatar_text">
                        <ul>
                          <li>{{bank_info.bank_name}}</li>
                          <li class="bank_number">
                            <span class="code text-red">{{ bank_info.card_number }}</span>
                            <input type="hidden" :id="'code'+(b+1)" :value="bank_info.card_number">
                          </li>
                        </ul>
                        </div>
                        <div class="result_icon">
                            <span class="  copy-btn ml-auto" @click.stop.prevent="copyTestingCode(bank_info.id)">
                            {{ $t('Copy') }}
                          </span>
                          </div>
                      </div>
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
                <nuxt-link  :to="`${$t('wallet')}?lang=${$store.state.locale}`">
                  <el-menu-item index="2">
                      <img src="~static/icons_header/wallet_t_icon.png" alt="">
                      <h5 class="main_icon" style="font-weight:bold">{{$t('wallet_title')}}</h5>
                  </el-menu-item>
                </nuxt-link>
                 <nuxt-link  :to="`${$t('service')}?lang=${$store.state.locale}`">
                  <el-menu-item index="3">
                    <img src="~static/icons_header/service_icon.png" alt="">
                    <h5 class="main_icon">{{$t('service_title')}}</h5>
                  </el-menu-item>
                </nuxt-link>
                <nuxt-link  :to="`${$t('me')}?lang=${$store.state.locale}`">
                  <el-menu-item index="4">
                    <img src="~static/icons_header/me_icon.png" alt="">
                    <h5 class="main_icon">{{$t('me_title')}}</h5>
                </el-menu-item>
                </nuxt-link>


              </el-menu>
          </el-footer>
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
      padding:10px 0;
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
      background: #fff;
      padding:4px 7px;
      border-radius: 23px;
      font-size:11px;
    }
    .wallet .el-card {
      background-color: #252E39;
      border:2pt solid #FFEA72;
      border-radius: 13px;
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
      width:55px;
      height:auto;
      float:left;
      border-radius: 9px;
      margin-right:8px;
    }
    .logout_wallet ul li span {
      position: relative;
      bottom: 7px;
      
    }
    .topup_withdraw {
      margin-bottom:20px;

    }
    .topup_withdraw  a  {
      color:#fff;
      text-decoration: underline;
      text-decoration-style: solid;
    }
    .under-below { 
      font-size: 19px;
      font-weight: bold;
      -webkit-text-underline-position: under;
      -ms-text-underline-position: below;
      text-underline-position: under; 
    }
</style>
<script>
 import axios from 'axios'
  export default {
     
     mounted() {
      this.updateIsLoggedIn();
     
   },
    data() {
      return {
        bank_account:'',
        card_number:'',
        visible: false,
        profile:'',
        message:''
      };
    },
     created() {
      
          this.$axios.get('/v1/admin-bank')
              .then(response => {
                this.bank_account = response.data.data
              })  
          let token = localStorage.getItem('token');
        if(token) {
              this.$axios.get("/v1/profile",
                    {headers: {
                               "Authorization": "Bearer "+token
                         }
                        })
                    .then(response => {
                     this.profile = response.data.data

                })
        }
                
    },

    methods: {

       updateIsLoggedIn() {
        this.$store.commit('updateIsLoggedIn', this.hasUserInfo());
      },
      hasUserInfo() {
        return Boolean(localStorage.getItem('userInfo'));
      },

       copyTestingCode (data) {
          let testingCodeToCopy = document.querySelector('#code'+data)
          testingCodeToCopy.setAttribute('type', 'text')    
          testingCodeToCopy.select()

          try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
             this.$notify({
               message:'Copied'+' '+ msg,
              position: 'bottom-right',
              showClose: false
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