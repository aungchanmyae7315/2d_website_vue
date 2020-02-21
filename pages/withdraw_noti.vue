<template>
   <div class="main_container withdraw_noti">
      <el-header>
          <el-page-header @back="goBack" content="Withdrawal">
        </el-page-header>
      </el-header>
      <section class="withdraw_notifi">
           <div class="refel_img_two">
            <img src="~static/images/noti_page/noti_icon3.png" class="">
        </div>
      <el-card data-aos="zoom-out-down"
        data-aos-easing="linear"
        data-aos-duration="1000">
          <h5 class="win_text">Hi , Aung Chan Myae <br>Your have won 80,000 Ks <br>Congratulations !!</h5>
      
        <div class="row win_item">
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
          </div>
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
        padding:0 20px;
    }
    .withdraw_noti .el-page-header__content {
        color:#fff;
    }
    .withdraw_noti .el-page-header__left {
        margin:0;
    }
        .refel_img_two img {
        width:80px;
        height:auto;
        position: relative;
        top: 43px;
        z-index: 1;
    }
    .win_text {
        padding:20px;
        margin-top:20px;
        text-align: center;
    }

    .win_item span {
        color:#858585;
        font-size: 10pt;
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
      
    },
     methods: {
        goBack() {
            this.$router.push('/notification')
      },
     },
       created() {

         let token = localStorage.getItem('token');
            let noti_id = localStorage.getItem('notification_id');
            console.log(noti_id);
                axios.get("https://build.seinlucky.com/api/v1/notification/detail?notification_id="+noti_id,
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