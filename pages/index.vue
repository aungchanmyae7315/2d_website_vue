<template>
 
        
      <el-main class="main_page">
        
        <div class="longText" id="hidingScrollBar">
         <div class="hideScrollBar">
        <div class="" v-if ="!$store.state.isLoggedIn">
             <nuxt-link to="/login">
              <div class="demo-type">
                 <el-avatar :size="60" src="https://img.icons8.com/nolan/64/name.png"></el-avatar>
                  <span  class="avatar_text_logout">Please Login First</span>
                    <nuxt-link to="/result">
                       <div class="result_icon">
                        <img src="~static/images/2d_result_icon.png" alt="">
                      </div>
                    </nuxt-link>
              </div>
               
            </nuxt-link>
        </div>
        <div v-else>
           <nuxt-link to="/result">
              <div class="demo-type">
                 <el-avatar :size="60" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                <div  class="avatar_text">
                  <ul>
                    <li>Hello</li>
                    <li class="amount_mmk">5000 MMk</li>
                  </ul>
                  </div>
                  <div class="result_icon">
                     <nuxt-link to="/result">
                        <img src="~static/images/2d_result_icon.png" alt="">
                    </nuxt-link>
                  </div>
                 <!-- <span  class="avatar_text">5000 MMk</span> -->
                   
                   
              </div>
               
            </nuxt-link>
        </div>

          <div class="block">
            <el-carousel trigger="click" height="150px">
           
                <el-carousel-item name ='first'>
                  <!-- <div class="el-carousel_label">
                    <h3>ipsum dolor sit amet fdsf</h3> 
                  </div> -->
                </el-carousel-item>
                <el-carousel-item name ='second'>
                   <!-- <div class="el-carousel_label">
                    <h3>ipsum dolo sit amet fdsf</h3> 
                  </div> -->
                </el-carousel-item>
                <el-carousel-item name ='third'>
                   <!-- <div class="el-carousel_label">
                    <h3>ipsum dolor sit amet fdsf</h3> 
                  </div> -->
                </el-carousel-item>
              <div class="el-carousel_label">
                    <h3>  <img src="~static/images/slide_inner_icon.png" alt="" class="slide_inner_icon"> ipsum dolor sit amet fdsf</h3> 
                </div>
       
            </el-carousel>
          </div>
          <div class="row n_d_t">
            <div class="col">
                <div class="number">
                      <h2 class="live_number">{{this.info.live}}</h2>
                </div>
            </div>
            <div class="col">
                <div class="date_time">
                  <div class="d_t_item">
                      <span>updated at:</span><br>
                      <span>4 January 2020</span><br>
                      <span>12:00 AM</span>
                  </div>

                  
                </div>
            </div>
          </div>
          
           <div class="card_one">
            <div class="card_item">
              <h5 class="time_number">12:00 AM</h5>
                <div class="row">
                  
                  <div class="col">
                      <span>Set</span>
                      <h4>{{this.info.set_1200}}</h4>
                  </div>
                  <div class="col">
                      <span>Value</span>
                      <h4>{{this.info.val_1200}}</h4>
                  </div>
                  <div class="col">
                      <span>2D</span>
                      <h4 class="result_num">{{this.info.result_1200}}</h4>
                  </div>
                </div>
              </div>
            </div>
            <div class="card_two">
                <div class="card_item">
                  <h5 class="time_number">4:00 PM</h5>
                    <div class="row">
                      
                      <div class="col">
                          <span>Set</span>
                          <h4>{{this.info.set_430}}</h4>
                      </div>
                      <div class="col">
                          <span>Value</span>
                          <h4>{{this.info.val_430}}</h4>
                      </div>
                      <div class="col">
                          <span>2D</span>
                          <h4 class="result_num">{{this.info.result_430}}</h4>
                      </div>
                    </div>
                </div>
            </div>
            <div class="card_three">
                <div class="card_item">
                
                    <div class="row">
                      
                      <div class="col">
                          <h5 class="time_number">9:30 AM</h5>
                      </div>
                      <div class="col">
                          <span>Set</span>
                          <h4>{{this.info.internet_930}}</h4>
                      </div>
                      <div class="col">
                          <span>Value</span>
                          <h4>{{this.info.modern_930}}</h4>
                      </div>
                    </div>
                </div>
            </div>
            <div class="card_three">
                <div class="card_item">
                
                    <div class="row">
                      
                      <div class="col">
                          <h5 class="time_number">4:00 PM</h5>
                      </div>
                      <div class="col">
                          <span>Set</span>
                          <h4>{{this.info.internet_200}}</h4>
                      </div>
                      <div class="col">
                          <span>Value</span>
                          <h4>{{this.info.modern_200}}</h4>
                      </div>
                    </div>
                </div>
            </div>



            <div class="bet_btn">
              <nuxt-link to="/bet">
                 <el-button type="" round>Bet</el-button>
              </nuxt-link>
               
            </div>
      </div>
    </div>

  </el-main>
       

</template>

<script>
import Logo from '~/components/Logo.vue'
import axios from 'axios'
export default {
  
  layout: 'homeLayout',
  mounted() {
     
     this.updateIsLoggedIn();
     
   },
  components: {
    Logo
  },
  data() {
    return {
    
      activeIndex: '1',
      info:'',
      set_1200:'',
      //   activeIndex2: '1',
     
    }
  },
   methods: {
     
      updateIsLoggedIn() {
        this.$store.commit('updateIsLoggedIn', this.hasUserInfo());
      },
      hasUserInfo() {
        return Boolean(localStorage.getItem('userInfo'));
      },
      // handleSelect(key, keyPath) {
      //   console.log(key, keyPath);
      // }
    },
     created() {
      
       setInterval(function () {
          axios.get('https://build.seinlucky.com/api/v1/twod-result/live')
              .then(response => {
                console.log(this.info = response.data.data)
              })
	      	}.bind(this), 5000);
        
    },
    
    //   mounted() {
    //  axios
    //   .get('https://build.seinlucky.com/api/v1/twod-result/live')
    //   .then(response => (this.info = response))
    //   console.log(this.info);
    //   alert(this.info)
    //   }
}


</script>

<style>

  .el-carousel {
    border-radius: 22px;
  }
    .el-carousel__item:nth-child(1n) {
    background-image:url(../static/images/slide_1.png);
    background-size:cover;
    background-repeat: no-repeat;
    background-position: 100% ;
  }
  .el-carousel__item:nth-child(2n) {
    background-image:url(../static/images/slide_1.png);
    background-size:cover;
    background-repeat: no-repeat;
     background-position: 100%;
  }
  .el-carousel__item:nth-child(3n) {
    background-image:url(../static/images/slide_1.png);
    background-size:cover;
    background-repeat: no-repeat;
     background-position: 100%;
  }
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
} */
  .main_page {
   
   margin:0 auto;
  }
  .el-header {
    background-color: #14612D;
    color: #333;
    /* text-align: center; */
    padding:10px 0;
    z-index: 5;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
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
    padding:7px;
    overflow: hidden;
    /* background-position: 100% 100%; */
    
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

</style>

