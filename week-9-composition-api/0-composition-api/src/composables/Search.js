import {ref,watchEffect}  from "vue";
export default function(){
    const searchText = ref("");
    const isTyping = ref(false);

    // watch(searchText, ()=>{
    //   if(searchText.value.length > 0){
    //     isTyping.value=true;
    //     setTimeout(()=> {
    //       isTyping.value = false;
    //     },1500)
    //   } 
    // })

    const stop = watchEffect((onInvalidate)=>{ //stop false durumundan sonra durdurmak için
      if(searchText.value.length > 0){
        isTyping.value=true;
        const typing = setTimeout(()=> {
          isTyping.value = false;
          stop();
        },1500);
        onInvalidate(()=>clearTimeout(typing)) // tekrar eden durumlarda iptal ediyor.
      } 
    })
    

    return {searchText,isTyping}
}