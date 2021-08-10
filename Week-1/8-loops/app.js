const app = Vue.createApp({
    data(){
        return{
            todoList:[
                {id:1, text:"Vue Hafta1",completed:false},
                {id:2, text:"Vue Hafta2",completed:false},
                {id:3, text:"Vue Hafta3",completed:false},
                {id:4, text:"Vue Hafta4",completed:false},
            ]  
         
        }
    },
    methods:{
        addtoDo(event){
            this.todoList.push({
                id: new Date().getTime(),
                text: event.target.value,
                completed:false,
            });
            event.target.value="";
        },
        removeItem(todoItem){
            this.todoList=this.todoList.filter(todo=> todo!=todoItem)
        }
    },
    computed:
{
    completedItemCount(){
        return this.todoList.filter((t)=>t.completed).length;
    },
    uncompletedItemCount(){
        return this.todoList.filter((t)=>!t.completed).length;
    }
}
});
app.mount("#app");
