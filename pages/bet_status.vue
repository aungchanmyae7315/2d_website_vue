<template>
   <div class="main_container bet_status">
      <el-header>
           <!-- <nuxt-link  :to="`${$t('me')}?lang=${$store.state.locale}`"> -->
                <el-page-header  @back="goBack" title=""  :content="`${$t('bet_status_title')}`">
                   
                </el-page-header>
                 <span class="time_status">{{this.time_stauts}}</span>
           <!-- </nuxt-link> -->

         <nuxt-link :to="`${$t('bet_history')}?lang=${$store.state.locale}`">
             <img src="~static/images/icons/bet_status_icon.png" alt="" class="bet_status_icon">
        </nuxt-link>
      </el-header>

       <table class="table" style="width:95%" >
            <thead>
                <tr>
                <th>{{$t('date_time')}}</th>
                <th>{{$t('no')}}</th>
                <th style="text-align:right">{{$t('Amount')}}</th>
                </tr>
            </thead>
            <tbody>
                <!-- @click="dialogVisible = true" -->
                <tr  v-for="(bet_list,b) in bet_stauts" :key="b" :id="bet_list.id">
                <th scope="row">{{bet_list.created_at}}</th>  
                <td>{{bet_list.number}}</td> 
                <td style="text-align:right">{{bet_list.amount}}</td>  
                </tr>
            </tbody>
        </table>
        <div style="text-align:center;padding:20px;">
            <nuxt-link :to="`${$t('bet_history')}?lang=${$store.state.locale}`">
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
        margin:0 37px;
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
    .bet_status_icon {
        width: 25px;
        height: auto;
        float: right;
        position: relative;
        bottom: 34px;
        right: 24px;
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
        position: relative;
        bottom:32px;
        left:240px;
        color:#000;
        font-weight: bold;
    }
</style>

<script>
 import axios from 'axios'
export default {
    data() {
        return {
           
            bet_stauts:'',
            dialogVisible: false,
            time_stauts:'',
            time:this.time_stauts
        }
    },
    methods: {
        goBack() {
             this.$router.push(`me?lang=${this.$store.state.locale}`); 
         },
        handleClose(done) {
       
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
                 
                     this.bet_stauts = response.data.data  
                    this.time_stauts = response.data.time
                    console.log(this.time_stauts)
                })
     }
}
</script>