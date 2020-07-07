<template>
    <div class="main_container notification">
        <el-header>
            <!-- <nuxt-link  :to="`${$t('/')}?lang=${$store.state.locale}`"> -->
            <el-page-header @back="goBack" title="" :content="`Bet History`">
            </el-page-header>
            <!-- </nuxt-link> -->
        </el-header>
        <div class="noti_main">
            <div style="margin-top:10px;" v-for="(footballInfo, f) in historyByDate" :key="f" >

            <nuxt-link :to="`${$t('/football/betHistoryDetail')}?lang=${$store.state.locale}`">
                Date
                <div class="amount_card" v-for="(footballInfos , d) in footballInfo.football_info" :key="d">

                    <el-card class="box-card">

                        <div slot="header" class="clearfix" style="height:60px;">
                            <span class="con">Body <br /><span class="team_name_text">Selected Team : <span>{{footballInfos.amount}}</span></span>
                            </span>
                            <p style="float: right; padding: 3px 0;font-size:20px; transform: translateY(-20px);" type="text">
                               {{footballInfos.amount}} KS
                            </p>
                        </div>
                        <div class="text item">

                            <div class="match">
                                <div class="teaminner_01">
                                    <p class="t_name team_name_text" style="font-size:14px;">Team A</p>
                                    <img src="~static/images/chelsea.png" alt="logo" class="team_logo team_02" style="width:40px!important; height:40px;" />
                                    <p class="result team_name_text">
                                        <span style="font-size:17px; color:black;">2&nbsp;-&nbsp;0</span><br><span>3:00PM</span>
                                    </p>
                                    <img src="~static/images/chelsea.png" alt="logo" class="team_logo team_02" style="width:40px!important; height:40px;" />
                                    <p class="t_name team_name_text" style="font-size:14px;"> Team B</p>
                                </div>
                            </div>

                        </div>
                    </el-card>
                </div>
            </nuxt-link>
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
             football_information:'',
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
