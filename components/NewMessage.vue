<template>
    <div class="new-message">
          <div class="" v-if ="!$store.state.isLoggedIn">
            
            <div class="message_input_footer">
                <nuxt-link  :to="`${$t('/login')}?lang=${$store.state.locale}`"> 
                    <el-button round>{{$t('pls_login_first')}}</el-button>
                </nuxt-link>
            </div>
        
   
    
             
          </div>
        <div v-else>
        <form @submit.prevent="addMessage">
            <el-row>
                <el-col :span="20">
                     <input type="text"    class="new_message_input" name="new-message" placeholder="Type a message..." v-model="newMessage" />
                       <!-- <p v-if="feedback" class="red-text">{{feedback}}</p> -->
                </el-col>
              <el-col :span="4">
                    <div class="enter_message_icon">
                       <img @click="addMessage" src="~static/images/icons/send_back_icon.svg" alt="">
                    </div>
           
                </el-col>
            </el-row>
        
   
        </form>
    </div>
        
                  
    </div>
</template>

<script>
import Vue from 'vue'
import VueZawUni from 'vue-zawuni'

Vue.use(VueZawUni)
import db from "@/firebase/init";

export default {
    name: "NewMessage",
   // props: ["name"],
   mounted() {
       
        let token = localStorage.getItem('token');
        if(token) {
            this.$axios.get("/v2/v1/profile",
                        {headers: {
                                "Authorization": "Bearer "+token
                            }
                            })
                        .then(response => {
                        
                        console.log(response.data.data.image)
                        this.chat_name = response.data.data.name
                        this.chat_image = response.data.data.image
                    
                    

                    })
        }
        this.updateIsLoggedIn();
   },
    data() {
        return {
            dialogVisible: false,
            newMessage: null,
            feedback: null,
            chat_name:null,
            chat_image:null,
            //name: localStorage.getItem('Chat_name'),
           
        };
    },
    methods: {
         updateIsLoggedIn() {
        this.$store.commit('updateIsLoggedIn', this.hasUserInfo());
      },
      hasUserInfo() {
        return Boolean(localStorage.getItem('userInfo'));
      },
        addMessage() {
            if (this.newMessage) {
                db.collection("messages")
                    .add({
                        content: this.newMessage,
                        name: this.chat_name,
                        image:this.chat_image,
                        timestamp: Date.now()
                    })
                    .catch(err => console.log(err));
                this.newMessage = null;
            } else {
                this.feedback = "Please enter a message";
            }
        },
       
  
      
    },
    created() {
     
    }
};
</script>
<style >
 .unicode {
        font-family: "Pyidaungsu","MON3 Anonta 1" !important;
    }

    .zawgyi {
        font-family: "Zawgyi-One" !important;
    }
.message_input_footer {
    padding:10px 20px;
}

.message_input_footer .el-button {
    max-width: 480px;
    width:100%;
    background-color: #158220;
    border:0;
    color:#fff;
}
    .new-message .new_message_input {
        width:100%;
        background-color:#EEEEEE !important;
        border:0;
        border-radius: 19px;
        padding:5px 10px;
        margin:12px 5px 12px 8px;
        outline: none;
    }
    input.new_message_input:focus {
    outline:none !important;
    outline-width: 0 !important;
    box-shadow: none;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
}
    .new-message .new_message_input:focus {
        outline-width: 0;
        outline: none;
    }
    .enter_message_icon {
        text-align: center;
    }
    .enter_message_icon img {
        padding-top:15px;
        width:30px;
    }
    .new-message .v-modal {
       top:unset;
        background: unset !important;
    }
</style>

