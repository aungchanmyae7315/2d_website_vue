<template>
    <section>
        <div class="language_type">
            <el-header>
                <el-page-header @back="goBack" content="Language">
                </el-page-header>
            </el-header>
<lang></lang>
            <!-- <nuxt-link
                v-if="$i18n.locale !== 'en'"
                :to="switchLocalePath('en')"
                >
                English
                </nuxt-link>

                <nuxt-link
                v-if="$i18n.locale !== 'mm'"
                :to="switchLocalePath('mm')"
                >
                Myanmar
            </nuxt-link> -->
            <!-- <li>{{ $t('language') }}</li>
            <ul class="lang_list">
                <nuxt-link
                    :key="index"
                    v-for="(locale, index) in locales"
                    :to="switchLocalePath(locale.code)"
                >
                    <li :class="isSelected(locale.code)">{{ locale.title }}</li>
                </nuxt-link>
            </ul> -->
               <el-button type="success" style="width:100%"  round @click="submitLang('')"  v-loading.fullscreen.lock="fullscreenLoading">Submit</el-button>
        </div>
    </section>
</template>

<script>
import lang from '~/components/lang.vue'
export default {
    data() {
        return {
              fullscreenLoading: false
        }
    },
    components: {
    lang
  },
    methods: {
        // isSelected: function (code) {
        //     const vm = this
        //     const selectedLocale = this.$i18n.locale

        //     if (code == selectedLocale) {
        //         return 'active'
                
        //     }
        // },
        goBack() {
              this.$router.push('/');
        },
         submitLang() {
                     const loading = this.$loading({
                          lock: true,
                          text: 'Loading',
                          spinner: 'el-icon-loading',
                          background: 'rgba(0, 0, 0, 0.7)'
                        });
                          setTimeout(() => {
                          loading.close();
                        }, 2000);
                    //   this.$route.fullPath.replace(/^\/mm/, '/home')
                    //  return redirect(route.fullPath.replace(/^\/mm/, '/'))
                    // this.store.mm
                       this.$store.commit('SET_LANG', 'hello')
                        
        }
       
    },
    computed: {
        locales () {
          
            r//eturn this.$i18n.locales.filter(locale => locale.code !== this.$i18n.locale)
            
        },
       
    }
}
</script>

<style >
    .language_type {
        padding:20px;
    }
    .language_type .el-header {
       background-color :#fff;

    }
    .language_type ul {
        padding:0;
        margin:150px auto;
        list-style:none;
    }
    .language_type ul li {
        max-width: 480px;
        width:50%;
        padding:10px;
        text-align: center;
        border-radius: 23px;
        margin:20px auto;
        color:#000;
        text-transform:capitalize;
        
    }
    .language_type ul li a {
        text-decoration: none;
       
    }
    .language_type .active {
        background:#158220;
        color:#fff;
        display: block;
        font-weight: bold;
    }
    .el-page-header__left {
        margin:0;
    }
    .language_type .el-page-header {
        line-height: 43px;
        color:#000;
       
    }
    .language_type .el-page-header__content {
        color:#000;
        font-weight: bold;
    }
</style>