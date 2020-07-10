<template>
  <div class="main_container">
    
       <el-header class="service_header" >
             <el-row>
               <el-col :span="12" style="text-align:left;">
                   <h5 style="padding-left:20px;" class="promotion_title">{{$t('promotion_title')}}</h5>
               </el-col >
               <el-col :span="12"  style="text-align:right;">
                <div  @click="HomeRefresh" v-loading.fullscreen.lock="fullscreenLoading">
                   <img src="~static/icons_header/refresh_icon.png" alt="" class="service_header_refresh_icon">
                </div>
               </el-col>
             </el-row>
            
           </el-header>
           <Nuxt />
     

       
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
                <h5 class="main_icon">{{$t('home_title')}}</h5>
            </el-menu-item>
            </nuxt-link>
             <nuxt-link :to="`${$t('/wallet')}?lang=${$store.state.locale}`">
            <el-menu-item index="2">
               <img src="~static/icons_header/wallet_icon.png" alt="">
               <h5 class="main_icon">{{$t('wallet_title')}}</h5>
            </el-menu-item>
            </nuxt-link>
             <nuxt-link :to="`${$t('/promotion')}?lang=${$store.state.locale}`"> 
            <el-menu-item index="2" >
               <img src="~static/icons_header/promotion_t_icon.png" alt="">
                <h5 class="main_icon" style="font-weight:bold;color:#ccab48">{{$t('promotion_title')}}</h5>
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
              <img src="~static/icons_header/me_icon.png" alt="">
              <h5 class="main_icon">{{$t('me_title')}}</h5>
            </el-menu-item>
            </nuxt-link>


          </el-menu>
        </el-footer>
         <HasError></HasError>
  </div>
</template>

<style>
.service_layout .longText_service{
  max-width: 480px;
  width: 100%;
  height: 100%;
  margin: auto;
  text-align: justify;
}

/*------THE TRICK------*/
.service_layout #hidingScrollBar_service{
  overflow: hidden;
}
.service_layout .hideScrollBar_service{
  width: 100%;
  height: 100%;
  overflow: auto;
  margin-left: 17px;
  padding-top:0 !important;
  padding-right: 28px; /*This would hide the scroll bar of the right. To be sure we hide the scrollbar on every browser, increase this value*/
 
}

</style>

<script>
  import HasError from '~/components/HasError.vue'
export default {
  data() {
    return {
      fullscreenLoading: false
    }
  },
  components: {
     HasError
    },
  methods: {
    HomeRefresh() {
      this.fullscreenLoading = true;
        setTimeout(() => {
          
          this.fullscreenLoading = false;
          location.reload();
        }, 1000);
    },
  }
}
</script>
