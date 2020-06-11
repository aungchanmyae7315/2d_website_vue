<template>
    <main class="main_error_page">
        
        <section class="item_error">
            <div>
                <img src="~static/error/sad_cloud_icon.png" alt="">
                <h6>Something went wrong</h6>
                <p>Please check your connection and try again.</p>
                <el-button type="info" @click="errorRefresh"  ><img src="~static/icons_header/dimond_t_icon.png" style="width:30px" alt=""> Try Again</el-button>
            </div>
        </section>
    </main>
</template>
<style>
.main_error_page {
    background: #C9CCD1;
    max-width: 480px;
    width:100%;
    height:100vh;
    text-align: center;
}
.item_error {
    width:100%;
    position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.item_error img {
    width:100px;
    height: auto;
}
.item_error p {
    color:#6d6868e0;
}
.item_error .el-button {
    border:2px solid #b8b8b8;
    color:#000;
    background: unset;
}
</style>
<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        errorRefresh() {
             this.$router.push(`/?lang=${this.$store.state.locale}`);
        }
    }
}
</script>