<template>
   <div class="main_container live_chat">
      <el-header>
           <!-- <nuxt-link  :to="`${$t('/')}?lang=${$store.state.locale}`"> -->
               <el-page-header title="" @back="goBack"  :content="`${$t('Live Chat')}`">
                </el-page-header>
           <!-- </nuxt-link> -->
      </el-header>
   
      
   
</div>

</template>

<style>
    .live_chat .el-header {
       background-color :#fff;

    }
    .el-page-header__left {
        margin:0;
    }
    .live_chat .el-page-header {
        line-height: 43px;
        color:#000;
        padding:0 20px;
    }
    .live_chat .el-page-header__content {
        color:#000;
        font-weight: bold;
    }
    
</style>

<script>
import axios from 'axios'
export default {
    mounted() {
     
      
    },
    data() {
        return {
          
        }
    },
     methods: {
        goBack() {
             this.$router.push(`/home?lang=${this.$store.state.locale}`); 
         },
        
     },
     created() {
       
     }
}
</script>