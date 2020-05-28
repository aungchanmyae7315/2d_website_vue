<template>
   <div class="main_container bet_history">
      <el-header>
           <!-- <nuxt-link  :to="`${$t('bet_status')}?lang=${$store.state.locale}`"> -->
                <el-page-header @back="goBack" title=""  :content="`${$t('bet_history_title')}`">
                
                </el-page-header>
           <!-- </nuxt-link> -->
         <p style="padding:0 20px">{{$t('last_5day_bet_history')}}</p>
      </el-header>
       <!-- <div class="demo-image">
            <img src="~static/images/icons/seinlucky_logo.png" alt="" class="seinlucky_icon">
        <span  class="seinlucky_text">SeinLucky</span>
        </div> -->
        <br>
          <el-tabs v-model="activeName" @tab-click="handleClick">
               <el-tab-pane label="2D" name="first">

                    <table class="table">
                            <thead>
                                <tr>
                                <th>{{$t('date')}}</th>
                                <th style="text-align:right">{{$t('Amount')}}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr @click="bet_date(bet_list_hist.date)" v-for="(bet_list_hist,b) in bet_historys" :key="b" >
                            
                                <th scope="row">{{bet_list_hist.date}}</th>  
                                <td style="text-align:right">{{bet_list_hist.amount}}</td>  
                            
                                </tr>
                            </tbody>
                        </table>
                </el-tab-pane>
                <el-tab-pane label="3D" name="second">

                    <table class="table">
                            <thead>
                                <tr>
                                <th>{{$t('date')}}</th>
                                <th style="text-align:right">{{$t('Amount')}}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr @click="bet_date(bet_list_hist.date)" v-for="(bet_list_hist,b) in bet_historys_threed" :key="b" >
                            
                                <th scope="row">{{bet_list_hist.date}}</th>  
                                <td style="text-align:right">{{bet_list_hist.amount}}</td>  
                            
                                </tr>
                            </tbody>
                        </table>
                </el-tab-pane>
          </el-tabs>

    </div>
</template>
<style>
    .bet_history .el-header {
       background-color :#fff;
      
    }
       .bet_history .table td, .table th {
        border:0 ;
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
      .bet_history .el-tabs__nav {
        width:50% !important;
        text-align: center;
    }
    .bet_history .el-tabs--top .el-tabs__item.is-top:last-child {
        width:100%;
        padding:0;
    }
    .bet_history .el-tabs--top .el-tabs__item.is-top:nth-child(2) {
        border-right:1px solid #b8b8b8;
        width:100%;
        padding:0;
    }
     .bet_history .table th {
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
           
            bet_historys:'',
            bet_historys_threed:'',
            activeName: 'first'
           
        }
    },
    methods: {
        goBack() {
             this.$router.push(`/me?lang=${this.$store.state.locale}`); 
         },
        handleClick(tab, event) {
            console.log(tab, event);
        },
    
     
        bet_date(data) {
          this.$store.commit('bet_date', data)
       
            this.$router.push(`/bet_detail?lang=${this.$store.state.locale}`); 

        },
    },
  
      created() { 

         let token = localStorage.getItem('token');
        
        
                this.$axios.get("/v1/history",
                    {headers: {
                               "Authorization": "Bearer "+token
                         }
                        })
                    .then(response => {
                        console.log(response)
                        this.$nuxt.$loading.finish()
                     this.bet_historys = response.data.data   
                })
                  this.$axios.get("/v2/v1/threed/history",
                    {headers: {
                               "Authorization": "Bearer "+token
                         }
                        })
                    .then(response => {
                        console.log(response)
                        this.$nuxt.$loading.finish()
                     this.bet_historys_threed = response.data.data   
                })
     }
}
</script>
