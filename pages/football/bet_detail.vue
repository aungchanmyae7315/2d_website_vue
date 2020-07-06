<template>
    <div class="main_container notification" style="height:100vh">
        <div class="bet_detail_main">
            <div class="first_div">
                <h5 class="body_text">
                    Body
                </h5>
                <img src="~static/images/order.png" alt="" style="margin-top:10px;" />

                <h3 style="font-weight:600"> Congratulaions! </h3>
                <h4>+50000Ks</h4>
            </div>
            <div class="line"></div>

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
export default {

}
</script>

<style scoped>

</style>
