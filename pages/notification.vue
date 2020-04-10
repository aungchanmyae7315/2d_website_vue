<template>
   <div class="main_container notification">
      <el-header>
            <!-- <nuxt-link  :to="`${$t('/')}?lang=${$store.state.locale}`"> -->
                          <el-page-header @back="goBack" title=""  :content="`${$t('notification_title')}`">
                </el-page-header>
            <!-- </nuxt-link> -->
      </el-header>
         <section v-if="!this.notification"  >
          <p style="text-align:center;color:#b8b8b8"> No notification</p>
         </section>
        <section v-else class="noti_content" >
        <section class="noti_content" >
            
            <ul v-for="(noti ,n) in notification" :key="n" class="noti_text"  data-aos="fade-down"
        data-aos-easing="linear">
                

               
                    <li v-if="noti.read_at == null" @click="cur_id(noti.notification_id)" class="noti_background_color">
                    
                   
                    <img  v-if="noti.status == 'top_up'"  src="~static/images/noti_page/topup_icon_t.png" alt="" class="noti_icon">
                    <img  v-else-if="noti.status == 'withdrawl'"  src="~static/images/noti_page/withdraw_icon_t.png" alt="" class="noti_icon">
                    <img  v-else-if="noti.status == 'win'"  src="~static/images/noti_page/win_icon.png" alt="" class="noti_icon">
                   
                    <img  v-else-if="noti.status == 'morning_result'"  src="~static/images/noti_page/morning_result_icon_t.png" alt="" class="noti_icon">
                    <img  v-else-if="noti.status == 'evening_result'"  src="~static/images/noti_page/evening_result_icon_t.png" alt="" class="noti_icon">
                    <img  v-else-if="noti.status == 'referal_code'"  src="~static/images/noti_page/new_member_icon_t.png" alt="" class="noti_icon">
                    <img  v-else-if="noti.status == 'reward_5000'"  src="~static/images/noti_page/one_week_noti_icon_t.png" alt="" class="noti_icon">
                    <img  v-else-if="noti.status == 'bet_reward'"  src="~static/images/noti_page/bet_reward_icon_t.png" alt="" class="noti_icon">

                    <div v-if="noti.status == 'win'">
                         <div style="color:#000;">{{noti.title}}</div>
                        <div style="color:#158220;">{{noti.data.amount}} ကျပ်</div>
                        <div style="color:#b8b8b8;">{{noti.ago}}</div>
                    </div>
                     <div v-else-if="noti.status == 'morning_result'">
                        <div style="color:#000;">{{noti.title}}</div>
                        <div style="color:#158220;">{{noti.data.number}} ကျပ်</div>
                        <div style="color:#b8b8b8;">{{noti.ago}}</div>
                    </div>

                      <div v-else-if="noti.status == 'evening_result'">
                        <div style="color:#000;">{{noti.title}}</div>
                        <div style="color:#158220;">{{noti.data.number}} ကျပ်</div>
                        <div style="color:#b8b8b8;">{{noti.ago}}</div>
                    </div>

                      <div v-else-if="noti.status == 'referal_code'">
                        <div style="color:#000;">{{noti.title}}</div>
                        <div style="color:#158220;">{{noti.data.amount}} ကျပ်</div>
                        <div style="color:#b8b8b8;">{{noti.ago}}</div>
                    </div>

                    <div v-else-if="noti.status == 'reward_5000'">
                        <div style="color:#000;">{{noti.title}}</div>
                        <div style="color:#158220;">{{noti.data.amount}} ကျပ်</div>
                        <div style="color:#b8b8b8;">{{noti.ago}}</div>
                    </div>

                      <div v-else-if="noti.status == 'bet_reward'">
                        <div style="color:#000;">{{noti.title}}</div>
                        <div style="color:#158220;">{{noti.data.amount}} ကျပ်</div>
                        <div style="color:#b8b8b8;">{{noti.ago}}</div>
                    </div>

                    <div v-else-if="noti.status == 'top_up'">
                        <div style="color:#000;">{{noti.title}}</div>
                        <div style="color:#158220;">{{noti.data.amount}} ကျပ်</div>
                        <div style="color:#b8b8b8;">{{noti.ago}}</div>
                    </div>

                      <div v-else-if="noti.status == 'withdrawl'">
                        <div style="color:#000;">{{noti.title}}</div>
                        <div style="color:#158220;">{{noti.data.amount}} ကျပ်</div>
                        <div style="color:#b8b8b8;">{{noti.ago}}</div>
                    </div>


                    <div v-else>
                         <div style="color:#000;">{{noti.title}}</div>
                        <div style="color:#158220;">{{noti.data.amount}} ကျပ်</div>
                        <div style="color:#b8b8b8;">{{noti.ago}}</div>
                    
                    </div>
                   
                   
                    <div class="el_icon_right">
                         <i  class="el-icon-arrow-right" ></i>
                    </div>
                   
                   
                </li>
                 <li v-else @click="cur_id(noti.notification_id)" >
                    
                
                    <img  v-if="noti.status == 'top_up'"  src="~static/images/noti_page/topup_icon.png" alt="" class="noti_icon">
                    <img  v-else-if="noti.status == 'withdrawl'"  src="~static/images/noti_page/withdraw_icon.png" alt="" class="noti_icon">
                    <img  v-else-if="noti.status == 'win'"  src="~static/images/noti_page/win_icon.png" alt="" class="noti_icon">
                   
                    <img  v-else-if="noti.status == 'morning_result'"  src="~static/images/noti_page/morning_result_icon.png" alt="" class="noti_icon">
                    <img  v-else-if="noti.status == 'evening_result'"  src="~static/images/noti_page/evening_result_icon.png" alt="" class="noti_icon">
                    <img  v-else-if="noti.status == 'referal_code'"  src="~static/images/noti_page/new_member_icon.png" alt="" class="noti_icon">
                    <img  v-else-if="noti.status == 'reward_5000'"  src="~static/images/noti_page/one_week_noti_icon.png" alt="" class="noti_icon">
                    <img  v-else-if="noti.status == 'bet_reward'"  src="~static/images/noti_page/bet_reward_icon.png" alt="" class="noti_icon">

                    <div v-if="noti.status == 'win'">
                         <div style="color:#000;">{{noti.title}}</div>
                        <div style="color:#158220;">{{noti.data.amount}} ကျပ်</div>
                        <div style="color:#b8b8b8;">{{noti.ago}}</div>
                    </div>

                      <div v-else-if="noti.status == 'morning_result'">
                        <div style="color:#000;">{{noti.title}}</div>
                        <div style="color:#158220;">{{noti.data.number}}</div>
                        <div style="color:#b8b8b8;">{{noti.ago}}</div>
                    </div>

                      <div v-else-if="noti.status == 'evening_result'">
                        <div style="color:#000;">{{noti.title}}</div>
                        <div style="color:#158220;">{{noti.data.number}}</div>
                        <div style="color:#b8b8b8;">{{noti.ago}}</div>
                    </div>

                      <div v-else-if="noti.status == 'referal_code'">
                        <div style="color:#000;">{{noti.title}}</div>
                        <div style="color:#158220;">{{noti.data.amount}} ကျပ်</div>
                        <div style="color:#b8b8b8;">{{noti.ago}}</div>
                    </div>

                    <div v-else-if="noti.status == 'reward_5000'">
                        <div style="color:#000;">{{noti.title}}</div>
                        <div style="color:#158220;">{{noti.data.amount}} ကျပ်</div>
                        <div style="color:#b8b8b8;">{{noti.ago}}</div>
                    </div>

                      <div v-else-if="noti.status == 'bet_reward'">
                        <div style="color:#000;">{{noti.title}}</div>
                        <div style="color:#158220;">{{noti.data.amount}} ကျပ်</div>
                        <div style="color:#b8b8b8;">{{noti.ago}}</div>
                    </div>

                      <div v-else-if="noti.status == 'top_up'">
                        <div style="color:#000;">{{noti.title}}</div>
                        <div style="color:#158220;">{{noti.data.amount}} ကျပ်</div>
                        <div style="color:#b8b8b8;">{{noti.ago}}</div>
                    </div>

                      <div v-else-if="noti.status == 'withdrawl'">
                        <div style="color:#000;">{{noti.title}}</div>
                        <div style="color:#158220;">{{noti.data.amount}} ကျပ်</div>
                        <div style="color:#b8b8b8;">{{noti.ago}}</div>
                    </div>

                   


                    <div v-else>
                         <div style="color:#000;">{{noti.title}}</div>
                        <div style="color:#158220;">{{noti.data.amount}} ကျပ်</div>
                        <div style="color:#b8b8b8;">{{noti.ago}}</div>
                    
                    </div>
                   
                   
                    <div class="el_icon_right">
                         <i  class="el-icon-arrow-right" ></i>
                    </div>
                   
                  
                </li>
                 

            </ul>
            
               
        </section>

    </div>
</template>

<style >
     .notification .el-page-header {
        line-height: 43px;
        color:#fff;
        padding:0 20px;
    }
    .notification .el-page-header__content {
        color:#fff;
    }
    .noti_background_color {
       background-color: #E6FAFF;
       
    }
    .noti_content .el-divider--horizontal {
        margin:13px auto;
    }
    .noti_text {
        padding:0;
        margin:0;
    }
    .noti_text li {
        list-style:none;
        padding-top:15px;
        padding-bottom:15px;
        border-bottom:1px solid #e8e8ee;
    }
    .noti_text .noti_icon {
       width: 65px;
        height: auto;
        float: left;
        display: block;
        margin-top:-6px;   
        margin-right:5px; 
    }
    .el_icon_right {
        float: right;
        position: relative;
        right:25px;
        bottom:47px;
    }

</style>

<script>
import axios from 'axios'
export default {
    mounted() {
          this.$nextTick(() => {
        this.$nuxt.$loading.start()
        // setTimeout(() => this.$nuxt.$loading.finish(), 2000)
      })
    },
    data() {
        return {

            notification:'',
           
        }
    },

    methods: {
        goBack() {
             this.$router.push(`/?lang=${this.$store.state.locale}`); 
         },
      cur_id(data) {
         this.$store.commit('noti_id', data);
           this.$router.push(`/withdraw_noti?lang=${this.$store.state.locale}`); 
       
      }
     },
     created() {

         let token = localStorage.getItem('token');
        
        if(token) {
                this.$axios.get("/v2/v1/notification",
                    {headers: {
                               "Authorization": "Bearer "+token
                         }
                        })
                    .then(response => {
                        console.log(response.data)
                    this.notification = response.data.data
                    this.$nuxt.$loading.finish()
                   // console.log(this.notification.stauts)
                     var noti_id = this.notification.notification_id
                     //console.log(noti_id)
                    
                })
        }
                
     }
}
</script>