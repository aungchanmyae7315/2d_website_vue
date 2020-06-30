<template>
   <div class="main_container topup_detail">
      <el-header>
           <!-- <nuxt-link  :to="`${$t('/')}?lang=${$store.state.locale}`"> -->
               <el-page-header title="" @back="goBack"   :content="`${$t('topup_details')}`">
                </el-page-header>
           <!-- </nuxt-link> -->
      </el-header>
       <section class="topup_detail_item">
                <div v-if="this.topup_detail_item.status == 0">
                  
                <img  src="~static/images/topup_withdraw/hourglass_bottom.svg" class="success_icon">
                 <h6 style="color:#2196F3;font-weight:bold">{{$t('pending')}}</h6>
                </div>
                <div v-else-if="this.topup_detail_item.status == 1">
                        <img  src="~static/images/topup_withdraw/check_circle-black-18dp.svg" class="success_icon">
                        <h6 style="color:#158220;font-weight:bold">{{$t('topup_success')}}</h6>
                </div>
                <div v-else-if="this.topup_detail_item.status == 2">
                        <img src="~static/images/topup_withdraw/cancel-black-18dp.svg" class="success_icon">
                        <h6 style="color:#F44336;font-weight:bold">အပယ်ခံရသည်</h6>
                </div>
            
             <h4>{{this.topup_detail_item.amount}} {{$t('kyat')}}</h4>
             <div style="text-align:left">
                  <img  :src="this.topup_detail_item.bank" alt="img" class="bank_img">
             </div>
              <el-divider></el-divider>
              <el-row class="topup_detail_list">
                  <el-col :span="12">
                      <h6>လွှဲခဲ့သည့်အချိန်</h6>
                  </el-col>
                  <el-col :span="12">
                      <p>{{this.topup_detail_item.transfer_time}}</p>
                  </el-col>
                   <el-col :span="12">
                      <h6>လွှဲခဲ့သည့်ရက်စွဲ</h6>
                  </el-col>
                  <el-col :span="12">
                      <p>{{this.topup_detail_item.transfer_date}}</p>
                  </el-col>
                   <el-col :span="12">
                      <h6>{{$t('transaction_type')}}</h6>
                  </el-col>
                  <el-col :span="12">
                      <p>{{$t('Top Up')}}</p>
                  </el-col>
                   <el-col :span="12">
                      <h6>{{$t('bank')}}</h6>
                  </el-col>
                  <el-col :span="12">
                      <p>{{this.topup_detail_item.bank_name}}</p>
                  </el-col>
                   <el-col :span="12">
                      <h6>{{$t('account')}}</h6>
                  </el-col>
                  <el-col :span="12">
                      <p>{{this.topup_detail_item.slip_code}}</p>
                  </el-col>
                   <el-col :span="12">
                      <h6>{{$t('Amount')}}</h6>
                  </el-col>
                  <el-col :span="12">
                      <p>{{this.topup_detail_item.amount}} {{$t('kyat')}}</p>
                  </el-col>
              </el-row>
               <div v-if="this.topup_detail_item.status == 2">
                    <el-divider></el-divider>
                  <el-card style="background-color:#F5F5F5">
                      <p style="color:#757575">Sein Lucky Account သို့ ငွေဖြည့်သွင်းမှု မမှန်ကန်ပါ ဘဏ်အကောင့်နံပါတ်အား ပြန်လည်စစ်ဆေးပေးပါ</p>
                  </el-card>
                  <el-button round @click="returnAgain()" class="return_again">ပြန်လည်လုပ်ဆောင်မည်</el-button>

              </div>
               <div v-else-if="this.topup_detail_item.status == 0">
               <el-card style="background:#F5F5F5;" class="time_card">
                    <span>{{$t('sein_lucky_office_hours')}}</span>
                    <el-divider></el-divider>
                    <span>{{$t('mon-sat')}}</span><br>
                    <span>{{$t('morning')}} 9:00 AM - 12:20 PM</span><br>
                    <span>{{$t('evening')}} 01:00 PM - 05:30 PM</span>
                </el-card>
                <p style="padding-top:10px;">၁၀ မိနစ်အတွင်းငွေမရောက်ပါကဆက်သွယ်ရန် ဖုန်းများ</p>
                <el-card style="background:#F5F5F5;"  class="phone_card">
                       
                        <h6>{{$t('topup_withdrawal_help')}}</h6>
                        <ul class="contact_phone">
                          <el-row>
                            <el-col :span="9">
                               <li class="phone_item">+959257578394</li>
                            </el-col>
                            <el-col style="text-align:right" :span="15">
                                <li><el-button size="medium" >  <a style="color:#7B519C;font-size:15px" href="viber://contact?number=%2B959257578394"> 
                                  <img src="~static/icons_service/viber_icon.svg" alt="" >Viber  </a></el-button>
                                  <el-button size="medium" >  <a style="color:#13562A;font-size:15px" href="tel:09257578394"> 
                                  <img src="~static/icons_service/call_back.svg" alt="" >Phone</a></el-button>
                                </li>
                            </el-col>
                          </el-row>
                         
                          
                        </ul>
                         <ul class="contact_phone">
                            <el-row>
                            <el-col :span="9">
                               <li class="phone_item">+959889973993</li>
                            </el-col>
                            <el-col style="text-align:right" :span="15">
                                <li><el-button size="medium" >  <a style="color:#7B519C;font-size:15px" href="viber://contact?number=%2B959889973993"> 
                                  <img src="~static/icons_service/viber_icon.svg" alt="" >Viber  </a></el-button>
                                  <el-button size="medium" >  <a style="color:#13562A;font-size:15px" href="tel:09889973993"> 
                                  <img src="~static/icons_service/call_back.svg" alt="" >Phone</a></el-button>
                                </li>
                            </el-col>
                          </el-row>
                        
                        </ul>
              </el-card>
               <nuxt-link  :to="`${$t('/wallet')}?lang=${$store.state.locale}`">
                <el-button type="info" class="ok_btn" round>{{$t('ok')}}</el-button>
               </nuxt-link>
              </div>
              
        </section>


</div>

</template>

<style>
    .topup_detail .el-header {
       background-color :#fff;

    }
    .el-page-header__left {
        margin:0;
    }
    .topup_detail .el-page-header {
        line-height: 43px;
        color:#000;
        padding:0 20px;
    }
    .topup_detail .el-page-header__content {
        color:#000;
        font-weight: bold;
    }
    .topup_detail_item {
        text-align: center;
        padding:15px;
    }
    .topup_detail_item .success_icon {
        width:50px;
        height: auto;
        padding-bottom:15px;
    }
    .topup_detail_item .bank_img {
        width:70px;
        height:auto;
        text-align: left;
    }
    .topup_detail_item .el-divider--horizontal {
        margin:10px 0 20px 0;
    }
    .topup_detail_list h6 {
        text-align: left;
    }
    .topup_detail_list p {
        text-align: right;
    }
    .return_again {
        margin-top:20px;
        max-width: 480px;
        width:100%;
        background-color: #F44336;
        color:#fff;
    }
    .topup_detail_item  .phone_card h6 {
      text-align: left;
      padding-bottom:20px;
      color:#000;
    }
    .topup_detail_item .contact_phone {
      padding:0;
      margin:0;
      list-style: none;
      color:#000;
    }
    .topup_detail_item .contact_phone img  {
      width:25px;
      padding-right:5px;
   
    }


  .contact_phone li i {
    font-size: 17px;
    padding-right:5px;
  }
  .phone_item {
    font-size: 14px;
    padding-top:10px;
    padding-bottom:30px;
  }
  @media screen and (max-width:400px) {
      .topup_detail_item .el-button--medium {
          padding:10px 6px;
      }
  }
  .topup_detail_item .ok_btn {
      background: #2196F3;
      color:#fff;
      width:100%;
      margin:15px auto;
  }
   
</style>

<script>
import axios from 'axios'
export default {
    mounted() {
      this.$nextTick(() => {
      this.$nuxt.$loading.start()
      })

      
    },
    data() {
        return {
           topup_detail_item:'',
        }
    },
     methods: {
        goBack() {
             this.$router.push(`/twoD/wallet/transaction_status?lang=${this.$store.state.locale}`); 
         },
          returnAgain() {
               this.$router.push(`/topup?lang=${this.$store.state.locale}`); 
         }
         
     },
     created() {
           let token = localStorage.getItem('token');
            let topup_detail_id = localStorage.getItem('topup_detail_id');
            console.log(topup_detail_id);
                this.$axios.get("/v2/v1/slip_transaction/detail?id="+topup_detail_id,
                    {headers: {
                               "Authorization": "Bearer "+token
                         }
                        })
                
                    .then(response => {
                        console.log(response)
                        this.topup_detail_item = response.data.data[0]
                        console.log(this.topup_detail_item)
                       // this.$nuxt.$loading.finish()
                    
                })
         
     }
}
</script>