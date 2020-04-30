<template>
   
    <section>
        <div class="topup">
            <el-header>
                 <!-- <nuxt-link  :to="`${$t('wallet')}?lang=${$store.state.locale}`"> -->
                 <el-page-header title="" @back="goBack"  :content="`${$t('Top Up')}`">
                    
                </el-page-header>
                 <!-- </nuxt-link> -->
            </el-header>

               <p>{{$t('please_transfer_top-up_money_to_one')}}</p>

        <p>{{$t('upload_he_image_of_the_bank')}}</p>

        

            <el-row  v-if="radio == 1" class="point_amount">
                <el-col :span="12" style="text-align:right">
                      <el-radio v-model="radio" label="2" >
                         <div>
                                <img src="~static/images/kbz_t.jpg"  alt="">
                               
                         </div>
                       
                       
                    </el-radio>
                </el-col>
                <el-col :span="12" style="text-align:left">
                    <el-radio v-model="radio" label="1">
                        
                          
                            <img src="~static/images/wavepay.jpg" class="active_img"  alt="">
                          
                      

                    </el-radio>
                </el-col>
             </el-row>
             <el-row v-else class="point_amount">
                  <el-col :span="12" style="text-align:right" >
                    <el-radio v-model="radio" label="2"  >
                        
                                
                                <img src="~static/images/kbz.jpg" class="active_img"  alt="">
                         

                    </el-radio>
                  </el-col>
                  <el-col :span="12" style="text-align:left">
                          
                    <el-radio v-model="radio" label="1">
                        <div>
                           
                            <img src="~static/images/wavepay_t.jpg"  alt="">
                        </div>
                        
                     
                        
                    </el-radio>
                  </el-col>
             </el-row>

     
               
            
               
           
              <br>
                <div v-if="radio == 1">
                    <p>{{$t('Please_enter_transferred')}}</p>
                    <el-form   :model="ruleForm" ref="ruleForm"  class="demo-ruleForm" >
                        <el-form-item 
                        prop="tran_amount"
                    :rules="[
                        { required: true, message: $t('amount_required')},
                        
                    ]"
                        class="tran_input" >
                        <el-row>
                          <el-col :span="18">
                             <el-input   type="number" :placeholder="$t('Enter transferred amount')" v-model="ruleForm.tran_amount"></el-input>
                          </el-col>
                          <el-col :span="6" style="text-align:center">
                             <el-button type="text"  @click="centerDialogVisible_Wave = true">{{$t('example_text')}}</el-button>
                              <el-dialog
                                        
                                        :visible.sync="centerDialogVisible_Wave"
                                        
                                        center>
                                        <div style="text-align:center">
                                          
                                             <img src="~static/images/wavemoney_amount.jpg"  alt="" style="width:100%">
                                        </div>
                                         
                                       
                                    </el-dialog>
                          </el-col>
                        </el-row>
                           
                        </el-form-item>
                    
                     <p>{{$t('slip_number')}}</p>

                  
                        <el-form-item 

                        prop="slip_code"
                    :rules="[
                        { required: true, message:  $t('slip_number')},
                        
                    ]"
                        class="tran_input" >
                        <el-row>
                            <el-col :span="18">
                                 <el-input   type="number" :placeholder="$t('slip_number_s')" v-model="ruleForm.slip_code"></el-input>
                            </el-col>
                            <el-col :span="6" style="text-align:center">
                                <el-button type="text"  @click="centerDialogVisible = true">{{$t('example_text')}}</el-button>
                                    <el-dialog
                                        
                                        :visible.sync="centerDialogVisible"
                                        
                                        center>
                                        <div style="text-align:center">
                                             <img src="~static/images/wavemoney_example.jpg"  alt="" style="width:100%" >
                                        </div>
                                         
                                       
                                    </el-dialog>
                            </el-col>
                        </el-row>
                           
                        
                        </el-form-item>
                    </el-form>
                   
                         <el-button round @click="slip_upload_wave('ruleForm')"  :disabled='submitted'>{{$t('Submit')}}</el-button>
                </div>
                <div v-else>
                   
                     <p>{{$t('Please_enter_transferred')}}</p>
                    <el-form   :model="ruleForm" ref="ruleForm"  class="demo-ruleForm" >
                        <el-form-item 
                        prop="tran_amount"
                    :rules="[
                        { required: true, message: $t('amount_required')},
                        
                    ]"
                        class="tran_input" >
                            <el-row>
                              <el-col :span="18">
                                <el-input   type="number" :placeholder="$t('Enter transferred amount')" v-model="ruleForm.tran_amount"></el-input>
                              </el-col>
                              <el-col :span="6" style="text-align:center">
                                <el-button type="text"  @click="centerDialogVisible_Kbz = true">{{$t('example_text')}}</el-button>
                                 <el-dialog
                                        
                                        :visible.sync="centerDialogVisible_Kbz"
                                       
                                        center>
                                  
                                        <div style="text-align:center">
                                             <img src="~static/images/kbz_amount.jpg"  alt="" style="width:100%">
                                        </div>
                                         
                                       
                                    </el-dialog>
                              </el-col>
                            </el-row>
                        </el-form-item>
                   
                     <p>{{$t('slip_kbz_number')}}</p>
                  
                        <el-form-item 

                        prop="slip_code"
                    :rules="[
                        { required: true, message: $t('slip_kbz_number')},
                        
                    ]"
                        class="tran_input" >
                        <el-row>
                            <el-col :span="18">
                                 <el-input   type="number" :placeholder="$t('slip_kbz_number_s')" v-model="ruleForm.slip_code"></el-input>
                            </el-col>
                            <el-col :span="6" style="text-align:center">
                              <el-button type="text"  @click="centerDialogVisible = true">{{$t('example_text')}}</el-button>
                                  <el-dialog
                                      
                                      :visible.sync="centerDialogVisible"
                                      
                                      center>
                                      <div style="text-align:center">
                                                                
                                        <carousel :autoplay="false" :nav="true" :items =1>
                                            <div class="item">
                                              <p style="padding:0;">၁. KBZ Pay app ထဲမှ "မှတ်တမ်း"ထဲသို့ဝင်ပါ။</p>
                                              <img src="~static/images/kbz_ex_one.jpg"  alt="" class="amount_example_img">
                                            </div>
                                            <div class="item">
                                              <p>၂. ငွေလွှဲစားရင်ကိုဖွင့်ပါ</p>
                                              <img src="~static/images/kbz_ex_two.jpg"  alt="" class="amount_example_img">
                                            </div>
                                            <div class="item">
                                              <p>၃. အသေးစိတ်ထဲတွင် လုပ်ဆောင်မှုအမှတ် နောက်ဆုံးဂဏန်း(၆)လုံးကြည့်ပါ။</p>
                                              <img src="~static/images/kbz_ex_three.jpg"  alt="" class="amount_example_img">
                                            </div>
                                        </carousel>
                                                                      
                                      </div>
                                    </el-dialog>
                            </el-col>
                        </el-row>
                           
                        
                        </el-form-item>
                    </el-form>
                   
                         <el-button round @click="slip_upload_kbz('ruleForm')"  :disabled='submitted'>{{$t('Submit')}}</el-button>
              
                </div>

           
           



            <br>
            <p>{{$t('need_help?_please_contact')}}</p>
                    <ul class="topup_contact" v-for="(phone , p) in contact" :key="p">
                        <li><el-button size="medium" type="info"  @click="dial(phone.phone)"   icon="el-icon-phone" >{{phone.phone}}</el-button></li>

                    </ul>
        
        </div>
       
    </section>

</template>

<style>

    .topup {
        padding:0 20px 50px  20px;
    }
    .topup .el-dialog__header {
      padding:0;
    }
    .topup .owl-theme .owl-nav {
      margin:0;
    }
    .topup .owl-carousel .owl-stage-outer {
      height:600px;
    }
    .topup .el-header {
       background-color :#fff;

    }
     .topup .point_amount img{
        /* width:100%; */
        border-radius: 13px;
        height:70px;
       
    }
    .topup .owl-carousel .owl-item{
      padding:0 10px;
    }
    .topup  .el-radio__label {
      padding:0;
    }
    .topup .owl-theme .owl-nav {
      padding:0;
      margin:0;
    }
    .active_img {
      padding:3px;
       border:2px solid #3A7D1F;
      border-radius: 13px;
        -webkit-box-shadow: -3px 3px 18px -7px rgba(0,0,0,0.75);
        -moz-box-shadow: -3px 3px 18px -7px rgba(0,0,0,0.75);
        box-shadow: -3px 3px 18px -7px rgba(0,0,0,0.75);
    }
    .topup .el-dialog--center .el-dialog__body {
        padding:20px;
    }
    .topup .point_amount .el-radio__input.is-checked+.el-radio__label {
        color:#158220;
        font-weight: bold;
    }
    .topup .point_amount .el-radio__input {
        display: none;
    }

    .topup .point_amount .el-radio , .el-radio__label {
        margin:0;
        padding:0 30px;
        line-height: 0;
    }
    .topup .point_amount .el-card__body {
        padding:10px 0 0 0;
    }
    .el-page-header__left {
        margin:0;
    }
    .topup .el-page-header {
        line-height: 43px;
        color:#000;
       
    }
    .topup .el-page-header__content {
        color:#000;
        font-weight: bold;
    }
    .tran_input .el-input__inner {
        background-color: #E6E6E6;
        color:#666666;
    }
    .topup .upload-demo {
        -webkit-box-shadow: 1px 4px 15px -6px rgba(0,0,0,0.75);
        -moz-box-shadow: 1px 4px 15px -6px rgba(0,0,0,0.75);
        box-shadow: 1px 4px 15px -6px rgba(0,0,0,0.75);
        text-align: center;
        padding:30px;
    }
    .topup p {
        color:#666666;
    }
    .topup .el-form-item__label {
        color:#000;
    }
    .topup .el-icon-plus:before {
        position: absolute;
        left:0;
        right:0;
        width:40px;
        height: 40px;
        z-index: 999;
        bottom:76px;
        content: "\e6d9";
        font-size: 27px;
        color: #0187E0;
        background: #fff;
        border-radius: 50px;
        padding:7px;
        font-weight: bold;
    }
    .topup .el-button.is-round{
        position: relative;
        max-width: 480px;
        width:100%;
        background-color: #158220;
        color:#fff;
    }
    .topup .el-dialog {
      max-width: 480px;
      width:90%;
        border-radius: 26px;
    }
.topup .avatar-upload {
  position: relative;
  margin-bottom:30px;
}
 .topup .avatar-upload .avatar-edit {
  margin:0 auto;
  text-align: center;
  z-index: 1;

}
.topup .avatar-upload .avatar-edit input {
  display: none;
}



.topup .avatar-upload .avatar-preview , #imagePreview_top {
  width:100%;
  height:190px;
  border-radius: 9px;
  position: relative;
  text-align: center;
  margin:0 auto;
  

  /* border: 6px solid #F8F8F8; */
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
}
/* #imagePreview  {
  width:192px;
  height:192px;
} */
.topup .avatar-upload .avatar-preview > div {
  width: 100%;
  height: auto;
  border-radius: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.topup .upload_icon_top {

    width: 100%;
    opacity: .5;
    border-radius: 9px;
    background-color: #0092D9;
   
    
}
.wallet_type .el-avatar--circle {
      border-radius: 22%;
    }
    .wallet_type .el-button {
      font-size: 11px;
    }
    .wallet_type .el-avatar ul {
      padding:5px;
    }
    .wallet_type .el-avatar ul li {
      color:#000;
    }
    .wallet_type img {
      width:50px;
      height:auto;
      float:left;
      border-radius: 9px;
      /* margin-right:8px; */
    }
    .topup .avatar_text {
      color:#000;
    }
    .see_more_list {
      list-style: none;
      padding:20px;
     
      margin:0;
    
    }
    .see_more_list img {
      -webkit-box-shadow: 0px 5px 23px -7px rgba(0,0,0,0.75);
      -moz-box-shadow: 0px 5px 23px -7px rgba(0,0,0,0.75);
      box-shadow: 0px 5px 23px -7px rgba(0,0,0,0.75);
    }
    #bank_copy_list {
      margin-bottom:30px;
       border-radius: 9px;
      -webkit-box-shadow: 3px 6px 28px -7px rgba(0,0,0,0.75);
      -moz-box-shadow: 3px 6px 28px -7px rgba(0,0,0,0.75);
      box-shadow: 3px 6px 28px -7px rgba(0,0,0,0.75);
    }
      .see_more_list .copy-btn {
      cursor: pointer;
      color:#fff;
      background:#158220;
      padding:4px 7px;
      border-radius: 23px;
      font-size:11px;
    }
    .show_more {
      text-align: center;
      padding: 8px;
      border-top: 1px solid #b8b8b8
    }
    .topup_contact {
      margin:0;
      padding:0;
      text-align: center;
      list-style: none;
    }
    .topup_contact li {
      margin:20px auto;
    }
    .upload_img_bg {
      position: absolute;
      top: 16%;
      left: 25%;
      background-image: url('~static/images/slip_upload_img.jpeg');
      background-size:100% 100%;
      max-width: 480px;
      width:50%;
      height:50%;
      background-repeat: no-repeat;
      z-index: -1;
    }
    .upload_over_lay {
      width:100%;
      height: 150px;
      background-color:rgba(22, 131, 218, 0.22);
      z-index: 99;
    }
</style>

<script>
import axios from 'axios'
import carousel from 'vue-owl-carousel'
export default {
   components: { carousel },
    mounted() {

    
      this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    });


    
    },
    data() {
        return { 
         
            bank_type:'',
            radio: '1',
            centerDialogVisible: false,
            centerDialogVisible_Wave:false,
             centerDialogVisible_Kbz:false,
          default_limit: 2,
          limit_by: 2,
          contact:[],
          bank_account:'',
          card_number:'',
          visible: false,
          profile:'',
          message:'',
           display: false,
            submitted:false,
            ruleForm: {
                  tran_amount:'',
                  slip_code:'',
            },
             
              image:'',
              url:'',
               image:'',
               amount:'',
                error:'',
            // img_url:'',
            // fileList: [],
            // file:'',
        }
    },
     created() {
      
          this.$axios.get('/v1/admin-bank')
              .then(response => {
                this.bank_account = response.data.data
              })  
          let token = localStorage.getItem('token');
        if(token) {
              this.$axios.get("/v1/profile",
                    {headers: {
                               "Authorization": "Bearer "+token
                         }
                        })
                    .then(response => {
                     this.profile = response.data.data

                })
        }
         this.$axios.get("/v1/contact")
    
            
                .then(response => {
                    this.contact = response.data.data[0].phone_number
            });
                
    },
    methods: {
         id_bank(data) {
            this.bank_id = data;
           
        },
         simple_toggle(default_limit, filters_length) {
            this.limit_by = (this.limit_by === default_limit) ? filters_length : default_limit;
        },
        dial: function(data){
          window.location ='tel:'+data;
        },
       copyTestingCode (data) {
        
          let testingCodeToCopy = document.querySelector('#code'+data)
          testingCodeToCopy.setAttribute('type', 'text')    
           testingCodeToCopy.setAttribute('readonly', true);
          testingCodeToCopy.select()

          try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
             this.$message({
               message:this.$t('copy_success'),
              position: 'top',
              showClose: true,
          
            });
            
          } catch (err) {
            alert('Oops, unable to copy');
          }
          testingCodeToCopy.setAttribute('type', 'hidden')
          window.getSelection().removeAllRanges()
        },
       
          goBack() {
             this.$router.push(`/wallet?lang=${this.$store.state.locale}`); 
         },
          toggleDropdown() {
            this.display = !this.display
          },
         onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            
            this.image = e.target.files[0];
            this.url = URL.createObjectURL(this.image);
        
            },

    removeImage: function (e) {
      this.url = '';
    },

        slip_upload_kbz(formName) {
             this.$refs[formName].validate((valid) => {
          if (valid) {
               this.submitted = true
              let token = localStorage.getItem('token');
            this.bank_id = 3
        var data = {
                    bank_type_id:this.bank_id,
                   
                    amount: this.ruleForm.tran_amount,
                    slip_code: this.ruleForm.slip_code,
                }
             
              console.log(data)
              //console.log(token)
       
                this.$axios.post("/v2/v1/slip_automatch",
                           data,
                    {
                           

                        headers: {
                               "Authorization": "Bearer "+token
                         },
                          
                        })
                
                    .then(response => {
                      
                        console.log(response)
                      this.same_slip_number_ms = response.data.message       
             
                  if(this.same_slip_number_ms == 'fail') {
                    this.submitted = false
                      this.$message({
                            showClose: true,
                          message: 'Your Slip Code is exist',
                          type: 'warning',
                        });
                }else {
                  this.$router.push(`/topup_success?lang=${this.$store.state.locale}`); 
                }
                
                 
                })
                 .catch(error => {
                   this.submitted = false
                     if(error.response.data.errors.slip_code == 'The slip code must be at least 6 characters.') {
                          this.$message({
                            showClose: true,
                          message: 'အနည်းဆုံး ဂဏန်း ၆ လုံးဖြည့်ပေးပါ ',
                          type: 'warning',
                        });
                      

                     }else if(error.response.data.errors.slip_code == 'The slip code may not be greater than 6 characters.') {
                       this.submitted = false
                          this.$message({
                            showClose: true,
                          message: 'ဂဏန်း ၆  ထက်ပိုနေပါသည် ',
                          type: 'warning',
                        });
                       
                     }else {
                       this.submitted = false
                         this.$message({
                            showClose: true,
                          message: 'လုပ်ငန်းစဥ်အမှတ် မှားနေပါသည် ',
                          type: 'warning',
                        });
                     } 
                });
          } 
        });

        },

           slip_upload_wave(formName) {
             this.$refs[formName].validate((valid) => {
          if (valid) {
              this.submitted = true
              let token = localStorage.getItem('token');
            this.bank_id = 4
        var data = {
                    bank_type_id:this.bank_id,
                   
                    amount: this.ruleForm.tran_amount,
                    slip_code: this.ruleForm.slip_code,
                }
             
              console.log(data)
              //console.log(token)
       
                this.$axios.post("/v2/v1/slip_automatch",
                           data,
                    {
                           

                        headers: {
                               "Authorization": "Bearer "+token
                         },
                          
                        })
                
                    .then(response => {
                     this.same_slip_number_ms = response.data.message

                if(this.same_slip_number_ms == 'fail') {
                    this.submitted = false
                      this.$message({
                            showClose: true,
                          message: 'Your Slip Code is exist',
                          type: 'warning',
                        });
                }else {
                  this.$router.push(`/topup_success?lang=${this.$store.state.locale}`); 
                }
                            
                })
                 .catch(error => {
                     this.submitted = false
                     if(error.response.data.errors.slip_code == 'The slip code must be at least 6 characters.') {
                          this.$message({
                            showClose: true,
                          message: 'အနည်းဆုံး ဂဏန်း ၆ လုံးဖြည့်ပေးပါ ',
                          type: 'warning',
                        });
                     }else if(error.response.data.errors.slip_code == 'The slip code may not be greater than 6 characters.') {
                         this.submitted = false
                          this.$message({
                            showClose: true,
                          message: 'ဂဏန်း ၆  ထက်ပိုနေပါသည် ',
                          type: 'warning',
                        });
                     }else {
                         this.submitted = false
                         this.$message({
                            showClose: true,
                          message: 'လုပ်ငန်းစဥ်အမှတ် မှားနေပါသည် ',
                          type: 'warning',
                        });
      
                     }

                  
                });
        
            
    

         
          } 
        });

        },
     
            
            
    
    },
    
    
}
</script>