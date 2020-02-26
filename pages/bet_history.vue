<template>
   <div class="main_container bet_history">
      <el-header>
           <nuxt-link  :to="`${$t('bet_status')}?lang=${$store.state.locale}`">
                <el-page-header content="Bet History">
                
                </el-page-header>
           </nuxt-link>
        
      </el-header>

       <table class="table">
            <thead>
                <tr>
                <th>Date</th>
                <th style="text-align:right">Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr @click="bet_date(bet_list_hist.date)" v-for="(bet_list_hist,b) in bet_historys" :key="b" >
              
                <th scope="row">{{bet_list_hist.date}}</th>  
                <td style="text-align:right">{{bet_list_hist.result_amount}}</td>  
              
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
</style>

<script>
 import axios from 'axios'
export default {
    data() {
        return {
           
            bet_historys:'',
           
        }
    },
    methods: {
        handleClose(done) {
       
      },
    
        // goBack() {
        //     this.$router.push('/me')
        // },
        bet_date(data) {
          this.$store.commit('bet_date', data)
           this.$router.push('/bet_detail')

        },
    },
  
      created() { 

         let token = localStorage.getItem('token');
        
        
                axios.get("https://build.seinlucky.com/api/v1/history",
                    {headers: {
                               "Authorization": "Bearer "+token
                         }
                        })
                    .then(response => {
                     this.bet_historys = response.data.data   
                })
     }
}
</script>
