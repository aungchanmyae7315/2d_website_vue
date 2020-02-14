<template>
   <div class="main_container profile_edit">
      <el-header>
          <el-page-header @back="goBack" content="Profile">
        </el-page-header>
      </el-header>

    
        <div v-if="!image">
            <h2>Select an image</h2>
            <input type="file" @change="onFileChange">
        </div>
        <div v-else>
            <img :src="image" />
            <button @click="removeImage">Remove image</button>
        </div>

<el-upload
                    class="upload-demo"
                
                  
                    multiple
                >
                    <el-button size="small" type="primary">Add another photo</el-button>
                </el-upload>
                <el-form>
                 <el-form-item  class="edit_name" >
                    <el-input   type="number" placeholder="Your Full Name" v-model="edit_name" autocomplete="off"></el-input>
                </el-form-item>
                </el-form>
                <p>Registered Phone: 09954265784</p>
             <el-button round>Summit</el-button>
    </div>
</template>

<style >
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
     .profile_edit .el-button.is-round{
        
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
  export default {
    data() {
      return {
        image: ''
      };
    },
    methods: {
     

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
    }
  







     
    }
  }
</script>