<template>
   <div class="example-page">
    <!-- 3. Use -->
   
  </div>
           
    
                      
</template>
<style lang="stylus">
  .smooth-picker[data-v-a1dc87f8]{font-size:1rem;height:10em;position:relative;background-color:#fff;overflow:hidden}.smooth-picker .smooth-list[data-v-a1dc87f8]{height:6.25em;position:relative;top:4em}.smooth-picker .smooth-item[data-v-a1dc87f8]{position:absolute;top:0;left:0;overflow:hidden;width:100%;text-overflow:ellipsis;white-space:nowrap;display:block;text-align:center;will-change:transform;contain:strict;height:2em;line-height:2;font-size:1em}.smooth-picker .smooth-handle-layer[data-v-a1dc87f8]{position:absolute;width:100%;height:calc(100% + 2px);left:0;right:0;top:-1px;bottom:-1px}.smooth-picker .smooth-handle-layer .smooth-top[data-v-a1dc87f8]{border-bottom:1px solid #c8c7cc;background:linear-gradient(180deg,#000 10%,hsla(0,0%,100%,.7));-webkit-transform:translateZ(5.625em);transform:translateZ(5.625em)}.smooth-picker .smooth-handle-layer .smooth-middle[data-v-a1dc87f8]{height:2em}.smooth-picker .smooth-handle-layer .smooth-bottom[data-v-a1dc87f8]{border-top:1px solid red;background:linear-gradient(0deg,#000 10%,hsla(0,0%,100%,.7));-webkit-transform:translateZ(5.625em);transform:translateZ(5.625em)}.flex-box[data-v-a1dc87f8]{display:-webkit-flex;display:-ms-flexbox;display:flex}.flex-box.direction-column[data-v-a1dc87f8]{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.flex-box.direction-row[data-v-a1dc87f8]{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.flex-box .flex-1[data-v-a1dc87f8]{-webkit-flex:1;-ms-flex:1;flex:1}.flex-box .flex-2[data-v-a1dc87f8]{-webkit-flex:2;-ms-flex:2;flex:2}.flex-box .flex-3[data-v-a1dc87f8]{-webkit-flex:3;-ms-flex:3;flex:3}.flex-box .flex-4[data-v-a1dc87f8]{-webkit-flex:4;-ms-flex:4;flex:4}.flex-box .flex-5[data-v-a1dc87f8]{-webkit-flex:5;-ms-flex:5;flex:5}.flex-box .flex-6[data-v-a1dc87f8]{-webkit-flex:6;-ms-flex:6;flex:6}.flex-box .flex-7[data-v-a1dc87f8]{-webkit-flex:7;-ms-flex:7;flex:7}.flex-box .flex-8[data-v-a1dc87f8]{-webkit-flex:8;-ms-flex:8;flex:8}.flex-box .flex-9[data-v-a1dc87f8]{-webkit-flex:9;-ms-flex:9;flex:9}.flex-box .flex-10[data-v-a1dc87f8]{-webkit-flex:10;-ms-flex:10;flex:10}.flex-box .flex-11[data-v-a1dc87f8]{-webkit-flex:11;-ms-flex:11;flex:11}.flex-box .flex-12[data-v-a1dc87f8]{-webkit-flex:12;-ms-flex:12;flex:12}

</style>
<style scoped >

.smooth-bottom {
  background: rebeccapurple;
}
.smooth-top {
  color:chocolate !important;
}
.smooth-picker .smooth-handle-layer .smooth-top[data-v-a1dc87f8]  {
  color:chartreuse !important;
}
   .smooth-picker .smooth-middle {
    color:blue !important;
  }
  .smooth-picker .smooth-list[data-v-a1dc87f8] {
    color:red;
  }
</style>

<script>

  // import 'vue-smooth-picker/dist/css/style.css'
  import { SmoothPicker } from 'vue-smooth-picker'

export default {
   
    data() {
        return {
         
           
        }
        
    },
    components: {
     SmoothPicker
  },
    methods: {
        
        goBack() {
             this.$router.push(`/?lang=${this.$store.state.locale}`); 
         },
        thousands_separators(num){
            var num_parts = num.toString().split(".");
            num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return num_parts.join(".");
        },
    //      dataChange (gIndex, iIndex) {
    //     console.info('list', gIndex, iIndex)
    //     if (gIndex === 0) {
    //       let currentIndex = 0
    //       let list = []
    //       switch (iIndex) {
    //         case 2:
    //           list = ['1','2','3','4','5','6','7','8','9']
    //           currentIndex = 4
    //           break
    //         case 1:
    //           list = ['1','2','3','4','5','6','7','8','9']
    //           currentIndex = 3
    //           break
    //         default:
    //           list = ['0','1','2','3','4','5','6','7','8','9']
    //           currentIndex = 2
    //       }
    //       this.$refs.smoothPicker.setGroupData(2, Object.assign({}, this.data[2], { currentIndex, list }))
    //     }
    //   },
      // 6. listen click event
    
      
    },
    computed: {
       
       
    }
}
</script>
