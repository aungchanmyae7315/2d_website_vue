<template>
   <div class="main_container bet_status">
      <el-header>
          <el-page-header @back="goBack" content="Bet Status for 12:00 PM">
           
        </el-page-header>
         <nuxt-link to="/bet_history">
             <img src="~static/images/icons/bet_status_icon.png" alt="" class="bet_status_icon">
        </nuxt-link>
      </el-header>

       <table class="table">
            <thead>
                <tr>
                <th>Date and Time</th>
                <th>No</th>
                <th style="text-align:right">Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr @click="dialogVisible = true" v-for="(bet_list,b) in bet_stauts" :key="b" :id="bet_list.id">
                <th scope="row">{{bet_list.created_at}}</th>  
                <td>{{bet_list.number}}</td> 
                <td style="text-align:right">{{bet_list.amount}}</td>  
                </tr>
            </tbody>
        </table>
        

      <el-dialog class="model_items"
        title="Tips"
        :visible.sync="dialogVisible"
        width="90%"
        >
    <ul>
        <li>
            <span>Date & Time</span><br>
            <span>12:00Am</span>
            
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
      
    }
    .el-page-header__left {
        margin:0;
    }
    .bet_status .el-page-header {
        line-height: 43px;
        color:#000;
        padding:0 10px;
       
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
        right: 12px;
    }
    .bet_status .table td, .table th {
        font-weight: unset;
    }
    .bet_status .el-page-header__content {
        font-size: 12pt;
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