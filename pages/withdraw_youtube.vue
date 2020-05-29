<template>
    <el-main class="main_topup_youtube">
         <el-header>
           <!-- <nuxt-link  :to="`${$t('/')}?lang=${$store.state.locale}`"> -->
               <el-page-header title="" @back="goBack"  content="Withdraw">
                </el-page-header>
           <!-- </nuxt-link> -->
            </el-header>
              <div class="longText" id="hidingScrollBar">
                <div class=" hideScrollBar ">
                        <section class="topup_youtube">
                        
                                    <h3>How to Withdraw Sein Lucky App (ငွေထုတ်)</h3>
                                    <div class='Flexible-container'>
                                        <iframe width="720" height="405" src="https://www.youtube.com/embed/KrbxfrQNids" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                                    </div>
                                                                
                        </section>
                    </div>
                </div>
    </el-main>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    methods: {
         goBack() {
             this.$router.push(`/wallet?lang=${this.$store.state.locale}`); 
         },
    }
}
</script>
<style>
.main_topup_youtube  .el-header{
    color:#fff;
    padding:20px;
}
.main_topup_youtube .el-page-header__content {
    color:#fff;
}
.main_topup_youtube .hideScrollBar {
    padding-top:0;
}
.topup_youtube {
    padding:0 20px;
}
.topup_youtube h3 {
     color:#fff;
    margin:15px auto;
    text-align:center;
    font-size: 15px;
}
    .Flexible-container {
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 30px;
    margin:20px auto;
    height: 0;
    overflow: hidden;
    -webkit-box-shadow: -2px 6px 83px -11px rgba(0,0,0,0.75);
    -moz-box-shadow: -2px 6px 83px -11px rgba(0,0,0,0.75);
    box-shadow: -2px 6px 83px -11px rgba(0,0,0,0.75);
}

.Flexible-container iframe,   
.Flexible-container object,
.Flexible-container video, /* for html5 video embeds */
.Flexible-container embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    
}
</style>