<template>
   <div class="main_container profile_edit">
      <el-header>
          <el-page-header @back="goBack" content="Profile">
        </el-page-header>
      </el-header>


   <div v-if="!image">
             <div class="avatar-upload">
                <div class="avatar-edit">
                    <input type='file' @change="onFileChange" id="imageUpload" accept=".png, .jpg, .jpeg" />
                    <label for="imageUpload"></label>
                </div>
                <div class="avatar-preview">
                   
                    <div id="imagePreview">
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
                  <img :src="image" alt="" id="imagePreview">
                    <!-- <button @click="removeImage">Remove image</button>  -->
                </div>
            </div>
        </div>

        <el-form>
            <el-form-item  class="edit_name" >
                <el-input  required type="text" placeholder="Your Full Name" v-model="edit_name" autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
                <p>Registered Phone: 09954265784</p>
              
               <el-button round @click="profile_edit">Summit</el-button>
             
    </div>
</template>

<style >

.profile_edit .el-button.is-round {
    width:100%;
    background: #158220;
    color:#fff;
    font-weight: bold;
    margin-top:180px;
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
 
    .avatar-upload {
  position: relative;
  max-width: 205px;
  margin: 50px auto;
}
.avatar-upload .avatar-edit {
  position: absolute;
  right: 30px;
  z-index: 1;
  bottom:0;
}
.avatar-upload .avatar-edit input {
  display: none;
}
.avatar-upload .avatar-edit input + label {
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
.avatar-upload .avatar-edit input + label:hover {
  background: #f1f1f1;
  border-color: #d6d6d6;
}
.avatar-upload .avatar-edit input + label:after {
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
.avatar-upload .avatar-preview , #imagePreview{
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
.avatar-upload .avatar-preview > div {
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
        console.log('fffff')
      let token = localStorage.getItem('token');
    
      axios.get("https://build.seinlucky.com/api/v1/profile",
                    {headers: {
                               "Authorization": "Bearer "+token
                         }
                        })
                    .then(response => {
                     console.log(this.profile = response.data.data)
 
                })
    },
    data() {
      return {
        image: '',
        edit_name:'',
        profile:'',
      };
    },
    methods: {
      goBack() {
          this.$router.push('/me');
      },

      onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function (e) {
      this.image = '';
    },
  created() {
     
    },
    profile_edit() {

              let token = localStorage.getItem('token');
              // console.log(this.image)
              var img = this.image
              // var img = "https://images.pexels.com/photos/3584930/pexels-photo-3584930.jpeg"
                var data_profile = {
                  //https://images.pexels.com/photos/3584930/pexels-photo-3584930.jpeg
                  profile:this.image,

                }

                axios.post("https://build.seinlucky.com/api/v1/profile-photo/update",data_profile,
                    {
                      headers: {
                               "Authorization": "Bearer "+token,
                               "Access-Control-Allow-Origin" : "*",
                               "Content-Type" : 'application/json',
                               "Content-Type": 'multipart/form-data'
                         }
                                        
                    
                        })
                    .then(response => {
                     console.log(response)

                })
                 var data_name = {
                    name:this.edit_name,
                    // profile:this.image

                  }
                axios.post("https://build.seinlucky.com/api/v1/profile/update",data_name,
                    {headers: {
                               "Authorization": "Bearer "+token,
                              
                         }
                        })
                    .then(response => {
                    //  console.log(this.name_update = response.data.data)
                     console.log(response)

                })

    
                 this.$router.push('/me');
    },
    

     
    }
  }
</script>