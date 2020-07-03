<template>
          <el-main class="main_page twod_home">
            <el-header>
              <el-page-header title=""  @back="goBack"> </el-page-header>

              <p style="width:145px !important" class="logo">Goal+</p>
              <div
                @click="HomeRefresh"
                class="refresh_icon"
                v-loading.fullscreen.lock="fullscreenLoading"
              >
              <nuxt-link  :to="`${$t('/football/football_notification')}?lang=${$store.state.locale}`">
                <img
                  src="~static/images/football_noti.png"
                  alt=""
                  style="margin-top:10px;width:20px;"
                />
              </nuxt-link>
              </div>
            </el-header>
            <el-form  @submit.native.prevent :model="numberValidateForm1"  ref="numberValidateForm1"  class="demo-ruleForm">
            <div class="goal_main">

              <div class="goal_header" style="height:65vh">
                <div class="el-body">
                    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                        <el-tab-pane name="first" label="Body">
                          <div class="choose_team">လောင်းမည့်အသင်းရွေးပါ</div>
                                  <div class="padding-justify">





                    <div class="collapse_card" v-for="(fDetail, f) in footballMatchDetail" :key="f">
                    <el-row>
                      <span  class="date">{{fDetail.play_at_time}}</span>
                      <span  class="time1">{{fDetail.play_at}}</span>
                      </el-row>
                      <div class="line"></div>

                      <div class="goal_inner">
                              <div class=" team_vs">
                                <div class="vs_inner team_01">
                                    <span class="hot"><img src="~static/images/hot.png" width="20"> Hot</span>
                                    <br>
                                  <img :src="fDetail.hot_team.logo" class="vs_team_img">
                                  <br>
                              <span class="vs_teamname">{{fDetail.hot_team.name}}</span>
                                </div>
                                <span class="vs_text"> VS</span>
                                <div class="vs_inner team_02">
                                  <img :src="fDetail.away_team.logo" class="vs_team_img">
                                  <br>
                                  <span class="vs_teamname">{{fDetail.away_team.name}}</span>
                                </div>
                              </div>
                              <div class="goal_vs">
                                <p class="goal_vs_p1">ဂိုးပေါင်း</p>
                                <p class="goal_vs_p2">{{fDetail.goal_price}}</p>
                              </div>

                            </div>
                    </div>
                </div>
                        </el-tab-pane>
                        <el-tab-pane name="second" label="Goal">
                          <div class="choose_team">လောင်းမည့်အသင်းရွေးပါ</div>
                          <div class="padding-justify">
                    <div class="collapse_card" v-for="(fDetail, f) in footballMatchDetail" :key="f">
                      <el-row>
                      <span  class="date">{{fDetail.play_at_time}}</span>
                      <span  class="time1">{{fDetail.play_at}}</span>
                      </el-row>
                      <div class="line"></div>

                        <div class="goal_inner">
                          <div class=" team_vs">
                            <div class="vs_inner team_01">
                                <span class="hot"><img src="~static/images/hot.png" width="20"> Hot</span>
                                <br>
                              <img :src="fDetail.hot_team.logo" class="vs_team_img">
                              <br>
                          <span class="vs_teamname">{{fDetail.hot_team.name}}</span>
                            </div>
                            <span class="vs_text"> VS</span>
                            <div class="vs_inner team_02">
                              <img :src="fDetail.away_team.logo" class="vs_team_img">
                              <br>
                              <span class="vs_teamname">{{fDetail.away_team.name}}</span>
                            </div>
                          </div>
                          <div class="goal_vs">
                            <p class="goal_vs_p1">ဂိုးပေါင်း</p>
                            <p class="goal_vs_p2">{{fDetail.goal_price}}</p>
                          </div>
                          <div class="" >
                              <el-form-item

                                      prop="radio"
                                      :rules="[
                                          { required: true, message: 'please select team'},

                                      ]"

                                      >
                                    <!-- <input type="number" v-model="footballID" :value="fDetail.id"> -->
                                    <el-radio @keypress.enter.native="footballSubmit('numberValidateForm1')" v-model="numberValidateForm1.radio" label="1" value="1" style="display:block">
                                        <div class="">
                                              
                                                  <img src="~static/images/up.png" width="20" class="">
                                               
                                        </div>
                                       
                                    </el-radio>
                                     <el-radio @keypress.enter.native="footballSubmit('numberValidateForm1')" v-model="numberValidateForm1.radio" label="2" value="2" style="display:block">
                                        <div class="">
                                              
                                                  <img src="~static/images/up.png" width="20" class="">
                                               
                                        </div>
                                       
                                    </el-radio>
                              </el-form-item>
                            </div>
                        </div>
                    </div>
                </div></el-tab-pane>
                    </el-tabs>
                </div>
              </div>
              <div class="goal_footer" style="background-color:#14612D;width:100%;height:35vh;">
                  <p class="amount_lbl">လောင်းမည့်ပမာဏကိုထည့်ပါ၊</p>

                    <el-form-item

                          prop="amount"
                          :rules="[
                              { required: true, message: $t('amount_required') },

                          ]"

                          >
                          <el-input @keypress.enter.native="footballSubmit('numberValidateForm1')" id="form-name" type="number"  :placeholder="$t('bet_amount')" v-model="numberValidateForm1.amount"></el-input>

                    </el-form-item>

                          <div class="bet_info">
                              <span class="bet_balance">
                                <img  src="~static/images/amount_icon.png" width="25">
                                Balance: 5,000 Ks
                              </span>
                              <span class="close_time">
                                Bet Close: 14:25:17
                              </span>
                          </div>
                    <!-- <el-button  :disabled='submitted'  type="submit" v-on:click="football_bet()"   class="bet_submit" round>  {{$t('Bet')}}</el-button> -->
                    <!-- <button type="submit" class="btn_bet" v-on:click="football_bet()">Bet</button> -->
                    <div v-if="this.activeName == 'first'">
                          <el-button type="" @click="footballSubmit_body('numberValidateForm1')" :disabled='submitted' round>{{$t('Bet')}}Body Btn</el-button>
                    </div>
                    <div v-else-if="this.activeName == 'second'">
                         <el-button type="" @click="footballSubmit('numberValidateForm1')" :disabled='submitted' round>{{$t('Bet')}} Gold Btn</el-button>
                    </div>
                     

            </div>

            </div>
          </el-form>
          </el-main>

</template>

<script>
import axios from "axios";
import carousel from "vue-owl-carousel";

export default {
  components: { carousel },
  getters: {},
  mutations: {},
  actions: {},
  // layout: 'homeLayout',

  mounted() {
    var self = this;
    if (this.$store.state.sliderImage.length > 0) {
      self.slider_images = this.$store.state.sliderImage;
      if (this.slider_images !== null) {
        this.loaded = true;
      }
    } else {
      // setTimeout(function(){
      self.$axios.get("/v2/v1/slider_image?name=2D").then(response => {
        if (self.slider_images !== null) {
          this.loaded = true;
        }

        self.slider_images = response.data.data;
        // self.$store.commit('setSliderImage', response.data.data);
      });

      // }, 2000);
      self.$axios.get("/v2/v1/slider_text").then(response => {
        self.slider_text = response.data.data[0];
      });
    }

    var m = window.location.href.match(/device_id=([^&]+)/i);
    var isSeinluckyApp = navigator.userAgent.match(/seinlucky-app-2019/i);
    if (m != null && isSeinluckyApp) {
      var deviceId = m[1];
      localStorage.setItem("deviceId", deviceId);
    }
    //console.dir(this.$store.state.webAppVersion.length);
    if (this.$store.state.webAppVersion.length == 0) {
      this.$axios.get(`/web-app-version`).then(response => {
        this.$store.commit("setWebAppVersion", response.data.version);
      });
    }

    this.getDataKwee();
    //this.getDataresult();
    this.updateIsLoggedIn();
    // this.updateLang();
    this.getKweeLiveData();

    let lang = localStorage.getItem("locale");
  this.$store.commit("SET_LANG", lang);$("input:checkbox").on('click', function() {
  // in the handler, 'this' refers to the box clicked on
  $("#markerDiv").click(function (e) {
      var $box = $(this);
  if ($box.is(":checked")) {
    // the name of the box is retrieved using the .attr() method
    // as it is assumed and expected to be immutable
    var group = "input:checkbox[name='" + $box.attr("name") + "']";
    // the checked state of the group/box on the other hand will change
    // and the current value is retrieved using .prop() method
    $(group).prop("checked", false);
    $box.prop("checked", true);
  } else {
    $box.prop("checked", false);
  }
  });
  })



  },

  data() {
    return {
      fullscreenLoading: false,
      serverDate: "",
      last_date: "",
      dialogVisible: false,
      isActive: true,
      hasError: false,
      currentTime: "",
      morningTime_9_30: "09:30:00",
      time_12_00: "12:01:00",
      time_01_00: "13:00:00",
      time_04_30: "16:30:00",

      currentDate: null,
      morningTime: null,

      slider_images: "",
      activeIndex: "1",

      info: "",
      info_api: "",

      profile: "",
      slider_text: "",
      breakTime: null,

      myWallet: "",

      footballMatchDetail:"",

      accordion:true,
 
       football_match_id:"",
      //  amount:"",
       goal_status:"",
      activeIndex2: '1',
      activeName:"second",
      numberValidateForm1: {
                 amount:'',
                 radio:'',
             },
    };
  },
  methods: {
    HomeRefresh() {
      this.fullscreenLoading = true;
      setTimeout(() => {
        this.fullscreenLoading = false;
        location.reload();
      }, 1000);
    },
    goBack() {
      this.$router.push(`/football/football?lang=${this.$store.state.locale}`);
    },
    thousands_separators(num) {
      var num_parts = num.toString().split(".");
      num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return num_parts.join(".");
    },

    isMobile: function() {
      var check = false;
      (function(a) {
        if (
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
            a
          ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
            a.substr(0, 4)
          )
        )
          check = true;
      })(navigator.userAgent || navigator.vendor || window.opera);
      return check;
    },
    ServerCurrentTime() {
      if (
        this.currentTime > this.time_12_00 &&
        this.currentTime < this.time_01_00
      ) {
        // this.isActive = false
        this.breakTime = "12:01 PM";
      } else if (this.currentTime > this.time_04_30) {
        // this.isActive = false
        this.breakTime = "4:30 PM";
      } else if (this.currentTime < this.morningTime_9_30) {
        this.isActive = false;
        this.breakTime = "4:30 PM";
      } else {
        this.isActive = true;
        this.breakTime = moment().format("h:mm A");
      }
      // this.currentTime = moment().format('HH:mm:ss');
      this.currentDate = moment().format("YYYY D MMMM  dddd");
    },
    updateIsLoggedIn() {
      this.$store.commit("updateIsLoggedIn", this.hasUserInfo());
    },
    hasUserInfo() {
      return Boolean(localStorage.getItem("userInfo"));
    },
//  submit_bet_football() {
//              this.submitted = true
//           let token = localStorage.getItem('token');

//                 var data = {
//                     football_match_id:this.id,
//                     amount:this.amount,
//                     goal_status:this.goal_status,
//                 }
//           this.$axios.post("/v2/v1/2d_web/bet",
//                            data,
//                     {
//                         headers: {
//                                "Authorization": "Bearer "+token
//                          },
//                         })
//                     .then(response => {
//                     })
//  }
  footballSubmit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
           this.submitted = true
          let token = localStorage.getItem('token');
          console.log(token)
                // var data=[]
               
          // this.$axios.post("v2/v1/football/goal/bet",
          //  this.$axios.post('/v2/v1/football/goal/bet', {
          //           football_match_id:localStorage.getItem("football_detali_id"),
          //             amount:this.numberValidateForm1.amount,
          //             goal_status:this.numberValidateForm1.radio,
          //            headers: {
          //                      "Authorization": "Bearer "+token
          //                },
                    
          //       })
           this.$axios.post("/v2/v1/football/goal/bet",{
                        football_match_id:localStorage.getItem("football_detali_id"),
                        amount:this.numberValidateForm1.amount,
                        goal_status:this.numberValidateForm1.radio,
                        headers: {
                               "Authorization": "Bearer "+token
                         },
                          
                        })
                    .then(response => {

                      console.log(response);
                    })
                    .catch(error => {
                      console.log(error.response)
                    })


          } else {
            console.log('error submit!!');
            return false;
          }
        });
        }

  },
  created() {


    let token = localStorage.getItem("token");
    if (token) {
      this.$axios
        .get("/v2/v1/profile", {
          headers: {
            Authorization: "Bearer " + token
          }
        })
        .then(response => {
          this.blockUser = response.data.data.trash;
          //console.dir(response.data);
          this.profile = response.data.data;
          this.myWallet = this.profile.wallet;
          this.currentTime = response.data.data.time;
          //console.dir(response.data.data.time);
          if (this.blockUser == 0) {
          } else {
            this.$store.commit("logOut");
            this.$router.push(`/home?lang=${this.$store.state.locale}`);
          }
        });
    }

    this.$axios.get("/v2/v1/server_time").then(response => {
      this.currentTime = response.data.time;
      this.serverDate = response.data.date;
    });

    // let token = localStorage.getItem("token")
    let footballdetailid = localStorage.getItem("football_detali_id")
    if (token) {
      this.$axios
        .get("v2/v1/football/detail?id="+footballdetailid, {
          headers: {
            Authorization: "Bearer " + token
          }
        })
        .then(response => {
          console.log("heool",response);
          this.footballMatchDetail = response.data.data;
          console.log("Hello",this.footballMatchDetail);

        });
    }
  },
};
</script>

<style>
.twod_home .el-header {
  padding: 20px;
  color: #fff;
}
.twod_home .hideScrollBar {
  padding-top: 0;
}
.twod_home .logo {
  height: auto;
  position: relative;
  top: -21px;
}
.owl-theme .owl-nav.disabled + .owl-dots {
  position: absolute;
  right: 0;
  left: 0;
  top: 97px;
}
.owl-carousel .owl-dots.disabled {
  display: block !important;
  border: 0;
}
.main_page .owl-carousel .owl-stage-outer {
  padding: 0 !important;
}
.main_page .el-image {
  border-radius: 24px !important;
}
@keyframes ldio-ct1tsjzqdg5-o {
  0% {
    opacity: 1;
    transform: translate(0 0);
  }
  49.99% {
    opacity: 1;
    transform: translate(40px, 0);
  }
  50% {
    opacity: 0;
    transform: translate(40px, 0);
  }
  100% {
    opacity: 0;
    transform: translate(0, 0);
  }
}
@keyframes ldio-ct1tsjzqdg5 {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(40px, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}

.loadingio-spinner-dual-ball-ty27h70p24 {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  overflow: hidden;
}
.loadingio-spinner-card_one_loading {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 22px;
  right: 32px;
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
  width: 30px;
  height: 30px;
}
.ldio-ct1tsjzqdg5 div:nth-child(2) {
  background: #689cc5;
  animation: ldio-ct1tsjzqdg5 1s linear infinite;
  animation-delay: 0s;
  width: 30px;
  height: 30px;
}
.ldio-ct1tsjzqdg5 div:nth-child(3) {
  background: #93dbe9;
  animation: ldio-ct1tsjzqdg5-o 1s linear infinite;
  animation-delay: -0.5s;
  width: 30px;
  height: 30px;
}

.ldio-ct1tsjzqdg5 {
  width: 100%;
  height: 100%;
  position: relative;
  left: 45px;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}

.ldio-ct1tsjzqdg5 div {
  box-sizing: content-box;
}
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
  width: 15px;
  height: 15px;
}
.card_one_loading div:nth-child(2) {
  background: #689cc5;
  animation: ldio-ct1tsjzqdg5 1s linear infinite;
  animation-delay: 0s;
  width: 15px;
  height: 15px;
}
.card_one_loading div:nth-child(3) {
  background: #93dbe9;
  animation: ldio-ct1tsjzqdg5-o 1s linear infinite;
  animation-delay: -0.5s;
  width: 15px;
  height: 15px;
}

.card_one_loading {
  width: 40px;
  height: 40px;
  position: relative;
  left: 0;
  bottom: 55px;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}

.card_one_loading div {
  box-sizing: content-box;
}

.el-carousel {
  border-radius: 22px;
  -webkit-border-radius: 22px;
  -moz-border-radius: 22px;
  -webkit-box-shadow: -1px 1px 16px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 1px 16px -4px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 1px 16px -4px rgba(0, 0, 0, 0.75);
}

.main_page {
  margin: 0 auto;
}
.el-header {
  background-color: #14612d;
  color: #333;
  /* text-align: center; */
  padding: 10px 0;
  z-index: 5;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  text-align: center;
  margin: 0 auto;
  background-image: url(~static/images/main_bg.png);
  background-size: cover;
  background-repeat: no-repeat;
  max-width: 480px;
  width: 100%;
  height: 100vh;
  padding: 0;
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
  height: 31px;
  position: relative;
  width: auto;
}
.scroll-left p {
  position: absolute;
  white-space: nowrap;
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
  margin: 0 auto;
}
.main_page .el-dialog {
  border-radius: 21px !important;
}

.lang .el-dropdown {
  padding: 27px;
  -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.main_page .lang .el-dropdown-menu__item {
  margin: 20px auto;
  background: #158220;
  color: #fff;
  border-radius: 21px;
}
.lang .el-dropdown-link {
  font-size: 18px;
  font-weight: bold;
}
.language_type .el-dropdown-menu__item:not(.is-disabled):hover {
  background: #158220;
  color: #fff;
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
  padding: 20px;
}
.language_type .el-header {
  background-color: #fff;
}
.language_type ul {
  padding: 0;
  margin: 150px auto;
  list-style: none;
}
.language_type ul li {
  max-width: 480px;
  width: 50%;
  padding: 10px;
  text-align: center;
  border-radius: 23px;
  margin: 20px auto;
  color: #000;
  text-transform: capitalize;
}
.language_type ul li a {
  text-decoration: none;
}
.language_type .active {
  background: #158220;
  color: #fff;
  display: block;
  font-weight: bold;
}
.el-page-header__left {
  margin: 0;
}
.language_type .el-page-header {
  line-height: 43px;
  color: #000;
}
.language_type .el-page-header__content {
  color: #000;
  font-weight: bold;
}
.main_page .el-dialog {
  max-width: 480px;
  width: 90%;
}
.main_page .el-dialog__wrapper {
  background: rgba(7, 14, 7, 0.8);
}
.font-color {
  color: white;
}
/* change lang css end */
/* Move it (define the animation) */
@-moz-keyframes scroll-left {
  0% {
    -moz-transform: translateX(100%);
  }
  100% {
    -moz-transform: translateX(-100%);
  }
}
@-webkit-keyframes scroll-left {
  0% {
    -webkit-transform: translateX(100%);
  }
  100% {
    -webkit-transform: translateX(-100%);
  }
}
@keyframes scroll-left {
  0% {
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
