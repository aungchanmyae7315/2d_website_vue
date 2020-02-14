<template>
    <main class="sign_up_main el-main">
      
   
           <img src="~static/images/login_page/login_bg.png" class="login_bg">
          <div class="main_login_page">
              <div class="language">
              <ul>
                <li>
                  <a href="">ဇော်ဂျီ</a>
                </li>
                <li>
                  <a href="">ယူနီကုတ်</a>
                </li>
                <li>
                  <a href="">English</a>
                </li>
                <li>
                  <a href="">Chinese</a>
                </li>
              </ul>
          </div>


       <el-form  ref="" class="demo-ruleForm">
           <!-- <p v-if="success"> 
              <el-button
                plain
             >
                {{ success }}
              </el-button></p>
           <p v-else>
             <el-button
            plain >
            {{error}}
            </el-button>
          </p> -->
           
            <el-form-item
              
                prop="phone"
                :rules="[
                { required: true, message: 'phone is required'},
              
                ]"
            >
                <el-input type="phone" placeholder="Phone" prefix-icon="el-icon-phone" v-model="phone" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item
                prop="password"
                :rules="[
                { required: true, message: 'password is required'},
             
                ]"
            >
                <el-input type="password" show-password placeholder="Password"  prefix-icon="el-icon-lock" v-model="password" autocomplete="off"></el-input>
            </el-form-item>
            <p>{{error}}</p>
            <el-form-item>

                <el-button type="success"  round @click="submitForm('')"  v-loading.fullscreen.lock="fullscreenLoading">Submit</el-button>
                <!-- <el-button @click="resetForm('numberValidateForm')">Reset</el-button> -->
                <el-button type="text" @click="dialogVisible = true">Forgot Password</el-button>
            </el-form-item>
        </el-form>

        <h6>Or</h6>
        <div class="btn_group_sig">
            <nuxt-link to="/">
                  <el-button type="default" round>Skip</el-button>
            </nuxt-link>
           <nuxt-link to="/signup">
                <el-button type="warning" round>Sign Up</el-button>
           </nuxt-link>
          
        </div>
         

              

         </div>
        
      
     
        
    <!-- forgot password modal box     -->

<el-dialog
  title="Tips"
  :visible.sync="dialogVisible"
  width="100%"
  :before-close="handleClose">
  <span>This is a message</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">Cancel</el-button>
    <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
  </span>
</el-dialog>
    
     
  
    
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
           errors:[],
            phone: '',
            password:'',
            success: '',
            error:'',
            response: '',
            fullscreenLoading: false
            
      };
    },
    
    methods: {
      submitForm() {

                axios.post('https://build.seinlucky.com/api/v1/login', {
                    phone: this.phone,
                    password: this.password,
                    
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
                    this.$store.commit('logIn', this.userInfo);
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
                        type: 'success'
                      });
                       this.$router.push('/');
                         
                  }
                 
                })
                  
                // .catch(error => {
                //     this.response = 'Error: ' + error.response
                //   })
                //        this.phone = '';
                    
                //       this.password = '';                     //  if (store.state.phoneResponse = '') {
                //    alert('fail')
                //  }else {
                //    alert ('regds')
                //  }
                // if(state.phoneResponse == 'fail') {
                //   alert('word')
                // }else {
                //   alert('hello')
                // }
                //  this.$router.push('/');
      
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
    display :inline-flex;

  }
  .language ul li {
    list-style :none;
    display :block;
    padding:15px 10px 15px 10px;
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
    margin: 80px auto 20px auto;
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
