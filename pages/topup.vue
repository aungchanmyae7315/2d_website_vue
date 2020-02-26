<template>
   
    <section>
        <div class="topup">
            <el-header>
                 <nuxt-link  :to="`${$t('wallet')}?lang=${$store.state.locale}`">
                <el-page-header content="Top Up">
                </el-page-header>
                 </nuxt-link>
            </el-header>
            <p>{{$t('After bank transferring is finished, please enter your amount and upload your bank slip below.')}}</p>
          
            <el-form>
                 <el-form-item label="Transfer Amount" class="tran_input" >
                    <el-input   type="number" placeholder="Please enter the top up amount" v-model="tran_amount" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <h5>{{$t('Upload Bank transferred Slip')}}</h5>
             <el-upload
                class="upload-demo"
                action="https://build.seinlucky.com/api/v1/slip"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                 :limit="2"
                
                :on-change="handleChange"
                :file-list="fileList"
                list-type="picture">
                  <i slot="default" class="el-icon-plus"></i>
              
                <div slot="tip" class="el-upload__tip">{{$t('please upload bank slip photo here')}}</div>
             </el-upload>
              <el-button round @click="slip_upload">Summit</el-button>
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
    data() {
        return {
            
            tran_amount:'',
            img_url:'',
               fileList: [],
        }
    },
    methods: {
        goBack() {
              this.$router.push('/wallet');
        },
        handleChange(file, fileList) {
            this.img_url = fileList[0].url
            console.log(this.img_url);
        },
        handleRemove(file, fileList) {
             
        console.log(file, fileList);
        },
        handlePreview(file) {
          alert(file.url)
            console.log(file.url);
        },
         handleExceed(files, fileList) {
        this.$message.warning(`The limit is 2, you selected ${files.length} files this time, add up to ${files.length + fileList.length} totally`);
      },

    

      slip_upload() {
        
         
         let token = localStorage.getItem('token');
        
         var data = {
                image:'https://cdn1.peopleimages.com/picture/201903/1830571-legs-speak-louder-than-words-zoom_90.jpg',
                amount: this.tran_amount,
                bank_type_id:1,
                card_number:370101002345,

            }
            console.log(data)
                axios.post("https://build.seinlucky.com/api/v1/slip",
                           data,
                    {
                           

                        headers: {
                               "Authorization": "Bearer "+token
                         },
                          
                        })
                
                    .then(response => {
                     console.log(this.topup_info = response.data.data)
                     console.log(response)
                })
            
     }
    },
    
    
}
</script>