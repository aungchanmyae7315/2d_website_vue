<template>
  <div>
    <div class="main_container">
        <el-header class="header">
          <el-row>
            <el-col :span="11">
                   <img src="~static/images/logo.png" class="logo" alt="logo" style="padding-left:10px;">
            </el-col>
            <el-col :span="5">
                 <div class="download_btn" >
                  <nuxt-link  :to="`${$t('/download')}?lang=${$store.state.locale}`">
                      {{$t('APP')}}<img src="~static/images/icons/download_icon.png" class="header_icon" alt="mes">
                  </nuxt-link>
                </div>
            </el-col>
            <el-col :span="3">
                
                  <div class="" v-if ="!$store.state.isLoggedIn">
                 
                  </div>
                  <div v-else>
                      <nuxt-link  :to="`${$t('/notification')}?lang=${$store.state.locale}`"> 

                        <div @click="goNotiPage" class="noti" type="primary">
                          <img v-if="this.readed == 'null' " src="~static/images/noti.png" alt="logo" >
                          <img v-else src="~static/images/noti_t.png" alt="logo" >
                        </div>
                        </nuxt-link> 
                  </div>
            </el-col>
            <el-col :span="5" style="float:right">
                <div  @click="HomeRefresh" v-loading.fullscreen.lock="fullscreenLoading">
                   <img src="~static/icons_header/refresh_icon.png" alt="" class="header_refresh_icon">
                </div>
            </el-col>
          </el-row>
       
             

      
        </el-header>
 
        <nuxt />
        <el-footer class="footer">
          <el-menu
          
            class="el-menu-demo"
            mode="horizontal"
            text-align="center"
            
            background-color="#14612D"
            text-color="#fff"
            width="100%"
            line-height="0px"
            active-text-color="#ffd04b">
              <nuxt-link :to="`${$t('/')}?lang=${$store.state.locale}`">
            <el-menu-item index="1">
            
              <img src="~static/icons_header/dimond_t_icon.png" alt="">
             <h5 class="main_icon" style="font-weight:bold;color:#ccab48;">{{$t('home_title')}}</h5>
              
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
               <h5 class="main_icon">{{$t('service_title')}}</h5>
            </el-menu-item>
            </nuxt-link>
             <nuxt-link :to="`${$t('/me')}?lang=${$store.state.locale}`">
             <el-menu-item index="4">
               <img src="~static/icons_header/me_icon.png" alt="">
                <h5 class="main_icon">{{$t('me_title')}}</h5>
            </el-menu-item>
            </nuxt-link>


          </el-menu>
        </el-footer>
    </div>
    <HasError></HasError>
   
  </div>
</template>
<script>
import HasError from '~/components/HasError.vue'
export default {
   components: {
     HasError
  },
  mounted() {
     
      let token = localStorage.getItem('token');
        var data =  moment().format('YYYY-MM-DD HH:mm:ss')
       
        if(token) {
                this.$axios.get("/v2/v1/notification",
                    {headers: {
                               "Authorization": "Bearer "+token
                         }
                        })
                    .then(response => {
                   
                        this.readed = response.data.read_at

                })
        }
  },
  data() {
    return {
      readed:'',
       dialog: false,
      fullscreenLoading: false,
     
    }
  },
  methods: {
    HomeRefresh() {
      this.fullscreenLoading = true;
      localStorage.removeItem('slider_images');
      localStorage.removeItem('slider_text');
      localStorage.removeItem('slider_time');
      localStorage.removeItem('bank_account');
      localStorage.removeItem('bank_group_time');
      localStorage.removeItem('get_refel');
      localStorage.removeItem('referal_code_time');
        setTimeout(() => {
          
          this.fullscreenLoading = false;
          location.reload();
        }, 1000);
    },
    goNotiPage() {
         let token = localStorage.getItem('token');
         var data =  moment().format('YYYY-MM-DD HH:mm:ss')
        if(token) {
                this.$axios.get("/v2/v1/notification?read_at="+data,
                    {headers: {
                               "Authorization": "Bearer "+token
                         }
                        })
                    .then(response => {
                      
                      this.readed = response.data.read_at
               
                    
                })
        }
    },
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

    
  }
}
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0 auto;
  
  
 
}
  .el-main {
    text-align: center;
    margin:0 auto;
    background-image:url(~static/images/main_bg.png); 
    background-size:cover;
    background-repeat: no-repeat;
    max-width: 480px;
    width:100%;
    height:100vh;
    margin-top:-1px;
    padding:0;
    overflow: hidden;
    /* background-position: 100% 100%; */
    
  }
.el-menu-item {
  padding:0 2px;
}
.el-menu-demo  {
  display: flex;
}
.main_container {
  max-width:480px;
  width:100%;
}
.el-loading-mask {
  background: unset !important;
}
.el-loading-mask.is-fullscreen .el-loading-spinner {
  margin-top:80px !important;
  position: relative;
  top:0;

}
.el-loading-spinner .path {
  stroke: gray;
  
}
.header {
    background:#2E3192;
    position: fixed;
    top:0;
    right:0;
    left:0;
    max-width: 480px;
    width:100%;
    line-height: 39px;
    z-index: 1;
}
.el-header {
  background-color: #14612D;
    color: #333;
    padding: 10px 0;
    z-index: 5;
}
.footer {
   position: fixed; 
    max-width:480px;
    width:100%;
    bottom: 0;
    right:0;
    left:0;
    padding:0;
}
.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}
.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.download_btn {
    color:#fff;
    line-height: 33px;
    cursor: pointer;
    float: right;
    border-radius: 9px;
    background: #FFBA15;
    font-weight: bold;
    padding:0 12px;
}

.download_btn a {
  color:#000 !important;
   font-size: 11px;
}
.el-drawer__header {
  margin:0 ;
  text-align: right;
}

.el-drawer__close-btn {
  text-align: right;
  font-size:32px;
}
.el-drawer{
  max-width: 480px;
  width:100%;
  margin:0 auto;
  background: rgba(13, 24, 13, 0.95) !important;
 
  padding:20px;
  color:#fff;
}
.el-drawer.ltr, .el-drawer.rtl, .el-drawer__container {
  left:0;
}
.logo_download {
  width:200px;
  height:auto;
}
.el-drawer__body {
  text-align: center;
  padding:0 30px;
}
.two_download_btn {
  margin-top:100px;
}
.two_download_btn img {
  max-width: 480px;
  width:130px;
  border:2px solid #fff;
  border-radius: 9px;
  height:auto;
  margin:20px auto;
  display: block;
}

.two_download_btn .el-button {
  background: unset;
  color:#fff;
  max-width: 480px;
  width:100%;
  margin:20px auto;
}
.two_download_btn .el-button:hover {
  background-color: rgb(7, 102, 37);
}
.two_download_btn .el-button {
  border:1px solid #fff !important;
}

</style>






