<template>
  
    <div class="download">
    <nuxt-link  :to="`${$t('/')}?lang=${$store.state.locale}`"> 
    <div class="back_page_home">
       <img src="~static/images/back_home_icon.png" alt="">
    </div>
    </nuxt-link>
    
      

  <div class="download_page_btn">
       <img src="~static/images/logo.png" class="logo_download" alt="logo">
       <p>APP ‌ဖုန်းထဲထည့်သွင်းပြီးပါက Browser မှဝင်စရာမလိုပဲ တိုက်ရိုက်အသုံးပြုနိုင်သည်။</p>
       <div class="two_download_btn">
         <el-row>
           <el-col :span="10">
              <div>
              
                  <img src="~static/images/icons/ios_download_img.png" alt="">
             
            </div>
           </el-col>
           <el-col :span="14">
              <nuxt-link  :to="`${$t('/ios_install_guide')}?lang=${$store.state.locale}`"> 
                <el-button>ဒေါင်းလုတ်လုပ်ရန်နှိပ်ပါ  <i class="el-icon-download"></i></el-button>
              </nuxt-link>
           </el-col>
         </el-row>
          <el-row>
           <el-col :span="10">
               <div>
               
                    <img src="~static/images/icons/andriod_download_img.png" alt="">
                 
            </div>
           </el-col>
           <el-col :span="14">
              <a href="https://www.seinlucky.com/download/seinlucky.apk">
             <el-button>ဒေါင်းလုတ်လုပ်ရန်နှိပ်ပါ  <i class="el-icon-download"></i></el-button>
               </a>
           </el-col>
         </el-row>
        
           <!-- <div>
             <a href="https://play.google.com/store/apps/details?id=seinlucky.com&hl=en">
                <img src="~static/images/icons/playstore_download_img.png" alt="">
              </a>
            </div> -->
          
         
         
          
       </div>
  </div>

              
       
           
 

                    

 
     
     
    </div>
    
 
</template>
<script>
export default {
  data() {
    return {
       dialog: true,
      
    }
  },
  methods: {
    
    
    
  }
}
</script>
<style>
.download {
   
    color:#fff;
    text-align: center;
    height: 100vh;
    background: rgba(13, 24, 13, 0.95) !important;
}
.download_page_btn {
    padding:40px 10px;
}
.download_page_btn p {
  padding:20px;
}
.download_page_btn i {
  font-size: 21px;
  padding:0 10px 0 10px;
  float: right;
  font-weight: bold;
  color:#fff;
}
.logo_download {
  width:200px;
  height:auto;
}
.el-drawer__body {
  text-align: center;
  padding:0 30px;
}
.two_download_btn {
  margin-top:100px;
}
.two_download_btn img {
  max-width: 480px;
  width:130px;
  border:2px solid #fff;
  border-radius: 9px;
  height:auto;
  display: block;
}

.two_download_btn .el-button {
  background: #429dfb;
  color:#fff;
  max-width: 480px;
  width:90%;
  margin:20px auto;
  padding:12px 0;
  line-height: 20px;
  border:0;
}
.two_download_btn .el-button:hover {
  background-color:#5fa7f0;
  border:0;
}
.two_download_btn .el-button {
  border:0 !important;

}
.back_page_home img{
  width:25px;
  float: left;
  margin:20px 0 20px 20px;
}
</style>






