<template>
  <h1>aa</h1>
  <h3>{{result}}</h3>
</template>
<script setup>
import {computed} from "vue";
const props = defineProps({counter:Number});
const result = computed(()=>(props.counter%2===0? 'Çift':'Tek'))
</script>
