<template>
  <div class="main_container notification">
    <el-header>
      <!-- <nuxt-link  :to="`${$t('/')}?lang=${$store.state.locale}`"> -->
      <el-page-header
        @back="goBack"
        title=""
        :content="`${$t('notification_title')}`"
      >
      </el-page-header>
      <!-- </nuxt-link> -->
    </el-header>
    <div class="noti_main">
       <nuxt-link
          :to="`${$t('/football/bet_detail')}?lang=${$store.state.locale}`"
        >
      <div class="amount_card">

          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span class="con"
                >Congratulations <br /><span class="team_name_text">body</span>
              </span>
              <p
                style="float: right; padding: 3px 0;font-size:20px;"
                type="text"
              >
                +50000Ks
              </p>
            </div>
            <div class="text item">
              <el-row>
                <el-col>
                  <div class="match">
                    <div class="teaminner_01">
                      <p class="t_name team_name_text">Team A</p>
                      <img
                        src="~static/images/hot.png"
                        alt="logo"
                        class="team_logo team_02"
                      />
                      <p class="result team_name_text">
                        2&nbsp;-&nbsp;0<br /><span>3:00PM</span>
                      </p>
                      <img
                        src="~static/images/hot.png"
                        alt="logo"
                        class="team_logo team_02"
                      />
                      <p class="t_name team_name_text">Team B</p>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-card>
    </div>
     </nuxt-link>
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
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      // setTimeout(() => this.$nuxt.$loading.finish(), 2000)
    });
  },
  data() {
    return {
      notification: ""
    };
  },

  methods: {
    goBack() {
      this.$router.push(`/?lang=${this.$store.state.locale}`);
    },
    cur_id(data) {
      this.$store.commit("noti_id", data);
      this.$router.push(`/withdraw_noti?lang=${this.$store.state.locale}`);
    }
  },
  created() {
    let token = localStorage.getItem("token");

    if (token) {
      this.$axios
        .get("/v2/v1/notification", {
          headers: {
            Authorization: "Bearer " + token
          }
        })
        .then(response => {
          this.notification = response.data.data;
          this.$nuxt.$loading.finish();
          var noti_id = this.notification.notification_id;
        });
    }
  }
};
</script>
