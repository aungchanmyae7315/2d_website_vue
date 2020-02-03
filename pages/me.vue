

<template>

       <div class="main_container">
     <el-header class="me_header" >
        <div class="demo-type">
                 <el-avatar :size="60" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                <span  class="avatar_text">Please Login First</span>
              </div>
           
      </el-header>
      <el-main>
           <ul class="acc_items">
               
                <li><a href=""><img src="~static/icons_acc_me/noti.png" alt=""> Notifications</a></li>
                <li><a href=""><img src="~static/icons_acc_me/bet.png" alt=""> Bet Stauts</a></li>
                <li><a href=""><img src="~static/icons_acc_me/lang.png" alt=""> Language</a></li>
                 <li><a href=""><img src="~static/icons_acc_me/refel_icon.png" alt=""> Referral Code</a></li>
                  <li><a href="" @click="logout()"><img src="~static/icons_acc_me/logout_icon.png" alt=""> LogOut</a></li>

            </ul>
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


<script>
export default {
    
    //  logout() {
    //     this.$store.commit('logOut');
    //     this.$router.go('/')
    //   },
    data() {
      return {
        
      };
    },
    methods: {
        logout() {
            this.$store.commit('logOut');
            this.$router.go('/')
      },
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
        padding:0;
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
        margin-bottom:-11px;
    }
    
</style>