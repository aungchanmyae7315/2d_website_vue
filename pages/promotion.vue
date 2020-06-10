<template>
   <main>
         <el-main>
              <el-header>
           <!-- <nuxt-link  :to="`${$t('/')}?lang=${$store.state.locale}`"> -->
                <h5 class="promotion_title">{{$t('promotion')}}</h5>
           <!-- </nuxt-link> -->
             </el-header>
            <div class="longText" id="hidingScrollBar">
              <div class="hideScrollBar_promotion">
                  <div class="promotion">
              
         
                <ul  v-for="(promotion,p) in promotions" :key="p" >
                    
                        <li @click="cur_id(promotion.id)">
                              <el-card shadow="hover" >
                            <div class="img-square-wrapper">
                                <img class="" :src="promotion.image " alt="Card image cap">
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">{{promotion.title}}</h5>
                                <p class="card-text">{{promotion.sub_title}}</p>
                            </div>
                            <div class="icon_right">
                                <i class="el-icon-arrow-right"></i>
                            </div>
                             </el-card>
                        </li>
                    
                </ul>
          
                   
                </div>
              </div>
             </div>
        </el-main>
    </main>
</template>
<script>
 import axios from 'axios'
export default {
     layout: 'promotionLayout',
     mounted() {
    //   this.$nextTick(() => {
    //   this.$nuxt.$loading.start()
    //   })
       this.$axios.get("/v2/v1/promotion")
    
            
                .then(response => {
                   
                    this.$nuxt.$loading.finish()
                    this.promotions = response.data.data
            });
                  
    },
     data() {
       return {
         promotions:[],
       }
     },
     methods: {
         cur_id(data) {
        
         this.$store.commit('promotion_id', data);
        this.$router.push(`/promotion_detail?`+data+`lang=${this.$store.state.locale}`); 
       
      }
     },
    created() {
    //    this.$axios.get("/v2/v1/promotion")
    
            
    //             .then(response => {
    //                 console.log(response.data.data)
    //                 this.$nuxt.$loading.finish()
    //                 this.promotions = response.data.data
    //         });
     },
}
</script>
<style>
.hideScrollBar_promotion {
      width: 100%;
    height: 100%;
    overflow: auto;
    margin-left: 17px;
    padding-right: 28px;
    padding-bottom:150px;
}
.promotion {
    text-align:center;
   padding-top:30px;
}
.promotion_title {
    color:#fff;
    padding-top:5px;
}
.card-body {
    text-align: left;
    color:#fff;
}
.img-square-wrapper {
    margin-top:25px;
    border-radius: 50%;
    
} 
.img-square-wrapper img {
    border-radius: 50%;
    
} 
.promotion .el-card {
    cursor: pointer;
    background-color: #252E39;
    border:2px solid #FFEA72;
    border-radius: 13px;
    margin:20px auto;
    
}
.promotion .el-card__body {
    padding:0 10px;
        display: flex;
    flex: 1 1 auto;
}
.promotion img {
    width:50px;
    height: 50px;
    border-radius: 50px;
}
.icon_right i {
    color:#fff;
    font-size: 23px;
    font-weight: bold;
    position: relative;
    top: 40px;
    right: 10px;
}
.promotion ul {
    padding:0;
    margin:0;
    list-style: none;
}
.promotion .card-body {
    padding:1rem;
}
</style>