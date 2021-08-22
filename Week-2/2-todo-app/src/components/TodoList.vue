<template>
     <ul>
        <!-- <li v-for="todoItem in todoList" :key="todoItem.id" class="d-flex justify-content-between align-items-center">
        <span>Todo Item #{{ todoItem.text }}</span>
        <button @click="deleteItem(todoItem)" class="sm red">Sil</button>
        </li> -->
        <TodoListItem v-for="todoItem in provideData.todoList" :key="todoItem.id" :item="todoItem"/>
    </ul>
</template>
<script> 
import TodoListItem from "@/components/TodoListItem";
export default{
    inject:["provideData"],
    // props:["myData"],
    // props:{
    //     myData:{
    //         type:String,
    //         required:false,
    //         default:"",
    //     }
    // },
    components:{
        TodoListItem
    }

}
</script>