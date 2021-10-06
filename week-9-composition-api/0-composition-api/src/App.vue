<template>
  <h3>{{title}}</h3>
  <input type="text" v-model="title"/>
  {{titleLength Message}}
  <!-- <button @click="show=!show">Toggle</button> -->
  <button @click="toggleIt">Toggle</button>
  <p v-if="show">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus unde perspiciatis aliquam saepe, illum, assumenda, at impedit modi excepturi recusandae repudiandae. Optio eligendi aliquid rerum vel, adipisci beatae enim accusantium!
  </p>
  <hr/>

  <button @click="counter++">{{counter}} {{oddOrEven}}</button>
  <hr>

  <input type="text" v-model="searchText"/>
  <p v-if="isTyping">Şu an yazıyor...</p>
</template>
<script>
// import {ref,computed,watch, watchEffect} from "vue";
import Counter from "./composables/Counter.js"
import Header from "./composables/Header.js"
import Search from "./composables/Search.js"
import Toggle from "./composables/Toggle.js"
export default {
  setup(){
    const {counter,oddOrEven} = Counter();
    const {title,titleLengthMessage} = Header();
    const {searchText,isTyping} = Search();
    const {show,toggleIt} = Toggle();

    return {
      title,
      show,
      toggleIt,
      titleLengthMessage,
      counter,
      oddOrEven,
      searchText,
      isTyping
    }
  }


  // data(){
  //   return{
  //     title: "Bu bir başlık"
  //   }
  // }
//   setup() {
//     const title = ref("Bu bir Setup Başlık");
//     const show = ref(false);
//     const toggleIt = () => {
//       show.value=!show.value
//     }
//     // const titleLengthMessage = computed (()=> title.value.length + " adet karakter yazdınız.") // tek satır olan durumlarda bu şekilde yazılabilir.
//     const titleLengthMessage = computed (()=>{
//       return title.value.length + " adet karakter yazdınız."
//     })

//     //!******************************************************
//     const counter = ref(0);
//     const oddOrEven = computed(()=>(counter.value % 2 === 0 ? "Çift" : "Tek"))
//     // watch(counter,(newValue,oldValue) => {
//     //   console.log(oldValue, "=>", newValue);
//     // },)
//     watch([counter, oddOrEven], ([newC,newO], [oldC,oldO])=>{
//       console.log(oldO, "=>", newO);
//     })
//     //!******************************************************

//     const searchText = ref("");
//     const isTyping = ref(false);

//     // watch(searchText, ()=>{
//     //   if(searchText.value.length > 0){
//     //     isTyping.value=true;
//     //     setTimeout(()=> {
//     //       isTyping.value = false;
//     //     },1500)
//     //   } 
//     // })

//     const stop = watchEffect((onInvalidate)=>{ //stop false durumundan sonra durdurmak için
//       if(searchText.value.length > 0){
//         isTyping.value=true;
//         const typing = setTimeout(()=> {
//           isTyping.value = false;
//           stop();
//         },1500);
//         onInvalidate(()=>clearTimeout(typing)) // tekrar eden durumlarda iptal ediyor.
//       } 
//     })

//     return {
//       title,
//       show,
//       toggleIt,
//       titleLengthMessage,
//       counter,
//       oddOrEven,
//       searchText,
//       isTyping
//     }
//   }
}
</script>
