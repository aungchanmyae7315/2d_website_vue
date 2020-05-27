<template>
        
        
      <el-main class="main_page threed_home">
        <!-- <Online></Online> -->
         <el-header>
           <!-- <nuxt-link  :to="`${$t('/')}?lang=${$store.state.locale}`"> -->
               <el-page-header title="" @back="goBack" >
                     
                </el-page-header>
                 <img src="~static/images/threed_logo.png" class="logo" alt="logo" style="width:145px">
                  
           <!-- </nuxt-link> -->
      </el-header>
       
        <div class="longText" id="hidingScrollBar">
         <div class="hideScrollBar">
        
        
           <div class="" v-if ="!$store.state.isLoggedIn">

              <div class="demo-type">
                 <nuxt-link :to="`${$t('/login')}?lang=${$store.state.locale}`">
                    <el-avatar :size="60"><img src="~static/images/icons/me_img.png" alt=""></el-avatar>
                    <span  class="avatar_text_logout">{{$t('Please Login first')}}</span>
                  </nuxt-link>
                    
              </div>
               
           
        </div>
        <div v-else>
           
              <div class="demo-type">
               
                
                 <el-row >
                  <el-col :span="17">
                      <nuxt-link :to="`${$t('/edit_profile_index')}?lang=${$store.state.locale}`">
                        <el-avatar :size="60" v-if="this.profile.profile == null">
                          <img src="~static/images/icons/me_img.png" alt="">
                        
                      
                      </el-avatar>
                 
                      <el-avatar :size="60" v-else >
                        <img :src="this.profile.profile" alt="">
                      </el-avatar>
                    </nuxt-link>
                <div  class="avatar_text">
                  <ul>
                       <nuxt-link :to="`${$t('/edit_profile_index')}?lang=${$store.state.locale}`">
                          <li style="color:#fff"><span v-if="this.profile.name == null">{{this.profile.phone}}</span>
                              <span v-else >{{this.profile.name}}</span>
                          

                          </li>
                     </nuxt-link>
                    <nuxt-link :to="`${$t('/wallet')}?lang=${$store.state.locale}`">
                          <li  class="amount_mmk"><span>{{$t('you_balance')}} : </span>{{this.thousands_separators(myWallet)}} {{$t('kyat')}}</li>
                    </nuxt-link>
                  </ul>
                  </div>
              
                  </el-col>
                   <el-col :span="7">
                        <div id="app-timer" class="count_time_threed">
                      <ul>
                       
                        <li>
                             <h5>ထီပိတ်ရက်ကျန်ချိန်</h5>
                        </li>
                        <li v-if="this.endTime != '-'">
                             <div v-for="(time ,k) in times" :key="k">
                                <h6 class="card-title">{{time.time}}</h6>
                              </div>
                        </li>
                         <li v-else>
                            
                                <h6 class="card-title">ပိတ်ပါပြီ</h6>
                      
                        </li>
                      </ul>
                    </div>
                   </el-col>
                </el-row>
              </div>
        </div>
          <carousel :autoplay="false" :nav="false" v-if="loaded" :items =1>
    
            <div class="item" v-for="(img_slide,  i) in slider_images" :key="i">
                 <a :href="img_slide.link" target="_blank">
                    <el-image :src="img_slide.slider_image" value="img_slide" style="width:100%;height:160px;">
                      <div slot="placeholder" class="image-slot">
                        Loading<span class="dot">...</span>
                      </div>
                    </el-image>
                  </a>
            </div>
        </carousel>
        <h3 class="run_bar"> 
          <div class="scroll-left">
            <p> 
                <img src="~static/images/slide_inner_icon.png" alt="" class="slide_inner_icon">
              {{this.slider_text.text}}</p>
          </div>
        </h3>
         <section class="threeD_items">
          
         <el-row>
                 <el-col :span="6">
                    <el-button  class="book_btn" type="text"></el-button>
                </el-col>
                <el-col :span="18" style="padding-left:15px;">
                    <el-button type="info"  class="same_three_btn" @click="SameThreeNumber">(၃) လုံးပူး</el-button>
                </el-col>
            </el-row>
           <div>
            <p class="choose_bet_title">လောင်းမည့်ဂဏန်းရွေးပါ။</p>
          <div class="picker">
            <VuePicker :data="pickData"
              :showToolbar="true"
              :pickerbox="false"
              :header="false"
            
              @confirm="confirm"
              @change = "change"
              
              :confirmText="confirmText"
                :visible="true"
            
            />

            
              <el-button @click="rBtn(threed)" :class="{'is-active': isActive}" class="r_btn">R</el-button>
            </div>
          </div>
          
            <el-form v-if="isActive"  class="contact_sameThree">
          
            <el-form-item> 
                <el-checkbox-group v-model="bet_number">
                  <el-checkbox-button v-for="city in this.Rnumber" :label="city" :key="city">{{city}}</el-checkbox-button>
              </el-checkbox-group>
            </el-form-item>
          </el-form>

          
            <el-input class style="color:yello !important" type="number" placeholder="ထီထိုးငွေပမာဏဖြည့်ပါ 100 Ks(min)"  v-model="amountThreeD"  ></el-input>
                    
                    
 
           
      </section>




      </div>
    </div>

  </el-main>
       
</template>

<script>

import Vue from 'vue'
import axios from 'axios'
import carousel from 'vue-owl-carousel'
 const cityOptions = ['000', '111', '222', '333'];
   import VuePicker from 'vue-pickers'
     var oneCol = []
    var twoCol = []
    var threeCol = []
     var fourCol = []
 
  for (let i = 0; i < 10; i++ ) {
     
    oneCol.push({
      label:  i ,
      value: i
    })
     twoCol.push({
      label:   i ,
      value: i
    })
     threeCol.push({
      label:  i ,
      value: i
    })
   
  }
    fourCol.push({
       visible:true,
       label:' ',
       maskClick:false
    })
export default {
 components: { 
     carousel,
      VuePicker
     },
    getters: {},
  mutations: {},
  actions: {},
  


  mounted() {
 
    $("input").keyup(function () {
       if ($(this).val()) {
          $(".picker .header").addClass('HideBtn');
       }
       else {
          $(".picker .header").removeClass('HideBtn');
       }
    });

  var self = this;
          if (this.$store.state.sliderImage.length > 0){
            self.slider_images = this.$store.state.sliderImage;
             if(this.slider_images  !== null) {
                        this.loaded = true;
                    }
          }
          else{
            // setTimeout(function(){
              self.$axios.get('/v2/v1/slider_image?name=3D')
                .then(response => {
                   
                 if(self.slider_images  !== null) {
                        this.loaded = true;
                    }

                self.slider_images = response.data.data
                })
              self.$axios.get('/v2/v1/slider_text')
                .then(response => {

                self.slider_text = response.data.data[0];
                })

                }

  var m = window.location.href.match(/device_id=([^&]+)/i);
     var isSeinluckyApp = navigator.userAgent.match(/seinlucky-app-2019/i);
    if (m != null && isSeinluckyApp){
      var deviceId = m[1];
      localStorage.setItem("deviceId", deviceId);
    }
    //console.dir(this.$store.state.webAppVersion.length);
    if (this.$store.state.webAppVersion.length == 0){
      this.$axios.get(`/web-app-version`)
        .then(response => {
          this.$store.commit('setWebAppVersion', response.data.version);
        });
    }

      this.updateIsLoggedIn();
     

   },

  
  
  data() {
    
    return {
      isActive: false,
      endTime: '',
      times: [
        { id: 0, text: "D", time: 45 },
        { id: 1, text: " H", time: 35 },
        { id: 2, text: "M ", time: 25 },
        { id: 3, text: "S", time: 15 }
      ],
      a: 1,
      progress: 50,

      dialogVisible: false,
      slider_images:'',
      activeIndex: '1',
      info:'',
      info_api:'',
      
      profile:'',
      slider_text:'',
     
      myWallet:'',
      blockUser:'',
      loaded:'',
      bet_number: [],
            amountThreeD:'',
            
            profile:'',
            myWallet:'',  
           pickerVisible: false,
            confirmText:this.$t('Bet'),
            cities: cityOptions,
            
            pickData: [
            oneCol,
            twoCol,
            threeCol,
            fourCol
            ],
            threed:[],
            result: '',
            Rresult:'',
            label:'',
            Rnumber:[]
    
      //   activeIndex2: '1',
    }
    
  },
 


   methods: {
    thousands_separators(num){
      var num_parts = num.toString().split(".");
      num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return num_parts.join(".");
    },
  
     isMobile: function() {
    	var check = false;
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
        return check;
    },
    goBack() {
        this.$router.push(`/home?lang=${this.$store.state.locale}`);
    },
  
    SameThreeNumber() {
       this.$router.push(`/threeD/samethreePage?lang=${this.$store.state.locale}`); 
    },
  
    rBtn(threed) {
      console.log(threed)
      // let threed = [2,2,3];
          	this.isActive = !this.isActive;
          const permArr = [],usedChars = [];
          const rotate = (input) => {
            let ch;
            input.forEach((val,index) =>{
              ch = input.splice(index, 1)[0];
              usedChars.push(ch);
              if (input.length == 0) {
                permArr.push(usedChars.slice());
              }
              rotate(input);
              input.splice(index, 0, ch);
              usedChars.pop();
            })
            return permArr
            
          };

          let unique = (value, index, self) => { 
              return self.indexOf(value) === index;
          }

          let regex = new RegExp(',', 'g');
          let data = [];
          let result = rotate(threed);

          result.forEach(arr => {
            data.push(arr.toString().replace(regex, ''));
          })
          data = data.filter(unique);
          this.Rnumber = data

    },
    change(res) {
      JSON.stringify(res)
      let data = []
      res.forEach(element => {
        if(element.value != undefined){
          data.push(element.value);
        }
        
        this.threed = data;
       
      });


    },

       confirm (res) {
          
        this.resultOne = res[0].label.toString()
         this.resultTwo = res[1].label.toString()
        this.resultThree = res[2].label.toString()
       
        this.result_number = this.resultOne+this.resultTwo+this.resultThree
     
       
        if(this.result_number && this.bet_number.length > 0) {
              this.all_number =  this.bet_number

               var data = this.all_number  
      
        }else  {
          
           this.all_number =  this.result_number
            var data = this.all_number  
        }

        this.$store.commit('getBetThreeD', data);
        var data = this.amountThreeD  
        this.$store.commit('betAmountThreeD',data);

        this.$router.push(`/threeD/threeDremark?lang=${this.$store.state.locale}`); 
      },
        goBack() {
             this.$router.push(`/?lang=${this.$store.state.locale}`); 
         },
        thousands_separators(num){
            var num_parts = num.toString().split(".");
            num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return num_parts.join(".");
        },
    
   
        
        
   
      
      updateIsLoggedIn() {
        this.$store.commit('updateIsLoggedIn', this.hasUserInfo());
      },
      hasUserInfo() {
        return Boolean(localStorage.getItem('userInfo'));
      },


      updateTimer: function(){
        this.getTimeRemaining();
        this.updateProgressBar();
      },
       getTimeRemaining: function() {
        let t = Date.parse(new Date(this.endTime)) - Date.parse(new Date());
        
        // console.log(this.progress);
        this.times[3].time = Math.floor(t / 1000 % 60) ;
        this.times[2].time = Math.floor(t / 1000 / 60 % 60) + ':';
        this.times[1].time = Math.floor(t / (1000 * 60 * 60) % 24) +':';
        this.times[0].time = Math.floor(t / (1000 * 60 * 60 * 24)) +' '+'ရက်' + ' ';
    },
     updateProgressBar: function(){
      //TODO fix progress bar
      // let interval = Date.parse(new Date(this.endTime)) - Date.parse(new Date());
      // this.progress = Math.floor(this.currentTime / Date.parse(new Date(this.endTime))*100);
    }

    },
     created() {
         this.$axios.get('/v2/v1/threed/count_down')
              .then(response => {
                console.log(response)
                  this.endTime = response.data.end_date
              }) 
        this.updateTimer();
    // console.log("date is " + new Date());
    // console.log("abc is: " + this.a);
    let timeinterval = setInterval(this.updateTimer, 1000);
              
         let token = localStorage.getItem('token');
      if(token) {
         this.$axios.get("/v2/v1/profile",
                    {headers: {
                               "Authorization": "Bearer "+token
                         }
                        })
                    .then(response => {
                      this.blockUser = response.data.data.trash
                    //console.dir(response.data);
                     this.profile = response.data.data
                    this.myWallet = this.profile.wallet 
                    this.currentTime = response.data.data.time;
                    //console.dir(response.data.data.time);
                     if(this.blockUser == 0) {
                       
                      }else {
                        this.$store.commit('logOut');
                        this.$router.push(`/home?lang=${this.$store.state.locale}`); 
                      }
          })
      }
    },
}


</script>

<style>

.choose_2d_3d .el-card {
  margin:20px;
}
.threed_home .logo {
    height: auto;
    position: relative;
    top: -31px;
}
.threed_home .el-header {
  padding:20px;
  color:#fff;
}
.main_page .el-image {
    border-radius: 24px !important;
}
.threed_home .hideScrollBar {
  padding-top:15px;
}

.threed_home .el-form-item {
    margin:0;
}
.threed_home .contact_sameThree {
    padding:0 40px;
    margin-top:-20px;
}
.contact_sameThree .el-checkbox-button__inner {
    background-color: #1A1A1A;
    border: 0;
    margin: 5px;
    color: #fff;
    font-size:14px;
    font-weight: bold;
    border-radius: 9px;
}
.contact_sameThree .el-checkbox-button.is-checked .el-checkbox-button__inner {
   background: #FFEA72;
    color:#000;
    box-shadow:unset;
    font-weight: bold;
}
.contact_sameThree .el-checkbox-button:first-child .el-checkbox-button__inner ,
.el-checkbox-button:last-child .el-checkbox-button__inner {
   border: 0;
   border-radius: 9px;
}


.owl-theme .owl-nav.disabled + .owl-dots {
  position: absolute;
  right:0;
  left:0;
  top:97px;
}
.owl-carousel .owl-dots.disabled  {
  display: block !important;
  border:0;
}
.vue-picker {
    position: relative;
    background-color: #fff;
    user-select: none;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
  }
.pickerbox[data-v-4804d034] {
  position: unset !important; 
     width: unset !important;
    height: unset !important; 
    left: unset !important; 
    top: unset !important; 
     background-image: linear-gradient(#3A4450, #151E28), linear-gradient(270deg, #3A4450, #3A4450 50%, #151E28 100%) !important;
    z-index: 9999;
    overflow: hidden;
    border-radius: 21px;
    border-color:darkgoldenrod;
    border:2px solid #F5DF73;
  

}
.colums[data-v-4804d034] {
  margin:0 55px !important;
}
.content[data-v-4804d034] {
  height:180px !important;
}
.choose_bet_title {
  color:#fff;
  margin-top:25px;
  text-align: left;
}

  .vue-picker[data-v-4804d034] {
    position: unset  !important;
    background: unset !important;
    user-select: none;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
  }
  .picker .btn[data-v-6ffe26b0] {
     color:#4D2707;
  }
  .HideBtn {
     pointer-events:auto !important;
      background: linear-gradient(#FDD164, #BB8834); 
  }
.el-button.is-active, .el-button.is-plain:active {
  background-color: #0098e9;
  color:#fff;
  font-weight: bold;
}

  .picker .header {
   
    cursor: not-allow;
    pointer-events: none;
    font-size: 17px;
    font-weight: bold;
    border:unset;
    width:120px;
    margin:0 auto;
    border-radius: 36px;
    position: absolute !important;
    top:570px;
      width:100px;
      border-radius: 21px;
  }

  .picker .mask[data-v-4804d034] {
        background-size: 100% 70px !important;
    background-image: linear-gradient(180deg, rgba(255, 255, 255, 0.136), rgba(255, 255, 255, 0.034)), linear-gradient(0deg, rgba(255, 255, 255, 0.034), rgba(255, 255, 255, 0.136));
  }
  .picker .list li[data-v-1a173b4c] {
    color:#fff;
    position: relative;
    top:-14px;
    font-weight: bold;
  }
  .picker .header .left {
    display: none;
  }
  .picker .header[data-v-6ffe26b0]::after {
    border:unset;
  }
  .picker .title[data-v-6ffe26b0] {
    display: none;
  }
  .colums[data-v-4804d034] {
    font-size: 24px !important;

  }

  .contact_rthree .el-checkbox-button.is-checked .el-checkbox-button__inner {
        background: #FFEA72;
        color:#000;
        box-shadow:unset;
        font-weight: bold;
    }
    .contact_rthree .el-input__inner {
        background: #252E39;
        border:1px solid #FFEA72;
        color:#fff;
    }
   

   .threeD_main  .el-header {
        padding:20px;
        color:#fff;
        text-align: center;
   }
   .threed_home .el-input__inner {
       background-color: #252E39;
       color:#fff;
   }
   .threeD_main .logo {
       width:104px;
        height: auto;
        margin-right:0;
        position: relative;
        top:-31px;
    }

    .threeD_items .el-row .el-button {
        width:100%;
        height:40px;
    
    }
    .r_btn {
      position: relative;
      bottom:112px;
      left:123px;
      background-color: #4B545E;
      color:#fff;
      border-radius: 9px;
    }
    .book_btn {
        border-radius: 9px;
        background-image: url(~static/threed_img/dream_book.jpg);
        background-position:center;
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }
    .choose_number_box p {
        text-align: left;
        color:#fff;
        padding-top:10px;

    }
    .choose_number_box .el-card {
        border-radius: 21px;
        background-image: linear-gradient(#3A4450, #151E28), linear-gradient(270deg, #3A4450, #3A4450 50%, #151E28 100%);
        color:#b8b8b8;
       
        border:2px solid #FFEA72;
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
.same_three_btn {
  background: linear-gradient(#26B6F2, #1A39BC);
  border:0;
  border-radius: 9px;
}
.count_time_threed  ul{
  padding:13px 0;
  margin:0;
  list-style: none;
  text-align: right;
}
.count_time_threed ul li {
  display:flex;
}
.count_time_threed h5 {
  font-size:11px;
  color:#fff;
  font-weight: bold;
}
.count_time_threed h6 {
  color:#FFEA72;
  font-size:12px;
  font-weight: bold;
  margin:0;
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