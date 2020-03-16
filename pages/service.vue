<template>
   <main>
         <el-main>
            <div class="longText" id="hidingScrollBar">
              <div class="hideScrollBar_service">
                  <div class="service">
                  <img src="~static/icons_service/Customer_services_icon.png" alt="" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="500">
                    <p class="contact_text"> {{ $t('Contact us via Viber or Phone call.') }}</p>
                    <ul class="service_contact" v-for="(phone , p) in contact" :key="p">
                        <li><el-button size="medium"  @click="dial(phone)"   icon="el-icon-phone" round>{{phone}}</el-button></li>

                    </ul>
                  <!-- <h6>Or</h6>
                  <p class="contact_chat">{{$t('You can just message to us')}} </p>
                    <el-button type="primary">Chat with our customer service</el-button> -->
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
       this.$axios.get("/v1/contact")
    
            
                .then(response => {
                    this.contact = response.data.data[0].phone_number
            });
     },
}
</script>
<style>
.hideScrollBar_service {
      width: 100%;
    height: 100%;
    overflow: auto;
    margin-left: 17px;
    padding-right: 28px;
}
  .service {
        text-align:center;
        margin-bottom:80px;

    }
  .service .el-button.is-round {
    width:unset;
  }

    .service .contact_text {
        color:#BDC5BE;
        margin-bottom:50px;
        font-size:18px;
        font-weight: bold;
    }
    .service .contact_chat {
        color:#BDC5BE;
        font-size:20px;
    }
    h6        {
    color:#BDC5BE;
    font-family:'Oswald';
    font-weight:700;
    position:relative;  
    margin: 30px auto 20px auto;
    font-size: 16px;
    line-height: 15px;
    width: 282px;
}

h6:before, h6:after {
  background:#BDC5BE;
  content:"";
  display:block;
  height:1px;
  position:absolute;
  width:125px;
}

h6:before  {  
  left:0;
  top:9px;
  border-radius: 90px 0 0 90px;
  -moz-border-radius: 90px 0 0 90px;
  -webkit-border-radius: 90px 0 0 90px;
}

h6:after   {
  right:0;
  top:9px;
  border-radius: 0 90px 90px 0;
  -moz-border-radius: 0 90px 90px 0;
  -webkit-border-radius:  0 90px 90px 0;
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
</style>