<template>
   <div class="main_container notification">
      <el-header>
            <nuxt-link  :to="`${$t('/')}?lang=${$store.state.locale}`">
                <el-page-header content="Notification">
                </el-page-header>
            </nuxt-link>
      </el-header>
        <section class="noti_content">
            <ul v-for="(noti ,n) in notification" :key="n" class="noti_text"  data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="500">
                

                
                    <li @click="cur_id(noti.notification_id)" >
                    
                    <img src="~static/images/noti_page/noti_icon2.png" alt="" class="noti_icon">
                    <div style="color:#000;">{{noti.title}}</div>
                    <div style="color:#b8b8b8;">{{noti.description}}</div>
                    <div class="el_icon_right">
                         <i  class="el-icon-arrow-right" ></i>
                    </div>
                   
                     <el-divider></el-divider>
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
    .noti_content {
        padding:0 20px;
        margin-top:20px;
    }
    .noti_text {
        padding:0;
        margin:0;
    }
    .noti_text li {
        list-style:none;
    }
    .noti_text .noti_icon {
       width: 30px;
        height: auto;
        float: left;
        display: block;
        /* padding: 22px; */
        margin: 10px 15px 10px 0;
    }
    .el_icon_right {
        float: right;
        position: relative;
        right:3px;
        bottom:30px;
    }

</style>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            notification:'',
           
        }
    },
    methods: {
    //     goBack() {
    //         this.$router.push('/')
    //   },
      cur_id(data) {
         this.$store.commit('noti_id', data);
         this.$router.push('/withdraw_noti')
      }
     },
     created() {

         let token = localStorage.getItem('token');
        
        
                axios.get("https://build.seinlucky.com/api/v1/notification",
                    {headers: {
                               "Authorization": "Bearer "+token
                         }
                        })
                    .then(response => {

                     console.log(this.notification = response.data.data)
                     var noti_id = this.notification.notification_id
                    
                })

            // var URL = "https://build.seinlucky.com/api/v1/notification";
            
     }
}
</script>