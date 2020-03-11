<template>
    <main>
        <section class="bet_success">
            <img src="~static/images/refel_page/refel_img_two.png" class="">
            <h4 style="padding-top:10px;">{{$t('bet_succ')}}</h4>
            <el-footer>
                   <nuxt-link  :to="`${$t('/')}?lang=${$store.state.locale}`">
                         <el-button  round="">{{$t('Confirm')}}</el-button>
                   </nuxt-link>
            </el-footer>
            
        </section>
       
    </main>
</template>
<style>
    .bet_success {
        padding:20px;
        text-align: center;

    }
    .bet_success img {
        width:60px;
        height: auto;
        margin-top:150px;
    }
     .bet_success .el-button.is-round{
        
        position: relative;
        top:270px;
        max-width: 480px;
        width:100%;
        margin-bottom:20px;
        background-color: #158220;
        color:#fff;
    }

</style>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        
    }
}
</script>