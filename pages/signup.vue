<template>
    <main>


 <div class="sign_page signup">
          <nuxt-link  :to="`${$t('login')}?lang=${$store.state.locale}`">
                          <el-page-header style="color:#000" :title="`${$t('back')}`"  >
                </el-page-header> 
            </nuxt-link>
       
          <el-form v-if="active===1"  :model="ruleForm" ref="ruleForm"  class="demo-ruleForm" >
           
        
        <div class="sign_up_text">
            <h4>{{$t('What_phone_number')}}</h4>
        </div>
             <div class="phone_input">









            <el-form-item
              :label="$t('phone')"
              prop="phone"
              :rules="[
                { required: true, message: $t('What_phone_number') },
                
              ]"
               
            >  
                <el-input type="phone" placeholder="09 xxx xxx xxx" prefix-icon="el-icon-phone" v-model="ruleForm.phone"  ></el-input>
               
            </el-form-item>
            
             </div>
               <el-button type="success" round @click="next('ruleForm')">{{$t('Next')}}</el-button>
        
          </el-form>
            <el-form v-if="active===2"  :model="ruleForm" ref="ruleForm"  class="demo-ruleForm" >
           
        
         <div class="sign_up_text">
                <h4>{{$t('we_sent_OTP')}}</h4>
            </div>
             <div class="phone_input">

            <el-form-item
              label="OTP"
              prop="otp"
              :rules="[
                 { required: true, message: $t('otp_require') },
                
              ]"
               
            >  
                <el-input type="otp" placeholder="OTP" prefix-icon="el-icon-otp" v-model="ruleForm.otp"  ></el-input>
               
            </el-form-item>
            
             </div>
               <el-button type="success" round @click="nextTwo('ruleForm')">{{$t('Next')}}</el-button>
        
          </el-form>
        <!-- <el-form v-if="active===2" :model="ruleForm" ref="ruleForm"   class="demo-ruleForm" >
          <div class="sign_up_text">
                <h4>We have sent OTP<br> on your number</h4>
            </div>
            <div class="phone_input">
                 <el-form-item
                    label="OTP"
                    prop="Otp"
                    :rules="[
                      { required: true, message: 'Otp is required'},
                      
                    ]"
                    
                  >  
                    <el-input type="otp" placeholder="Enter OTP number" prefix-icon="el-icon-otp" v-model="ruleForm.otp" ></el-input>
                  
                </el-form-item>
            
             </div>
             <el-button type="success" round @click="nextTwo('ruleForm')">next</el-button>
        </el-form> -->

        <el-form v-if="active===3" :model="ruleForm"  ref="ruleForm" class="demo-ruleForm" >
           <div class="sign_up_text">
            <h4>{{$t('set_your_password')}}</h4>
        </div>
             <div class="phone_input">
            <el-form-item
              :label="$t('Password')"
                    prop="password"
                    :rules="[
                      { required: true, message: $t('set_your_password') },
                     
                    ]"
               
            >  
                <el-input type="password" show-password placeholder="Password" prefix-icon="el-icon-lock" v-model="ruleForm.password" autocomplete="off"></el-input>
               
            </el-form-item>
            
             </div>
             <el-button type="success" round @click="submitForm('ruleForm')">{{$t('Confirm')}}</el-button>
        </el-form>
        
        <div class="step_bar">

       
            <el-steps :active="active" align-center finish-status="success">
              <el-step >Hello</el-step>
              <el-step >Tow</el-step>
              <el-step > Therew</el-step>
            </el-steps>
       
         </div>
     
                
                <!-- <el-button @click="resetForm('numberValidateForm')">Reset</el-button> -->
        
    </div>
        </main>
</template>


<script>
import axios from 'axios'

  export default {
      layout: 'loginLayout',
    data() {
      return {
          fullscreenLoading: false,
       errors:[],
    name:null,
  
      
        active: 1,
         input: '',
        
        ruleForm: {
            phone:'',
            otp:'',
           password: '',

        },
      
         
         
      };
    },
     methods: {
       
  
  
      next(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
         
          this.$axios.post('/v1/send-otp', {
                    phone: this.ruleForm.phone,
                  
                })
               
                .then(response => {
                 
                  this.res_phone = response.data.message,
                 
                  this.res_data = response.data.data,
                  //  console.log(this.ruleForm.phone),
               
                this.userOtp = response.data,
                this.$store.commit('setOtp', this.userOtp),
                console.log(this.userOtp)
                 if(this.res_phone == "fail" ) {
                  this.$notify({
                    title: 'Warning',
                    message: this.res_data,
                    type: 'warning'
                  });
                }else {
                    if (this.active++ > 2) this.active = 0;
                  
                }
                });
        //      
                
              //if (this.active++ > 2) this.active = 0;

          } else {
            console.log('error submit!!');
            return false;
          }
        });
        
        
                // console.log(response)
                  // this.$store.commit("setPhone", this.userPhone); 
                // 
      },
       nextTwo(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
           // console.log(this.otp_error)
            if(this.active++ > 2) this.active=0;
          } else {
          
            console.log('error submit!!');
            return false;
          }
        });
       },
      // nextTwo() {
      //   if(this.active++ > 2) this.active=0;
      // },
       submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert(this.ruleForm.phone),
            //  alert(this.ruleForm.otp)
            //   alert(this.ruleForm.password)
            this.$axios.post('/v1/register', {
                    phone: this.ruleForm.phone,
                    otp: this.ruleForm.otp,
                    password: this.ruleForm.password
                })
                .then(response => {
                  //console.log(response)
                  this.otp_error = response.data.message
                  this.otp_data = response.data.data
                  //console.log(this.otp_error)
                  
                  if(this.otp_error == 'fail') {
                      // this.$router.push(`/?lang=${this.$store.state.locale}`); 
                      this.$message({
                        showClose: true,
                        center: true,
                       
                        message: this.otp_data,
                        type: 'error'
                      });
                      //  if (this.active++ > 2) this.active = 0;
                     
                  }
                  else {
                    //alert('heee')
                     this.token = response.data.access_token;
                       this.userInfo = response.data,
                      this.$store.commit('logIn', this.userInfo),
                        this.$store.commit('accessToken', this.token);
                     // console.log(this.userInfo)
                       if (this.active++ > 2) this.active = 0;
                          this.$router.push(`signup_refel?lang=${this.$store.state.locale}`); 
                  }
                })
                // .then(response => ( 
                //    this.otp_error = response.data.result,
                //   //  if(response.data.result == '0') 
                // console.log(this.otp_error),
                // console.log('bar'),
                //   console.log(response.message),
                //    this.userInfo = response.data,
                //   this.$store.commit('logIn', this.userInfo),
                //   console.log(this.userInfo)
                  
              
                // ));
                
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
     

      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
       
    }
  }
  </script>

  <style>
  .signup .el-page-header__left {
    margin:0;
    padding:20px 5px; 
  }
  .sign_page {
      padding:0 20px;
       max-width: 480px;
      width:100%;
  }
  .el-step__head.is-process  ,.el-step__title.is-process{
    color:#b8b8b8;
  }
  .step_bar {
      max-width: 480px;
      width:100%;

  }
  .sign_up_text {
      text-align: center;
      margin:80px auto;
  }
    .phone_input .el-input__inner {
        background: #eee8e8;
        border-radius: 22px;
        color:#000;
    }
    .phone_input {
        margin-bottom:120px;
    }
    .sign_page .el-button.is-round {
        width:100%;
        margin:20px auto;
    }
    .phone_input .el-input__prefix {
        color:green;
    }
    
  </style>




























