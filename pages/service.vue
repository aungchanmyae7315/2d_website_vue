<template>
   <main>
           <el-header class="service_header" >
             <img src="~static/images/logo.png" class="logo" alt="logo">
           </el-header>
         <el-main>
            <div class="longText" id="hidingScrollBar">
              <div class="hideScrollBar_service">
                  <div class="service">
                  <img src="~static/icons_service/Customer_services_icon.png" alt="" style="width:120px" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="500">
                    <p class="contact_text"> {{ $t('Contact us via Viber or Phone call.') }}</p>
                    <p style="color:#eebd3e;font-weight:bold;font-size:16px;">{{$t('service_time_one')}}</p>
                     <p style="color:#BDC5BE;font-size:13px;">{{$t('service_time_two')}}</p>
                      <p style="color:#BDC5BE;font-size:13px;">{{$t('service_time_three')}}</p>

              <el-card  class="phone_card">
                       
                        <h6>{{$t('topup_withdrawal_help')}}</h6>
                        <ul class="contact_phone">
                          <li class="phone_item"><i class="el-icon-phone"></i>  +959257578394(Viber)</li>
                           <li><el-button size="medium"    round>  <a style="color:#7B519C;" href="viber://contact?number=%2B959257578394"> 
                               <img src="~static/icons_service/viber_icon.svg" alt="" >viber  </a></el-button></li>
                        </ul>
                         <ul class="contact_phone">
                          <li class="phone_item"><i class="el-icon-phone"></i>  +959889973993(Viber)</li>
                           <li><el-button size="medium"   round> <a style="color:#7B519C;" href="viber://contact?number=%2B959889973993">
                              <img src="~static/icons_service/viber_icon.svg" alt="" >viber  </a></el-button></li>
                        </ul>
              </el-card>
              <el-card  class="phone_card">
                     <h6>{{$t('agent_info')}}</h6>
                         <ul class="contact_phone">
                          <li class="phone_item" style="padding-right:72px;"><i class="el-icon-phone"></i> 09 8817 028 82</li>
                           <li><el-button size="medium"     round><a style="color:#000" href="tel:0959881702882">{{$t('phone_call')}} </a></el-button></li>
                        </ul>
              </el-card>
                <el-card  class="phone_card">
                           <h6>{{$t('customer_service_title')}}</h6>
                           <ul class="contact_phone">
                          <li class="phone_item"><i class="el-icon-phone"></i>  +959771318916(Viber)</li>
                           <li><el-button size="medium"   round> <a style="color:#000;" href="viber://contact?number=%2B959771318916">
                              <img src="~static/icons_service/viber_icon.svg" alt="" >viber  </a></el-button></li>
                        </ul>
                            
              </el-card>
                    <!-- <el-card v-for="(phone , p) in contact" :key="p" class="phone_card">
                        <h6 v-if="phone.type == 'Customer Service'">{{$t('customer_service_title')}}</h6>
                        <h6 v-else-if="phone.type == 'Top-up\/Withdrawal Help'">{{$t('topup_withdrawal_help')}}</h6>
                         <h6 v-else-if="phone.type == 'IT Support'">{{$t('it_support')}}</h6>
                          <h6 v-else-if="phone.type == 'Agent Information (Viber Only)'">{{$t('agent_info')}}</h6>
                        <ul v-for="(ph_item, ne) in phone.phone_number" :key="ne.id" class="contact_phone">
                          
                          <li class="phone_item"><i class="el-icon-phone"></i> {{ph_item.phone}}</li>
                           <li><el-button size="medium"  @click="dial(ph_item.phone)"   round>{{$t('phone_call')}}</el-button></li>
                        </ul>
                    </el-card> -->

                
                </div>
              </div>
             </div>
        </el-main>
    </main>
</template>


<script>
 import axios from 'axios'
export default {

     layout: 'serviceLayout',
      mounted() {
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
        })
     
    },
     data() {
       return {
         contact:[],
       }
     },
     methods: {
    dial: function(data){
      window.location ='tel:'+data;
    },
     },
    created() {
      //  this.$axios.get("/v2/v1/contact")
    
            
      //           .then(response => {
      //             this.$nuxt.$loading.finish()
      //             console.log(response.data)
      //               this.contact = response.data.data
      //       });
     },
}
</script>
<style>
 .header {
        background-color :#2A612D;
}
.service_header {
  position: fixed;
  max-width: 480px;
  width:100%;
  text-align: center;
}
.hideScrollBar_service {
      width: 100%;
    height: 100%;
    overflow: auto;
    margin-left: 17px;
    padding-right: 28px;
    padding-top:60px;
}
  .service {
        text-align:center;
        margin-bottom:80px;

    }
  .service .el-button.is-round {
    width:unset;
  }

    .service .contact_text  {
        color:#BDC5BE;
        font-size:17px;
        font-weight: bold;
    }
    .service .contact_chat {
        color:#BDC5BE;
        font-size:20px;
    }
   
    .service_contact {
        margin:0;
        padding:0;
    }
    .service_contact li {
        
        list-style:none;
       
        margin:10px auto;
       max-width: 480px;
       width:100%;
       padding:8px 15px;
    }
    .service_contact .el-button  {
       border-radius:12px;
       width:140px !important;
    }
    .service_contact li:hover a {
      color:#2D5936;
      transition-delay:.2s;
    }
    .service_contact li a {
        text-decoration:none;
        color:#35343A;
        font-size:16px;
    }
    .service .el-card {
      background-color: #252E39;
      border: 2px solid #FFEA72;
      border-radius: 13px;
      margin:20px auto;
    }
    .phone_card h6 {
      text-align: left;
      padding-bottom:20px;
      color:#fff;
    }
    .contact_phone {
      padding:0;
      margin:0;
      list-style: none;
      display: inline-flex;
      color:#fff;
    }
    .contact_phone img  {
      width:20px;
      padding-right:5px;
   
    }


  .contact_phone li i {
    font-size: 17px;
    padding-right:15px;
  }
  .phone_item {
    font-size: 12px;
    padding-right:20px;
    padding-bottom:30px;
  }
    
</style>