<template>
 
        
      <el-main class="main_page">
        
        <div class="longText" id="hidingScrollBar">
         <div class="hideScrollBar">
        <div class="" v-if ="!$store.state.isLoggedIn">
            
              <div class="demo-type">
                 <nuxt-link :to="`${$t('login')}?lang=${$store.state.locale}`">
                    <el-avatar :size="60"><img src="~static/images/icons/me_img.png" alt=""></el-avatar>
                    <span  class="avatar_text_logout">{{$t('Please Login first')}}</span>
                  </nuxt-link>
                     <div class="change_lang_icon">
                     <!-- <nuxt-link :to="`${$t('result')}?lang=${$store.state.locale}`"> -->
                       <el-button type="text" @click="dialogVisible = true">
                        <span v-if="$store.state.locale == 'en'"> <img src="~static/images/english_icon.png" alt=""></span>
                         <span v-else-if="$store.state.locale == 'uni'"> <img src="~static/images/myanmar_icon.png" alt=""></span>
                         <span v-else-if="$store.state.locale == 'zh'"> <img src="~static/images/chinese_icon.png" alt=""></span>
                      </el-button>
                    <!-- </nuxt-link> -->
                  </div>
                  <el-dialog
                   
                    :visible.sync="dialogVisible"
                    class="change_lang_modal"
                    width="70%">
                   
                     <div class="lang lang_icon">
                        <el-dropdown @command="changeLang"  style="text-align:center">
                         
                            <el-dropdown-item  round command='en'><img src="~static/images/english_icon.png" alt="">English</el-dropdown-item>
                            <el-dropdown-item  round command='uni'><img src="~static/images/myanmar_icon.png" alt="">Myanmar</el-dropdown-item>
                            <!-- <el-dropdown-item  round command='zg'>ျမန္မာ ေဇာ္ဂ်ီ</el-dropdown-item> -->
                            <el-dropdown-item  round command='zh'><img src="~static/images/chinese_icon.png" alt="">Chinese</el-dropdown-item>
                      
                      
                        </el-dropdown>   
                    </div>

                   
                  </el-dialog>
              </div>
               
           
        </div>
        <div v-else>
           
              <div class="demo-type">
               
                
                 <el-row >
                  <el-col :span="21">
                        <nuxt-link :to="`${$t('edit_profile_index')}?lang=${$store.state.locale}`">
                 <el-avatar :size="60" v-if="this.profile.profile == null">
                   <img src="~static/images/icons/me_img.png" alt="">
                   
                   </el-avatar>
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
                  </el-col>
                  <!-- <el-col :span="3">
                    <Music></Music>
                     
                  </el-col> -->
                   <el-col :span="3">
                      <div class="change_lang_icon">
                     <!-- <nuxt-link :to="`${$t('result')}?lang=${$store.state.locale}`"> -->
                       <el-button type="text" @click="dialogVisible = true">
                         <span v-if="$store.state.locale == 'en'"> <img src="~static/images/english_icon.png" alt=""></span>
                         <span v-else-if="$store.state.locale == 'uni'"> <img src="~static/images/myanmar_icon.png" alt=""></span>
                         <span v-else-if="$store.state.locale == 'zh'"> <img src="~static/images/chinese_icon.png" alt=""></span>
                      </el-button>
                    <!-- </nuxt-link> -->
                  </div>
                   </el-col>
                </el-row>
                 
                  
                  <el-dialog
                   
                    :visible.sync="dialogVisible"
                    class="change_lang_modal"
                    width="70%">

                     <div class="lang lang_icon">
                        <el-dropdown @command="changeLang"  style="text-align:center">
                        <!-- <span class="el-dropdown-link" style='cursor: pointer;'>
                            {{$t('Language')}}
                        </span> -->
                      
                            <el-dropdown-item  round command='en'><img src="~static/images/english_icon.png" alt=""> English</el-dropdown-item>
                            <el-dropdown-item  round command='uni'><img src="~static/images/myanmar_icon.png" alt="">Myanmar</el-dropdown-item>
                            <!-- <el-dropdown-item  round command='zg'>ျမန္မာ ေဇာ္ဂ်ီ</el-dropdown-item> -->
                            <el-dropdown-item  round command='zh'><img src="~static/images/chinese_icon.png" alt="">Chinese</el-dropdown-item>
                      
                      
                        </el-dropdown>   
                    </div>

                   
                  </el-dialog>
              </div>
        </div>

          <div class="block" data-aos="fade-up" data-aos-duration="700">
  
            <el-carousel  trigger="click" height="155px">
               <el-carousel-item name='first' v-for="(img_slide,  i) in slider_images" :key="i">
                  <div>
                    <el-image :src="img_slide.slider_image" value="img_slide" style="width:100%;height:155px;">
                      <div slot="placeholder" class="image-slot">
                        Loading<span class="dot">...</span>
                      </div>
                    </el-image>
                   
                  </div>
                   
              </el-carousel-item>
           
                    <div class="el-carousel_label">
                      
                        <h3> 
                          <div class="scroll-left">
                            <p> 
                               <img src="~static/images/slide_inner_icon.png" alt="" class="slide_inner_icon">
                              {{this.slider_text.text}}</p>
                          </div>
                           </h3> 
                    </div>
            </el-carousel>

          </div>  
          <div class="row n_d_t">
            <div class="col">
               
                <div class="number">
                      <!-- <h2 class="live_number">{{this.info.live}}</h2> -->
                      <h2  v-if="!this.info.live && !this.info_api.result_1200" >
                        <div class="loadingio-spinner-dual-ball-ty27h70p24 ">
                            <div class="ldio-ct1tsjzqdg5">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                      </h2>
                           
                       <h2 v-else  class="static"  v-bind:class="{ live_number: isActive, 'text-danger': hasError }"> 
                          
                         <span v-if="this.currentTime  > this.morningTime_9_30 && this.currentTime < this.time_12_00">{{this.info.live}}</span>
                          <span v-else-if ="this.currentTime > this.time_12_00 && this.currentTime <  this.time_01_00">{{this.info_api.result_1200}}</span>
                          <span v-else-if ="this.currentTime > this.time_01_00 && this.currentTime < this.time_04_30">{{this.info.live}}</span>
                          <span v-else-if ="this.currentTime > this.time_04_30 && this.currentTime < this.morningTime_9_30">{{this.info.result_1200}}</span>
                          <span v-else>{{this.info_api.live}}</span>
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
                       <h4  v-if="!this.info.set_1200 && !this.info_api.set_1200"    class="card_loading">
                        <div class="loadingio-spinner-dual-ball-ty27h70p24">
                            <div class="card_one_loading">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                      </h4>
                      <h4 v-else>
                          <h4 v-if="this.currentTime  > this.morningTime_9_30 && this.currentTime < this.time_12_00">{{this.info.set_1200}}</h4>
                          <h4 v-else-if ="this.currentTime > this.time_12_00 && this.currentTime <  this.time_01_00">{{this.info_api.set_1200}}</h4>
                          <h4 v-else-if ="this.currentTime > this.time_01_00 && this.currentTime < this.time_04_30">{{this.info_api.set_1200}}</h4>
                          <h4 v-else-if ="this.currentTime > this.time_04_30 && this.currentTime < this.morningTime_9_30">{{this.info_api.set_1200}}</h4>
                          <h4 v-else>{{this.info_api.set_1200}}</h4>
                      </h4>
                  </div>
                  <div class="col">
                      <span>Value</span>
                       <h4  v-if="!this.info.val_1200 && !this.info_api.val_1200"    class="card_loading">
                        <div class="loadingio-spinner-dual-ball-ty27h70p24">
                            <div class="card_one_loading">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                      </h4>
                      <h4 >
                        <h4 v-if="this.currentTime  > this.morningTime_9_30 && this.currentTime < this.time_12_00">{{this.info.val_1200}}</h4>
                          <h4 v-else-if="this.currentTime > this.time_12_00 && this.currentTime <  this.time_01_00">{{this.info_api.val_1200}}</h4>
                          <h4 v-else-if="this.currentTime > this.time_01_00 && this.currentTime < this.time_04_30">{{this.info_api.val_1200}}</h4>
                          <h4 v-else-if="this.currentTime > this.time_04_30 && this.currentTime < this.morningTime_9_30">{{this.info_api.val_1200}}</h4>
                          <h4 v-else>{{this.info_api.val_1200}}</h4>
                      </h4>
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
                          <h4  v-if="!this.info.set_430 && !this.info_api.set_430"    class="card_loading">
                            <div class="loadingio-spinner-dual-ball-ty27h70p24">
                                <div class="card_one_loading">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                          </h4>
                          <h4 v-else>
                            <h4 v-if="this.currentTime  > this.morningTime_9_30 && this.currentTime < this.time_12_00">{{this.info_api.set_430}}</h4>
                            <h4 v-else-if ="this.currentTime > this.time_12_00 && this.currentTime <  this.time_01_00">{{this.info_api.set_430}}</h4>
                            <h4 v-else-if ="this.currentTime > this.time_01_00 && this.currentTime < this.time_04_30">{{this.info.set_430}}</h4>
                            <h4 v-else-if ="this.currentTime > this.time_04_30 && this.currentTime < this.morningTime_9_30">{{this.info_api.set_430}}</h4>
                            <h4 v-else>{{this.info_api.set_430}}</h4>
                          </h4>
                      </div>
                      <div class="col">
                          <span>Value</span>
                           <h4  v-if="!this.info.val_430 && !this.info_api.val_430"    class="card_loading">
                            <div class="loadingio-spinner-dual-ball-ty27h70p24">
                                <div class="card_one_loading">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                          </h4>
                          <h4 v-else>
                            <h4 v-if="this.currentTime  > this.morningTime_9_30 && this.currentTime < this.time_12_00">{{this.info_api.val_430}}</h4>
                            <h4 v-else-if="this.currentTime > this.time_12_00 && this.currentTime <  this.time_01_00">{{this.info_api.val_430}}</h4>
                            <h4 v-else-if="this.currentTime > this.time_01_00 && this.currentTime < this.time_04_30">{{this.info.val_430}}</h4>
                            <h4 v-else-if="this.currentTime > this.time_04_30 && this.currentTime < this.morningTime_9_30">{{this.info_api.val_430}}</h4>
                            <h4 v-else>{{this.info_api.val_430}}</h4>
                          </h4>
                        
                      </div>
                      <div class="col">
                          <span>2D</span>
                          <h4 class="static" style="font-weight:bold">
                       
                          {{this.info_api.result_430}}
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
                          <h4>{{this.info_api.modern_930}}</h4>
                      </div>
                      <div class="col">
                          <span>Internet</span>
                          <h4>{{this.info_api.internet_930}}</h4>
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
                          <h4>{{this.info_api.modern_200}}</h4>
                      </div>
                      <div class="col">
                          <span>Internet</span>
                          <h4>{{this.info_api.internet_200}}</h4>
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
import Music from '~/components/Music.vue'
import axios from 'axios'

export default {

    getters: {},
  mutations: {},
  actions: {},
  layout: 'homeLayout',
  mounted() {
      this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 1000)
    })
    this.getDataKwee();
    this.getDataresult();
     this.updateIsLoggedIn();
       this.updateLang();
     
   },
  components: {
  
    Music
  },
  
  data() {
    return {
        dialogVisible: false,
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
         async getDataKwee() {
            setInterval(function() {
            this.$axios.get('/v2/v1/kwee_live')
              .then(response => {
               this.info = response.data[0]

              })
            }.bind(this), 3000)
          },
          async getDataresult() {
            this.$axios.get('/v1/twod-result/live')
              .then(response => {
                this.info_api = response.data.data
               
              })
          },
      changeLang (lang) {
       
      //mutate 'locale' in store
      this.$store.commit('SET_LANG', lang)
      //re-route to the current page but with the selected language in a query string
      this.dialogVisible = false
       this.$router.push(`/?lang=${this.$store.state.locale}`);
      // this.$router.push({ path: `${this.$router.currentRoute.path}?lang=${lang}` })
    },
      submitLang() {
                  
            this.$store.commit('SET_LANG', 'hello')
                        
        },
       updateCurrentTime() {
         if (this.currentTime > this.time_12_00 && this.currentTime <  this.time_01_00 ) {
            this.isActive = false
            this.breakTime = '12:01 PM';
             this.getDataresult();
          } else if(this.currentTime > this.time_04_30){
            this.isActive = false
            this.breakTime = '4:30 PM'; 
             this.getDataKwee();
          }else if(this.currentTime < this.morningTime_9_30){
            this.isActive = false
            this.breakTime = '4:30 PM'; 
             this.getDataresult();
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
      setInterval(function() {
             this.$axios.get('/v2/v1/kwee_live')
              .then(response => {
              this.info = response.data[0]
            
              })      
        }.bind(this), 3000)   
  }else if(this.currentTime > this.time_12_00 && this.currentTime <  this.time_01_00 ) {
   
      //  setInterval(function() {
       this.$axios.get('/v1/twod-result/live')
              .then(response => {
                this.info_api = response.data.data
              })
        //  }.bind(this), 3000)
  }else if(this.currentTime > this.time_01_00 && this.currentTime < this.time_04_30 ) {
//  alert('dd')
      //  setInterval(function() {
      // this.$axios.get('/v2/v1/kwee_live')
      //         .then(response => {
      //          this.info = response.data[0]

      //         })
      //       }.bind(this), 3000)
  
  }else if(this.currentTime > this.time_04_30 && this.currentTime < this.morningTime_9_30) {
      // setInterval(function() {
        // this.$axios.get('/v1/twod-result/live')
        //       .then(response => {
        //         this.info_api = response.data.data
               
        //       })
        // }.bind(this), 3000)
  }else {
      // setInterval(function() {
        this.$axios.get('/v1/twod-result/live')
          .then(response => {
            this.info_api = response.data.data
          })
      // }.bind(this), 3000)
  }
      //  setInterval(function() {
        this.$axios.get('/v1/twod-result/live')
              .then(response => {
                this.info_api = response.data.data
              })
      //  }.bind(this), 3000)
          this.$axios.get('/v2/v1/slider_image')
              .then(response => {
               this.slider_images = response.data.data
              })

          this.$axios.get('/v2/v1/slider_text')
              .then(response => {
               
               this.slider_text = response.data.data[0]
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

                })
      }  
    },
}


</script>

<style>


@keyframes ldio-ct1tsjzqdg5-o {
    0%    { opacity: 1; transform: translate(0 0) }
   49.99% { opacity: 1; transform: translate(40px,0) }
   50%    { opacity: 0; transform: translate(40px,0) }
  100%    { opacity: 0; transform: translate(0,0) }
}
@keyframes ldio-ct1tsjzqdg5 {
    0% { transform: translate(0,0) }
   50% { transform: translate(40px,0) }
  100% { transform: translate(0,0) }
}

.loadingio-spinner-dual-ball-ty27h70p24 {
  width: 125px;
  height: 125px;
 position: absolute;
  overflow: hidden;

}
.ldio-ct1tsjzqdg5 div {
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  top: 60px;
  left: 20px;
}
.ldio-ct1tsjzqdg5 div:nth-child(1) {
  background: #93dbe9;
  animation: ldio-ct1tsjzqdg5 1s linear infinite;
  animation-delay: -0.5s;
    width:20px;
  height:20px;

}
.ldio-ct1tsjzqdg5 div:nth-child(2) {
  background: #689cc5;
  animation: ldio-ct1tsjzqdg5 1s linear infinite;
  animation-delay: 0s;
  width:20px;
  height:20px;
}
.ldio-ct1tsjzqdg5 div:nth-child(3) {
  background: #93dbe9;
  animation: ldio-ct1tsjzqdg5-o 1s linear infinite;
  animation-delay: -0.5s;
    width:20px;
  height:20px;

}

.ldio-ct1tsjzqdg5 {
  width: 100%;
  height: 100%;
  position: relative;
  left:45px;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}

.ldio-ct1tsjzqdg5 div { box-sizing: content-box; }
/* generated by https://loading.io/ */
.card_one_loading div {
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  top: 60px;
  left: 20px;
}
.card_one_loading div:nth-child(1) {
  background: #93dbe9;
  animation: ldio-ct1tsjzqdg5 1s linear infinite;
  animation-delay: -0.5s;
    width:20px;
  height:20px;

}
.card_one_loading div:nth-child(2) {
  background: #689cc5;
  animation: ldio-ct1tsjzqdg5 1s linear infinite;
  animation-delay: 0s;
  width:20px;
  height:20px;
}
.card_one_loading div:nth-child(3) {
  background: #93dbe9;
  animation: ldio-ct1tsjzqdg5-o 1s linear infinite;
  animation-delay: -0.5s;
    width:20px;
  height:20px;

}

.card_one_loading {
  width: 100%;
  height: 100%;
  position: relative;
  left:0;
  bottom:55px;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}

.card_one_loading div { box-sizing: content-box; }

  .el-carousel {
    border-radius: 22px;
    -webkit-border-radius:22px;
    -moz-border-radius: 22px;
    -webkit-box-shadow: -1px 1px 16px -4px rgba(0,0,0,0.75);
    -moz-box-shadow: -1px 1px 16px -4px rgba(0,0,0,0.75);
    box-shadow: -1px 1px 16px -4px rgba(0,0,0,0.75);

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
  height:31px;	
  position: relative;
  width:auto;
}
.scroll-left p {
  position: absolute;
  white-space:nowrap;
  height: 100%;
  margin: 0;
  line-height: 31px;
  text-align: left;
  /* Apply animation to this element */	
  -moz-animation: scroll-left 10s linear infinite;
  -webkit-animation: scroll-left 10s linear infinite;
  animation: scroll-left 10s linear infinite;
}
 /* change language css */
  .main_page .lang {
    text-align: center;
    margin:0 auto;
}
.main_page .el-dialog {
  border-radius: 21px !important;
}

.lang .el-dropdown {
    padding:27px;
    -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.main_page .lang .el-dropdown-menu__item{
    margin:20px auto;
    background: #158220;
    color:#fff;
    border-radius: 21px;
    
}
.lang .el-dropdown-link {
    font-size: 18px;
    font-weight: bold;
}
.language_type .el-dropdown-menu__item:not(.is-disabled):hover {
    background: #158220;
    color:#fff;
    border-radius: 21px;
}
.lang .el-button.is-round {
    width: 100%;
    position: absolute;
    right: 0;
    left: 0;
    margin: 20px;
    bottom: 0;
}
.language_type {
    padding:20px;
}
.language_type .el-header {
   background-color :#fff;

}
.language_type ul {
    padding:0;
    margin:150px auto;
    list-style:none;
}
.language_type ul li {
    max-width: 480px;
    width:50%;
    padding:10px;
    text-align: center;
    border-radius: 23px;
    margin:20px auto;
    color:#000;
    text-transform:capitalize;
    
}
.language_type ul li a {
    text-decoration: none;
   
}
.language_type .active {
    background:#158220;
    color:#fff;
    display: block;
    font-weight: bold;
}
.el-page-header__left {
    margin:0;
}
.language_type .el-page-header {
    line-height: 43px;
    color:#000;
   
}
.language_type .el-page-header__content {
    color:#000;
    font-weight: bold;
}
.main_page .el-dialog {
  max-width: 480px;
  width:90%;
}
.main_page .el-dialog__wrapper {
  background: rgba(7, 14, 7, 0.8);
  
}
  /* change lang css end */
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

