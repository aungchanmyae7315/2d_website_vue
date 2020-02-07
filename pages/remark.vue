<template>
    <main class="remark">
        <h4>Remark</h4>
         <div class="longText_remark" id="hidingScrollBar_remark">
            <div class="hideScrollBar_remark">
                <el-card class="box-card">
                      <el-form    class="demo-ruleForm" >
                          <el-form-item
                                label="Name"
                                prop="name"
                                :rules="[
                                    { required: true, message: 'name is required'},
                                    
                                ]"
                                
                                >  
                                    <el-input type="name" placeholder="Enter your name" v-model="name"  ></el-input>
                                
                                </el-form-item>
                             <el-form-item
                                label="Phone"
                                prop="phone"
                                :rules="[
                                    { required: true, message: 'phone is required'},
                                    
                                ]"
                                
                                >  
                                    <el-input type="phone" placeholder="Enter your phone" v-model="phone"  ></el-input>
                                
                                </el-form-item>
                      </el-form>
                   
                </el-card>
        
                <el-card>
                   <el-table
                        :data="tableData"
                        border
                        show-summary
                        style="width: 100%">
                    
                        <el-table-column
                        prop="name"
                        label="Name">
                        </el-table-column>
                          <el-table-column
                        prop="name"
                        label="Name">
                        </el-table-column>
                        <el-table-column
                        
                        prop="amount1"
                       
                        label="Amount 1">
                        </el-table-column>
                       
                       
                    </el-table>
                </el-card>
            </div>
         </div>
    </main>
</template>


<script>
export default {
    data() {
        return {
             tableData: [{
          id: '12987122',
          name: 'Tom',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        }, {
          id: '12987123',
          name: 'Tom',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        }, {
          id: '12987126',
          name: 'Tom',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }]

        }
    },
     methods: {
      getSummaries(param) {
        const { columns, data } = param;
        const sums = [];
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = 'Total Cost';
            return;
          }
          const values = data.map(item => Number(item[column.property]));
          if (!values.every(value => isNaN(value))) {
            sums[index] = '$ ' + values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
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
    }
    .remark h4 {
        font-size: 19px;
        font-weight: bold;
        margin-top:30px;
    }
.remark .el-card {
    margin:20px auto;
}


.longText_remark{
  max-width: 480px;
  width: 100%;
  height: 100%;
  margin: auto;
  /* text-align: justify; */
}

/*------THE TRICK------*/
/* #hidingScrollBar_remark{
  overflow: hidden;
} */
.hideScrollBar_remark{
  width: 100%;
  height: 100%;
  overflow: auto;
  margin-left: 15px;
  padding-right: 28px; /*This would hide the scroll bar of the right. To be sure we hide the scrollbar on every browser, increase this value*/

 
}
</style>