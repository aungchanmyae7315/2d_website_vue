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


   

  
}


