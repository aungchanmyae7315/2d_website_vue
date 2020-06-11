import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default function ({ $axios, redirect }) {

  $axios.onRequest(config => {
    console.dir(config.url);
    config.headers.common['device-id'] = localStorage.getItem("deviceId")
    console.log('Making request to ' + config.url)
  if (config.url.match(/luke/)){
      console.log('go to luke.2dboss.com');
      config.baseURL = "https://luke.2dboss.com/api/";
    };
  if (config.url.match(/web-app-version/)){
      console.log('---go to version.seinlucky123.com');
      config.baseURL = "https://version.seinlucky123.com";    
    };  
  });



  // $axios.onError(error => {
  //   console.log(error.response)
  //   const code = parseInt(error.response && error.response.status)
  
  //   if (code === 400) {
  //     redirect('/400')
  //   }else if(code == 500) {
  //     this.$router.push('/service') 
     
  //   }

  // })

  $axios.onError(error => {
    
    console.log(error.response)
       let token = localStorage.getItem('token');
                var data = {
                    request_url:error.response.config.url,
                    user_agent:navigator.userAgent,
                    err:error.response.data.message,
                    info: "hello",
                    trace:"hello",
                    msg: error.response.data.message,
                }
          $axios.post("/v2/v1/error_log",
                           data,
                    {
                        headers: {
                               "Authorization": "Bearer "+token
                         }, 
                        })
                    .then(response => {
                       
                        console.log(response)
                      
                    })
                    const code = parseInt(error.response && error.response.status)
                    if (code === 400) {
                          redirect('/400')
                        }else if(code == 500) {
                          //redirect(`/error_page?lang=en`) 
                         
                        }
                })
   

  
}


