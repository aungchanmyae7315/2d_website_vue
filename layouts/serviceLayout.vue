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
            <el-menu-item index="1">
              <nuxt-link to="/"><img src="~static/icons_header/dimond_icon.png" alt=""></nuxt-link>
              
            </el-menu-item>
            <el-menu-item index="2">
                <nuxt-link to="/wallet" type="wallet"><img src="~static/icons_header/wallet_icon.png" alt=""></nuxt-link>
            </el-menu-item>
            <el-menu-item index="3">
                <nuxt-link to="/service"><img src="~static/icons_header/service_t_icon.png" alt=""></nuxt-link>
            </el-menu-item>
             <el-menu-item index="4">
                <nuxt-link to="/me"><img src="~static/icons_header/me_icon.png" alt=""></nuxt-link>
            </el-menu-item>


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
