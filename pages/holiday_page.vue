<template>
   <div class="main_container bet_history">
      <el-header>
           <!-- <nuxt-link  :to="`${$t('bet_status')}?lang=${$store.state.locale}`"> -->
                <el-page-header @back="goBack" title=""  :content="`${$t('bet_offday_title')}`">
                
                </el-page-header>
           <!-- </nuxt-link> -->
        
      </el-header>
       <!-- <div class="demo-image">
            <img src="~static/images/icons/seinlucky_logo.png" alt="" class="seinlucky_icon">
        <span  class="seinlucky_text">SeinLucky</span>
        </div> -->

       <table class="table">
            <thead>
                <tr>
                <th>Date & Day</th>
                <th style="text-align:right">Holiday Name</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(holiday,b) in holiday_list" :key="b" >
              
                <th scope="row">{{holiday.date}}</th>  
                <td style="text-align:right">{{holiday.name}}</td>  
              
                </tr>
            </tbody>
        </table>
    </div>
</template>
<style>
    .bet_history .el-header {
       background-color :#fff;
      
    }
    .el-page-header__left {
        margin:0;
    }
    .bet_history .el-page-header {
        line-height: 43px;
        color:#000;
        padding:0 20px;
       
    }
    .bet_history .el-page-header__content {
        color:#000;
        font-weight: bold;
       
    }
    .bet_history table {
        font-size: 13px;
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
           
            holiday_list:'',
           
        }
    },
    methods: {
        goBack() {
             this.$router.push(`/bet?lang=${this.$store.state.locale}`); 
         },
   
    
     
        // bet_date(data) {
        //   this.$store.commit('bet_date', data)
       
        //     this.$router.push(`/bet_detail?lang=${this.$store.state.locale}`); 

        // },
    },
  
      created() { 

         let token = localStorage.getItem('token');
        
        
                this.$axios.get("/v2/v1/holiday/list",
                    {headers: {
                               "Authorization": "Bearer "+token
                         }
                        })
                    .then(response => {
                        console.log(response)
                        this.$nuxt.$loading.finish()
                     this.holiday_list = response.data.data   
                })
     }
}
</script>
