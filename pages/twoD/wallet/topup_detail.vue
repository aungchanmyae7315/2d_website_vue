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
                        <h6 style="color:#158220;font-weight:bold">{{$t('withdrawal_success')}}</h6>
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
                      <p>{{this.topup_detail_item.amount}}</p>
                  </el-col>
              </el-row>
              
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