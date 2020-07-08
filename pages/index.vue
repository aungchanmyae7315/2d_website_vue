<template>
    <el-main class="main_page">
        <!-- <Online></Online> -->

        <div class="longText" id="hidingScrollBar">
            <div class="hideScrollBar">

                <div class="" v-if="!$store.state.isLoggedIn">

                    <div class="demo-type">
                        <nuxt-link :to="`${$t('/login')}?lang=${$store.state.locale}`">
                            <el-avatar :size="60"><img src="~static/images/icons/me_img.png" alt=""></el-avatar>
                            <span class="avatar_text_logout">{{$t('Please Login first')}}</span>
                        </nuxt-link>
                        <div class="change_lang_icon">
                            <!-- <nuxt-link :to="`${$t('result')}?lang=${$store.state.locale}`"> -->
                            <el-button type="text" @click="dialogVisible = true">
                                <span v-if="$store.state.locale == 'en'"> <img src="~static/images/english_icon.png" alt=""></span>
                                <span v-else-if="$store.state.locale == 'uni'"> <img src="~static/images/myanmar_icon.png" alt=""></span>
                                <span v-else-if="$store.state.locale == 'zh'"> <img src="~static/images/chinese_icon.png" alt=""></span>
                            </el-button>
                            <!-- </nuxt-link> -->
                        </div>
                        <el-dialog :visible.sync="dialogVisible" class="change_lang_modal" width="70%">

                            <div class="lang lang_icon">
                                <el-dropdown @command="changeLang" style="text-align:center">

                                    <el-dropdown-item round command='en'><img src="~static/images/english_icon.png" alt="">English</el-dropdown-item>
                                    <el-dropdown-item round command='uni'><img src="~static/images/myanmar_icon.png" alt="">မြန်မာ</el-dropdown-item>
                                    <!-- <el-dropdown-item  round command='zg'>ျမန္မာ ေဇာ္ဂ်ီ</el-dropdown-item> -->
                                    <el-dropdown-item round command='zh'><img src="~static/images/chinese_icon.png" alt="">中文</el-dropdown-item>


                                </el-dropdown>
                            </div>


                        </el-dialog>
                    </div>


                </div>
                <div v-else>

                    <div class="demo-type">


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
                            <!-- <el-col :span="3">
                        <Music></Music>

                      </el-col> -->
                            <el-col :span="3">
                                <div class="change_lang_icon">
                                    <!-- <nuxt-link :to="`${$t('result')}?lang=${$store.state.locale}`"> -->
                                    <el-button type="text" @click="dialogVisible = true">
                                        <span v-if="$store.state.locale == 'en'"> <img src="~static/images/english_icon.png" alt=""></span>
                                        <span v-else-if="$store.state.locale == 'uni'"> <img src="~static/images/myanmar_icon.png" alt=""></span>
                                        <span v-else-if="$store.state.locale == 'zh'"> <img src="~static/images/chinese_icon.png" alt=""></span>
                                    </el-button>
                                    <!-- </nuxt-link> -->
                                </div>
                            </el-col>
                        </el-row>


                        <el-dialog :visible.sync="dialogVisible" class="change_lang_modal" width="70%">

                            <div class="lang lang_icon">
                                <el-dropdown @command="changeLang" style="text-align:center">
                                    <!-- <span class="el-dropdown-link" style='cursor: pointer;'>
                                {{$t('Language')}}
                            </span> -->

                                    <el-dropdown-item round command='en'><img src="~static/images/english_icon.png" alt=""> English</el-dropdown-item>
                                    <el-dropdown-item round command='uni'><img src="~static/images/myanmar_icon.png" alt="">မြန်မာ</el-dropdown-item>
                                    <!-- <el-dropdown-item  round command='zg'>ျမန္မာ ေဇာ္ဂ်ီ</el-dropdown-item> -->
                                    <el-dropdown-item round command='zh'><img src="~static/images/chinese_icon.png" alt="">中文</el-dropdown-item>


                                </el-dropdown>
                            </div>


                        </el-dialog>
                    </div>
                </div>

                <carousel :autoplay="true" :nav="false" v-if="loaded" :items=1>

                    <div class="item" v-for="(img_slide,  i) in slider_images" :key="i">
                        <a :href="img_slide.link" target="_blank">
                            <el-image :src="img_slide.slider_image" value="img_slide" style="width:100%;height:160px;">
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
                            <img src="~static/images/slide_inner_icon.png" alt="" class="slide_inner_icon"> {{this.slider_text.text}}
                        </p>
                    </div>
                </h3>
                <div class="choose_2d_3d" data-aos="fade-up" data-aos-duration="700">
                    <el-row>
                        <el-col :span="12">
                            <nuxt-link :to="`${$t('/home')}?lang=${$store.state.locale}`">

                                <img src="~static/images/twod_card.png" alt="" class="twod_card">

                            </nuxt-link>
                        </el-col>
                        <el-col :span="12">
                            <nuxt-link :to="`${$t('/threeD/')}?lang=${$store.state.locale}`">

                                <img src="~static/images/threed_card.png" alt="" class="threed_card">

                            </nuxt-link>
                        </el-col>
                    </el-row>

                     <!-- <el-row>
                        <el-col :span="12">
                            <nuxt-link :to="`${$t('football/home')}?lang=${$store.state.locale}`">

                                <div class="bauchu_card">Bau Cau</div>

                                                </nuxt-link>
                        </el-col>
                        <el-col :span="12">
                            <nuxt-link :to="`${$t('/football/football')}?lang=${$store.state.locale}`">

                                <img src="~static/images/footballbutton.jpeg" alt="" class="football_card_logo">

                            </nuxt-link>
                        </el-col>
                    </el-row>  -->

                </div>

            </div>
        </div>
        <el-dialog :visible.sync="dialogVisible_autoLogout" width="90%" :show-close="false" :close-on-click-modal="false">

            <span>{{$t('section_time_out')}}</span>
            <br>
            <el-button style="margin-top:20px;" type="primary" @click="autoLogout() ;dialogVisible_autoLogout = false">{{$t('ok')}}</el-button>

        </el-dialog>

    </el-main>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import carousel from 'vue-owl-carousel'

export default {

    components: { carousel },
    getters: {},
    mutations: {},
    actions: {},
    layout: 'homeLayout',


    mounted() {


        var self = this;
        if (this.$store.state.sliderImage.length > 0) {
            self.slider_images = this.$store.state.sliderImage;
            if (this.slider_images !== null) {
                this.loaded = true;
            }
        } else {
            // setTimeout(function(){
            self.$axios.get('/v2/v1/slider_image?name=home')
                .then(response => {
                    if (self.slider_images !== null) {
                        this.loaded = true;
                    }
                    self.slider_images = response.data.data
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

        this.updateIsLoggedIn();
        this.updateLang();

        let lang = localStorage.getItem('locale');
        this.$store.commit('SET_LANG', lang);
    },
    data() {

        return {
            error_url: '',
            error_message: '',
            error_trace: '',
            error: '',
            trace: '',
            last_date: '',
            dialogVisible: false,
            dialogVisible_autoLogout: false,

            isActive: true,
            hasError: false,


            currentDate: null,
            morningTime: null,

            slider_images: '',
            activeIndex: '1',

            info: '',
            info_api: '',
            kwee_cma: '',
            set_1200: '',
            profile: '',
            slider_text: '',

            myWallet: '',
            blockUser: '',
            loaded: '',

            //   activeIndex2: '1',
        }

    },


    methods: {
        HomeRefresh() {
            this.fullscreenLoading = true;
            setTimeout(() => {

                this.fullscreenLoading = false;
                location.reload();
            }, 1000);
        },
        autoLogout() {
            this.$store.commit('logOut');
            this.$router.push(`/login?lang=${this.$store.state.locale}`);
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





        changeLang(lang) {
            //mutate 'locale' in store
            this.$store.commit('SET_LANG', lang)
            //re-route to the current page but with the selected language in a query string
            this.dialogVisible = false
            this.$router.push(`/?lang=${this.$store.state.locale}`);
            this.$axios.get(`/v2/v1/add_language?language=${lang}`)


                .then(response => {


                });
            this.$axios.get("/v2/v1/get_language")


                .then(response => {

                });

            // this.$router.push({ path: `${this.$router.currentRoute.path}?lang=${lang}` })
        },
        submitLang() {
            this.$store.commit('SET_LANG', 'hello')
        },



        updateIsLoggedIn() {
            this.$store.commit('updateIsLoggedIn', this.hasUserInfo());
        },
        hasUserInfo() {
            return Boolean(localStorage.getItem('userInfo'));
        },


        updateLang() {
            this.$store.commit('updateLang', this.hasLang());
        },
        hasLang() {
            return Boolean(localStorage.getItem('locale'));
        },
    },
    created() {



        let token = localStorage.getItem('token');
        if (token) {
            this.$axios.get("/v2/v1/profile", {
                    headers: {
                        "Authorization": "Bearer " + token
                    }
                })
                .then(response => {
                    var user_id = response.data.data.id
                    window.$nuxt.$store.commit('userId', user_id);
                    this.blockUser = response.data.data.trash
                    this.profile = response.data.data
                    this.myWallet = this.profile.wallet
                    this.currentTime = response.data.data.time;
                    if (this.blockUser == 0) {} else {
                        this.$store.commit('logOut');
                        this.$router.push(`/?lang=${this.$store.state.locale}`);
                    }
                })
                .catch(error => {

                    if (error.response.data.message == 'Unauthenticated.') {

                        this.dialogVisible_autoLogout = true

                    }

                });

        }

    },
}
</script>

<style>
.choose_2d_3d .el-card {
    margin: 20px;
}

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
        transform: translate(0 0)
    }
    49.99% {
        opacity: 1;
        transform: translate(40px, 0)
    }
    50% {
        opacity: 0;
        transform: translate(40px, 0)
    }
    100% {
        opacity: 0;
        transform: translate(0, 0)
    }
}

@keyframes ldio-ct1tsjzqdg5 {
    0% {
        transform: translate(0, 0)
    }
    50% {
        transform: translate(40px, 0)
    }
    100% {
        transform: translate(0, 0)
    }
}

.loadingio-spinner-dual-ball-ty27h70p24 {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    ;
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
    background-color: #14612D;
    color: #333;
    /* text-align: center; */
    padding: 10px 0;
    z-index: 5;
}

.el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
}

.el-main {
    text-align: center;
    margin: 0 auto;
    background-image: url(~static/images/main_bg.png);
    background-size: cover;
    background-repeat: no-repeat;
    max-width: 480px;
    width: 100%;
    height: 100vh;
    padding: 0;
    overflow: hidden;
    /* background-position: 100% 100%; */
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
</style>
