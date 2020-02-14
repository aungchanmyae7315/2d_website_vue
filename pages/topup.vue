<template>
   
    <section>
        <div class="topup">
            <el-header>
                <el-page-header @back="goBack" content="Top Up">
                </el-page-header>
            </el-header>
            <p>After bank transferring is completed</p>
          
            <el-form>
                 <el-form-item label="Transfer Amount" class="tran_input" >
                    <el-input   type="number" placeholder="Please enter the top up amount" v-model="tran_amount" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <h5>Upload Bank transferred Slip</h5>
             <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                 :limit="2"
                :on-exceed="handleExceed"
                :file-list="fileList"
                list-type="picture">
                  <i slot="default" class="el-icon-plus"></i>
              
                <div slot="tip" class="el-upload__tip">please upload bank slip photo here</div>
             </el-upload>
              <el-button round>Summit</el-button>
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
export default {
    data() {
        return {
            
            tran_amount:'',
               fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, ]
        }
    },
    methods: {
        goBack() {
              this.$router.push('/wallet');
        },
        handleRemove(file, fileList) {
        console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
         handleExceed(files, fileList) {
        this.$message.warning(`The limit is 2, you selected ${files.length} files this time, add up to ${files.length + fileList.length} totally`);
      },
    }
}
</script>