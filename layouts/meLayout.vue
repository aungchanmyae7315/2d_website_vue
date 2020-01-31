<template>
  <div class="main_container">
     <el-header class="header" >
        <div class="demo-type">
                 <el-avatar :size="60" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                <span  class="avatar_text">Please Login First</span>
              </div>
           
      </el-header>
      <el-main>
           <Nuxt />
      </el-main>
   
     <el-footer class="footer">
          <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            text-align="center"
            @select="handleSelect"
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
                <nuxt-link to="/me"><img src="~static/icons_header/me_t_icon.png" alt=""></nuxt-link>
            </el-menu-item>


          </el-menu>
        </el-footer>
  </div>
</template>

<style scoped>

  .el-header {
    padding:10px;
    height:100px !important;
  }

</style>
