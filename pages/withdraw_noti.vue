<template>
   <div class="main_container withdraw_noti">
      <el-header>
           <!-- <nuxt-link  :to="`${$t('notification')}?lang=${$store.state.locale}`"> -->
                 <el-page-header @back="goBack" title="">
                </el-page-header>
           <!-- </nuxt-link> -->
      </el-header>
      <section class="withdraw_notifi">
           <div class="refel_img_two">
            <img v-if="notification_detail.status == 'withdrawl'"  src="~static/images/noti_page/withdraw_icon.png" class="">
            <img v-else-if="notification_detail.status == 'top_up'"  src="~static/images/noti_page/topup_icon.png" class="">

            </div>
      <el-card data-aos="zoom-out-down"
        data-aos-easing="linear"
        data-aos-duration="500">
          <h5 class="title">{{notification_detail.title}} </h5>
           <h5 class="amount">{{notification_detail.amount}} ကျပ် </h5>
            <div class="footer_card" v-if="notification_detail.status == 'withdrawl'">
                <p>ငွေထုတ်ချိန်  {{notification_detail.read_at}}</p>
            </div>
            <div class="footer_card" v-else-if="notification_detail.status == 'top_up'">
                <p>ငွေသွင်းချိန်  {{notification_detail.read_at}}</p>
            </div>
        <!-- <div class="row win_item">
                <div class="col">
                    <div class="">
                        <h5  style="font-size:10pt;color:#47940D;">Reat at</h5>
                        <span>{{notification_detail.read_at}}</span><br>
                       
                    </div>
                    
                </div>
                <div class="col">
                    
                    <div class="">
                        <h5 style="font-size:10pt">Created at:</h5>
                          <span>{{notification_detail.created_at}}</span><br>
                    </div>
                </div>
          </div> -->
      </el-card>

      </section>
      
    </div>
</template>
<style >
    .withdraw_notifi {
        text-align: center;
        padding:20px;
    }
      .withdraw_noti .el-page-header {
        line-height: 43px;
        color:#fff;
        padding:10px 20px;
    }
    .withdraw_noti .el-page-header__content {
        color:#fff;
    }
    .withdraw_noti .el-page-header__left {
        margin:0;
    }
    .withdraw_notifi .el-card {
        border-radius: 13px;
    }
        .refel_img_two img {
        width:80px;
        height:auto;
        position: relative;
        top: 43px;
        z-index: 1;
    }
    .title {
        padding:0 20px;
        margin-top:20px;
        text-align: center;
        font-size: 15px;
    }
    .amount {
        color:#158220;
        padding:7px 0;
        font-weight: bold;
    }
    .footer_card {
        border-top:1px solid #0000001A;
    }
    .footer_card p {
        margin: 15px auto 0 auto;
    }
   
        
</style>

<script>
import axios from 'axios'
export default {
    data() {
        return {
           notification_detail:''
        }
    },
    mounted() {
     
      this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
        })
    },
     methods: {
         goBack() {

              this.$router.push(`/notification?lang=${this.$store.state.locale}`); 
            //    const loading = this.$loading({
            //     lock: true,
            //     text: 'Loading',
            //     spinner: 'el-icon-loading',
            //     background: 'rgba(0, 0, 0, 0.7)'
            //     });
            //     setTimeout(() => {
            //     loading.close();
            //     }, 2000);
         },

     },
       created() {

         let token = localStorage.getItem('token');
            let noti_id = localStorage.getItem('notification_id');
            console.log(noti_id);
                this.$axios.get("/v1/notification/detail?notification_id="+noti_id,
                    {headers: {
                               "Authorization": "Bearer "+token
                         }
                        })
                
                    .then(response => {
                       
                     console.log(this.notification_detail = response.data.data)
                })
     }
}
</script>