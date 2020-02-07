<template>
    <main class="signup_refel_page ">
                 <div class="longText" id="hidingScrollBar">
                    <div class="hideScrollBar_refel">
                    <img src="~static/images/refel_page/refel_img_one.png" class="acc_refel_img">
                        <!-- <div class="refel_img_two">
                            <img src="~static/images/refel_page/refel_img_two.png" class="">
                        </div>
                     -->
                        <el-card class="box-card">
                            
                            <!-- <h3 >Registartion Successful!!</h3> -->
                            <h5>We are so delighted you are here!</h5> 
                        
                            <!-- <h2 class="background"><span>Optional</span></h2> -->
                            <h4>Have a referral code ?</h4>
                            <p>Please enter referral code and <br>
                                get 500 sein lucky points.
                            </p>
                        <el-input placeholder="Enter a referral code" v-model="referal_code"></el-input>
                        </el-card>
                        <el-button type="info" class="submitRefel" round @click="skip()">Skip</el-button>
                         <el-button type="success" class="submitRefel" round @click="submistRefel()">Summit Referral Code</el-button>
                         
                </div>
             </div>
   
    </main>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            referal_code:'',
            accessToken: '',
        }
    },
    methods: {
         submistRefel() {
          
              //  this.accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjAwYzg5N2IwODFjNDAwZDg4ZDUzYTg4NWRmNWRlYzc1MDE0ODU3NzA1Y2NiZmFiZmQ1YjkxYjI5MTI3ZGI0M2MzMzEwODY0NDU0Y2E5ZGI3In0"
                // alert(this.referal_code)
                // axios.post('https://build.seinlucky.com/api/v1/upload_referal_code', {
                //    headers: headers,
                //      referal_code: this.referal_code,
                   
                    //  access_token:'Bearer'+' '+this.accessToken,

                    
                // })
                let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjBiNTE3YzRhODJlYzFlNWY4OTNmMjY2MDA0N2E4M2I5NWM4OTNhMDE3MzlkNGQ4MTcwNzJlZmY3MzNmNTc0ZDlkMjcwMjFkMWY1NjczNzM0In0 ';
                    axios.post("https://build.seinlucky.com/api/v1/upload_referal_code",[], 
                    {headers: { 'Authorization' : 'Bearer '+ token}})
                    
                    .then(response => {
                    // this.comments = response.data;
                    console.log(response.data)
                })
              
            //    .then(response => {
            //     //    console.log(accessToken)
            //        console.log(response)
            //    })
         
    },
        skip() {
             this.$router.push('/');
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
        margin:50px auto;
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
    margin-top:100px;
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