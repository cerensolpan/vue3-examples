<template>
  <h3>{{title}}</h3>
  <input type="text" v-model="title"/>
</template>
<script>
import {ref} from "vue";
export default {
  // data(){
  //   return{
  //     title: "Bu bir başlık"
  //   }
  // }
  setup() {
    const title = ref("Bu bir Setup Başlık");

    return {
      title
    }
  }
}
</script>
