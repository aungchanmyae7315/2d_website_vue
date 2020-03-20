<template>
    <div v-if="warningZone" style="color:red">Are dddddddsafsadfsadkljf;asdkljflksadjfkljadsklfjklasjdfklasjdfkljadsfkl;jsadkfjsd;fj;klyou still with us</div>
</template>

<script>
export default {
   name:"AutoLogout",
   data() {
       return {
           events:['click','mousemove','mousedown','scroll','keypress','load'],
           warningTimer:null,
           logoutTimer:null,
           warningZone:false
       }
   },
   mounted() {
       this.events.forEach(function(event) {
           window.addEventListener(event, this.resetTimer);
       }, this)
       this.setTimer();
   },
   methods: {
       setTimer:function() {
           this.warningTimer = setTimeout(this.warningMessage, 4 * 1000);
            this.logoutTimer = setTimeout(this.warningMessage, 6 * 1000);
            
            this.warningZone = false;

       },
        warningMessage:function() {
          this.warningZone = true 
       },
       logoutUser:function() {

       },
       resetTimer:function() {
           clearTimeout(this.warningTimer);
           this.setTimer();
       },
      
   }
}
</script>