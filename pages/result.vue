<template>
   <div class="main_container result">
      <el-header>
           <nuxt-link  :to="`${$t('/')}?lang=${$store.state.locale}`">
                <el-page-header  content="2D Result">
                </el-page-header>
           </nuxt-link>
      </el-header>
      <div class="result_item">
            <div v-for="result of twod_result" :key="result" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="500">
           
               
                 <el-card shadow="always">
                    <el-row type="flex" class="row-bg"  justify="space-between">
                        <el-col :span="8"><div class="result_time">12:00 PM</div></el-col>
                        <el-col :span="8"><div class="result_date">{{result.date}}</div></el-col>
                        <el-col :span="8"><div class="result_number">{{result.result_1200}}</div></el-col>
                    </el-row>
                </el-card>
                <el-card shadow="always">
                    <el-row type="flex" class="row-bg"  justify="space-between">
                        <el-col :span="8"><div class="result_time">04:30 PM</div></el-col>
                        <el-col :span="8"><div class="result_date">{{result.date}}</div></el-col>
                        <el-col :span="8"><div class="result_number">{{result.result_430}}</div></el-col>
                    </el-row>
                </el-card>
           
            </div>
        </div>
      <div >
         


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
        background: #F3FBFF;
        padding:20px;
    }
    .result_item .el-card {
        margin:15px auto;
        border-radius: 10px;
    }
    .result_item .el-col .result_number {
        width:52px;
        
       background: #222C36;
        float: right;
        font-weight: bold;
        color: #fff;
        font-size: 32px;
        padding: 5px 10px;
        border-radius: 10px;
        margin-right:3px;
    }
    .result .el-card__body {
        padding:3px 0;
    }
    .result_time , .result_date {
       margin:17px;
       font-size: 15px;
    }
</style>

<script>
import axios from 'axios'
export default {

    data() {
        return {
           twod_result:'',
        }
    },
     methods: {
    //     goBack() {
    //         this.$router.push('/')
    //   },
     },
     created() {
          axios.get("https://build.seinlucky.com/api/v1/twod-result")
      
                
                    .then(response => {
                     console.log(this.twod_result = response.data.data)
                })
     }
}
</script>