<template>
    <section class="bet_container">
         <el-form @submit.native.prevent   :model="ruleForm" ref="ruleForm"  class="demo-ruleForm" >
        <el-header>
             <!-- <nuxt-link  :to="`${$t('/')}?lang=${$store.state.locale}`"> -->
                          <el-page-header @back="goBack" title="">
                </el-page-header>
            <!-- </nuxt-link> -->
           
            <el-row style="padding-top:10px;">
                <el-col :span="6">
                    
                    <div v-if="ruleForm">
                        <el-button @click="clear_btn()" class="fast_btn" >{{$t('clear_btn')}}</el-button>
                    </div>
                    <div v-else>
                        <el-button type="button"   @click="dialogFormVisible = true"   class="fast_btn" >{{$t('fast_btn')}}</el-button>
                          
                    </div>
            
                </el-col>
                <el-col :span="18">
                    
                            <el-form-item style="margin-bottom:10px;"
                            
                            prop="amount"
                            :rules="[
                                 { required: true, message: $t('amount_required') },
                                
                            ]"
                            
                            >  
                          
                                <el-input @keypress.enter.native="bet('ruleForm')" class type="number" placeholder="100 Ks(min)"  v-model="ruleForm.amount"  ></el-input>
                            
                            </el-form-item>
                </el-col>
            </el-row>

            <el-row> 
                  <nuxt-link :to="`${$t('/wallet')}?lang=${$store.state.locale}`">
                        <el-col :span="13" v-if ="!$store.state.isLoggedIn" > <div class="balance_amount"></div></el-col>
                        <el-col :span="13" v-else> <div class="balance_amount"><img src="~static/images/amount_icon.png"  alt="">{{$t('you_balance')}}:  {{$t('kyat')}}</div></el-col>
                  </nuxt-link>
                 <el-col :span="11" class="bet_close_time"> {{$t('bet_close_time')}} :  </el-col>
            </el-row>
             <el-row> 
                  <nuxt-link :to="`${$t('/share')}?lang=${$store.state.locale}`">
                        <el-col :span="14" v-if ="!$store.state.isLoggedIn" > <div class="balance_amount"></div></el-col>
                        <el-col :span="14" v-else> <div class="balance_amount"><img src="~static/images/point_icon.png"  alt="">{{$t('you_balance_point')}}:  </div></el-col>
                    </nuxt-link>

                       <div class="bet_footer" v-if ="!$store.state.isLoggedIn">
                        <el-col :span="24" style="font-size:13px;text-align:right"> 
                        <nuxt-link :to="`${$t('/login')}?lang=${$store.state.locale}`">
                            <el-button  type="warning" round>{{$t('Please Login first')}}</el-button>
                        </nuxt-link>
                        </el-col>
                         </div>
                            <div v-else class="bet_login_btn">
                            <el-col :span="10">
                                  <el-button    type="warning" getHello="getHello" class="bet_btn_login" @click="bet('ruleForm')" round >{{$t('Bet')}}</el-button>
                            </el-col>


                            </div>
                        </el-row>
                              </el-header>
       <el-main>
            <div class="longText" id="hidingScrollBar">
              <div class="hideScrollBar_bet">
                   <button @click="submitForm">click</button>
                    
                    <ul class="number_list">
                        
                        <li v-for="(item, index) in book_data" :key="index" v-bind:class="[item.state.opened ? 'dd-item open' : 'dd-item']">
                         
                                     <div class="dd-handle"
                                @click="item.state.opened = !item.state.opened">
                                <label :for="item.text" class="hide_input">
                                    <input type="checkbox"
                                    :disabled="item.state.disabled" 
                                    :name="item.img" 
                                    :checked="item.state.selected" 
                                    @click="item.state.selected = !item.state.selected"
                                    @change="parentChange(item, item.state.selected)"
                                    id="image-check">

                                    <img :src="item.img" width="100">
                                </label>
                                
                            </div>
                            
                            <ul v-if="item.children.length != 0" class="number_list_item">
                                <li v-for="(children, index) in item.children" :key="index"   :data-id="children.id" class="dd-item">
                                    <div class="number_item button-group-pills text-center"  data-toggle="buttons">
                                        <label class="btn btn-default" >
                                        <input type="checkbox"  
                                            :value="children.number"
                                          
                                            v-model="children.state.selected"
                                            :name="children.text" 
                                            :checked="children.state.selected" 
                                            :disabled="children.state.disabled" 
                                            @click="children.state.selected = !children.state.selected">
                                    
                                            
                                            {{children.number}}
                                        </label>
                                    </div>
                                </li>
                                </ul>
                               
                           
                           
                        </li>
                    </ul>
                 
              
            </div>
        </div>
        </el-main>
            </el-form>
           
    </section>
    
</template>
<script>
export default {
    computed: {
  classObject: function () {
    return {
              active: this.isActive && !this.error,
    }
  }
    },
    mounted() {
          this.$axios.get('/v2/v1/threed/book')
              .then(response => {
                console.log(response.data)
               this.book_data = response.data
             
                
              })  
    },
    
    data() {

        return {
             ruleForm: {
                    amount:'',
                    check_btn: [],
                   
                },
            book_data:[],
             //items : this.tree,
               checkedNames: [],
               one:[]
        }
        
    },
    methods: {
        goBack() {
            this.$router.push(`/threeD/home?lang=${this.$store.state.locale}`); 
        },
         submitForm() {
              let data = []
              for(let child of this.book_data){
                  this.one = child
                    console.log(this.one.children[0].state.selected)
                      console.log(this.one.children[1].state.selected)

                        
                          
                            this.one.children.forEach(element => {
                                 if( this.one.children[0].state.selected == true &&  this.one.children[1].state.selected == true) {
                                    data.push(element.number);
                                    this.Bookthreed = data;
                               }
                            });
                     
            }
           console.log(this.Bookthreed)

        },
        parentChange(item, state){
            for(let child of item.children){
                child.state.selected = state
            }
        }
    }
}
</script>
<style>
    .holiday {
        border: 2px solid #FFEA72;
        border-radius: 13px;
        margin: 50px auto;
        background-image: linear-gradient(#3A4450, #151E28), linear-gradient(270deg, #3A4450, #3A4450 50%, #151E28 100%);
    }

    .holiday img {
        width:80px;
        height:auto;
    }
    .holiday p , .holiday h6 , .holiday span{
        color:#fff;
    }
    .holiday_btn {
        background: linear-gradient(#24A7EC, #1C55C8);
        color:#fff;
        font-weight: bold;
        border:0;
        margin:10px auto;
    }
    .bet_container .el-header {
        color:#fff;
        padding:20px;
        position: fixed;
        right:0;
        max-width: 480px;
        width:100%;
        left:0;
        top:0;
    }
  
    .bet_footer .el-button {
        background: linear-gradient(#FDD164, #BB8834);
        color:#4D2707;
        font-size: 17px;
        font-weight: bold;
        border:unset;
        width:100%;
        margin-top:15px;
        border-radius: 36px;
    }
    .bet_footer .bet_btn_login {
        width:120px;
    }
    /* .bet_login_btn {
        padding-top:10px;
    } */
    
    .el-checkbox-button.is-checked .el-checkbox-button__inner {
            color:#000;
            background-color:#FEDC54;
            border-color: #FEDC54;
            -webkit-box-shadow: -1px 8px 56px -12px rgba(0,0,0,0.75);
            -moz-box-shadow: -1px 8px 56px -12px rgba(0,0,0,0.75);
            box-shadow: -1px 8px 56px -12px rgba(0,0,0,0.75);
    }
    .bet_container .el-checkbox-button__inner 
    {
        -webkit-box-shadow: -1px 8px 56px -12px rgba(0,0,0,0.75);
        -moz-box-shadow: -1px 8px 56px -12px rgba(0,0,0,0.75);
        box-shadow: -1px 8px 56px -12px rgba(0,0,0,0.75);
        border: 0;
        margin: 7px;
        border-radius: 10px;
        padding: 14px;
        width:42px;
        height:42px;
        color: #e0dddd;
        background:#14612D;
        font-weight: bold;
    }
    .el-checkbox-button:first-child .el-checkbox-button__inner {
          border-radius: 10px;
          border-left:unset;
          
    }
    .el-checkbox-button:last-child .el-checkbox-button__inner {
         border-radius: 10px;
    }
    .bet_container .el-header {
        background: #2A612D;
        height:auto !important;
    }
    .el-page-header__left {
        margin:0;
    }
    /* .bet_input {
        margin-top:15px;
    } */
    .fast_btn {
        background: #D4E2FF;
        color: green;
        width:90%;
       
    }
 
    .bet_login_btn  .el-button.is-round{
        width:100%;
        background: linear-gradient(#FDD164, #BB8834);
        font-size: 17px;
        font-weight: bold;
        color:#4D2707;
        
    }
    .bet_container  .el-input__inner{
       text-align: right;
       font-size:20px;
    }
  
    .el-input-group__prepend {
        color:#000;
        font-weight: bold;
        font-size:22px;
    }
    /* .all_btn {
        text-align: center;
        height:100vh;
    } */
    .hideScrollBar_bet {
        width: 100%;
        height: 100%;
        overflow: auto;
        margin-left: 17px;
        padding-right: 28px;
        padding-top: 190px;
        padding-bottom:30px;
       
        
    }
    .balance_amount {
        color:#fff;
        float: left;
        font-size: 13px;
        text-align: right;
        padding:3px 10px 10px 0;
    }
    .balance_amount img {
        width:30px;
        height: auto;
    }
    .bet_close_time {
        font-size: 13px;
        text-align: center;
        padding-top:8px;
        
    }
    .betclose_text {
        color:#CCCCCC;
    }
    .bet_container .el-dialog {
        background-color: #232C36;
        border-radius: 32px;
        border:2pt solid #FFEA72;
        max-width: 480px;
        z-index: 99;
       
        
    }
    .modal_bet .el-button {
      
        background: #555555;
        color:#fff;
        font-weight: bold;
    }
    .modal_bet .el-dialog__headerbtn .el-dialog__close {
        color:green;
        font-size: 26px;
        font-weight: bold;
    }
    .modal_bet .el-row {
        margin:3px auto;
    }
    .modal_bet p {
        color:#CCCCCC;
        margin-top:10px;
    }
    .v-modal {
        z-index: 0 !important;
    }
   .select_number .el-button {
       width:23px;
       margin:0;
       margin-top:3px;
   }
   .single_btn .el-button {
       width:44px;
   }
   .select_number_two .el-col-5 {
       width:19.83333%;
   }
   .select_number_two .el-button {
       width:53px;
   }
   .con_power {
       text-align: left;
   }
   .con_power .el-button {
       width:100%;
       margin:10px 0 0 0;
       text-align: left;
       padding-left:10px;
   }
   .bet_off {
       cursor: no-drop !important;
       display: none;
   }
   @media screen and (max-width:320px) {
       .select_number_two .el-button {
           width:46px;
       }
       .single_btn .el-button {
           width:39px;
       }
       .select_number .el-button {
           width:20px;
       }
       .balance_amount , .bet_close_time {
           font-size: 11px;
       }
       .bet_login_btn .el-button.is-round {
           font-size: 12px;
       }
       .bet_container .el-header {
           padding:15px;
       }
       .bet_container .el-input__inner {
           height:36px;
       }
       .fast_btn {
           padding:12px;
           font-size: 10px;
       }
      
   }
    @media screen and (max-width:290px) {
         .select_number_two .el-button {
           width:46px;
       }
       .single_btn .el-button {
           width:39px;
       }
       .select_number .el-button {
           width:20px;
       }
       .balance_amount , .bet_close_time {
           font-size: 10px;
       }
    }
   @media screen and (max-width:414px) {
      .select_number .el-button {
          width:26.5px;
      }
       .balance_amount , .bet_close_time {
           font-size: 11px;
       }
       .bet_login_btn .el-button.is-round {
           font-size: 12px;
       }
       .bet_container .el-header {
           padding:15px;
       }
       .bet_container .el-input__inner {
           height:36px;
       }
       .fast_btn {
           padding:12px;
           font-size: 10px;
       }
   }
   @media screen and (max-width:360px) {
      .select_number .el-button{
          width:23.3px;
      }
   }
    @media screen and (max-width:375px) {
      .select_number .el-button{
          width:23px;
      }
   }
    @media screen and (min-width:480px) {
      .select_number .el-button{
          width:33.2px;
          
      }
      .select_number_two .el-button {
          width:74px;
      }
   }


 .number_list , .number_list_item{
        padding:0;
        margin:0;
        text-align: center;
        
    }
    .number_list li  {
        padding:0 3px;
        list-style: none;
        display: inline-block;
      
    }
    .number_list_item {
        display: inline-flex;
    }
    .hide_input input[type=checkbox], input[type=radio] {
        display: none;
    }
    .hide_input img {
        width:90px;
          border-top-right-radius: 9px;
           border-top-left-radius: 9px;
    }
    .number_list_item li {
        /* padding:20px;
        width:60px; */
    }
body {
  font-family: "Open Sans";
}

.button-group-pills .btn {
  border-radius:9px;
  line-height: 1.2;
 
  border-color: #bbbbbb;
  background-color: #FFF;
  color: #14a4be;
}
/* .button-group-pills .btn.active {
  border-color: #14a4be;
  background-color: #14a4be;
  color: #FFF;
  box-shadow: none;
} */


</style>
