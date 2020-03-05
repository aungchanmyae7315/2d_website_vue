<template>
        <main>
            <div class="withdrawal">
                <div class="longText" id="hidingScrollBar">
                    <div class="hideScrollBar_refel">
                <el-header>
                     <!-- <nuxt-link :to="`${$t('wallet')}?lang=${$store.state.locale}`"> -->
                           <el-page-header @back="goBack" title=""  :content="`${$t('Withdrawal')}`">
                         </el-page-header>
                     <!-- </nuxt-link> -->

                </el-header>
                <p>{{$t('Choose your receiving account')}}</p>
                <el-form :model="ruleForm" ref="ruleForm"  class="demo-ruleForm" >
                <el-card>
                  
                        <ul class="choose_pay" v-for="(bank, i) in bank_type" :key="i">
                           
                            <li >   
                                <el-form-item 
                               
                                prop="radio1"
                                :rules="[
                                    { required: true, message: 'Bank option is required'},
                                    
                                ]"
                                
                                >  
                                    <!-- {{bank}} -->
                                    <div @click="id_bank(bank.id)" >

                                        <el-radio-group v-model="ruleForm.radio1">
                                        <img :src="bank.bank_icon" alt="">
                                        <el-radio-button    :label="bank.bank_name"></el-radio-button> 
                                        </el-radio-group>
                                    </div>
                                </el-form-item>
                                 <!-- <img src="~/static/images/topup_withdraw/kbz_img.png" alt="">
                                 <el-radio-button  label="KBZ Bank"></el-radio-button> -->
                            </li>
                            
                        </ul>

                  
                </el-card>
                
                    <el-form-item
                    :label="$t('Receiving Account')"
                    prop="card_number"
                    :rules="[
                        { required: true, message: 'Bank Card Number is required'},
                        
                    ]"
                    
                    >  
                    <!-- <el-form-item label="Bank Card Number" class="tran_input" > -->
                        <el-input   type="number" :placeholder="$t('Enter Card Number')" v-model="ruleForm.card_number"></el-input>
                    </el-form-item>
                    <!-- <el-form-item label="Withdraw Amount" class="tran_amount tran_input" > -->
                    <el-form-item class="tran_amount tran_input"
                        :label="$t('Cash Amount')"
                        prop="tran_amount"
                        :rules="[
                            { required: true, message: 'Withdraw Amount is required'},
                            
                        ]"
                        
                        >  
                        <el-input   type="number" :placeholder="$t('enter_cash_amount')" v-model="ruleForm.tran_amount" ></el-input>
                    </el-form-item>
                    <!-- <el-form-item label="Password" class="password tran_input" > -->
                        <el-form-item class="tran_amount tran_input"
                            :label="$t('Password')"
                            prop="password"
                            :rules="[
                                { required: true, message: 'Password is required'},
                                
                            ]"
                            
                            >  
                        <el-input type="text" show-password :placeholder="$t('Password')" v-model="ruleForm.password" ></el-input>
                    </el-form-item>
                  
              
                
                     <el-button round @click="withdrawal('ruleForm')">{{$t('Confirm')}}</el-button>
                  </el-form>
                    </div>
                </div>
                
            </div>
        </main>
</template>
<style>
     .withdrawal {
        padding:0 20px;
    }
    .withdrawal .el-header {
       background-color :#fff;

    }
    .el-page-header__left {
        margin:0;
    }
    .withdrawal .el-page-header {
        line-height: 43px;
        color:#000;
       
    }
    .withdrawal .el-page-header__content {
        color:#000;
        font-weight: bold;
    }
    .tran_input .el-input__inner {
        background-color: #E6E6E6;
        color:#666666;
    }
   
    .withdrawal p {
        color:#666666;
    }
    .withdrawal .choose_pay {
        list-style: none;
        padding:0;
        margin:10px auto;
    }
    .choose_pay img {
        width:40px;
        height: auto;
       
        -webkit-box-shadow: 1px 1px 15px -6px rgba(0,0,0,0.75);
        -moz-box-shadow: 1px 1px 15px -6px rgba(0,0,0,0.75);
        box-shadow: 1px 1px 15px -6px rgba(0,0,0,0.75);
    }
    .withdrawal .el-radio-button__orig-radio:checked+.el-radio-button__inner {
        color:#158220;
        font-weight: bold;
        border:0;
        background: unset;
        box-shadow:unset;
    }

      .withdrawal .el-radio-button__orig-radio:checked+.el-radio-button__inner::after {
          content: "\2713";

        font-size: 15px;
        width: 20px;
        margin-left:40px;
        height: 20px;
        float: right;
       
      }
    .withdrawal .el-radio-button__inner {
        border:0;
    }
    .withdrawal .el-form-item__label {
        color:#000;
    }
     .withdrawal .el-button.is-round{
        
        position: relative;
        bottom:0;
        max-width: 480px;
        width:100%;
        margin-bottom:20px;
        background-color: #158220;
        color:#fff;
    }
</style>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            ruleForm: {
                card_number:'',
                tran_amount:'',
                password:'',
                radio1:'',

          },
            
            bank_type:'',
            
            
        }
    },
    methods: {
        goBack() {
             this.$router.push(`wallet?lang=${this.$store.state.locale}`); 
         },
        id_bank(data) {
            this.bank_id = data;
           
        },
       
        withdrawal(formName) {

            this.$refs[formName].validate((valid) => {
            if (valid) {
                let token = localStorage.getItem('token');
     
                var data = {
                    bank_type_id:this.bank_id,
                    card_number:this.ruleForm.card_number,
                    amount: this.ruleForm.tran_amount,
                    password: this.ruleForm.password,
                }
       
                this.$axios.post("/v1/withdraw",
                           data,
                    {
                           

                        headers: {
                               "Authorization": "Bearer "+token
                         },
                          
                        })
                
                    .then(response => {
                     console.log(this.with = response.data)
                      this.res_amount = response.data.message,
                 
                     this.res_data = response.data.data
                    
                      if(this.res_amount == "fail" ) {
                  this.$notify({
                    title: 'Warning',
                    message: this.res_data,
                type: 'warning'
                  });
                }else {
                     this.$router.push(`withdraw_success?lang=${this.$store.state.locale}`); 
                  
                }
                })
             
                 
            
            } else {
            
                console.log('error submit!!');
                return false;
            }
            });   
             
        }
    },
    created() {
        this.$axios.get("/v1/bank-type")
    
            
                .then(response => {
                    console.log(this.bank_type = response.data.data)
            });
     },
}
</script>