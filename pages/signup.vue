<template>
    <main>


 <div class="sign_page">
        <el-page-header @back="goBack">
        </el-page-header>
          <el-form v-if="active===1"  class="demo-ruleForm" >
           
        
        <div class="sign_up_text">
            <h4>What's Your<br> Phone Number</h4>
        </div>
             <div class="phone_input">
            <el-form-item
              
               
            >  
                <el-input type="phone" placeholder="Phone" prefix-icon="el-icon-phone" v-model="phone" ></el-input>
               
            </el-form-item>
            
             </div>
              <el-button type="success" round @click="next()">next</el-button>
        
          </el-form>
        <el-form v-if="active===2"  class="demo-ruleForm" >
          <div class="sign_up_text">
                <h4>We have sent OTP<br> on your number</h4>
            </div>
            <div class="phone_input">
                <el-form-item
                  
                   
                >  
                    <el-input type="otp" placeholder="Enter OTP number" prefix-icon="el-icon-otp" v-model="otp" autocomplete="off"></el-input>
                  
                </el-form-item>
            
             </div>
             <el-button type="success" round @click="nextTwo()">next</el-button>
        </el-form>

        <el-form v-if="active===3"  class="demo-ruleForm" >
           <div class="sign_up_text">
            <h4>Set your Password</h4>
        </div>
             <div class="phone_input">
            <el-form-item
              
               
            >  
                <el-input type="password" placeholder="Password" prefix-icon="el-icon-lock" v-model="password" autocomplete="off"></el-input>
               
            </el-form-item>
            
             </div>
             <el-button type="success" round @click="submitForm()">Submit</el-button>
        </el-form>
        
        <div class="step_bar">

       
            <el-steps :active="active" align-center finish-status="success">
              <el-step title="Step 1">Hello</el-step>
              <el-step title="Step 2">Tow</el-step>
              <el-step title="Step 3"> Therew</el-step>
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
        active: 1,
         input: '',
         phone:'',
         otp:'',
         password:''
        //  numberValidateForm: {
        //     // phone: '',
        //     otp:'',
        //     password:''
        //     }
      };
    },
     methods: {
        
      next() {
        
         axios.post('https://build.seinlucky.com/api/v1/send-otp', {
                    phone: this.phone,
                  
                })
                // console.log(this.phone)
                .then(response => (
                  console.log(response),
                this.userOtp = response.data,
                this.$store.commit('setOtp', this.userOtp),
                console.log(this.userOtp)
                ));
                // console.log(response)
                  // this.$store.commit("setPhone", this.userPhone); 
                if (this.active++ > 2) this.active = 0;

      },
      nextTwo() {
        if(this.active++ > 2) this.active=0;
      },
      submitForm() {
        // this.$refs[formName].validate((valid) => {
         
          // if (valid) {
              if (this.active++ > 2) this.active = 0;
            // alert('submit!');
            // alert(this.phone);
            // alert(this.otp);
            // alert(this.password);
             axios.post('https://build.seinlucky.com/api/v1/register', {
                    phone: this.phone,
                    otp: this.otp,
                    password: this.password
                })
                .then(response => (
                  console.log(response.message),
                   this.userInfo = response.data,
                  this.$store.commit('logIn', this.userInfo),
                  console.log(this.userInfo)
                  
              
                ));
      },

      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
       goBack() {
        this.$router.push('/');
      }
    }
  }
  </script>

  <style>
  .el-page-header__left {
    margin:0;
   padding:20px 5px;
  }
  .sign_page {
      padding:0 20px;
       max-width: 480px;
      width:100%;
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
        margin:30px auto;
    }
    .phone_input .el-input__prefix {
        color:green;
    }
    
  </style>




























