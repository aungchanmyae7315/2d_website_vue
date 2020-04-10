<template>
  <div class="main_container">
    
     
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
            <el-menu-item index="2">
               <img src="~static/icons_header/promotion_t_icon.png" alt="">
                <h5 class="main_icon" style="font-weight:bold;color:gold">{{$t('promotion_title')}}</h5>
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
