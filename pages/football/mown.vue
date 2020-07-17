<template>
    <section class="bet_container">
        <el-form @submit.native.prevent :model="ruleForm" ref="ruleForm" class="demo-ruleForm">
            <el-header style=" background-color:#14612D;">
                <el-row>
                    <el-col :span="10">
                        <div class="goTo">
                            <a href="/">
                                <div class="" @back="goBack"><i class="el-icon-arrow-left"></i></div>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="10">
                        Mown
                    </el-col>

                </el-row>
                <el-row style="padding-top:10px;">
                    <el-col>
                        <p class="amount_lbl">လောင်းမည့်ပမာဏကိုထည့်ပါ၊</p>
                    </el-col>
                    <el-col>

                        <el-form-item style="margin-bottom:10px;" prop="amount" :rules="[
                                     { required: true, message: $t('amount_required') },

                                ]">

                            <el-input @keypress.enter.native="bet('ruleForm')" class type="number" placeholder="100 Ks(min)" v-model="ruleForm.amount"></el-input>

                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <nuxt-link :to="`${$t('/wallet')}?lang=${$store.state.locale}`">
                        <el-col :span="13" v-if="!$store.state.isLoggedIn">
                            <div class="balance_amount"></div>
                        </el-col>
                        <el-col :span="13" v-else>
                            <div class="balance_amount"><img src="~static/images/amount_icon.png" alt="">{{$t('you_balance')}}: {{this.thousands_separators(myWallet)}} {{$t('kyat')}}</div>
                        </el-col>
                    </nuxt-link>
                    <el-col :span="11" class="bet_close_time"> {{$t('bet_close_time')}} : {{this.time_countdown}} </el-col>
                </el-row>
                <el-row>
                    <!-- <nuxt-link :to="`${$t('/share')}?lang=${$store.state.locale}`"> -->
                    <el-col :span="14" v-if="!$store.state.isLoggedIn">
                        <div class="balance_amount"></div>
                    </el-col>
                    <el-col :span="14" v-else>
                        <div class="balance_amount">
                            <!-- <img src="~static/images/point_icon.png"  alt="">{{$t('you_balance_point')}}: {{this.thousands_separators(myPointWallet)}}  -->
                        </div>
                    </el-col>
                    <!-- </nuxt-link> -->

                    <div class="bet_footer" v-if="!$store.state.isLoggedIn">
                        <el-col :span="24" style="font-size:13px;text-align:right">
                            <nuxt-link :to="`${$t('/login')}?lang=${$store.state.locale}`">
                                <el-button type="warning" round>{{$t('Please Login first')}}</el-button>
                            </nuxt-link>
                        </el-col>
                    </div>
                    <div v-else class="bet_login_btn">
                        <el-col :span="10">
                            <el-button :disabled='submitted' type="warning" getHello="getHello" class="bet_btn_login" @click="bet('ruleForm')" round>{{$t('Bet')}}</el-button>
                        </el-col>

                    <input type = "submit"  value="Bet" @click="bet1()">
                    </div>
                </el-row>
            </el-header>
            <el-main>
                <div class="longText" id="hidingScrollBar">
                    <div class="hideScrollBar_bet">
                        <div class="all_btn1">
                            <div class="warning_card">

                                <div class="mown_warning_img">
                                    <img src="~static/images/warning.svg" alt="logo" style="width:30px;" />
                                </div>
                                <div class="mown_warning">
                                    <p>အနည်းဆုံးလောင်းမည့်အသင်း ၃ သင်းရွေးပေးပါ<br> အများဆုံး ၁၀ သင်းသာရွေးပေးပါ</p>
                                </div>

                            </div>

                            <el-form-item>
                               <el-checkbox v-model="checked">
                                    <div class="collapse_card mown">


                                      <div class="" style="width:90%; display:flex; background-color:blue;">
                                        <div class="" style="width:20%; background-color:red;">
                                        <el-radio v-model="radio" label="1">Option A</el-radio>
                                        </div>
                                        <div class="" style="width:20%; background-color:yellow;">
                                        <el-radio v-model="radio" label="2">Option B</el-radio>
                                        </div>
                                      </div>

                                    </div>
                                </el-checkbox>
                                <div class="collapse_card mown">
                                  <div class="1">
                                    <el-checkbox v-model="checked1">
                                        <div class="test1">
                                          aa
                                        </div>
                                        <!-- <el-radio v-model="radio" label="1">Option A</el-radio>
                                        <el-radio v-model="radio" label="2">Option B</el-radio> -->
                                    </el-checkbox>
                                  </div>
                                </div>
                            </el-form-item>
                        </div>
                    </div>
                </div>
            </el-main>
        </el-form>

    </section>
</template>

<style>
.holiday {
    border: 2px solid #FFEA72;
    border-radius: 13px;
    margin: 50px auto;
    background-image: linear-gradient(#3A4450, #151E28), linear-gradient(270deg, #3A4450, #3A4450 50%, #151E28 100%);
}

.holiday img {
    width: 80px;
    height: auto;
}

.holiday p,
.holiday h6,
.holiday span {
    color: #fff;
}

.holiday_btn {
    background: linear-gradient(#24A7EC, #1C55C8);
    color: #fff;
    font-weight: bold;
    border: 0;
    margin: 10px auto;
}

.bet_container .el-header {
    color: #fff;
    padding: 20px;
    position: fixed;
    right: 0;
    max-width: 480px;
    width: 100%;
    left: 0;
    top: 0;
}

.bet_footer .el-button {
    background: linear-gradient(#FDD164, #BB8834);
    color: #4D2707;
    font-size: 17px;
    font-weight: bold;
    border: unset;
    width: 100%;
    margin-top: 15px;
    border-radius: 36px;
}

.bet_footer .bet_btn_login {
    width: 120px;
}

/* .bet_login_btn {
        padding-top:10px;
    } */

.el-checkbox-button.is-checked .el-checkbox-button__inner {
    color: #000;
    background-color: #FEDC54;
    border-color: #FEDC54;
    -webkit-box-shadow: -1px 8px 56px -12px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -1px 8px 56px -12px rgba(0, 0, 0, 0.75);
    box-shadow: -1px 8px 56px -12px rgba(0, 0, 0, 0.75);
}

.bet_container .el-checkbox-button__inner {
    -webkit-box-shadow: -1px 8px 56px -12px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -1px 8px 56px -12px rgba(0, 0, 0, 0.75);
    box-shadow: -1px 8px 56px -12px rgba(0, 0, 0, 0.75);
    border: 0;
    margin: 7px;
    border-radius: 10px;
    padding: 14px;
    width: 42px;
    height: 42px;
    color: #e0dddd;
    background: #14612D;
    font-weight: bold;
}

.el-checkbox-button:first-child .el-checkbox-button__inner {
    border-radius: 10px;
    border-left: unset;
}

.el-checkbox-button:last-child .el-checkbox-button__inner {
    border-radius: 10px;
}

.bet_container .el-header {
    background: #2A612D;
    height: auto !important;
}

.el-page-header__left {
    margin: 0;
}

/* .bet_input {
        margin-top:15px;
    } */

.fast_btn {
    background: #D4E2FF;
    color: green;
    width: 90%;
    padding: 18px 10px;
}

.bet_login_btn .el-button.is-round {
    width: 100%;
    background: linear-gradient(#FDD164, #BB8834);
    font-size: 17px;
    font-weight: bold;
    color: #4D2707;
}

.bet_container .el-input__inner {
    text-align: right;
    font-size: 20px;
    padding: 25px;
}

.el-input-group__prepend {
    color: #000;
    font-weight: bold;
    font-size: 22px;
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
    padding-bottom: 30px;
}

.balance_amount {
    color: #fff;
    float: left;
    font-size: 13px;
    text-align: right;
    padding: 3px 10px 10px 0;
}

.balance_amount img {
    width: 30px;
    height: auto;
}

.bet_close_time {
    font-size: 13px;
    text-align: center;
    padding-top: 8px;
}

.betclose_text {
    color: #CCCCCC;
}

.bet_container .el-dialog {
    background-color: #232C36;
    border-radius: 32px;
    border: 2pt solid #FFEA72;
    max-width: 480px;
    z-index: 99;
}

.modal_bet .el-button {
    background: #555555;
    color: #fff;
    font-weight: bold;
}

.modal_bet .el-dialog__headerbtn .el-dialog__close {
    color: green;
    font-size: 26px;
    font-weight: bold;
}

.modal_bet .el-row {
    margin: 3px auto;
}

.modal_bet p {
    color: #CCCCCC;
    margin-top: 10px;
}

.v-modal {
    z-index: 0 !important;
}

.select_number .el-button {
    width: 23px;
    margin: 0;
    margin-top: 3px;
}

.single_btn .el-button {
    width: 44px;
}

.select_number_two .el-col-5 {
    width: 19.83333%;
}

.select_number_two .el-button {
    width: 53px;
}

.con_power {
    text-align: left;
}

.con_power .el-button {
    width: 100%;
    margin: 10px 0 0 0;
    text-align: left;
    padding-left: 10px;
}

.bet_off {
    cursor: no-drop !important;
    display: none;
}

@media screen and (max-width:320px) {
    .select_number_two .el-button {
        width: 46px;
    }
    .single_btn .el-button {
        width: 39px;
    }
    .select_number .el-button {
        width: 20px;
    }
    .balance_amount,
    .bet_close_time {
        font-size: 11px;
    }
    .bet_login_btn .el-button.is-round {
        font-size: 12px;
    }
    .bet_container .el-header {
        padding: 15px;
    }
    .bet_container .el-input__inner {
        height: 36px;
    }
    .fast_btn {
        font-size: 10px;
    }
}

@media screen and (max-width:290px) {
    .select_number_two .el-button {
        width: 46px;
    }
    .single_btn .el-button {
        width: 39px;
    }
    .select_number .el-button {
        width: 20px;
    }
    .balance_amount,
    .bet_close_time {
        font-size: 10px;
    }
}

@media screen and (max-width:414px) {
    .select_number .el-button {
        width: 26.5px;
    }
    .balance_amount,
    .bet_close_time {
        font-size: 11px;
    }
    .bet_login_btn .el-button.is-round {
        font-size: 12px;
    }
    .bet_container .el-header {
        padding: 15px;
    }
    .bet_container .el-input__inner {
        height: 36px;
    }
}

@media screen and (max-width:360px) {
    .select_number .el-button {
        width: 23.3px;
    }
}

@media screen and (max-width:375px) {
    .select_number .el-button {
        width: 23px;
    }
}

@media screen and (min-width:480px) {
    .select_number .el-button {
        width: 33.2px;
    }
    .select_number_two .el-button {
        width: 74px;
    }
}
</style>

<script>
const cityOptions = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
    '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
    '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
    '41', '42', '43', '44', '45', '46', '47', '48', '49', '50',
    '51', '52', '53', '54', '55', '56', '57', '58', '59', '60',
    '61', '62', '63', '64', '65', '66', '67', '68', '69', '70',
    '71', '72', '73', '74', '75', '76', '77', '78', '79', '80',
    '81', '82', '83', '84', '85', '86', '87', '88', '89', '90',
    '91', '92', '93', '94', '95', '96', '97', '98', '99',



];
const btn_options = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
    '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
    '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
    '41', '42', '43', '44', '45', '46', '47', '48', '49', '50',
    '51', '52', '53', '54', '55', '56', '57', '58', '59', '60',
    '61', '62', '63', '64', '65', '66', '67', '68', '69', '70',
    '71', '72', '73', '74', '75', '76', '77', '78', '79', '80',
    '81', '82', '83', '84', '85', '86', '87', '88', '89', '90',
    '91', '92', '93', '94', '95', '96', '97', '98', '99',



];
const big_option = ['50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60',
    '61', '62', '63', '64', '65', '66', '67', '68', '69', '70',
    '71', '72', '73', '74', '75', '76', '77', '78', '79', '80',
    '81', '82', '83', '84', '85', '86', '87', '88', '89', '90',
    '91', '92', '93', '94', '95', '96', '97', '98', '99',

]
const small_option = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
    '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
    '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
    '41', '42', '43', '44', '45', '46', '47', '48', '49',

]
const same_option = ['00', '11', '22', '33', '44', '55', '66', '77', '88', '99'


]
const even_option = ['00', '02', '04', '06', '08', '10', '12', '14', '16', '18',
    '20', '22', '24', '26', '28', '30', '32', '34', '36', '38', '40',
    '42', '44', '46', '48', '50', '52', '54', '56', '58', '60',
    '62', '64', '66', '68', '70', '72', '74', '76', '78', '80',
    '82', '84', '86', '88', '90', '92', '94', '96', '98',


]
const odd_option = ['01', '03', '05', '07', '09', '11', '13', '15', '17', '19', '21', '23', '25',
    '27', '29', '31', '33', '35', '37', '39', '41', '43', '45', '47', '49', '51', '53',
    '55', '57', '59', '61', '63', '65', '67', '69', '71', '73', '75', '77', '79', '81',
    '83', '85', '87', '89', '91', '93', '95', '97', '99',
]
const ee_option = ['00', '02', '04', '06', '08', '20', '22', '24', '26', '28', '40', '42', '44', '46',
    '48', '60', '62', '64', '66', '68', '80', '82', '84', '86', '88'
]
const oo_option = ['11', '13', '15', '17', '19', '31', '33', '35', '37', '39', '51', '53', '55', '57',
    '59', '71', '73', '75', '77', '79', '91', '93', '95', '97', '99'
]
const eo_option = ['01', '03', '05', '07', '09', '21', '23', '25', '27', '29', '41', '43', '45', '47',
    '49', '61', '63', '65', '67', '69', '81', '83', '85', '87', '89'
]
const oe_option = ['10', '12', '14', '16', '18', '30', '32', '34', '36', '38', '50', '52', '54', '56',
    '58', '70', '72', '74', '76', '78', '90', '92', '94', '96', '98',
]
const con_number_option = ['07', '18', '24', '35', '69']
const con_number_R_option = ['70', '81', '42', '53', '96']
const con_number_power_option = ['05', '16', '27', '38', '49']
const con_number_power_R_option = ['50', '61', '72', '83', '94']
const btw_00_19_option = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13',
    '14', '15', '16', '17', '18', '19'
]
const btw_20_39_option = ['20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
    '31', '32', '33', '34', '35', '36', '37', '38', '39'
]
const btw_40_59_option = ['40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50',
    '51', '52', '53', '54', '55', '56', '57', '58', '59'

]
const btw_60_79_option = ['60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70',
    '71', '72', '73', '74', '75', '76', '77', '78', '79'

]
const btw_80_99_option = ['80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90',
    '91', '92', '93', '94', '95', '96', '97', '98', '99'

]
const with_0_option = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '20', '30', '40',
    '50', '60', '70', '80', '90'
]
const with_1_option = ['01', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '21', '31',
    '41', '51', '61', '71', '81', '91',
]
const with_2_option = ['02', '12', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '32',
    '42', '52', '62', '72', '82', '92',
]
const with_3_option = ['03', '13', '23', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39',
    '43', '53', '63', '73', '83', '93',
]
const with_4_option = ['04', '14', '24', '34', '40', '41', '42', '43', '44', '45', '46', '47', '48',
    '49', '54', '64', '74', '84', '94',
]
const with_5_option = ['05', '15', '25', '35', '45', '50', '51', '52', '53', '54', '55', '56', '57',
    '58', '59', '65', '75', '85', '95',
]
const with_6_option = ['06', '16', '26', '36', '46', '56', '60', '61', '62', '63', '64', '65',
    '66', '67', '68', '69', '76', '86', '96'
]
const with_7_option = ['07', '17', '27', '37', '47', '57', '67', '70', '71', '72', '73', '74',
    '75', '76', '77', '78', '79', '87', '97',
]
const with_8_option = ['08', '18', '28', '38', '48', '58', '68', '78', '80', '81', '82', '83',
    '84', '85', '86', '87', '88', '89', '98',
]
const with_9_option = ['09', '19', '29', '39', '49', '59', '69', '79', '89', '90', '91', '92',
    '93', '94', '95', '96', '97', '98', '99',
]
const head_0_option = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09']
const head_1_option = ['10', '11', '12', '13', '14', '15', '16', '17', '18', '19']
const head_2_option = ['20', '21', '22', '23', '24', '25', '26', '27', '28', '29']
const head_3_option = ['30', '31', '32', '33', '34', '35', '36', '37', '38', '39']
const head_4_option = ['40', '41', '42', '43', '44', '45', '46', '47', '48', '49']
const head_5_option = ['50', '51', '52', '53', '54', '55', '56', '57', '58', '59']
const head_6_option = ['60', '61', '62', '63', '64', '65', '66', '67', '68', '69']
const head_7_option = ['70', '71', '72', '73', '74', '75', '76', '77', '78', '79']
const head_8_option = ['80', '81', '82', '83', '84', '85', '86', '87', '88', '89']
const head_9_option = ['90', '91', '92', '93', '94', '95', '96', '97', '98', '99', ]
const tail_0_option = ['00', '10', '20', '30', '40', '50', '60', '70', '80', '90']
const tail_1_option = ['01', '11', '21', '31', '41', '51', '61', '71', '81', '91']
const tail_2_option = ['02', '12', '22', '32', '42', '52', '62', '72', '82', '92']
const tail_3_option = ['03', '13', '23', '33', '43', '53', '63', '73', '83', '93']
const tail_4_option = ['04', '14', '24', '34', '44', '54', '64', '74', '84', '94']
const tail_5_option = ['05', '15', '25', '35', '45', '55', '65', '75', '85', '95']
const tail_6_option = ['06', '16', '26', '36', '46', '56', '66', '76', '86', '96']
const tail_7_option = ['07', '17', '27', '37', '47', '57', '67', '77', '87', '97']
const tail_8_option = ['08', '18', '28', '38', '48', '58', '68', '78', '88', '98']
const tail_9_option = ['09', '19', '29', '39', '49', '59', '69', '79', '89', '99']
import axios from 'axios'
export default {
    mounted() {

        this.$axios.get('/v2/v1/holiday')
            .then(response => {
                this.holidays = response.data

                if (this.holidays.status == 1) {
                    this.isActive = true
                    this.isHolidays = false

                }
            })

        this.updateIsLoggedIn();
        setInterval(() => {
            this.BetCurrentTime();
            var currentDate = moment().day();

            if (currentDate == 0 || currentDate == 6) {
                this.isActive = true
                this.isHoliday = false
                this.time_countdown = this.$root.$t('close_text');
            }
        }, 1000);
    },
    computed: {

    },

    data() {
        return {
            holidays: '',
            submitted: false,
            time_countdown: '',
            one_result: '',
            evening_time: '',
            isActive: true,
            isHoliday: true,
            isHolidays: true,
            isMorningEvening: true,
            hasError: '',
            currentTime: '',
            morning_from: this.morning_from,
            morning_to: '',
            evening_from: '',
            evening_to: '',

            morningTime_9_30: '09:30:00',
            time_12_00: '12:01:00',
            time_01_00: '13:00:00',
            time_04_30: '16:30:00',
            isLoggedIn: true,
            ruleForm: {
                amount: '',
                check_btn: [],

            },
            dialogFormVisible: false,
            btns: btn_options,
            cities: cityOptions,
            profile: '',
            myWallet: '',
            myPointWallet: '',
             radio: '1',
             matchs:''
        }
    },


    created() {
        this.breakTime = moment().format('h:mm:ss a')


        this.$axios.get('/v2/v1/close_time')

            .then(response => {
                this.time = response.data.data

                this.morning_from = response.data.data[0].from
                this.morning_to = response.data.data[0].to
                this.evening_from = response.data.data[1].from
                this.evening_to = response.data.data[1].to

                var currentTime = moment().format('HH:mm:ss');
                var currentDate = moment().day();

                if (this.server_time > this.morning_from && this.server_time < this.morning_to) {
                    this.isActive = true

                } else if (this.server_time > this.morning_to && this.server_time < this.evening_from) {
                    this.isActive = false

                } else if (this.server_time > this.evening_from && this.server_time < this.evening_to) {
                    this.isActive = true

                } else if (this.server_time > this.evening_to) {
                    this.isActive = false
                } else {
                    this.isActive = false
                }

                // if(currentDate == 0 || currentDate == 6) {
                //     this.isActive = true
                // }
            })

        let token = localStorage.getItem('token');
        if (token) {
            this.$axios.get("/v2/v1/profile", {
                    headers: {
                        "Authorization": "Bearer " + token
                    }
                })
                .then(response => {

                    this.profile = response.data.data
                    this.myWallet = this.profile.wallet
                    this.myPointWallet = this.profile.point
                    this.server_time = response.data.data.time;
                })
        }

        this.$axios.get('/v2/v1/server_time')
            .then(response => {
                this.server_time = response.data.time
                this.serverDate = response.data.date
            })

             this.$axios.get("/v2/v1/football/today/upcoming")
            .then(response => {
                console.log(response.data);
                this.matchs = response.data.data;
            })
    },

    methods: {
        thousands_separators(num) {
            //console.dir(num);
            if (num == undefined) {
                return "";
            }
            var num_parts = num.toString().split(".");
            num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return num_parts.join(".");
        },
        convertMS(milliseconds) {
            var day, hour, minute, seconds;
            seconds = Math.floor(milliseconds / 1000);
            minute = Math.floor(seconds / 60);
            seconds = seconds % 60;
            hour = Math.floor(minute / 60);
            minute = minute % 60;
            day = Math.floor(hour / 24);
            hour = hour % 24;
            return {
                day: day,
                hour: hour,
                minute: minute,
                seconds: seconds
            };
        },
        offDate() {

            this.$router.push(`/holiday_page?lang=${this.$store.state.locale}`);
        },
        BetCurrentTime() {
            this.currentTime = moment().format('HH:mm:ss');

            // var cu_time= new Date("12/01/2019 " + this.currentTime);
            var mo_from = new Date("03/20/2019 " + this.morning_from);
            var ev_to = new Date("03/19/2019 " + this.currentTime);
            var mo_to = new Date("03/20/2019 " + this.evening_from);
            var ev_from = new Date("03/20/2019 " + this.currentTime);
            var difference = mo_from - ev_to;
            var difference_two = mo_to - ev_from;
            var getAllTime = this.convertMS(difference);
            var getAllTime_two = this.convertMS(difference_two);
            if (this.server_time > this.morning_from && this.server_time < this.morning_to) {
                this.isActive = true
                this.isMorningEvening = false
                return this.time_countdown = this.$root.$t('close_text');
            } else if (this.server_time > this.morning_to && this.server_time < this.evening_from) {
                this.isMorningEvening = true
                if (this.holidays.status == 1) {
                    this.isActive = true
                } else {
                    this.isActive = false
                }

                return this.time_countdown = getAllTime_two.hour + ':' + getAllTime_two.minute + ':' + getAllTime_two.seconds
            } else if (this.server_time > this.evening_from && this.server_time < this.evening_to) {
                this.isActive = true


                this.isMorningEvening = false
                return this.time_countdown = this.$root.$t('close_text');
            } else if (this.server_time > this.evening_to) {

                if (this.holidays.status == 1) {
                    this.isActive = true
                } else {
                    this.isActive = false
                }
                return this.time_countdown = getAllTime.hour + ':' + getAllTime.minute + ':' + getAllTime.seconds
            } else {


                this.isMorningEvening = true
                //   this.isActive = true
                // return this.time_countdown = this.$root.$t('close_text');
                if (this.holidays.status == 1) {
                    this.isActive = true
                } else {
                    this.isActive = false
                }

                return this.time_countdown = getAllTime.hour + ':' + getAllTime.minute + ':' + getAllTime.seconds
            }
        },
        goBack() {
            this.$router.push(`/home?lang=${this.$store.state.locale}`);
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
        bet1(){
          alert("hello");
          console.log("hello");
        },
          }
}
</script>
