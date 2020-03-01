<template>
   
    <section>
        <div class="topup">
            <el-header>
                 <nuxt-link  :to="`${$t('wallet')}?lang=${$store.state.locale}`">
                 <el-page-header :title="`${$t('back')}`"  :content="`${$t('Top Up')}`">
                </el-page-header>
                 </nuxt-link>
            </el-header>
            <p>{{$t('After bank transferring is finished, please enter your amount and upload your bank slip below.')}}</p>
          
            <el-form>
                 <el-form-item :label="$t('Enter transferred amount')" class="tran_input" >
                    <el-input   type="number" :placeholder="$t('Enter transferred amount')" v-model="tran_amount" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <h5>{{$t('Upload Bank transferred Slip')}}</h5>
          <el-upload
                class="upload-demo"
                action=""
                :limit="1"
                 :on-exceed="handleExceed"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                list-type="picture">
               <i slot="default" class="el-icon-plus"></i>
                <div slot="tip" class="el-upload__tip">jpg/png files with a size less than 500kb</div>
                </el-upload>
           
              <el-button round @click="slip_upload">{{$t('Submit')}}</el-button>
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
    
</style>

<script>
import axios from 'axios'
export default {
    mounted() {


    },
    data() {
        return {
            
            tran_amount:'',
            img_url:'',
            fileList: [],
            file:'',
        }
    },
    methods: {
        handleRemove(file, fileList) {
        console.log(file, fileList);
        // this.$store.commit('file', this.file);
      },
      handlePreview(e) {
           var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;

      this.image = e.target.files[0];
       this.file = URL.createObjectURL(this.image);
            console.log(file);

      },
       handleExceed(files, fileList) {
        this.$message.warning(`The limit is 1, you selected ${files.length} files this time, add up to ${files.length + fileList.length} totally`);
      },
        
      slip_upload(file) {
           
           

         var data = {
                image:this.file,
                amount: this.tran_amount,
            }
                 let token = localStorage.getItem('token');
                  console.log(data)
                console.log(token)
           
                axios.post("https://build.seinlucky.com/api/v1/slip_post",
                           data,
                    {
                           

                        headers: {
                               "Authorization": "Bearer "+token
                         },
                          
                        })
                
                    .then(response => {
                     //console.log(this.topup_info = response.data.data)
                     console.log(response)
                })
            
     }
    
    },
    
    
}
</script>