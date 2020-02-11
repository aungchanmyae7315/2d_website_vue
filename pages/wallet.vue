<template>
    <el-main class="wallet">
      <el-header class="wallet_header" >
              <div class="demo-type">
                 <el-avatar :size="60" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                <div  class="avatar_text">
                  <ul>
                    <li>My Balance</li>
                    <li class="amount_mmk">5000 MMk</li>
                  </ul>
                  </div>
              </div>
                <div class="btn_group_wallet">
                <nuxt-link to="/">
                   <el-button round class="withdraw_btn">Withdrawal</el-button>
                </nuxt-link>
              <nuxt-link to="/signup">
                    <el-button type="warning" round>Top Up</el-button>
              </nuxt-link>
              
            </div>
         
            </el-header>
             <div class="longText" id="hidingScrollBar">
                <div class="hideScrollBar hideScrollBar_wallet ">
           
                <el-card>
                  
                  <h5>Sein Lucky Bank Accounts</h5>
                  <p><span style="color:red;">Warning !!!</span> There is no other Sein Lucky bank account except these following bank accounts</p>
                    <div class="demo-type">
                      <el-avatar :size="50" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                      <div  class="avatar_text">
                        <ul>
                          <li>KBZ Bank</li>
                          <li class="bank_number">068-3010-620-0945-901</li>
                        </ul>
                        </div>
                        <div class="result_icon">
                           <el-popover
                            placement="top"
                          
                            width="30"
                            trigger="click"
                            :content="this.message">
                            <el-button  round slot="reference" @click="copy_1">Copy</el-button>
                          </el-popover>
                        </div>
                    </div>
                    <div class="demo-type">
                      <el-avatar :size="50" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                      <div  class="avatar_text">
                        <ul>
                          <li>KBZ Pay</li>
                          <li class="bank_number">0969 886 0088</li>
                        </ul>
                        </div>
                        <div class="result_icon">
                           <el-popover
                            placement="top"
                          
                            width="30"
                            trigger="click"
                            :content="this.message">
                            <el-button  round slot="reference" @click="copy_2">Copy</el-button>
                          </el-popover>
                        </div>
                    </div>
                   <div class="demo-type">
                      <el-avatar :size="50" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                      <div  class="avatar_text">
                        <ul>
                          <li>CB Pay</li>
                          <li class="bank_number">015-8600-5000-258-28</li>
                        </ul>
                        </div>
                        <div class="result_icon">
                           <el-popover
                            placement="top"
                          
                            width="30"
                            trigger="click"
                            :content="this.message">
                            <el-button  round slot="reference" @click="copy_3">Copy</el-button>
                          </el-popover>
                        </div>
                    </div>
                    <div class="demo-type">
                      <el-avatar :size="50" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                      <div  class="avatar_text">
                        <ul>
                          <li>AYA Bank</li>
                          <li class="bank_number">021-7201-010-0346-47</li>
                        </ul>
                        </div>
                        <div class="result_icon">
                           
                            <el-popover
                            placement="top"
                          
                            width="30"
                            trigger="click"
                            :content="this.message">
                            <el-button  round slot="reference" @click="copy_4">Copy</el-button>
                          </el-popover>
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
    height:77px;
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
    .wallet .el-card {
      background-color: #252E39;
      border:2pt solid #FFEA72;
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
      padding:6px 10px;
      margin-top:5px;
    }
    .wallet .el-card__body {
      padding:15px;
    }
    .el-popover--plain {
      text-align: center;
      padding:4px !important;
    }
</style>
<script>
 
  export default {
    data() {
      return {
        kbz_bank:'068-3010-620-0945-901',
        kbz_pay:'09698860088',
        cb_pay:'015-8600-5000-258-28',
        aya_bank:'021-7201-010-0346-47',
        visible: false,
       
        message:''
      };
    },

    methods: {
       copy_1() {
        navigator.clipboard.writeText(this.kbz_bank)
        .then(() => {
          console.log('Text is on the clipboard.');
          this.message = 'copied';
        })
         
    },
    copy_2() {
        navigator.clipboard.writeText(this.kbz_pay)
        .then(() => {
          console.log('Text is on the clipboard.');
          this.message = 'copied';
        })
         
    },
    copy_3() {
        navigator.clipboard.writeText(this.cb_pay)
        .then(() => {
          console.log('Text is on the clipboard.');
          this.message = 'copied';
        })
         
    },
    copy_4() {
        navigator.clipboard.writeText(this.aya_bank)
        .then(() => {
          console.log('Text is on the clipboard.');
          this.message = 'copied';
        })
         
    }
  
    }
  };
</script>