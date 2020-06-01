<template>
    <el-main class="samethreeD_main">
       
       <el-header>
           <!-- <nuxt-link  :to="`${$t('/')}?lang=${$store.state.locale}`"> -->
               <el-page-header title="" @back="goBack" >
                     
                </el-page-header>
                 <img src="~static/images/logo.png" class="logo_samethreenumber" alt="logo">
           <!-- </nuxt-link> -->
        </el-header>
           
        <section class="contact_sameThree">
            <h6>(၃) လုံးပူး ဂဏန်းများ</h6>
           <el-form  @submit.native.prevent :model="numberValidateForm"  ref="numberValidateForm"  class="demo-ruleForm">
                 <el-form-item
                           
                    prop="bet_number"
                    :rules="[
                    { required: true, message:$t('bet_number_required')},
                    
                    ]">  
                    <el-checkbox-group v-model="numberValidateForm.bet_number">
                    <el-checkbox-button v-for="same in SameNumber" :label="same" :key="same">{{same}}</el-checkbox-button>
                </el-checkbox-group>
                </el-form-item>
            <el-form-item
                                   
          prop="amountThreeD"
          :rules="[
              { required: true, message: $t('amount_required') },
              
          ]"
          
          >  
          <el-input @keypress.enter.native="sameNumberSubmit('numberValidateForm')" id="form-name" type="number"  :placeholder="$t('bet_amount')" v-model.number="numberValidateForm.amountThreeD"></el-input>
         
    </el-form-item>
     <p style="color:#fff;float:right;margin:0;margin-top:-14px">{{$t('you_balance')}} : {{this.myWallet}} {{$t('kyat')}}</p>
            <!-- <el-input class type="number" placeholder="100 Ks(min)"  v-model="amountThreeD"  ></el-input> -->
            <div class="bet_btn">
                
                 <el-button type="" @click="sameNumberSubmit('numberValidateForm')" :disabled='submitted' round>{{$t('Bet')}}</el-button>
             
               
            </div>
             </el-form>
        </section>
     
    
    </el-main>
</template>

<script>
 const sameThreeOptions = ['111', '222', '333','444','555','666',
 '777','888','999','000'];
  
export default {
    mounted() {
        let token = localStorage.getItem('token');
          if(token) {
             this.$axios.get("/v2/v1/profile",
                    {headers: {
                               "Authorization": "Bearer "+token
                         }
                        })
                    .then(response => {
                        console.log(response)
                        this.profile = response.data.data
                      this.myWallet = this.thousands_separators(this.profile.wallet)
                  

                })
        }  

    },
    data() {
        return {
             numberValidateForm: { 
                 amountThreeD:'',
                  bet_number: [],
             },
            
            myWallet:'',
            SameNumber: sameThreeOptions,
             submitted:false,
          
        }
        
    },
    components: {
     
  },
    methods: {
         thousands_separators(num){
            var num_parts = num.toString().split(".");
            num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return num_parts.join(".");
        },
        goBack() {
             this.$router.push(`/threeD/home?lang=${this.$store.state.locale}`); 
         },

        sameNumberSubmit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
                var data = this.numberValidateForm.bet_number  
            this.$store.commit('getBetThreeD', data);
            var data = this.numberValidateForm.amountThreeD  
            this.$store.commit('betAmountThreeD',data);
              this.$router.push(`/threeD/threeDremark?lang=${this.$store.state.locale}`); 

          } else {
            console.log('error submit!!');
            return false;
          }
        });


          
        }

    },
    computed: {
       
       
       
    }
}
</script>

<style>
    .contact_sameThree {
        padding:0 20px;
    }
    .samethreeD_main .el-header {
        padding:20px;
    }

    .logo_samethreenumber {
        width:130px;
        position: relative;
        bottom:30px;

    }
    .contact_sameThree {
        padding-top:20px;
    }
    .contact_sameThree h6 {
        color:#fff;
        
    }
    .contact_sameThree .el-checkbox-button__inner {
        background-color:#1A1A1A;
        border:0;
        font-size: 14px;
        font-weight: bold;
        margin:5px;
        color:#fff;
        border-radius: 9px;
    }
    .contact_sameThree .el-checkbox-button:first-child .el-checkbox-button__inner  ,
     .el-checkbox-button:last-child .el-checkbox-button__inner{
        border:0;
        
        border-radius: 9px;
    }
    .contact_sameThree .el-checkbox-button.is-checked .el-checkbox-button__inner {
        background: #FFEA72;
        color:#000;
        box-shadow:unset;
        font-weight: bold;
    }
    .contact_sameThree .el-input__inner {
        background: #252E39;
        border:1px solid #FFEA72;
        color:#fff;
    }
    .contact_sameThree .bet_btn {
        bottom:unset;
        margin-top:15px;
    }
</style>

