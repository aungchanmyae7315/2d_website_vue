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
                        <el-button v-if="this.Bookthreed.length != 1">
                            hello
                        </el-button>
                    
                        <el-button v-else type="button"  :indeterminate="isIndeterminate"   v-model="checkAll" @click="rBtn(Bookthreed);  dialogFormVisible_rBtn = true"   class="fast_btn" >R</el-button>
                          <el-dialog
                         
                            title="Tips"
                        
                            :show-close="false"
                            :close-on-click-modal = "false"
                            :visible.sync="dialogFormVisible_rBtn"
                            width="90%">    
                           <span>dd{{this.Bookthreed}}</span>
                            <el-checkbox-group v-model="checkboxModelbox" @change="handleCheckedCitiesChange">
                                <el-checkbox-button v-for="(number , index) in this.Bookthreed" :key="index" :label="number" >
                                    {{number}}
                                </el-checkbox-button>
                            </el-checkbox-group>
                            
                            <span slot="footer" class="dialog-footer">
                                <el-button @click="dialogFormVisible_rBtn = false;  checkboxModelbox = []">Cancel</el-button>
                                <el-button type="primary"   @click=" submitAll();dialogFormVisible_rBtn = true">Confirm</el-button>
                            </span>
                        </el-dialog>
                  
            
                </el-col>
                <el-col :span="18">
                    
                            <el-form-item style="margin-bottom:10px;"
                            
                            prop="amount"
                            :rules="[
                                 { required: true, message: $t('amount_required') },
                                
                            ]"
                            
                            >  
                          
                                <el-input @keypress.enter.native="submitForm('ruleForm')" class type="number" placeholder="100 Ks(min)"  v-model="ruleForm.amount"  ></el-input>
                            
                            </el-form-item>
                </el-col>
            </el-row>

            <el-row> 
                  <nuxt-link :to="`${$t('/wallet')}?lang=${$store.state.locale}`">
                        <el-col :span="13" v-if ="!$store.state.isLoggedIn" > <div class="balance_amount"></div></el-col>
                        <el-col :span="13" v-else> <div class="balance_amount"><img src="~static/images/amount_icon.png"  alt="">{{$t('you_balance')}}:  {{this.thousands_separators(myWallet)}} {{$t('kyat')}} </div></el-col>
                  </nuxt-link>
                 <el-col :span="11" class="bet_close_time"> 
                     <div id="app-timer" class="count_time_threed">
                      <ul>
                       
                        <li>
                              <h5>ထီပိတ်ရက်ကျန်ချိန်</h5>
                        </li>
                        <li v-if="this.holiday == 0">
                            
                              <div v-for="(time ,k) in times" :key="k">
                                <h6 class="card-title">{{time.time}}</h6>
                              </div>
                     
                        </li>
                         <li v-else>
                             <h5>{{$t('threed_bet_close')}}</h5>
                             
                      
                        </li>
                      </ul>
                    </div>
                    
                      </el-col>
            </el-row>
             <el-row> 
                  <nuxt-link :to="`${$t('/share')}?lang=${$store.state.locale}`">
                        <el-col :span="14" v-if ="!$store.state.isLoggedIn" > <div class="balance_amount"></div></el-col>
                        <el-col :span="14" v-else> <div class="balance_amount">  </div></el-col>
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
                                  <el-button    type="warning" getHello="getHello" class="bet_btn_login" @click="submitForm('ruleForm')" round >{{$t('Bet')}}</el-button>
                            </el-col>


                            </div>
                        </el-row>
                              </el-header>
       <el-main>
            <div class="longText" id="hidingScrollBar">
              <div class="hideScrollBar_bet">
                  
                    
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
                                    <div class="number_item button-group-pills text-center" @click="LengthCount()"  data-toggle="buttons">
                                     
                                        <label class="hide_input" @click="children.state.selected = !children.state.selected"  v-bind:class="[children.state.selected ? 'dd-item open' : 'dd-item']"    >
                                        <input type="checkbox"  
                                            :value="children.number"
                                           
                                            v-model="children.state.selected"
                                            :name="children.text" 
                                            :checked="children.state.selected" 
                                            :disabled="children.state.disabled" 
                                            >
                                    
                                            
                                            {{children.number}}
                                        </label>
                                    </div>
                                </li>
                                </ul>
                               
                           
                           
                        </li>
                    </ul>
                 {{this.Bookthreed}}Hello
              
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
         this.updateIsLoggedIn();
          this.$axios.get('/v2/v1/threed/book')
              .then(response => {
               this.book_data = response.data
             
                
              })  
    },
    created() {

          let token = localStorage.getItem('token');
        if(token) {
             this.$axios.get("/v2/v1/profile",
                    {headers: {
                               "Authorization": "Bearer "+token
                         }
                        })
                    .then(response => {
                     
                     this.profile = response.data.data
                     this.myWallet = this.profile.wallet
                      this.myPointWallet = this.profile.point
                    this.server_time = response.data.data.time;
                })
        } 
          this.$axios.get('/v2/v1/threed/count_down')
              .then(response => {
                  this.endTime = response.data.next_start_date
                  this.holiday = response.data.data
              }) 
        this.updateTimer();

        let timeinterval = setInterval(this.updateTimer, 1000);
    },
    data() {

        return {
            checkAll: false,
             isIndeterminate: true,
            checkboxModelbox:true,
            Bookthreed:true,
            dialogFormVisible_rBtn:false,
              getOpen:'',
              myWallet:'',
              endTime: '',
            times: [
                { id: 0, text: "D", time: 45 },
                { id: 1, text: " H", time: 35 },
                { id: 2, text: "M ", time: 25 },
                { id: 3, text: "S", time: 15 }
            ],
            holiday:'',
            a: 1,
            progress: 50,
             isActive: true,
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
        handleCheckedCitiesChange(val) {
             
            this.checkboxModelbox = val ? this.checkboxModelbox : [];
            
      
      },
       LengthCount() {
         
               
                var elements = document.querySelectorAll('input[type="checkbox"]:checked');
                var checkedElements = Array.prototype.map.call(elements, function (el, i) {
                    return el.value;
                });
                   
                checkedElements = checkedElements.filter(e => e !== 'on' && e !== []); // will return ['A', 'C']
                this.Bookthreed = checkedElements;
                console.log(this.Bookthreed)


        },
         thousands_separators(num){
            //console.dir(num);
          if (num == undefined){
              return "";
          }  
          var num_parts = num.toString().split(".");
          num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          return num_parts.join(".");
        },
         updateTimer: function(){
            this.getTimeRemaining();
            this.updateProgressBar();
        },
        getTimeRemaining: function() {
            let t = Date.parse(new Date(this.endTime)) - Date.parse(new Date());
            this.times[3].time = Math.floor(t / 1000 % 60) ;
            this.times[2].time = Math.floor(t / 1000 / 60 % 60) + ':';
            this.times[1].time = Math.floor(t / (1000 * 60 * 60) % 24) +':';
            this.times[0].time = Math.floor(t / (1000 * 60 * 60 * 24)) +' '+'ရက်' + ' ';
        },
        updateProgressBar: function(){
        //TODO fix progress bar
        // let interval = Date.parse(new Date(this.endTime)) - Date.parse(new Date());
        // this.progress = Math.floor(this.currentTime / Date.parse(new Date(this.endTime))*100);
        },
         
        updateIsLoggedIn() {
            this.$store.commit('updateIsLoggedIn', this.hasUserInfo());
        },
        hasUserInfo() {
            return Boolean(localStorage.getItem('userInfo'));
        },
        goBack() {
            this.$router.push(`/threeD/home?lang=${this.$store.state.locale}`); 
        },
  
        submitAll() {
            console.log(this.checkboxModelbox)
        },
         submitForm(formName) {
              this.$refs[formName].validate((valid) => {
             if (valid) {
                var elements = document.querySelectorAll('input[type="checkbox"]:checked');
                var checkedElements = Array.prototype.map.call(elements, function (el, i) {
                    return el.value;
                });
                checkedElements = checkedElements.filter(e => e !== 'on'); // will return ['A', 'C']
                this.Bookthreed = checkedElements;
                console.log(this.Bookthreed)
                var data = this.ruleForm.amount  
                this.$store.commit('betAmountThreeD',data);
                var data = this.Bookthreed  
                this.$store.commit('getBetThreeD', data);
                  this.$router.push(`/threeD/threeDremark?lang=${this.$store.state.locale}`); 
          }else{
              console.log('valid !!')
          }
        });

             
            

        },
          rBtn(Bookthreed) {
             
           
            //   alert(Bookthreed)
            var str ='123'
            var res = str.split(" ", 3);
            console.log(res)
          
          const permArr = [],usedChars = [];
          const rotate = (input) => {
            let ch;
            input.forEach((val,index) =>{
              ch = input.splice(index, 1)[0];
              usedChars.push(ch);
              if (input.length == 0) {
                permArr.push(usedChars.slice());
              }
              rotate(input);
              input.splice(index, 0, ch);
              usedChars.pop();
            })
            return permArr
            
          };

          let unique = (value, index, self) => { 
              return self.indexOf(value) === index;
          }

          let regex = new RegExp(',', 'g');
          let data = [];
          let result = rotate(Bookthreed);

          result.forEach(arr => {
            data.push(arr.toString().replace(regex, ''));
          })
          data = data.filter(unique);
          this.Rnumber = data
          console.log('lee ')
          console.log(this.Rnumber)
        console.log('pal')


        // this.checkAll = true
        // this.bet_number = true
        // this.isIndeterminate = false;
        // this.bet_number = threed ? this.Rnumber : [];
        // this.isIndeterminate = false;

    },
     

     
        parentChange(item, state){
            for(let child of item.children){
                child.state.selected = state
            }
        },
    //      submitThreed(formName) {
    //     this.$refs[formName].validate((valid) => {
    //       if (valid) {
             
    
    //            var data = this.all_number  
      
     
    //      this.$store.commit('getBetThreeD', data);
    //     var data = this.ruleForm.amountThreeD  
    //     this.$store.commit('betAmountThreeD',data);

    //     this.$router.push(`/threeD/threeDremark?lang=${this.$store.state.locale}`); 
    //       } else {
    //         console.log('error submit!!');
    //         return false;
    //       }
    //     });
    
     

    // },
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
        padding-top: 220px;
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
        position: relative;
        top:-8px;
    }
    .number_list_item .label {
       
        color:#fff;
    }
    .number_list_item .dd-item {
         margin:0;
         padding-right:0;
         padding-left:0;
         max-width: 480px;
         width:40px;
         height:32px;
         line-height: 29px;
         border-bottom-left-radius:4px;
          border-bottom-right-radius:4px;
         color:#fff;
        background-color: #262626;
    }
    .hide_input input[type=checkbox], input[type=radio] {
        display: none;
    }
    .hide_input img {
        width:80px;
        border-top-right-radius: 9px;
        border-top-left-radius: 9px;
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
.dd-item.open {
  border-color: #14a4be;
  background-color: #14a4be;
  color: #FFF;
  box-shadow: none;
}
 input[type=checkbox]:checked{

    border-color: #14a4be;
  background-color: #14a4be;
  color: #FFF;
  box-shadow: none;
}
.count_time_threed  ul{
  padding:13px 0;
  margin:0;
  list-style: none;
  text-align: right;
}
.count_time_threed ul li {
  display:flex;
}
.count_time_threed h5 {
  font-size:11px;
  color:#fff;
  font-weight: bold;
}
.count_time_threed h6 {
  color:#FFEA72;
  font-size:12px;
  font-weight: bold;
  margin:0;
}
.model_box_numbers {
    padding:0;
    margin:0;
}
.model_box_numbers li {
    list-style: none;
    color:#fff;
    font-weight: bold;
}

</style>
