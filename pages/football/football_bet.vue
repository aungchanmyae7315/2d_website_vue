<template>
    <el-main class="main_page twod_home">
        <el-header>
            <el-page-header title="" @back="goBack"> </el-page-header>

            <p style="width:145px !important" class="logo1">Goal+</p>
            <div @click="HomeRefresh" class="refresh_icon" v-loading.fullscreen.lock="fullscreenLoading">
                <nuxt-link :to="`${$t('/football/football_notification')}?lang=${$store.state.locale}`">
                    <img src="" alt="" style="margin-top:10px;width:20px;" />
                </nuxt-link>
            </div>
        </el-header>
        <el-form @submit.native.prevent :model="numberValidateForm1" ref="numberValidateForm1" class="demo-ruleForm">
            <div class="goal_main">

                <div class="goal_header" style="height:65vh">
                    <div class="el-body">
                        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                            <el-tab-pane name="first" label="Body">
                                <div class="choose_team">လောင်းမည့်အသင်းရွေးပါ</div>
                                <div class="padding-justify">
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
                                                <div class="goal_vs">
                                                    <p class="goal_vs_p1">Body</p>
                                                    <p class="goal_vs_p2">{{fDetail.body_price}}</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane name="second" label="Goal">
                                <div class="choose_team">လောင်းမည့်အသင်းရွေးပါ</div>
                                <div class="padding-justify">
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
                <div class="goal_footer" style="background-color:#14612D;width:100%;height:35vh;">
                    <p class="amount_lbl">လောင်းမည့်ပမာဏကိုထည့်ပါ၊</p>

                    <el-form-item prop="amount" :rules="[
                                          { required: true, message: $t('amount_required') },

                                      ]">
                        <el-input @keypress.enter.native="footballSubmit('numberValidateForm1')" id="form-name" type="number" :placeholder="$t('bet_amount')" v-model="numberValidateForm1.amount"></el-input>

                    </el-form-item>

                    <div class="bet_info">
                        <span class="bet_balance">
                                            <img  src="~static/images/amount_icon.png" width="25">
                                           <span>{{ $t("you_balance") }} : </span
                                                                >{{ this.thousands_separators(myWallet) }}
                                                   {{ $t("kyat") }}
                                          </span>
                        <span class="close_time">
                                           <span class="bet_close_time"> {{$t('bet_close_time')}} : {{this.time_countdown}} </span>
                        </span>
                    </div>
                    <!-- <el-button  :disabled='submitted'  type="submit" v-on:click="football_bet()"   class="bet_submit" round>  {{$t('Bet')}}</el-button> -->
                    <!-- <button type="submit" class="btn_bet" v-on:click="football_bet()">Bet</button> -->
                    <div v-if="this.activeName == 'first'">
                        <div ><el-button type="" class="btn_bet"  @click="footballSubmit_body('numberValidateForm1')" :disabled='submitted' round>{{$t('Bet')}}</el-button></div>
                    </div>
                    <div v-else-if="this.activeName == 'second'">
                        <div><el-button type="" class="btn_bet"  @click="footballSubmit('numberValidateForm1')" :disabled='submitted' round>{{$t('Bet')}}</el-button></div>
                    </div>


                </div>

            </div>
        </el-form>
    </el-main>
</template>

<script>
import axios from "axios";
import carousel from "vue-owl-carousel";

export default {
    components: { carousel },
    getters: {},
    mutations: {},
    actions: {},
    // layout: 'homeLayout',

    mounted() {
        //  this.$axios.get('/v2/v1/football/close_time')

        //       .then(response => {
        //            console.log(response)
        //       })

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

            var difference =  endBet - currentTime;
            var difference_two =    endBet - nextDate

            var football_betTime = this.convertMS(difference);
              var football_betTime_B = this.convertMS(difference_two);
            // console.log(football_betTime)
            if(this.server_time > this.end_bet_football) {

                 return this.time_countdown = football_betTime.hour + ':' + football_betTime.minute + ':' + football_betTime.seconds
            }else if (this.server_time < this.end_bet_football) {

                 return this.time_countdown = football_betTime_B.hour + ':' + football_betTime_B.minute + ':' + football_betTime_B.seconds
            }

        },

        isMobile: function() {
            var check = false;
            (function(a) {
                if (
                    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
                        a
                    ) ||
                    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                        a.substr(0, 4)
                    )
                )
                    check = true;
            })(navigator.userAgent || navigator.vendor || window.opera);
            return check;
        },

        updateIsLoggedIn() {
            this.$store.commit("updateIsLoggedIn", this.hasUserInfo());
        },
        hasUserInfo() {
            return Boolean(localStorage.getItem("userInfo"));
        },

        footballSubmit_body(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
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

    },
    created() {



        let token = localStorage.getItem("token");
        if (token) {
            this.$axios
                .get("/v2/v1/profile", {
                    headers: {
                        Authorization: "Bearer " + token
                    }
                })
                .then(response => {
                    this.blockUser = response.data.data.trash;
                    //console.dir(response.data);
                    this.profile = response.data.data;
                    this.myWallet = this.profile.wallet;
                    this.currentTime = response.data.data.time;
                    //console.dir(response.data.data.time);
                    if (this.blockUser == 0) {} else {
                        this.$store.commit("logOut");
                        this.$router.push(`/home?lang=${this.$store.state.locale}`);
                    }
                });
        }

        this.$axios.get("/v2/v1/server_time").then(response => {
            this.server_time = response.data.time;
            this.serverDate = response.data.date;
        });

        // let token = localStorage.getItem("token")
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
                    this.end_bet_football = response.data.data[0].end_date;
                    console.log(this.end_bet_football)
                    console.log("Hello", this.footballMatchDetail);

                });
        }
    },
};
</script>

<style>
.twod_home .el-header {
    padding: 20px;
    color: #fff;
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
</style>
