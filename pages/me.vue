

<template>
    <el-main>
       <div class="main_container">
     <el-header class="me_header" >
       
         <div  v-if ="$store.state.isLoggedIn">
              <div class="demo-type">
                 <el-avatar v-if="this.profile.image == null" :size="60"><img src="~static/images/icons/me_img.png" alt=""> </el-avatar>
                 <el-avatar v-else :size="60"><img :src="this.profile.profile " alt=""></el-avatar>
                <div  class="avatar_text">
                  <ul>
                    <li>{{this.profile.name}}</li>
                    <nuxt-link :to="`${$t('profile_edit')}?lang=${$store.state.locale}`">
                     <li class="edit_profile">{{$t('edit_profile')}}</li>
                    </nuxt-link>
                  </ul>
                  </div>
            
              </div>
        </div>
        <div v-else> 
            <nuxt-link :to="`${$t('login')}?lang=${$store.state.locale}`">
           <div class="demo-type">
                  <el-avatar :size="60" ><img src="~static/images/icons/me_img.png" alt=""></el-avatar>
                  <span  class="avatar_text">{{$t('Please Login first')}}</span>
                </div>
            </nuxt-link>
        </div>
       
           
      </el-header>
      <el-main>
           <ul class="acc_items">
               
            
                <div  v-if ="!$store.state.isLoggedIn">
                       <li><nuxt-link  :to="`${$t('login')}?lang=${$store.state.locale}`"><a href=""><img src="~static/icons_acc_me/noti.png" alt=""> {{$t('Notifications')}}</a></nuxt-link></li>
                       <li><nuxt-link  :to="`${$t('login')}?lang=${$store.state.locale}`"><a href=""><img src="~static/icons_acc_me/bet.png" alt=""> {{$t('Bet Status')}}</a></nuxt-link></li>
                        <li><nuxt-link  :to="`${$t('language')}?lang=${$store.state.locale}`"><a href=""><img src="~static/icons_acc_me/lang.png" alt=""> {{$t('Language')}}</a></nuxt-link></li>

                </div>
                <div v-else> 
                       <li><nuxt-link  :to="`${$t('notification')}?lang=${$store.state.locale}`"><a href="" @click="loading" v-loading.fullscreen.lock="fullscreenLoading"><img src="~static/icons_acc_me/noti.png" alt=""> {{$t('Notifications')}}</a></nuxt-link></li>
                        <li><nuxt-link  :to="`${$t('bet_status')}?lang=${$store.state.locale}`"><a href=""><img src="~static/icons_acc_me/bet.png" alt=""> {{$t('Bet Status')}}</a></nuxt-link></li>
                         <li><nuxt-link  :to="`${$t('bet_history')}?lang=${$store.state.locale}`"><a href=""><img src="~static/images/icons/bet_status_icon.png" class="me_bet_stauts_icon" alt=""> {{$t('bet_history_title')}}</a></nuxt-link></li>
                        <li><nuxt-link  :to="`${$t('language')}?lang=${$store.state.locale}`"><a href=""><img src="~static/icons_acc_me/lang.png" alt=""> {{$t('Language')}}</a></nuxt-link></li>

                        <!-- <li><nuxt-link to="/acc_refel"><a href=""><img src="~static/icons_acc_me/refel_icon.png" alt=""> Referral Code</a></nuxt-link></li> -->
                        <li><a href="" @click="logout()"><img src="~static/icons_acc_me/logout_icon.png" alt=""> {{$t('Log Out')}}</a></li>
                </div>
              

            </ul>
            
      </el-main>
   
     <el-footer class="footer">
          <el-menu
           
            class="el-menu-demo"
            mode="horizontal"
            text-align="center"
           
            background-color="#14612D"
            text-color="#fff"
            width="100%"
            active-text-color="#ffd04b">
             <nuxt-link :to="`${$t('/')}?lang=${$store.state.locale}`">
            <el-menu-item index="1">
              <img src="~static/icons_header/dimond_icon.png" alt="">
              <h5 class="main_icon" >Home</h5>
            </el-menu-item>
            </nuxt-link>
             <nuxt-link :to="`${$t('wallet')}?lang=${$store.state.locale}`">
            <el-menu-item index="2">
               <img src="~static/icons_header/wallet_icon.png" alt="">
               <h5 class="main_icon">Wallet</h5>
            </el-menu-item>
            </nuxt-link>
            <nuxt-link :to="`${$t('service')}?lang=${$store.state.locale}`">
            <el-menu-item index="3">
                <img src="~static/icons_header/service_icon.png" alt="">
                <h5 class="main_icon" >Service</h5>
            </el-menu-item>
            </nuxt-link>
             <nuxt-link :to="`${$t('me')}?lang=${$store.state.locale}`">
             <el-menu-item index="4">
               <img src="~static/icons_header/me_t_icon.png" alt="">
               <h5 class="main_icon" style="font-weight:bold">Me</h5>
            </el-menu-item>
            </nuxt-link>


          </el-menu>
        </el-footer>
  </div>
        
           
    
      </el-main>

</template>


<script>
 import axios from 'axios'
export default {
     
    mounted() {
     this.updateIsLoggedIn();
       let token = localStorage.getItem('token');
    if(token) {
        axios.get("https://build.seinlucky.com/api/v1/profile",
                    {headers: {
                               "Authorization": "Bearer "+token
                         }
                        })
                    .then(response => {
                      // location.reload();
                     this.profile = response.data.data
                    

                })
    }
      
   },
    data() {
      return {
        fullscreenLoading: false,
        profile:'',
      };
    },
    
    methods: {
      loading() {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(() => {
          loading.close();
        }, 2000);
      
    },
        updateIsLoggedIn() {
        this.$store.commit('updateIsLoggedIn', this.hasUserInfo());
      },
      hasUserInfo() {
        return Boolean(localStorage.getItem('userInfo'));
      },
        logout() {
            this.$store.commit('logOut');
              this.$router.push(`/?lang=${this.$store.state.locale}`); 
      },
    },
    created() {
    
    }
}
</script>

<style> 
    .me_header {
        padding:0px 12px !important;
        height:82px !important;
    }

    .header {
        background-color :#2A612D;
    }
    .acc_header {
        padding-left:20px;
    }
    .acc_items {
        list-style :none;
        text-align:left;
        padding:10px;
    }
    .acc_items  li {
        padding:10px 0;
        display:block;
    }
    .acc_items li a {
        text-decoration: none;
        color:#fff;
        font-size:16px;
        font-weight:bold;
    }
    .acc_items li a img {
        padding: 0 10px;
        
    }
    .me_header  .avatar_text {
        bottom:19px;
    }
    .edit_profile {
      color:goldenrod;
    }
    .me_bet_stauts_icon {
      width:52px;
      height:auto;
    }
    
</style>