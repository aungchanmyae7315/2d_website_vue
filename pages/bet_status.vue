<template>
   <div class="main_container bet_status">
      <el-header>
           <!-- <nuxt-link  :to="`${$t('me')}?lang=${$store.state.locale}`"> -->
                <el-page-header  @back="goBack" title=""  :content="`${$t('bet_status_title')}`">
                   
                </el-page-header>
                <p class="time_status" >
                    <span>{{this.time_status}} Section</span>
                </p>
    
      </el-header>
      <div class="bet_status_tag">
           <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="2D" name="first">
             <table class="table" style="width:100%" >
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
        </el-tab-pane>
         <el-tab-pane label="3D" name="second">
               <table class="table" style="width:100%" >
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
        </el-tab-pane>
       </el-tabs>
      </div>
        

      
        <div style="text-align:center;padding:20px;">
            <nuxt-link :to="`${$t('/bet_history_btn')}?lang=${$store.state.locale}`">
                <el-button class="bet_history_btn" type="info" round>{{$t('Click to see Bet History')}}</el-button>
            </nuxt-link>
        </div>
       
     
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
        top:44px;
        font-size:12px; 
        left:0;
        
    }
     .bet_status_tag .el-tabs__nav {
        width:50% !important;
        text-align: center;
    }
    .bet_status_tag .el-tabs--top .el-tabs__item.is-top:last-child {
        width:100%;
         padding:0;
    }
    .bet_status_tag .el-tabs--top .el-tabs__item.is-top:nth-child(2) {
        border-right:1px solid #b8b8b8;
        width:100%;
        padding:0;
    }
     .bet_status_tag .table th {
        border:0;
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
            bet_stauts_threed:'',
            dialogVisible: false,
            time_status:'',
            time:this.time_status,
             activeName: 'first'
        }
    },
    methods: {
        goBack() {
             this.$router.push(`/me?lang=${this.$store.state.locale}`); 
         },
          handleClick(tab, event) {
            console.log(tab, event);
        }
   
    
       
    },
      created() {

         let token = localStorage.getItem('token');
        
        
                this.$axios.get("/v2/v1/betStatus",
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
                 this.$axios.get("/v2/v1/threed/betStatus",
                    {headers: {
                               "Authorization": "Bearer "+token
                         }
                        })
                    .then(response => {
                          this.$nuxt.$loading.finish()
                        console.log(response.data.data)
                     this.bet_stauts_threed = response.data.data  
                    this.time_status = response.data.time
                   // console.log(this.time_stauts)
                })
     }
}
</script>