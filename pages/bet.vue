<template>
    <div class="bet_container">
        <el-header>
            <el-page-header @back="goBack">
            </el-page-header>
            <el-input class="bet_input" placeholder="500 Ks"  v-model="input_bet">
               <template slot="prepend">KS</template>
            </el-input>
            <el-row>
                <el-col :span="8"> <el-button class="fast_btn">Fast</el-button></el-col>
                <el-col :span="8"><el-button type="text">Bet Close</el-button></el-col>
                <el-col :span="8"><el-button type="text">Text Button</el-button></el-col>
            </el-row>
        </el-header>
            <div class="all_btn el-main">
              <!-- <q-btn color="primary" label="Primary" ></q-btn> -->
 

               <!-- <q-btn class="btn number-btns" label="01"></q-btn>
               <q-btn class="btn number-btns" label="02"></q-btn>
               <q-btn class="btn number-btns" label="03"></q-btn>
               <q-btn class="btn number-btns" label="04"></q-btn>
               <q-btn class="btn number-btns" label="05"></q-btn>
               <q-btn class="btn number-btns" label="06"></q-btn>
               <q-btn class="btn number-btns" label="07"></q-btn>
               <q-btn class="btn number-btns" label="08"></q-btn>
               <q-btn class="btn number-btns" label="09"></q-btn>
               <q-btn class="btn number-btns" color="primary" label="10"></q-btn>
               <q-btn class="btn number-btns" label="11"></q-btn>
               <q-btn class="btn number-btns" label="12"></q-btn>
               <q-btn class="btn number-btns" label="13"></q-btn>
               <q-btn class="btn number-btns" label="14"></q-btn>
               <q-btn class="btn number-btns" label="15"></q-btn>
               <q-btn class="btn number-btns" label="16"></q-btn>
               <button class="btn hello-btns">02</button>
               <button class="btn hello-btns">03</button> -->

           
               <button style="background:#14612D" class="btn btn_sm" :class="{ active: isActive }" @click="add_btn_select">00</button>
               <button style="background:#14612D" class="btn btn_sm" :class="{ active: isActive }" @click="add_btn_select">01</button>
               <button style="background:#14612D" class="btn btn_sm" :class="{ active: isActive }" @click="add_btn_select">02</button>
               <button style="background:#14612D" class="btn btn_sm" :class="{ active: isActive }" @click="add_btn_select">03</button>
               <button style="background:#14612D" class="btn btn_sm" :class="{ active: isActive }" @click="add_btn_select">04</button>
               <button style="background:#14612D" class="btn btn_sm" :class="{ active: isActive }" @click="add_btn_select">05</button>
               <button style="background:#14612D" class="btn btn_sm" :class="{ active: isActive }" @click="add_btn_select">06</button>
               <button style="background:#14612D" class="btn btn_sm" :class="{ active: isActive }" @click="add_btn_select">07</button>
               <button style="background:#14612D" class="btn btn_sm" :class="{ active: isActive }" @click="add_btn_select">08</button>
               <button style="background:#14612D" class="btn btn_sm" :class="{ active: isActive }" @click="add_btn_select">09</button>

               <button style="background:rgb(195, 171, 75)" class="btn btn_md" :class="{ active: isActive }" @click="add_btn_select">10</button>
               <button style="background:rgb(195, 171, 75)" class="btn btn_md" :class="{ active: isActive }" @click="add_btn_select">11</button>
               <button style="background:rgb(195, 171, 75)" class="btn btn_md" :class="{ active: isActive }" @click="add_btn_select">12</button>
               <button style="background:rgb(195, 171, 75)" class="btn btn_md" :class="{ active: isActive }" @click="add_btn_select">13</button>
               <button style="background:rgb(195, 171, 75)" class="btn btn_md" :class="{ active: isActive }" @click="add_btn_select">14</button>
               <button style="background:rgb(195, 171, 75)" class="btn btn_md" :class="{ active: isActive }" @click="add_btn_select">15</button>
               <button style="background:rgb(195, 171, 75)" class="btn btn_md" :class="{ active: isActive }" @click="add_btn_select">16</button>
               <button style="background:rgb(195, 171, 75)" class="btn btn_md" :class="{ active: isActive }" @click="add_btn_select">17</button>
               <button style="background:rgb(195, 171, 75)" class="btn btn_md" :class="{ active: isActive }" @click="add_btn_select">18</button>
               <button style="background:rgb(195, 171, 75)" class="btn btn_md" :class="{ active: isActive }" @click="add_btn_select">19</button>
  
               <button style="background:#14612D" class="btn btn_sm" :class="{ active: isActive }" @click="add_btn_select">21</button>
               <button style="background:#14612D" class="btn btn_sm" :class="{ active: isActive }" @click="add_btn_select">21</button>
               <button style="background:#14612D" class="btn btn_sm" :class="{ active: isActive }" @click="add_btn_select">23</button>
               <button style="background:#14612D" class="btn btn_sm" :class="{ active: isActive }" @click="add_btn_select">24</button>
               <button style="background:#14612D" class="btn btn_sm" :class="{ active: isActive }" @click="add_btn_select">25</button>
               <button style="background:#14612D" class="btn btn_sm" :class="{ active: isActive }" @click="add_btn_select">26</button>
               <button style="background:#14612D" class="btn btn_sm" :class="{ active: isActive }" @click="add_btn_select">27</button>
               <button style="background:#14612D" class="btn btn_sm" :class="{ active: isActive }" @click="add_btn_select">28</button>
               <button style="background:#14612D" class="btn btn_sm" :class="{ active: isActive }" @click="add_btn_select">29</button>
               <button style="background:#14612D" class="btn btn_sm" :class="{ active: isActive }" @click="add_btn_select">30</button>

               <button style="background:rgb(195, 171, 75)" class="btn btn_md" :class="{ active: isActive }" @click="add_btn_select">31</button>
               <button style="background:rgb(195, 171, 75)" class="btn btn_md" :class="{ active: isActive }" @click="add_btn_select">32</button>
               <button style="background:rgb(195, 171, 75)" class="btn btn_md" :class="{ active: isActive }" @click="add_btn_select">33</button>
               <button style="background:rgb(195, 171, 75)" class="btn btn_md" :class="{ active: isActive }" @click="add_btn_select">34</button>
               <button style="background:rgb(195, 171, 75)" class="btn btn_md" :class="{ active: isActive }" @click="add_btn_select">35</button>
               <button style="background:rgb(195, 171, 75)" class="btn btn_md" :class="{ active: isActive }" @click="add_btn_select">36</button>
               <button style="background:rgb(195, 171, 75)" class="btn btn_md" :class="{ active: isActive }" @click="add_btn_select">37</button>
               <button style="background:rgb(195, 171, 75)" class="btn btn_md" :class="{ active: isActive }" @click="add_btn_select">38</button>
               <button style="background:rgb(195, 171, 75)" class="btn btn_md" :class="{ active: isActive }" @click="add_btn_select">39</button>
               <button style="background:rgb(195, 171, 75)" class="btn btn_md" :class="{ active: isActive }" @click="add_btn_select">40</button>

         </div>
        </div>
    
</template>

<style>
    .bet_container .el-header {
        color:#fff;
        padding:20px;
    }
    .bet_container {
        background-image:url(~static/images/main_bg.png); 
    }
    .bet_container .el-header {
        background: #2A612D;
        height:auto !important;
    }
    .el-page-header__left {
        margin:0;
    }
    .bet_input {
        margin-top:15px;
    }
    .fast_btn {
        background: #D4E2FF;
        color:#000;
        font-weight: bold;
        padding:9px 30px;
        display: -webkit-inline-box;
    }
    .bet_container .el-row {
        margin-top:13px;
        padding:0;
    }
    .bet_container  .el-input__inner{
       text-align: right;
       height:60px;
       font-size:20px;
    }
    .el-input-group__prepend {
        color:#000;
        font-weight: bold;
        font-size:22px;
    }
    .all_btn {
        text-align: center;
    }
    .btn {
   border: 0;
   margin: 11px;
   border-radius: 10px;
   padding: 14px 16px;
   color: #e0dddd;
   font-weight: bold;
}
.active {
   border: 0;
   margin: 11px;
   border-radius: 10px;
   padding: 14px 16px;
   background:red !important;
   color:#fff;
   font-weight: bold;
}
.active:focus {
   border-color:#000;
}
.isActive {
   border: 0;
   margin: 11px;
   border-radius: 10px;
   padding: 14px 16px;
   color:#e0dddd;
   font-weight: bold;
   
}
</style>

<script>
 const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];
export default {
    
    data() {
        return {
             input_bet: '',
            isActive: false
        }
    },
     methods: {
      add_btn_select(event) {
         if(event.target.className == "active") 
         {
            event.target.className = "isActive";
         }else {
             event.target.className = "active";
         }
      },
     }
}
</script>