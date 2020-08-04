<template>
    <main class="chat_page">
            <el-dialog

  :visible.sync="dialogVisible_chat"
  width="90%"
   :show-close="false"
  :close-on-click-modal="false">
 <el-radio-group @click.native="changeHandler" v-model="radio1">
        <el-radio-button value="zawgyi"  label="ဤစာကိုဖတ္လိုရသည္">ဤစာကိုဖတ္လိုရသည္ (Zawgyi) </el-radio-button><br>
        <el-radio-button  valeue="unicode" label="ဤစာကိုဖတ်လိုရသည်">ဤစာကိုဖတ်လိုရသည် (Unicode)</el-radio-button>
  
    </el-radio-group>

  

</el-dialog>
 
    <div class="main_container live_chat">
        <el-header class="header">
            <!-- <nuxt-link  :to="`${$t('/')}?lang=${$store.state.locale}`"> -->
                <el-page-header title="" @back="goBack"  content="Sein Lucky 3D Live Chat">
                    </el-page-header>
            <!-- </nuxt-link> -->
            <!-- <h3>This is for ZawGyI font</h3>
	<p class="zawgyi">
		သည္စာသည္ ေဇာ္ဂ်ီ ျဖင့္ေရးေသာစာျဖစ္သည္
	</p>
	<h3>This is for unicode (myanmar3) font</h3>
	<p class="unicode">
		သည်စာသည် unicode ဖြင့်ရေးသောစာဖြစ်သည်
	</p> -->

   <el-button class="changeLange_icon" type="text" @click="dialogVisible_chat = true">
       <img style="width:25px;height:auto" src="~static/images/icons/translate_lang.svg" alt="">
   </el-button>


    <!-- lee pal{{radio1}}
    <p v-if="radio1 == 'zawgyi'">zawgyi</p>
    <p v-else>uni</p>
 -->


             <div class="card_one" v-if="this.currentTime  > this.morningTime_9_30 && this.currentTime < this.time_01_00">
            <div class="card_item">
           
            
                <div class="row">
                   <div class="col">
                                 <span>Live</span>
                                <h2 v-if="!this.info.live && !this.info.result_1200"    >
                                    <div class="loadingio-spinner-dual-ball-ty27h70p24 ">
                                        <div class="ldio-ct1tsjzqdg5">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                    </div>
                                </h2>
                                    
                                <h4 v-else   class="static"  v-bind:class="{ live_number: isActive, 'text-danger': hasError }"> 
                                    
                                    <span v-if="this.currentTime  > this.morningTime_9_30 && this.currentTime < this.time_12_00">{{this.info.live}}</span>
                                    <span v-else-if ="this.currentTime > this.time_12_00 && this.currentTime <  this.time_01_00">{{this.info.result_1200}}</span>
                                    <span v-else-if ="this.currentTime > this.time_01_00 && this.currentTime < this.time_04_30">{{this.info.live}}</span>
                                    <span v-else-if ="this.currentTime > this.time_04_30 && this.currentTime < this.morningTime_9_30">{{this.info.result_1200}}</span>
                                    <span v-else>{{this.info.live}}</span>
                                </h4>
                        </div>
                  
                  <div class="col">
                      <span>Set</span>
                       <h4  v-if="!this.info.set_1200"    class="card_loading">
                        <div class="loadingio-spinner-card_one_loading">
                            <div class="card_one_loading">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                      </h4>
                      <h4 v-else>
                          <h4 v-if="this.currentTime  > this.morningTime_9_30 && this.currentTime < this.time_12_00">{{this.info.set_1200}}</h4>
                          <h4 v-else-if ="this.currentTime > this.time_12_00 && this.currentTime <  this.time_01_00">{{this.info.set_1200}}</h4>
                          <h4 v-else-if ="this.currentTime > this.time_01_00 && this.currentTime < this.time_04_30">{{this.info.set_1200}}</h4>
                          <h4 v-else-if ="this.currentTime > this.time_04_30 && this.currentTime < this.morningTime_9_30">{{this.info.set_1200}}</h4>
                          <h4 v-else>{{this.info.set_1200}}</h4>
                      </h4>
                  </div>
                  <div class="col">
                      <span>Value</span>
                       <h4  v-if="!this.info.val_1200 && !this.info.val_1200"    class="card_loading">
                        <div class="loadingio-spinner-card_one_loading">
                            <div class="card_one_loading">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                      </h4>
                      <h4 >
                        <h4 v-if="this.currentTime  > this.morningTime_9_30 && this.currentTime < this.time_12_00">{{this.info.val_1200}}</h4>
                          <h4 v-else-if="this.currentTime > this.time_12_00 && this.currentTime <  this.time_01_00">{{this.info.val_1200}}</h4>
                          <h4 v-else-if="this.currentTime > this.time_01_00 && this.currentTime < this.time_04_30">{{this.info.val_1200}}</h4>
                          <h4 v-else-if="this.currentTime > this.time_04_30 && this.currentTime < this.morningTime_9_30">{{this.info.val_1200}}</h4>
                          <h4 v-else>{{this.info.val_1200}}</h4>
                      </h4>
                  </div>
                  <div class="col">
                      <span>2D</span>
                     <h4 class="static" style="font-weight:bold">
                         
                          {{this.info.result_1200}}
                      </h4>
                  </div>
                </div>
              </div>
               <h3 class="run_bar"> 
                    <div class="scroll-left">
                        <p> 
                            <img src="~static/images/slide_inner_icon.png" alt="" class="slide_inner_icon">
                        {{this.slider_text.text}}</p>
                    </div>
                </h3>
            </div>
            <div class="card_two" v-else>
                <div class="card_item">
                 
                    <div class="row">
                       <div class="col">
                                 <span>Live</span>
                                <h2 v-if="!this.info.live && !this.info.result_1200"    >
                                    <div class="loadingio-spinner-dual-ball-ty27h70p24 ">
                                        <div class="ldio-ct1tsjzqdg5">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                    </div>
                                </h2>
                                    
                                <h4 v-else   class="static"  v-bind:class="{ live_number: isActive, 'text-danger': hasError }"> 
                                    
                                    <span v-if="this.currentTime  > this.morningTime_9_30 && this.currentTime < this.time_12_00">{{this.info.live}}</span>
                                    <span v-else-if ="this.currentTime > this.time_12_00 && this.currentTime <  this.time_01_00">{{this.info.result_1200}}</span>
                                    <span v-else-if ="this.currentTime > this.time_01_00 && this.currentTime < this.time_04_30">{{this.info.live}}</span>
                                    <span v-else-if ="this.currentTime > this.time_04_30 && this.currentTime < this.morningTime_9_30">{{this.info.result_1200}}</span>
                                    <span v-else>{{this.info.live}}</span>
                                </h4>
                        </div>
                      <div class="col">
                          <span>Set</span>
                          <h4  v-if="!this.info.set_430 "    class="card_loading">
                            <div class="loadingio-spinner-card_one_loading">
                                <div class="card_one_loading">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                          </h4>
                          <h4 v-else>
                            <h4 v-if="this.currentTime  > this.morningTime_9_30 && this.currentTime < this.time_12_00">{{this.info.set_430}}</h4>
                            <h4 v-else-if ="this.currentTime > this.time_12_00 && this.currentTime <  this.time_01_00">{{this.info.set_430}}</h4>
                            <h4 v-else-if ="this.currentTime > this.time_01_00 && this.currentTime < this.time_04_30">{{this.info.set_430}}</h4>
                            <h4 v-else-if ="this.currentTime > this.time_04_30 && this.currentTime < this.morningTime_9_30">{{this.info.set_430}}</h4>
                            <h4 v-else>{{this.info.set_430}}</h4>
                          </h4>
                      </div>
                      <div class="col">
                          <span>Value</span>
                           <h4   v-if="!this.info.val_430 "    class="card_loading">
                            <div class="loadingio-spinner-card_one_loading">
                                <div class="card_one_loading">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                          </h4>
                          <h4  v-else>
                            <h4 v-if="this.currentTime  > this.morningTime_9_30 && this.currentTime < this.time_12_00">{{this.info.val_430}}</h4>
                            <h4 v-else-if="this.currentTime > this.time_12_00 && this.currentTime <  this.time_01_00">{{this.info.val_430}}</h4>
                            <h4 v-else-if="this.currentTime > this.time_01_00 && this.currentTime < this.time_04_30">{{this.info.val_430}}</h4>
                            <h4 v-else-if="this.currentTime > this.time_04_30 && this.currentTime < this.morningTime_9_30">{{this.info.val_430}}</h4>
                            <h4 v-else>{{this.info.val_430}}</h4>
                          </h4>
                        
                      </div>
                      <div class="col">
                          <span>2D</span>
                          <h4 class="static" style="font-weight:bold">
                       
                          {{this.info.result_430}}
                      </h4>
                          <!-- <h4 class="result_num">{{this.info.result_430}}</h4> -->
                      </div>
                    </div>
                </div>
                 <h3 class="run_bar"> 
                    <div class="scroll-left">
                        <p> 
                            <img src="~static/images/slide_inner_icon.png" alt="" class="slide_inner_icon">
                        {{this.slider_text.text}}</p>
                    </div>
                </h3>
            </div>
        
           
        </el-header>
   
        
            <div class="chat">
              
             
                    <div  class="card-content">
                        <ul class="messages" v-chat-scroll>
                            <li v-for="message in messages" :key="message.id">
                                <!-- <span> <img src="https://as2.ftcdn.net/jpg/00/97/00/09/500_F_97000908_wwH2goIihwrMoeV9QF3BW6HtpsVFaNVM.jpg" alt="" class="chat_profile"></span> -->
                               <el-row >
                                   <el-col :span="4"> 
                                          <el-avatar  style="margin-top:10px;" :size="50">
                                                <img v-if="message.image == null" src="https://as2.ftcdn.net/jpg/00/97/00/09/500_F_97000908_wwH2goIihwrMoeV9QF3BW6HtpsVFaNVM.jpg" alt="">
                                               <img  v-else :src="message.image" :alt="message.name">
                                            </el-avatar>

                                              
                                   </el-col>
                                   <el-col :span="20" style="padding-left:5px;">
                                        <span v-if="message.name == '-'" class="chat_name">Anonymous</span>
                                        <span v-else class="chat_name">{{message.name}}{{" "}}</span>
                                   <br>
                                        <span  class="chat_text ">
                                       
                                             <p  v-if="radio1 == 'ဤစာကိုဖတ္လိုရသည္'"   class="chat_content">{{message.content_zg}}</p>
                                    
                                              <p v-else  class="chat_content">{{message.content_uni}}</p>
                                               

                                        <span class="chat_time">{{message.timestamp}}</span>
                                        </span>
                                   </el-col>
                               </el-row>
                               
                            
                           
                              
                            </li>
                        </ul>
                    </div>
                    
                   
                
            </div>
        
             <div class="card-action input_messeage">
                        <NewMessagethreed :name="name" />
                    </div>



<!-- <div class="container">
  <img src="/w3images/bandmember.jpg" alt="Avatar" style="width:100%;">
  <p>Sweet! So, what do you wanna do today sdfs sdfsdf sdfsdf dasdfasd sdfsdf asdfasdf asdfsadf asdfsdfas adsfasdf asdf asd saddfsad?</p>
  <span class="time-right">11:02</span>
</div> -->

    </div>
       </main>
</template>

<script>
import Vue from 'vue'
import VueZawUni from 'vue-zawuni'

Vue.use(VueZawUni)
import knayi from 'knayi-myscript'
import db from "@/firebase/init";
import moment from "moment";
import NewMessagethreed from "@/components/NewMessage_3d";
import VueChatScroll from 'vue-chat-scroll'
Vue.use(VueChatScroll)
export default {
    name: "Chat",
    props: ["name"],
    components: {
        NewMessagethreed
    },
    mounted() {
        if(!localStorage.getItem('change_zg_uni')) {
              this.dialogVisible_chat = true
        }
           
           var  nowTimestamp =  Math.round(new Date().getTime()/1000) 
            var lastTimestamp = localStorage.getItem('slider_time')
            var diff = nowTimestamp - lastTimestamp;
            var self = this;
        if(diff < 7200) {
               
                this.slider_text = JSON.parse(localStorage.getItem('slider_text'))
                  console.log(this.slider_text)
            }else {
                 self.$axios.get('/v2/v1/slider_text')
                .then(response => {
                    self.slider_text = response.data.data[0];
                    self.$store.commit('setSliderText', this.slider_text);
                     
                })
            }

         this.$axios.get('/luke/twod-result-live')
            .then(response => {
              this.info = response.data.data;
              this.close_day = response.data.data.is_close_day
               this.last_date = response.data.data.last_date
                this.currentTime = response.data.data.current_time
                 
              console.log(response)

            })
   this.itvKweeLiveData();

          let token = localStorage.getItem('token');
        if(token) {
            this.$axios.get("/v2/v1/profile",
                        {headers: {
                                "Authorization": "Bearer "+token
                            }
                            })
                        .then(response => {
                        
                        console.log(response.data.data)
                     
                    
                    

                    })
        }
    },
    data() {
        return {
            messages: [],
            chat_name:'',

            fullscreenLoading: false,
      serverDate:'',
      last_date:'',
      close_day:'',
      dialogVisible: false,
       isActive: true,
      hasError: false,
      currentTime: '',
      morningTime_9_30:'09:30:00',
      time_12_00:'12:01:00',
      time_01_00:'13:00:00',
      time_04_30:'16:30:00',


      currentDate: null,
      morningTime:null,
      
      slider_images:'',
      activeIndex: '1',
      
      info:'',
 
      kwee_cma:'',
      set_1200:'',
      profile:'',
      slider_text:'',
      breakTime:null,
     ok:true,
     radio1:localStorage.getItem('change_zg_uni'),
     dialogVisible_chat:false,

  
        };
    },
    methods: {
       changeHandler(e) { 
           this.$store.commit('change_zg_uni', e.target.value);
           this.dialogVisible_chat = false
        },
  
        goBack() {
             this.$router.push(`/threeD?lang=${this.$store.state.locale}`);
            // var CheckRoute = localStorage.getItem('chatRouter')
            // if(CheckRoute == '2dhome') {
            //     this.$router.push(`/home?lang=${this.$store.state.locale}`);
            // }else {
               
            // }
         
        },
         async getKweeLiveData(){
          this.$axios.get('/luke/twod-result-live')
            .then(response => {
              this.info = response.data.data;
              this.close_day = response.data.data.is_close_day
               this.last_date = response.data.data.last_date
                this.currentTime = response.data.data.current_time
              console.log(response)

            })
     },

        itvKweeLiveData(){
            this.kweeliveItvId = setInterval(function() {
                this.getKweeLiveData();
            }.bind(this), 3000)
        },

          ServerCurrentTime() {
        //  console.log('ok')
         if (this.currentTime > this.time_12_00 && this.currentTime <  this.time_01_00 ) {
           this.isActive = false
          
            this.breakTime = '12:01 PM';
           
          } else if(this.currentTime > this.time_04_30){
            // this.isActive = false
            //alert('lll')
             if(this.close_day == 1) {
            
               this.isActive = false
            }else {
                
               this.isActive = true
            }
            this.isActive = false
            this.breakTime = '4:30 PM'; 
            
          }else if(this.currentTime < this.morningTime_9_30){
         
            this.isActive = false
            this.breakTime = '4:30 PM'; 
            
          }else{
            
            if(this.close_day == 1) {
            
               this.isActive = false
            }else {
                
               this.isActive = true
            }
          
            this.isActive = true
            
            this.breakTime = moment().format('h:mm A');
          }

       },
    },
    created() {
       
       this.breakTime = moment().format('h:mm:ss a')
      setInterval(() => this.ServerCurrentTime(), 1 * 1000);


        let ref = db.collection("messages_3d")
        .orderBy("timestamp")
        .limitToLast(500);
      
         
        ref.onSnapshot(snapshot => {
            snapshot.docChanges().forEach(element => {
                if (element.type == "added") {
                    this.messages.push({
                        id: element.doc.id,
                        name: element.doc.data().name,
                        image:element.doc.data().image,

                        content_uni: knayi.fontConvert(element.doc.data().content,'unicode'),
                        content_zg: knayi.fontConvert(element.doc.data().content,'zawgyi'),
                        
                        timestamp: moment(element.doc.data().timestamp).format(
                            "lll"
                        )
                    });
                    
                }
            });
        });
    }
};
</script>

<style >
body {
    font-family: unset !important;
}

.zawgyi{
			font-family:Zawgyi-One;
		}
		.unicode{
			font-family:Myanmar3,Yunghkio,'Masterpiece Uni Sans';
		}

 .live_chat .el-header {
       background-color :#fff;
       height: auto !important;

}
.chat_page .el-dialog {
    text-align: center;
    max-width:480px;
    width:90%;
}
.changeLange_icon {
    position: absolute;
    right:21px;
    top:5px;
}
.chat_page button:focus {
    outline: none;
}
.chat_page .el-radio-button:last-child .el-radio-button__inner {
    border-radius: 5px;
}
.chat_page .el-radio-button__orig-radio:checked+.el-radio-button__inner {
    border-radius: 5px;
}
.chat_page .el-radio-button__inner {
    width:220px;
    border-radius: 5px;
   border:1px solid #b8b8b8;
   border-radius: 3px;
   border-left:1px solid #b8b8b8;
}
.el-page-header__left {
    margin:0;
}
.live_chat .el-page-header {
    line-height: 43px;
    color:#000;
    padding:0 20px;
}
.live_chat .el-page-header__content {
    color:#000;
    font-weight: bold;
}
.chat_profile {
    width:50px;
    height: 50px;
}

.chat h2 {
    font-size: 2.6em;
    margin-bottom: 40px;
}

.chat_time {
    font-size: 0.9em;
    color:#9E9DA0;
}
.chat_text {
    background:#EEEEEE;
    border-radius:6px;
    padding:5px 7px;
    float:left;
    
}
.chat_name {
    color:#B0AFB3;
}
.chat_content {
    margin-bottom:0;
    color:#35343A;
}
/* .card {
    height: 100vh;
} */
.card-content {
    margin:0;
}
.messages {
    max-height: 300px;
    overflow: auto;
    list-style: none;
    padding:160px 0 0 0;
    margin:8px 0 60px 8px;
    min-height: 93vh;
}
.messages li {
    max-width: 95%;
    margin-bottom:10px;
    
}
.messages .el-avatar img {
    width:50px;
}
.messages::-webkit-scrollbar {
    width: 0px;
}
.messages::-webkit-scrollbar-track {
    background: #ddd;
}
.messages::-webkit-scrollbar-thumb {
    background: #aaa;
}
.input_messeage {
    background: #fff;
    max-width: 480px;
    width:100%;
    position: fixed;
    bottom:0;
    left:0;
    right:0;
    
}
.live_chat .card_one , .live_chat .card_two {
    text-align: center;
    margin:10px 20px 0px 20px;
   background: rgba(25,61,26,.705);
   border:0;
   padding:0;
}
.live_chat .run_bar {
    bottom:0;
    border-bottom-left-radius: 14px;
    border-bottom-right-radius: 14px;
}
.live_chat .card_one .card_item h4 ,
.live_chat .card_two .card_item  h4 {
    margin-top:-9px;
    margin-bottom: 5px;
}


/* slider text css */
/* CSS Document */
.scroll-left {
  overflow: hidden;
  height:31px;	
  position: relative;
  width:auto;
}
.scroll-left p {
  position: absolute;
  white-space:nowrap;
  height: 100%;
  margin: 0;
  line-height: 31px;
  text-align: left;
  /* Apply animation to this element */	
  -moz-animation: scroll-left 10s linear infinite;
  -webkit-animation: scroll-left 10s linear infinite;
  animation: scroll-left 10s linear infinite;
}


 /* change lang css end */
/* Move it (define the animation) */
@-moz-keyframes scroll-left {
  0%   { -moz-transform: translateX(100%); }
  100% { -moz-transform: translateX(-100%); }
}
@-webkit-keyframes scroll-left {
  0%   { -webkit-transform: translateX(100%); }
  100% { -webkit-transform: translateX(-100%); }
}
@keyframes scroll-left {
  0%   { 
  -moz-transform: translateX(100%); /* Browser bug fix */
  -webkit-transform: translateX(100%); /* Browser bug fix */
  transform: translateX(200px); 		
  }
  100% { 
  -moz-transform: translateX(-100%); /* Browser bug fix */
  -webkit-transform: translateX(-100%); /* Browser bug fix */
  transform: translateX(-100%); 
 }
}


.cards {
  display: flex;
}
.cards label {
  cursor: pointer;
}
.cards label input {
  display: none;
}
.cards label .text {
  color: #ae2b26;
  font-family: "roboto", arial, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100px;
  height: 150px;
  margin: 0 16px;
  border: 1px solid #f2f2f2;
  background: #f8f8f8;
  padding: 16px;
  text-align: center;
}
.cards label.isActive {
  font-size: 30px;
}
.cards label:hover .text{
  border-color: #ae2b26;
  box-shadow: 0 0 8px #ccc;
}
.cards label input:checked + .text {
  color: green;
  border-color: green;
}
</style>