import {ref} from "vue";
export default function(){
    const title=ref("Başlık");
    const counter = ref(0);
    const inc = () => {
      counter.value++
    }
    const alertMe = (info)=>{
      console.log(info);
    }
    return {title, counter, inc, alertMe}
}