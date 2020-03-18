<template>
  
    <div class="main_container">
    
      

  <div class="download_page_btn">
       <img src="~static/images/logo.png" class="logo_download" alt="logo">
       <p>APP ‌ဖုန်းထဲထည့်သွင်းပြီးပါက Browser မှဝင်စရာမလိုပဲ တိုက်ရိုက်အသုံးပြုနိုင်သည်။</p>
       <div class="two_download_btn">
          <div>
               <nuxt-link  :to="`${$t('/ios_install_guide')}?lang=${$store.state.locale}`"> 
                  <img src="~static/images/icons/ios_download_img.png" alt="">
              </nuxt-link>
          </div>
           <div>
             <a href="https://play.google.com/store/apps/details?id=seinlucky.com&hl=en">
                <img src="~static/images/icons/playstore_download_img.png" alt="">
              </a>
         </div>
         
          <div>
             <a href="https://www.seinlucky.com/download/seinlucky.apk">
                <img src="~static/images/icons/andriod_download_img.png" alt="">
              </a>
         </div>
          
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
.main_container {
   
    color:#fff;
    text-align: center;
    height: 100vh;
    background: rgba(13, 24, 13, 0.95) !important;
}
.download_page_btn {
    padding:30px;
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
  margin:20px auto;
  display: block;
}

.two_download_btn .el-button {
  background: unset;
  color:#fff;
  max-width: 480px;
  width:100%;
  margin:20px auto;
}
.two_download_btn .el-button:hover {
  background-color: rgb(7, 102, 37);
}
.two_download_btn .el-button {
  border:1px solid #fff !important;
}

</style>






