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


         let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImIzYjZiN2FjOWU0NjkwYWRiMjk4MDlhOTM2ZmEyYjhmNTE3ZTkzZWYzNWEyMjUzYWVmYjU1NjA4YjdmNjM4NjI0ZmI3NGIwZGNjNDc0Y2MwIn0.eyJhdWQiOiIxIiwianRpIjoiYjNiNmI3YWM5ZTQ2OTBhZGIyOTgwOWE5MzZmYTJiOGY1MTdlOTNlZjM1YTIyNTNhZWZiNTU2MDhiN2Y2Mzg2MjRmYjc0YjBkY2M0NzRjYzAiLCJpYXQiOjE1ODIwMDMxMDAsIm5iZiI6MTU4MjAwMzEwMCwiZXhwIjoxNjEzNjI1NTAwLCJzdWIiOiIyNyIsInNjb3BlcyI6W119.AIrMBypu-qp6TI79u9B26ovGNj6a2bF9oiZjht8C_amyBGmz1M3Kgd7oEseSbUge7lggDihcenjxVYHQ_AbGf6XMSW_PDYnyCT3a3SXpoTQI2sI7rv7Uo9z_uryjXkq-Jz6dgQQ2JrmujnIwm7u8mqFzwjFL-F8owDkSeP9ItETJreSmuRwazOL36rAnGNolJLBMscbWtkZ4UaTCLJsgoo8w0xLlKblOmWTvBztjvpwr4uA_AtGbNh0wTY3n1zi0BBVKnVI65jflZW7oK0Qrznfmp4FtdlZgtsplf4WANN0STq6kcPWbeAzhIdtgppKAxlN0e7tyUGxyWMl50LKiNLeD8InhsX_T2kq8dRsuEMN7oRIGIyKirUx6kRFVjK6__2cuhtlVbHepF5NuaAsKTAmrtvkOpZunReaHXVMoGtgaxwDzQMg9yH-gIlU7LJIdZuNWRp_R7q8kLzEyZUXquWXlQuwTdkRAxiCG90EwGXkjOwXikGCEm99Ehp-ERj2qm6czfEMdnRo6JVJTRNYpBgmPb5cGnwPZaOdsp6uTyUW-4YfzV3RebdMn9DUjX7Dy20YPug1fcCgupChI3COT1BpCOuyh6lpR1mZAE7a6BjxL7374LPHNywAAgD3qh__rTQIFUe-xcB3tdGrnrMYMLefeLL15ODw-9fSfzWXEDCM';
                    axios.get("https://build.seinlucky.com/api/v1/notification", 
                    {headers: {
                            'Authorization': 'Bearer '+token
                         }
                        })
                    
                    .then(response => {

                     console.log(this.notification = response.data.data)
                   
                })

            // var URL = "https://build.seinlucky.com/api/v1/notification";
            
     }
}
</script>