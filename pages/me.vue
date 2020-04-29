

<template>
    <el-main class="me">
       <div class="main_container">
     <el-header class="me_header" >
       
         <div  v-if ="$store.state.isLoggedIn">
              <div class="demo-type">
               <nuxt-link :to="`${$t('/edit_profile_index')}?lang=${$store.state.locale}`">
                 <el-avatar v-if="this.profile.profile == null" :size="60"><img src="~static/images/icons/me_img.png" alt=""> </el-avatar>
                 <el-avatar v-else :size="60"><img :src="this.profile.profile " alt=""></el-avatar>
                </nuxt-link>
                <div  class="avatar_text">
                  <ul>
                  <li v-if="this.profile.name == null">{{this.profile.phone}}</li>
                     <li v-else>{{this.profile.name}}</li>
                    <!-- <nuxt-link :to="`${$t('/profile_edit')}?lang=${$store.state.locale}`"> -->
                     <li>{{$t('my_referral_code')}}: <span class="edit_profile">{{this.get_refel}}</span></li>
                    <!-- </nuxt-link> -->
                  </ul>
                  </div>
            
              </div>
        </div>
        <div v-else> 
            <nuxt-link :to="`${$t('/login')}?lang=${$store.state.locale}`">
           <div class="demo-type">
                  <el-avatar :size="60" ><img src="~static/images/icons/me_img.png" alt=""></el-avatar>
                  <span  class="avatar_text_logout">{{$t('Please Login first')}}</span>
                </div>
            </nuxt-link>
        </div>
       
           
      </el-header>
      <el-main>
           <ul class="acc_items">
              
            
                <div  v-if ="!$store.state.isLoggedIn">
                       <li><nuxt-link  :to="`${$t('/login')}?lang=${$store.state.locale}`"><a href=""><img src="~static/icons_acc_me/noti.png" alt=""> {{$t('Notifications')}}</a></nuxt-link></li>
                       <li><nuxt-link  :to="`${$t('/login')}?lang=${$store.state.locale}`"><a href=""><img src="~static/icons_acc_me/bet.png" alt=""> {{$t('Bet Status')}}</a></nuxt-link></li>
                       <li><nuxt-link  :to="`${$t('/login')}?lang=${$store.state.locale}`"><a href=""><img src="~static/images/icons/betstatus_icon.png" class="me_bet_stauts_icon" alt=""> {{$t('bet_history_title')}}</a></nuxt-link></li>
                        <li><nuxt-link :to="`${$t('/login')}?lang=${$store.state.locale}`"><a href=""><img src="~static/images/icons/2d_result_icon.png" class="me_bet_stauts_icon" alt=""> {{$t('result_title')}}</a></nuxt-link></li>
                        <li><nuxt-link  :to="`${$t('/language')}?lang=${$store.state.locale}`"><a href=""><img src="~static/icons_acc_me/lang.png" alt=""> {{$t('Language')}}</a></nuxt-link></li>
                          <!-- <li><nuxt-link  :to="`${$t('/share')}?lang=${$store.state.locale}`"><a href=""><img src="~static/icons_acc_me/share_icon.png" alt="">App မျှဝေရန် dd</a></nuxt-link></li> -->
                </div>
                <!-- <div v-else-if="!isMobile()">
                        <li><nuxt-link  :to="`${$t('/notification')}?lang=${$store.state.locale}`"><a href="" @click="loading" v-loading.fullscreen.lock="fullscreenLoading"><img src="~static/icons_acc_me/noti.png" alt=""> {{$t('Notifications')}}</a></nuxt-link></li>
                        <li><nuxt-link  :to="`${$t('/bet_status')}?lang=${$store.state.locale}`"><a href=""><img src="~static/icons_acc_me/bet.png" alt=""> {{$t('Bet Status')}}</a></nuxt-link></li>
                        <li><nuxt-link  :to="`${$t('/bet_history')}?lang=${$store.state.locale}`"><a href=""><img src="~static/images/icons/betstatus_icon.png" class="me_bet_stauts_icon" alt=""> {{$t('bet_history_title')}}</a></nuxt-link></li>
                        <li><nuxt-link :to="`${$t('/result')}?lang=${$store.state.locale}`"><a href=""><img src="~static/images/icons/2d_result_icon.png" class="me_bet_stauts_icon" alt=""> {{$t('result_title')}}</a></nuxt-link></li>
                        <li><nuxt-link  :to="`${$t('/language')}?lang=${$store.state.locale}`"><a href=""><img src="~static/icons_acc_me/lang.png" alt=""> {{$t('Language')}}</a></nuxt-link></li>
                        <li><nuxt-link  :to="`${$t('/share')}?lang=${$store.state.locale}`"><a href=""><img src="~static/icons_acc_me/share_icon.png" alt="">App မျှဝေရန်</a></nuxt-link></li>
                
                        <li><a href="#"  @click="dialogVisible = true"><img src="~static/icons_acc_me/logout_icon.png" alt=""> {{$t('Log Out')}}</a></li>
                </div> -->
                
                <div v-else> 
                       <li><nuxt-link  :to="`${$t('/notification')}?lang=${$store.state.locale}`"><a href="" @click="loading" v-loading.fullscreen.lock="fullscreenLoading"><img src="~static/icons_acc_me/noti.png" alt=""> {{$t('Notifications')}}</a></nuxt-link></li>
                        <li><nuxt-link  :to="`${$t('/bet_status')}?lang=${$store.state.locale}`"><a href=""><img src="~static/icons_acc_me/bet.png" alt=""> {{$t('Bet Status')}}</a></nuxt-link></li>
                        <li><nuxt-link  :to="`${$t('/bet_history')}?lang=${$store.state.locale}`"><a href=""><img src="~static/images/icons/betstatus_icon.png" class="me_bet_stauts_icon" alt=""> {{$t('bet_history_title')}}</a></nuxt-link></li>
                        <li><nuxt-link :to="`${$t('/result')}?lang=${$store.state.locale}`"><a href=""><img src="~static/images/icons/2d_result_icon.png" class="me_bet_stauts_icon" alt=""> {{$t('result_title')}}</a></nuxt-link></li>
                        <li><nuxt-link  :to="`${$t('/language')}?lang=${$store.state.locale}`"><a href=""><img src="~static/icons_acc_me/lang.png" alt=""> {{$t('Language')}}</a></nuxt-link></li>


                        <div v-if="this.device_id != null">
                              <li v-if="this.get_refel == null "><nuxt-link :to="`${$t('/acc_refel')}?lang=${$store.state.locale}`"><a href=""><img src="~static/icons_acc_me/refel_icon.png" alt=""> {{$t('my_referral_code')}}</a></nuxt-link></li> 
                              <li v-else><nuxt-link :to="`${$t('/refel_success')}?lang=${$store.state.locale}`"><a href=""><img src="~static/icons_acc_me/refel_icon.png" alt=""> {{$t('my_referral_code')}}</a></nuxt-link></li> 
                        </div>
                        <div v-else>
                          
                        </div>
                         
                        <li><nuxt-link  :to="`${$t('/share')}?lang=${$store.state.locale}`"><a href=""><img src="~static/icons_acc_me/share_icon.png" alt="">{{$t('app_share')}} </a></nuxt-link></li>
                        <li><a href="#"  @click="dialogVisible = true"><img src="~static/icons_acc_me/logout_icon.png" alt=""> {{$t('Log Out')}}</a></li>
                </div>
            </ul>   

            <el-dialog
            class="me_dialog"
  
  :visible.sync="dialogVisible">
  <span>{{$t('logout')}}</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">{{$t('cancel')}}</el-button>
    <el-button type="primary" @click=" logout(); dialogVisible = false">{{$t('logout_confirm')}}</el-button>
  </span>
</el-dialog>
            
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
              <h5 class="main_icon" >{{$t('home_title')}}</h5>
            </el-menu-item>
            </nuxt-link>
             <nuxt-link :to="`${$t('/wallet')}?lang=${$store.state.locale}`">
            <el-menu-item index="2">
               <img src="~static/icons_header/wallet_icon.png" alt="">
               <h5 class="main_icon">{{$t('wallet_title')}}</h5>
            </el-menu-item>
            </nuxt-link>
             <nuxt-link :to="`${$t('/promotion')}?lang=${$store.state.locale}`"> 
            <el-menu-item index="2">
               <img src="~static/icons_header/promotion_icon.png" alt="">
                <h5 class="main_icon">{{$t('promotion_title')}}</h5>
            </el-menu-item>
            </nuxt-link>
            <nuxt-link :to="`${$t('/service')}?lang=${$store.state.locale}`">
            <el-menu-item index="3">
                <img src="~static/icons_header/service_icon.png" alt="">
                <h5 class="main_icon" >{{$t('service_title')}}</h5>
            </el-menu-item>
            </nuxt-link>
             <nuxt-link :to="`${$t('/me')}?lang=${$store.state.locale}`">
             <el-menu-item index="4">
               <img src="~static/icons_header/me_t_icon.png" alt="">
               <h5 class="main_icon" style="font-weight:bold;color:#ccab48">{{$t('me_title')}}</h5>
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
    this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => {
            this.$nuxt.$loading.finish()
        }, 2000);
        })
     
     this.updateIsLoggedIn();
       let token = localStorage.getItem('token');
    if(token) {
       this.$axios.get("/v2/v1/profile",
            {headers: {
                        "Authorization": "Bearer "+token
                  }
                })
            .then(response => {
              console.log(response)
                // this.$nuxt.$loading.finish()
                this.device_id = response.data.data.device_id
                console.log(this.device_id)
              this.profile = response.data.data
            
             
        })
         this.$axios.get("/v2/v1/referal_code",
            {headers: {
                        "Authorization": "Bearer "+token
                  }
                })
            .then(response => {
              //  this.$nuxt.$loading.finish()
              // location.reload();
              console.log(response)
              this.get_refel = response.data.data.generate_code
              console.log(this.get_refel)
              
        })
    }
      
   },
    data() {
      return {
         dialogVisible: false,
        fullscreenLoading: false,
        profile:'',
        get_refel:'',
        device_id:''
      };
    },
    
    methods: {

    // isMobile: function() {
    // 	var check = false;
    //     (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    //     return check;
    // },
      
      loading() {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(() => {
          loading.close();
        }, 1000);
      
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
        width:48px;
        height:auto;
        
    }
    .me .el-dialog {
      max-width: 480px;
      width:90%;
    }
    .me_dialog .el-dialog__header {
      display: none !important;
    }
    .me_dialog .el-dialog__footer {
      display: inline-flex !important;
      text-align: center !important;
      padding-bottom:20px !important;
    }
    .me_header  .avatar_text {
        bottom:19px;
    }
    .edit_profile {
      color:goldenrod;
    }
    .me_bet_stauts_icon {
      width:48px;
      height:auto;
    }
    
</style>