<template>
     <div class="main_container share">
          <el-page-header  @back="goBack" title=""  >
                </el-page-header>
        <section>
           <img src="~static/images/icons/share_seinlucky_logo.png" class="logo" alt="logo">
            <h6>Sein Lucky App ကိုမျှဝေ၍ 5000 ပွိုင့် ရယူလိုက်ပါ</h6>


      <div class="share_page">
  
              <section class="share_item_page">
                <div id="my-node">
                  <el-card>
                
                      <img src="~static/icon_share/share_page_image.jpg" class="card_img">
                      <h6> ကျွန်တော်ရည်ညွန်းကုဒ် <span style="color:green">{{this.referal_code}}</span> ထည့်ပြီးအကောင့်သစ်ဖွင့်လိုက်ပါနော်</h6>
                  </el-card>
                
                </div>
                <div  v-if="isMobile()">
                  <el-row>
                    <el-col :span="12">
                         <el-button    class="share_img share_btn" @click="share()" round="">{{$t('app_share_btn')}}</el-button> <!-- drawer = true -->
                    </el-col>
                    <el-col :span="12" style="padding-top:10px;">
                        <el-button    class="share_img share_text" @click="SavePhoto()" round="">{{$t('save_photo')}}</el-button> <!-- drawer = true -->
                    </el-col>
                  </el-row>
                  
                </div>
                <div v-else>
                       <el-button  class="share_img share_text" @click="SavePhoto()" round="">{{$t('save_photo')}}</el-button> <!-- drawer = true -->
                </div>

                
                  <!-- <el-button  class="share_img share_btn" @click="shareBtn();drawer = true" round="">{{$t('app_share')}}</el-button> -->
                  <!-- <el-button class="share_text share_btn" @click=" centerDialogVisible = true" round="">စာဖြင့်ရှဲမည်</el-button> -->
              </section>


        <el-drawer
      title="I am the title"
      :visible.sync="drawer"
      :direction="direction"
        size="35%"
      :with-header="false">
  
  
       <social-sharing :networks="overriddenNetworks" 
                      :url="url"
                      title="SeinLucky"
                      description="Share Referal Code From Seinlucky"
                      :quote="$t('ကျွန်တော်ရည်ညွန်းကုဒ်')+' '+this.referal_code+' '+' ထည့်ပြီးအကောင့်သစ်ဖွင့်လိုက်ပါနော်'"
                      hashtags="seinlucky"
                    
                      twitter-user="seinlucky"
                      inline-template>
                       
  <div class="social_icons">
      <el-row>
          <el-col :span="24">
            <ul>
              <li> 
                <network network="sms">
                    <i class="fa fa-commenting-o linkedin"></i> 
                      <h6 class="">SmS</h6>
                </network>
              </li>
              <li>
                 <network network="facebook">
                  <i class="fa fa-facebook facebook"></i> 
                   <h6 class="">Facebook</h6>
                </network>
              </li>
              <li>
                  <network network="messeager">
                    <img src="~static/icon_share/messeager_icon.png" class="social_img">
                      <h6 class="">Messeager</h6>
                </network>
              </li>
              
            </ul>
          </el-col>
          <el-col :span="24">
            <ul>
              <li>
                   <network network="whatsapp">
                    <i class="fa fa-whatsapp whatsapp"></i> 
                    <h6 class="">WhatsApp</h6>
                  </network>
              </li>
              <li>
                  <network network="viber">
                    <img src="~static/icon_share/viber_icon.png" class="social_img">
                  <h6 class="">Viber</h6>
                  </network> 
              </li>
              <li>
                 <network network="weChat">
                   <img src="~static/icon_share/weChat_icon.png" class="social_img">
                  <h6 class="">WeChat</h6>
                  </network>
              </li>
            </ul>
            
            
            
          </el-col>
         
      </el-row>
       </div>
      </social-sharing>
    
    </el-drawer>

      
     
      

        
    </div>

           <el-card style="margin:20px;border-radius:19px;">   
                 <h6  style="text-align:left;font-weight:bold">(၁) ပွိင့်ကို ဘယ်လိုယူမလဲ?</h6>
                 <p style="text-align:left">သင့်မိတ်ဆွေအား Sein Lucky App ကိုအသုံးပြုရန်မျှဝေလိုက်ပါ။ သင့်ရည်ညွန်းကုဒ်ဖြည့်ပြီး အကောင့်ဖွင့်သောသူ၏ ထီထိုးငွေ (၂၀,၀၀၀) ကျပ်ကျော်သည်နှင့် သင်သည် (၅,၀၀၀) ပွိင့်ကို ဆုလာဘ်အဖြစ်ရရှိပါမည်။</p>
                 <h6  style="text-align:left;font-weight:bold">(၂) ၅,၀၀၀ ပွိင့်ကို ဘာလုပ်လိုရသလဲ?</h6>
                 <p style="text-align:left">ပွိင့်ကို ငွေသားဖြင့် တိုက်ရိုက်မထုတ်နိုင်ပါ။ သိုသော် ပွိင့်ဖြင့် ထီထိုးနိုင်ပြီး ထီပေါက်ပါက ပိုက်ဆံအိတ်သိုငွေသားဖြင့် လျော်ပေးပါသည်။ ထိုအချိန်တွင် ပိုက်ဆံထုတ်နိုင်ပါသည်။</p>
            </el-card>

          
        </section>
       
    </div>
</template>
<style>
.share {
    padding:0 20px;
}
.share .el-header {
       background-color :#fff;

    }
      .el-page-header__left {
        margin:0;
    }
    .share .el-page-header {
        line-height: 43px;
        padding-top:20px;
        color:#000;
        cursor: pointer;

    }
    .share .el-page-header__content {
        color:#000;
        font-weight: bold;
    }
    .share {
        padding:0 20px 100px  20px;
        text-align: center;

    }
    .share .logo {
        width:105px;
        height: auto;
        margin-top:20px;
    
    }
    .share .el-card {
        margin:20px auto 40px auto;
    
    }
    /* .share .el-button.is-round {
        background: #158220;
        color:#fff;
        
    } */
.share_page .el-dialog {
  max-width: 480px;
  width:90%;
}
.share_page {
    padding:0 20px;
}
.facebook {
  background-color: #4b70ab;
}
.facebook:hover {
  background-color: #405f91;
}
.email {
  background-color: #d63533;
}
.email:hover {
  background-color: #b62d2b;
}
.linkedin {
  background-color: #0087be;
}
.linkedin:hover {
  background-color: #0073a2;
}
.twitter {
  background-color: #32b9e7;
}
.twitter:hover {
  background-color: #2b9dc4;
}
.googleplus {
  background-color: #fa5432;
}
.googleplus:hover {
  background-color: #d5472b;
}
.whatsapp {
  background-color: #00aff0;
}
.whatsapp:hover {
  background-color: #0095cc;
}
.telegram {
  background-color: #6291b2;
}
.telegram:hover {
  background-color: #537b97;
}
.skype {
  background-color: #00aff0;
}
.skype:hover {
  background-color: #0095cc;
}
.social_icons ul {
  padding:0;
  margin:0;
  list-style: none;
}
.social_icons ul li {
  display: inline-block;
  padding:0 12px;
}
.social_icons ul li h6 {
  font-size: 13px;
}
.social_icons i {
    font-size: 1.4em;
  color: white;
  text-decoration: none;
  border-radius: 100%;
  margin:5px 10px;
  width: 2.2em;
  height: 2.2em;
  text-align: center;
 display: inline-flex;
  -webkit-box-align: center;
          align-items: center;
  -webkit-box-pack: center;
          justify-content: center;
}
.social_img {
  width:60px ;
}
.share_page .el-header {
       background-color :#fff;

    }
      .el-page-header__left {
        margin:0;
    }
    .share_page .el-page-header {
        line-height: 43px;
        padding-top:20px;
        color:#000;
        cursor: pointer;

    }
    .share_page .el-page-header__content {
        color:#000;
        font-weight: bold;
    }
    .share_page {
        text-align: center;

    }
    .share_page .el-card {
        margin-top:30px;
        margin-bottom:20px;
        border-radius: 19px;
    }
    .share_page .card_img {
        width:100%;
        height: auto;
        margin-bottom:20px;
        border-radius: 19px;
    }
    .share_btn {
         flex: 1 1 auto;
        margin: 10px;
        padding: 30px;
        text-align: center;
      
        transition: 0.5s;
        background-size: 200% auto;
        color: white;
        /* text-shadow: 0px 0px 10px rgba(0,0,0,0.2);*/
        box-shadow: 0 0 20px #eee;
        border-radius: 10px;
    }
    .share_item_page .share_btn:hover {
        background-position: right center; 
        color:#fff;
        font-weight: bold;
    }
    .share_page .el-button:focus {
      color:#fff;
    }
    .share_img {
          background-image: linear-gradient(to bottom, #F5763C 0%, #ED5A49 51%, #E54656 100%);
          color:#fff;
    }
    .share_text {
        background-image: linear-gradient(to bottom, #239DE7 0%, #204FC3 51%, #204FC3 100%);
        color:#fff;
    }

    .share_page .el-drawer {
        max-width: 480px;
        width:100%;
        border-top-left-radius: 25px;
        border-top-right-radius: 25px;
  
    }
    .share_page .el-drawer__body {
        padding:0;
    }
  .choose_lang .el-radio__input {
    display: none;
   
  }
  .choose_lang {
    text-align: center;
  }
  .choose_lang .el-radio {
    margin:10px 0;
  }
  .choose_lang .el-button.is-round {
    max-width: 480px;
    width:88%;
  }


</style>

<script>
import axios from 'axios'
import htmlToImage from 'html-to-image';
import SocialSharing from 'vue-social-sharing';

import Vue from 'vue'
const VueSelect = {
  install(Vue, options) {
    Vue.component('SocialSharing', SocialSharing)
  }
};
Vue.use(VueSelect)


export default {
    mounted() {
   

        let token = localStorage.getItem('token');
      if(token) {
         this.$axios.get("/v2/v1/profile",
            {headers: {
                        "Authorization": "Bearer "+token
                  }
                })
            .then(response => {
              //console.log(response)
               
                this.device_id = response.data.data.device_id
             
            
             
        })
         this.$axios.get("/v2/v1/referal_code",
                    {headers: {
                               "Authorization": "Bearer "+token
                         }
                        })
                    .then(response => {
                      
                     this.referal_code = response.data.data.generate_code
                     console.log(this.referal_code)
                    
                  
                  

                })
      }
    },
    data() {
      
        return {
           overriddenNetworks: {
          "viber": {
            "sharer": "https://account.viber.com/en/login",
            "type": "popup"
          },
          "weChat": {
            "sharer": "https://web.wechat.com/",
            "type": "popup"
          },
          "messeager": {
            "sharer": "https://www.messenger.com/login.php",
            "type": "popup"
          },
        },
            url:this.url,
            share_img:'',
            share_url:'',
            device_id:'',
              referal_code:'',
              drawer: false,
              drawerone:false,
              drawertwo:false,
              direction: 'btt',
              centerDialogVisible: false,
               radio: '1'
        }
    },
    methods: {
        
   isMobile: function() {
    	var check = false;
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
        return check;
    },



      share() {
        if (navigator.share) {
          navigator.share({
          title: 'Sein Lucky',
          text: 'Sein Lucky မှာ 2D ထိုးဖူးလား၊ စိတ်ချရတယ်၊ ငွေသွင်းငွေထုတ် မြန်ဆန်တယ်။ အကောင့်ဖွင့်ရင် ရည်ညွှန်းကုဒ်' +'(' + this.referal_code + ')' + ' ဖြည့်ဖိုမမေ့နဲ့နော်။ ဒေါင်းလုတ်ရန် လင့်ကိုနှိပ်ပါ။ shorturl.at/nxKS6',
          
        })
            .then(() => console.log('Successful share'))
            .catch((error) => console.log('Error sharing', error));
        }
      },
       
      SavePhoto() {
        
          var app = this;
          var node = document.getElementById('my-node');
 
        htmlToImage.toPng(node)
        .then(function (dataUrl) {
         
          var img = new Image();
          img.src = dataUrl;
          
            //document.body.appendChild(img);
            // console.log(img.src)
           
            //   let token = localStorage.getItem('token');
            // if(token) {
           
            //  let formData = new FormData();
            //     formData.append('image', img.src);

            //   axios.post('https://build.seinchanthar.com/api/v2/v1/social_image',
            //       formData
            //      ,{
            //       headers: {
            //         "Authorization": "Bearer "+token,
            //         'content-type': 'multipart/form-data'
            //       }
            //     })
               
                
            //        .then(response => {
            //          console.log(response.data)
            //           app.url = response.data;
                     
            //         })
            
                  var link = document.createElement('a');
                  link.download = 'seinlucky.jpeg';
                  link.href = dataUrl;
                  link.click();
            // }
        })
        .catch(function (error) {
          console.error('oops, something went wrong!', error);
        
        });
  
      },
        goBack() {
                this.$router.push(`/me?lang=${this.$store.state.locale}`); 
           
        },
        // goSharepage() {
        //      this.$router.push(`/share_page?lang=${this.$store.state.locale}`);
        // }
    }
}
</script>