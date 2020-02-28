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
      },
      handlePreview(file) {
        console.log(file);
        
        // this.file = file
      },
       handleExceed(files, fileList) {
        this.$message.warning(`The limit is 1, you selected ${files.length} files this time, add up to ${files.length + fileList.length} totally`);
      },
        
      slip_upload() {
        
       
         var data = {
                image:'https://cdn1.peopleimages.com/picture/201903/1830571-legs-speak-louder-than-words-zoom_90.jpg',
                amount: this.tran_amount,
                bank_type_id:1,
              

            }
              
         let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjU1ODU4OGU1YWEyMjcwNzRlYzkwOTA0MDdlMmI4YWJjOTM5ZTA0ZWU3MTEyODE3MWZiODliY2NlNzNlZmE1NjRmMGZmMTE5Y2U1OGE0MDdiIn0.eyJhdWQiOiIxIiwianRpIjoiNTU4NTg4ZTVhYTIyNzA3NGVjOTA5MDQwN2UyYjhhYmM5MzllMDRlZTcxMTI4MTcxZmI4OWJjY2U3M2VmYTU2NGYwZmYxMTljZTU4YTQwN2IiLCJpYXQiOjE1ODI3OTg0NTMsIm5iZiI6MTU4Mjc5ODQ1MywiZXhwIjoxNjE0NDIwODUzLCJzdWIiOiI2MSIsInNjb3BlcyI6W119.OFmkUw1kHgZpRus3SlRCMheRuxQcLJZXOp8chjhOxjHbGVyhd5JxRfrosLyOc51C3hwMq644FpG7wXajLQJqHE2Vt-gWG77CKeJ_QrOQXZT_jSSuaHbckIVk0H-yYSPO82Hrmb0gi893dE9kex3E4YJbI1FFGnoLkMfZXHGyKr_PBQRPpIBJm4_7e3Y2X-glta2n3XmbsaaLg7nz7udUcF6zR_rWUDtyHUzBOhs0aDWByhkpF0VSXpPN9vtqbUgt9RqC7h3GlINRDF1PmYYq6jYj4DF2vNcgVTQGxC7j3xAsa3C3kYp_1A_AnNGuOYq9LQA9HaIHew3-igmDP9NR9jr4uiceLjlFI5Si259KT5sMWo7DJ3eSp2Xzo26OI2PyPifRxfMU18pBwwuN-BDf2kX-LPXSDers3YiFlDS6KXbrrqDxVrc2pmAdaki7Sb2nilvp9sc_YJGwS1cO7WK6gq3KREkAnJx9PDQDH78Qj9EhVWVX5rjQys0q9ymCE8yYatCKfps-fS0PANG-0Y6HyUnS9-eZ8yNU62z_jPMd-wSz3FuC7FzsnnWdyOQcu07Ug_xYySx2W5FZ4wNV4Ecxh8_RY8df64fcA9dNtdd2Ni7S5WAA9usMucA9qRPfgfkTFmwJ4VJpoQKPjW38WidgJ9FIkiGt174LCObVcgAY7FY'
           
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