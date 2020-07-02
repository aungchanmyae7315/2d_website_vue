<template>
   <main class="tran_status">
      <el-header>
           <!-- <nuxt-link  :to="`${$t('/')}?lang=${$store.state.locale}`"> -->
               <el-page-header title="" @back="goBack"   :content="`${$t('transaction_status')}`">
                </el-page-header>
           <!-- </nuxt-link> -->
      </el-header>
     <el-tabs v-model="activeName" @tab-click="handleClick">
      
        <el-tab-pane :label="$t('Top Up')" name="first">
              
            <section  v-if="!this.topup_transaction.length == 0" class="transaction">
                  <p style="font-size:14px">နှစ်ရက်အတွင်း Sein Lucky Account သို့ငွေဖြည့်မှတ်တမ်း</p>

                <el-card class="transaction_list" v-for="(tran , t) in topup_transaction" :key="t">
                    
                    <div  @click="cur_id(tran.id)" >
                    <el-row>
                        <el-col :span="16">
                            <ul>
                                <li style="padding-right:10px;">
                                        <el-avatar :size="60" ><img :src="tran.bank" alt=""></el-avatar>
                                </li>
                                <li>
        
                                <h6>{{tran.slip_code}}</h6>
                                <p>{{tran.date}}</p>
                                </li>
                            </ul>
                        
                        </el-col>
                        <el-col style="text-align:right" :span="8">
                                <h5 class="tran_amount">{{tran.amount}} {{$t('kyat')}} <i class="el-icon-arrow-right"></i> </h5>
                        </el-col>
                       
                    </el-row>
                     <el-divider></el-divider>
                     <div v-if="tran.status == 0">
                          <p style="color:#2196F3;padding-top:5px;margin:0;">{{$t('pending')}}</p>
                     </div>
                      <div v-if="tran.status == 1">
                          <div style="float:left;padding-top:5px">
                              <h6 style="color:#158220;font-weight:bold">{{$t('topup_success')}}</h6>
                              <p style="color:#757575;font-size:12px">{{$t('topupmoney_has_been_trans')}}</p>
                          </div>
                          <div style="float:right">
                              <img src="~static/images/topup_withdraw/check_circle-black-18dp.svg" alt="" style="padding:12px;">
                          </div>
                         
                     </div>
                      <div v-if="tran.status == 2">
                         <div style="float:left">
                              <h6 style="color:#F44336;font-weight:bold">အပယ်ခံရသည်</h6>
                              <p style="color:#757575;font-size:12px;width:220px">Sein Lucky Account သို့ငွေဖြည့်သွင်းမူမမှန်ကန်ပါဘဏ်အကောင့်နံပါတ်အားပြန်လည်စစ်ဆေးပေးပါ</p>
                          </div>
                          <div style="float:right">
                              <img src="~static/images/topup_withdraw/cancel-black-18dp.svg" alt="" style="padding:20px 12px;">
                          </div>
                     </div>
                    </div>
                </el-card>          
            </section>
             <section class="no_data_topup"  v-else>
                    <nuxt-link  :to="`${$t('/wallet')}?lang=${$store.state.locale}`">
                        <el-button type="info" round>{{$t('ok')}}</el-button>
                   </nuxt-link>
            </section>

        </el-tab-pane>
          <el-tab-pane :label="$t('Withdrawal')" name="second">
           
          <section v-if="!this.withdrawl_transaction.length == 0"  class="transaction">
            
                 <p  style="font-size:14px">နှစ်ရက်အတွင်း Sein Lucky Account မှငွေထုတ်မှတ်တမ်း</p>
                <el-card class="transaction_list" v-for="(tran , t) in withdrawl_transaction" :key="t">
                    <div @click="withdrawl_cur_id(tran.id)">
                    <el-row>
                        <el-col :span="16">
                            <ul>
                                <li style="padding-right:10px;">
                                        <el-avatar :size="60" ><img :src="tran.bank" alt=""></el-avatar>
                                </li>
                                <li>
        
                                <h6>{{tran.card_number}}</h6>
                                <p>{{tran.date}}</p>
                                </li>
                            </ul>
                        
                        </el-col>
                        <el-col style="text-align:right" :span="8">
                                <h5 class="tran_amount">{{tran.amount}} {{$t('kyat')}}</h5>
                        </el-col>
                       
                    </el-row>
                     <el-divider></el-divider>
                     <div v-if="tran.status == 0">
                          <p style="color:#2196F3;padding-top:5px;margin:0;">{{$t('pending')}}</p>
                     </div>
                      <div v-if="tran.status == 1">
                          <div style="float:left;padding-top:5px">
                              <h6 style="color:#158220;font-weight:bold">{{$t('withdrawal_success')}}</h6>
                              <p style="color:#757575;font-size:12px">{{$t('money_has_been_trans')}}</p>
                          </div>
                          <div style="float:right">
                              <img src="~static/images/topup_withdraw/check_circle-black-18dp.svg" alt="" style="padding:12px;">
                          </div>
                         
                     </div>
                      <div v-if="tran.status == 2">
                         <div style="float:left">
                              <h6 style="color:#F44336;font-weight:bold">အပယ်ခံရသည်</h6>
                              <p style="color:#757575;font-size:12px;width:220px">ငွေလွှဲမှုမမှန်ကန်ပါ ဘဏ်အကောင့်နံပါတ်အား ပြန်လည်စစ်ဆေးပေးပါ</p>
                          </div>
                          <div style="float:right">
                              <img src="~static/images/topup_withdraw/cancel-black-18dp.svg" alt="" style="padding:20px 12px;">
                          </div>
                     </div>
                    </div>
                </el-card>          
            </section>
             <section class="no_data_withdrawal"  v-else > 
                   <nuxt-link  :to="`${$t('/wallet')}?lang=${$store.state.locale}`">
                        <el-button type="info" round>{{$t('ok')}}</el-button>
                   </nuxt-link>
             </section>
       

        </el-tab-pane>
        
    </el-tabs>
   
</main>

</template>

<style>
    .no_data_topup {
        background-image: url(~static/images/topup_withdraw/topup_nodata.jpeg);
        width: 100%;
        height: 100vh;
         margin-top:-80px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 100%;
    }
     .no_data_withdrawal {
        background-image: url(~static/images/topup_withdraw/withdrawal_nodata.jpeg);
        width: 100%;
        height: 100vh;
        margin-top:-80px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 100%;
    }
    .no_data_withdrawal .el-button  , .no_data_topup .el-button {
        position: fixed;
        bottom:10px;
        max-width: 480px;
        left:0;
        right:0;
        width:89%;
        background-color: #158220;
        color:#fff;
        margin:20px auto;
       
    }
    .tran_status .el-header {
       background-color :#fff;
    }
    .el-page-header__left {
        margin:0;
    }
    .tran_status .el-page-header {
        line-height: 43px;
        color:#000;
        padding:0 20px;
    }
    .tran_status .el-page-header__content {
        color:#000;
        font-weight: bold;
    }
    .tran_status .el-tabs__nav {
        width:50% !important;
        text-align: center;
    }
    .tran_status .el-tabs--top .el-tabs__item.is-top:last-child {
        width:100%;
         padding:0;
    }
    .tran_status .el-tabs--top .el-tabs__item.is-top:nth-child(2) {
        border-right:1px solid #b8b8b8;
        width:100%;
        padding:0;
    }
    .el-tabs__item.is-active  {
        color:#3D8321;
    }
    .el-tabs__active-bar {
        background-color:#3D8321;
    }
    .transaction {
        padding:15px;
    }
    .transaction .el-tabs__header {
        margin:0;
    }
    .transaction .el-card {
        border-radius: 13px;
        margin-bottom:15px;
    }
    .transaction_list ul {
        padding:0;
        margin:0;
        display: inline-flex;
    }
    .transaction_list ul li {
        list-style: none;
    }
    .transaction_list .el-card__body {
        padding:10px;
        cursor: pointer;
    }
    .transaction_list ul li h6 {
        padding-top:10px;
    }
    .transaction_list ul li p {
         font-size: 13px;
         color:#757575;
    }
    .transaction_list .tran_amount {
        padding-top:20px;
        font-size: 16px;
        font-weight: bold;
    }
    .transaction_list .el-divider--horizontal {
        margin:4px auto;
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
           activeName: 'first',
           topup_transaction:'',
           withdrawl_transaction:''
        }
    },
     methods: {
        goBack() {
             this.$router.push(`/wallet?lang=${this.$store.state.locale}`); 
         },
        cur_id(data) {
           this.$store.commit('topup_detail_id', data);
           this.$router.push(`/twoD/wallet/topup_detail?lang=${this.$store.state.locale}`); 
       
        },
        withdrawl_cur_id(data) {
           this.$store.commit('withdrawl_detail_id', data);
           this.$router.push(`/twoD/wallet/withdrawl_detail?lang=${this.$store.state.locale}`); 
        },
          handleClick(tab, event) {
            console.log(tab, event);
        }
     },
     created() {
        let token = localStorage.getItem('token');
        if(token) {
                this.$axios.get("/v2/v1/slip_transaction",
                {headers: {
                            "Authorization": "Bearer "+token
                    }
                    })
                .then(response => {
                    console.log(response.data.data)
                    this.topup_transaction = response.data.data
                    
            })
             this.$axios.get("/v2/v1/withdrawl_transaction",
                {headers: {
                            "Authorization": "Bearer "+token
                    }
                    })
                .then(response => {
                    console.log(response.data.data)
                    this.withdrawl_transaction = response.data.data
                    
            })
        }
    }
}
</script>