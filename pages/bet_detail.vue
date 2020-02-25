<template>
   <div class="main_container bet_detail">
      <el-header>
          <el-page-header @back="goBack" content="Bet Detail">
           
        </el-page-header>
        
      </el-header>
       <el-row>
            <el-col :span="12"><div style="text-align:center" class="">Date and Time</div></el-col>
             <el-col  :span="12"><div style="text-align:center" class="">Amount (MMK)</div></el-col>
        </el-row>
     
                 <el-collapse accordion>
                    
                        <el-collapse-item   v-for="(bet_list_detail,b) in bet_detail" :key="b">
                            <template slot="title">
                                
                                <div style="text-align:left"> {{bet_list_detail.date}}</div>
                                <div style="text-align:right">{{bet_list_detail.result_amount}}</div>
                            </template>

                            <el-row>
                                <el-col :span="12">
                                   <p style="text-align:right">Name :</p>
                                 
                                </el-col>
                                <el-col :span="12">
                                      <p style="text-align:left;padding-left:10px">{{bet_list_detail.user_name}}</p>
                                </el-col>
                            </el-row>
                             <el-row>
                                <el-col :span="12">
                                   <p style="text-align:right">Phone :</p>
                                 
                                </el-col>
                                <el-col :span="12">
                                      <p style="text-align:left;padding-left:10px">{{bet_list_detail.user_phone}}</p>
                                </el-col>
                            </el-row>
                             <el-row>
                                <el-col :span="12">
                                   <p style="text-align:right">No :</p>
                                 
                                </el-col>
                                <el-col :span="12">
                                      <p style="text-align:left;padding-left:10px">{{bet_list_detail.number}}</p>
                                </el-col>
                            </el-row>
                             <el-row>
                                <el-col :span="12">
                                   <p style="text-align:right">Odds :</p>
                                 
                                </el-col>
                                <el-col :span="12">
                                      <p style="text-align:left;padding-left:10px">{{bet_list_detail.odds}}</p>
                                </el-col>
                            </el-row>
                             <el-row>
                                <el-col :span="12">
                                   <p style="text-align:right">Amount :</p>
                                 
                                </el-col>
                                <el-col :span="12">
                                      <p style="text-align:left;padding-left:10px"> {{bet_list_detail.amount}}</p>
                                </el-col>
                            </el-row>
                             <el-row>
                                <el-col :span="12">
                                   <p style="text-align:right">Win or Lose Amount :</p>
                                 
                                </el-col>
                                <el-col :span="12">
                                      <p style="text-align:left;padding-left:10px"> {{bet_list_detail.result_amount}}</p>
                                </el-col>
                            </el-row>

                        </el-collapse-item>
                   
                </el-collapse>
        
        
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
        padding:0 10px;
       
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
    .bet_detail .el-collapse-item__wrap {
        background-color: #00000029;
    }
     .el-collapse .el-row {
        border-bottom:1px solid #b8b8b8 !important;
        padding-top:15px;
    }

</style>

<script>
 import axios from 'axios'
export default {
    data() {
        return {
           
            bet_detail:'',
            
          
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

        let bet_date = localStorage.getItem('bet_date');
         console.log(token);
        console.log(bet_date);
            axios.get("https://build.seinlucky.com/api/v1/historyByDate?date="+bet_date,
                {headers: {
                            "Authorization": "Bearer "+token
                        }
                    })
            
                .then(response => {
                    console.log(this.bet_detail = response.data.data)
            })
     }
}
</script>
