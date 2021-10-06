<template>
    <div class="text-green-300">{{completed}} adet tamamlanmış task bulunuyor.</div>
    <div class="text-red-300">{{uncompleted}} adet tamamlanmamış task bulunuyor.</div>
</template>
<script>
import {computed} from "vue"
export default {
    props:{
        todoList: Array,
    },
    setup(props){
        const completed=computed(()=> props.todoList.filter(i=>i.completed).length)
        const uncompleted=computed(()=> props.todoList.filter(i=>!i.completed).length)

        return {completed, uncompleted}
    }
}
</script>