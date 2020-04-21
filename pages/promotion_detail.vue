<template>
    <main class="seinlucky_point">
        <el-header>
           <!-- <nuxt-link  :to="`${$t('/')}?lang=${$store.state.locale}`"> -->
               <el-page-header title="" @back="goBack"  :content="`${$t('Title')}`">
                </el-page-header>
           <!-- </nuxt-link> -->
         </el-header>
                    <!-- <img src="~static/images/refel_page/refel_img_one.png" class="refel_img"> -->
            <img :src="promotion_detail.image" alt="" class="promotion_img">
        <div class="contant_promo">
            <h6>{{promotion_detail.title}}</h6>
            <p v-html="promotion_detail.description "></p>
        </div>
   
    </main>
</template>

<script>
import axios from 'axios'
export default {
    mounted() {
      this.$nextTick(() => {
      this.$nuxt.$loading.start()
      })
    },
    data() {
        return {
           promotion_detail:''
        }
    },
    methods: {
           goBack() {
             this.$router.push(`/promotion?lang=${this.$store.state.locale}`); 
         },
    },
     created() {

         let token = localStorage.getItem('token');
            let pro_id = localStorage.getItem('promotion_id');
            console.log(pro_id);
                this.$axios.get("/v2/v1/promotion/detail?id="+pro_id,
                    {headers: {
                               "Authorization": "Bearer "+token
                         }
                        })
                
                    .then(response => {
                        console.log(response)
                        this.$nuxt.$loading.finish()
                     console.log(this.promotion_detail = response.data.data[0])
                })
     }
}
</script>
<style>
.seinlucky_point {
    padding:0;
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
        padding:0 30px;
      
    }
    .seinlucky_point .el-page-header__content {
        color:#000;
        font-weight: bold;
    }
.promotion_img {
    width:100%;
    height:200px
}
.contant_promo {
    padding:30px;
    text-align:left;
}
.contant_promo img {
    width:100% !important;
}
   
</style>