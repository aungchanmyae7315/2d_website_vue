<template>
    <div class="main_container notification">
        <el-header>
            <!-- <nuxt-link  :to="`${$t('/')}?lang=${$store.state.locale}`"> -->
            <el-page-header @back="goBack" title="" :content="`Bet History`">
            </el-page-header>
            <!-- </nuxt-link> -->
        </el-header>
        <div class="noti_main">
            <div style="margin-top:10px;" v-for="(footballInfo, f) in historyByDate" :key="f">
                   {{footballInfo.date}}
                <!-- <nuxt-link :to="`${$t('/football/betHistoryDetail')}?lang=${$store.state.locale}`"> -->

                    <div class="amount_card" v-for="(footballInfos , d) in footballInfo.football_info" :key="d" @click="bet_history_detail_id(footballInfos.id)">

                        <el-card class="box-card">

                            <div slot="header" class="clearfix" style="height:60px;">
                                <span v-if="footballInfos.type == 1">   <span class="con">Body <br /><span class="team_name_text">Selected Team : <span>{{footballInfos.bet_team.name}}</span></span>
                                </span>
                                </span>
                                <span v-else-if="footballInfos.type == 2">   <span class="con">Goal+ <br /><span class="team_name_text">
                                  <span v-if="footballInfos.goal_status == 1">Up</span>
                                  <span v-else-if="footballInfos.goal_status == 2">Down</span>
                                  </span>
                                </span>
                                </span>
                                <p style="float: right; padding: 3px 0;font-size:20px; transform: translateY(-20px);" type="text">
                                    {{footballInfos.amount}} KS
                                </p>
                            </div>
                            <div class="text item">

                                <div class="match">
                                    <div class="teaminner_01">

                                        <p class="t_name team_name_text" style="font-size:14px;">
                                          <!-- <input type="checkbox" checked> -->
                                          <span v-if="footballInfos.type == 1"><span v-if="footballInfos.bet_team.id == footballInfos.home_team.id"><el-checkbox v-model="checked"></el-checkbox></span></span>
                                          {{footballInfos.home_team.name}}</p>
                                        <img :src="footballInfos.home_team.logo" alt="logo" class="team_logo team_02" style="width:40px!important; height:40px;" />
                                        <p class="result team_name_text">
                                            <span style="font-size:17px; color:black;">{{footballInfos.home_goal}}&nbsp;-&nbsp;{{footballInfos.away_goal}}</span><br>
                                            <span>{{footballInfos.play_at}}</span>
                                        </p>
                                        <img :src="footballInfos.away_team.logo" alt="logo" class="team_logo team_02" style="width:40px!important; height:40px;" />
                                        <p class="t_name team_name_text" style="font-size:14px;">{{footballInfos.away_team.name}} &nbsp;<span v-if="footballInfos.type == 1"><span v-if="footballInfos.bet_team.id == footballInfos.away_team.id"> <el-checkbox v-model="checked"></el-checkbox></span></span></p>

                                    </div>
                                </div>

                            </div>
                        </el-card>
                    </div>
                <!-- </nuxt-link> -->
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
.match .el-checkbox__input.is-checked .el-checkbox__inner{
 background-color:#5AAF46;
 border-color:#5AAF46;
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
            checked: true,
        };
    },

    methods: {
        goBack() {
            this.$router.push(`/football/football?lang=${this.$store.state.locale}`);
        },

        bet_history_detail_id(data) {
            this.$store.commit('bet_history_detail_id', data);
            this.$router.push(`/football/betHistoryDetail?` + data + `lang=${this.$store.state.locale}`);
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
                console.log(response.data),
                    this.historyByDate = response.data.data;
            })
    }
};
</script>
