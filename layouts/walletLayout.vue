<template>
  <div class="main_container">
      <el-main>
           <Nuxt />
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
              <nuxt-link to="/"><img src="~static/icons_header/dimond_icon.png" alt=""></nuxt-link>
              
            </el-menu-item>
            <el-menu-item index="2">
                <nuxt-link to="/wallet" type="wallet"><img src="~static/icons_header/wallet_icon.png" alt=""></nuxt-link>
            </el-menu-item>
            <el-menu-item index="3">
                <nuxt-link to="/service"><img src="~static/icons_header/service_icon.png" alt=""></nuxt-link>
            </el-menu-item>
             <el-menu-item index="4">
                <nuxt-link to="/me"><img src="~static/icons_header/me_icon.png" alt=""></nuxt-link>
            </el-menu-item>


          </el-menu>
        </el-footer>
  </div>
</template>

<style>
body {
  overflow: hidden;
}

</style>
