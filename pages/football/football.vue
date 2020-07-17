<template>
    <div class="wholePage">
        <div class="testing_first">
            <div class="football_header">
                <a href="/">
                    <div class="backTo" @back="goBack"><i class="el-icon-arrow-left"></i></div>
                </a>
                <div class="football_header_logo"> <img src="~static/images/footballLogo.png" style="width:170px;" alt="logo" /></div>
                <div class="football_refresh" @click="HomeRefresh" v-loading.fullscreen.lock="fullscreenLoading">
                    <img src="~static/icons_header/dimond_t_icon.png" alt="logo" style="width:30px;" />
                </div>
            </div>
            <div class="profile_football" v-if="!$store.state.isLoggedIn">
                <div class="demo-type">
                    <nuxt-link :to="`${$t('/login')}?lang=${$store.state.locale}`">
                        <el-avatar :size="60"><img src="~static/images/icons/me_img.png" alt=""></el-avatar>
                        <span class="avatar_text_logout">{{$t('Please Login first')}}</span>
                    </nuxt-link>
                </div>
            </div>
            <div class="profile_football" v-else>
                <div class="demo-type" style="padding:0px !important;">
                    <el-row>
                        <el-col :span="21">
                            <nuxt-link :to="`${$t('/edit_profile_index')}?lang=${$store.state.locale}`">
                                <el-avatar :size="60" v-if="this.profile.profile == null">
                                    <img src="~static/images/icons/me_img.png" alt="">
                                </el-avatar>
                                <el-avatar :size="60" v-else>
                                    <img :src="this.profile.profile" alt="">
                                </el-avatar>
                            </nuxt-link>
                            <div class="avatar_text">
                                <ul>
                                    <nuxt-link :to="`${$t('/edit_profile_index')}?lang=${$store.state.locale}`">
                                        <li style="color:#fff;line-height:16px">
                                            <span>{{this.profile.name}}</span><br>
                                            <span>{{this.profile.phone}}</span>
                                        </li>
                                    </nuxt-link>
                                    <nuxt-link :to="`${$t('/wallet')}?lang=${$store.state.locale}`">
                                        <li style="line-height:13px" class="amount_mmk"><span>{{$t('you_balance')}} : </span>{{this.thousands_separators(myWallet)}} {{$t('kyat')}}</li>
                                    </nuxt-link>
                                </ul>
                            </div>
                        </el-col>
                        <el-col :span="3">
                        </el-col>
                    </el-row>
                    <div class="history_chat">

                        <div class="forHistory">
                            <nuxt-link :to="`${$t('/football/betHistory')}?lang=${$store.state.locale}`">
                                <img src="~static/images/history.svg" alt="logo" width="27px;">
                            </nuxt-link>
                        </div>

                        <div class="forchat">
                            <img src="~static/images/livechat.svg" alt="logo" width="30px;">
                        </div>
                    </div>
                </div>
            </div>

            <div class="profile_football" style="margin-top:10px;">
                <carousel :autoplay="true" :nav="false" v-if="loaded" :items="1">
                    <div class="item" v-for="(img_slide, i) in slider_images" :key="i">
                        <a :href="img_slide.link" target="_blank">
                            <el-image :src="img_slide.slider_image" value="img_slide" style="width:100%;height:160px;border-radius:22px;">
                                <div slot="placeholder" class="image-slot">
                                    Loading<span class="dot">...</span>
                                </div>
                            </el-image>
                        </a>
                    </div>
                </carousel>
                <h3 class="run_bar">
                    <div class="scroll-left">
                        <p>
                            <img src="~static/images/slide_inner_icon.png" alt="" class="slide_inner_icon" /> {{ this.slider_text.text }}
                        </p>
                    </div>

                </h3>
            </div>
            <!-- <scroll-fixed-header :fixed.sync="fixed" :threshold="350">
                <div class="carousel2">
                    <carousel :autoplay="false" :nav="true" :items=3>

                        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                            <el-menu-item index="1"><span @click="toggle(5)">{{this.yesterday2Date}}</span></el-menu-item>
                            <el-menu-item index="2"><span @click="toggle(6)">{{this.yesterday1Date}}</span></el-menu-item>
                            <el-menu-item index="3"><span @click="toggle(7)">Yesterday</span></el-menu-item>
                            <el-menu-item index="4"><span @click="toggle(1)">Today</span></el-menu-item>
                            <el-menu-item index="5"><span @click="toggle(2)"> Tomorrow</span></el-menu-item>
                            <el-menu-item index="6"><span @click="toggle(3)">{{this.tomorrow1Date}}</span></el-menu-item>
                            <el-menu-item index="7"><span @click="toggle(4)">{{this.tomorrow2Date}}</span></el-menu-item>
                        </el-menu>
                        <div></div>
                        <div></div>
                        <div></div>
                    </carousel>
                </div>
            </scroll-fixed-header> -->
        </div>

           <scroll-fixed-header :fixed.sync="fixed" :threshold="350">
             <div class=""  style=" background-image: linear-gradient(270deg, #14612D, #145B2B);height:38px; transform:translateY(-30px)">
                <div class="carousel2">
                    <carousel :autoplay="false" :nav="true" :items=3>

                        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                            <el-menu-item index="1"><span @click="toggle(5)">{{this.yesterday2Date}}</span></el-menu-item>
                            <el-menu-item index="2"><span @click="toggle(6)">{{this.yesterday1Date}}</span></el-menu-item>
                            <el-menu-item index="3"><span @click="toggle(7)">Yesterday</span></el-menu-item>
                            <el-menu-item index="4"><span @click="toggle(1)">Today</span></el-menu-item>
                            <el-menu-item index="5"><span @click="toggle(2)"> Tomorrow</span></el-menu-item>
                            <el-menu-item index="6"><span @click="toggle(3)">{{this.tomorrow1Date}}</span></el-menu-item>
                            <el-menu-item index="7"><span @click="toggle(4)">{{this.tomorrow2Date}}</span></el-menu-item>
                        </el-menu>
                        <div></div>
                        <div></div>
                        <div></div>
                    </carousel>
                </div>
                  </div>
            </scroll-fixed-header>


        <div class="football_matchs">

            <div class="f-el-tabls" id="today" v-show="currentTab === 1" >

                <el-row>
                    <el-tabs type="card" @tab-click="handleClick">
                        <el-tab-pane label="All">

                            <div class="collapse_card" v-for="(football_info, f) in todayfootball" :key="f">
                                <el-collapse v-model="activeNames" @change="handleChange">
                                    <el-collapse-item :title="football_info.league.name" :name="football_info.id">
                                        <div @click="cur_id(football_info.id)">
                                            <!-- <nuxt-link :to="`${$t('/football/football_bet')}?lang=${$store.state.locale}`" > -->
                                            <el-row>
                                                <el-col>
                                                    <div class="teaminner_01">
                                                        <p class="t_name">{{football_info.home_team.name}}</p>
                                                        <img :src="football_info.home_team.logo" alt="aa" class="team_logo team_1">
                                                        <p class="t_name">{{football_info.play_at}}</p>
                                                        <img :src="football_info.away_team.logo" alt="" class="team_logo team_02" />
                                                        <p class="t_name">{{football_info.away_team.name}}</p>
                                                    </div>
                                                    <div class="teaminner_02">
                                                        <div class="goal">
                                                            <span>Goal+</span>
                                                            <span>{{football_info.goal_price}}</span>
                                                        </div>
                                                        <div class="body">
                                                            <span>Body</span>
                                                            <span>{{football_info.body_price}}</span>
                                                        </div>
                                                    </div>


                                                    <div class="match" v-if="football_info.status == 1">
                                                        <div class="line"></div>
                                                        <div class="teaminner_01">
                                                            <p class="t_name">{{football_info.home_team.name}} </p>
                                                            <img :src="football_info.home_team.logo" alt="" class="team_logo team_02" />
                                                            <p class="result">
                                                                {{football_info.home_goal}}&nbsp;-&nbsp;{{football_info.away_goal}}<br><span>{{football_info.play_at}}</span>
                                                            </p>
                                                            <img :src="football_info.away_team.logo" alt="" class="team_logo team_02" />
                                                            <p class="t_name">{{football_info.away_team.name}}</p>
                                                        </div>
                                                        <div class="completed">
                                                            Completed
                                                        </div>
                                                    </div>
                                                </el-col>
                                            </el-row>
                                            <!-- </nuxt-link> -->
                                        </div>
                                    </el-collapse-item>
                                </el-collapse>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="Completed">
                            <div class="collapse_card" v-for="(complete_info, f) in todayComplete" :key="f">
                                <el-collapse v-model="activeNames" @change="handleChange">
                                    <el-collapse-item :title="complete_info.league.name" :name="complete_info.id">
                                        <el-row>
                                            <el-col>
                                                <div class="match">
                                                    <div class="teaminner_01">
                                                        <p class="t_name">{{complete_info.home_team.name}}</p>
                                                        <img :src="complete_info.home_team.logo" alt="" class="team_logo team_02" />
                                                        <p class="result">
                                                            {{complete_info.home_goal}}&nbsp;-&nbsp;{{complete_info.away_goal}}<br><span>{{complete_info.play_at}}</span>
                                                        </p>
                                                        <img :src="complete_info.away_team.logo" alt="" class="team_logo team_02" />
                                                        <p class="t_name">{{complete_info.away_team.name}}</p>
                                                    </div>
                                                    <div class="completed">
                                                        Completed Match
                                                    </div>
                                                </div>
                                            </el-col>
                                        </el-row>
                                    </el-collapse-item>
                                </el-collapse>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="Upcoming">
                            <div class="collapse_card" v-for="(upcoming_info, f) in todayUpcoming" :key="f">
                                <el-collapse v-model="activeNames" @change="handleChange">
                                    <el-collapse-item :title="upcoming_info.league.name" :name="upcoming_info.id">
                                        <el-row>
                                            <el-col>
                                                <div class="teaminner_01">
                                                    <p class="t_name">{{upcoming_info.home_team.name}}</p>
                                                    <img :src="upcoming_info.home_team.logo" alt="" class="team_logo team_1" />
                                                    <p class="t_name">{{upcoming_info.play_at}}</p>
                                                    <img :src="upcoming_info.away_team.logo" alt="" class="team_logo team_02" />
                                                    <p class="t_name">{{upcoming_info.away_team.name}}</p>
                                                </div>
                                                <div class="teaminner_02">
                                                    <div class="goal">
                                                        <span>Goal+</span>
                                                        <span>{{upcoming_info.goal_price}}</span>
                                                    </div>
                                                    <div class="body">
                                                        <span>Body</span>
                                                        <span>{{upcoming_info.body_price}}</span>
                                                    </div>
                                                </div>
                                            </el-col>
                                        </el-row>
                                    </el-collapse-item>
                                </el-collapse>
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                </el-row>
            </div>

            <div v-show="currentTab === 2">
                <div class="collapse_card" v-for="(tomorrow_info, f) in tomorrowMatch" :key="f">
                    <el-collapse v-model="activeNames" @change="handleChange">
                        <el-collapse-item :title="tomorrow_info.league.name" :name="tomorrow_info.id">
                            <div @click="cur_id(tomorrow_info.id)">
                                <el-row>
                                    <el-col>
                                        <div class="teaminner_01">
                                            <p class="t_name">{{tomorrow_info.home_team.name}}</p>
                                            <img :src="tomorrow_info.home_team.logo" alt="" class="team_logo team_1" />
                                            <p class="t_name">{{tomorrow_info.play_at}}</p>
                                            <img :src="tomorrow_info.away_team.logo" alt="" class="team_logo team_02" />
                                            <p class="t_name">{{tomorrow_info.away_team.name}}</p>
                                        </div>
                                        <div class="teaminner_02">
                                            <div class="goal">
                                                <span>Goal+</span>
                                                <span>{{tomorrow_info.goal_price}}</span>
                                            </div>
                                            <div class="body">
                                                <span>Body</span>
                                                <span>{{tomorrow_info.body_price}}</span>
                                            </div>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                        </el-collapse-item>
                    </el-collapse>
                </div>
            </div>

            <div v-show="currentTab === 3">
                <div class="collapse_card" v-for="(tomorrow1_info, f) in tomorrow1Match" :key="f">
                    <el-collapse v-model="activeNames" @change="handleChange" @click="cur_id(tomorrow1_info.id)">
                        <el-collapse-item :title="tomorrow1_info.league.name" :name="tomorrow1_info.id">
                            <el-row>
                                <el-col>
                                    <div class="match">
                                        <div class="teaminner_01">
                                            <p class="t_name">{{tomorrow1_info.home_team.name}}</p>
                                            <img :src="tomorrow1_info.home_team.logo" alt="" class="team_logo team_02" />
                                            <p class="result">
                                                {{tomorrow1_info.home_goal}}&nbsp;-&nbsp;{{tomorrow1_info.away_goal}}<br><span>{{tomorrow1_info.play_at}}</span>
                                            </p>
                                            <img :src="tomorrow1_info.away_team.logo" alt="" class="team_logo team_02" />
                                            <p class="t_name">{{tomorrow1_info.away_team.name}}</p>
                                        </div>
                                        <div class="completed">
                                            Completed Match
                                        </div>
                                    </div>
                                </el-col>
                            </el-row>
                        </el-collapse-item>
                    </el-collapse>
                </div>
            </div>

            <div v-show="currentTab === 4">
                <div class="collapse_card" v-for="(tomorrow2_info, f) in tomorrow2Match" :key="f">
                    <el-collapse v-model="activeNames" @change="handleChange" @click="cur_id(tomorrow2_info.id)">
                        <el-collapse-item :title="tomorrow2_info.league.name" :name="tomorrow2_info.id">
                            <el-row>
                                <el-col>
                                    <div class="teaminner_01">
                                        <p class="t_name">{{tomorrow2_info.home_team.name}}</p>
                                        <img :src="tomorrow2_info.home_team.logo" alt="" class="team_logo team_1" />
                                        <p class="t_name">{{tomorrow2_info.play_at}}</p>
                                        <img :src="tomorrow2_info.away_team.logo" alt="" class="team_logo team_02" />
                                        <p class="t_name">{{tomorrow2_info.away_team.name}}</p>
                                    </div>
                                    <div class="teaminner_02">
                                        <div class="goal">
                                            <span>Goal+</span>
                                            <span>{{tomorrow2_info.goal_price}}</span>
                                        </div>
                                        <div class="body">
                                            <span>Body</span>
                                            <span>{{tomorrow2_info.body_price}}</span>
                                        </div>
                                    </div>
                                </el-col>
                            </el-row>
                        </el-collapse-item>
                    </el-collapse>
                </div>
            </div>

            <div v-show="currentTab === 5">
                <div class="collapse_card" v-for="(yesterday2_info, f) in yesterday2Match" :key="f">
                    <el-collapse v-model="activeNames" @change="handleChange">
                        <el-collapse-item :title="yesterday2_info.league.name" :name="yesterday2_info.id">
                            <el-row>
                                <el-col>
                                    <div class="match">
                                        <div class="teaminner_01">
                                            <p class="t_name">{{yesterday2_info.home_team.name}}</p>
                                            <img :src="yesterday2_info.home_team.logo" alt="" class="team_logo team_02" />
                                            <p class="result">
                                                {{yesterday2_info.home_goal}}&nbsp;-&nbsp;{{yesterday2_info.away_goal}}<br><span>{{yesterday2_info.play_at}}</span>
                                            </p>
                                            <img :src="yesterday2_info.away_team.logo" alt="" class="team_logo team_02" />
                                            <p class="t_name">{{yesterday2_info.away_team.name}}</p>
                                        </div>
                                        <div class="completed">
                                            Completed Match
                                        </div>
                                    </div>
                                </el-col>
                            </el-row>
                        </el-collapse-item>
                    </el-collapse>
                </div>
            </div>

            <div v-show="currentTab === 6">
                <div class="collapse_card" v-for="(yesterday1_info, f) in yesterday1Match" :key="f">
                    <el-collapse v-model="activeNames" @change="handleChange">
                        <el-collapse-item :title="yesterday1_info.league.name" :name="yesterday1_info.id">
                            <el-row>
                                <el-col>
                                    <div class="match">
                                        <div class="teaminner_01">
                                            <p class="t_name">{{yesterday1_info.home_team.name}}</p>
                                            <img :src="yesterday1_info.home_team.logo" alt="" class="team_logo team_02" />
                                            <p class="result">
                                                {{yesterday1_info.home_goal}}&nbsp;-&nbsp;{{yesterday1_info.away_goal}}<br><span>{{yesterday1_info.play_at}}</span>
                                            </p>
                                            <img :src="yesterday1_info.away_team.logo" alt="" class="team_logo team_02" />
                                            <p class="t_name">{{yesterday1_info.away_team.name}}</p>
                                        </div>
                                        <div class="completed">
                                            Completed Match
                                        </div>
                                    </div>
                                </el-col>
                            </el-row>
                        </el-collapse-item>
                    </el-collapse>
                </div>
            </div>

            <div v-show="currentTab === 7">
                <div class="collapse_card" v-for="(yesterday_info, f) in yesterdayMatch" :key="f">
                    <el-collapse v-model="activeNames" @change="handleChange">
                        <el-collapse-item :title="yesterday_info.league.name" :name="yesterday_info.id">
                            <el-row>
                                <el-col>
                                    <div class="match">
                                        <div class="teaminner_01">
                                            <p class="t_name">{{yesterday_info.home_team.name}}</p>
                                            <img :src="yesterday_info.home_team.logo" alt="" class="team_logo team_02" />
                                            <p class="result">
                                                {{yesterday_info.home_goal}}&nbsp;-&nbsp;{{yesterday_info.away_goal}}<br><span>{{yesterday_info.play_at}}</span>
                                            </p>
                                            <img :src="yesterday_info.away_team.logo" alt="" class="team_logo team_02" />
                                            <p class="t_name">{{yesterday_info.away_team.name}}</p>
                                        </div>
                                        <div class="completed">
                                            Completed Match
                                        </div>
                                    </div>
                                </el-col>
                            </el-row>
                        </el-collapse-item>
                    </el-collapse>
                </div>
            </div>

        </div>

        <div class="mown_btn">

            <el-button>Mown</el-button>


        </div>

    </div>
</template>

<script>
import Vue from 'vue'
import ScrollFixedHeader from 'vuejs-scroll-fixed-header'
Vue.use(ScrollFixedHeader)
import axios from 'axios'
import carousel from 'vue-owl-carousel'

export default {
    components: { carousel },
    getters: {},
    mutations: {},
    actions: {},
    scrollToTop: true,

    mounted() {


        var self = this;
        if (this.$store.state.sliderImage.length > 0) {
            self.slider_images = this.$store.state.sliderImage;
            if (this.slider_images !== null) {
                this.loaded = true;
            }
        } else {
            // setTimeout(function(){
            self.$axios.get('/v2/v1/slider_image?name=2D')
                .then(response => {
                    if (self.slider_images !== null) {
                        this.loaded = true;
                    }

                    self.slider_images = response.data.data
                    // self.$store.commit('setSliderImage', response.data.data);
                })

            // }, 2000);
            self.$axios.get('/v2/v1/slider_text')
                .then(response => {

                    self.slider_text = response.data.data[0];
                })

        }

        var m = window.location.href.match(/device_id=([^&]+)/i);
        var isSeinluckyApp = navigator.userAgent.match(/seinlucky-app-2019/i);
        if (m != null && isSeinluckyApp) {
            var deviceId = m[1];
            localStorage.setItem("deviceId", deviceId);
        }
        //console.dir(this.$store.state.webAppVersion.length);
        if (this.$store.state.webAppVersion.length == 0) {
            this.$axios.get(`/web-app-version`)
                .then(response => {
                    this.$store.commit('setWebAppVersion', response.data.version);
                });
        }


        // this.itvKweeLiveData();
        //this.getDataresult();
        this.updateIsLoggedIn();

        let lang = localStorage.getItem('locale');
        this.$store.commit('SET_LANG', lang);
        // this.$axios.get(`/v2/v1/add_language?language=${lang}`)
        //   .then(response => {


        //   });
    },

    data() {

        return {
            fullscreenLoading: false,
            serverDate: '',
            last_date: '',
            close_day: '',
            dialogVisible: false,
            isActive: true,
            hasError: false,
            currentTime: '',
            currentDate: null,
            morningTime: null,

            slider_images: '',
            // activeIndex: '1',
            profile: '',
            slider_text: '',
            serverCurTimeItvId: 0,
            myWallet: '',
            blockUser: '',
            loaded: '',
            activeNames: [1, 2, 3, 4, 5, 6, 7, 9, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
            activeName: "first",
            todayfootball: "",
            football_info: "",
            resultDate: "",
            resultStatus: "",
            todayComplete: "",
            todayUpcoming: "",
            activeIndex: '4',

            yesterdayMatch: '',
            yesterday1Match: '',
            yesterday2Match: '',
            tomorrowMatch: '',
            tomorrow1Match: '',
            tomorrow2Match: '',

            tomorrow1Date: '',
            tomorrow2Date: '',
            yesterday1Date: '',
            yesterday2Date: '',

            currentTab: 1,
            fixed: false

            //   activeIndex2: '1',
        }

    },
    methods: {
        toggle: function(tab) {
            this.currentTab = tab
        },
        HomeRefresh() {
            this.fullscreenLoading = true;
            setTimeout(() => {

                this.fullscreenLoading = false;
                location.reload();
            }, 1000);
        },
        goBack() {
            this.$router.push(`/?lang=${this.$store.state.locale}`);
        },
        thousands_separators(num) {
            var num_parts = num.toString().split(".");
            num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return num_parts.join(".");
        },

        isMobile: function() {
            var check = false;
            (function(a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
            return check;
        },
        updateCurrentTime() {
            if (this.currentTime > this.time_12_00 && this.currentTime < this.time_01_00) {
                this.isActive = false
                this.breakTime = '12:01 PM';

                this.getDataresult();
            } else if (this.currentTime > this.time_04_30) {

                this.isActive = false
                this.breakTime = '4:30 PM';
                //  this.getDataKwee();
            } else if (this.currentTime < this.morningTime_9_30) {

                this.isActive = false
                this.breakTime = '4:30 PM';
                //  this.getDataresult();
            } else {


                this.isActive = true
                this.breakTime = moment().format('h:mm A');
            }
            // this.currentTime = moment().format('HH:mm:ss');
            this.currentDate = moment().format("YYYY D MMMM  dddd")

        },
        ServerCurrentTime() {
            if (this.currentTime > this.time_12_00 && this.currentTime < this.time_01_00) {
                this.isActive = false

                this.breakTime = '12:01 PM';

            } else if (this.currentTime > this.time_04_30) {
                // this.isActive = false
                // alert('lll')
                if (this.close_day == 1) {

                    this.isActive = false
                } else {

                    this.isActive = true
                }
                this.isActive = false
                this.breakTime = '4:30 PM';

            } else if (this.currentTime < this.morningTime_9_30) {

                this.isActive = false
                this.breakTime = '4:30 PM';

            } else {

                if (this.close_day == 1) {

                    this.isActive = false
                } else {

                    this.isActive = true
                }

                this.breakTime = moment().format('h:mm A');
            }
            // this.currentTime = moment().format('HH:mm:ss');
            this.currentDate = moment().format("YYYY D MMMM  dddd")

        },
        updateIsLoggedIn() {
            this.$store.commit('updateIsLoggedIn', this.hasUserInfo());
        },
        hasUserInfo() {
            return Boolean(localStorage.getItem('userInfo'));
        },
        cur_id(data) {
            let token = localStorage.getItem("token");
            if (token) {
                this.$store.commit('football_detail_id', data);
                this.$router.push(`/football/football_bet?` + data + `lang=${this.$store.state.locale}`);
            } else {
                this.$router.push(`/login?` + `lang=${this.$store.state.locale}`);
            }

        },
    },
    created() {

        this.currentDate = moment().format("YYYY D MMMM  dddd")
        // this.currentTime = moment().format('HH:mm:ss ');
        this.breakTime = moment().format('h:mm:ss a')
        this.serverCurTimeItvId = setInterval(() => this.ServerCurrentTime(), 1 * 1000);



        let token = localStorage.getItem('token');
        if (token) {
            this.$axios.get("/v2/v1/profile", {
                    headers: {
                        "Authorization": "Bearer " + token
                    }
                })
                .then(response => {
                    this.blockUser = response.data.data.trash
                    //console.dir(response.data);
                    this.profile = response.data.data
                    this.myWallet = this.profile.wallet
                    this.currentTime = response.data.data.time;
                    //console.dir(response.data.data.time);
                    if (this.blockUser == 0) {} else {
                        this.$store.commit('logOut');
                        this.$router.push(`/home?lang=${this.$store.state.locale}`);
                    }



                })
        }

        this.$axios.get('/v2/v1/server_time')
            .then(response => {

                this.currentTime = response.data.time
                this.serverDate = response.data.date
            })

        this.$axios.get("/v2/v1/football/today/match")
            .then(response => {
                console.log(response.data);
                this.todayfootball = response.data.data;
                this.resultDate = response.data.data.result_date;
                this.resultStatus = response.data.data.status;
                console.log(this.resultStatus);
            })

        //for Completed Match

        this.$axios.get("/v2/v1/football/today/completed")
            .then(response => {
                console.log(response.data);
                this.todayComplete = response.data.data;
                console.log(this.todayComplete);
            })
        //for upcoming Match
        this.$axios.get("/v2/v1/football/today/upcoming")
            .then(response => {
                console.log(response.data);
                this.todayUpcoming = response.data.data;
            })

        this.$axios.get("/v2/v1/football/today/completed")
            .then(response => {
                console.log(response.data);
                this.todayComplete = response.data.data;
                console.log(this.todayComplete);
            })
        //for yesterday match
        this.$axios.get("/v2/v1/football/yesterday/match")
            .then(response => {
                console.log("yesterday", response.data.data);
                this.yesterdayMatch = response.data.data;
            })
        this.$axios.get("/v2/v1/football/one_yesterday/match")
            .then(response => {
                console.log("yesterday1", response.data);
                this.yesterday1Match = response.data.data;
                this.yesterday1Date = response.data.date;
            })

        this.$axios.get("/v2/v1/football/two_yesterday/match")
            .then(response => {
                console.log("yesterday2", response.data);
                this.yesterday2Match = response.data.data;
                this.yesterday2Date = response.data.date;
            })

        this.$axios.get("/v2/v1/football/tomorrow/match")
            .then(response => {
                console.log("tomorrow", response.data);
                this.tomorrowMatch = response.data.data;
            })

        this.$axios.get("/v2/v1/football/one_tomorrow/match")
            .then(response => {
                console.log("tomorrow1", response.data.date);
                this.tomorrow1Match = response.data.data;
                this.tomorrow1Date = response.data.date;

            })

        this.$axios.get("/v2/v1/football/two_tomorrow/match")
            .then(response => {
                console.log("tomorrow2", response.data);
                this.tomorrow2Match = response.data.data;
                this.tomorrow2Date = response.data.date;

            })

            .catch(error => {
                console.log(response.error);
            });
    }
}
</script>

<style scoped>
.owl-theme .owl-nav.disabled+.owl-dots {
    position: absolute;
    right: 0;
    left: 0;
    top: 97px;
}

.owl-carousel .owl-dots.disabled {
    display: block !important;
    border: 0;
}

.main_page .owl-carousel .owl-stage-outer {
    padding: 0 !important;
}

.main_page .el-image {
    border-radius: 24px !important;
}

@keyframes ldio-ct1tsjzqdg5-o {
    0% {
        opacity: 1;
        transform: translate(0 0);
    }
    49.99% {
        opacity: 1;
        transform: translate(40px, 0);
    }
    50% {
        opacity: 0;
        transform: translate(40px, 0);
    }
    100% {
        opacity: 0;
        transform: translate(0, 0);
    }
}

@keyframes ldio-ct1tsjzqdg5 {
    0% {
        transform: translate(0, 0);
    }
    50% {
        transform: translate(40px, 0);
    }
    100% {
        transform: translate(0, 0);
    }
}

.loadingio-spinner-dual-ball-ty27h70p24 {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    overflow: hidden;
}

.loadingio-spinner-card_one_loading {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 22px;
    right: 32px;
    overflow: hidden;
}

.ldio-ct1tsjzqdg5 div {
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    top: 60px;
    left: 20px;
}

.ldio-ct1tsjzqdg5 div:nth-child(1) {
    background: #93dbe9;
    animation: ldio-ct1tsjzqdg5 1s linear infinite;
    animation-delay: -0.5s;
    width: 30px;
    height: 30px;
}

.ldio-ct1tsjzqdg5 div:nth-child(2) {
    background: #689cc5;
    animation: ldio-ct1tsjzqdg5 1s linear infinite;
    animation-delay: 0s;
    width: 30px;
    height: 30px;
}

.ldio-ct1tsjzqdg5 div:nth-child(3) {
    background: #93dbe9;
    animation: ldio-ct1tsjzqdg5-o 1s linear infinite;
    animation-delay: -0.5s;
    width: 30px;
    height: 30px;
}

.ldio-ct1tsjzqdg5 {
    width: 100%;
    height: 100%;
    position: relative;
    left: 45px;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0;
    /* see note above */
}

.ldio-ct1tsjzqdg5 div {
    box-sizing: content-box;
}

/* generated by https://loading.io/ */

.card_one_loading div {
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    top: 60px;
    left: 20px;
}

.card_one_loading div:nth-child(1) {
    background: #93dbe9;
    animation: ldio-ct1tsjzqdg5 1s linear infinite;
    animation-delay: -0.5s;
    width: 15px;
    height: 15px;
}

.card_one_loading div:nth-child(2) {
    background: #689cc5;
    animation: ldio-ct1tsjzqdg5 1s linear infinite;
    animation-delay: 0s;
    width: 15px;
    height: 15px;
}

.card_one_loading div:nth-child(3) {
    background: #93dbe9;
    animation: ldio-ct1tsjzqdg5-o 1s linear infinite;
    animation-delay: -0.5s;
    width: 15px;
    height: 15px;
}

.card_one_loading {
    width: 40px;
    height: 40px;
    position: relative;
    left: 0;
    bottom: 55px;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0;
    /* see note above */
}

.card_one_loading div {
    box-sizing: content-box;
}

.el-carousel {
    border-radius: 22px;
    -webkit-border-radius: 22px;
    -moz-border-radius: 22px;
    -webkit-box-shadow: -1px 1px 16px -4px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -1px 1px 16px -4px rgba(0, 0, 0, 0.75);
    box-shadow: -1px 1px 16px -4px rgba(0, 0, 0, 0.75);
}

.main_page {
    margin: 0 auto;
}

.el-header {
    background-color: #14612d;
    color: #333;
    /* text-align: center; */
    padding: 10px 0;
    z-index: 5;
}

.el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 200px;
}

body>.el-container {
    margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
    line-height: 320px;
}

/* slider text css */

/* CSS Document */

.scroll-left {
    overflow: hidden;
    height: 31px;
    position: relative;
    width: auto;
}

.scroll-left p {
    position: absolute;
    white-space: nowrap;
    height: 100%;
    margin: 0;
    line-height: 31px;
    text-align: left;
    /* Apply animation to this element */
    -moz-animation: scroll-left 10s linear infinite;
    -webkit-animation: scroll-left 10s linear infinite;
    animation: scroll-left 10s linear infinite;
}

/* change language css */

.main_page .lang {
    text-align: center;
    margin: 0 auto;
}

.main_page .el-dialog {
    border-radius: 21px !important;
}

.lang .el-dropdown {
    padding: 27px;
    -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.main_page .lang .el-dropdown-menu__item {
    margin: 20px auto;
    background: #158220;
    color: #fff;
    border-radius: 21px;
}

.lang .el-dropdown-link {
    font-size: 18px;
    font-weight: bold;
}

.language_type .el-dropdown-menu__item:not(.is-disabled):hover {
    background: #158220;
    color: #fff;
    border-radius: 21px;
}

.lang .el-button.is-round {
    width: 100%;
    position: absolute;
    right: 0;
    left: 0;
    margin: 20px;
    bottom: 0;
}

.language_type {
    padding: 20px;
}

.language_type .el-header {
    background-color: #fff;
}

.language_type ul {
    padding: 0;
    margin: 150px auto;
    list-style: none;
}

.language_type ul li {
    max-width: 480px;
    width: 50%;
    padding: 10px;
    text-align: center;
    border-radius: 23px;
    margin: 20px auto;
    color: #000;
    text-transform: capitalize;
}

.language_type ul li a {
    text-decoration: none;
}

.language_type .active {
    background: #158220;
    color: #fff;
    display: block;
    font-weight: bold;
}

.el-page-header__left {
    margin: 0;
}

.language_type .el-page-header {
    line-height: 43px;
    color: #000;
}

.language_type .el-page-header__content {
    color: #000;
    font-weight: bold;
}

.main_page .el-dialog {
    max-width: 480px;
    width: 90%;
}

.main_page .el-dialog__wrapper {
    background: rgba(7, 14, 7, 0.8);
}

/* change lang css end */

/* Move it (define the animation) */

@-moz-keyframes scroll-left {
    0% {
        -moz-transform: translateX(100%);
    }
    100% {
        -moz-transform: translateX(-100%);
    }
}

@-webkit-keyframes scroll-left {
    0% {
        -webkit-transform: translateX(100%);
    }
    100% {
        -webkit-transform: translateX(-100%);
    }
}

@keyframes scroll-left {
    0% {
        -moz-transform: translateX(100%);
        /* Browser bug fix */
        -webkit-transform: translateX(100%);
        /* Browser bug fix */
        transform: translateX(200px);
    }
    100% {
        -moz-transform: translateX(-100%);
        /* Browser bug fix */
        -webkit-transform: translateX(-100%);
        /* Browser bug fix */
        transform: translateX(-100%);
    }
}

.bg_fixed_header {
    background-color:#158220;
    color:#fff;
    font-weight: bold;
}
.twod_home {
    text-align: center;
    margin:0 auto;
    background-image:url(~static/images/main_bg.png);
    background-size:cover;
    background-attachment: fixed;
    max-width: 480px;
    width:100%;
    padding:0;

}
.is-fixed {
    background-color: #158220;
    color: #fff;
    font-weight: bold;
    height: 54px;
}
</style>
