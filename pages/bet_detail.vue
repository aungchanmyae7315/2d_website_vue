<template>
   <div class="main_container bet_detail">
      <el-header>
          <nuxt-link  :to="`${$t('bet_history')}?lang=${$store.state.locale}`">
           <el-page-header :title="`${$t('back')}`"  :content="`${$t('bet_detail_title')}`">
            
            </el-page-header>
          </nuxt-link>
        
      </el-header>
       <el-row style="padding:23px;">
            <el-col :span="12"><div class="">{{$t('date_time')}}</div></el-col>
             <el-col  :span="12"><div style="text-align:right;padding-right:20px" class="">{{$t('Amount')}}</div></el-col>
        </el-row>
     
                 <el-collapse accordion>
                    
                        <el-collapse-item   v-for="(bet_list_detail,b) in bet_detail" :key="b">
                            <template slot="title">
                                
                                <div style="margin:0"> {{bet_list_detail.date}}</div>
                                <div style="margin-right:0;padding-right:20px">{{bet_list_detail.result_amount}}</div>
                            </template>

                            <el-row>
                                <el-col :span="12">
                                   <p style="text-align:right">{{$t('name')}} :</p>
                                 
                                </el-col>
                                <el-col :span="12">
                                      <p style="text-align:left;padding-left:10px">{{bet_list_detail.user_name}}</p>
                                </el-col>
                            </el-row>
                             <el-row>
                                <el-col :span="12">
                                   <p style="text-align:right">{{$t('phone')}} :</p>
                                 
                                </el-col>
                                <el-col :span="12">
                                      <p style="text-align:left;padding-left:10px">{{bet_list_detail.user_phone}}</p>
                                </el-col>
                            </el-row>
                             <el-row>
                                <el-col :span="12">
                                   <p style="text-align:right">{{$t('no')}} :</p>
                                 
                                </el-col>
                                <el-col :span="12">
                                      <p style="text-align:left;padding-left:10px">{{bet_list_detail.number}}</p>
                                </el-col>
                            </el-row>
                             <el-row>
                                <el-col :span="12">
                                   <p style="text-align:right">{{$t('odds')}} :</p>
                                 
                                </el-col>
                                <el-col :span="12">
                                      <p style="text-align:left;padding-left:10px">{{bet_list_detail.odds}}</p>
                                </el-col>
                            </el-row>
                             <el-row>
                                <el-col :span="12">
                                   <p style="text-align:right">{{$t('Amount')}} :</p>
                                 
                                </el-col>
                                <el-col :span="12">
                                      <p style="text-align:left;padding-left:10px"> {{bet_list_detail.amount}}</p>
                                </el-col>
                            </el-row>
                             <el-row>
                                <el-col :span="12">
                                   <p style="text-align:right">{{$t('win_lose_amount')}} :</p>
                                 
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
    .bet_detail .el-collapse-item__wrap {
        background-color: #00000029;
    }
     .el-collapse .el-row {
        border-bottom:1px solid #b8b8b8 !important;
        padding-top:15px;
    }
    .el-collapse-item__arrow {
        margin:0;
    }
    .el-collapse-item__header {
        padding:0 20px;
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
    
  
    },
      created() {

        let token = localStorage.getItem('token');

        let bet_date = localStorage.getItem('bet_date');
            axios.get("https://build.seinlucky.com/api/v1/historyByDate?date="+bet_date,
                {headers: {
                            "Authorization": "Bearer "+token
                        }
                    })
            
                .then(response => {
                    this.bet_detail = response.data.data
            })
     }
}
</script>
