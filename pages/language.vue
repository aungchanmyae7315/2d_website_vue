<template>
    <section>
        <div class="language_type">
              <!-- <nuxt-link  :to="`${$t('me')}?lang=${$store.state.locale}`"> -->
                          <el-page-header @back="goBack" title=""  :content="`${$t('Language')}`">
                </el-page-header>
            <!-- </nuxt-link> -->

            <div class="lang">
                <el-dropdown @command="changeLang"  style="text-align:center">
                <!-- <span class="el-dropdown-link" style='cursor: pointer;'>
                    {{$t('Language')}}
                </span> -->
              
                    <el-dropdown-item round command='en'>English</el-dropdown-item>
                    <el-dropdown-item round command='uni'>Myanmar</el-dropdown-item>
                    <!-- <el-dropdown-item round command='zg'>ျမန္မာ ေဇာ္ဂ်ီ</el-dropdown-item> -->
                     <el-dropdown-item round command='zh'>中文</el-dropdown-item>
              
              
                </el-dropdown>   
            </div>



         <div class="footer_btn" >
             <nuxt-link :to="`${$t('/')}?lang=${$store.state.locale}`">
                         <el-button type="success" style="width:100%"  round @click="submitLang('')"  v-loading.fullscreen.lock="fullscreenLoading">{{$t('Submit')}}</el-button>
            </nuxt-link>
        </div>
           
      
        </div>
       
           
    </section>
</template>

<script>

export default {
    data() {
        return {
              fullscreenLoading: false
        }
    },
    components: {
    
  },
    methods: {
        goBack() {
             this.$router.push(`me?lang=${this.$store.state.locale}`); 
         },
         changeLang (lang) {
      //mutate 'locale' in store
      this.$store.commit('SET_LANG', lang)
      //re-route to the current page but with the selected language in a query string
      this.$router.push({ path: `${this.$router.currentRoute.path}?lang=${lang}` })
    },
        // isSelected: function (code) {
        //     const vm = this
        //     const selectedLocale = this.$i18n.locale

        //     if (code == selectedLocale) {
        //         return 'active'
                
        //     }
        // },
        // goBack() {
        //         this.$router.push(`/?lang=${this.$store.state.locale}`); 
        // },
         submitLang() {
                     const loading = this.$loading({
                          lock: true,
                          text: 'Loading',
                          spinner: 'el-icon-loading',
                          background: 'rgba(0, 0, 0, 0.7)'
                        });
                          setTimeout(() => {
                          loading.close();
                        }, 1000);
                    //   this.$route.fullPath.replace(/^\/mm/, '/home')
                    //  return redirect(route.fullPath.replace(/^\/mm/, '/'))
                    // this.store.mm
                       this.$store.commit('SET_LANG', 'hello')
                        
        }
       
    },
    computed: {
        locales () {
          
            //eturn this.$i18n.locales.filter(locale => locale.code !== this.$i18n.locale)
            
        },
       
    }
}
</script>

<style >
    .lang {
        text-align: center;
        margin:100px auto;
    }
    .lang .el-dropdown {
        padding:27px;
        -webkit-box-shadow: 1px 0px 17px -13px rgba(0,0,0,0.75);
        -moz-box-shadow: 1px 0px 17px -13px rgba(0,0,0,0.75);
        box-shadow: 1px 0px 17px -13px rgba(0,0,0,0.75);
    }
    .lang .el-dropdown-menu__item{
        margin:20px auto;
    }
    .lang .el-dropdown-link {
        font-size: 18px;
        font-weight: bold;
    }
    .language_type .el-dropdown-menu__item:not(.is-disabled):hover {
        background: #158220;
        color:#fff;
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