<template>
    <div class="main_container notification">
        <el-header>
            <!-- <nuxt-link  :to="`${$t('/')}?lang=${$store.state.locale}`"> -->
            <div v-for="(fDetailHeader, f) in historyDetail" :key="f">
                <div v-if="fDetailHeader.type == 1">
                    <el-page-header @back="goBack" title="" :content="`Goal`">
                    </el-page-header>
                </div>
                <div v-else>
                    <el-page-header @back="goBack" title="" :content="`Body`">
                    </el-page-header>
                </div>
            </div>
            <!-- </nuxt-link> -->
        </el-header>

        <div class="bet_detail_main">
            <div v-for="(fDetail, f) in historyDetail" :key="f">
                <div class="collapse_card1" style="color:#121212;">
                    <el-row>
                        <span class="date" style="color:#121212;">{{fDetail.play_at_time}}</span>
                        <span class="time1" style="color:#121212;">{{fDetail.play_at}}</span>
                    </el-row>
                    <div class="goal_inner">
                        <div class=" team_vs">
                            <div v-if="fDetail.home_team.id == fDetail.bet_team.id">
                                <div class="vs_inner_body team_01">
                                    <span class="hot" style="color:#121212;margin-left:-10px;font-size:12px;"><img src="~static/images/hot.png" width="20"> Hot</span>
                                    <br>
                                    <img :src="fDetail.home_team.logo" class="vs_team_img">
                                    <br>
                                    <span class="vs_teamname" style="color:#121212;">{{fDetail.home_team.name}}</span>

                                </div>
                                <!-- <span> Selected </span> -->
                            </div>
                            <div v-else>
                                <div class="vs_inner2 team_01">
                                    <span class="hot" style="color:#121212;margin-left:-10px;font-size:12px;"><img src="~static/images/hot.png" width="20"> Hot</span>
                                    <br>
                                    <img :src="fDetail.home_team.logo" class="vs_team_img">
                                    <br>
                                    <span class="vs_teamname" style="color:#121212;">{{fDetail.home_team.name}}</span>
                                </div>
                            </div>
                            <span class="vs_text" style="color:#121212; font-size:25px;font-weight:501">
                                              {{fDetail.home_goal}} - {{fDetail.away_goal}}<br><span class="gb_background">{{fDetail.price}}</span></span>

                            <div v-if="fDetail.away_team.id == fDetail.bet_team.id">
                                <div class="vs_inner_body team_02">
                                    <img :src="fDetail.away_team.logo" class="vs_team_img">
                                    <br>
                                    <span class="vs_teamname" style="color:#121212;">{{fDetail.away_team.name}}</span>
                                </div>
                            </div>

                            <div v-else>
                                <div class="vs_inner2 team_02">
                                    <img :src="fDetail.away_team.logo" class="vs_team_img">
                                    <br>
                                    <span class="vs_teamname" style="color:#121212;">{{fDetail.away_team.name}}</span>
                                </div>
                            </div>



                        </div>
                    </div>

                    <div v-if="fDetail.type == 2">
                        <div v-if="fDetail.goal_status == 1">
                            <div class="up-And-down">
                                <div class="checked_btn">
                                    <span class="normal_check_icon">&nbsp;</span>
                                </div>
                                <div class="up_down_text">Up</div>
                                <div class="imageForUpDown"><img src="~static/images/up.png" width="20" class=""></div>
                            </div>
                        </div>

                        <div v-else>
                            <div class="up-And-down">
                                <div class="checked_btn">
                                    <span class="up_check_icon"><i class="el-icon-check"></i></span>
                                </div>
                                <div class="up_down_text">Up</div>
                                <div class="imageForUpDown"><img src="~static/images/up.png" width="20" class=""></div>
                            </div>
                        </div>

                        <div v-if="fDetail.goal_status == 2" >
                            <div class="up-And-down">
                                <div class="checked_btn">
                                    <span class="down_check_icon"><i class="el-icon-check"></i></span>
                                </div>
                                <div class="up_down_text" style="color:#F44336;">Down</div>
                                <div class="imageForUpDown"><img src="~static/images/down.png" width="20" class=""></div>
                            </div>
                        </div>
                        <div v-else>
                            <div class="up-And-down">
                                <div class="checked_btn">
                                    <span class="normal_check_icon"> &nbsp;</span>
                                </div>
                                <div class="up_down_text" style="color:#F44336;">Down</div>
                                <div class="imageForUpDown"><img src="~static/images/down.png" width="20" class=""></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<style>
.up-And-down {
    width: 90%;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    background-color: #EEEEEE;
    height: 40px;
    border-radius: 10px;
}

.checked_btn {
    width: 30%;
    align-items: center;
    display: flex;
    justify-content: flex-start;
}

.up_down_text {
    width: 30%;
    align-items: center;
    display: flex;
    justify-content: center;
    color: #158220;
    font-weight: bold;
}

.imageForUpDown {
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-left: 20%;
}

.checked_btn .up_check_icon {
    width: 20px;
    background-color: #158220;
    height: 20px;
    justify-content: flex-start;
    margin: 10px;
    border-radius: 2px;
    color: white;
}

.checked_btn .normal_check_icon {
    width: 20px;
    border: 2px solid #C8C8C8;
    height: 20px;
    justify-content: flex-start;
    margin: 10px;
    border-radius: 2px;
    color: #121211;
}

.checked_btn .down_check_icon {
    width: 20px;
    background-color: #F44336;
    height: 20px;
    justify-content: flex-start;
    margin: 10px;
    border-radius: 2px;
    color: white;
}

.notification .el-page-header {
    line-height: 43px;
    color: #fff;
    padding: 0 20px;
}

.notification .el-page-header__content {
    color: #fff;
}

.noti_background_color {
    background-color: #e6faff;
}

.noti_content .el-divider--horizontal {
    margin: 13px auto;
}

.noti_text {
    padding: 0;
    margin: 0;
}

.noti_text li {
    list-style: none;
    padding-top: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid #e8e8ee;
}

.noti_text .noti_icon {
    width: 65px;
    height: auto;
    float: left;
    display: block;
    margin-top: -6px;
    margin-right: 5px;
}

.el_icon_right {
    float: right;
    position: relative;
    right: 25px;
    bottom: 47px;
}

.vs_inner_body {
    border: 3px solid #158220;
    padding: 10px;
    border-radius: 10px;
}
</style>

<script>
import axios from "axios";
export default {
    mounted() {


    },
    data() {
        return {
            historyDetail: '',
        };
    },

    methods: {
        goBack() {
            this.$router.push(`/?lang=${this.$store.state.locale}`);
        },

    },
    created() {
        let token = localStorage.getItem('token');
        let historydetailid = localStorage.getItem("bet_history_detail_id")
        this.$axios.get("v2/v1/football/history/detail?id=" + historydetailid, {
                headers: {
                    "Authorization": "Bearer " + token
                }
            })
            .then(response => {
                console.log(response.data.data),
                    this.historyDetail = response.data.data
            })
    }
};
</script>
