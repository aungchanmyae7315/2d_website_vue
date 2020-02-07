<template>
  <div>
    <div class="main_container">
        <el-header class="header">
          <el-row :gutter="20">
            <el-col :span="8">
              <nuxt-link to="/notification">
              <div class="noti">
                <img src="~static/images/noti.png" alt="logo">
              </div>
              </nuxt-link>
            </el-col>
            <el-col :span="8"><div class=""><img src="~static/images/logo.png" class="logo" alt="logo"></div></el-col>
            <el-col :span="4">
                 <div class="music_icon">
                  <a href="#" title="Listen to the song" class="player-controls">
                      <span class="audio-label">
                          
                      </span>
                      <span class="play"></span>
                      <span class="pause"></span>
                  </a>
                  <audio id="player">
                      <source src="https://www.dropbox.com/s/t32waag3ib20b28/OneDance-Drake.mp3?raw=1" type="audio/mp3">
                       <!-- <source src="https://casting-crowns.mp3quack.com/?raw=1" type="audio/mp3"> -->
                  </audio>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="messeage_icon">
                  <img src="~static/images/icons/messeage_icon.png" class="header_icon" alt="mes">
              </div>
            </el-col>
          </el-row>
          <!-- <ul class="header_item">
           <li class="noti"><a href=""> <img src="~static/images/noti.png" alt="logo"></a></li>
            <li><a href=""> <img src="~static/images/logo.png" class="logo" alt="logo"></a></li>
            <li class="music_icon">
             <div class="wrapper">
                <a href="#" title="Listen to the song" class="player-controls">
                    <span class="audio-label">
                        
                    </span>
                    <span class="play"></span>
                    <span class="pause"></span>
                </a>
                <audio id="player">
                    <source src="https://www.dropbox.com/s/t32waag3ib20b28/OneDance-Drake.mp3?raw=1" type="audio/mp3">
                    
                </audio>
            </div>
            </li>
            <li class="messeage_icon">
                <img src="~static/images/icons/messeage_icon.png" class="header_icon" alt="mes">
            </li>
          </ul> -->
            
           
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
            active-text-color="#ffd04b">
            <el-menu-item index="1">
              <nuxt-link to="/"><img src="~static/icons_header/dimond_t_icon.png" alt=""></nuxt-link>
              
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
    
  </div>
</template>

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
.el-menu-item {
  padding:0 30px;
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
    max-width: 480px;
    width:100%;
    line-height: 39px;
    z-index: 1;
}
.footer {
   position: fixed; 
    max-width:480px;
    width:100%;
    bottom: 0;
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


