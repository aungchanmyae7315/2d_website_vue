<template>
    <section class="bet_container">
        <el-form @submit.native.prevent :model="numberValidateForm1" ref="numberValidateForm1" class="demo-ruleForm">
            <el-header style=" background-color:#14612D;">
                <el-row>
                    <el-col :span="10">
                        <div class="goTo">

                            <div class="" @click="goBack"><i class="el-icon-arrow-left"></i></div>

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

                            <el-input @keypress.enter.native="bet('numberValidateForm1')" class type="number" placeholder="100 Ks(min)" v-model="numberValidateForm1.amount"></el-input>
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
                            <el-button :disabled='submitted' type="warning" getHello="getHello" class="bet_btn_login" @click="footballSubmit_mown('numberValidateForm1')" round>{{$t('Bet')}}</el-button>
                        </el-col>

                        <!-- <input type = "submit"  value="Bet" @click="bet1()"> -->
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
                            <!-- <p style="color:white;">{{mown}}</p> -->
                            <!-- <p style="color:white;">{{one1}}</p> -->
                            <div v-if="mown == 1">
                            <div v-for="(match,aa) in matchs" :key="aa">
                                <div class="collapse_card mown">

                                  <div class="mown_match" >
                                    <label class="for_both" style="padding-left:2%;">
                                             <div class="forRadio">
                                                  <input type="radio" v-model="one1[aa]" :name="match.id" :value="{football_match_id:match.id,bet_team_id:match.home_team.id}">
                                             </div>
                                             <div class="team_name001">

                                               {{match.home_team.name}}
                                              </div>
                                              <div class="team_logo001">
                                               <img :src="match.home_team.logo" class="vs_team_img" style="width:55px;height:55px;">
                                               </div>
                                           </label>

                                    <div class="vs_mown" style="" >{{match.play_at}}</div>
                                    <label class="for_both">
                                              <div class="team_logo001">
                                               <img :src="match.away_team.logo" class="vs_team_img" style="width:55px;height:55px;">
                                               </div>
                                                <div class="team_name001">

                                               {{match.away_team.name}}
                                              </div>
                                              <div class="forRadio">
                                                   <input type="radio" v-model="one1[aa]" :name="match.id" :value="{football_match_id:match.id,bet_team_id:match.away_team.id}">
                                             </div>
                                          </label>
                                          </div>
                                          <div class="line" style="width:95%;" ></div>
                                          <div class="body_price_mown">
                                            <span >Body</span><span >{{match.body_price}}</span>
                                            </div>
                                </div>
                            </div>
                            </div>


                            <div v-if="mown == 2">
                            <div v-for="(match,aa) in tomorrow" :key="aa">
                                <div class="collapse_card mown">

                                  <div class="mown_match" >
                                    <label class="for_both" style="padding-left:2%;">
                                             <div class="forRadio">
                                                  <input type="radio" v-model="one1[aa]" :name="match.id" :value="{football_match_id:match.id,bet_team_id:match.home_team.id}">
                                             </div>
                                             <div class="team_name001">

                                               {{match.home_team.name}}
                                              </div>
                                              <div class="team_logo001">
                                               <img :src="match.home_team.logo" class="vs_team_img" style="width:55px;height:55px;">
                                               </div>
                                           </label>

                                    <div class="vs_mown" style="" >{{match.play_at}}</div>
                                    <label class="for_both">
                                              <div class="team_logo001">
                                               <img :src="match.away_team.logo" class="vs_team_img" style="width:55px;height:55px;">
                                               </div>
                                                <div class="team_name001">

                                               {{match.away_team.name}}
                                              </div>
                                              <div class="forRadio">
                                                   <input type="radio" v-model="one1[aa]" :name="match.id" :value="{football_match_id:match.id,bet_team_id:match.away_team.id}">
                                             </div>
                                          </label>
                                          </div>
                                          <div class="line" style="width:95%;" ></div>
                                          <div class="body_price_mown">
                                            <span >Body</span><span >{{match.body_price}}</span>
                                            </div>
                                </div>
                            </div>
                            </div>


                                      <div v-if="mown == 3">
                            <div v-for="(match,aa) in tomorrow1" :key="aa">
                                <div class="collapse_card mown">

                                  <div class="mown_match" >
                                    <label class="for_both" style="padding-left:2%;">
                                             <div class="forRadio">
                                                  <input type="radio" v-model="one1[aa]" :name="match.id" :value="{football_match_id:match.id,bet_team_id:match.home_team.id}">
                                             </div>
                                             <div class="team_name001">

                                               {{match.home_team.name}}
                                              </div>
                                              <div class="team_logo001">
                                               <img :src="match.home_team.logo" class="vs_team_img" style="width:55px;height:55px;">
                                               </div>
                                           </label>

                                    <div class="vs_mown" style="" >{{match.play_at}}</div>
                                    <label class="for_both">
                                              <div class="team_logo001">
                                               <img :src="match.away_team.logo" class="vs_team_img" style="width:55px;height:55px;">
                                               </div>
                                                <div class="team_name001">

                                               {{match.away_team.name}}
                                              </div>
                                              <div class="forRadio">
                                                   <input type="radio" v-model="one1[aa]" :name="match.id" :value="{football_match_id:match.id,bet_team_id:match.away_team.id}">
                                             </div>
                                          </label>
                                          </div>
                                          <div class="line" style="width:95%;" ></div>
                                          <div class="body_price_mown">
                                            <span >Body</span><span >{{match.body_price}}</span>
                                            </div>
                                </div>
                            </div>
                            </div>

                                      <div v-if="mown == 4">
                            <div v-for="(match,aa) in tomorrow2" :key="aa">
                                <div class="collapse_card mown">

                                  <div class="mown_match" >
                                    <label class="for_both" style="padding-left:2%;">
                                             <div class="forRadio">
                                                  <input type="radio" v-model="one1[aa]" :name="match.id" :value="{football_match_id:match.id,bet_team_id:match.home_team.id}">
                                             </div>
                                             <div class="team_name001">

                                               {{match.home_team.name}}
                                              </div>
                                              <div class="team_logo001">
                                               <img :src="match.home_team.logo" class="vs_team_img" style="width:55px;height:55px;">
                                               </div>
                                           </label>

                                    <div class="vs_mown" style="" >{{match.play_at}}</div>
                                    <label class="for_both">
                                              <div class="team_logo001">
                                               <img :src="match.away_team.logo" class="vs_team_img" style="width:55px;height:55px;">
                                               </div>
                                                <div class="team_name001">

                                               {{match.away_team.name}}
                                              </div>
                                              <div class="forRadio">
                                                   <input type="radio" v-model="one1[aa]" :name="match.id" :value="{football_match_id:match.id,bet_team_id:match.away_team.id}">
                                             </div>
                                          </label>
                                          </div>
                                          <div class="line" style="width:95%;" ></div>
                                          <div class="body_price_mown">
                                            <span >Body</span><span >{{match.body_price}}</span>
                                            </div>
                                </div>
                            </div>
                            </div>

                        </div>


                    </div>
                </div>

            </el-main>
        </el-form>

    </section>
</template>

<style>
.vs_text1 {
    align-self: center;
    transform: translateX(210px);
    margin-bottom: 0px;
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
            // ruleForm: {
            //     amount: '',
            //     check_btn: [],

            // },
            dialogFormVisible: false,

            profile: '',
            myWallet: '',
            myPointWallet: '',
            // radio: '1',
            matchs: '',
            end_bet_football: '',
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
            end_bet_football: '',
            mown:localStorage.getItem('mown'),
            one: [],
            one1: [],
            res: [],
            tomorrow: '',
            tomorrow1: '',
            tomorrow2: '',
            // id:''
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

      let mownID = localStorage.getItem('mown');
      if(mownID==1){
       this.$axios.get("/v2/v1/football/today/upcoming")
            .then(response => {
                console.log("upcoming", response.data.data);
                this.matchs = response.data.data;
            })
      }
      if(mownID==2){
       this.$axios.get("/v2/v1/football/tomorrow/match")
            .then(response => {
                console.log("tomorrow", response.data.data);
                this.tomorrow = response.data.data;
            })
      }
      if(mownID==3){
       this.$axios.get("/v2/v1/football/one_tomorrow/match")
            .then(response => {
                console.log("tomorrow1", response.data.data);
                this.tomorrow1 = response.data.data;
            })
      }
      if(mownID==4){
       this.$axios.get("/v2/v1/football/two_tomorrow/match")
            .then(response => {
                console.log("tomorrow2", response.data.data);
                this.tomorrow2 = response.data.data;
            })
      }


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
        cur_id(id) {
            // var id = document.querySelector("#matchid").value;
            console.log(id) // 1
        },
        footballSubmit_mown(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    // console.log("success");
                    var arr1 = this.one1;
                    var res = arr1.filter(val => val);
                    // console.log(res); // [1,3,5]
                    var amount = this.numberValidateForm1.amount;
                    var success = res.map(function(item, index) {
                        item.amount = amount;
                        return item;
                    });

                    console.log(success);


                    let checkRadio = document.querySelector(
                        'input[name="bet_team_id"]:checked');

                    // if (checkRadio != null) {
                    //     console.log(this.radio);
                    this.submitted = true
                    let token = localStorage.getItem('token');

                    var data = {
                        data: success,
                        //  amount:100
                        // football_match_id: localStorage.getItem('bet_numberThreeD'),
                        // amount: this.numberValidateForm1.amount,
                        // bet_team_id: res,
                    }
                    console.log(data);
                    this.$axios.post("/v2/v1/football/moung/bet",
                            data, {
                                headers: {
                                    "Authorization": "Bearer " + token
                                },

                            })
                        .then(response => {

                            console.log(response);
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
                            } else if (response.data.status == 3) {
                                this.$message({
                                    showClose: true,
                                    message: 'Please bet at least 3 match',
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
                    // } else {
                    //     document.getElementById("error_div").innerHTML = "Please select one team!";
                    // }
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
    }
}
</script>
