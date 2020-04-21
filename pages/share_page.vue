<template>
     <div class="main_container share_page">
          <el-page-header  @back="goBack" title=""  >
                </el-page-header>
        <section>
            <el-card>
                 <img src="~static/icon_share/share_page_image.jpg" class="logo" alt="logo">
                <h6> ကျွန်တော်ရည်ညွန်းကုဒ်(xxxxxxx)ထည့်ပြီးအကောင့်သစ်ဖွင့်ရန် အခမဲ့(၂၀၀)ကျပ်ရမယ်နော်</h6>
            </el-card>
          

          
             <el-button  class="share_img share_btn" @click="goSharepage();  drawer = true" round="">ပုံကို ရှဲမည်</el-button>
               <el-button class="share_text share_btn" @click="goSharepage" round="">စာဖြင့်ရှဲမည်</el-button>
        </section>

        <el-drawer
  title="I am the title"
  :visible.sync="drawer"
   :direction="direction"
    size="23%"
  :with-header="false">
  
  <div>
       <social-sharing url="https://vuejs.org/"
                      title="The Progressive JavaScript Framework"
                      description="Intuitive, Fast and Composable MVVM for building interactive interfaces."
                      :quote="$t('ကျွန်တော်ရည်ညွန်းကုဒ်')+' '+this.ok+' '+'ထည့်ပြီးအကောင့်သစ်ဖွင့်ရန် အခမဲ့(၂၀၀)ကျပ်ရမယ်နော်'"
                      hashtags="vuejs,javascript,framework"
                      twitter-user="vuejs"
                      inline-template>
  <div class="social_icons">
      <el-row>
          <el-col :span="24">
              <network network="facebook">
                   <i class="fa fa-facebook facebook"></i> 
                </network>
               <network network="email">
                     <i class="fa fa-envelope email"></i> 
                </network>
                
                <network network="googleplus">
                    <i class="fa fa-google-plus googleplus"></i> 
                </network>
            
                <network network="linkedin">
                    <i class="fa fa-linkedin linkedin"></i> 
                </network>

          </el-col>
          <el-col :span="24">
               <network network="skype">
                <i class="fa fa-skype skype"></i> 
            </network>
        
            <network network="telegram">
                <i class="fa fa-telegram telegram"></i> 
            </network>
            <network network="twitter">
                <i class="fa fa-twitter twitter"></i> 
            </network>

            <network network="whatsapp">
                <i class="fa fa-whatsapp whatsapp"></i> 
            </network>
          </el-col>
      </el-row>
     
  
  
    
     
  </div>
</social-sharing>
  </div>
</el-drawer>



        
       
    </div>
</template>
<style>
.share_page {
    padding:0 30px;
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
.social_icons i {
    font-size: 1.4em;
  color: white;
  text-decoration: none;
  border-radius: 100%;
  margin:6px 20px;
  width: 2.2em;
  height: 2.2em;
  text-align: center;
 display: inline-flex;
  -webkit-box-align: center;
          align-items: center;
  -webkit-box-pack: center;
          justify-content: center;
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
        padding:20px;
        text-align: center;

    }
    .share_page .el-card {
        margin-top:30px;
        margin-bottom:20px;
        border-radius: 19px;
    }
    .share_page img {
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
    .share_btn:hover {
        background-position: right center; 
        color:#fff;
        font-weight: bold;
    }
    .share_img {
          background-image: linear-gradient(to bottom, #F5763C 0%, #ED5A49 51%, #E54656 100%);
          color:#fff;
    }
    .share_text {
        background-image: linear-gradient(to bottom, #239DE7 0%, #204FC3 51%, #204FC3 100%);
        color:#fff;
    }
    .share_page .el-button.is-round {
        width:38%;
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
  
   


</style>

<script>
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
      
    },
    data() {
        return {
            ok:"Refel Code",
               drawer: false,
                direction: 'btt',
        }
    },
    
    methods: {
        goBack() {
                this.$router.push(`/me?lang=${this.$store.state.locale}`); 
           
        },
        goSharepage() {
             this.$router.push(`/share_page?lang=${this.$store.state.locale}`);
        }
    }
}
</script>