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

                <table class="table" >
                    <thead>
                        <tr>
                        <th>Bet</th>
                         <th>Odds</th>
                         <th>Amount</th>
                       
                        </tr>
                    </thead>
                    <tbody  >
                        <tr  v-for="(odd,o) in bet_odds" :key="o">
                      
                        <th>{{odd.number}}</th>  
                         <th>{{odd.times}}</th>  
                         <th>{{bet_amount}}</th> 
                      
                        </tr>
                    </tbody>
          </table>
                 
                 
                </el-card>
                 <div class="btn_group">
                     
                            <el-button type="default" @click="back_bet" round>Back</el-button>
                     
                  
                          <el-button type="submit"  @click="submit_bet" class="bet_submit" round>  Submit</el-button>
                  
                    
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

},
    data() {
        return {
          bet_amount: localStorage.getItem('bet_amount'),
          name :'',
          phone:'',
          bet_odds:'',

        }
    },
    created() {
      
           var data= {
              bets:localStorage.getItem('check_btn'),
          }
          axios.post("https://build.seinlucky.com/api/v2/v1/get_odds",data,
                  {
              
                      })
                  .then(response => {
                  this.bet_odds = response.data

              })
    
    },
    
     methods: {
         
       back_bet() {
         
         localStorage.removeItem('odds');
           this.$router.push(`bet?lang=${this.$store.state.locale}`); 
       },
       
       submit_bet() {
          let token = localStorage.getItem('token');

                var data = {
                    client_name:this.name,
                    client_phone:this.phone,
                    twod_id:  localStorage.getItem('check_btn'),
                    amount: localStorage.getItem('bet_amount') ,
                }
          axios.post("https://build.seinlucky.com/api/v2/v1/2d_web/bet",
                           data,
                    {
                           

                        headers: {
                               "Authorization": "Bearer "+token
                         },
                          
                        })
                
                    .then(response => {
                      this.bet = response.data.data
                    this.$router.push(`bet_success?lang=${this.$store.state.locale}`);
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
    border-radius: 17px;
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
  padding-bottom:50px;
  padding-right: 28px; /*This would hide the scroll bar of the right. To be sure we hide the scrollbar on every browser, increase this value*/

 
}
</style>