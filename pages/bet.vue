<template>
    <section class="bet_container">
         <el-form   :model="ruleForm" ref="ruleForm"  class="demo-ruleForm" >
        <el-header>
             <!-- <nuxt-link  :to="`${$t('/')}?lang=${$store.state.locale}`"> -->
                          <el-page-header @back="goBack" title="">
                </el-page-header>
            <!-- </nuxt-link> -->
           
            <el-row style="padding-top:15px;">
                <el-col :span="6">
                    
                    <div v-if="ruleForm.check_btn[0] != null">
                        <el-button @click="clear_btn()" class="fast_btn" >{{$t('clear_btn')}}</el-button>
                    </div>
                    <div v-else>
                        <el-button type="button"   @click="dialogFormVisible = true"   class="fast_btn" >{{$t('fast_btn')}}</el-button>
                          
                    </div>
                <el-dialog title="" :visible.sync="dialogFormVisible" class="modal_bet"
                width="90%" center
                    >  
                    <p>Single and Double size</p>
            
                        <el-row class="single_btn">
                            <el-col :span="4">  <el-button type="text" @click="big_number">{{$t('big')}}</el-button></el-col>
                            <el-col :span="4"><el-button type="text" @click="small_number">{{$t('small')}}</el-button></el-col>
                            <el-col :span="4"> <el-button type="text"  @click="odd_number">{{$t('odd')}}</el-button></el-col>
                            <el-col :span="4"><el-button type="text" @click="even_number">{{$t('even')}}</el-button></el-col>    
                                <el-col :span="4"></el-col>                                                  
                        </el-row>
                        <el-row class="single_btn">
                            <el-col :span="4"> <el-button type="text" @click="ee_number">{{$t('ee')}}</el-button></el-col>
                            <el-col :span="4"> <el-button type="text" @click="eo_number">{{$t('eo')}}</el-button> </el-col>
                            <el-col :span="4"> <el-button  type="text" @click="oe_number">{{$t('oe')}}</el-button></el-col>
                            <el-col :span="4">  <el-button type="text"  @click="oo_number">{{$t('oo')}}</el-button> </el-col>
                            <el-col :span="4">  <el-button type="text"  @click="same_number">{{$t('same')}}</el-button></el-col>
                        </el-row>
                    
                    <div class="con_power">
                        <p>Constellation Power</p>
                        <el-button type="text" @click="con_number">Constellation 07,18,24,35,69</el-button>
                        <el-button type="text" @click="con_number_R">Constellation R 70,81,42,53,96</el-button>
                        <el-button type="text" @click="con_number_power">Power 05, 16, 27, 38,49</el-button>
                        <el-button type="text" @click="con_number_power_R">Power R 05,16,27,38,49</el-button>
                    </div>
                        
                        <p>{{$t('20_selection_number')}}</p>
                        <el-row  class="select_number_two">
                            <el-col :span="5">  <el-button type="text" @click="btw_00_19">00-19</el-button></el-col>
                            <el-col :span="5"><el-button type="text" @click="btw_20_39">20-39</el-button></el-col>
                            <el-col :span="5"> <el-button type="text"  @click="btw_40_59">40-59</el-button></el-col>
                            <el-col :span="5"><el-button type="text" @click="btw_60_79">60-79</el-button></el-col>    
                                <el-col :span="5"><el-button type="text" @click="btw_80_99">80-99</el-button></el-col>    
                        </el-row>
                        
                

                        <div class="select_number">
                            <el-button type="text" @click="with_0">0</el-button>
                            <el-button type="text" @click="with_1">1</el-button>
                            <el-button type="text" @click="with_2">2</el-button>
                            <el-button type="text" @click="with_3">3</el-button>
                            <el-button type="text" @click="with_4">4</el-button>
                            <el-button type="text" @click="with_5">5</el-button>
                            <el-button type="text" @click="with_6">6</el-button>
                            <el-button type="text" @click="with_7">7</el-button>
                            <el-button type="text" @click="with_8">8</el-button> 
                            <el-button type="text" @click="with_9">9</el-button>

                            <p>{{$t('head')}}</p>
                            <el-button type="text" @click="head_0">0</el-button>
                            <el-button type="text" @click="head_1">1</el-button>
                            <el-button type="text" @click="head_2">2</el-button>
                            <el-button type="text" @click="head_3">3</el-button>
                            <el-button type="text" @click="head_4">4</el-button>
                            <el-button type="text" @click="head_5">5</el-button>
                            <el-button type="text" @click="head_6">6</el-button>
                            <el-button type="text" @click="head_7">7</el-button>
                            <el-button type="text" @click="head_8">8</el-button> 
                            <el-button type="text" @click="head_9">9</el-button>

                            <p>{{$t('tail')}}</p>
                            <el-button type="text" @click="tail_0">0</el-button>
                            <el-button type="text" @click="tail_1">1</el-button>
                            <el-button type="text" @click="tail_2">2</el-button>
                            <el-button type="text" @click="tail_3">3</el-button>
                            <el-button type="text" @click="tail_4">4</el-button>
                            <el-button type="text" @click="tail_5">5</el-button>
                            <el-button type="text" @click="tail_6">6</el-button>
                            <el-button type="text" @click="tail_7">7</el-button>
                            <el-button type="text" @click="tail_8">8</el-button> 
                            <el-button type="text" @click="tail_9">9</el-button>
                        </div>
    
                    
        
                        
                </el-dialog>
                </el-col>
                <el-col :span="18">
                    
                            <el-form-item
                            
                            prop="amount"
                            :rules="[
                                 { required: true, message: $t('amount_required') },
                                
                            ]"
                            
                            >  
                                <el-input class type="number" placeholder="200 Ks(min)"  v-model="ruleForm.amount"  ></el-input>
                            
                            </el-form-item>
                </el-col>
            </el-row>
             <!-- <span v-text="currentTime"></span> -->
            <!-- <el-row>
                
                     
                <el-col :span="12"><div class="betclose_text">Bet Close: 11:55:00</div></el-col>
                <el-col v-if ="!$store.state.isLoggedIn" :span="12"> <div class="balance_amount"></div></el-col>
                <el-col v-else :span="12"> <div class="balance_amount">Balance: {{this.profile.wallet}}</div></el-col>
        
            </el-row> -->

               <div class="bet_footer" v-if ="!$store.state.isLoggedIn">
                 <nuxt-link :to="`${$t('login')}?lang=${$store.state.locale}`">
                    <el-button  type="warning" round>{{$t('Please Login first')}}</el-button>
                 </nuxt-link>
             </div>
            <div v-else class="bet_login_btn">

                    <el-button     type="warning" getHello="getHello" class="bet_btn_login" @click="bet('ruleForm')" round >{{$t('Bet')}}</el-button>
           
            </div>
            
        </el-header>
       <el-main>
            <div class="longText" id="hidingScrollBar">
              <div class="hideScrollBar_bet">
                <div class="all_btn" v-bind:class="{ bet_off: isActive}">
                    
                   
                        <el-form-item
                           
                                    prop="check_btn"
                                    :rules="[
                                    { required: true, message: 'bet is required'},
                                    
                                    ]"
                            
                            >   <el-checkbox-group v-model="ruleForm.check_btn">
                                    <el-checkbox-button v-for="city in cities" :id="city.id"  :label="city" :key="city.id">{{city}}</el-checkbox-button>
                                </el-checkbox-group>
                            </el-form-item>

                </div>
            </div>
        </div>
        </el-main>
            </el-form>
    </section>
    
</template>

<style>
    .bet_container .el-header {
        color:#fff;
        padding:20px;
        position: fixed;
        right:0;
        max-width: 480px;
        width:100%;
        left:0;
        top:0;
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
    /* .bet_login_btn {
        padding-top:10px;
    } */
    

    .el-checkbox-button.is-checked .el-checkbox-button__inner {
            color:#000;
            background-color:#FEDC54;
            border-color: #FEDC54;
            -webkit-box-shadow: -1px 8px 56px -12px rgba(0,0,0,0.75);
            -moz-box-shadow: -1px 8px 56px -12px rgba(0,0,0,0.75);
            box-shadow: -1px 8px 56px -12px rgba(0,0,0,0.75);
    }
    .bet_container .el-checkbox-button__inner 
    {
        -webkit-box-shadow: -1px 8px 56px -12px rgba(0,0,0,0.75);
        -moz-box-shadow: -1px 8px 56px -12px rgba(0,0,0,0.75);
        box-shadow: -1px 8px 56px -12px rgba(0,0,0,0.75);
        border: 0;
        margin: 7px;
        border-radius: 10px;
        padding: 14px;
        width:42px;
        height:42px;
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
 
    .bet_login_btn  .el-button.is-round{
        width:100%;
        background: linear-gradient(#FDD164, #BB8834);
        font-size: 17px;
        font-weight: bold;
        color:#4D2707;
        
    }
    .bet_container  .el-input__inner{
       text-align: right;
       font-size:20px;
    }
  
    .el-input-group__prepend {
        color:#000;
        font-weight: bold;
        font-size:22px;
    }
    /* .all_btn {
        text-align: center;
        height:100vh;
    } */
    .hideScrollBar_bet {
        width: 100%;
        height: 100%;
        overflow: auto;
        margin-left: 17px;
        padding-right: 28px;
        padding-top: 190px;
        padding-bottom:30px;
       
        
    }
    .balance_amount {
        text-align: right;
    }
    .betclose_text {
        color:#CCCCCC;
    }
    .bet_container .el-dialog {
        background-color: #232C36;
        border-radius: 32px;
        border:2pt solid #FFEA72;
        max-width: 480px;
        z-index: 99;
       
        
    }
    .modal_bet .el-button {
      
        background: #555555;
        color:#fff;
        font-weight: bold;
    }
    .modal_bet .el-dialog__headerbtn .el-dialog__close {
        color:green;
        font-size: 26px;
        font-weight: bold;
    }
    .modal_bet .el-row {
        margin:3px auto;
    }
    .modal_bet p {
        color:#CCCCCC;
        margin-top:10px;
    }
    .v-modal {
        z-index: 0 !important;
    }
   .select_number .el-button {
       width:23px;
       margin:0;
       margin-top:3px;
   }
   .single_btn .el-button {
       width:44px;
   }
   .select_number_two .el-col-5 {
       width:19.83333%;
   }
   .select_number_two .el-button {
       width:53px;

   }
   .con_power {
       text-align: left;
   }
   .con_power .el-button {
       width:100%;
       margin:10px 0 0 0;
       text-align: left;
       padding-left:10px;
   }
   .bet_off {
       cursor: no-drop !important;
       display: none;
   }

   @media screen and (max-width:320px) {
       .select_number_two .el-button {
           width:46px;
       }
       .single_btn .el-button {
           width:39px;
       }
       .select_number .el-button {
           width:20px;
       }
   }
   @media screen and (max-width:414px) {
      .select_number .el-button {
          width:26.5px;
      }
   }
   @media screen and (max-width:360px) {
      .select_number .el-button{
          width:23.3px;
      }
   }
    @media screen and (max-width:375px) {
      .select_number .el-button{
          width:23px;
      }
   }
    @media screen and (min-width:480px) {
      .select_number .el-button{
          width:33.2px;
          
      }
      .select_number_two .el-button {
          width:74px;
      }
   }
</style>

<script>


const cityOptions = ['00','01', '02', '03', '04','05','06','07','08','09','10',
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
const big_option = ['50','51','52','53','54','55','56','57','58','59','60',
                      '61','62','63','64','65','66','67','68','69','70',
                      '71','72','73','74','75','76','77','78','79','80',
                      '81','82','83','84','85','86','87','88','89','90',
                      '91','92','93','94','95','96','97','98','99',
    
]
const small_option = ['00','01', '02', '03', '04','05','06','07','08','09','10',
                      '11','12','13','14','15','16','17','18','19','20',
                      '21','22','23','24','25','26','27','28','29','30',
                      '31','32','33','34','35','36','37','38','39','40',
                      '41','42','43','44','45','46','47','48','49','50',
    
]
const same_option = ['00','11', '22', '33', '44','55','66','77','88','99'
                     
    
]
const even_option = ['00','02','04','06','08','10','12','14','16','18',
                    '20','22','24', '26', '28','30','32','34','36','38', '40',
                    '42','44','46','48','50','52','54','56','58','60',
                    '62','64','66','68','70','72','74','76','78','80',
                    '82','84','86','88','90','92','94','96','98',
                    
                       
]
const odd_option = ['01','03','05','07','09','11','13','15','17','19','21','23','25',
                    '27','29','31','33','35','37','39','41','43','45','47','49','51','53',
                    '55','57','59','61','63','65','67','69','71','73','75','77','79','81',
                    '83','85','87','89','91','93','95','97','99',

]
const ee_option = ['00','02','04','06','08','20','22','24','26','28','40','42','44','46',
                    '48','60','62','64','66','68','80','82','84','86','88'

]
const oo_option = ['11','13','15','17','19','31','33','35','37','39','51','53','55','57',
                    '59','71','73','75','77','79','91','93','95','97','99'

]
const eo_option = ['01','03','05','07','09','21','23','25','27','29','41','43','45','47',
                   '49','61','63','65','67','69','81','83','85','87','89'

]
const oe_option = ['10','12','14','16','18','30','32','34','36','38','50','52','54','56',
                   '58','70','72','74','76','78','90','92','94','96','98',

]
const con_number_option = ['07','18','24','35','69']
const con_number_R_option = ['70','81','42','53','96']
const con_number_power_option = ['05','16','27','38','49']
const con_number_power_R_option = ['50','61','72','83','94']
const btw_00_19_option = ['00','01','02','03','04','05','06','07','08','09','10','11','12','13',
                            '14','15','16','17','18','19'

]
const btw_20_39_option = ['20','21','22','23','24','25','26','27','28','29','30',
                            '31','32','33','34','35','36','37','38','39'

]
const btw_40_59_option = ['40','41','42','43','44','45','46','47','48','49','50',
                            '51','52','53','54','55','56','57','58','59'
    
]
const btw_60_79_option = ['60','61','62','63','64','65','66','67','68','69','70',
                      '71','72','73','74','75','76','77','78','79'
    
]
const btw_80_99_option = ['80','81','82','83','84','85','86','87','88','89','90',
                      '91','92','93','94','95','96','97','98','99'
    
]
const with_0_option = ['00','01','02','03','04','05','06','07','08','09','10','20','30','40',
                '50','60','70','80','90'

]
const with_1_option = ['01','10','11','12','13','14','15','16','17','18','19','21','31',
                '41','51','61','71','81','91',

]
const with_2_option = ['02','12','20','21','22','23','24','25','26','27','28','29','32',
                '42','52','62','72','82','92',

]
const with_3_option = ['03','13','23','30','31','32','33','34','35','36','37','38','39',
                '43','53','63','73','83','93',

]
const with_4_option = ['04','14','24','34','40','41','42','43','44','45','46','47','48',
                '49','54','64','74','84','94',

]
const with_5_option = ['05','15','25','35','45','50','51','52','53','54','55','56','57',
                '58','59','65','75','85','95',

]
const with_6_option = ['06','16','26','36','46','56','60','61','62','63','64','65',
                '66','67','68','69','76','86','96'

]
const with_7_option = ['07','17','27','37','47','57','67','70','71','72','73','74',
                '75','76','77','78','79','87','97',

]
const with_8_option = ['08','18','28','38','48','58','68','78','80','81','82','83',
                '84','85','86','87','88','89','98',

]
const with_9_option = ['09','19','29','39','49','59','69','79','89','90','91','92',
                '93','94','95','96','97','98','99',

]

const head_0_option = ['00','01','02','03','04','05','06','07','08','09'

]
const head_1_option = ['10','11','12','13','14','15','16','17','18','19'

]
const head_2_option = ['20','21','22','23','24','25','26','27','28','29'

]
const head_3_option = ['30','31','32','33','34','35','36','37','38','39'
]
const head_4_option = ['40','41','42','43','44','45','46','47','48','49'

]
const head_5_option = ['50','51','52','53','54','55','56','57','58','59'
]
const head_6_option = ['60','61','62','63','64','65','66','67','68','69'

]
const head_7_option = ['70','71','72','73','74','75','76','77','78','79'

]
const head_8_option = ['80','81','82','83','84','85','86','87','88','89'

]
const head_9_option = ['90','91','92','93','94','95','96','97','98','99',

]
const tail_0_option = ['00','10','20','30','40','50','60','70','80','90'

]
const tail_1_option = ['01','11','21','31','41','51','61','71','81','91'

]
const tail_2_option = ['02','12','22','32','42','52','62','72','82','92'

]
const tail_3_option = ['03','13','23','33','43','53','63','73','83','93'

]
const tail_4_option = ['04','14','24','34','44','54','64','74','84','94'

]
const tail_5_option = ['05','15','25','35','45','55','65','75','85','95'

]
const tail_6_option = ['06','16','26','36','46','56','66','76','86','96'

]
const tail_7_option = ['07','17','27','37','47','57','67','77','87','97'

]
const tail_8_option = ['08','18','28','38','48','58','68','78','88','98'

]
const tail_9_option = ['09','19','29','39','49','59','69','79','89','99'

]

import axios from 'axios'
export default {
    mounted() {
        this.updateIsLoggedIn();
    },
 
    data() {
        return {
            isActive:true,
            hasError:'',
             currentTime: '',
             morning_from:this.morning_from,
             morning_to:'',
             evening_from:'',
             evening_to:'',
            
              isLoggedIn: true,
                ruleForm: {
                    amount:'',
                    check_btn: [],
                   
                },

               dialogFormVisible: false,
                btns: btn_options,
                cities: cityOptions,
                profile:'', 
        }
    },
    created() {
       this.$axios.get('/v2/v1/close_time')
             
              .then(response => {
                    this.time = response.data.data
                    this.morning_from = response.data.data[0].from
                    this.morning_to = response.data.data[0].to
                    this.evening_from = response.data.data[1].from
                    this.evening_to = response.data.data[1].to

                    var currentTime = moment().format('HH:mm:ss');
                    var currentDate  = moment().day();
                  //  console.log(currentDate)
                    // setInterval(() => this.updateCurrentTime(), 1 * 1000);
                    // console.log(this.morning_from)
                    //  console.log(this.morning_to)
                    //   console.log(this.evening_from)
                    //    console.log(this.evening_to)
                    //    console.log(currentTime)



                    if(currentTime  >  this.morning_from && currentTime < this.morning_to ) {
                        this.isActive = true
                     //alert('one')
                    }else if(currentTime > this.morning_to && currentTime <  this.evening_from ) {
                        this.isActive = false
                         //alert('two')
                    }else if(currentTime > this.evening_from && currentTime < this.evening_to ) {
                        this.isActive = true
                             //alert('three')
                    }else if(currentTime > this.evening_to) {
                        this.isActive = false
                         //alert('four')
                    }else {
                         this.isActive = false
                         
                        
                    }

                    if(currentDate == 0 || currentDate == 6) {
                        this.isActive = true
                    }


                    

                })
    
        let token = localStorage.getItem('token');
        if(token) {
             this.$axios.get("/v1/profile",
                    {headers: {
                               "Authorization": "Bearer "+token
                         }
                        })
                    .then(response => {
                     console.log(this.profile = response.data.data)

                })
        }
               
    },
     methods: {
         goBack() {
             this.$router.push(`/?lang=${this.$store.state.locale}`); 
         },
         updateCurrentTime() {
         this.currentTime = moment().format('HH:mm:ss');
           
        },
        updateIsLoggedIn() {
            this.$store.commit('updateIsLoggedIn', this.hasUserInfo());
        },
        hasUserInfo() {
            return Boolean(localStorage.getItem('userInfo'));
        },

        clear_btn() {
            this.ruleForm.check_btn = [];
        },
        bet(formName) {
             this.$refs[formName].validate((valid) => {
                if (valid) {

                    if(this.ruleForm.check_btn) {

                        var data = this.ruleForm.check_btn  
                        this.$store.commit('getBet', data);
                        var bet_amount = this.ruleForm.amount

                            
                          this.$store.commit('betAmount',bet_amount);
                         this.$router.push(`remark?lang=${this.$store.state.locale}`); 
                        //  `${$t('remark')}?lang=${$store.state.locale}`
                    }

                } else {
                
                    console.log('error submit!!');
                    return false;
                }
            });
      
      
            
            
      },
        
            

      small_number(val) {
           this.ruleForm.check_btn = val ? small_option : [];
           this.dialogFormVisible = false
      },
      big_number(val) {
           this.ruleForm.check_btn = val ? big_option : [];
           this.dialogFormVisible = false
      },
       same_number(val) {
           this.ruleForm.check_btn = val ? same_option : [];
            this.dialogFormVisible = false
      },
       even_number(val) {
           this.ruleForm.check_btn = val ? even_option : [];
            this.dialogFormVisible = false
      },
       odd_number(val) {
           this.ruleForm.check_btn = val ? odd_option : [];
            this.dialogFormVisible = false
      },
      ee_number(val) {
           this.ruleForm.check_btn = val ? ee_option : [];
            this.dialogFormVisible = false
      },
      oo_number(val) {
           this.ruleForm.check_btn = val ? oo_option : [];
            this.dialogFormVisible = false
      },
       eo_number(val) {
           this.ruleForm.check_btn = val ? eo_option : [];
            this.dialogFormVisible = false
      },
       oe_number(val) {
           this.ruleForm.check_btn = val ? oe_option : [];
            this.dialogFormVisible = false
      },
      con_number(val) {
             this.ruleForm.check_btn = val ? con_number_option : [];
            this.dialogFormVisible = false
      },
       con_number_R(val) {
             this.ruleForm.check_btn = val ? con_number_R_option : [];
            this.dialogFormVisible = false
      },
       con_number_power(val) {
             this.ruleForm.check_btn = val ? con_number_power_option : [];
            this.dialogFormVisible = false
      },
       con_number_power_R(val) {
             this.ruleForm.check_btn = val ? con_number_power_R_option : [];
            this.dialogFormVisible = false
      },
      
      btw_00_19(val) {
            this.ruleForm.check_btn = val ? btw_00_19_option : [];
            this.dialogFormVisible = false
      },
       btw_20_39(val) {
            this.ruleForm.check_btn = val ? btw_20_39_option : [];
            this.dialogFormVisible = false
      },
       btw_40_59(val) {
            this.ruleForm.check_btn = val ? btw_40_59_option : [];
            this.dialogFormVisible = false
      },
       btw_60_79(val) {
            this.ruleForm.check_btn = val ? btw_60_79_option : [];
            this.dialogFormVisible = false
      },
       btw_80_99(val) {
            this.ruleForm.check_btn = val ? btw_80_99_option : [];
            this.dialogFormVisible = false
      },
        with_0(val) {
            this.ruleForm.check_btn = val ? with_0_option : [];
            this.dialogFormVisible = false
      },
      with_1(val) {
            this.ruleForm.check_btn = val ? with_1_option : [];
            this.dialogFormVisible = false
      },
      with_2(val) {
            this.ruleForm.check_btn = val ? with_2_option : [];
            this.dialogFormVisible = false
      },
      with_3(val) {
            this.ruleForm.check_btn = val ? with_3_option : [];
            this.dialogFormVisible = false
      },
      with_4(val) {
            this.ruleForm.check_btn = val ? with_4_option : [];
            this.dialogFormVisible = false
      },
      with_5(val) {
            this.ruleForm.check_btn = val ? with_5_option : [];
            this.dialogFormVisible = false
      },
      with_6(val) {
            this.ruleForm.check_btn = val ? with_6_option : [];
            this.dialogFormVisible = false
      },
      with_7(val) {
            this.ruleForm.check_btn = val ? with_7_option : [];
            this.dialogFormVisible = false
      },
       with_8(val) {
            this.ruleForm.check_btn = val ? with_8_option : [];
            this.dialogFormVisible = false
      },
       with_9(val) {
            this.ruleForm.check_btn = val ? with_9_option : [];
            this.dialogFormVisible = false
      },
      head_0(val) {
            this.ruleForm.check_btn = val ? head_0_option : [];
            this.dialogFormVisible = false
      },
       head_1(val) {
            this.ruleForm.check_btn = val ? head_1_option : [];
            this.dialogFormVisible = false
      },
       head_2(val) {
            this.ruleForm.check_btn = val ? head_2_option : [];
            this.dialogFormVisible = false
      },
       head_3(val) {
            this.ruleForm.check_btn = val ? head_3_option : [];
            this.dialogFormVisible = false
      },
       head_4(val) {
            this.ruleForm.check_btn = val ? head_4_option : [];
            this.dialogFormVisible = false
      },
       head_5(val) {
            this.ruleForm.check_btn = val ? head_5_option : [];
            this.dialogFormVisible = false
      },
       head_6(val) {
            this.ruleForm.check_btn = val ? head_6_option : [];
            this.dialogFormVisible = false
      },
       head_7(val) {
            this.ruleForm.check_btn = val ? head_7_option : [];
            this.dialogFormVisible = false
      },
       head_8(val) {
            this.ruleForm.check_btn = val ? head_8_option : [];
            this.dialogFormVisible = false
      },

       head_9(val) {
            this.ruleForm.check_btn = val ? head_9_option : [];
            this.dialogFormVisible = false
      },
      tail_0(val) {
            this.ruleForm.check_btn = val ? tail_0_option : [];
            this.dialogFormVisible = false
      },
        tail_1(val) {
            this.ruleForm.check_btn = val ? tail_1_option : [];
            this.dialogFormVisible = false
      },
       tail_2(val) {
            this.ruleForm.check_btn = val ? tail_2_option : [];
            this.dialogFormVisible = false
      },
       tail_3(val) {
            this.ruleForm.check_btn = val ? tail_3_option : [];
            this.dialogFormVisible = false
      },
       tail_4(val) {
            this.ruleForm.check_btn = val ? tail_4_option : [];
            this.dialogFormVisible = false
      },
       tail_5(val) {
            this.ruleForm.check_btn = val ? tail_5_option : [];
            this.dialogFormVisible = false
      },
       tail_6(val) {
            this.ruleForm.check_btn = val ? tail_6_option : [];
            this.dialogFormVisible = false
      },
       tail_7(val) {
            this.ruleForm.check_btn = val ? tail_7_option : [];
            this.dialogFormVisible = false
      },
       tail_8(val) {
            this.ruleForm.check_btn = val ? tail_8_option : [];
            this.dialogFormVisible = false
      },

       tail_9(val) {
            this.ruleForm.check_btn = val ? tail_9_option : [];
            this.dialogFormVisible = false
      },

     }
}
</script>