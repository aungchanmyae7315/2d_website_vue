<template>
   
    <section>
        <div class="withdrawal">
            <el-header>
                 <!-- <nuxt-link  :to="`${$t('wallet')}?lang=${$store.state.locale}`"> -->
                 <el-page-header title="" @back="goBack"  :content="`${$t('Withdrawal')}`">
                    
                </el-page-header>
                 <!-- </nuxt-link> -->
            </el-header>

                 <p>{{$t('Choose your receiving account')}}</p>
               <el-card v-if="radio == 1" class="point_amount">
                     <el-radio v-model="radio" label="2" >
                         <div>
                                <img src="~static/images/kbz_t.jpg"   alt="">
                               
                         </div>
                    </el-radio>
                     
                    <el-radio v-model="radio" label="1">
                        <div>
                            <img src="~static/images/wavepay.jpg"   class="active_img" alt="">
                          
                        </div>
                    </el-radio>
                     <el-radio v-model="radio" label="3" >
                         <div>
                                
                                <img v-if="radio == 3" src="~static/images/wavepay_t.jpg"   alt="">
                                 <img v-else src="~static/images/wavepay.jpg"  alt="">
                         </div>
                    </el-radio>
                   
                </el-card>
                
                <el-card v-else-if="radio == 2" class="point_amount">
                 
                  
                     <el-radio v-model="radio" label="2" >
                         <div>
                                
                                <img v-if="radio == 2" src="~static/images/kbz.jpg"  alt=""  class="active_img">
                                 <img v-else src="~static/images/kbz_t.jpg"  alt="">
                         </div>
                    </el-radio>
                      
                    <el-radio v-model="radio" label="1">
                        <div>
                           
                            <img src="~static/images/wavepay_t.jpg"  alt="">
                        </div>
                        
                    </el-radio>
                     <el-radio v-model="radio" label="3" >
                         <div>
                                
                                <img v-if="radio == 3" src="~static/images/wavepay_t.jpg"  alt="">
                                 <img v-else src="~static/images/wavepay.jpg"  alt="">
                         </div>
                    </el-radio>
                   
                </el-card>
                   <el-card v-else class="point_amount">
                 
                  
                     <el-radio v-model="radio" label="2" >
                         <div>
                                
                                <img v-if="radio == 2" src="~static/images/kbz.jpg"    alt="">
                                 <img v-else src="~static/images/kbz_t.jpg" alt="">
                         </div>
                    </el-radio>
                      
                    <el-radio v-model="radio" label="1">
                        <div>
                           
                            <img src="~static/images/wavepay_t.jpg"  alt="">
                        </div>
                        
                    </el-radio>
                     <el-radio v-model="radio" label="3" >
                         <div>
                                
                                <img v-if="radio == 3" src="~static/images/wavepay_t.jpg"   class="active_img"  alt="">
                                 <img v-else src="~static/images/wavepay.jpg"  alt="">
                         </div>
                    </el-radio>
                   
                </el-card>
               

                 <div class="btn_group" v-if="radio == 1">
                       <el-form @submit.native.prevent :model="ruleForm" ref="ruleForm"  class="demo-ruleForm" >
                         <el-form-item
                                :label="$t('Receiving Account')"
                                prop="card_number"
                                :rules="[
                                    { required: true, message: $t('bank_card_number_required')},
                                    
                                ]">  
                            <el-input @keypress.enter.native="withdrawal('ruleForm')" @change="submitted = false"  type="number" :placeholder="$t('Enter Card Number')" v-model="ruleForm.card_number"></el-input>
                        </el-form-item>
                 
                        <el-form-item class="tran_amount tran_input"
                            :label="$t('Cash Amount')"
                            prop="tran_amount"
                            :rules="[
                                { required: true,  message: $t('withdraw_amount_required')},
                                
                            ]"
                            
                            >  
                            <el-input @keypress.enter.native="withdrawal('ruleForm')"   type="number" :placeholder="$t('enter_cash_amount')" v-model="ruleForm.tran_amount" ></el-input>
                        </el-form-item>
                        <el-form-item class="tran_amount tran_input"
                            :label="'SeinLucky '+$t('Password_placeholder')"
                            prop="password"
                            :rules="[
                                { required: true, message: $t('Password')},
                                
                            ]"
                            
                            >  
                            <el-input @keypress.enter.native="withdrawal('ruleForm')" type="text" show-password :placeholder="$t('Password')" v-model="ruleForm.password" ></el-input>
                        </el-form-item>
                      </el-form>
                       <el-button round @click="withdrawal('ruleForm')"  :disabled='submitted' >{{$t('Confirm')}}</el-button>
                   
                       
                  </div>
                  <div class="btn_group" v-else-if="radio == 2">
                      <el-form @submit.native.prevent :model="ruleForm" ref="ruleForm"  class="demo-ruleForm" >
                         <el-form-item
                                :label="$t('Receiving Account')"
                                prop="card_number"
                                :rules="[
                                    { required: true, message: $t('bank_card_number_required')},
                                    
                                ]">  
                            <el-input @keypress.enter.native="withdrawal('ruleForm')" @change="submitted = false"  type="number" :placeholder="$t('Enter Card Number')" v-model="ruleForm.card_number"></el-input>
                        </el-form-item>
                 
                        <el-form-item class="tran_amount tran_input"
                            :label="$t('Cash Amount')"
                            prop="tran_amount"
                            :rules="[
                                { required: true,  message: $t('withdraw_amount_required')},
                                
                            ]"
                            
                            >  
                            <el-input @keypress.enter.native="withdrawal('ruleForm')"   type="number" :placeholder="$t('enter_cash_amount')" v-model="ruleForm.tran_amount" ></el-input>
                        </el-form-item>
                        <el-form-item class="tran_amount tran_input"
                            :label="'SeinLucky '+$t('Password_placeholder')"
                            prop="password"
                            :rules="[
                                { required: true, message: $t('Password')},
                                
                            ]"
                            
                            >  
                            <el-input @keypress.enter.native="withdrawal('ruleForm')" type="text" show-password :placeholder="$t('Password')" v-model="ruleForm.password" ></el-input>
                        </el-form-item>
                      </el-form>
                       <el-button round @click="withdrawal('ruleForm')"  :disabled='submitted' >{{$t('Confirm')}}</el-button>
                  </div>
                    <div class="btn_group" v-else-if="radio == 3">
                         <el-form @submit.native.prevent :model="ruleForm" ref="ruleForm"  class="demo-ruleForm" >
                         <el-form-item
                                :label="$t('Receiving Account')"
                                prop="card_number"
                                :rules="[
                                    { required: true, message: $t('bank_card_number_required')},
                                    
                                ]">  
                            <el-input @keypress.enter.native="withdrawal('ruleForm')" @change="submitted = false"  type="number" :placeholder="$t('Enter Card Number')" v-model="ruleForm.card_number"></el-input>
                        </el-form-item>
                 
                        <el-form-item class="tran_amount tran_input"
                            :label="$t('Cash Amount')"
                            prop="tran_amount"
                            :rules="[
                                { required: true,  message: $t('withdraw_amount_required')},
                                
                            ]"
                            
                            >  
                            <el-input @keypress.enter.native="withdrawal('ruleForm')"   type="number" :placeholder="$t('enter_cash_amount')" v-model="ruleForm.tran_amount" ></el-input>
                        </el-form-item>
                         <el-form-item class="tran_amount tran_input"
                            label="ဆိုင်တွင်ငွေထုတ်ရန် ဂဏန်း(၆)လုံးသတ်မှတ်ပါ"
                            prop="code"
                            :rules="[
                                { required: true,  message: 'ဂဏန်း(၆)လုံးသတ်မှတ်ပါ'},
                                
                            ]"
                            
                            >  
                            <el-input @keypress.enter.native="withdrawal('ruleForm')"  pattern="/^-?\d+\.?\d*$/" onKeyPress="if(this.value.length==6) return false;"   type="number" placeholder="ငွေထုတ်ရန် ဂဏန်း(၆)လုံး" v-model="ruleForm.code" ></el-input>
                        </el-form-item>
                        <el-form-item class="tran_amount tran_input"
                            :label="'SeinLucky '+$t('Password_placeholder')"
                            prop="password"
                            :rules="[
                                { required: true, message: $t('Password')},
                                
                            ]"
                            
                            >  
                            <el-input @keypress.enter.native="withdrawal('ruleForm')" type="text" show-password :placeholder="$t('Password')" v-model="ruleForm.password" ></el-input>
                        </el-form-item>
                      </el-form>
                       <el-button round @click="withdrawal('ruleForm')"  :disabled='submitted' >{{$t('Confirm')}}</el-button>
                   
                       
                  
                  </div>
                  <div v-else>

                  </div>

            
        
        </div>
       
    </section>

</template>

<style>

    .withdrawal {
        padding:0 20px 50px  20px;
    }
    .withdrawal .el-dialog__header {
      padding:0;
    }
   
    .withdrawal .el-header {
       background-color :#fff;

    }
     .withdrawal .point_amount img{
        /* width:100%; */
        border-radius: 13px;
        height:70px;
       
    }
  
    .withdrawal  .el-radio__label {
      padding:0;
    }
   
    .active_img {
      padding:3px;
       border:2px solid #3A7D1F;
      border-radius: 13px;
        -webkit-box-shadow: -3px 3px 18px -7px rgba(0,0,0,0.75);
        -moz-box-shadow: -3px 3px 18px -7px rgba(0,0,0,0.75);
        box-shadow: -3px 3px 18px -7px rgba(0,0,0,0.75);
    }
   
    .withdrawal .point_amount .el-radio__input.is-checked+.el-radio__label {
        color:#158220;
        font-weight: bold;
    }
    .withdrawal .point_amount .el-radio__input {
        display: none;
    }

    .withdrawal .point_amount .el-radio , .el-radio__label {
        margin:0;
        padding:0px;
        line-height: 0;
    }
    .withdrawal .point_amount .el-card__body {
       text-align: center;
       padding:15px 0;
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
    .withdrawal .el-form-item__label {
        color:#000;
    }
   
    .withdrawal .el-button.is-round{
        position: relative;
        max-width: 480px;
        width:100%;
        background-color: #158220;
        color:#fff;
        margin-top:20px;
    }
    
.withdrawal .btn_group .el-form-item {
    margin-bottom: 0;
}
    
   
</style>

<script>
import axios from 'axios'
export default {

    mounted() {


      this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    });
      this.$axios.get("/v2/v1/smart_bank_type")
                .then(response => {
                   
                   this.bank_type = response.data.data

                   this.kbz_bank_id = this.bank_type[0].id
                    this.wavemoney_id = this.bank_type[1].id
                    this.shopwavemoney_id = this.bank_type[2].id
                    console.log(this.bank_type)
                   console.log(this.kbz_bank_id)
                    console.log(this.wavemoney_id)
                    console.log(this.shopwavemoney_id)
            });

    
    },
    data() {
        return { 
            radio: '',
     
           ruleForm: {
                card_number:'',
                tran_amount:'',
                password:'',
                code:'',

          },
          bank_type:'',
         submitted:false,
              
        }
    },
     created() {
      
         
        
    },
    methods: {
      

          goBack() {
             this.$router.push(`/wallet?lang=${this.$store.state.locale}`); 
         },
          withdrawal(formName) {
            
            this.submitted = true
            if(this.radio == 1) {
              this.bank_id =  this.wavemoney_id 
            }else if(this.radio == 2) {
              this.bank_id =  this.kbz_bank_id 
            }else if(this.radio == 3) {
                 this.bank_id =  this.shopwavemoney_id 
            }
            this.$refs[formName].validate((valid) => {
            if (valid) {
                 this.submitted = false
                let token = localStorage.getItem('token');
                console.log(this.bank_id)
                 if(this.radio == 1) {
                      var data = {
                    bank_type_id:this.bank_id,
                    card_number:this.ruleForm.card_number,
                    amount: this.ruleForm.tran_amount,
                    password: this.ruleForm.password,
                   
                }
            }else if(this.radio == 2) {
                 var data = {
                    bank_type_id:this.bank_id,
                    card_number:this.ruleForm.card_number,
                    amount: this.ruleForm.tran_amount,
                    password: this.ruleForm.password,
                   
                }
            }else if(this.radio == 3) {
                var data = {
                    bank_type_id:this.bank_id,
                    card_number:this.ruleForm.card_number,
                    amount: this.ruleForm.tran_amount,
                    password: this.ruleForm.password,
                    code:this.ruleForm.code
                }
            }
               
                console.log(data)
                this.$axios.post("/v2/v1/withdraw",
                           data,
                    {
                        headers: {
                               "Authorization": "Bearer "+token
                         },
                          
                        })
                    .then(response => {
                        console.log(response)
                        this.res_status = response.data.status,
                        this.res_data_status = response.data.data
                    if(this.res_status == 3 ) {
                         this.submitted = false
                            this.$notify({
                               duration:0,
                                message:this.$t('password_invalid'),
                            type: 'warning'
                            }); 
                    }else if(this.res_status == 4) {
                        this.submitted = false
                            this.$notify({
                               duration:0,
                                message:this.$t('you_are_submitting_withdrawal'),
                            type: 'warning'
                            }); 

                    }else if(this.res_status == 2) {
                          this.submitted = false
                              this.$notify({
                               
                                message:this.$t('amount_invalid'),
                                type: 'warning'
                            }); 
                    }else if(this.res_status == 1 ) {
                              this.submitted = false
                            this.$notify({
                               
                                message:this.$t('amount_invalid'),
                                type: 'warning'
                            }); 
                    }else {
                           
                        this.submitted = true
                        this.$router.push(`/withdraw_success?lang=${this.$store.state.locale}`); 
                    
                    }
                })
             
                 
            
            } else {
               
                console.log('error submit!!');
                return false;
            }
            });  
          }

 
            
            
    
    },
    
    
}
</script>
