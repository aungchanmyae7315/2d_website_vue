<template>
        <main>
            <div class="withdrawal">
                <div class="longText" id="hidingScrollBar">
                    <div class="hideScrollBar_refel">
                <el-header>
                    <el-page-header @back="goBack" content="Withdrawal">
                    </el-page-header>
                </el-header>
                <p>Select your receiving bank</p>
                <el-card>
                    <el-radio-group v-model="radio1">
                        <ul class="choose_pay">
                            <li >
                                 <img src="~/static/images/topup_withdraw/kbz_img.png" alt="">
                                 <el-radio-button  label="KBZ Bank"></el-radio-button>
                            </li>
                             <li>
                                  <img src="~/static/images/topup_withdraw/kbz_pay_img.png" alt="">
                                  <el-radio-button  label="KBZ Pay"></el-radio-button>
                            </li>
                             <li>
                                  <img src="~/static/images/topup_withdraw/cb_pay_img.png" alt="">
                                  <el-radio-button  label="CB Pay"></el-radio-button>
                            </li>
                             <li>
                                  <img src="~/static/images/topup_withdraw/aya_img.png" alt="">
                                  <el-radio-button  label="AYA Bank"></el-radio-button>
                            </li>
                             <li>
                                  <img src="~/static/images/topup_withdraw/wavepay_img.png" alt="">
                                  <el-radio-button  label="Wave Pay"></el-radio-button>
                            </li>
                        </ul>

                    </el-radio-group>
                </el-card>
                <el-form>
                    <el-form-item label="Bank Card Number" class="tran_input" >
                        <el-input   type="text" placeholder="Please enter Card Number" v-model="tran_input" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="Withdraw Amount" class="tran_amount tran_input" >
                        <el-input   type="text" placeholder="Please enter  Amount" v-model="tran_amount" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="Password" class="password tran_input" >
                        <el-input type="password" show-password placeholder="Password" v-model="password" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                 <el-button round @click="withdrawal">Summit</el-button>
                    </div>
                </div>
            </div>
        </main>
</template>
<style>
     .withdrawal {
        padding:0 20px;
    }
    .withdrawal .el-header {
       background-color :#fff;

    }
    .el-page-header__left {
        margin:0;
    }
    .withdrawal .el-page-header {
        line-height: 43px;
        color:#000;
       
    }
    .withdrawal .el-page-header__content {
        color:#000;
        font-weight: bold;
    }
    .tran_input .el-input__inner {
        background-color: #E6E6E6;
        color:#666666;
    }
   
    .withdrawal p {
        color:#666666;
    }
    .withdrawal .choose_pay {
        list-style: none;
        padding:0;
        margin:10px auto;
    }
    .choose_pay img {
        width:40px;
        height: auto;
        margin-right:40px;
        -webkit-box-shadow: 1px 1px 15px -6px rgba(0,0,0,0.75);
        -moz-box-shadow: 1px 1px 15px -6px rgba(0,0,0,0.75);
        box-shadow: 1px 1px 15px -6px rgba(0,0,0,0.75);
    }
    .withdrawal .el-radio-button__orig-radio:checked+.el-radio-button__inner {
        color:#158220;
        font-weight: bold;
        border:0;
        background: unset;
        box-shadow:unset;
    }

      .withdrawal .el-radio-button__orig-radio:checked+.el-radio-button__inner::after {
          content: "\2713";

        font-size: 15px;
        width: 20px;
        margin-left:40px;
        height: 20px;
        float: right;
       
      }
    .withdrawal .el-radio-button__inner {
        border:0;
    }
    .withdrawal .el-form-item__label {
        color:#000;
    }
     .withdrawal .el-button.is-round{
        
        position: relative;
        margin-top:140px;
        max-width: 480px;
        width:100%;
        margin-bottom:20px;
        background-color: #158220;
        color:#fff;
    }
</style>

<script>
export default {
    data() {
        return {
            tran_input:'',
            tran_amount:'',
            password:'',

              radio1: 'KBZ Bank',
            radio2: 'New York',
            radio3: 'New York',
            radio4: 'New York'
        }
    },
    methods: {
        goBack() {
              this.$router.push('/wallet');
        },
        withdrawal() {
             this.$router.push('/withdraw_success');
        }
    }
}
</script>