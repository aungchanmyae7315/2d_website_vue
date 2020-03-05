<template>
 
        
      <el-main class="main_page">
        
        <div class="longText" id="hidingScrollBar">
         <div class="hideScrollBar">
        <div class="" v-if ="!$store.state.isLoggedIn">
             <nuxt-link :to="`${$t('login')}?lang=${$store.state.locale}`">
              <div class="demo-type">
                 <el-avatar :size="60"><img src="~static/images/icons/me_img.png" alt=""></el-avatar>
                  <span  class="avatar_text_logout">{{$t('Please Login first')}}</span>

                   
              </div>
               
            </nuxt-link>
        </div>
        <div v-else>
           
              <div class="demo-type">
                <nuxt-link :to="`${$t('edit_profile_index')}?lang=${$store.state.locale}`">
                 <el-avatar :size="60" v-if="this.profile.profile == null"><img src="~static/images/icons/me_img.png" alt=""></el-avatar>
                  <el-avatar :size="60" v-else ><img :src="this.profile.profile" alt=""></el-avatar>
                <div  class="avatar_text">
                  <ul>
                    <li><span v-if="this.profile.name == null">{{this.profile.phone}}</span>
                        <span v-else >{{this.profile.name}}</span>
                     

                    </li>
                    <li  class="amount_mmk"><span>{{$t('you_balance')}} : </span>{{this.profile.wallet}} {{$t('kyat')}}</li>
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
                      
                        <h3> 
                          <div class="scroll-left">
                            <p> 
                               <img src="~static/images/slide_inner_icon.png" alt="" class="slide_inner_icon">
                              {{this.slider_text.text}}</p>
                          </div>
                        
                             <!-- <div class="scroll-left">
                              <marquee direction="" onmouseover="this.stop();" onmouseout="this.start();">
                                <img src="~static/images/slide_inner_icon.png" alt="" class="slide_inner_icon">
                                {{this.slider_text.text}}
                              </marquee>
                              </div> -->
                             
                        
                           </h3> 
                    </div>
                  
          
            </el-carousel>

          </div>
          <div class="row n_d_t">
            <div class="col">
               
                <div class="number">

                      <!-- <h2 class="live_number">{{this.info.live}}</h2> -->
                       <h2 class="static" 
                          v-bind:class="{ live_number: isActive, 'text-danger': hasError }">
                         <span v-if="this.currentTime  > this.morningTime_9_30 && this.currentTime < this.time_12_00">{{this.info.live}}</span>
                          <span v-else-if ="this.currentTime > this.time_12_00 && this.currentTime <  this.time_01_00">{{this.info.result_1200}}</span>
                          <span v-else-if ="this.currentTime > this.time_01_00 && this.currentTime < this.time_04_30">{{this.info.live}}</span>
                          <span v-else-if ="this.currentTime > this.time_04_30 && this.currentTime < this.morningTime_9_30">{{this.info.result_1200}}</span>
                          <span v-else>{{this.info.live}}</span>
                      </h2>
                      
                </div>
               
            </div>
            <div class="col">
                <div class="date_time">
                  <div class="d_t_item">
                   
 
                      <span>updated at:</span><br>
                      <span v-text="currentDate"></span><br>
                      <!-- <span v-if="currentTime == ''" v-text="currentTime"></span> -->
                        <span v-text="this.breakTime"></span>
                  </div>

                  
                </div>
            </div>
          </div>
          
           <div class="card_one">
            <div class="card_item">
              <h5 class="time_number">12:00 PM</h5>
            
                <div class="row">
                  
                  <div class="col">
                      <span>Set</span>
                     <h4 v-if="this.currentTime  > this.morningTime_9_30 && this.currentTime < this.time_12_00">{{this.info.set_1200}}</h4>
                          <h4 v-else-if ="this.currentTime > this.time_12_00 && this.currentTime <  this.time_01_00">{{this.info.set_1200}}</h4>
                          <h4 v-else-if ="this.currentTime > this.time_01_00 && this.currentTime < this.time_04_30">{{this.info_api.set_1200}}</h4>
                          <h4 v-else-if ="this.currentTime > this.time_04_30 && this.currentTime < this.morningTime_9_30">{{this.info_api.set_430}}</h4>
                          <h4 v-else>{{this.info.set_430}}</h4>
                  </div>
                  <div class="col">
                      <span>Value</span>
                       <h4 v-if="this.currentTime  > this.morningTime_9_30 && this.currentTime < this.time_12_00">{{this.info.val_1200}}</h4>
                          <h4 v-else-if="this.currentTime > this.time_12_00 && this.currentTime <  this.time_01_00">{{this.info_api.val_1200}}</h4>
                          <h4 v-else-if="this.currentTime > this.time_01_00 && this.currentTime < this.time_04_30">{{this.info_api.val_1200}}</h4>
                          <h4 v-else-if="this.currentTime > this.time_04_30 && this.currentTime < this.morningTime_9_30">{{this.info_api.val_430}}</h4>
                          <h4 v-else>{{this.info.set_430}}</h4>
                  </div>
                  <div class="col">
                      <span>2D</span>
                     <h4 class="static" style="font-weight:bold">
                         
                          {{this.info_api.result_1200}}
                      </h4>
                  </div>
                </div>
              </div>
            </div>
            <div class="card_two">
                <div class="card_item">
                  <h5 class="time_number">4:30 PM</h5>
                    <div class="row">
                      
                      <div class="col">
                          <span>Set</span>
                          
                          <h4 v-if="this.currentTime  > this.morningTime_9_30 && this.currentTime < this.time_12_00">{{this.info_api.set_430}}</h4>
                          <h4 v-else-if ="this.currentTime > this.time_12_00 && this.currentTime <  this.time_01_00">{{this.info_api.set_430}}</h4>
                          <h4 v-else-if ="this.currentTime > this.time_01_00 && this.currentTime < this.time_04_30">{{this.info.set_430}}</h4>
                          <h4 v-else-if ="this.currentTime > this.time_04_30 && this.currentTime < this.morningTime_9_30">{{this.info_api.set_430}}</h4>
                          <h4 v-else>{{this.info.set_430}}</h4>
                      </div>
                      <div class="col">
                          <span>Value</span>
                           <h4 v-if="this.currentTime  > this.morningTime_9_30 && this.currentTime < this.time_12_00">{{this.info_api.val_430}}</h4>
                          <h4 v-else-if="this.currentTime > this.time_12_00 && this.currentTime <  this.time_01_00">{{this.info_api.val_430}}</h4>
                          <h4 v-else-if="this.currentTime > this.time_01_00 && this.currentTime < this.time_04_30">{{this.info.val_430}}</h4>
                          <h4 v-else-if="this.currentTime > this.time_04_30 && this.currentTime < this.morningTime_9_30">{{this.info_api.val_430}}</h4>
                          <h4 v-else>{{this.info.set_430}}</h4>
                        
                      </div>
                      <div class="col">
                          <span>2D</span>
                          <h4 class="static" style="font-weight:bold">
                       
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
                          <span>Modern</span>
                          <h4>{{this.info.modern_930}}</h4>
                      </div>
                      <div class="col">
                          <span>Internet</span>
                          <h4>{{this.info.internet_930}}</h4>
                      </div>
                    </div>
                </div>
            </div>
            <div class="card_three " >
                <div class="card_item">
                
                    <div class="row">
                      
                      <div class="col">
                          <h5 class="time_number">2:00 PM</h5>
                      </div>
                      <div class="col">
                          <span>Modern</span>
                          <h4>{{this.info.modern_200}}</h4>
                      </div>
                      <div class="col">
                          <span>Internet</span>
                          <h4>{{this.info.internet_200}}</h4>
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
      morningTime_9_30:'09:30:00',
      time_12_00:'12:01:00',
      time_01_00:'13:00:00',
      time_04_30:'16:30:00',


      currentDate: null,
      morningTime:null,
      
      slider_images:'',
      activeIndex: '1',
      
      info:'',
      info_api:'',
      kwee_cma:'',
      set_1200:'',
      profile:'',
      slider_text:'',
      breakTime:null,

      //   activeIndex2: '1',
     
    }
  },
   methods: {
       updateCurrentTime() {
         if (this.currentTime > this.time_12_00 && this.currentTime <  this.time_01_00 ) {
            this.isActive = false
            this.breakTime = '12:01 PM';
          } else if(this.currentTime > this.time_04_30){
            this.isActive = false
            this.breakTime = '4:30 PM'; 
          }else if(this.currentTime < this.morningTime_9_30){
            this.isActive = false
            this.breakTime = '4:30 PM'; 
          }else{
             this.isActive = true
            this.breakTime = moment().format('h:mm A');
          }

       this.currentTime = moment().format('HH:mm:ss');

       this.currentDate = moment().format("YYYY D MMMM  dddd")
        
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
      
      this.currentDate = moment().format("YYYY D MMMM  dddd")
      this.currentTime = moment().format('HH:mm:ss ');
       this.breakTime = moment().format('h:mm:ss a')
     setInterval(() => this.updateCurrentTime(), 1 * 1000);
    
  if(this.currentTime  > this.morningTime_9_30 && this.currentTime < this.time_12_00 ) {
    // alert('dd')
      // this.isActive = true
      setInterval(function() {
             this.$axios.get('/v2/v1/kwee_live')
              .then(response => {
              this.info = response.data[0]
            
              })      
        }.bind(this), 3000)
   
    
    
     
  }else if(this.currentTime > this.time_12_00 && this.currentTime <  this.time_01_00 ) {
    //  alert('two')
   
     
       this.$axios.get('/v1/twod-result/live')
              .then(response => {
                this.info = response.data.data
              })
  }else if(this.currentTime > this.time_01_00 && this.currentTime < this.time_04_30 ) {
 
    // alert('ik');
       setInterval(function() {
      this.$axios.get('/v2/v1/kwee_live')
              .then(response => {
               this.info = response.data[0]
               
             //  console.log(this.info)
              })
            }.bind(this), 3000)
  
               
             
      
   
  }else if(this.currentTime > this.time_04_30 && this.currentTime < this.morningTime_9_30) {
     //this.isActive = false
        //alert('foursssss')
        this.$axios.get('/v1/twod-result/live')
              .then(response => {
                this.info = response.data.data
               
              })
  }else {
   // alert('mm')
      //this.isActive = false
        this.$axios.get('/v1/twod-result/live')
              .then(response => {
                this.info = response.data.data
               
              })
  }
    
      this.$axios.get('/v1/twod-result/live')
              .then(response => {
                this.info_api = response.data.data
              // console.log(this.info_api)
               //console.log('back')
              })
          
          this.$axios.get('/v2/v1/slider_image')
              .then(response => {
               this.slider_images = response.data.data
              })

          this.$axios.get('/v2/v1/slider_text')
              .then(response => {
               this.slider_text = response.data.data[0]
              //  console.log(response.data)
             
              })
              
         let token = localStorage.getItem('token');
      if(token) {
         this.$axios.get("/v1/profile",
                    {headers: {
                               "Authorization": "Bearer "+token
                         }
                        })
                    .then(response => {
                     this.profile = response.data.data
                     //console.log(this.profile)

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

/* slider text css */
/* CSS Document */
.scroll-left {
  overflow: hidden;
  height:36px;	
  position: relative;
  width:auto;
}
.scroll-left p {
  position: absolute;
  white-space:nowrap;
  height: 100%;
  margin: 0;
  line-height: 25px;
  text-align: left;
  /* Apply animation to this element */	
  -moz-animation: scroll-left 10s linear infinite;
  -webkit-animation: scroll-left 10s linear infinite;
  animation: scroll-left 10s linear infinite;
}
/* Move it (define the animation) */
@-moz-keyframes scroll-left {
  0%   { -moz-transform: translateX(100%); }
  100% { -moz-transform: translateX(-100%); }
}
@-webkit-keyframes scroll-left {
  0%   { -webkit-transform: translateX(100%); }
  100% { -webkit-transform: translateX(-100%); }
}
@keyframes scroll-left {
  0%   { 
  -moz-transform: translateX(100%); /* Browser bug fix */
  -webkit-transform: translateX(100%); /* Browser bug fix */
  transform: translateX(200px); 		
  }
  100% { 
  -moz-transform: translateX(-100%); /* Browser bug fix */
  -webkit-transform: translateX(-100%); /* Browser bug fix */
  transform: translateX(-100%); 
 }
}
</style>

