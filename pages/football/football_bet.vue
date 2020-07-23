<template>
    <section class="bet_container">
        <el-form @submit.native.prevent :model="numberValidateForm1" ref="numberValidateForm1" class="demo-ruleForm">
            <el-header style=" background-color:#14612D;">
                <el-row>
                    <el-col :span="10">
                        <div class="goTo">
                            <!-- <a href="${$t('/edit_profile_index')}?lang=${$store.state.locale}"> -->
                            <div class="" @click="goBack()"><i class="el-icon-arrow-left"></i></div>
                            <!-- </a> -->
                        </div>
                    </el-col>
                    <el-col :span="10" v-if="this.activeName == 'first'">
                        Body
                    </el-col>
                    <el-col :span="10" v-else-if="this.activeName == 'second'">
                        Goal+
                    </el-col>

                </el-row>
                <el-row style="padding-top:10px;">
                    <el-col>
                        <p class="amount_lbl">လောင်းမည့်ပမာဏကိုထည့်ပါ၊</p>
                    </el-col>
                    <el-col v-if="this.activeName == 'first'">

                        <el-form-item style="margin-bottom:10px;" prop="amount" :rules="[
                                             { required: true, message: $t('amount_required') },

                                        ]">

                            <el-input @keypress.enter.native="footballSubmit_body('numberValidateForm1')" class type="number" placeholder="100 Ks(min)" v-model="numberValidateForm1.amount"></el-input>

                        </el-form-item>
                    </el-col>
                    <el-col v-else-if="this.activeName == 'second'">

                        <el-form-item style="margin-bottom:10px;" prop="amount" :rules="[
                                             { required: true, message: $t('amount_required') },

                                        ]">

                            <el-input @keypress.enter.native="footballSubmit('numberValidateForm1')" class type="number" placeholder="100 Ks(min)" v-model="numberValidateForm1.amount"></el-input>

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

                    <el-col :span="14" v-if="!$store.state.isLoggedIn">
                        <div class="balance_amount"></div>
                    </el-col>
                    <el-col :span="14" v-else>
                        <div class="balance_amount">
                        </div>
                    </el-col>

                    <div class="bet_footer" v-if="!$store.state.isLoggedIn">
                        <el-col :span="24" style="font-size:13px;text-align:right">
                            <nuxt-link :to="`${$t('/login')}?lang=${$store.state.locale}`">
                                <el-button type="warning" round>{{$t('Please Login first')}}</el-button>
                            </nuxt-link>
                        </el-col>
                    </div>
                    <div v-else>
                        <div v-if="this.activeName == 'first'" class="bet_login_btn">
                            <el-col :span="10">
                                <el-button :disabled='submitted' type="warning" class="bet_btn_login" @click="footballSubmit_body('numberValidateForm1')" round>{{$t('Bet')}}</el-button>
                            </el-col>
                        </div>
                        <div v-else-if="this.activeName == 'second'" class="bet_login_btn">
                            <el-col :span="10">
                                <el-button :disabled='submitted' type="warning" class="bet_btn_login" @click="footballSubmit('numberValidateForm1')" round>{{$t('Bet')}}</el-button>
                            </el-col>
                        </div>
                    </div>
                </el-row>
            </el-header>
            <el-main>
                <div class="longText" id="hidingScrollBar">
                    <div class="hideScrollBar_bet">
                        <div class="all_btn1">
                            <div class="el-body">
                                <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                                    <el-tab-pane name="first" label="Body">
                                        <div class="choose_team">လောင်းမည့်အသင်းရွေးပါ</div>
                                        <div class="padding-justify1">
                                            <div v-if="this.activeName == 'first'">
                                                <div class="collapse_card" v-for="(fDetail, f) in footballMatchDetail" :key="f">
                                                    <el-row>
                                                        <span class="date">{{fDetail.play_at_time}}</span>
                                                        <span class="time1">{{fDetail.play_at}}</span>
                                                    </el-row>
                                                    <div class="line"></div>

                                                    <div class="goal_inner">
                                                        <div class=" team_vs">
                                                            <div class="vs_inner team_01">
                                                                <span class="hot"><img src="~static/images/hot.png" width="20"> Hot</span>
                                                                <br>
                                                                <input v-model="bet_team_id" type="radio" name="bet_team_id" v-bind:value="fDetail.home_team.id" id="sad" class="input-hidden" />
                                                                <label for="sad">
                                                   <div class="ok">
                                                       <span class="tick"></span>
                                                    </div>
                                                   <img :src="fDetail.home_team.logo" class="vs_team_img">

                                                </label>

                                                                <br>
                                                                <span class="vs_teamname">{{fDetail.home_team.name}}</span>
                                                            </div>
                                                            <span class="vs_text"> VS</span>
                                                            <div class="vs_inner team_02">
                                                                <input v-model="bet_team_id" type="radio" name="bet_team_id" v-bind:value="fDetail.away_team.id" id="happy" class="input-hidden" />
                                                                <label for="happy">
                                                        <div class="ok">
                                                              <span class="tick"></span>
                                                        </div>
                                                       <img :src="fDetail.away_team.logo" class="vs_team_img">

                                                    </label>


                                                                <br>
                                                                <span class="vs_teamname">{{fDetail.away_team.name}}</span>
                                                            </div>
                                                        </div>
                                                         <div class="error_div" id="error_div"></div>
                                                        <div class="goal_vs" style="margin-top:20px;margin-bottom:40px;">
                                                            <p class="goal_vs_p1" style="font-size:20px;">Body</p>
                                                            <p class="goal_vs_p2">{{fDetail.body_price}}</p>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </el-tab-pane>
                                    <el-tab-pane name="second" label="Goal+">
                                        <div class="choose_team">လောင်းမည့်အသင်းရွေးပါ</div>
                                        <div class="padding-justify1">
                                            <div v-if="this.activeName == 'second'">
                                                <div class="collapse_card" v-for="(fDetail, f) in footballMatchDetail" :key="f">
                                                    <el-row>
                                                        <span class="date">{{fDetail.play_at_time}}</span>
                                                        <span class="time1">{{fDetail.play_at}}</span>
                                                    </el-row>
                                                    <div class="line"></div>

                                                    <div class="goal_inner">
                                                        <div class=" team_vs">
                                                            <div class="vs_inner team_01">
                                                                <span class="hot"><img src="~static/images/hot.png" width="20"> Hot</span>
                                                                <br>
                                                                <img :src="fDetail.home_team.logo" class="vs_team_img">
                                                                <br>
                                                                <span class="vs_teamname">{{fDetail.home_team.name}}</span>
                                                            </div>
                                                            <span class="vs_text"> VS</span>
                                                            <div class="vs_inner team_02">
                                                                <img :src="fDetail.away_team.logo" class="vs_team_img">
                                                                <br>
                                                                <span class="vs_teamname">{{fDetail.away_team.name}}</span>
                                                            </div>
                                                        </div>
                                                        <div class="goal_vs">
                                                            <p class="goal_vs_p1">ဂိုးပေါင်း</p>
                                                            <p class="goal_vs_p2">{{fDetail.goal_price}}</p>
                                                        </div>
                                                        <div class="">
                                                            <el-form-item prop="radio" :rules="[
                                                          { required: true, message: 'please select team'},

                                                      ]">


                                                                <div class="radio_up">
                                                                    <el-radio @keypress.enter.native="footballSubmit('numberValidateForm1')" v-model="numberValidateForm1.radio" label="1" value="1">

                                                                        <span class="green">Up</span>
                                                                        <img src="~static/images/up.png" width="20" class="">


                                                                    </el-radio>
                                                                </div>
                                                                <div class="radio_down">
                                                                    <el-radio @keypress.enter.native="footballSubmit('numberValidateForm1')" v-model="numberValidateForm1.radio" label="2" value="2">
                                                                        <span class="red">Down</span>
                                                                        <img src="~static/images/down.png" width="20" class="">
                                                                    </el-radio>
                                                                </div>


                                                            </el-form-item>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </el-tab-pane>
                                </el-tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </el-main>
        </el-form>

    </section>
</template>

<style>
.el-form-item__error {
    margin-left: 2px;
    margin-bottom: 5px;
}
.goal_inner .el-form-item__error{
  margin-left:15px;
}
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

.el-radio {
    display: block;
    width: 100%;
}

.radio_up {
    background: #2F3A48;
    margin: 0 10px;
    padding: 10px 30px;
    box-sizing: border-box;
    border-radius: 10px;
    margin-bottom: 5px;
}

.radio_up .green {
    position: absolute;
    left: 46%;
    color: #4CAF50;
    font-size: 15px;
    font-weight: 600;
    margin-top: 10px;
    ;
}

.radio_up img {
    position: absolute !important;
    right: 0;
    top: 5px;
}

.radio_up .el-radio__input.is-checked .el-radio__inner {
    background-color: white !important;
    color: black !important;
    border: 0;
}

.radio_down .el-radio__input.is-checked .el-radio__inner {
    background-color: white !important;
    color: black !important;
    border: 0;
}

.radio_up .el-radio__inner {
    border-radius: 2px !important;
}

.radio_up .el-radio__inner {
    border-radius: 2px !important;
    border: 2px solid white;
    background-color: #2F3A48 !important;
}

.radio_down .el-radio__inner {
    border-radius: 2px !important;
    border: 2px solid white;
    background-color: #2F3A48 !important;
}

.radio_down {
    background: #2F3A48;
    margin: 0 10px;
    padding: 10px 30px;
    box-sizing: border-box;
    border-radius: 10px;
}

.radio_down .red {
    position: absolute;
    left: 44%;
    color: #F44336;
    font-size: 15px;
    font-weight: 600;
    margin-top: 10px;
    ;
}

.radio_down img {
    position: absolute !important;
    right: 0;
    top: 5px;
}

.el-radio__inner {
    border-radius: 5px;
    width: 18px;
    height: 18px;
}

.radio_inner {
    width: 100%;
}

.radio_down.el-radio:last-child {
    margin: 10px 30px;
}

.radio_up .el-radio__input,
.radio_down .el-radio__input {
    float: left;
    /* padding-top:5px; */
}

.radio_up img,
.radio_down img {
    position: relative;
    bottom: 7px
}

.goal_inner .input-hidden {
    position: absolute;
    left: -9999px;
}

/* Stuff after this is only to make things more pretty */

.goal_inner input[type=radio]+label>img {
    transition: 500ms all;
}

.goal_inner input[type=radio]:checked+label>.ok {
    display: block;
    width: 100px;
    background: rgba(0, 0, 0, .5);
    height: 140px;
    position: absolute;
    border: 2px solid #FFEA72;
    border-radius: 5px;
    transform: translate(-10px, -25px);
}

.tick {
    display: block;
    width: 30px;
    height: 15px;
    border-left: 5px solid white;
    border-bottom: 5px solid white;
    transform: rotate(-45deg);
    margin-top: 55px;
}

.ok {
    display: none;
}

.goal_footer .el-input__inner {
    width: 90% !important;
    border-radius: 10px;
}
.checked_btn {
    width: 30%;
    align-items: center;
    display: flex;
    justify-content: flex-start;
}

</style>

<script>
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
            // alert('ok')

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

        var m = window.location.href.match(/device_id=([^&]+)/i);
        var isSeinluckyApp = navigator.userAgent.match(/seinlucky-app-2019/i);
        if (m != null && isSeinluckyApp) {
            var deviceId = m[1];
            localStorage.setItem("deviceId", deviceId);
        }
        //console.dir(this.$store.state.webAppVersion.length);
        if (this.$store.state.webAppVersion.length == 0) {
            this.$axios.get(`/web-app-version`).then(response => {
                this.$store.commit("setWebAppVersion", response.data.version);
            });
        }

        let lang = localStorage.getItem("locale");
        this.$store.commit("SET_LANG", lang);
        $("input:checkbox").on('click', function() {
            // in the handler, 'this' refers to the box clicked on
            $("#markerDiv").click(function(e) {
                var $box = $(this);
                if ($box.is(":checked")) {
                    // the name of the box is retrieved using the .attr() method
                    // as it is assumed and expected to be immutable
                    var group = "input:checkbox[name='" + $box.attr("name") + "']";
                    // the checked state of the group/box on the other hand will change
                    // and the current value is retrieved using .prop() method
                    $(group).prop("checked", false);
                    $box.prop("checked", true);
                } else {
                    $box.prop("checked", false);
                }
            });
        })



    },

    data() {
        return {
            fullscreenLoading: false,
            serverDate: "",
            last_date: "",
            dialogVisible: false,
            isActive: true,
            hasError: false,
            server_time: "",

            currentDate: null,
            slider_images: "",
            activeIndex: "1",

            info: "",
            info_api: "",

            profile: "",
            slider_text: "",
            footballMatchDetail: "",
            accordion: true,
            football_match_id: "",
            goal_status: "",
            activeIndex2: '1',
            activeName: "first",
            numberValidateForm1: {
                amount: '',
                radio: '',
            },
            radio: '',
            bet_team_id: '',
            holidays: '',
            submitted: false,
            time_countdown: '',
            one_result: '',
            hasError: '',
            currentTime: '',
            isLoggedIn: true,
            dialogFormVisible: false,
            profile: '',
            myWallet: '',
            end_bet_football:''



        };
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


        let footballdetailid = localStorage.getItem("football_detali_id")
        if (token) {
            this.$axios
                .get("v2/v1/football/detail?id=" + footballdetailid, {
                    headers: {
                        Authorization: "Bearer " + token
                    }
                })
                .then(response => {
                    console.log("heool", response);
                    this.footballMatchDetail = response.data.data;
                    this.end_bet_football = response.data.data[0].end_time;
                    console.log(this.end_bet_football)
                    console.log("Hello", this.footballMatchDetail);

                });
        }
    },

    methods: {
        HomeRefresh() {
            this.fullscreenLoading = true;
            setTimeout(() => {
                this.fullscreenLoading = false;
                location.reload();
            }, 1000);
        },
        goBack() {
            this.$router.push(`/football/football?lang=${this.$store.state.locale}`);
        },
        thousands_separators(num) {
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
        BetCurrentTime() {
            this.currentTime = moment().format('HH:mm:ss');
            var currentTime = new Date("07/07/2020 " + this.currentTime);
            var endBet = new Date("07/07/2020 " + this.end_bet_football);

            var nextDate = new Date("07/07/2020 " + this.currentTime);
            var endBet = new Date("07/08/2020 " + this.end_bet_football);

            var difference = endBet - currentTime;
            var difference_two = endBet - nextDate

            var football_betTime = this.convertMS(difference);
            var football_betTime_B = this.convertMS(difference_two);
            // console.log(football_betTime)
            if (this.server_time > this.end_bet_football) {

                return this.time_countdown = football_betTime.hour + ':' + football_betTime.minute + ':' + football_betTime.seconds
            } else if (this.server_time < this.end_bet_football) {

                return this.time_countdown = football_betTime_B.hour + ':' + football_betTime_B.minute + ':' + football_betTime_B.seconds
            }

        },
        goBack() {
            this.$router.push(`/football/football?lang=${this.$store.state.locale}`);
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

        footballSubmit_body(formName) {


            this.$refs[formName].validate((valid) => {
                if (valid) {

                    let checkRadio = document.querySelector(
                        'input[name="bet_team_id"]:checked');

                    if (checkRadio != null) {
                         console.log(this.radio);
                    this.submitted = true
                    let token = localStorage.getItem('token');

                    var data = {
                        football_match_id: localStorage.getItem("football_detali_id"),
                        amount: this.numberValidateForm1.amount,
                        bet_team_id: this.bet_team_id,
                    }
                    this.$axios.post("/v2/v1/football/body/bet",
                            data, {
                                headers: {
                                    "Authorization": "Bearer " + token
                                },

                            })
                        .then(response => {


                            this.submitted = false
                            if (response.data.status == 5) {
                                this.submitted = false
                                this.$message({
                                    showClose: true,
                                    message: 'ထီထိုးငွေပမာဏကို အနည်းဆုံး ၁၀၀ ထိုးရပါမည်',
                                    type: 'warning',
                                    //   duration:0
                                });
                            }

                            else if (response.data.status == 1) {
                                this.$message({
                                    showClose: true,
                                    message: 'Football Bet is closed.',
                                    type: 'warning',
                                    //   duration:0
                                });
                            } else if (response.data.status == 2) {
                                this.$message({
                                    showClose: true,
                                    message: this.$t('amount_invalid'),
                                    type: 'warning',
                                    //   duration:0
                                });
                            } else if (response.data.status == 5) {
                                this.$message({
                                    showClose: true,
                                    message: 'Cannot bet 50',
                                    type: 'warning',
                                    //   duration:0
                                });
                            } else {
                                this.submitted = true
                                this.$router.push(`/football/success?` + `lang=${this.$store.state.locale}`);

                            }

                        })
                        .catch(error => {
                            console.log(error.response)
                        })
                    } else {
                       document.getElementById("error_div").innerHTML
                    = "Please select one team!";
                    }
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },


        footballSubmit(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.submitted = true
                    let token = localStorage.getItem('token');

                    var data = {
                        football_match_id: localStorage.getItem("football_detali_id"),
                        amount: this.numberValidateForm1.amount,
                        goal_status: this.numberValidateForm1.radio,
                    }
                    this.$axios.post("/v2/v1/football/goal/bet",
                            data, {
                                headers: {
                                    "Authorization": "Bearer " + token
                                },

                            })
                        .then(response => {

                            console.log(response)
                            this.submitted = false
                            if (response.data.status == 5) {
                                this.submitted = false
                                this.$message({
                                    showClose: true,
                                    message: 'ထီထိုးငွေပမာဏကို အနည်းဆုံး ၁၀၀ ထိုးရပါမည်',
                                    type: 'warning',
                                    //   duration:0
                                });
                            } else if (response.data.status == 1) {
                                this.$message({
                                    showClose: true,
                                    message: 'Football Bet is closed.',
                                    type: 'warning',
                                    //   duration:0
                                });
                            } else if (response.data.status == 2) {
                                this.$message({
                                    showClose: true,
                                    message: this.$t('amount_invalid'),
                                    type: 'warning',
                                    //   duration:0
                                });
                            } else if (response.data.status == 5) {
                                this.$message({
                                    showClose: true,
                                    message: 'Cannot bet 50',
                                    type: 'warning',
                                    //   duration:0
                                });
                            } else {
                                this.submitted = true
                                this.$router.push(`/football/success?` + `lang=${this.$store.state.locale}`);

                            }


                        })
                        .catch(error => {
                            console.log(error.response)
                        })


                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        }


    }
}
</script>
