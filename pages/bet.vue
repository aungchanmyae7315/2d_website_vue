<template>
    <div class="bet_container">
        <el-header>
            <el-page-header @back="goBack()">
            </el-page-header>
            <el-row>
                <el-col :span="6">
                    
                    <div v-if="check_btn[0] != null">
                        <el-button @click="clear_btn()" class="fast_btn" >clear</el-button>
                    </div>
                    <div v-else>
                        <el-button  class="fast_btn" >Fast</el-button>
                    </div>
                      
                </el-col>
                <el-col :span="18">
                    <el-input class="bet_input" placeholder="500 Ks"  v-model="input_bet">
                    </el-input>
                </el-col>
            </el-row>
            
            <el-row>
              
                <el-col :span="12"><div class="betclose_text">Bet Close: 14:35:93</div></el-col>
                <el-col :span="12"> <div class="balance_amount">Balance:5,000 ks</div></el-col>
                <!-- <el-col :span="8"><div type="text">Text Button</div></el-col> -->
            </el-row>

             <div v-if ="!$store.state.isLoggedIn" class="bet_footer">
                 <nuxt-link to="login">
                    <el-button  type="warning" round>Please Login to bet</el-button>
                 </nuxt-link>
             </div>
            <div v-else>
               <el-button type="warning" class="bet_btn_login" round>Bet</el-button>
            </div>
        </el-header>
        <div class="longText" id="hidingScrollBar">
            <div class="hideScrollBar_bet">
                <div class="all_btn">
                <!-- <q-btn color="primary" label="Primary" ></q-btn> -->
    

                <!-- <q-btn class="btn number-btns" label="01"></q-btn>
                <q-btn class="btn number-btns" label="02"></q-btn>
                <q-btn class="btn number-btns" label="03"></q-btn>
                <q-btn class="btn number-btns" label="04"></q-btn>
                <q-btn class="btn number-btns" label="05"></q-btn>
                <q-btn class="btn number-btns" label="06"></q-btn>
                <q-btn class="btn number-btns" label="07"></q-btn>
                <q-btn class="btn number-btns" label="08"></q-btn>
                <q-btn class="btn number-btns" label="09"></q-btn>
                <q-btn class="btn number-btns" color="primary" label="10"></q-btn>
                <q-btn class="btn number-btns" label="11"></q-btn>
                <q-btn class="btn number-btns" label="12"></q-btn>
                <q-btn class="btn number-btns" label="13"></q-btn>
                <q-btn class="btn number-btns" label="14"></q-btn>
                <q-btn class="btn number-btns" label="15"></q-btn>
                <q-btn class="btn number-btns" label="16"></q-btn>
                <button class="btn hello-btns">02</button>
                <button class="btn hello-btns">03</button> -->

            
                <!-- <button style="background:#14612D" class="btn btn_sm" :class="{ active: isActive }" @click="add_btn_select">00</button>
                <button style="background:#14612D" class="btn btn_sm" :class="{ active: isActive }" @click="add_btn_select">01</button>
                <button style="background:#14612D" class="btn btn_sm" :class="{ active: isActive }" @click="add_btn_select">02</button>
                <button style="background:#14612D" class="btn btn_sm" :class="{ active: isActive }" @click="add_btn_select">03</button>
                <button style="background:#14612D" class="btn btn_sm" :class="{ active: isActive }" @click="add_btn_select">04</button>
                <button style="background:#14612D" class="btn btn_sm" :class="{ active: isActive }" @click="add_btn_select">05</button>
                <button style="background:#14612D" class="btn btn_sm" :class="{ active: isActive }" @click="add_btn_select">06</button>
                <button style="background:#14612D" class="btn btn_sm" :class="{ active: isActive }" @click="add_btn_select">07</button>
                <button style="background:#14612D" class="btn btn_sm" :class="{ active: isActive }" @click="add_btn_select">08</button>
                <button style="background:#14612D" class="btn btn_sm" :class="{ active: isActive }" @click="add_btn_select">09</button>

                <button style="background:rgb(195, 171, 75)" class="btn btn_md" :class="{ active: isActive }" @click="add_btn_select">10</button>
                <button style="background:rgb(195, 171, 75)" class="btn btn_md" :class="{ active: isActive }" @click="add_btn_select">11</button>
                <button style="background:rgb(195, 171, 75)" class="btn btn_md" :class="{ active: isActive }" @click="add_btn_select">12</button>
                <button style="background:rgb(195, 171, 75)" class="btn btn_md" :class="{ active: isActive }" @click="add_btn_select">13</button>
                <button style="background:rgb(195, 171, 75)" class="btn btn_md" :class="{ active: isActive }" @click="add_btn_select">14</button>
                <button style="background:rgb(195, 171, 75)" class="btn btn_md" :class="{ active: isActive }" @click="add_btn_select">15</button>
                <button style="background:rgb(195, 171, 75)" class="btn btn_md" :class="{ active: isActive }" @click="add_btn_select">16</button>
                <button style="background:rgb(195, 171, 75)" class="btn btn_md" :class="{ active: isActive }" @click="add_btn_select">17</button>
                <button style="background:rgb(195, 171, 75)" class="btn btn_md" :class="{ active: isActive }" @click="add_btn_select">18</button>
                <button style="background:rgb(195, 171, 75)" class="btn btn_md" :class="{ active: isActive }" @click="add_btn_select">19</button>
    
                <button style="background:#14612D" class="btn btn_sm" :class="{ active: isActive }" @click="add_btn_select">21</button>
                <button style="background:#14612D" class="btn btn_sm" :class="{ active: isActive }" @click="add_btn_select">21</button>
                <button style="background:#14612D" class="btn btn_sm" :class="{ active: isActive }" @click="add_btn_select">23</button>
                <button style="background:#14612D" class="btn btn_sm" :class="{ active: isActive }" @click="add_btn_select">24</button>
                <button style="background:#14612D" class="btn btn_sm" :class="{ active: isActive }" @click="add_btn_select">25</button>
                <button style="background:#14612D" class="btn btn_sm" :class="{ active: isActive }" @click="add_btn_select">26</button>
                <button style="background:#14612D" class="btn btn_sm" :class="{ active: isActive }" @click="add_btn_select">27</button>
                <button style="background:#14612D" class="btn btn_sm" :class="{ active: isActive }" @click="add_btn_select">28</button>
                <button style="background:#14612D" class="btn btn_sm" :class="{ active: isActive }" @click="add_btn_select">29</button>
                <button style="background:#14612D" class="btn btn_sm" :class="{ active: isActive }" @click="add_btn_select">30</button>

                <button style="background:rgb(195, 171, 75)" class="btn btn_md" :class="{ active: isActive }" @click="add_btn_select">31</button>
                <button style="background:rgb(195, 171, 75)" class="btn btn_md" :class="{ active: isActive }" @click="add_btn_select">32</button>
                <button style="background:rgb(195, 171, 75)" class="btn btn_md" :class="{ active: isActive }" @click="add_btn_select">33</button>
                <button style="background:rgb(195, 171, 75)" class="btn btn_md" :class="{ active: isActive }" @click="add_btn_select">34</button>
                <button style="background:rgb(195, 171, 75)" class="btn btn_md" :class="{ active: isActive }" @click="add_btn_select">35</button>
                <button style="background:rgb(195, 171, 75)" class="btn btn_md" :class="{ active: isActive }" @click="add_btn_select">36</button>
                <button style="background:rgb(195, 171, 75)" class="btn btn_md" :class="{ active: isActive }" @click="add_btn_select">37</button>
                <button style="background:rgb(195, 171, 75)" class="btn btn_md" :class="{ active: isActive }" @click="add_btn_select">38</button>
                <button style="background:rgb(195, 171, 75)" class="btn btn_md" :class="{ active: isActive }" @click="add_btn_select">39</button>
                <button style="background:rgb(195, 171, 75)" class="btn btn_md" :class="{ active: isActive }" @click="add_btn_select">40</button>

                <button style="background:#14612D" class="btn btn_sm" :class="{ active: isActive }" @click="add_btn_select">41</button>
                <button style="background:#14612D" class="btn btn_sm" :class="{ active: isActive }" @click="add_btn_select">41</button>
                <button style="background:#14612D" class="btn btn_sm" :class="{ active: isActive }" @click="add_btn_select">43</button>
                <button style="background:#14612D" class="btn btn_sm" :class="{ active: isActive }" @click="add_btn_select">44</button>
                <button style="background:#14612D" class="btn btn_sm" :class="{ active: isActive }" @click="add_btn_select">45</button>
                <button style="background:#14612D" class="btn btn_sm" :class="{ active: isActive }" @click="add_btn_select">46</button>
                <button style="background:#14612D" class="btn btn_sm" :class="{ active: isActive }" @click="add_btn_select">47</button>
                <button style="background:#14612D" class="btn btn_sm" :class="{ active: isActive }" @click="add_btn_select">48</button>
                <button style="background:#14612D" class="btn btn_sm" :class="{ active: isActive }" @click="add_btn_select">49</button>
                <button style="background:#14612D" class="btn btn_sm" :class="{ active: isActive }" @click="add_btn_select">40</button>

                <button style="background:rgb(195, 171, 75)" class="btn btn_md" :class="{ active: isActive }" @click="add_btn_select">51</button>
                <button style="background:rgb(195, 171, 75)" class="btn btn_md" :class="{ active: isActive }" @click="add_btn_select">52</button>
                <button style="background:rgb(195, 171, 75)" class="btn btn_md" :class="{ active: isActive }" @click="add_btn_select">53</button>
                <button style="background:rgb(195, 171, 75)" class="btn btn_md" :class="{ active: isActive }" @click="add_btn_select">54</button>
                <button style="background:rgb(195, 171, 75)" class="btn btn_md" :class="{ active: isActive }" @click="add_btn_select">55</button>
                <button style="background:rgb(195, 171, 75)" class="btn btn_md" :class="{ active: isActive }" @click="add_btn_select">56</button>
                <button style="background:rgb(195, 171, 75)" class="btn btn_md" :class="{ active: isActive }" @click="add_btn_select">57</button>
                <button style="background:rgb(195, 171, 75)" class="btn btn_md" :class="{ active: isActive }" @click="add_btn_select">58</button>
                <button style="background:rgb(195, 171, 75)" class="btn btn_md" :class="{ active: isActive }" @click="add_btn_select">59</button>
                <button style="background:rgb(195, 171, 75)" class="btn btn_md" :class="{ active: isActive }" @click="add_btn_select">50</button> -->
                    <el-checkbox-group v-model="check_btn">
                        <el-checkbox-button v-for="btn in btns"   :label="btn" :key="btn">{{btn}}</el-checkbox-button>
                    </el-checkbox-group>
                
                </div>
            </div>
        </div>
         <el-footer class="bet_footer">
             <!-- <div v-if ="!$store.state.isLoggedIn">
                 <nuxt-link to="login">
                    <el-button  type="warning" round>Please Login to bet</el-button>
                 </nuxt-link>
             </div>
            <div v-else>
               <el-button type="warning" class="bet_btn_login" round>Bet</el-button>
            </div> -->
         </el-footer>
            
    </div>
    
</template>

<style>
    .bet_container .el-header {
        color:#fff;
        padding:20px;
    }
  
    .bet_footer .el-button {
        background: linear-gradient(#FDD164, #BB8834);
        color:#4D2707;
        font-size: 17px;
        font-weight: bold;
        border:unset;
        width:100%;
        margin-top:15px;
        border-radius: 36px;
    }
    .bet_footer .bet_btn_login {
        width:120px;
    }
    .bet_container {
        background-image:url(~static/images/main_bg.png); 
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        height: 100vh;
    }
    .bet_container .el-checkbox-button__inner 
    {
        border: 0;
        margin: 11px;
        border-radius: 10px;
        padding: 14px 16px;
        color: #e0dddd;
        background:#14612D;
        font-weight: bold;
    }
    .el-checkbox-button:first-child .el-checkbox-button__inner {
          border-radius: 10px;
          border-left:unset;
    }
    .el-checkbox-button:last-child .el-checkbox-button__inner {
         border-radius: 10px;
    }
    .bet_container .el-checkbox-group {
        margin-bottom:250px;
    }
    .bet_container .el-header {
        background: #2A612D;
        height:auto !important;
    }
    .el-page-header__left {
        margin:0;
    }
    /* .bet_input {
        margin-top:15px;
    } */
    .fast_btn {
        background: #D4E2FF;
        color: green;
       
    }
 
 
    .bet_container  .el-input__inner{
       text-align: right;
       font-size:20px;
    }
    .bet_container .el-row {
        margin-top:10px;
       
    }
    .el-input-group__prepend {
        color:#000;
        font-weight: bold;
        font-size:22px;
    }
    .all_btn {
        text-align: center;
        height:100vh;
    }
    .hideScrollBar_bet {
        width: 100%;
        height: 100%;
        overflow: auto;
        margin-left: 17px;
        padding-right: 28px;
        padding-top: 20px;
        margin-bottom:250px;
    }
    .balance_amount {
        text-align: right;
    }
    .betclose_text {
        color:#CCCCCC;
    }
    /* .btn {
   border: 0;
   margin: 11px;
   border-radius: 10px;
   padding: 14px 16px;
   color: #e0dddd;
   font-weight: bold;
} */
/* .active {
   border: 0;
   margin: 11px;
   border-radius: 10px;
   padding: 14px 16px;
   background:red !important;
   color:#fff;
   font-weight: bold;
}
.active:focus {
   border-color:#000;
}
.isActive {
   border: 0;
   margin: 11px;
   border-radius: 10px;
   padding: 14px 16px;
   color:#e0dddd;
   font-weight: bold;
   
} */
</style>

<script>
 const btn_options = ['00','01', '02', '03', '04','05','06','07','08','09','10',
                      '11','12','13','14','15','16','17','18','19','20',
                      '21','22','23','24','25','26','27','28','29','30',
                      '31','32','33','34','35','36','37','38','39','40',
                      '41','42','43','44','45','46','47','48','49','50',
                      '51','52','53','54','55','56','57','58','59','60',
                      '61','62','63','64','65','66','67','68','69','70',
                      '71','72','73','74','75','76','77','78','79','80',
                      '81','82','83','84','85','86','87','88','89','90',
                      '91','92','93','94','95','96','97','98','99',
                      
                      
                      
                      ];
export default {
    
    data() {
        return {
             input_bet: '',
            // isActive: false,
                check_btn: [''],
                btns: btn_options
        }
    },
     methods: {
    //   add_btn_select(event) {
    //      if(event.target.className == "active") 
    //      {
    //         event.target.className = "isActive";
    //      }else {
    //          event.target.className = "active";
    //      }
    //   },
       goBack() {
            this.$router.push('/')
      },
      clear_btn() {
           this.check_btn = [];
      }
     }
}
</script>