<template>
   <div class="main_container notification">
      <el-header>
          <el-page-header @back="goBack" content="Notification">
        </el-page-header>
      </el-header>
    </div>
</template>

<style >
     .notification .el-page-header {
        line-height: 43px;
        color:#fff;
        padding:0 20px;
    }
    .notification .el-page-header__content {
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
            this.$router.push('/')
      },
     }
}
</script>