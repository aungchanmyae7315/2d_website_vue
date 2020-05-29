<template>
     <div class="main_container refel_success">
          <el-page-header  @back="goBack" title=""  >
                </el-page-header>
        <section class="rel_success">
            <img src="~static/images/refel_page/refel_img_two.png" class="">
            <h4>{{$t('refel_code_success')}}</h4>
            <p>{{$t('you_had_refel_code')}}</p>
             <el-button @click="goBack" round="">{{$t('Confirm')}}</el-button>
        </section>
       
    </div>
</template>
<style>
.refel_success {
    padding:0 30px;
}
.refel_success .el-header {
       background-color :#fff;

    }
      .el-page-header__left {
        margin:0;
    }
    .refel_success .el-page-header {
        line-height: 43px;
        padding-top:20px;
        color:#000;
        cursor: pointer;
    }
    .refel_success .el-page-header__content {
        color:#000;
        font-weight: bold;
    }
    .rel_success {
        padding:20px;
        text-align: center;

    }
    .rel_success img {
        width:60px;
        height: auto;
        margin-top:100px;
        padding-bottom:20px;
    }
     /* .rel_success .el-button.is-round{
        
        position: relative;
        top:270px;
        max-width: 480px;
        width:100%;
        margin-bottom:20px;
        background-color: #158220;
        color:#fff;
    } */

</style>

<script>
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
                this.$router.push(`/me?lang=${this.$store.state.locale}`); 
           
        }
    }
}
</script>