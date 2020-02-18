<template>
    <el-main class="wallet">
      <el-header class="wallet_header" >
              <div class="demo-type">
                 <el-avatar :size="50" > <img src="~/static/images/topup_withdraw/kbz_img.png" alt=""></el-avatar>
                <div  class="avatar_text">
                  <ul>
                    <li>My Balance</li>
                    <li class="amount_mmk">5000 MMk</li>
                  </ul>
                  </div>
              </div>
                <div class="btn_group_wallet">
                <nuxt-link to="/withdrawal">
                   <el-button round class="withdraw_btn">Withdrawal</el-button>
                </nuxt-link>
              <nuxt-link to="/topup">
                    <el-button type="warning" round>Top Up</el-button>
              </nuxt-link>
              
            </div>
         
            </el-header>
             <div class="longText" id="hidingScrollBar">
                <div class="hideScrollBar hideScrollBar_wallet ">
           
                <el-card>
                  


               
                    
                  
            








                  <h5>Sein Lucky Bank Accounts</h5>
                  <p><span style="color:red;">Warning !!!</span> There is no other Sein Lucky bank account except these following bank accounts</p>
                    <div class="demo-type wallet_type">
                      <el-avatar :size="50" > <img src="~/static/images/topup_withdraw/kbz_img.png" alt=""></el-avatar>
                      <div  class="avatar_text">
                        <ul>
                          <li>KBZ Bank</li>
                          <li class="bank_number">
                            <span class="code text-red">{{ kbz_bank }}</span>
                          <input type="hidden" id="kbz-code" :value="kbz_bank">
                          </li>
                        </ul>
                        </div>
                        <div class="result_icon">
                            <span class="  copy-btn ml-auto" @click.stop.prevent="copyTestingCode_1">
                            Copy
                          </span>
                        </div>
                    </div>
                    <div class="demo-type wallet_type">
                     <el-avatar :size="50" > <img src="~/static/images/topup_withdraw/kbz_pay_img.png" alt=""></el-avatar>
                      <div  class="avatar_text">
                        <ul>
                          <li>KBZ Pay</li>
                          <li class="bank_number">
                              <span class="code text-red">{{ kbz_pay }}</span>
                            <input type="hidden" id="kbz_pay-code" :value="kbz_pay">
                          </li>
                        </ul>
                        </div>
                        <div class="result_icon">
                          <span class="  copy-btn ml-auto" @click.stop.prevent="copyTestingCode_2">
                            Copy
                          </span>
                        </div>
                    </div>
                   <div class="demo-type wallet_type">
                      <el-avatar :size="50" > <img src="~/static/images/topup_withdraw/cb_pay_img.png" alt=""></el-avatar>
                      <div  class="avatar_text">
                        <ul>
                          <li>CB Pay</li>
                          <li class="bank_number">
                               <span class="code text-red">{{ cb_pay }}</span>
                              <input type="hidden" id="cb_pay-code" :value="cb_pay">
                          </li>
                        </ul>
                        </div>
                        <div class="result_icon">
                          <span class="  copy-btn ml-auto" @click.stop.prevent="copyTestingCode_3">
                            Copy
                          </span>
                        </div>
                    </div>
                    <div class="demo-type wallet_type">  
                      
                      <el-avatar :size="50" > <img src="~/static/images/topup_withdraw/aya_img.png" alt=""></el-avatar>
                      <div  class="avatar_text">
                        <ul>
                          <li>AYA Bank</li>
                          <li class="bank_number">
                             <span class="code text-red">{{ aya_bank }}</span>
                              <input type="hidden" id="aya-code" :value="aya_bank">
                          </li>
                        </ul>
                        </div>
                        <div class="result_icon">
                           <span class="  copy-btn ml-auto" @click.stop.prevent="copyTestingCode_4">
                            Copy
                          </span>
                           
                        </div>
                    </div>
                    <div class="demo-type wallet_type">  
                      
                        <el-avatar :size="50" > <img src="~/static/images/topup_withdraw/wavepay_img.png" alt=""></el-avatar>
                      <div  class="avatar_text">
                        <ul>
                          <li>Wave Pay</li>
                          <li class="bank_number">
                             <span class="code text-red">{{ wave_pay }}</span>
                              <input type="hidden" id="wave-code" :value="wave_pay">
                          </li>
                        </ul>
                        </div>
                        <div class="result_icon">
                           <span class="  copy-btn ml-auto" @click.stop.prevent="copyTestingCode_5">
                            Copy
                          </span>
                           
                        </div>
                    </div>
                      
                </el-card>
                </div>
                </div>















            <el-footer class="footer">
              <el-menu
                
                class="el-menu-demo"
                mode="horizontal"
                text-align="center"
                
                background-color="#14612D"
                text-color="#fff"
                width="100%"
                active-text-color="#ffd04b">
                <el-menu-item index="1">
                  <nuxt-link to="/"><img src="~static/icons_header/dimond_icon.png" alt=""></nuxt-link>
                  
                </el-menu-item>
                <el-menu-item index="2">
                    <nuxt-link to="/wallet" type="wallet"><img src="~static/icons_header/wallet_icon.png" alt=""></nuxt-link>
                </el-menu-item>
                <el-menu-item index="3">
                    <nuxt-link to="/service"><img src="~static/icons_header/service_icon.png" alt=""></nuxt-link>
                </el-menu-item>
                  <el-menu-item index="4">
                    <nuxt-link to="/me"><img src="~static/icons_header/me_icon.png" alt=""></nuxt-link>
                </el-menu-item>


              </el-menu>
      </el-footer>
  </el-main>
</template>
<style>
  
  .wallet_header {
     
        height:auto !important;
    }
    .hideScrollBar_wallet {
      padding-top:23px ;
      padding-bottom:223px ;
    }
  .wallet_header .demo-type {
   
    padding:0 10px;
    height:63px;
  }
    .header {
        background-color :#2A612D;
        
    }
    .btn_group_wallet {
      text-align: center;
    }
    .btn_group_wallet .el-button.is-round {
      width:46%;
    }
    .btn_group_wallet .el-button--warning {
      color: #000;
      background-color: #fff;
      border-color: #fff;
    }
    .withdraw_btn {
      background: unset;
      border-color: #fff;
      color:#fff;
    }
    .el-main {
      margin-top:-1px !important;
    }
    .copy-btn {
      background: #fff;
      padding:4px 7px;
      border-radius: 23px;
      font-size:11px;
    }
    .wallet .el-card {
      background-color: #252E39;
      border:2pt solid #FFEA72;
      border-radius: 13px;
    }
    .wallet  h5 {
      color:#fff;
    }
    .wallet p {
      color:#CCCCCC;
      padding-bottom:15px;
      border-bottom:1px solid #425266;
    }
    .wallet .avatar_text {
      padding:0;
    }
    .wallet .bank_number {
      color:#CCCCCC;
      font-size: 13px;
    }
    .wallet .el-card .demo-type {
      padding:0;
     
     
    }
    .wallet .el-card .el-button.is-round {
      padding:6px 7px;
      margin-top:5px;
    }
    .wallet .el-card__body {
      padding:15px;
    }
    .el-popover--plain {
      text-align: center;
      padding:4px !important;
    }
    .wallet_type .el-avatar--circle {
      border-radius: 22%;
    }
    .wallet_type .el-button {
      font-size: 11px;
    }
    .wallet_type .el-avatar ul {
      padding:5px;
    }
</style>
<script>
 
  export default {
    data() {
      return {
        testingCode: "068-3010-620-0945-901",
        kbz_bank:'068-3010-620-0945-901',
        kbz_pay:'09698860088',
        cb_pay:'015-8600-5000-258-28',
        aya_bank:'021-7201-010-0346-47',
        wave_pay:'09257578394',
        visible: false,
       
        message:''
      };
    },

    methods: {



       copyTestingCode_1 () {
          let testingCodeToCopy = document.querySelector('#kbz-code')
          testingCodeToCopy.setAttribute('type', 'text')    // 不是 hidden 才能複製
          testingCodeToCopy.select()

          try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
             this.$notify({
               message:'Copied'+' '+ msg,
              position: 'bottom-right',
              showClose: false
            });
            
          } catch (err) {
            alert('Oops, unable to copy');
          }

          /* unselect the range */
          testingCodeToCopy.setAttribute('type', 'hidden')
          window.getSelection().removeAllRanges()
        },
        copyTestingCode_2 () {
          let testingCodeToCopy = document.querySelector('#kbz_pay-code')
          testingCodeToCopy.setAttribute('type', 'text')    // 不是 hidden 才能複製
          testingCodeToCopy.select()

          try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
             this.$notify({
               message:'Copied'+' '+ msg,
              position: 'bottom-right',
              showClose: false
            });
          } catch (err) {
            alert('Oops, unable to copy');
          }

          /* unselect the range */
          testingCodeToCopy.setAttribute('type', 'hidden')
          window.getSelection().removeAllRanges()
        },
        copyTestingCode_3 () {
          let testingCodeToCopy = document.querySelector('#cb_pay-code')
          testingCodeToCopy.setAttribute('type', 'text')    // 不是 hidden 才能複製
          testingCodeToCopy.select()

          try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
             this.$notify({
                message:'Copied'+' '+ msg,
              position: 'bottom-right',
              showClose: false
            });
          } catch (err) {
            alert('Oops, unable to copy');
          }

          /* unselect the range */
          testingCodeToCopy.setAttribute('type', 'hidden')
          window.getSelection().removeAllRanges()
        },
        copyTestingCode_4 () {
          let testingCodeToCopy = document.querySelector('#aya-code')
          testingCodeToCopy.setAttribute('type', 'text')    // 不是 hidden 才能複製
          testingCodeToCopy.select()

          try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
             this.$notify({
               message:'Copied'+' '+ msg,
              position: 'bottom-right',
              showClose: false
            });
          } catch (err) {
            alert('Oops, unable to copy');
          }

          /* unselect the range */
          testingCodeToCopy.setAttribute('type', 'hidden')
          window.getSelection().removeAllRanges()
        },
        copyTestingCode_5 () {
          let testingCodeToCopy = document.querySelector('#wave-code')
          testingCodeToCopy.setAttribute('type', 'text')    // 不是 hidden 才能複製
          testingCodeToCopy.select()

          try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
             this.$notify({
              message:'Copied'+' '+ msg,
              position: 'bottom-right',
              showClose: false
            });
          } catch (err) {
            alert('Oops, unable to copy');
          }

          /* unselect the range */
          testingCodeToCopy.setAttribute('type', 'hidden')
          window.getSelection().removeAllRanges()
        },

    }
  };
</script>