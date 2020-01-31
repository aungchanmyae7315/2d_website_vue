<template>
    <main>


 <div class="sign_page">
        <el-page-header @back="goBack">
        </el-page-header>
          <el-form v-if="active===1" :model="numberValidateForm" ref="numberValidateForm" class="demo-ruleForm" >
           
        
        <div class="sign_up_text">
            <h4>What's Your<br> Phone Number</h4>
        </div>
             <div class="phone_input">
            <el-form-item
              
                prop="phone"
                :rules="[
                { required: true, message: 'phone is required'},
                { type: 'number', message: 'phone must be a number'}
                ]"
            >  
                <el-input type="phone" placeholder="Phone" prefix-icon="el-icon-phone" v-model.number="numberValidateForm.phone" autocomplete="off"></el-input>
               
            </el-form-item>
            
             </div>
             
          </el-form>
        <el-form v-if="active===2" :model="numberValidateForm" ref="numberValidateForm" class="demo-ruleForm" >
          <div class="sign_up_text">
                <h4>We have sent OTP<br> on your number</h4>
            </div>
            <div class="phone_input">
                <el-form-item
                  
                   
                >  
                    <el-input type="otp" placeholder="Enter OTP number" prefix-icon="el-icon-otp" v-model.number="numberValidateForm.otp" autocomplete="off"></el-input>
                  
                </el-form-item>
            
             </div>
        </el-form>

        <el-form v-if="active===3" :model="numberValidateForm" ref="numberValidateForm" class="demo-ruleForm" >
           <div class="sign_up_text">
            <h4>Set your Password</h4>
        </div>
             <div class="phone_input">
            <el-form-item
              
                prop="password"
                :rules="[
                { required: true, message: 'password is required'},
                { type: 'number', message: 'password must be a number'}
                ]"
            >  
                <el-input type="password" placeholder="Password" prefix-icon="el-icon-lock" v-model.number="numberValidateForm.password" autocomplete="off"></el-input>
               
            </el-form-item>
            
             </div>
        </el-form>


        <!-- <div class="phone_input">
          <el-input
             placeholder="eg.097 xxx xxx"
            v-model="input"
            clearable>
             <i slot="prefix" class="el-input__icon el-icon-phone"></i>
          </el-input>
        </div> -->
        
        <div class="step_bar">

       
            <el-steps :active="active" align-center finish-status="success">
              <el-step title="Step 1">Hello</el-step>
              <el-step title="Step 2">Tow</el-step>
              <el-step title="Step 3"> Therew</el-step>
            </el-steps>
       
         </div>
     
                <el-button type="success" round @click="submitForm('numberValidateForm')">Submit</el-button>
                <!-- <el-button @click="resetForm('numberValidateForm')">Reset</el-button> -->
        
    </div>
        </main>
</template>


<script>
  export default {
      layout: 'loginLayout',
    data() {
      return {
        active: 1,
         input: '',
         numberValidateForm: {
            phone: '',
            otp:'',
            password:''
            }
      };
    },
     methods: {
        submitForm(formName) {
        this.$refs[formName].validate((valid) => {
         
          if (valid) {
              if (this.active++ > 2) this.active = 0;
            alert('submit!');
            // this.axios.post('http://localhost:8000/yourPostApi', {
            //         phone: this.phone,
                  
            //     })
            //     .then(function (response) {
            //         this.output = response.data;
            //     })
            //     alert(this.output);
  
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      //  methods: {
      //       formSubmit(e) {
      //           e.preventDefault();
      //           let currentObj = this;
      //           this.axios.post('http://localhost:8000/yourPostApi', {
      //               name: this.name,
      //               description: this.description
      //           })
      //           .then(function (response) {
      //               currentObj.output = response.data;
      //           })
      //           .catch(function (error) {
      //               currentObj.output = error;
      //           });
      //       }
      //   }
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      // submitForm(formName) {
        // if (this.active++ > 2) this.active = 0;
      // },
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