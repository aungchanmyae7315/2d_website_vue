<template>
     <div class="main_container changepass_success">
          <el-page-header  @back="goBack" title=""  >
                </el-page-header>
        <section class="rel_success">
            <img src="~static/images/refel_page/refel_img_two.png" class="">
            <h4> {{$t('successfully_changed_your_password')}}</h4>
           
             <el-button @click="goBack" round="">{{$t('Confirm')}}</el-button>
        </section>
       
    </div>
</template>
<style>
.changepass_success {
    padding:0 30px;
}
.changepass_success .el-header {
       background-color :#fff;

    }
      .el-page-header__left {
        margin:0;
    }
    .changepass_success .el-page-header {
        line-height: 43px;
        padding-top:20px;
        color:#000;
        cursor: pointer;

    }
    .changepass_success .el-page-header__content {
        color:#000;
        font-weight: bold;
    }
    .changepass_success {
        padding:20px;
        text-align: center;

    }
    .changepass_success img {
        width:60px;
        height: auto;
        margin-top:60px;
        padding-bottom:20px;
    }
    .changepass_success h4 {
       line-height: 2.2;
    }
     .changepass_success .el-button.is-round{
        margin-top:100px;
        background-color: #158220;
        color:#fff;
    }

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
                this.$router.push(`/profile_edit?lang=${this.$store.state.locale}`);      
        }
    }
}
</script>