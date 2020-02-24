<template>
    <main>
        <section class="bet_success">
            <img src="~static/images/refel_page/refel_img_two.png" class="">
            <h4>Bet Successful</h4>
           
             <el-button @click="goBack" round="">Summit</el-button>
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
        goBack() {
            this.$router.push('/');
        }
    }
}
</script>