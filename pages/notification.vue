<template>
   <div class="main_container notification">
      <el-header>
          <el-page-header @back="goBack" content="Notification">
        </el-page-header>
      </el-header>

    </div>
</template>

<style >
     .notification .el-page-header {
        line-height: 43px;
        color:#fff;
        padding:0 20px;
    }
    .notification .el-page-header__content {
        color:#fff;
    }
</style>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            notification:'',
        }
    },
    methods: {
        goBack() {
            this.$router.push('/')
      },
     },
     created() {
        //    axios.get('https://build.seinlucky.com/api/v1/notification')
           
        //   .then(response => {
        //     console.log(this.notification = response.data.data)
        //   })


         let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjYxNjk3Y2E5OTcwMDI1ZWYwYzIxYzc1YzgwNjcyMTViNDk4ZTEzM2RmNmI0MjlhYzM0MDBlMGQ3NmZlNjI1ZDcxZDY1OGJjZjRjOWFmMDcxIn0.eyJhdWQiOiIxIiwianRpIjoiNjE2OTdjYTk5NzAwMjVlZjBjMjFjNzVjODA2NzIxNWI0OThlMTMzZGY2YjQyOWFjMzQwMGUwZDc2ZmU2MjVkNzFkNjU4YmNmNGM5YWYwNzEiLCJpYXQiOjE1ODIwMDA5MzMsIm5iZiI6MTU4MjAwMDkzMywiZXhwIjoxNjEzNjIzMzMzLCJzdWIiOiI2MSIsInNjb3BlcyI6W119.frZXVPGXsA0MO0VinvCCdX7JKFEDmoYA-i-srKVASxtNyGlL7bQOKfwS5hMQjr7j6L1_MebXYmvVla5rYpDeU_bD0r-8E8DBysL8j4x2w43yKjHz6pwnieEWuDq3IoWsjvLxk_zXTveeL9WGUqbhdNLQ3QIqwwM2lXH8PItT4hKf_9wJeolJWc8Hd8gAI4IExBL8z_ta8DQhB5CN4HglehtLB52u1xezSNp_y8Psxe5I4Gqy_UHdRmucwZlfZzPzzBVTkuOU3DZwdY7KNK5BHR0WrHc-ty_OPwmMJ0K74pNsSvlq8biF6NOeiQvbF4-X43jXGBpvG_smzXh5VH4FdJ5cvaJx-ZL37LkM3D3e7TEkjm-bQXXlKJOHrsAD1EntEz4cEp1bw39hry2Ti3iVsG6CvAPp1qzj2RrIFoQoQyHUR1qbiCagU6d6X3xoQxdWCfLMBcpimj5GEJRDgQPLDC50uGBFzG3CJZQmmLmDrAAl5gghiubIp7zJCHQLAZCMzyjA7V-cwiyu_pHuIgIzwcBAPCKAeZWMSbJFovaMxzEmXmQ7_5QiWRLsdMRft6v670q3spqenGadK5XmBNReLKhvpEaOc3fKFXQU8VulRq0stoJ1kbnaVLcec8GyI8WtWYNr5DKnahiJqIHXc7J8rH9M4O9RSJJcga42nFWdDoU';
                    axios.get("https://build.seinlucky.com/api/v1/notification",[], 
                    {headers: {
                            'Authorization': "Bearer ${localStorage.getItem('access_token')}"
                         }
                        })
                    
                    .then(response => {
                     console.log(this.notification = response.data.data)
                   
                })
     }
}
</script>