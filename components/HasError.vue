<template>
    <main class="error_box">
         <el-dialog

  :visible.sync="dialogVisible_error"
  width="90%"
   :show-close="false"
  :close-on-click-modal="false">
  <section class="item_error">
            <div>
                <img src="~static/error/sad_cloud_icon.png" alt="">
                <h6>{{$t('something_went_wrong')}}</h6>
                <p>{{$t('pls_check_your_connection')}}</p>
                <el-button type="info"  @click=" HomeRefresh();dialogVisible_error = false" v-loading.fullscreen.lock="fullscreenLoading"  ><img src="~static/icons_header/dimond_t_icon.png" style="width:30px" alt="">{{$t('try_again')}}</el-button>
            </div>
    </section>
  

</el-dialog>
    </main>
</template>

<script>
export default {
    data() {
        return {
             dialogVisible_error:false,
            fullscreenLoading: false,
            
        }
    },
    mounted() {
        let hasErrors = localStorage.getItem('axiosRequestError');
            if(!hasErrors) {
                this.dialogVisible_error = false
            }else {
                this.dialogVisible_error = true
            }
        },
    methods: {
         HomeRefresh() {
        localStorage.removeItem('axiosRequestError');
        this.fullscreenLoading = true;
        setTimeout(() => {
          
          this.fullscreenLoading = false;
          location.reload();
        }, 1000);
    },
    }
   
}
</script>

<style>
    .error_box {
        text-align: center;
    }
    .error_box .el-dialog {
        border-radius: 21px;
    }
</style>