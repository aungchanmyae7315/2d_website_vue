<template>
   <div class="main_container bet_detail">
      <el-header>
          <!-- <nuxt-link  :to="`${$t('bet_history')}?lang=${$store.state.locale}`"> -->
           <el-page-header @back="goBack" title=" "  :content="`${$t('bet_detail_title')}`">
            
            </el-page-header>
          <!-- </nuxt-link> -->
        
      </el-header>
      
     

       <el-row style="padding:23px;">
            <el-col :span="12"><div class="">{{$t('date_time')}}</div></el-col>
            <el-col :span="6"><div class="">{{$t('no')}}</div></el-col>
            <el-col  :span="6"><div style="text-align:right;padding-right:20px" class="">{{$t('Amount')}}</div></el-col>
        </el-row>
     
               <ul class="bet_detail_list"  v-for="(bet_list_detail,b) in bet_detail" :key="b">
                   <el-row>
                       <el-col :span="12">
                            <li style="margin:0"> {{bet_list_detail.date}}</li>
                       </el-col>
                       <el-col :span="6">
                             <li style="margin-right:0;"> {{bet_list_detail.number}}</li>
                       </el-col>
                       <el-col :span="6">
                             <li style="margi-right:0;" v-if="bet_list_detail.wallet_status == 'wallet'">{{bet_list_detail.amount}} ကျပ်</li>
                            <li style="margin-right:0;" v-else>{{bet_list_detail.amount}} ပွိုင့်</li>
                       </el-col>
                   </el-row>
                    
               </ul>
            
        
    </div>
</template>
<style>
    .bet_detail .el-header {
       background-color :#fff;
      
    }
    .el-page-header__left {
        margin:0;
    }
    .bet_detail .el-page-header {
        line-height: 43px;
        color:#000;
        padding:0 20px;
       
    }
    .bet_detail .el-page-header__content {
        color:#000;
        font-weight: bold;
       
    }
    .bet_detail_item {
        display: flex;
        position: absolute;
        top: 72px;
    }
    .bet_detail .table thead th {
        border:unset;
    }
    .bet_detail_list {
        list-style: none;
        padding:20px;
        margin:0;
        border-bottom: 1px solid #b9b9b9;
    }
    .bet_detail_list li {
       
        display: inline-block;
       
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
           
            bet_detail:'',
            
          
        }
    },
    methods: {
       goBack() {
             this.$router.push(`/bet_history?lang=${this.$store.state.locale}`); 
         },
    
    
  
    },
      created() {

        let token = localStorage.getItem('token');

        let bet_date = localStorage.getItem('bet_date');
           this.$axios.get("/v1/historyByDate?date="+bet_date,
                {headers: {
                            "Authorization": "Bearer "+token
                        }
                    })
            
                .then(response => {
                    this.$nuxt.$loading.finish()
                    this.bet_detail = response.data.data
            })
     }
}
</script>
