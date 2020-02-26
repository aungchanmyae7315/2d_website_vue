<template>
 
        
      <el-main class="main_page">
        
        <div class="longText" id="hidingScrollBar">
         <div class="hideScrollBar">
        <div class="" v-if ="!$store.state.isLoggedIn">
             <nuxt-link :to="`${$t('login')}?lang=${$store.state.locale}`">
              <div class="demo-type">
                 <el-avatar :size="60" src="https://img.icons8.com/nolan/64/name.png"></el-avatar>
                  <span  class="avatar_text_logout">{{$t('Please Login first')}}</span>

                   
              </div>
               
            </nuxt-link>
        </div>
        <div v-else>
           
              <div class="demo-type">
                <nuxt-link :to="`${$t('me')}?lang=${$store.state.locale}`">
                 <el-avatar :size="60" v-if="this.profile.name != 'null'"><img :src="this.profile.image" alt=""></el-avatar>
                  <el-avatar :size="60" v-else ><img src="~static/images/icons/me_img.png" alt=""></el-avatar>
                <div  class="avatar_text">
                  <ul>
                    <li><span v-if="this.profile.name != 'null'"> {{this.profile.name}}</span>
                        <span v-else ><nuxt-link style="color:#fff" to="me">Upgrade Name</nuxt-link></span>
                     

                    </li>
                    <li  class="amount_mmk">{{this.profile.wallet}}</li>
                  </ul>
                  </div>
                </nuxt-link>
                  <div class="result_icon">
                     <nuxt-link :to="`${$t('result')}?lang=${$store.state.locale}`">
                        <img src="~static/images/2d_result_icon.png" alt="">
                    </nuxt-link>
                  </div>
                 <!-- <span  class="avatar_text">5000 MMk</span> -->
                   
                   
              </div>
               
         
        </div>

          <div class="block" data-aos="fade-up" data-aos-duration="700">
  
            <el-carousel  trigger="click" height="150px">
               <el-carousel-item name='first' v-for="(img_slide,  i) in slider_images" :key="i">
                  <div>
                     <img :src="img_slide.slider_image" value="img_slide">
                  </div>
                   
              </el-carousel-item>
           
                    <div class="el-carousel_label">
                        <h3>  <img src="~static/images/slide_inner_icon.png" alt="" class="slide_inner_icon"> ipsum dolor sit amet fdsf</h3> 
                    </div>
                  
          
            </el-carousel>
          </div>
          <div class="row n_d_t">
            <div class="col">
               
                <div class="number">

                      <!-- <h2 class="live_number">{{this.info.live}}</h2> -->
                       <h2 class="static"
                          v-bind:class="{ live_number: isActive, 'text-danger': hasError }">
                          {{this.info.live}}
                      </h2>
                </div>
               
            </div>
            <div class="col">
                <div class="date_time">
                  <div class="d_t_item">
                   
 
                      <span>updated at:</span><br>
                      <span v-text="currentDate"></span><br>
                      <!-- <span v-if="currentTime == ''" v-text="currentTime"></span> -->
                        <span v-text="currentTime"></span>
                  </div>

                  
                </div>
            </div>
          </div>
          
           <div class="card_one" data-aos="fade-up" data-aos-duration="700">
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
                     <h4 class="static"
                          v-bind:class="{ result_num: isActive, 'text-danger': hasError }">
                          {{this.info.result_1200}}
                      </h4>
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
                          <h4 class="static"
                          v-bind:class="{ result_num: isActive, 'text-danger': hasError }">
                          {{this.info.result_430}}
                      </h4>
                          <!-- <h4 class="result_num">{{this.info.result_430}}</h4> -->
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
            <div class="card_three " >
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
              <nuxt-link :to="`${$t('bet')}?lang=${$store.state.locale}`">
                 <el-button type="" round>{{$t('Bet')}}</el-button>
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

    getters: {},
  mutations: {},
  actions: {},
  layout: 'homeLayout',
  mounted() {
    //  const lang = this.$store.state.lang;
    //  console.log(lang)
     this.updateIsLoggedIn();
       this.updateLang();
     
   },
  components: {
    Logo
  },
  data() {
    return {
       isActive: true,
      hasError: false,
      currentTime: '',
      currentDate: null,
      morningTime:null,
      slider_images:'',
      activeIndex: '1',
      info:'',
      kwee_cma:'',
      set_1200:'',
      profile:'',
      //   activeIndex2: '1',
     
    }
  },
   methods: {
       updateCurrentTime() {
        this.currentTime = moment().format('h:mm:ss A');
        this.currentDate = moment().format('LL');
      },
      updateIsLoggedIn() {
        this.$store.commit('updateIsLoggedIn', this.hasUserInfo());
      },
      hasUserInfo() {
        return Boolean(localStorage.getItem('userInfo'));
      },


      updateLang() {
        this.$store.commit('updateLang', this.hasLang());
      },
      hasLang() {
        return Boolean(localStorage.getItem('locale'));
      },

    },
     created() {
      this.currentDate = moment().format('LL');
    var currentTime = moment().format('h:mm:ss A');
  
    setInterval(() => this.updateCurrentTime(), 1 * 1000);
    var morningTime_9_30 = '9:01:00'
     var time_12_00 = '12:00:00'
        var time_01_00 = '1:01:00'
          var time_04_30 = '4:30:00'
    
  if(currentTime  >  morningTime_9_30 && currentTime < time_12_00 ) {
    //alert('one')
    this.isActive = true
     axios.get('http://shwe2d3.com/index.php/api/')
              .then(response => {
              this.info = response.data[0]
              // console.log(response)
              })
     
  }else if(currentTime > time_12_00 && currentTime <  time_01_00 ) {
      // alert('two')
      this.isActive = false
     // alert(currentTime)
       axios.get('https://build.seinlucky.com/api/v1/twod-result/live')
              .then(response => {
                this.info = response.data.data
              })
  }else if(currentTime > time_01_00 && currentTime < time_04_30 ) {
    // alert('three')
    this.isActive = true
         axios.get('http://shwe2d3.com/index.php/api/')
              .then(response => {
               this.info = response.data[0]
                //console.log(response.data[0])
              })
  }else if(currentTime > time_04_30 && currentTime < morningTime_9_30) {
     this.isActive = false
      //  alert('foursssss')
        axios.get('https://build.seinlucky.com/api/v1/twod-result/live')
              .then(response => {
                this.info = response.data.data
               
              })
  }else {
        axios.get('https://build.seinlucky.com/api/v1/twod-result/live')
              .then(response => {
                this.info = response.data.data
               
              })
  }
    
     
          
          axios.get('https://build.seinlucky.com/api/v2/v1/slider_image')
              .then(response => {
               this.slider_images = response.data.data
              })
         let token = localStorage.getItem('token');
      if(token) {
         axios.get("https://build.seinlucky.com/api/v1/profile",
                    {headers: {
                               "Authorization": "Bearer "+token
                         }
                        })
                    .then(response => {
                     this.profile = response.data.data

                })
      }
      
        
    },

}


</script>

<style>

  .el-carousel {
    border-radius: 22px;
  }
   
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
    padding:0;
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

