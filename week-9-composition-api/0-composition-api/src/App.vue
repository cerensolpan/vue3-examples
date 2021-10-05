<template>
  <h3>{{title}}</h3>
  <input type="text" v-model="title"/>
  {{titleLengthMessage}}
  <!-- <button @click="show=!show">Toggle</button> -->
  <button @click="toggleIt">Toggle</button>
  <p v-if="show">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus unde perspiciatis aliquam saepe, illum, assumenda, at impedit modi excepturi recusandae repudiandae. Optio eligendi aliquid rerum vel, adipisci beatae enim accusantium!
  </p>
  <hr/>
  <button @click="counter++">{{counter}} {{oddOrEven}}</button>
</template>
<script>
import {ref,computed,watch} from "vue";
export default {
  // data(){
  //   return{
  //     title: "Bu bir başlık"
  //   }
  // }
  setup() {
    const title = ref("Bu bir Setup Başlık");
    const show = ref(false);
    const toggleIt = () => {
      show.value=!show.value
    }
    // const titleLengthMessage = computed (()=> title.value.length + " adet karakter yazdınız.") // tek satır olan durumlarda bu şekilde yazılabilir.
    const titleLengthMessage = computed (()=>{
      return title.value.length + " adet karakter yazdınız."
    })
    const counter = ref(0);
    const oddOrEven = computed(()=>(counter.value % 2 === 0 ? "Çift" : "Tek"))
    watch(counter,(newValue,oldValue) => {
      console.log(oldValue, "=>", newValue);
    },)
    return {
      title,
      show,
      toggleIt,
      titleLengthMessage,
      counter,
      oddOrEven
    }
  }
}
</script>
