<template>
    <div class="main_container notification" style="height:100vh">
        <div class="bet_detail_main">
            <!-- v-for="(football_noti ,fn) in football_noti_detail" :key="fn" -->
            <div class="first_div">
                <div v-if="this.football_noti_detail.type == 1">
                    <h5 class="body_text">
                        Goal
                    </h5>
                </div>
                <div v-else>
                    <h5 class="body_text">
                        Body
                    </h5>
                </div>
                <img src="~static/images/order.png" alt="" style="margin-top:10px;" />

                <h3 style="font-weight:600">
                    {{this.football_noti_detail.title}} !
                </h3>
                <h4>+ {{this.football_noti_detail.win_amount}} Ks</h4>
            </div>
            <div class="line"></div>

            <div class="collapse_card1" style="color:#121212;">
                <el-row>
                    <span class="date" style="color:#121212;">{{this.football_noti_detail.play_at_time}}</span>
                    <span class="time1" style="color:#121212;">{{this.football_noti_detail.play_at}}</span>
                </el-row>

                <div class="goal_inner">
                    <div class=" team_vs">
                        <div class="vs_inner1 team_01">
                            <span class="hot" style="color:#121212;margin-left:-10px;font-size:12px;"><img src="~static/images/hot.png" width="20"> Hot</span>
                            <br>
                            <!-- <input v-model="radio" type="radio" name="emotion" id="sad" class="input-hidden" /> -->
                                            <label for="sad">
                                               <div class="ok">
                                                   <span class="tick"></span>
                                                </div>
                                               <img :src="this.football_noti_detail.hot_team.logo" class="vs_team_img">

                                            </label>

                            <br>
                            <span class="vs_teamname" style="color:#121212;">{{this.football_noti_detail.home_team.name}}</span>
                        </div>
                        <span class="vs_text" style="color:#121212; font-size:25px;font-weight:501">
                                     {{this.football_noti_detail.home_goal}} - {{this.football_noti_detail.away_goal}}<br><span class="gb_background">{{this.football_noti_detail.price}}</span></span>
                        <div class="vs_inner1 team_02">
                            <!-- <input v-model="radio" value="2" type="radio" name="emotion" id="happy" class="input-hidden" /> -->
                            <label for="happy">
                                                    <div class="ok" >
                                                          <span class="tick"></span>
                                                    </div>
                                                   <img :src="this.football_noti_detail.away_team.logo" class="vs_team_img">

                                                </label>


                            <br>
                            <span class="vs_teamname" style="color:#121212;">{{this.football_noti_detail.away_team.name}}</span>
                        </div>
                    </div>
                </div>

            </div>
            <div class="suc_btn">
                <el-footer>
                    <nuxt-link :to="`${$t('/')}?lang=${$store.state.locale}`">
                        <el-button round="">{{$t('Confirm')}}</el-button>
                    </nuxt-link>
                </el-footer>
            </div>
        </div>


    </div>
</template>

<script>
import axios from "axios";
export default {
    mounted() {


    },
    data() {
        return {
            football_noti_detail: '',
        };
    },

    methods: {
        goBack() {
            this.$router.push(`/?lang=${this.$store.state.locale}`);
        },

    },
    created() {
        let token = localStorage.getItem('token');
        let notidetailid = localStorage.getItem("football_noti_detail_id")
        if (token) {
            this.$axios
                .get("v2/v1/football/notification/detail?notification_id=" + notidetailid, {
                    headers: {
                        Authorization: "Bearer " + token
                    }
                })
                .then(response => {
                    console.log("detail", response);
                    this.football_noti_detail = response.data.data;
                    console.log(this.football_noti_detail);

                });
        }
    }
};
</script>

<style scoped>
.vs_inner1 {
    width: auto !important;
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
