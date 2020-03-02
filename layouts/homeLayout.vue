<template>
  <div>
    <div class="main_container">
        <el-header class="header">
          <ul class="home_header">
            <li class="" v-if ="!$store.state.isLoggedIn">
                
            </li>
            <li v-else>
                 <nuxt-link  :to="`${$t('notification')}?lang=${$store.state.locale}`">

                  <div class="noti" type="primary" @click="loading"
                  v-loading.fullscreen.lock="fullscreenLoading">
                    <img src="~static/images/noti.png" alt="logo">
                  </div>
                  </nuxt-link>
            </li>
            <li>
                 <img src="~static/images/logo.png" class="logo" alt="logo">
            </li>
              <li class="" v-if ="!$store.state.isLoggedIn">

            </li>
            <!-- <li v-else style="float:right;padding-right:20px;">
                   <img src="~static/images/icons/messeage_icon.png" class="header_icon" alt="mes">
            </li> -->
          </ul>
             
          
              
               
          
            <!-- <el-col :span="4">
                 <div class="music_icon">
              
                      <div id="player-container">
                        <div id="play-pause" class="play" v-on:click="play">Play</div>
                         <audio ref="audioElm" src="https://www.dropbox.com/s/t32waag3ib20b28/OneDance-Drake.mp3?raw=1"></audio>
                      </div>
                     
                </div>
            </el-col> -->
           
              
           
 

                    

      
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
             <h5 class="main_icon" style="font-weight:bold">{{$t('home_title')}}</h5>
              
            </el-menu-item>
            </nuxt-link>
             <nuxt-link :to="`${$t('wallet')}?lang=${$store.state.locale}`"> 
            <el-menu-item index="2">
               <img src="~static/icons_header/wallet_icon.png" alt="">
                <h5 class="main_icon">{{$t('wallet_title')}}</h5>
            </el-menu-item>
            </nuxt-link>
              <nuxt-link :to="`${$t('service')}?lang=${$store.state.locale}`">
            <el-menu-item index="3">
              <img src="~static/icons_header/service_icon.png" alt="">
               <h5 class="main_icon">{{$t('service_title')}}</h5>
            </el-menu-item>
            </nuxt-link>
             <nuxt-link :to="`${$t('me')}?lang=${$store.state.locale}`">
             <el-menu-item index="4">
               <img src="~static/icons_header/me_icon.png" alt="">
                <h5 class="main_icon">{{$t('me_title')}}</h5>
            </el-menu-item>
            </nuxt-link>


          </el-menu>
        </el-footer>
    </div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
       fullscreenLoading: false
    }
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

     play: function(event) {
      var a = this.$refs.audioElm;
      if (a.paused) {
        a.play();
      } else {
        a.pause();
      }
    }
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
  padding:0 20px;
}
.el-menu-demo  {
  display: flex;
}
.main_container {
  max-width:480px;
  width:100%;
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
</style>






