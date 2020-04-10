<template>
   <div class="main_container bet_status">
      <el-header>
           <!-- <nuxt-link  :to="`${$t('me')}?lang=${$store.state.locale}`"> -->
                <el-page-header  @back="goBack" title=""  :content="`${$t('bet_status_title')}`">
                   
                </el-page-header>
                <p class="time_status" >
                    <span>{{this.time_status}} Section</span>
                </p>
                 
           <!-- </nuxt-link> -->
           <div class="demo-image">
             <img src="~static/images/icons/seinlucky_logo.png" alt="" class="seinlucky_icon">
            <span  class="seinlucky_text">SeinLucky</span>
            </div>
         <!-- <nuxt-link :to="`${$t('/bet_history')}?lang=${$store.state.locale}`">
             <img src="~static/images/icons/bet_status_icon.png" alt="" class="bet_status_icon">
        </nuxt-link> -->
      </el-header>

       <table class="table" style="width:95%" >
            <thead>
                <tr>
                <th>{{$t('date_time')}}</th>
                <th>{{$t('no')}}</th>
                <th style="text-align:right">{{$t('Amount')}}</th>
                </tr>
            </thead>
            <tbody >
                <!-- @click="dialogVisible = true" -->
                <tr   v-for="(bet_list,b) in bet_stauts" :key="b" :id="bet_list.id">
                <th scope="row">{{bet_list.created_at}}</th>  
                <td>{{bet_list.number}}</td> 
                <td style="text-align:right" v-if="bet_list.wallet_status == 'wallet'">{{bet_list.amount}} ကျပ်</td>
                <td style="text-align:right" v-else>{{bet_list.amount}} ပွိုင့်</td>  
                </tr>
               
            </tbody>
           
        </table>
        <div style="text-align:center;padding:20px;">
            <nuxt-link :to="`${$t('/bet_history_btn')}?lang=${$store.state.locale}`">
                <el-button class="bet_history_btn" type="info" round>{{$t('Click to see Bet History')}}</el-button>
            </nuxt-link>
        </div>
       
      <el-dialog class="model_items" v-for="(bet_list,b) in bet_stauts" :key="b" :id="bet_list.id"
        title="Tips"
        :visible.sync="dialogVisible"
        width="90%"
        >
    <ul >
        <li >
            <span>Date & Time</span><br>
            <p>{{bet_list.created_at}}</p>
            
        </li>
        <li>
            <span>Name</span>
             <span>Name</span>
        </li>
        <li>
            <span>Phone Number</span>
            <p>09xxxxxx</p>
        </li>
        <li>
            <span>Bet Number</span>
            <p>{{bet_list.number}}</p>
        </li>
        <li>
            <span>Odds</span>
        </li>
        <li>
            <span>Amount</span>
             <p>{{bet_list.amount}}</p>
        </li>
    </ul>
</el-dialog>
    </div>

</template>

<style>

    .bet_status .el-header {
       background-color :#fff;
      
    }
    .el-page-header__left {
        margin:0;
    }
    .bet_status .el-page-header {
        line-height: 43px;
        color:#000;
        padding:0 20px;
       
    }
    .bet_status .el-page-header__content {
        color:#000;
        font-weight: bold;
       
    }
    .list_bet_info ul {
        padding:20px;
        margin:0;
    }
    .list_bet_info ul li {
        list-style: none;
        display: flex;
        padding:20px 0;
        border-bottom:1px solid #BDC1CC;

    
    }
    .bet_s_no ,.bet_s_d_t,.bet_s_amount {
        font-size: 13px;
        text-align: center;
    }
    .model_items ul {
        padding:0;
        margin:0;
    }
    .model_items ul li {
        list-style: none;
        padding:20px 0;
        border-bottom:1px solid #BDC1CC;
    }
    .bet_status .el-dialog {
        border-radius: 13px;
    }

    .bet_status .table td, .table th {
        font-weight: unset;
    }
    .bet_status .el-page-header__content {
        font-size: 12pt;
    }
    .bet_history_btn {
        background: green;
        max-width: 480px;
        width:100%;
        
    }
    .time_status {
        position: absolute;
        text-align: center;
        color:#000;
        right:0;
        left:0;
        
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
           
            bet_stauts:'',
            dialogVisible: false,
            time_status:'',
            time:this.time_status
        }
    },
    methods: {
        goBack() {
             this.$router.push(`/me?lang=${this.$store.state.locale}`); 
         },
   
    
       
    },
      created() {

         let token = localStorage.getItem('token');
        
        
                this.$axios.get("/v1/betStatus",
                    {headers: {
                               "Authorization": "Bearer "+token
                         }
                        })
                    .then(response => {
                          this.$nuxt.$loading.finish()
                        console.log(response.data.data)
                     this.bet_stauts = response.data.data  
                    this.time_status = response.data.time
                   // console.log(this.time_stauts)
                })
     }
}
</script>