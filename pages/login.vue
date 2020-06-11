<template>
     <main class="sign_up_main el-main">
      
    <div class="longText_login" id="hidingScrollBar_login">
         <div class="hideScrollBar_login">
              <img src="~static/images/login_page/login_bg.png" class="login_bg">
                    <div class="main_login_page">
                        <div class="language">
                            <el-dropdown @command="changeLang"  style="text-align:center">
                        
                        <ul>
                            
                            <li>
                            <el-dropdown-item round command='en'>English</el-dropdown-item>
                            </li>
                            <li>
                            <el-dropdown-item round command='uni'>မြန်မာ</el-dropdown-item>
                            </li>
                            <li>
                            <el-dropdown-item round command='zh'>中文</el-dropdown-item>
                            </li>
                            
                        </ul>
                            </el-dropdown>   
                           
                        </div>
                    </div>
        <div class="form_padding">
                <el-form @submit.native.prevent   :model="ruleForm" ref="ruleForm"  class="demo-ruleForm" >
                    <el-form-item
                    
                    prop="phone"
                    :rules="[
                        { required: true, message: $t('What_phone_number') },
                        
                    ]"
                    
                    >  
                        <el-input  @keypress.enter.native="submitForm('ruleForm')" type="number"  :placeholder="$t('Phone_placeholder')+' '+'(09 ပါထည့်ဖြည့်ပါ)'" prefix-icon="el-icon-phone" v-model="ruleForm.phone"  ></el-input>
                    
                    </el-form-item>
                    
                

                    
                    <el-form-item
                        prop="password"
                        :rules="[
                        { required: true, message: $t('set_your_password') },
                    
                        ]"
                    >
                        <el-input  @keypress.enter.native="submitForm('ruleForm')" type="password" show-password :placeholder="$t('Password')"  prefix-icon="el-icon-lock" v-model="ruleForm.password" ></el-input>
                    </el-form-item>
                    <el-form-item>
                <el-button type="success" round @click="submitForm('ruleForm')">{{$t('login_title')}}</el-button>

                        <!-- <el-button @click="resetForm('numberValidateForm')">Reset</el-button> -->
                                <nuxt-link :to="`${$t('/forgot_password')}?lang=${$store.state.locale}`">
                        <el-button type="text"  style="color:#158220">{{$t('/forgot_password_text')}}</el-button>
                                </nuxt-link>
                    </el-form-item>
                </el-form>
          </div>
            <nuxt-link :to="`${$t('/')}?lang=${$store.state.locale}`">
                    <el-button type="default" round>{{$t('Skip')}}</el-button>
                </nuxt-link>
            <nuxt-link :to="`${$t('/signup')}?lang=${$store.state.locale}`">
                    <el-button type="warning" round>{{$t('sign_up_new')}}</el-button>
            </nuxt-link>
         </div>
    </div>
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
            fullscreenLoading: false,
            ok:''
            
      };
    },
    
    methods: {
 
         changeLang (lang) {
            //mutate 'locale' in store
            this.$store.commit('SET_LANG', lang)
            //re-route to the current page but with the selected language in a query string
            this.$router.push({ path: `${this.$router.currentRoute.path}?lang=${lang}` })
             this.$axios.get(`/v2/v1/add_language?language=${lang}`)
    
            
            .then(response => {    
        });
         this.$axios.get("/v2/v1/get_language")
                .then(response => {
  
            });
             
         },
      submitForm(formName) {
        
         this.$refs[formName].validate((valid) => {
           
          if (valid) {
             this.$nextTick(() => {
              this.$nuxt.$loading.start()
              })
             this.$axios.post('/v2/v1/login', {
                    phone: this.ruleForm.phone,
                    password: this.ruleForm.password,
                    
                })
              
               .then(response => {
                this.$nuxt.$loading.finish()
                  if(response.data.result == '0'){
                    this.error_message = response.data.data,
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
                    this.success_message = response.data.data,
                    this.$notify({
                        message:  this.$t('login_success'),
                        type: 'success',
                      });
                        this.$router.push(`/?lang=${this.$store.state.locale}`);   
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
.longText_login{
  max-width: 480px;
  width: 100%;
  height: 100%;
  margin: auto;
  /* text-align: justify; */
}

/*------THE TRICK------*/
#hidingScrollBar_login{
  overflow: hidden;
}
.hideScrollBar_login{
  width: 100%;
  height: 100%;
  overflow: auto;
  padding-bottom: 20px; /*This would hide the scroll bar of the bottom if there is one*/
}
.form_padding {
    padding:0 30px;
}

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