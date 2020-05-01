<template>
    <main>


 <div class="sign_page signup">
          <nuxt-link  :to="`${$t('/login')}?lang=${$store.state.locale}`">
                          <el-page-header style="color:#000" title=""  >
                </el-page-header> 
            </nuxt-link>
       
          <el-form v-if="active===1"  :model="ruleForm" ref="ruleForm"  class="demo-ruleForm" >
           
        
        <div class="sign_up_text">
            <h4>{{$t('What_phone_number')}}</h4>
        </div>
             <div class="phone_input">









            <el-form-item
              :label="$t('phone') +' '+ '(09 ပါထည့်ဖြည့်ပါ )'"
              prop="phone"
              :rules="[
                { required: true, message: $t('What_phone_number') },
                
              ]"
               
            >  
                <el-input type="number" placeholder="09 xxx xxx xxx" prefix-icon="el-icon-phone" v-model="ruleForm.phone"  ></el-input>
               
            </el-form-item>
            
             </div>
               <el-button type="success" round @click="next('ruleForm')">{{$t('Next')}}</el-button>
        
          </el-form>
            <!-- <el-form v-if="active===2"  :model="ruleForm" ref="ruleForm"  class="demo-ruleForm" >
           
        
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
        
          </el-form> -->
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

        <el-form v-if="active===2" :model="ruleForm" status-icon :rules="rules" ref="ruleForm"  class="demo-ruleForm" >
           <div class="sign_up_text">
            <h4>{{$t('set_your_password')}}</h4>
        </div>
             <div class="phone_input">
             <el-form-item
                        prop="pass"
                       
                >  
                    <el-input type="password" show-password :placeholder="$t('password')" prefix-icon="el-icon-lock" v-model="ruleForm.pass" ></el-input>
                
                </el-form-item>
                <el-form-item
                        prop="checkPass"
                       
                >  
                    <el-input type="password" show-password :placeholder="$t('confirm_password')" prefix-icon="el-icon-lock" v-model="ruleForm.checkPass" ></el-input>
                
                </el-form-item>
            
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
       
        
      })
      },
    data() {
       var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error(this.$t('sign_up_password_invalid')));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error(this.$t('sign_up_password_invalid_again')));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error(this.$t('two_input_do_not_match')));
        } else {
          callback();
        }
      };
      return {
          active: 1,
          fullscreenLoading: false,
        ruleForm: {
            phone:'',
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

     methods: {
       
    isMobile: function() {
    	var check = false;
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
        return check;
    },
  
      next(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {     
            if (this.active++ > 1) this.active = 0;
          } else {
            console.log('error submit!!');
            return false;
          }
        });
        
      },

       submitForm(formName) {
          this.$nuxt.$loading.start()
        this.$refs[formName].validate((valid) => {
          if (valid) {

            this.$axios.post('/v2/v1/register', {
                    phone: this.ruleForm.phone,
                    // otp: this.ruleForm.otp,
                    password: this.ruleForm.pass
                })
                .then(response => {
                  console.log(response)
                   this.token = response.data.access_token;
                   this.device_id = response.data.device_id
                   console.log(this.device_id)
                      this.userInfo = response.data,
                      this.$nuxt.$loading.finish()
                   
                      // console.log(this.userInfo)
                      this.$store.commit('logIn', this.userInfo)
                        this.$store.commit('accessToken', this.token)

                    if(response.data.status == 3) {
                       this.$router.push(`/signup_successNrc?lang=${this.$store.state.locale}`);
                    }else if (this.device_id == null) {
                        this.$router.push(`/signup_successChrome?lang=${this.$store.state.locale}`);
                    }else if(this.device_id !== null) {
                       this.$router.push(`/signup_refel?lang=${this.$store.state.locale}`);
                    }else {
                         console.log('not Direction')
                    }
          
                })
                .catch(error => {

                  //  if(!this.isMobile() || this.device_id == null) {

                  //      this.$router.push(`/signup_successChrome?lang=${this.$store.state.locale}`);
                        
                  //   }else {
                  //       this.$router.push(`/signup_refel?lang=${this.$store.state.locale}`);
                     
                  //   }

                  if(error.response.data.errors.password) {
                       console.log(error.response.data.errors.password[0])
                           
                              this.$message({
                                showClose: true,
                                center: true,
                            
                                message: error.response.data.errors.password[0],
                                type: 'error'
                              });
                  }else if(error.response.data.errors.phone) {
                    console.log('pal')
                     console.log(error.response.data.errors.phone[0])
                    
                          
                        this.$message({
                          showClose: true,
                          center: true,
                      
                          message: error.response.data.errors.phone[0],
                          type: 'error'
                        });
                         if (this.active++ > 1) this.active = 1;
                         this.$nuxt.$loading.finish()
                  }else {
                    console.log('ok')
                    //  if(!isMobile()) {
                    //    this.$router.push(`/?lang=${this.$store.state.locale}`);
                    // }else {
                    //     this.$router.push(`/signup_refel?lang=${this.$store.state.locale}`);
                    // }
                  }
                          
                              
                 });
              
                // .then(respon)
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
      margin-top:20px;

  }
  .sign_up_text {
      text-align: center;
      margin:15px auto;
  }
    .phone_input .el-input__inner {
        background: #eee8e8;
        border-radius: 22px;
        color:#000;
    }
    .phone_input {
        margin-bottom:50px;
    }
    .sign_page .el-button.is-round {
        width:100%;
    }
    .phone_input .el-input__prefix {
        color:green;
    }
    
  </style>




























