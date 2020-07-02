<template>
    <main class="threeDremark">
       <el-header>
           <!-- <nuxt-link  :to="`${$t('bet')}?lang=${$store.state.locale}`"> -->
               <el-page-header title="" @back="goBack"  content="ထိုးမည့်ဂဏန်းများ">
                </el-page-header>
                <i class="el-icon-plus plus_icon"  @click="dialogVisible = true"></i>
           <!-- </nuxt-link> -->
      </el-header>
         <div>

<div id="app">
  <div class="container">
    <br>
       <div class="form-inline" action="#">
          <el-form :model="numberValidateForm"  ref="numberValidateForm"  class="demo-ruleForm">
              <el-dialog
          :title="$t('add_bet_number')"
          :visible.sync="dialogVisible"
          width="90%">
          <span>
            <el-form-item
                :label="$t('number')"                  
                  prop="item.number"
                  :rules="[
                      { required: true, message: $t('bet_number_required') },
                      
                  ]"
                  
                  >  
                  <el-input id="form-name" type="number"  pattern="/^-?\d+\.?\d*$/" onKeyPress="if(this.value.length==3) return false;" :placeholder="$t('bet_number_add')" v-model.number="numberValidateForm.item.number"></el-input>
            </el-form-item>
             <el-form-item
                    :label="$t('odds')"                  
                  prop="item.odds"
                  
                  
                  >  
                  <el-input id="form-name" disabled="" type="number"  pattern="/^-?\d+\.?\d*$/" onKeyPress="if(this.value.length==3) return false;" :placeholder="$t('odds')" v-model.number="numberValidateForm.item.odds"></el-input>
            </el-form-item>
            <el-form-item
                    :label="$t('bet_amount')"                         
                  prop="item.amount"
                  :rules="[
                      { required: true, message: $t('amount_required') },
                      
                  ]"
                  
                  >  
                  <el-input id="form-name" type="number"  :placeholder="$t('bet_amount_add')" v-model.number="numberValidateForm.item.amount"></el-input>
            </el-form-item>
          </span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">{{$t('cancel_add')}}</el-button>
            <el-button type="primary" @click="addItem('numberValidateForm')">{{$t('add')}}</el-button>
          </span>
        </el-dialog>
       
          <!-- <input type="text" id="form-name" v-model="ruleForm.number" placeholder="Bet Number" class="form-control"> 
          <input type="text" v-model="ruleForm.amount" placeholder="Bet Amount" class="form-control" v-on:keyup.enter="addItem"> -->
          </el-form>
          <!-- <button @click="addItem('ruleForm')" class="btn btn-dark"><i class="el-icon-circle-plus-outline"></i></button>
            -->
            </div>

            <table class="table table-striped table-bordered table-sm">
              <thead class="thead-light">
                <th>{{$t('no')}}</th>
                <th>{{$t('odds')}}</th>
                <th>{{$t('Amount')}}</th>
                <th>{{$t('edit_delete')}}</th>
              </thead>
              <tr v-for="(item, index) in items" :key="index">
                <td>
                    <div style="width:100%">
                  <input style="width:100%" v-if="item.edit" type="number" v-model="item.number"  v-on:keyup.enter="item.edit = !item.edit">
                  <span v-else>{{item.number}} </span>
                    </div>
                </td>
                 <td>
                    <div style="width:100%">
                  <input style="width:100%" disabled v-if="item.edit" type="number" v-model="item.odds"  v-on:keyup.enter="item.edit = !item.edit">
                  <span v-else>{{item.odds}} </span>
                    </div>
                </td>
                <td >
                    <div style="width:100%">
                      <input style="width:100%" v-if="item.edit" type="number" v-model="item.amount" v-on:keyup.enter="item.edit = !item.edit">
                      <span v-else>{{item.amount}} </span>
                  </div>
                </td>
                <td >
                    <div style="width:100%;display:flex">
                      <button style="margin:5px;border-radius:50%;" v-if="!item.edit"  @click="item.edit = !item.edit" class="btn "><i class="el-icon-edit"></i></button>
                      <button style="margin:5px;border-radius:50%;" v-else  @click="item.edit = !item.edit" class="btn "><i class="el-icon-finished"></i></button>
                      <button  style="margin:5px;border-radius:50%;" @click="removeItem(index)" class="btn "><i class="el-icon-delete"></i></button>
                    </div>
                
                </td>
              </tr>
              <tfoot style="text-align:center;">
                 <td colspan="5" style="padding:10px"><span style="color:orange;font-weight:bold">စုစုပေါင်းထိုးငွေ </span> <span style="float:right"> {{total}} {{$t('kyat')}} </span></td>
              </tfoot>
              
            </table>
    
          <el-card class="myWallet_card">
                <p>လက်ကျန်ငွေ</p>
                <h6>{{this.myWallet}} {{$t('kyat')}}</h6>
          </el-card>
      </div>
        <div class="threed_betBtn">
            <el-button round @click="betAll" :disabled='submitted' type="info">{{$t('Bet')}}</el-button>
        </div>
     
        </div>     
      </div>
 
    </main>
</template>


<script>
import Vue from 'vue'
import CRUD from 'vue-element-crud'

Vue.use(CRUD)

export default {
  computed: {
  total: function(){
    return this.items.reduce(function(total, item){
      return total  + Number(item.amount)
    },0);
  }
},
    data() {
        return {
              submitted:false,
              dialogVisible: false,
              myWallet:'',
              amount:localStorage.getItem('amountThreeD'),
              item: {number: '', odds:'', amount:'', edit: 0},
              items:[],
               numberValidateForm: { 
                 item: {
                    number: '',
                    amount: '',
                    odds:'500',
                 }
                 
               },
        }
        
    },
    methods: {
        thousands_separators(num){
            var num_parts = num.toString().split(".");
            num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return num_parts.join(".");
          },
        addItem(formName){
      
          this.$refs[formName].validate((valid) => {

            if (valid) {
              
                this.items.push({number:this.numberValidateForm.item.number,odds:this.numberValidateForm.item.odds, amount:this.numberValidateForm.item.amount, edit:this.item.edit})
                this.item = [];
                $('#form-name').focus();
                this.dialogVisible = false
            } else {
            console.log('error Submit')
            
            }
        });

         },
        betAll() {
           var data=  {
             data:this.items
           }
           let token = localStorage.getItem('token');
          if(token) {
             this.$axios.post("/v2/v1/threed/bet",data,
                    {headers: {
                               "Authorization": "Bearer "+token
                         }
                        })
                    .then(response => {
                     this.submitted = true
                     if(response.data.status == 2) {
                       this.submitted = false
                        this.$message({
                            showClose: true,
                          message: this.$t('amount_invalid'),
                          type: 'warning',
                        //   duration:0
                        });
                     }else if (response.data.status == 6) {
                       this.submitted = false
                       this.$message({
                            showClose: true,
                          message: response.data.data,
                          type: 'warning',
                           duration:10000
                        });
                    }else if (response.data.status == 7) {
                       this.submitted = false
                        const h = this.$createElement;
                       this.$message({
                          message: h('p', null, [
                            h('span', null, ),
                            h('i', { style: 'color: green' },'3D' + this.$t('number')+' '+(response.data.data)+' '+this.$t('reach_highest_bet_limit'))
                          ])
                        });

                    } else if (response.data.status == 8) {
                        this.submitted = false
                        const h = this.$createElement;
                       this.$message({
                          message: h('p', null, [
                            h('span', null, ),
                            h('i', { style: 'color: green' },'3D' + this.$t('number')+' '+(response.data.data.number)+' '+this.$t('availabel_bet_amount')+(response.data.data.amount)+ this.$t('kyat'))
                          ])
                        });
                   
                     }
                    else if (response.data.status == 5) {
                       this.submitted = false
                       this.$message({
                            showClose: true,
                          message: response.data.data,
                          type: 'warning',
                           duration:10000
                        });
                    } else {
                      this.submitted = true
                          this.$router.push(`/threeD/dream_bet_success?lang=${this.$store.state.locale}`);
                    } 
                })
                 .catch(error => {
                   this.$message({
                            showClose: true,
                           message: 'ထီထိုးငွေပမာဏကို အနည်းဆုံး ၁၀၀ ထိုးရပါမည်',
                          type: 'warning',
                        });
                });
          } 
        },
    removeItem(index){
      this.items.splice(index, 1)
    },
        goBack() {
            this.$router.push(`/threeD/home?lang=${this.$store.state.locale}`); 
        }
    },
    created() {
        this.bet_number = localStorage.getItem('bet_numberThreeD')
        var data= {
              number:localStorage.getItem('bet_numberThreeD'),
              amount:localStorage.getItem('amountThreeD'),
          }
          this.$axios.post("/v2/v1/threed_get_odds",data,
                  {
              
                      })
                  .then(response => {
                   console.log(response.data)
                      this.$nuxt.$loading.finish()
                      this.items = response.data.data
              })
           let token = localStorage.getItem('token');
          if(token) {
             this.$axios.get("/v2/v1/profile",
                    {headers: {
                               "Authorization": "Bearer "+token
                         }
                        })
                    .then(response => {
                      this.profile = response.data.data
                      this.myWallet = this.thousands_separators(this.profile.wallet)
                      this.myPointWallet = this.thousands_separators(this.profile.point)
                })
        }  
    }
}
</script>

<style>
  .threeDremark .el-header {
    background: #fff;
    color:#000;
    padding:20px;
  }
  .plus_icon {
    position: relative;
    top: -22px;
    float: right;
    color:#1F76D6;
    font-size: 21px;
    font-weight: bold;
  }
  .myWallet_card p {
    color:#1F76D6;
  }
  .myWallet_card {
    text-align: center;
  }
  .myWallet_card h6 {
    font-weight: bold;
  }
  .threed_betBtn {
    text-align: center;
    margin:10px auto 30px auto;
    padding:0 20px;
  }
  .threed_betBtn .el-button {
    background: #158220;
    width:100%;
  }
</style>