<template>
   
    <section>
        <div class="topup">
            <el-header>
                 <!-- <nuxt-link  :to="`${$t('wallet')}?lang=${$store.state.locale}`"> -->
                 <el-page-header title="" @back="goBack"  :content="`${$t('Top Up')}`">
                    
                </el-page-header>
                 <!-- </nuxt-link> -->
            </el-header>
            <p>{{$t('After bank transferring is finished, please enter your amount and upload your bank slip below.')}}</p>
              <!-- <h5>{{$t('Upload Bank transferred Slip')}}</h5> -->
            
            <div class="avatar-upload">
                    <div class="avatar-edit" v-if="!url">
                        <label for="imageUpload" class="upload_icon_top"> <i slot="default" class="el-icon-plus"></i></label>
                        
                        <input type='file' @change="onFileChange" id="imageUpload" accept=".png, .jpg, .jpeg" />
                        <div slot="tip" class="el-upload__tip"></div>
                    </div>
            
                <div class="avatar-preview" v-else>
                        
                        <img  :src="url" alt="" id="imagePreview_top">
                   
                        <el-button type="text" @click="removeImage">{{$t('remove_image')}}</el-button> 
                </div>
                 
                    
                
            </div>


            <el-form   :model="ruleForm" ref="ruleForm"  class="demo-ruleForm" >
                 <el-form-item 
                  prop="tran_amount"
              :rules="[
                { required: true, message: $t('amount_required')},
                
              ]"
                 :label="$t('Enter transferred amount')" class="tran_input" >
                    <el-input   type="number" :placeholder="$t('Enter transferred amount')" v-model="ruleForm.tran_amount"></el-input>
                </el-form-item>
            </el-form>
          
           
              <el-button round @click="slip_upload('ruleForm')"  :disabled='submitted'>{{$t('Submit')}}</el-button>
        </div>
       
    </section>

</template>

<style>
    .topup {
        padding:0 20px;
    }
    .topup .el-header {
       background-color :#fff;

    }
    .el-page-header__left {
        margin:0;
    }
    .topup .el-page-header {
        line-height: 43px;
        color:#000;
       
    }
    .topup .el-page-header__content {
        color:#000;
        font-weight: bold;
    }
    .tran_input .el-input__inner {
        background-color: #E6E6E6;
        color:#666666;
    }
    .topup .upload-demo {
        -webkit-box-shadow: 1px 4px 15px -6px rgba(0,0,0,0.75);
        -moz-box-shadow: 1px 4px 15px -6px rgba(0,0,0,0.75);
        box-shadow: 1px 4px 15px -6px rgba(0,0,0,0.75);
        text-align: center;
        padding:30px;
    }
    .topup p {
        color:#666666;
    }
    .topup .el-form-item__label {
        color:#000;
    }
    .topup .el-icon-plus:before {
        content: "\e6d9";
        font-size: 31px;
        color: #158220;
        font-weight: bold;
    }
    .topup .el-button.is-round{
        
        position: relative;
        margin-top:140px;
        max-width: 480px;
        width:100%;
        margin-bottom:20px;
        background-color: #158220;
        color:#fff;
    }
     .topup .avatar-upload {
  position: relative;
  
  margin: 50px auto;
}
 .topup .avatar-upload .avatar-edit {
  margin:0 auto;
  text-align: center;
  z-index: 1;

}
.topup .avatar-upload .avatar-edit input {
  display: none;
}



.topup .avatar-upload .avatar-preview , #imagePreview_top {
  width:100%;
  height:200px;
  position: relative;
  text-align: center;
  margin:0 auto;
  

  /* border: 6px solid #F8F8F8; */
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
}
/* #imagePreview  {
  width:192px;
  height:192px;
} */
.topup .avatar-upload .avatar-preview > div {
  width: 100%;
  height: auto;
  border-radius: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.topup .upload_icon_top {
  position: relative;
    right: 0;
    padding:50px;
    width: 100%;
    
    left: 0;
    z-index: 88;
   
    bottom: 0;
    background-color: hsla(120,100%,75%,0.3);
     box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);
    /* width: 35px; */
    /* height: 35px; */
    padding: 26px;
    
}
    
</style>

<script>
import axios from 'axios'
export default {
    mounted() {
      this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
    },
    data() {
        return {
          submitted:false,
            ruleForm: {
                  tran_amount:'',
            },
          
              image:'',
              url:'',
               image:'',
               amount:'',
                error:'',
            // img_url:'',
            // fileList: [],
            // file:'',
        }
    },
    methods: {
          goBack() {
             this.$router.push(`wallet?lang=${this.$store.state.locale}`); 
         },
         onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            
            this.image = e.target.files[0];
            this.url = URL.createObjectURL(this.image);
        
            },

    removeImage: function (e) {
      this.url = '';
    },

    //     handleRemove(file, fileList) {
    //     console.log(file, fileList);
    //     // this.$store.commit('file', this.file);
    //   },
    //   handlePreview(e) {
    //        var files = e.target.files || e.dataTransfer.files;
    //   if (!files.length)
    //     return;

    //   this.image = e.target.files[0];
    //    this.file = URL.createObjectURL(this.image);
    //         console.log(file);

    //   },
    //    handleExceed(files, fileList) {
    //     this.$message.warning(`The limit is 1, you selected ${files.length} files this time, add up to ${files.length + fileList.length} totally`);
    //   },
        slip_upload(formName) {
             this.$refs[formName].validate((valid) => {
          if (valid) {
              let token = localStorage.getItem('token');
            

                let formData = new FormData();
                formData.append('image', this.image);
                 formData.append('amount', this.ruleForm.tran_amount);

                //  console.log(formData);
                // console.log(token)
              
            this.$axios.post('/v2/v1/slip_post',
                  formData
                 ,{
                  headers: {
                    "Authorization": "Bearer "+token,
                    'content-type': 'multipart/form-data'
                  }
                })
               
                
                    .then(response => {
                     //console.log(this.topup_info = response.data.data)
                     console.log(response)
                })
                  this.submitted = true
                 this.$router.push(`topup_success?lang=${this.$store.state.locale}`); 
                 
            
          } else {
          
            console.log('error submit!!');
            return false;
          }
        });

        },
     
            
            
    
    },
    
    
}
</script>