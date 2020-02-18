<template>
    <main class="remark">
       
         <div class="longText_remark" id="hidingScrollBar_remark">
            <div class="hideScrollBar_remark">
               <h4>Remark</h4>  
                <el-card class="box-card">
                      <el-form    class="demo-ruleForm" >
                          <el-form-item
                                label="Name"
                                prop="name"
                                
                                
                                >  
                                    <el-input type="name" placeholder="Enter your name" v-model="name"  ></el-input>
                                
                                </el-form-item>
                             <el-form-item
                                label="Phone"
                                prop="phone"
                               
                                >  
                                    <el-input type="phone" placeholder="Enter your phone" v-model="phone"  ></el-input>
                                
                                </el-form-item>
                      </el-form>
                   
                </el-card>
        
                <el-card>
                   <el-table
                      :data="tableData"
                      border
                      height="100%"
                      :summary-method="getSummaries"
                      show-summary
                      style="width: 100%; margin-top: 20px">
                   
                      <el-table-column
                        prop="bets"
                        label="Bet">
                      </el-table-column>
                      <el-table-column
                        prop="odds"
                        label="odds">
                      </el-table-column>
                      <el-table-column
                        prop="amount"
                        label="Amount">
                      </el-table-column>
                    
                    </el-table>
                 
                </el-card>
                 <div class="btn_group">
                      <nuxt-link to="/bet">
                            <el-button type="default" round>Back</el-button>
                      </nuxt-link>
                    <nuxt-link to="/">
                          <el-button type="submit"  @click="submit_bet" class="bet_submit" round>  Submit</el-button>
                    </nuxt-link>
                    
                  </div>
            </div>
         </div>
    </main>
</template>


<script>
import axios from 'axios'
export default {

  getters: {},
  mutations: {},
  actions: {},
  mounted () {
   
     
    
    const bets = this.$store.state.check_btn;
     const bet_amount = this.$store.state.input_amount;
  
 console.log(bets);
  console.log(bet_amount);
    
  
},
    data() {
        return {
          bets : this.$store.state.check_btn ? null:'--',
          check_btn:[],
          bet_amount: this.$store.state.input_amount ? null:'--',
          bets:'',
          name :'',
          phone:'',

          tableData: [
          {

            bets : this.$store.state.check_btn,
            odds: '3.2',
            amount:this.$store.state.input_amount ,
          }, ]
        }
    },
    
     methods: {
       
       submit_bet() {
         axios.post('https://build.seinlucky.com/api/v1/2d/bet', {
                    name: this.name,
                    phone: this.phone,
                    bets : this.$store.state.check_btn[0],
                    amount:this.$store.state.input_amount,
                    
                })
                     .then(response => {
                          console.log(response);
                  // if(response.data.result == '0'){
                  //   this.error_message = response.data.data,
                  //   console.log(this.message)
                  //   this.error = 'Please try again'
                  //   this.$notify.error({
                  //     title: 'Error',
                  //     message: this.error_message
                  //   });
                  // }else {
                  //    this.userInfo = response.data,
                  //   this.$store.commit('logIn', this.userInfo),
                  //    this.success_message = response.data.data,
                     
                  //    this.$notify({
                  //       title: 'Success',
                  //       message: this.success_message,
                  //       type: 'success'
                  //     });
                  //     this.$router.push('/');
                  // }
                 
                })
       },
      getSummaries(param) {
        const { columns, data } = param;
        const sums = [];
        columns.forEach((column, index) => {
           if (index === 0) {
            sums[index] = ' ';
            return;
          }
          if (index === 1) {
            sums[index] = 'Total';
            return;
          }
          
          const values = data.map(item => Number(item[column.property]));
          if (!values.every(value => isNaN(value))) {
            sums[index] = 'Ks ' + values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return  prev + curr;
              } else {
                return prev;
              }
            }, 0);
          } else {
            sums[index] = 'N/A';
          }
        });

        return sums;
      }
    }
}
</script>
<style>
    .remark {
        text-align: center;
     
        max-width: 480px;
        width:100%;
        height:100vh;
    }
    .remark h4 {
        font-size: 19px;
        font-weight: bold;
        margin-top:30px;
    }
.remark .el-card {
    margin:20px auto;
}
.remark .el-form-item {
  margin-bottom:0;
}

.el-button--default {
 
  background-color:#EEEEEE;
  color:#000;
}

.remark .btn_group {
    position: fixed;
    right: 0;
    bottom: 22px;
    left: 0;
}
.bet_submit {
  background-color:#158220;
  color:#fff;
  font-weight: bold;
}
.longText_remark{
  max-width: 480px;
  width: 100%;
  height: 100%;
  margin: auto;
  /* text-align: justify; */
}

/*------THE TRICK------*/
#hidingScrollBar_remark{
  overflow: hidden;
}
.hideScrollBar_remark{
  width: 100%;
  height: 100%;
  overflow: auto;
  margin-left: 15px;
  padding-bottom:30px;
  padding-right: 28px; /*This would hide the scroll bar of the right. To be sure we hide the scrollbar on every browser, increase this value*/

 
}
</style>