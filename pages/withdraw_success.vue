<template>
    <main>
        <section class="withdraw_success">
            <img src="~static/images/refel_page/refel_img_two.png" class="">
            <h4>Success</h4>
            <p>We will reply you within 24 hours</p>
             <el-button @click="goBack" round="">Summit</el-button>
        </section>
       
    </main>
</template>
<style>
    .withdraw_success {
        padding:20px;
        text-align: center;

    }
    .withdraw_success img {
        width:60px;
        height: auto;
        margin-top:150px;
    }
     .withdraw_success .el-button.is-round{
        
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
        goBack() {
            this.$router.push('/wallet');
        }
    }
}
</script>