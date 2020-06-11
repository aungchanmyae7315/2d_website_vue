<template>
    <main class="remark">
       <el-header>
           <!-- <nuxt-link  :to="`${$t('bet')}?lang=${$store.state.locale}`"> -->
               <el-page-header title="" @back="goBack"  content="ထိုးဂဏာန်းအတည်ပြုစာရင်း">
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
                <h6>ထိုးဂဏာန်းအတည်ပြုစာရင်း</h6>
                <el-card class="point_amount">
                       <p> လက်ကျန်ငွေ</p> 
                       <h6>{{this.myWallet}} {{$t('kyat')}}</h6>
                </el-card>
                <!-- <el-card v-if="radio == 1" class="point_amount">
                     <el-radio v-model="radio" label="2" >
                         <div>
                                <img src="~static/images/point_t_icon.png"  alt="">
                               
                         </div>
                       
                         <p> လက်ကျန်ပွိုင့်</p>
                         <h6> {{this.myPointWallet}} </h6>
                    </el-radio>
                       <el-divider direction="vertical"></el-divider>
                    <el-radio v-model="radio" label="1">
                        <div>
                            <img src="~static/images/amount_icon.png"  alt="">
                          
                        </div>
                        
                       <p> လက်ကျန်ငွေ</p> 
                       <h6>{{this.myWallet}} {{$t('kyat')}}</h6>
                        
                    </el-radio>
                   
                </el-card>
                <el-card v-else class="point_amount">
                     <el-radio v-model="radio" label="2" >
                         <div>
                                
                                <img src="~static/images/point_icon.png"  alt="">
                         </div>
                       
                         <p> လက်ကျန်ပွိုင့်</p>
                         <h6> {{this.myPointWallet}} </h6>
                    </el-radio>
                       <el-divider direction="vertical"></el-divider>
                    <el-radio v-model="radio" label="1">
                        <div>
                           
                            <img src="~static/images/amount_t_icon.png"  alt="">
                        </div>
                        
                       <p> လက်ကျန်ငွေ</p> 
                       <h6>{{this.myWallet}} {{$t('kyat')}}</h6>
                        
                    </el-radio>
                   
                </el-card> -->
                

                 <div class="btn_group">
                     
                        
                            
                          <el-button  :disabled='submitted'  type="submit"  @click="submit_bet" class="bet_submit" round>  {{$t('Bet')}}</el-button>
                          <!-- <el-button v-else :disabled='submitted'  type="submit"  @click="submit_point" class="bet_submit" round>  {{$t('Bet')}}</el-button> -->
                  
                    
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
  mounted() {
      this.$nextTick(() => {
      this.$nuxt.$loading.start()
      }) 
    },
    data() {
        return {
          bet_amount: localStorage.getItem('bet_amount'),
          name :'',
          phone:'',
          bet_odds:'',
          submitted:false,
          radio: '1',
          profile:'',
          myWallet:'',
          myPointWallet:''
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
                      this.$nuxt.$loading.finish()
                      this.bet_odds = response.data
              })
          let token = localStorage.getItem('token');
        if(token) {
             this.$axios.get("/v2/v1/profile",
                    {headers: {
                               "Authorization": "Bearer "+token
                         }
                        })
                    .then(response => {
                        this.profile = response.data.data
                        this.myWallet = this.thousands_separators(this.profile.wallet)
                        this.myPointWallet = this.thousands_separators(this.profile.point)
                })
        }      
    },
    computed: {
        sumTotal() {
            this.bet_amount
        }
    },
    
     methods: {
       thousands_separators(num){
          var num_parts = num.toString().split(".");
          num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          return num_parts.join(".");
    },
      goBack() {
             this.$router.push(`/bet?lang=${this.$store.state.locale}`); 
         },
       back_bet() {
         
         localStorage.removeItem('odds');
           this.$router.push(`/bet?lang=${this.$store.state.locale}`); 
       },
       
       submit_bet() {
             this.submitted = true
          let token = localStorage.getItem('token');

                var data = {
                    client_name:this.name,
                    client_phone:this.phone,
                    twod_id:  localStorage.getItem('check_btn'),
                    amount: localStorage.getItem('bet_amount') ,
                }
          this.$axios.post("/v2/v1/2d_web/bet",
                           data,
                    {
                        headers: {
                               "Authorization": "Bearer "+token
                         }, 
                        })
                    .then(response => {
                    this.res_mor_error = response.data.status
                    if(this.res_mor_error == "morning"  ) {
                         this.$message({
                            showClose: true,
                          message: response.data.data,
                          type: 'warning',
                        //   duration:0
                        });
                    }else if(response.data.status ==  2) {
                        this.$message({
                            showClose: true,
                          message: this.$t('amount_invalid'),
                          type: 'warning',
                        //   duration:0
                        });
                    }else if (response.data.status == 6) {
                       this.$message({
                            showClose: true,
                          message: response.data.data,
                          type: 'warning',
                           duration:10000
                        });
                    }else if (response.data.status == 7) {
                       this.$message({
                            showClose: true,
                          message: response.data.data,
                          type: 'warning',
                           duration:10000
                        });
                    }
                    else if (response.data.status == 8) {
                       this.$message({
                            showClose: true,
                          message: response.data.data,
                          type: 'warning',
                           duration:10000
                        });
                    }
                    else {
                         this.$router.push(`/bet_success?lang=${this.$store.state.locale}`);
                    }  
                })
                .catch(error => {
                   this.$message({
                            showClose: true,
                          message: 'catch error',
                          type: 'warning',
                        });
                });
               
       },
    //     submit_point() {
    //       let token = localStorage.getItem('token');

    //             var data = {
    //                 client_name:this.name,
    //                 client_phone:this.phone,
    //                 twod_id:  localStorage.getItem('check_btn'),
    //                 point: localStorage.getItem('bet_amount') ,
    //             }    
    //         this.$axios.post("/v2/v1/2d_point/bet",
    //                        data,
    //                 {
    //                     headers: {
    //                            "Authorization": "Bearer "+token
    //                      },
                          
    //                     })
                
    //                 .then(response => {
    //                 this.res_mor_error = response.data.status
    //                 if(this.res_mor_error == "morning"  ) {
    //                      this.$message({
    //                         showClose: true,
    //                       message: response.data.data,
    //                       type: 'warning',
    //                     //   duration:0
    //                     });
    //                 }else if(response.data.status ==  4) {
    //                     this.$message({
    //                         showClose: true,
    //                       message: this.$t('amount_invalid'),
    //                       type: 'warning',
    //                     //   duration:0
    //                     });
    //                 }else if (response.data.status == 6) {
    //                    this.$message({
    //                         showClose: true,
    //                       message: response.data.data,
    //                       type: 'warning',
    //                       duration:10000
    //                     });
    //                 }
    //                 else {
    //                       this.$router.push(`/bet_success?lang=${this.$store.state.locale}`);
    //                 }  
    //             })
    //             .catch(error => {
    //                this.$message({
    //                         showClose: true,
    //                       message: 'ထီထိုးငွေပမာဏကို အနည်းဆုံး ၁၀၀ ထိုးရပါမည်',
    //                       type: 'warning',
    //                     });
    //             });
    //    },     
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
    margin:20px auto;
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
    margin-bottom:40px;
    background: #fff;
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
    .point_amount img{
        width:40px;
        padding-bottom:15px;
        height:auto;
    }
    .point_amount .el-radio__input.is-checked+.el-radio__label {
        color:#158220;
        font-weight: bold;
    }
    .point_amount .el-radio__input {
        display: none;
    }
    .point_amount .el-divider--vertical {
        height:3em;
        bottom:35px;
    }
    .point_amount .el-radio , .el-radio__label {
        margin:0;
        padding:0 30px;
        line-height: 0;
    }
    .point_amount .el-card__body {
        padding:10px 0 0 0;
    }


</style>
