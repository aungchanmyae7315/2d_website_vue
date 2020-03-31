<template>
    <main class="seinlucky_point">
        <el-header>
           <!-- <nuxt-link  :to="`${$t('/')}?lang=${$store.state.locale}`"> -->
               <el-page-header title="" @back="goBack"  :content="`${$t('seinlucky_point_title')}`">
                </el-page-header>
           <!-- </nuxt-link> -->
         </el-header>
                    <!-- <img src="~static/images/refel_page/refel_img_one.png" class="refel_img"> -->
                        <div class="refel_img_two">
                            <img src="~static/images/seinlucky_point_icon.png" class="">
                        </div>
                    
                        <el-card class="box-card">
                            
                          <p class="seinlucky_text">{{$t('seinlucky_point_text')}}</p>
                      
                        </el-card>
                     
                         <el-button type="success" class="seinlucky_btn" round @click="submitRefel()">{{$t('seinlucky_point_btn')}}</el-button>
              
   
    </main>
</template>

<script>
import axios from 'axios'
export default {
    mounted() {
        this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => this.$nuxt.$loading.finish(), 500)
        })
    },
    data() {
        return {
          
        }
    },
    methods: {
           goBack() {
             this.$router.push(`/bet?lang=${this.$store.state.locale}`); 
         },
        submitRefel() {
             this.$router.push(`/promotion?lang=${this.$store.state.locale}`); 
        }
         

    }
}
</script>
<style>
.seinlucky_point {
    padding:0 30px;
}
 .seinlucky_point .el-header {
       background-color :#fff;

    }
    .el-page-header__left {
        margin:0;
    }
    .seinlucky_point .el-page-header {
        line-height: 43px;
        color:#000;
      
    }
    .seinlucky_point .el-page-header__content {
        color:#000;
        font-weight: bold;
    }
    .seinlucky_point {
        max-width: 480px;
        width:100%;
        height:100vh;
        margin:0 auto;
        text-align: center;
    }
    .refel_img {
        width:140px;
        height:auto;
        margin:0 auto;
    } 
    .refel_img_two img {
        width:90px;
        height:auto;
        position: relative;
        top: 43px;
    }
    .seinlucky_text {
        margin:40px auto;
    }
    .seinlucky_btn {
        margin-top:40px;
    }
</style>