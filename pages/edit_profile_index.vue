<template>
   <div class="main_container profile_edit">
      <el-header>
         <nuxt-link  :to="`${$t('/')}?lang=${$store.state.locale}`">
                          <el-page-header :title="`${$t('back')}`"  :content="`${$t('profile')}`">
                </el-page-header>
            </nuxt-link>
      </el-header>


   <div v-if="!image">
             <div class="avatar-upload">
                <div class="avatar-edit">
                    <input type='file' @change="onFileChange" id="imageUpload" accept=".png, .jpg, .jpeg" />
                    <label for="imageUpload"></label>
                </div>
                <div class="avatar-preview">
                   
                    <div id="imagePreview" v-if="this.profile.image == null">
                        <img src="~static/images/icons/me_img.png" alt="" style="width:140px">
                         
                     
                     
                    </div>
                    <div id="imagePreview" v-else>
                              <img :src="this.profile.profile " alt="" id="imagePreview">
                    </div>
                </div>
            </div>
    </div>
        <div v-else>
           <div class="avatar-upload">
                <div class="avatar-edit">
                    <input type='file' @change="onFileChange" id="imageUpload" accept=".png, .jpg, .jpeg" />
                    <label for="imageUpload"></label>
                </div>
                <div class="avatar-preview">
                
                  <img  :src="url" alt="" id="imagePreview">
                    <!-- <button @click="removeImage">Remove image</button>  -->
                </div>
            </div>
        </div>

        <el-form  :model="ruleForm" ref="ruleForm"  class="demo-ruleForm" >
            <el-form-item  class="edit_name" >
                <el-input  required type="text" placeholder="Your Full Name" id="ok" v-model="profile.name"  autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
                <p>{{$t('registered_phone')}}: {{this.profile.phone}}</p>

               <el-button round @click="profile_edit">{{$t('Confirm')}}</el-button>

    </div>
</template>

<style >

.profile_edit .el-button.is-round {
    width:100%;
    background: #158220;
    color:#fff;
    font-weight: bold;
    margin-top:150px;
}
    .profile_edit .el-input__inner {
        background-color: #E6E6E6;
        color: #666666;
        border-radius: 23px;
    }
    .profile_edit {
        padding:0 20px;
        text-align: center;
    }
    .profile_edit p {
        color:#858585;
    }
    .profile_edit .el-header {
       background-color :#fff;

    }
      .el-page-header__left {
        margin:0;
    }
    .profile_edit .el-page-header {
        line-height: 43px;
        color:#000;

    }
    .profile_edit .el-page-header__content {
        color:#000;
        font-weight: bold;
    }

    .profile_edit .avatar-upload {
  position: relative;
  max-width: 205px;
  margin: 50px auto;
}
.profile_edit .avatar-upload .avatar-edit {
  position: absolute;
  right: 30px;
  z-index: 1;
  bottom:0;
}
.profile_edit .avatar-upload .avatar-edit input {
  display: none;
}
.profile_edit .avatar-upload .avatar-edit input + label {
  display: inline-block;
  width: 34px;
  height: 34px;
  margin-bottom: 0;
  border-radius: 100%;
  background: #FFFFFF;
  border: 1px solid transparent;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  font-weight: normal;
  transition: all 0.2s ease-in-out;
}
.profile_edit .avatar-upload .avatar-edit input + label:hover {
  background: #f1f1f1;
  border-color: #d6d6d6;
}
.profile_edit .avatar-upload .avatar-edit input + label:after {
  content: "\f040";
  font-family: 'FontAwesome';
  color:green;
  position: absolute;
  top: 4px;
  left: 0;
  right: 0;
  text-align: center;
  margin: auto;
}
.profile_edit .avatar-upload .avatar-preview , #imagePreview{
  width: 140px;
  height: 140px;
  position: relative;
  border-radius: 100%;
  /* border: 6px solid #F8F8F8; */
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
}
/* #imagePreview  {
  width:192px;
  height:192px;
} */
.profile_edit .avatar-upload .avatar-preview > div {
  width: 100%;
  height: 100%;
  border-radius: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}


</style>


<script>
 import axios from 'axios'
  export default {
    mounted() {
  
      let token = localStorage.getItem('token');
      if(token) {
          this.$axios.get("/v1/profile",
              {headers: {
                          "Authorization": "Bearer "+token
                    }
                  })
              .then(response => {
                this.profile = response.data.data
                console.log(this.profile.name)

          })
      }
                
    },
    data() {
      return {
          ruleForm: {
            edit_name:''

        },
       
       
        profile:'',
        image:'',
        
      };
    },
    methods: {
      

      onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      
      this.image = e.target.files[0];
       this.url = URL.createObjectURL(this.image);
  
    },

    removeImage: function (e) {
      this.image = '';
    },

    profile_edit() {
               //  console.log(this.image);

                let token = localStorage.getItem('token');

                let formData = new FormData();
                formData.append('profile', this.image);

                 console.log(formData);

                this.$axios.post('/v1/profile-photo/update',
                  formData
                 ,{
                  headers: {
                    "Authorization": "Bearer "+token,
                    'content-type': 'multipart/form-data'
                  }
                })
                  .then(function (response) {
                    console.log(response);
                  })
                  .catch(function (error) {
                    console.log(error);
                  });

                 var data_name = {
                    name: $('#ok').val(),

                  }
         
                this.$axios.post("/v1/profile/update",data_name,
                    {headers: {
                               "Authorization": "Bearer "+token
                         }
                        })
                    .then(response => {
                     console.log(this.name_update = response.data.data)

                })


                this.$router.push(`me?lang=${this.$store.state.locale}`); 
    }


    }
  }
</script>