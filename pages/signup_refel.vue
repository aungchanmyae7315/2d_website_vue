<template>
    <main class="signup_refel_page">
                 <div class="longText" id="hidingScrollBar">
                    <div class="hideScrollBar_refel">
                    <!-- <img src="~static/images/refel_page/refel_img_one.png" class="refel_img"> -->
                        <div class="refel_img_two">
                            <img src="~static/images/refel_page/refel_img_two.png" class="">
                        </div>
                    
                        <el-card class="box-card">
                            
                            <h3 >{{$t('registartion_success')}}</h3>
                            <h5>{{$t('we_are_so_delighted')}}</h5> 
                        
                            <h2 class="background"><span>{{$t('optional')}}</span></h2>
                            <h4>{{$t('have_referral_code')}}</h4>
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
                                   <div style="padding-top:20px;">
                                         <el-button type="success"  round @click="submitRefel('ruleForm')"> တင်ပြမည်</el-button>
                                   </div>
                                    
                             </el-form-item>
                        </el-form>
                        </el-card>
                        <p style="padding-top:20px;">ရည်ညွှန်းကုဒ်မရှိလျှင် ကျော်သွားနိုင်ပါသည်။</p>
                         <el-button type="warning" class="submitRefel" round @click="skip()">ရည်ညှန်းကုဒ်မရှိပါ</el-button>
                         
                </div>
             </div>
   
    </main>
</template>

<script>
import axios from 'axios'
export default {
    mounted() {
        this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => this.$nuxt.$loading.finish(), 500)
        })
    },
    data() {
        return {
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
                // alert(this.ruleForm.referal_code)
                        let token = localStorage.getItem('token');
                        var data_code = {
                            referal_code:this.ruleForm.referal_code

                        }
                        // console.log(token)
                        // console.log(data_code)
                    //    alert(data_code)
                
                        this.$axios.post("/v2/v1/upload_referal_code",data_code,
                            {headers: {
                                    "Authorization": "Bearer "+token
                                }
                                })
                            .then(response => {
                                this.res_data = response.data.data
                                this.error_msg = response.data.message
                                console.log(this.res_data)
                                console.log(this.error_msg)
                                if(this.error_msg == 'fail'){
                                    this.$message({
                                        message:this.$t('refel_code_invalid'),
                                        type: 'warning',
                                        showClose: true,
                                        });
                                }else {
                                    this.$message({
                                    showClose: true,
                                    message: this.$t('you_had_refel_code'),
                                    type: 'success'
                                    });
                                    this.$router.push(`/home?lang=${this.$store.state.locale}`); 
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
             this.$router.push(`/home?lang=${this.$store.state.locale}`); 
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
    .refel_img {
        width:140px;
        height:auto;
        margin:0 auto;
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
.signup_refel_page .el-form-item {
    margin:0;
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