<template>
    <main>


 <div class="change_password_page change_password">
          <nuxt-link  :to="`${$t('/profile_edit')}?lang=${$store.state.locale}`">
                          <el-page-header style="color:#000" title=""  >
                </el-page-header> 
            </nuxt-link>
       
          <el-form v-if="active===1"  :model="ruleForm" ref="ruleForm"  class="demo-ruleForm" >
           
        
        <div class="sign_up_text">
            <h4>{{$t('enter_your_current_password')}}</h4>
        </div>
             <div class="phone_input">









            <el-form-item
            
              prop="oldpassword"
              :rules="[
                { required: true, message: $t('what_current_password') },
                
              ]"
               
            >  
                <el-input type="password" :placeholder="$t('current_password')" prefix-icon="el-icon-phone" v-model="ruleForm.oldpassword"  ></el-input>
               
            </el-form-item>
            
             </div>
               <el-button type="success" round @click="next('ruleForm')">{{$t('Next')}}</el-button>
        
          </el-form>


        <el-form v-if="active===2" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm" >
           <div class="sign_up_text">
            <h4>{{$t('enter_your_new_password')}}</h4>
        </div>

                <!-- <el-form-item  prop="pass">
                <el-input type="password" v-model="ruleForm.pass" placeholder="စကားဝှက် အသစ်" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item  prop="checkPass">
                    <el-input type="password" v-model="ruleForm.checkPass" placeholder="စကားဝှက် အသစ် အတည်ပြုမည်" autocomplete="off"></el-input>
                </el-form-item> -->
             <div class="phone_input">
                <el-form-item
                        prop="pass"
                       
                >  
                    <el-input type="password" show-password :placeholder="$t('new_password')" prefix-icon="el-icon-lock" v-model="ruleForm.pass" autocomplete="off"></el-input>
                
                </el-form-item>
                <el-form-item
                        prop="checkPass"
                       
                >  
                    <el-input type="password" show-password :placeholder="$t('confirm_new_password')" prefix-icon="el-icon-lock" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                
                </el-form-item>
                   <p> {{$t('Password_will_be_required_withdrawal')}}</p>
             </div>
          
             <el-button type="success" round @click="submitForm('ruleForm')">{{$t('Confirm')}}</el-button>
        </el-form>
        
        <div class="step_bar">

       
            <el-steps :active="active" align-center finish-status="success">
              <el-step >Hello</el-step>
              <el-step >Tow</el-step>
              <!-- <el-step > Therew</el-step> -->
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
      mounted() {
        this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => this.$nuxt.$loading.finish(), 500)
      })
      },
    data() {
        
       
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error(this.$t('new_password_invalid')));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error(this.$t('new_password_invalid_again')));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error(this.$t('two_input_do_not_match')));
        } else {
          callback();
        }
      };
      return {
          active: 1,
        ruleForm: {
            oldpassword:'',
            pass: '',
            checkPass: '',
        
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
         
        }
      };
    },
    //   return {
    //       fullscreenLoading: false,
    //    errors:[],
    //     name:null,
  
      
        // active: 1,
        //  input: '',
        
        // ruleForm: {
        //   checkPass:'',


        // },
      
         
    
     methods: {
       
  
  
      next(formName) {
       
        this.$refs[formName].validate((valid) => {
          if (valid) {
          
                   let token = localStorage.getItem('token');

                var data = {
                   password:this.ruleForm.oldpassword
                }
                 this.$axios.post("/v2/v1/check_password",
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
                            message: this.$t('password_invalid'),
                            type: 'warning',
                        });
                      }else {
                       if (this.active++ > 1) this.active = 0;
                          
                      }
                })

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      
       submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            
              let token = localStorage.getItem('token');
        console.log(token)
                var data = {
                   password:this.ruleForm.pass
                }
                console.log(data)
                 this.$axios.post("/v2/v1/change_password",
                           data,
                    {
                        headers: {
                               "Authorization": "Bearer "+token
                         },
                          
                        })
                
                    .then(response => {
                     console.log(response)
                    this.res_error = response.data.message
                      this.res_message = response.data.data
                      if(this.res_error == 'fail') {
                         this.$message({
                            showClose: true,
                            message: 'error Change Password',
                            type: 'warning',
                        });
                      }else {
                       this.$router.push(`/success_changepassword?lang=${this.$store.state.locale}`); 
                          
                      }
                })
              
               
                
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
  .change_password .el-page-header__left {
    margin:0;
    padding:20px 5px; 
  }
  .change_password_page {
      padding:0 20px;
       max-width: 480px;
      width:100%;
  }
  .change_password .el-form-item__content {
      margin:0 !important;
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
    .change_password .phone_input {
        margin-bottom:20px;
    }
    .change_password_page .el-button.is-round {
        width:100%;
        margin:70px auto 20px auto;
    }
    .phone_input .el-input__prefix {
        color:green;
    }
    
  </style>




























