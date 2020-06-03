<template>
    <main>
        <section>
            <div id="clone">
                <button @click="submitForm">click</button>
                    
                    <ul class="number_list">
                        
                        <li v-for="(item, index) in book_data" :key="index" v-bind:class="[item.state.opened ? 'dd-item open' : 'dd-item']">
                         
                                     <div class="dd-handle"
                                @click="item.state.opened = !item.state.opened">
                                <label :for="item.text" class="hide_input">
                                    <input type="checkbox"
                                    :disabled="item.state.disabled" 
                                    :name="item.img" 
                                    :checked="item.state.selected" 
                                    @click="item.state.selected = !item.state.selected"
                                    @change="parentChange(item, item.state.selected)"
                                    id="image-check">

                                    <img :src="item.img" width="100">
                                </label>
                                
                            </div>
                            
                            <ul v-if="item.children.length != 0" class="number_list_item">
                                <li v-for="(children, index) in item.children" :key="index"   :data-id="children.id" class="dd-item">
                                    <div class="number_itme">
                                        <label >
                                        <input type="checkbox"  class="messageCheckbox"
                                            :value="children.number"
                                            v-model="children.state.selected"
                                            :name="children.text" 
                                            :checked="children.state.selected" 
                                            :disabled="children.state.disabled" 
                                            @click="children.state.selected = !children.state.selected">
                                    
                                            
                                            {{children.number}}
                                        </label>
                                    </div>
                                </li>
                                </ul>
                               
                           
                           
                        </li>
                    </ul>
                   
                </div>
               
                  <!-- {{this.book_data}} -->
        </section>
    </main>
</template>


<script>
export default {
    mounted() {
          this.$axios.get('/v2/v1/threed/book')
              .then(response => {
                console.log(response.data)
               this.book_data = response.data
             
                
              })  
    },
    
    data() {

//         let tree = [
// 	{
// 		"img": "https://picsum.photos/id/237/200/300",
// 		"id": 1,
// 		"state": {
// 			"opened": false,
// 			// "selected": false,
// 			"disabled": false
// 		},
// 		"children": [
// 			{
// 				"number": "239",
// 				"id": 2,
// 				"state": {
// 					"opened": false,
// 					"selected": false,
// 					"disabled": false
// 				},
// 				"children": null
// 			},
// 			{
// 				"number": "300",
// 				"id": 3,
// 				"state": {
// 					"opened": false,
// 					"selected": false,
// 					"disabled": false
// 				},
// 				"children": null
// 			},
			
			
			
// 		]
// 	},
// 	{
// 		"img": "https://picsum.photos/id/237/200/300",
// 		"id": 19,
// 		"state": {
// 			"opened": false,
// 			// "selected": false,
// 			"disabled": false
// 		},
// 		"children": [
// 			{
// 				"number": "233",
// 				"id": 20,
// 				"state": {
// 					"opened": false,
// 					"selected": false,
// 					"disabled": false
// 				},
// 				"children": null
// 			},
// 			{
// 				"number": "999",
// 				"id": 21,
// 				"state": {
// 					"opened": false,
// 					"selected": false,
// 					"disabled": false
// 				},
// 				"children": null
// 			}
// 		]
//     },
    


	
// ];

        return {
            book_data:[],
             //items : this.tree,
               checkedNames: [],
               one:[]
        }
        
    },
    methods: {
         submitForm() {
              let data = []
              for(let child of this.book_data){
                  this.one = child
                    console.log(this.one.children[0].state.selected)
                      console.log(this.one.children[1].state.selected)

                        
                          
                            this.one.children.forEach(element => {
                                 if( this.one.children[0].state.selected == true &&  this.one.children[1].state.selected == true) {
                                    data.push(element.number);
                                    this.Bookthreed = data;
                               }
                            });
                     
            }
           console.log(this.Bookthreed)

        },
        parentChange(item, state){
            for(let child of item.children){
                child.state.selected = state
            }
        }
    }
}
</script>

<style >
    .number_list , .number_list_item{
        padding:0;
        margin:0;
        text-align: center;
        
    }
    .number_list li  {
        list-style: none;
        display: inline-block;
      
    }
    .number_list_item {
        display: inline-flex;
    }
    .hide_input input[type=checkbox], input[type=radio] {
        display: none;
    }
    .number_list_item li {
        /* padding:20px;
        width:60px; */
    }

</style>