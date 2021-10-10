<template>
  <h3>{{title}}</h3>
  <input type="text" v-model="title">
  <button @click="inc">{{counter}}</button>
  <hr>
  <oddOrEven :counter="counter" @odd-event="alertMe"/>
  <hr>
  <h1>User App</h1>
  <input type="text" v-model="state.personal.name">
  <input type="text" v-model="state.personal.lname">
  {{name}} {{lname}}
  
</template>
<script setup>
//! beforeCreate, created ve data yerine geçer
import {ref,reactive,watch} from "vue" //ref ulaşmak için .value yapmak gerekir reactivede yok.
import oddOrEven from "./components/oddOrEven.vue"
import Utils from "./composables/Utils"
const {title,counter,inc, alertMe} = Utils();

//! UserApp
const state = reactive({
  personal:{
    name: "Ceren",
    lname: "Ture"
  }
})

watch(
  ()=> JSON.parse(JSON.stringify(state.personal)),
  (newPersonal,oldPersonal)=>{
    console.log(oldPersonal);
    console.log(newPersonal);
  }
)

console.log("state :>>", state.personal.name);
// import {ref} from "vue"
// const title=ref("Başlık");
// const counter = ref(0);
// const inc = () => {
//   counter.value++
// }
// const alertMe = (info)=>{
//   console.log(info);
// }
</script>