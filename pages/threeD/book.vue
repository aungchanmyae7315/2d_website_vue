<template>
    <main>
        <section>
            <div id="clone">
                <button @click="submitForm">click</button>

                    <ul class="number_list">
                        <li v-for="(item, index) in items" :key="index" v-bind:class="[item.state.opened ? 'dd-item open' : 'dd-item']">
                            <div class="dd-handle"
                                @click="item.state.opened = !item.state.opened">
                                <label :for="item.text">
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
                            
                            <ul v-if="item.children.length != 0" class="number_list">
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
               
                  
        </section>
    </main>
</template>


<script>
export default {
    
    data() {
        let tree = [
	{
		"img": "https://picsum.photos/id/237/200/300",
		"id": 1,
		"state": {
			"opened": false,
			"selected": true,
			"disabled": false
		},
		"children": [
			{
				"number": "239",
				"id": 2,
				"state": {
					"opened": false,
					"selected": true,
					"disabled": false
				},
				"children": null
			},
			{
				"number": "300",
				"id": 3,
				"state": {
					"opened": false,
					"selected": true,
					"disabled": false
				},
				"children": null
			},
			
			
			
		]
	},
	{
		"img": "https://picsum.photos/id/237/200/300",
		"id": 19,
		"state": {
			"opened": false,
			"selected": true,
			"disabled": false
		},
		"children": [
			{
				"number": "233",
				"id": 20,
				"state": {
					"opened": false,
					"selected": true,
					"disabled": false
				},
				"children": null
			},
			{
				"number": "999",
				"id": 21,
				"state": {
					"opened": false,
					"selected": true,
					"disabled": false
				},
				"children": null
			}
		]
	},


	
];

        return {
             items : tree,
               checkedNames: [],
               one:[]
        }
        
    },
    methods: {
         submitForm() {
              for(let child of this.items){
                  this.one = child
                   for (var p of Array.from(this.one.children)) {
                       if(p.state.selected == true)  {
                        
                            console.log(p.number);
            //   const parent = p;
            //   console.log(parent)

            //     Array.prototype.forEach.call(parent.children, child => {
            //     console.log(child)
            //     });
               
            
        



                       }
                    
                    }
            }
           
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
    .number_list {
        padding:0;
        margin:0;
        display: inline-flex;
    }
    .number_list li {
        list-style: none;
      
    }

</style>