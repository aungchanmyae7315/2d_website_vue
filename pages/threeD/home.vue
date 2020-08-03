<template>
        
        
      <el-main class="main_page threed_home">
         <el-form   @submit.native.prevent :model="ruleForm"  ref="ruleForm"  class="demo-ruleForm">
        <!-- <Online></Online> -->
         <el-header style="height:auto !important;">
           <!-- <nuxt-link  :to="`${$t('/')}?lang=${$store.state.locale}`"> -->
               <el-page-header title="" @back="goBack" >
                     
                </el-page-header>
                 <!-- <img src="~static/images/threed_logo.png" class="logo" alt="logo" style="width:145px">
              <div @click="HomeRefresh" class="refresh_icon" v-loading.fullscreen.lock="fullscreenLoading">
                <img src="~static/icons_header/dimond_t_icon.png" alt="">
              </div> -->
           <!-- </nuxt-link> -->
           <el-row>
             <el-col :span="7" style="text-align:left">
              <a href="https://www.facebook.com/113035390413729/posts/121054989611769/?d=n" target="_blank">
                 <img class="book_btn" src="~static/threed_img/dream_book.png" alt="">
              </a>
             </el-col>
             <el-col :span="17">
                      <el-form-item
                                        
                prop="amountThreeD"
                :rules="[
                    { required: true, message: $t('amount_required') },
                    
                ]"
                > 
                 <el-input id="form-name" type="number" style="height:44px"  :placeholder="$t('bet_amount_min_100')" v-model="ruleForm.amountThreeD"  @keypress.enter.native="submitThreed('ruleForm')"></el-input>
                </el-form-item>
             </el-col>
           </el-row>
           <el-row style="margin:10px auto;">
             <el-col :span="16">
                   <nuxt-link :to="`${$t('/wallet')}?lang=${$store.state.locale}`">
                        <el-col :span="24" v-if ="!$store.state.isLoggedIn" > <div class="balance_amount"></div></el-col>
                        <el-col :span="24" v-else> <div class="balance_amount"><img src="~static/images/amount_icon.png"  alt="">{{$t('you_balance')}}: {{this.thousands_separators(myWallet)}} {{$t('kyat')}}</div></el-col>
                  </nuxt-link>

             </el-col>
             <el-col :span="8" style="float:right">
                <div id="app-timer" class="count_time_threed">
                      <ul>
                       
                        <li>
                              <h5>ထီပိတ်ရက်ကျန်ချိန်</h5>
                        </li>
                        <li v-if="this.holiday == 0">
                            
                              <div v-for="(time ,k) in times" :key="k">
                                <h6 class="card-title">{{time.time}}</h6>
                              </div>
                     
                        </li>
                         <li v-else>
                             <h5>{{$t('threed_bet_close')}}</h5>
                             
                      
                        </li>
                      </ul>
                   </div>
             </el-col>
           </el-row>
           <el-row v-if ="!$store.state.isLoggedIn">
               <div>
                      <nuxt-link :to="`${$t('/login')}?lang=${$store.state.locale}`">
                          <el-button style="width:100%" round="" class="submitThreed_btn">{{$t('Please Login first')}}</el-button>
                    </nuxt-link>
              </div>
           </el-row>
           <el-row v-else>
              <el-col :span="9" style="padding-right:10px;">
                 <el-button type="info" round  class="same_three_btn" @click="SameThreeNumber">(၃) လုံးပူး</el-button>
             </el-col>
             <el-col :span="15" style="padding-left:10px;">
              
                    <div>
                          <el-button round   @click="submitThreed('ruleForm')" class="submitThreed_btn">{{$t('Bet')}}</el-button>     
                    </div>
             </el-col>
            
           </el-row>
      </el-header>
       
        <div class="longText" id="hidingScrollBar">
         <div class="hideScrollBar">
        
        
         
         <section class="threeD_items">

            <p class="choose_bet_title">လောင်းမည့်ဂဏန်းလှည့်ပြီးရွေးပါ။</p>
          <el-row>
            <el-col :span="18">
                 <div class="picker">
                    <VuePicker :data="pickData"
                      :showToolbar="false"
                      :pickerbox="false"
                      :header="false"
                    
                      @change = "change"
                        :visible="true"
                    
                    />
                  </div>
            </el-col>
            <el-col :span="6">
                    
                 <el-button @click="rBtn(threed) " :indeterminate="isIndeterminate" v-model="checkAll"  :class="{'is-active': isActive}" class="r_btn btn btn-info">R</el-button> 

            </el-col>
          </el-row>
         
            <div v-if="this.isActive"   class="contact_sameThree">
          
            <el-form-item> 
                <el-checkbox-group v-model="bet_number" @change="handleCheckedCitiesChange">
                  <el-checkbox-button v-for="city in this.Rnumber" :label="city" :key="city">{{city}}</el-checkbox-button>
              </el-checkbox-group>
            </el-form-item>
          </div>
          
         
      </section>
      </div>
    </div>
  </el-form>    
  </el-main>
       
</template>

<script>

import Vue from 'vue'
import axios from 'axios'
import carousel from 'vue-owl-carousel'
import VuePicker from 'vue-pickers'
      var oneCol = []
      var twoCol = []
      var threeCol = []
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
   
export default {
 components: { 
     carousel,
      VuePicker
     },
    getters: {},
    mutations: {},
    actions: {},
  mounted() {
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
      checkAll: false,
      isIndeterminate: true,
      fullscreenLoading: false,
      pickerValue:this.selectedDate,
      isActive: false,
      endTime: '',
      times: [
        { id: 0, text: "D", time: 45 },
        { id: 1, text: " H", time: 35 },
        { id: 2, text: "M ", time: 25 },
        { id: 3, text: "S", time: 15 }
      ],
      holiday:'',
      a: 1,
      progress: 50,
      dialogVisible: false,
      // slider_images:'',
      activeIndex: '1',
      info:'',
      info_api:'',
      profile:'',
      // slider_text:'',
      myWallet:'',
      blockUser:'',
      loaded:'',
      bet_number: [],
      ruleForm: {
          amountThreeD:'',
      },
      profile:'',
      myWallet:'',  
      pickerVisible: false,
      pickData: [
      oneCol,
      twoCol,
      threeCol,
      ],
      threed:[],
      result: '',
      Rresult:'',
      label:'',
      Rnumber:[]
    }
    
  },
   methods: {
     HomeRefresh() {
      this.fullscreenLoading = true;
        setTimeout(() => {
          
          this.fullscreenLoading = false;
          location.reload();
        }, 1000);
    },
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
        this.$router.push(`/threeD/?lang=${this.$store.state.locale}`);
    },
  
    SameThreeNumber() {
       this.$router.push(`/threeD/samethreePage?lang=${this.$store.state.locale}`); 
    },
  
    rBtn(threed) {
          
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
          this.checkAll = true
          this.bet_number = true
          this.isIndeterminate = false;
          this.bet_number = threed ? this.Rnumber : [];
          this.isIndeterminate = false;

    },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.Rnumber.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.Rnumber.length;
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
    submitThreed(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
                this.result_number =(this.threed[0].toString())+this.threed[1]+(this.threed[2].toString())
          if(this.isActive) {
              this.all_number =  this.bet_number
                var data = this.all_number  
          }else {
                this.all_number =  this.result_number
                var data = this.all_number  
          }
         this.$store.commit('getBetThreeD', data);
          var data = this.ruleForm.amountThreeD  
          this.$store.commit('betAmountThreeD',data);
          this.$router.push(`/threeD/threeDremark?lang=${this.$store.state.locale}`); 
          } else {
            console.log('error submit!!');
            return false;
          }
        });
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
        this.times[3].time = Math.floor(t / 1000 % 60) ;
        this.times[2].time = Math.floor(t / 1000 / 60 % 60) + ':';
        this.times[1].time = Math.floor(t / (1000 * 60 * 60) % 24) +':';
        this.times[0].time = Math.floor(t / (1000 * 60 * 60 * 24)) +''+'ရက်' + '';
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
                  this.endTime = response.data.next_start_date
                  this.holiday = response.data.data
              }) 
        this.updateTimer();
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
                      this.profile = response.data.data
                      this.myWallet = this.profile.wallet 
                      this.currentTime = response.data.data.time;
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
  .balance_amount img {
        width:30px;
        height: auto;
    }
  .balance_amount {
    font-size: 12px;
    color:#fff;
    text-align: left;
  }
.choose_2d_3d .el-card {
  margin:20px;
}
.threed_home .logo {
    height: auto;
    position: relative;
    top: -31px;
}
.threed_home .el-form-item__error {
  padding-top:14px;
}
.threed_home .el-header {
  padding:20px 20px 10px 20px;
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
    padding-top:20px;
    padding-right:80px;
    text-align: left;
    
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
.pickerbox {
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
.picker .colums {
  margin:0 55px !important;
}
.picker .content {
  height:180px !important;
}
.choose_bet_title {
  color:#fff;
  font-weight: bold;
  margin-top:10px;
  text-align: left;
}

  .vue-picker {
    position: unset  !important;
    background: unset !important;
    user-select: none;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
  }
  .picker .btn {
     color:#4D2707;
  }
  .HideBtn {
     pointer-events:auto !important;
      background: linear-gradient(#FDD164, #BB8834); 
  }
.el-button.is-active, .el-button.is-plain:active {
  background-color:#0071DB;
  color:#fff;
  font-weight: bold;
}
 .submitThreed_btn {
     background: linear-gradient(#FDD164, #BB8834);
     font-size:15px;
     border-radius: 20px;
    width:100%;
    color:#4D2707;
    font-weight: bold;
     border:0;
 }

  .picker .mask[data-v-522db47a] {
        background-size: 100% 70px !important;
          background-image: -webkit-gradient(linear, left top, left bottom,  from(rgba(40, 49, 59, 0.9)), to(rgba(40, 49, 59, 0.2))), -webkit-gradient(linear, left bottom, left top, from(rgba(40, 49, 59, 0.9)), to(rgba(40, 49, 59, 0.2)));
  }
  .picker .list li[data-v-ec129ff4] {
    color:#fff;
    position: relative;
    top:-14px;
    font-weight: bold;
  }
  .picker .header .left {
    display: none;
  }
  .picker .header::after {
    border:unset;
  }
  .picker .title {
    display: none;
  }
  .picker .colums {
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
      margin-top:15px;
      text-align: right;
       background-color: #fff;
       color:#7e7575;
       font-size: 19px;
       padding:21px 20px;
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
        border:1px solid #fff;
    
    }
    .r_btn {
      position: relative;
      width:unset !important;
      top:75px;
      left:5px;
      background-color: #275329;
      color:#fff;
      border-radius: 9px;
    }
    .book_btn {
      background: #fff;
      margin-top:15px;
      height: 44px;
      border-radius: 4px;

      /* width:52px !important;
        border-radius: 9px;
        background-image: url(~static/threed_img/dream_book.jpg);
        background-position:center;
        background-size: 100% 100%;
        background-repeat: no-repeat; */
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
  width:100%;
  background-color:#2F6F42;
  color:#fff;
  font-weight: bold;
  border:0;
  border-radius: 9px;
}
.count_time_threed  ul{
  padding:8px;
  margin:0;
  list-style: none;
  text-align: right;
}
.count_time_threed ul li {
  display:flex;
}
.count_time_threed h5 {
  font-size:12px;
  color:#fff;
  font-weight: bold;
}
.card-title {
  font-size: 12px;
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