<template>
    <main class="remark">
       <el-header>
           <!-- <nuxt-link  :to="`${$t('bet')}?lang=${$store.state.locale}`"> -->
               <el-page-header title="" @back="goBack"  :content="`${$t('remark_title')}`">
                </el-page-header>
           <!-- </nuxt-link> -->
      </el-header>
         <div class="longText_remark" id="hidingScrollBar_remark">
            <div class="hideScrollBar_remark">
               <!-- <h4>{{$t('remark_title')}}</h4>   -->
                <!-- <el-card class="box-card">
                      <el-form    class="demo-ruleForm" >
                          <el-form-item
                                :label="$t('name')"
                                prop="name"
                                
                                
                                >  
                                    <el-input type="text" :placeholder="$t('name')" v-model="name"  ></el-input>
                                
                                </el-form-item>
                             <el-form-item
                                 :label="$t('phone')"
                                prop="phone"
                               
                                >  
                                    <el-input type="number" :placeholder="$t('Phone_placeholder')" v-model="phone"  ></el-input>
                                
                                </el-form-item>
                      </el-form>
                   
                </el-card> -->
     
                <el-card>

                <table class="table" >
                    <thead>
                        <tr>
                        <th>{{$t('no')}}</th>
                         <th>{{$t('odds')}}</th>
                         <th>{{$t('Amount')}}</th>
                       
                        </tr>
                    </thead>
                    <tbody  >
                        <tr  v-for="(odd,o) in bet_odds" :key="o">
                      
                        <th :id="odd.id">{{odd.number}}</th>  
                         <th>{{odd.times}}</th>  
                         <th :id="odd.id">{{bet_amount}}</th> 
                      
                        </tr>

                          <tr>
                              <th>{{$t('total')}}</th>
                              <th></th>
                              <th style="text-align:right">{{this.bet_amount * this.bet_odds.length}} {{$t('kyat')}}</th>
                          </tr>
                    </tbody>
          </table>
                 
                 
                </el-card> 

                 <div class="btn_group">
                     
                  
                          <el-button  type="submit"  @click="submit_bet" class="bet_submit" round>  {{$t('Bet')}}</el-button>
                  
                    
                  </div>
            </div>
         </div>
    </main>
</template>


<script>
import axios from 'axios'
export default {

  getters: {},
  mutations: {},
  actions: {},
  mounted () {

      this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
},
    data() {
        return {
          bet_amount: localStorage.getItem('bet_amount'),
          name :'',
          phone:'',
          bet_odds:'',

        }
    },
    created() {
      
           var data= {
              bets:localStorage.getItem('check_btn'),
          }
          this.$axios.post("/v2/v1/get_odds",data,
                  {
              
                      })
                  .then(response => {
                    console.log(response)
                  this.bet_odds = response.data

              })
    
    },
    computed: {
        sumTotal() {
            this.bet_amount
        }
    },
    
     methods: {
      goBack() {
             this.$router.push(`/bet?lang=${this.$store.state.locale}`); 
         },
       back_bet() {
         
         localStorage.removeItem('odds');
           this.$router.push(`/bet?lang=${this.$store.state.locale}`); 
       },
       
       submit_bet() {
          let token = localStorage.getItem('token');

                var data = {
                    client_name:this.name,
                    client_phone:this.phone,
                    twod_id:  localStorage.getItem('check_btn'),
                    amount: localStorage.getItem('bet_amount') ,
                }
                console.log(data)
          this.$axios.post("/v2/v1/2d_web/bet",
                           data,
                    {
                           

                        headers: {
                               "Authorization": "Bearer "+token
                         },
                          
                        })
                
                    .then(response => {
                     
                      this.res_error = response.data.message
                      this.res_message = response.data.data
                
                
                      if(this.res_error == 'fail') {
                         this.$message({
                            showClose: true,
                          message: this.$t('amount_invalid'),
                          type: 'warning',
                        //   duration:0
                        });
                      }else {
                       
                          this.$router.push(`/bet_success?lang=${this.$store.state.locale}`);
                      }
                      // this.bet = response.data.data
                    
                })
               
       },
     
      
    }
}
</script>
<style>
.el-message .el-icon-warning {
    margin:0 10px;
}
    .remark {
        text-align: center;
     
        max-width: 480px;
        width:100%;
        height:100vh;
    }
    .remark h4 {
        font-size: 19px;
        font-weight: bold;
        margin-top:30px;
    }
.remark .el-card {
    margin:50px auto;
    border-radius: 17px;
}
.remark .el-form-item {
  margin-bottom:0;
}

.el-button--default {
 
  background-color:#EEEEEE;
  color:#000;
}

.remark .btn_group {
   position: fixed;
    right: 0;
    bottom: 22px;
    background: #fff;
    left: 0;
    bottom: 0;
    padding: 20px;
    max-width: 480px;
    width:100%;
}
.bet_submit {
  background-color:#158220;
  color:#fff;
  font-weight: bold;
  max-width: 480px;
  width:100%;
}
.longText_remark{
  max-width: 480px;
  width: 100%;
  height: 100%;
  margin: auto;
  /* text-align: justify; */
}

/*------THE TRICK------*/
#hidingScrollBar_remark{
  overflow: hidden;
}
.hideScrollBar_remark{
  width: 100%;
  height: 100%;
  overflow: auto;
  margin-left: 15px;
  padding-bottom:50px;
  padding-right: 28px; /*This would hide the scroll bar of the right. To be sure we hide the scrollbar on every browser, increase this value*/

 
}
.remark .el-header {
       background-color :#2A612D;

    }
    .el-page-header__left {
        margin:0;
    }
    .remark .el-page-header {
        line-height: 43px;
        color:#fff;
        padding:0 20px;
    }
    .remark .el-page-header__content {
        color:#fff;
        font-weight: bold;
    }
</style>