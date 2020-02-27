<template>
    <main class="sign_up_main el-main">
      
   
           <img src="~static/images/login_page/login_bg.png" class="login_bg">
          <div class="main_login_page">
              <div class="language">
                <el-dropdown @command="changeLang" slot="dropdown"  style="text-align:center">
              
              <ul>
                
                <li>
               <el-dropdown-item round command='en'>{{$t('English')}}</el-dropdown-item>
                </li>
                <li>
                   <el-dropdown-item round command='uni'>{{$t('Unicode')}}</el-dropdown-item>
                </li>
                <li>
                 <el-dropdown-item round command='zg'>{{$t('Zawgyi')}}</el-dropdown-item>
                </li>
                <li>
                   <el-dropdown-item round command='zh'>{{$t('China')}}</el-dropdown-item>
                </li>
                
              </ul>
               </el-dropdown>   
              <!-- <div class="lang">
                <el-dropdown @command="changeLang" style="text-align:center">
                <span class="el-dropdown-link" style='cursor: pointer;'>
                    {{$t('Language')}}
                </span>
                
                    <el-dropdown-item round command='en'>English</el-dropdown-item>
                    <el-dropdown-item round command='uni'>Myanmar Unicode</el-dropdown-item>
                    <el-dropdown-item round command='zg'>Myanmar Zawgyi</el-dropdown-item>
                     <el-dropdown-item round command='zh'>China</el-dropdown-item>


                </el-dropdown>   
            </div> -->
          </div>

      <el-form   :model="ruleForm" ref="ruleForm"  class="demo-ruleForm" >
            <el-form-item
             
              prop="phone"
              :rules="[
                { required: true, message: 'phone is required'},
                
              ]"
               
            >  
                <el-input type="phone"  :placeholder="$t('Phone_placeholder')" prefix-icon="el-icon-phone" v-model="ruleForm.phone"  ></el-input>
               
            </el-form-item>
            
        

            
            <el-form-item
                prop="password"
                :rules="[
                { required: true, message: 'password is required'},
             
                ]"
            >
                <el-input type="password" show-password :placeholder="$t('Password')"  prefix-icon="el-icon-lock" v-model="ruleForm.password" ></el-input>
            </el-form-item>
            <el-form-item>
          <el-button type="success" round @click="submitForm('ruleForm')">{{$t('Submit')}}</el-button>

                <!-- <el-button @click="resetForm('numberValidateForm')">Reset</el-button> -->
                          <nuxt-link :to="`${$t('forgot_password')}?lang=${$store.state.locale}`">
                <el-button type="text"  style="color:#158220">{{$t('Forgot_password')}}</el-button>
                          </nuxt-link>
            </el-form-item>
        </el-form>

        <h6>Or</h6>
        <div class="btn_group_sig">
            <nuxt-link :to="`${$t('/')}?lang=${$store.state.locale}`">
                  <el-button type="default" round>{{$t('Skip')}}</el-button>
            </nuxt-link>
           <nuxt-link :to="`${$t('signup')}?lang=${$store.state.locale}`">
                <el-button type="warning" round>{{$t('Sign_up')}}</el-button>
           </nuxt-link>
          
        </div>
         

              

         </div>
        
      
     
        
    <!-- forgot password modal box     -->


    
     
  
    
    </main>
 </template>
<script>
import axios from 'axios'
// import store from './vuex/store'
  export default {
      layout: 'loginLayout',
    data() {
      return {
            dialogVisible: false,
          
           ruleForm: {
            phone:'',
            password: '',

          },
         
            success: '',
            error:'',
            response: '',
            fullscreenLoading: false
            
      };
    },
    
    methods: {
         changeLang (lang) {
            //mutate 'locale' in store
            this.$store.commit('SET_LANG', lang)
            //re-route to the current page but with the selected language in a query string
            this.$router.push({ path: `${this.$router.currentRoute.path}?lang=${lang}` })
         },
      submitForm(formName) {
         this.$refs[formName].validate((valid) => {
          if (valid) {
             axios.post('https://build.seinlucky.com/api/v1/login', {
                    phone: this.ruleForm.phone,
                    password: this.ruleForm.password,
                    
                })
              
               .then(response => {
                
                  if(response.data.result == '0'){
                    this.error_message = response.data.data,
                    console.log(this.message)
                    this.error = 'Please try again'
                    this.$notify.error({
                      title: 'Error',
                      message: this.error_message
                    });
                  }else {
                     this.userInfo = response.data,
                     this.token = response.data.access_token;
                    
                    this.$store.commit('logIn', this.userInfo);
                    this.$store.commit('accessToken', this.token);
                     const loading = this.$loading({
                          lock: true,
                          text: 'Loading',
                          spinner: 'el-icon-loading',
                          background: 'rgba(0, 0, 0, 0.7)'
                        });
                        setTimeout(() => {
                          loading.close();
                        }, 2000);
                     
                     this.success_message = response.data.data,
                     
                     this.$notify({
                        title: 'Success',
                        message: this.success_message,
                        type: 'success',
                       
                      });
                       this.$router.push('/');
                         
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
       handleClose(done) {
        this.$confirm('Are you sure to close this dialog?')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  }
</script>

<style>

  
  .login_bg {
    max-width:414px;
    width:100%;
  }
  .main_login_page {
    padding:0 30px;
    text-align:center;
    margin:0 auto;
  }
  .language {
    text-align:center;
  }
  .language ul {
    padding:0;
    margin:0;
    text-align:center;
    

  }
  .language ul li {
    list-style :none;
    display :block;
    display: inline-block;
    margin:8px auto;
    padding:0 5px;
  }

  .language ul li a {
    text-decoration :none;
  }
  .q-input {
    max-width:414px;
    width:100%;
    display :block;
  }
  .login_btn {
    background-color :#57A11E;
    border-radius : 22px;
    padding:5px;
    color:#fff;
    font-weight :bold;
    margin:40px auto;
  }
  .forget_password {
    text-decoration :none;
    color:#57A11E;
  }
   h6        {
    color:#BDC5BE;
    font-family:'Oswald';
    font-weight:700;
    position:relative;  
    margin: 60px auto 20px auto;
    font-size: 16px;
    line-height: 15px;
    width: 282px;
}

h6:before, h6:after {
  background:#BDC5BE;
  content:"";
  display:block;
  height:1px;
  position:absolute;
  width:125px;
}

h6:before  {  
  left:0;
  top:9px;
  border-radius: 90px 0 0 90px;
  -moz-border-radius: 90px 0 0 90px;
  -webkit-border-radius: 90px 0 0 90px;
}

h6:after   {
  right:0;
  top:9px;
  border-radius: 0 90px 90px 0;
  -moz-border-radius: 0 90px 90px 0;
  -webkit-border-radius:  0 90px 90px 0;
}
.btn_group_sig {
  display :inline-flex;
}
.skip_btn {
  background-color:#00000029;
  text-transform :capitalize;
  margin:20px;
   padding:0 12px;
}
.sign_up_btn {
   background-color:#EBB811;
   color:#fff;
  text-transform :capitalize;
  margin:20px;
  padding:0 12px;
}
.el-form-item .el-button.is-round {
    width:100%;
}
.btn_group_sig .el-button.is-round {
    padding:12px 37px;
    margin:0 10px;
}
.el-message-box {
    width:unset;
}
</style>
