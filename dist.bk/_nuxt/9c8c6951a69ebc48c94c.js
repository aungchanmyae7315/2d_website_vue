(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{355:function(t,e,o){t.exports=o.p+"img/4a0c45f.png"},364:function(t,e,o){t.exports=o.p+"img/c3648a2.png"},425:function(t,e,o){var content=o(572);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(9).default)("3177f548",content,!0,{sourceMap:!1})},570:function(t,e,o){t.exports=o.p+"img/a395499.png"},571:function(t,e,o){"use strict";var r=o(425);o.n(r).a},572:function(t,e,o){(e=o(8)(!1)).push([t.i,".choose_2d_3d .el-card{margin:20px}.threed_home_index .logo{height:auto;position:absolute;top:0;right:0;left:0}.threed_home_index .el-header{padding:20px 20px 0;color:#fff}.result_title_td_index{margin-top:-20px;color:#fff;margin-bottom:0;padding-bottom:15px;font-weight:700}.threed_home_index .refresh_icon{position:absolute;right:0;left:0;top:80px}.threed_result_card{color:#fff;border:2px solid #ffea72;border-radius:13px;margin:10px auto;background-image:-webkit-gradient(linear,left top,left bottom,from(#3a4450),to(#151e28)),-webkit-gradient(linear,right top,left top,from(#3a4450),color-stop(50%,#3a4450),to(#151e28));background-image:linear-gradient(#3a4450,#151e28),linear-gradient(270deg,#3a4450,#3a4450 50%,#151e28)}.threed_result_card .td_result_date{text-align:left}.threed_result_card .td_result_number{text-align:right;color:#ffea72;font-weight:700}.threed_home_index .avatar_text ul{margin:0;padding:0 10px}.main_page .el-image{border-radius:24px!important}.threed_home_index .hideScrollBar{padding-top:15px;padding-bottom:230px}.owl-theme .owl-nav.disabled+.owl-dots{position:absolute;right:0;left:0;top:97px}.owl-carousel .owl-dots.disabled{display:block!important;border:0}.threeD_main .el-header{padding:20px;color:#fff;text-align:center}.threeD_main .logo{width:104px;height:auto;margin-right:0;position:relative;top:-31px}.threeD_items .el-row .el-button{width:100%;height:40px;border:1px solid #fff}.scroll-left{overflow:hidden;height:31px;position:relative;width:auto}.scroll-left p{position:absolute;white-space:nowrap;height:100%;margin:0;line-height:31px;text-align:left;-webkit-animation:scroll-left 10s linear infinite;animation:scroll-left 10s linear infinite}.count_time_threed ul{padding:13px 0;margin:0;list-style:none;text-align:right}.count_time_threed ul li{display:-webkit-box;display:flex}.count_time_threed h5{font-size:11px;color:#fff;font-weight:700}.count_time_threed h6{color:#ffea72;font-size:12px;font-weight:700;margin:0}@-webkit-keyframes scroll-left{0%{-webkit-transform:translateX(100%)}to{-webkit-transform:translateX(-100%)}}@keyframes scroll-left{0%{-webkit-transform:translateX(100%);transform:translateX(200px)}to{-webkit-transform:translateX(-100%);transform:translateX(-100%)}}",""]),t.exports=e},679:function(t,e,o){"use strict";o.r(e);var r,l=o(58),n=(o(134),o(132),o(133),o(20),o(196),o(91),o(43),o(365)),d={components:{carousel:o.n(n).a},getters:{},mutations:{},actions:{},mounted:function(){var t=this;this.$axios.get("/v2/v1/threed-result").then((function(e){console.log(e.data.data),t.threed_result=e.data.data,t.$nuxt.$loading.finish()}));var e=Math.round((new Date).getTime()/1e3)-localStorage.getItem("slider_time"),o=this;e<7200?(this.slider_images=JSON.parse(localStorage.getItem("slider_images")),null!==this.slider_images&&(this.loaded=!0)):o.$axios.get("/v2/v1/slider_image?name=3D").then((function(e){null!==o.slider_images&&(t.loaded=!0),t.slider_images=e.data.data,o.$store.commit("setSliderImage",t.slider_images),t.slider_time=Math.round((new Date).getTime()/1e3),o.$store.commit("setSliderTime",t.slider_time)})),e<7200?(this.slider_text=JSON.parse(localStorage.getItem("slider_text")),console.log(this.slider_text)):o.$axios.get("/v2/v1/slider_text").then((function(e){o.slider_text=e.data.data[0],o.$store.commit("setSliderText",t.slider_text)}));var r=window.location.href.match(/device_id=([^&]+)/i),l=navigator.userAgent.match(/seinlucky-app-2019/i);if(null!=r&&l){var n=r[1];localStorage.setItem("deviceId",n)}0==this.$store.state.webAppVersion.length&&this.$axios.get("/web-app-version").then((function(e){t.$store.commit("setWebAppVersion",e.data.version)})),this.updateIsLoggedIn()},data:function(){return{threed_result:"",fullscreenLoading:!1,isActive:!1,endTime:"",times:[{id:0,text:"D",time:45},{id:1,text:" H",time:35},{id:2,text:"M ",time:25},{id:3,text:"S",time:15}],holiday:"",a:1,progress:50,dialogVisible:!1,slider_images:"",activeIndex:"1",profile:"",slider_text:"",myWallet:"",blockUser:"",loaded:""}},methods:(r={HomeRefresh:function(){var t=this;this.fullscreenLoading=!0,setTimeout((function(){t.fullscreenLoading=!1,location.reload()}),1e3)},thousands_separators:function(t){var e=t.toString().split(".");return e[0]=e[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),e.join(".")},isMobile:function(){var a,t=!1;return a=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))&&(t=!0),t},goBack:function(){this.$router.push("/?lang=".concat(this.$store.state.locale))}},Object(l.a)(r,"thousands_separators",(function(t){var e=t.toString().split(".");return e[0]=e[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),e.join(".")})),Object(l.a)(r,"updateIsLoggedIn",(function(){this.$store.commit("updateIsLoggedIn",this.hasUserInfo())})),Object(l.a)(r,"hasUserInfo",(function(){return Boolean(localStorage.getItem("userInfo"))})),Object(l.a)(r,"updateTimer",(function(){this.getTimeRemaining(),this.updateProgressBar()})),Object(l.a)(r,"getTimeRemaining",(function(){var t=Date.parse(new Date(this.endTime))-Date.parse(new Date);this.times[3].time=Math.floor(t/1e3%60),this.times[2].time=Math.floor(t/1e3/60%60)+":",this.times[1].time=Math.floor(t/36e5%24)+":",this.times[0].time=Math.floor(t/864e5)+" ရက် "})),Object(l.a)(r,"updateProgressBar",(function(){})),r),created:function(){var t=this;this.$axios.get("/v2/v1/threed/count_down").then((function(e){t.endTime=e.data.next_start_date,t.holiday=e.data.data})),this.updateTimer();setInterval(this.updateTimer,1e3);var e=localStorage.getItem("token");e&&this.$axios.get("/v2/v1/profile",{headers:{Authorization:"Bearer "+e}}).then((function(e){t.blockUser=e.data.data.trash,t.profile=e.data.data,t.myWallet=t.profile.wallet,t.currentTime=e.data.data.time,0==t.blockUser||(t.$store.commit("logOut"),t.$router.push("/home?lang=".concat(t.$store.state.locale)))}))}},c=(o(571),o(3)),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-main",{staticClass:"main_page threed_home_index"},[r("el-header",{staticStyle:{height:"60px"}},[r("el-page-header",{attrs:{title:""},on:{back:t.goBack}}),t._v(" "),r("img",{staticClass:"logo",staticStyle:{width:"145px"},attrs:{src:o(570),alt:"logo"}}),t._v(" "),r("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:" refresh_icon",on:{click:t.HomeRefresh}},[r("img",{attrs:{src:o(136),alt:""}})])],1),t._v(" "),r("div",{staticClass:"longText",attrs:{id:"hidingScrollBar"}},[r("div",{staticClass:"hideScrollBar"},[t.$store.state.isLoggedIn?r("div",[r("div",{staticClass:"demo-type"},[r("el-row",[r("el-col",{attrs:{span:17}},[r("nuxt-link",{attrs:{to:t.$t("/edit_profile_index")+"?lang="+t.$store.state.locale}},[null==this.profile.profile?r("el-avatar",{attrs:{size:60}},[r("img",{attrs:{src:o(355),alt:""}})]):r("el-avatar",{attrs:{size:60}},[r("img",{attrs:{src:this.profile.profile,alt:""}})])],1),t._v(" "),r("div",{staticClass:"avatar_text"},[r("ul",[r("nuxt-link",{attrs:{to:t.$t("/edit_profile_index")+"?lang="+t.$store.state.locale}},[r("li",{staticStyle:{color:"#fff","line-height":"16px"}},[r("span",[t._v(t._s(this.profile.name))]),r("br"),t._v(" "),r("span",[t._v(t._s(this.profile.phone))])])]),t._v(" "),r("nuxt-link",{attrs:{to:t.$t("/wallet")+"?lang="+t.$store.state.locale}},[r("li",{staticClass:"amount_mmk",staticStyle:{"line-height":"13px"}},[r("span",[t._v(t._s(t.$t("you_balance"))+" : ")]),t._v(t._s(this.thousands_separators(t.myWallet))+" "+t._s(t.$t("kyat")))])])],1)])],1),t._v(" "),r("el-col",{attrs:{span:7}},[r("div",{staticClass:"count_time_threed",attrs:{id:"app-timer"}},[r("ul",[r("li",[r("h5",[t._v("ထီပိတ်ရက်ကျန်ချိန်")])]),t._v(" "),0==this.holiday?r("li",t._l(t.times,(function(time,e){return r("div",{key:e},[r("h6",{staticClass:"card-title"},[t._v(t._s(time.time))])])})),0):r("li",[r("h5",[t._v(t._s(t.$t("threed_bet_close")))])])])])])],1)],1)]):r("div",[r("div",{staticClass:"demo-type"},[r("nuxt-link",{attrs:{to:t.$t("/login")+"?lang="+t.$store.state.locale}},[r("el-avatar",{attrs:{size:60}},[r("img",{attrs:{src:o(355),alt:""}})]),t._v(" "),r("span",{staticClass:"avatar_text_logout"},[t._v(t._s(t.$t("Please Login first")))])],1)],1)]),t._v(" "),t.loaded?r("carousel",{attrs:{autoplay:!0,nav:!1,items:1}},t._l(t.slider_images,(function(e,i){return r("div",{key:i,staticClass:"item"},[r("a",{attrs:{href:e.link,target:"_blank"}},[r("el-image",{staticStyle:{width:"100%",height:"160px"},attrs:{src:e.slider_image,value:"img_slide"}},[r("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[t._v("\n                      Loading"),r("span",{staticClass:"dot"},[t._v("...")])])])],1)])})),0):t._e(),t._v(" "),r("h3",{staticClass:"run_bar"},[r("div",{staticClass:"scroll-left"},[r("p",[r("img",{staticClass:"slide_inner_icon",attrs:{src:o(364),alt:""}}),t._v("\n            "+t._s(this.slider_text.text))])])]),t._v(" "),r("p",{staticClass:"result_title_td_index"},[t._v(t._s(t.$t("result_title")))]),t._v(" "),t._l(t.threed_result,(function(e,o){return r("div",{key:o},[r("el-card",{staticClass:"threed_result_card"},[r("el-row",[r("el-col",{staticClass:"td_result_date",attrs:{span:12}},[t._v("\n                               "+t._s(e.datetime)+"\n                          ")]),t._v(" "),r("el-col",{staticClass:"td_result_number",attrs:{span:12}},[t._v("\n                              "+t._s(e.result)+"\n                          ")])],1)],1)],1)})),t._v(" "),r("div",{staticClass:"bet_btn"},[r("nuxt-link",{attrs:{to:t.$t("/threeD/home")+"?lang="+t.$store.state.locale}},[r("el-button",{attrs:{type:"",round:""}},[t._v(t._s(t.$t("Bet")))])],1)],1)],2)])],1)}),[],!1,null,null,null);e.default=component.exports}}]);