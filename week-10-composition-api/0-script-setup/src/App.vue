<template>
  <h3>{{title}}</h3>
  <input type="text" v-model="title">
  <button @click="inc">{{counter}}</button>
  <hr>
  <oddOrEven :counter="counter"/>
</template>
<script setup>
import oddOrEven from "./components/oddOrEven.vue"
import {ref} from "vue"
const title=ref("Başlık");
const counter = ref(0);
const inc = () => {
  counter.value++
}
</script>