<template>
  <div class="container">
    <h3 class="text-center">ToDo App</h3>
    <hr class="my-2" />
    <AddSection :addNewTodo="addNewTodo" @add-todo="addNewTodo" />
    <ListSection />
    <!-- <TodoList @delete-todo-item="deleteItem" :myData="todoList"/>
        <ResultBar :itemCount="todoList.length"/> -->
  </div>
</template>

<script>
import AddSection from "@/components/AddSection";
// import TodoList from "@/components/TodoList";
// import ResultBar from "@/components/ResultBar";
import ListSection from "@/components/ListSection";
export default {
  components: {
    AddSection,
    // TodoList,
    // ResultBar,
    ListSection,
  },
  created() {
    // setTimeout(() =>{
    //     this.todoList=[
    //         {id:1,text:"Bootcamp #2"},
    //         {id:2,text:"Bootcamp #2.1"},
    //         {id:3,text:"Bootcamp #2.2"},
    //         {id:4,text:"Bootcamp #2.3"},
    //         {id:5,text:"Bootcamp #2.4"},
    //         {id:6,text:"Bootcamp #2.5"},
    //     ]
    // },2000);
  },
  data() {
    return {
        provideData:{
        todoList: [
        { id: 1, text: "Bootcamp #2" },
        { id: 2, text: "Bootcamp #2.1" },
        { id: 3, text: "Bootcamp #2.2" },
        { id: 4, text: "Bootcamp #2.3" },
        { id: 5, text: "Bootcamp #2.4" },
        { id: 6, text: "Bootcamp #2.5" },
      ],
        }

    };
  },
    provide() {
    return {
        provideData:this.provideData,
        deleteItem:this.deleteItem,
    }
  },
  methods: {
    testEvent(data) {
      alert(data);
    },
    deleteItem(todoItem) {
      this.provideData.todoList = this.provideData.todoList.filter((t) => t != todoItem);
    },
    addNewTodo(todo) {
      this.provideData.todoList.push({
        id: new Date().getTime(),
        text: todo,
      });
    },
  },
};
</script>

<style></style>
