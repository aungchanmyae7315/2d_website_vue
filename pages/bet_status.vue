<template>
   <div class="main_container bet_status">
      <el-header>
          <el-page-header @back="goBack" content="2D Result">
        </el-page-header>
        <el-row type="flex" class="row-bg" justify="space-between">
            <el-col :span="6"><div class="bet_s_no">No</div></el-col>
            <el-col :span="6"><div class="bet_s_d_t">Date and Time</div></el-col>
            <el-col :span="6"><div class="bet_s_amount">Amount (MMK)</div></el-col>
        </el-row>
        <div class="list_bet_info">
            <ul >
                <li @click="dialogVisible = true" v-for="(bet_list,b) in bet_stauts" :key="b">
                    <div class="no">{{bet_list.number}}</div>
                     <div class="date_time">{{bet_list.created_at}}</div>
                      <div class="amount_bet">{{bet_list.amount}}</div>
                </li>
            </ul>
           
        </div>
      </el-header>
      <el-dialog class="model_items"
  title="Tips"
  :visible.sync="dialogVisible"
  width="90%"
>
    <ul>
        <li>
            <span>Date & Time</span>
        </li>
        <li>
            <span>Name</span>
        </li>
        <li>
            <span>Phone Number</span>
        </li>
        <li>
            <span>Bet Number</span>
        </li>
        <li>
            <span>Odds</span>
        </li>
        <li>
            <span>Amount</span>
        </li>
    </ul>
</el-dialog>
    </div>

</template>

<style>

    .bet_status .el-header {
       background-color :#fff;
       -webkit-box-shadow: 0px 2px 2px -1px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 2px 2px -1px rgba(0,0,0,0.75);
        box-shadow: 0px 2px 2px -1px rgba(0,0,0,0.75);
        height: 85px !important;
    }
    .el-page-header__left {
        margin:0;
    }
    .bet_status .el-page-header {
        line-height: 43px;
        color:#000;
        padding:0 10px;
       
    }
    .withdrawal .el-page-header__content {
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
        padding:20px;
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
    
</style>

<script>
 import axios from 'axios'
export default {
    data() {
        return {
            bet_stauts:'',
            dialogVisible: false
        }
    },
    methods: {
        handleClose(done) {
       
      },
    
        goBack() {
            this.$router.push('/me')
        }
    },
      created() {

         let token = localStorage.getItem('token');
        
        
                axios.get("https://build.seinlucky.com/api/v1/betStatus",
                    {headers: {
                               "Authorization": "Bearer "+token
                         }
                        })
                    .then(response => {
                     console.log(this.bet_stauts = response.data.data)    
                })
     }
}
</script>