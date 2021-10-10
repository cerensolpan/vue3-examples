<template>
  <h1>aa</h1>
  <h3>{{result}}</h3>
  {{counter}}
</template>
<script setup>
import {computed,watch} from "vue";
const props = defineProps({counter:Number});
const result = computed(()=>(props.counter%2===0? 'Çift':'Tek'));
const emit = defineEmits(["odd-event"]);

watch(result,(result)=>{
  if(result==="Tek") emit("odd-event",true);
})
</script>
