<template>
   <div class="main_container result">
      <el-header>
           <!-- <nuxt-link  :to="`${$t('/')}?lang=${$store.state.locale}`"> -->
               <el-page-header title="" @back="goBack"  :content="`${$t('result_title')}`">
                </el-page-header>
           <!-- </nuxt-link> -->
      </el-header>

    <div class="result_item">
        <div v-for="(result,t) in twod_result" :key="t" data-aos="fade-up" data-aos-easing="linear">  
             <p>{{result.date}}</p>
            <el-card shadow="always">
                 <h6 class="result_time_number" style="color:#FEDC54">12:00 PM</h6>
               <div class="row">
                   <div class="col">
                      <span>Set</span>
                      <h4>{{result.set_1200}}</h4>
                   </div>
                   <div class="col">
                        <span>Value</span>
                        <h4>{{result.val_1200}}</h4>
                   </div>
                   <div class="col">
                        <span>2D</span>
                        <h4 style="color:#FEDC54;font-weight:bold;">{{result.result_1200}}</h4>
                   </div>
               </div>
                <el-divider></el-divider>
                <h6 class="result_time_number" style="color:#FEDC54">4:30 PM</h6>
                <div class="row">
                    <div class="col">
                        <span>Set</span>
                        <h4>{{result.set_430}}</h4>
                    </div>
                    <div class="col">
                            <span>Value</span>
                            <h4>{{result.val_430}}</h4>
                    </div>
                    <div class="col">
                            <span>2D</span>
                            <h4 style="color:#FEDC54;font-weight:bold;">{{result.result_430}}</h4>
                    </div>
                </div>
                 <el-divider></el-divider>
                <div class="card_item">
                
                    <div class="row">
                      
                      <div class="col" style="padding-top:15px">
                          <h6 class="result_time_number" >9:30 AM</h6>
                      </div>
                      <div class="col">
                          <span>Modern</span>
                          <h4>{{result.modern_930}}</h4>
                      </div>
                      <div class="col">
                          <span>Internet</span>
                          <h4>{{result.internet_930}}</h4>
                      </div>
                    </div>
                     <el-divider></el-divider>
                     <div class="row">
                      
                      <div class="col" style="padding-top:15px">
                          <h6 class="result_time_number">2:00 PM</h6>
                      </div>
                      <div class="col">
                          <span>Modern</span>
                          <h4>{{result.modern_200}}</h4>
                      </div>
                      <div class="col">
                          <span>Internet</span>
                          <h4>{{result.internet_200}}</h4>
                      </div>
                    </div>

                </div>
               
            </el-card>
        </div>
    </div>
</div>

</template>

<style>
    .result .el-header {
       background-color :#2A612D;

    }
    .el-page-header__left {
        margin:0;
    }
    .result .el-page-header {
        line-height: 43px;
        color:#fff;
        padding:0 20px;
    }
    .result .el-page-header__content {
        color:#fff;
        font-weight: bold;
    }
    .result_item {
       
        padding:20px;
    }
    .result_item h4 {
        font-size: 15px;
    }
    .result .el-card {
        
        color:#fff;
        margin:15px auto;
        border-radius: 10px;
        text-align: center;
    }
    .result_item .el-col .result_number {
        width:52px;
        
       background: #222C36;
        float: right;
        font-weight: bold;
        color: #fff;
        font-size: 32px;
        padding: 5px 10px;
        border-radius: 13px;
        margin-right:3px;
    }
    .result .el-card__body {
        background:#252E39;
        border:2px solid #FFEA72;
        border-radius: 10px;
       
    }
    
    .result_time , .result_date {
       margin:17px 10px;
       padding-left:12px;
       font-size: 11px;
    }
    .result_item .el-divider {
        background: #696767;
        margin:12px auto;
    }
    .result_item span {
        font-size: 13px;
    }
</style>

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
           twod_result:'',
        }
    },
     methods: {
        goBack() {
             this.$router.push(`/me?lang=${this.$store.state.locale}`); 
         },
     },
     created() {
          this.$axios.get("/v1/twod-result")
      
                
                    .then(response => {
                        console.log(response.data.data)
                     this.twod_result = response.data.data
                     this.$nuxt.$loading.finish()
                })
     }
}
</script>