<template>
    <div class="main_container notification">
        <el-header>
            <!-- <nuxt-link  :to="`${$t('/')}?lang=${$store.state.locale}`"> -->
            <el-page-header @back="goBack" title="" :content="`Bet History`">
            </el-page-header>
            <!-- </nuxt-link> -->
        </el-header>

        <div class="bet_detail_main">

            <div class="collapse_card1" style="color:#121212;">
                <el-row>
                    <span class="date" style="color:#121212;">18-Jun-2020</span>
                    <span class="time1" style="color:#121212;">3:00PM</span>
                </el-row>

                <div class="goal_inner">
                    <div class=" team_vs">
                        <div class="vs_inner1 team_01">
                            <span class="hot" style="color:#121212;margin-left:-10px"><img src="~static/images/hot.png" width="20"> Hot</span>
                            <br>
                            <img src="~static/images/chelsea.png" class="vs_team_img">
                            <br>
                            <span class="vs_teamname" style="color:#121212;">Team A</span>
                        </div>
                        <span class="vs_text" style="color:#121212; font-size:25px;font-weight:501">
                              2 - 0<br><span class="gb_background">Goal 20-20</span></span>
                        <div class="vs_inner1 team_02">
                            <img src="~static/images/manchester.png" class="vs_team_img">
                            <br>
                            <span class="vs_teamname" style="color:#121212;">Team B</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    </div>
</template>

<style>
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
</style>

<script>
import axios from "axios";
export default {
    mounted() {


    },
    data() {
        return {
            historyByDate: '',
            football_information: '',
        };
    },

    methods: {
        goBack() {
            this.$router.push(`/?lang=${this.$store.state.locale}`);
        },

    },
    created() {
        let token = localStorage.getItem('token');
        this.$axios.get("/v2/v1/football/history", {
                headers: {
                    "Authorization": "Bearer " + token
                }
            })
            .then(response => {
                console.log(response.data.data),
                    this.historyByDate = response.data.data
                // Array.from(this.historyByDate).forEach(aa =>
                //   console.log("hi",football_info.football_info),
                //   this.football_information=football_info.football_info,
                // );
                // this.historyByDate.forEach(function(key, value){
                // console.log( key),
                // this.football_information = key.date;
                // })
            })
    }
};
</script>
