<template>
   
    <section>
        <div class="topup">
            <el-header>
                 <!-- <nuxt-link  :to="`${$t('wallet')}?lang=${$store.state.locale}`"> -->
                 <el-page-header title="" @back="goBack"  :content="`${$t('Top Up')}`">
                    
                </el-page-header>
                 <!-- </nuxt-link> -->
            </el-header>
            <!-- <p>{{$t('After bank transferring is finished, please enter your amount and upload your bank slip below.')}}</p> -->
              <!-- <h5>{{$t('Upload Bank transferred Slip')}}</h5> -->
               <p>{{$t('please_transfer_top-up_money_to_one')}}</p>
        <!-- <div id="bank_copy_list">
            <ul class="see_more_list" >
                <li  v-for="(bank_info, b) in bank_account" :key="b">
                    <div class="demo-type wallet_type"  v-if="b < limit_by">
                     
                            
                              <el-image :src="bank_info.bank_icon">
                                <div slot="placeholder" class="image-slot">
                                  Loading<span class="dot">...</span>
                                </div>
                              </el-image>
                              <div  class="avatar_text">
                                <ul style="padding-top:18px;">
                                  <li style="font-size:10px;">{{bank_info.bank_name}}</li>
                                  <li style="font-size:10px;" class="bank_number">
                                    <span class="code text-red">{{ bank_info.card_number }}</span>
                                    <input type="hidden" readonly :id="'code'+(bank_info.id)" :value="bank_info.card_number">
                                  </li>
                                </ul>
                                </div>
                                <div class="result_icon">
                                    <span class="  copy-btn ml-auto" @click.stop.prevent="copyTestingCode(bank_info.id)">
                                    {{ $t('Copy') }}
                                  </span>
                                  </div>
                              </div>
                            
                </li>
            </ul>
            <div class="show_more">
                <a href="javascript:void(0)" 
                @click="simple_toggle(default_limit, bank_account.length)">{{ limit_by===2? $t('show_more'): $t('show_less')}}
              </a>
            </div>
          
        </div> -->
        <p>{{$t('upload_he_image_of_the_bank')}}</p>




            <div class="avatar-upload">
                    <div class="avatar-edit" v-if="!url">
                        <label for="imageUpload" class="upload_icon_top"> 
                          <div class="upload_over_lay">

                         
                          <div class="upload_img_bg" >
                            
                          </div>
                            
                         </div>

                        <span >{{$t('please_upload_photo_here')}}</span>
                        </label>
                          <i slot="default" class="el-icon-plus"></i>
                        <input type="file" @change="onFileChange" id="imageUpload"  accept=".jpg, .jpeg, .png">
                        <div slot="tip" class="el-upload__tip"></div>
                    </div>
            
                <div class="avatar-preview" v-else>
                        
                        <img  :src="url" alt="" id="imagePreview_top">
                   
                        <el-button type="text" @click="removeImage">{{$t('remove_image')}}</el-button> 
                </div>
                 
                    
                
            </div>
            <div style="text-align:center;">
                  <p>{{$t('if_the_photo_can_not_upload_on_your_device')}}</p>
            </div>
          

            <p>{{$t('Please_enter_transferred')}}</p>
            <el-form   :model="ruleForm" ref="ruleForm"  class="demo-ruleForm" >
                 <el-form-item 
                  prop="tran_amount"
              :rules="[
                { required: true, message: $t('amount_required')},
                
              ]"
                  class="tran_input" >
                    <el-input   type="number" :placeholder="$t('Enter transferred amount')" v-model="ruleForm.tran_amount"></el-input>
                </el-form-item>
            </el-form>
                <el-button round @click="slip_upload('ruleForm')"  :disabled='submitted'>{{$t('Submit')}}</el-button>
                 <el-divider></el-divider>
            <p>{{$t('need_help?_please_contact')}}</p>
                    <ul class="topup_contact" v-for="(phone , p) in contact" :key="p">
                        <li><el-button size="medium" type="info"  @click="dial(phone)"   icon="el-icon-phone" >{{phone}}</el-button></li>

                    </ul>
        
        </div>
       
    </section>

</template>

<style>

    .topup {
        padding:0 20px 50px  20px;
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
        position: absolute;
        left:0;
        right:0;
        width:40px;
        height: 40px;
        z-index: 999;
        bottom:105px;
        content: "\e6d9";
        font-size: 27px;
        color: #0187E0;
        background: #fff;
        border-radius: 50px;
        padding:7px;
        font-weight: bold;
    }
    .topup .el-button.is-round{
        position: relative;
        max-width: 480px;
        width:100%;
        background-color: #158220;
        color:#fff;
    }
.topup .avatar-upload {
  position: relative;
  margin-bottom:30px;
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
  height:190px;
  border-radius: 9px;
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

    width: 100%;
    opacity: .5;
    border-radius: 9px;
    background-color: #0092D9;
   
    
}
.wallet_type .el-avatar--circle {
      border-radius: 22%;
    }
    .wallet_type .el-button {
      font-size: 11px;
    }
    .wallet_type .el-avatar ul {
      padding:5px;
    }
    .wallet_type .el-avatar ul li {
      color:#000;
    }
    .wallet_type img {
      width:50px;
      height:auto;
      float:left;
      border-radius: 9px;
      /* margin-right:8px; */
    }
    .topup .avatar_text {
      color:#000;
    }
    .see_more_list {
      list-style: none;
      padding:20px;
     
      margin:0;
    
    }
    .see_more_list img {
      -webkit-box-shadow: 0px 5px 23px -7px rgba(0,0,0,0.75);
      -moz-box-shadow: 0px 5px 23px -7px rgba(0,0,0,0.75);
      box-shadow: 0px 5px 23px -7px rgba(0,0,0,0.75);
    }
    #bank_copy_list {
      margin-bottom:30px;
       border-radius: 9px;
      -webkit-box-shadow: 3px 6px 28px -7px rgba(0,0,0,0.75);
      -moz-box-shadow: 3px 6px 28px -7px rgba(0,0,0,0.75);
      box-shadow: 3px 6px 28px -7px rgba(0,0,0,0.75);
    }
      .see_more_list .copy-btn {
      cursor: pointer;
      color:#fff;
      background:#158220;
      padding:4px 7px;
      border-radius: 23px;
      font-size:11px;
    }
    .show_more {
      text-align: center;
      padding: 8px;
      border-top: 1px solid #b8b8b8
    }
    .topup_contact {
      margin:0;
      padding:0;
      text-align: center;
      list-style: none;
    }
    .topup_contact li {
      margin:20px auto;
    }
    .upload_img_bg {
      position: absolute;
      top: 16%;
      left: 25%;
      background-image: url('~static/images/slip_upload_img.jpeg');
      background-size:100% 100%;
      max-width: 480px;
      width:50%;
      height:50%;
      background-repeat: no-repeat;
      z-index: -1;
    }
    .upload_over_lay {
      width:100%;
      height: 150px;
      background-color:rgba(22, 131, 218, 0.22);
      z-index: 99;
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
          
          default_limit: 2,
          limit_by: 2,
          contact:[],
          bank_account:'',
          card_number:'',
          visible: false,
          profile:'',
          message:'',
           display: false,
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
     created() {
      
          this.$axios.get('/v1/admin-bank')
              .then(response => {
                this.bank_account = response.data.data
              })  
          let token = localStorage.getItem('token');
        if(token) {
              this.$axios.get("/v1/profile",
                    {headers: {
                               "Authorization": "Bearer "+token
                         }
                        })
                    .then(response => {
                     this.profile = response.data.data

                })
        }
         this.$axios.get("/v1/contact")
    
            
                .then(response => {
                    this.contact = response.data.data[0].phone_number
            });
                
    },
    methods: {
         simple_toggle(default_limit, filters_length) {
            this.limit_by = (this.limit_by === default_limit) ? filters_length : default_limit;
        },
        dial: function(data){
          window.location ='tel:'+data;
        },
       copyTestingCode (data) {
        
          let testingCodeToCopy = document.querySelector('#code'+data)
          testingCodeToCopy.setAttribute('type', 'text')    
           testingCodeToCopy.setAttribute('readonly', true);
          testingCodeToCopy.select()

          try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
             this.$message({
               message:this.$t('copy_success'),
              position: 'top',
              showClose: true,
          
            });
            
          } catch (err) {
            alert('Oops, unable to copy');
          }
          testingCodeToCopy.setAttribute('type', 'hidden')
          window.getSelection().removeAllRanges()
        },
       
          goBack() {
             this.$router.push(`/wallet?lang=${this.$store.state.locale}`); 
         },
          toggleDropdown() {
            this.display = !this.display
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
                 this.$router.push(`/topup_success?lang=${this.$store.state.locale}`); 
                 
            
          } else {
          
            console.log('error submit!!');
            return false;
          }
        });

        },
     
            
            
    
    },
    
    
}
</script>