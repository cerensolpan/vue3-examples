import {ref,computed} from "vue";
export default function () {
    const title = ref("Bu bir Setup Başlık");

    // const titleLengthMessage = computed (()=>{
    //     return title.value.length + " adet karakter yazdınız."
    // })
    const titleLengthMessage = computed (()=> title.value.length + " adet karakter yazdınız.") // tek satır olan durumlarda bu şekilde yazılabilir.

    return {title,titleLengthMessage}
}