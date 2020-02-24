

<template>
    <el-main>
       <div class="main_container">
     <el-header class="me_header" >
       
         <div  v-if ="$store.state.isLoggedIn">
              <div class="demo-type">
                 <el-avatar v-if="this.profile.name != 'null'" :size="60"> <img :src="this.profile.profile " alt=""></el-avatar>
                 <el-avatar v-else :size="60"><img src="~static/images/icons/me_img.png" alt=""></el-avatar>
                <div  class="avatar_text">
                  <ul>
                    <li>{{this.profile.phone}}</li>
                    <nuxt-link :to="`${$t('profile_edit')}?lang=${$store.state.locale}`">
                     <li class="edit_profile">Edite Profile</li>
                    </nuxt-link>
                  </ul>
                  </div>
            
              </div>
        </div>
        <div v-else> 
           <div class="demo-type">
                  <el-avatar :size="60" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                  <span  class="avatar_text">Please Login First </span>
                </div>
             
        </div>
       
           
      </el-header>
      <el-main>
           <ul class="acc_items">
               
            
                <div  v-if ="!$store.state.isLoggedIn">
                       <li><nuxt-link  :to="`${$t('notification')}?lang=${$store.state.locale}`"><a href=""><img src="~static/icons_acc_me/noti.png" alt=""> {{ $t('Notifications') }}</a></nuxt-link></li>
                        <li><a href=""><img src="~static/icons_acc_me/bet.png" alt=""> Bet Stauts</a></li>
                        <li><nuxt-link  :to="`${$t('language')}?lang=${$store.state.locale}`"><a href=""><img src="~static/icons_acc_me/lang.png" alt="">  {{ $t('Language') }}</a></nuxt-link></li>

                </div>
                <div v-else> 
                       <li><nuxt-link  :to="`${$t('notification')}?lang=${$store.state.locale}`"><a href=""><img src="~static/icons_acc_me/noti.png" alt=""> {{ $t('Notifications') }}</a></nuxt-link></li>
                        <li><nuxt-link  :to="`${$t('bet_status')}?lang=${$store.state.locale}`"><a href=""><img src="~static/icons_acc_me/bet.png" alt=""> {{ $t('Bet Status') }}</a></nuxt-link></li>
                        <li><nuxt-link  :to="`${$t('language')}?lang=${$store.state.locale}`"><a href=""><img src="~static/icons_acc_me/lang.png" alt=""> {{ $t('Language') }}</a></nuxt-link></li>

                        <!-- <li><nuxt-link to="/acc_refel"><a href=""><img src="~static/icons_acc_me/refel_icon.png" alt=""> Referral Code</a></nuxt-link></li> -->
                        <li><a href="" @click="logout()"><img src="~static/icons_acc_me/logout_icon.png" alt=""> {{ $t('Log Out') }}</a></li>
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
            <el-menu-item index="1">
              <nuxt-link :to="`${$t('/')}?lang=${$store.state.locale}`"><img src="~static/icons_header/dimond_icon.png" alt=""></nuxt-link>
              
            </el-menu-item>
            <el-menu-item index="2">
                <nuxt-link :to="`${$t('wallet')}?lang=${$store.state.locale}`"><img src="~static/icons_header/wallet_icon.png" alt=""></nuxt-link>
            </el-menu-item>
            <el-menu-item index="3">
                <nuxt-link :to="`${$t('service')}?lang=${$store.state.locale}`"><img src="~static/icons_header/service_icon.png" alt=""></nuxt-link>
            </el-menu-item>
             <el-menu-item index="4">
                <nuxt-link :to="`${$t('me')}?lang=${$store.state.locale}`"><img src="~static/icons_header/me_t_icon.png" alt=""></nuxt-link>
            </el-menu-item>


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
   },
    data() {
      return {
        profile:'',
      };
    },
    
    methods: {
        updateIsLoggedIn() {
        this.$store.commit('updateIsLoggedIn', this.hasUserInfo());
      },
      hasUserInfo() {
        return Boolean(localStorage.getItem('userInfo'));
      },
        logout() {
            this.$store.commit('logOut');
            this.$router.push('/')
      },
    },
    created() {
      let token = localStorage.getItem('token');
    
      axios.get("https://build.seinlucky.com/api/v1/profile",
                    {headers: {
                               "Authorization": "Bearer "+token
                         }
                        })
                    .then(response => {
                     console.log(this.profile = response.data.data)

                })
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
    
</style>