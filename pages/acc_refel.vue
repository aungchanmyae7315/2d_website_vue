<template>
    <main class="signup_refel_page ">
                 <div class="longText" id="hidingScrollBar">
                    <div class="hideScrollBar_refel">
                    <img src="~static/images/refel_page/refel_img_one.png" class="acc_refel_img">
                        <!-- <div class="refel_img_two">
                            <img src="~static/images/refel_page/refel_img_two.png" class="">
                        </div>
                     -->
                         <h5 style="color:#85CE61;font-weight:bold">{{$t('you_referral_code')}}</h5>
                        <el-card class="box-card">
                            
                            <!-- <h3 >Registartion Successful!!</h3> -->
                          <!--  <h5>{{$t('we_are_so_delighted')}}</h5> -->
                        
                            <!-- <h2 class="background"><span>Optional</span></h2> -->
                           <!-- <h4>{{$t('have_referral_code')}}</h4> -->
                            <p>{{$t('please_enter_referral_code')}}
                            </p>
                        <el-form :model="ruleForm" ref="ruleForm"  class="demo-ruleForm" >
                             <el-form-item
                                   
                                    prop="referal_code"
                                    :rules="[
                                        { required: true, message: $t('enter_referral_code') },
                                        
                                    ]"
                                    
                                    >  
                                    <el-input :placeholder="$t('enter_referral_code')" v-model="ruleForm.referal_code"></el-input>
                             </el-form-item>
                        </el-form>
                        </el-card>
                        <el-button type="info" class="submitRefel" round @click="skip()">{{$t('Skip')}}</el-button>
                         <el-button type="success" class="submitRefel" :disabled='submitted' round @click="submitRefel('ruleForm')">{{$t('summit_referral_code')}}</el-button>
                         
                </div>
             </div>
    </main>
</template>

<script>
import axios from 'axios'
export default {
    
    data() {
        return {
             submitted:false,
            ruleForm: {
                 referal_code:'',

                },
             errors:[],
           
            accessToken: '',
        }
    },
    methods: {
         submitRefel(formName) {
            
              
              this.$refs[formName].validate((valid) => {
             if (valid) {
                  this.submitted = true
                // alert(this.ruleForm.referal_code)
                        let token = localStorage.getItem('token');
                        var data_code = {
                            referal_code:this.ruleForm.referal_code

                        }
                        // console.log(token)
                        // console.log(data_code)
                       // alert(data_code)
                
                         this.$axios.post("/v2/v1/upload_referal_code",data_code,
                            {headers: {
                                    "Authorization": "Bearer "+token
                                }
                                })
                            .then(response => {
                                this.res_data = response.data.data
                                this.error_msg = response.data.message
                               
                                
                                if(this.error_msg == 'fail'){
                                    this.$message({
                                        message:this.$t('refel_code_invalid'),
                                        type: 'warning',
                                        showClose: true,
                                        // duration:0
                                        });
                                }else {
                                    // this.$message({
                                    // message: ',You had already entered a referral code',
                                    // type: 'success'
                                    // });
                                    this.$router.push(`/refel_success?lang=${this.$store.state.locale}`); 
                                }
                                
                            // console.log(this.name_update = response.data.data)
              
                })


             
             }else {
                   console.log('error submit!!');
                return false;
                  
                }
            });
                  
             
        
         
    },
        skip() {
             this.$router.push(`/?lang=${this.$store.state.locale}`); 
        }
    }
}
</script>
<style>
    .signup_refel_page {
        max-width: 480px;
        width:100%;
        height:100vh;
        margin:0 auto;
        text-align: center;
    }
    .acc_refel_img {
        width:140px;
        height:auto;
        margin:20px auto;
    } 
    .refel_img_two img {
        width:80px;
        height:auto;
        position: relative;
        top: 43px;
    }
   .signup_refel_page h2.background {
    position: relative;
    margin:25px auto;
    z-index: 1;
    }
    .signup_refel_page .box-card h3 {
        margin:40px auto 10px auto;
        color:#5AAF46;
        font-weight: bold;
        font-size: 21px;
    }
    .signup_refel_page .box-card h5 {
        color:#35343A;
        font-size:16px;
    }
    .signup_refel_page .box-card p {
        color:#35343A;
    }
    .signup_refel_page .el-card {
        border-radius: 13px;
    }
.signup_refel_page h2.background:before {
  border-top: 1px solid #BFBFBF;
  content: "";
  margin: 4px auto 0 auto;

  /* this centers the line to the full width specified */
  position: absolute;
  /* positioning must be absolute here, and relative positioning must be applied to the parent */
  top: 50%;
  left: 0;
  right: 0;
  bottom: 0;
  width: 95%;
  z-index: -1;
}
.signup_refel_page h2.background span {
  /* to hide the lines from behind the text, you have to set the background color the same as the container */
  background: #fff;
  padding: 0 15px;
  font-size:17px;
 
}
.submitRefel {
    margin-top:20px;
    margin-bottom:20px;
    /* width:100%; */
}
.hideScrollBar_refel {
    width: 100%;
    height: 100%;
    overflow: auto;
    margin-left: 17px;
    padding-right: 28px;
}
</style>