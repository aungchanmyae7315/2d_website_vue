<template> 
    <main class="ios_install"> 
       <el-header> 
           <!-- <nuxt-link  :to="`${$t('bet')}?lang=${$store.state.locale}`"> --> 
               <el-page-header title="" @back="goBack"  > 
                </el-page-header> 
           <!-- </nuxt-link> --> 
      </el-header> 
      <el-main> 
           <div class="longText" id="hidingScrollBar"> 
                <div class="hideScrollBar"> 
                    <h4>iPhone ထဲသို့ Sein Lucky ထည့်သွင်းနည်း</h4> 
                    <p>(၁ / ၅) iPhone ၏ Safari ကို ဖွင့်ပါ။</p> 
                   <img src="~static/images/install_ios_img1.png" alt="" class=""> 
                   <br> 
                   <p>(၂ / ၅) Sein Lucky App ၏ ဝက်ဆိုဒ် www.SeinLucky123.com ကိုဝင်ပါ။</p> 
                    <img src="~static/images/install_ios_img2.png" alt="" class=""> 
                    <br> 
                    <p>(၃ / ၅) Share bottom(ရှဲခလုတ်) ကိုနှိပ်ပါ။</p> 
                    <img src="~static/images/install_ios_img4.png" alt="" class=""> 
                    <br> 
                    <p>(၄ / ၅) "Add to Home Screen" ကိုနှိပ်ပါ။</p> 
                    <img src="~static/images/install_ios_img3.png" alt=""  class=""> 
                    <br> 
                     <p>(၅ / ၅) "Add"ကို နိပ်ပါ။</p> 
                    <img src="~static/images/install_ios_img.jpg" alt="" style="width:78%;border-radius:9px;box-shadow: -2px 7px 56px -2px rgba(0,0,0,0.75);" class=""> 
                    <br> 
                    <br> 
                     <p>သင်ဟာ Sein Lucky ကို သင်၏ဖုန်းထဲသိုထည့်ပြီးပါပြီ။</p> 
                    <img src="~static/images/install_ios_img5.png" alt="" class=""> 


                </div> 
            </div> 
      </el-main> 

    </main> 
</template> 
<style > 
   .ios_install .el-header { 
       background-color :#2A612D; 
    } 
    .el-page-header__left { 
        margin:0; 
    } 
    .ios_install .el-page-header { 
        line-height: 43px; 
        color:#fff; 
        padding:9px 20px; 
    } 
    .ios_install .el-page-header__content { 
        color:#fff; 
        font-weight: bold; 
    } 
    .ios_install img { 
        width:100%; 
    } 
    .ios_install { 
        color:#fff; 
    } 
   
   
</style> 
<script> 
export default { 
    data() { 
        return { 
        } 
    }, 
    methods:{ 
         goBack() { 
             this.$router.push(`/?lang=${this.$store.state.locale}`);  
         }, 
    } 
} 
</script>