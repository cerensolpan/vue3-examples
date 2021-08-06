const app = Vue.createApp({
    data(){
        return{
            counter:0,
            counter2:0,
        };
    },
    methods:{
        // getCounterResult(){
        //     console.log("Counter 1 Çalıştı");
        //     return this.counter > 5 ? "BÜYÜK" : "KÜÇÜK";
        // },
        // getCounter2Result(){
        //     console.log("Counter 2 Çalıştı");
        //     return this.counter2 > 5 ? "BÜYÜK" : "KÜÇÜK";
        },  // Birini tetiklesen bile arkada ikisi de çalışır.
    // methods:{
    //     inc(){
    //         this.counter++;
    //     },
    //     dec(){
    //         this.counter--;
    //     }
    // }
    computed:{
        getCounterResult(){
            console.log("Counter 1 Çalıştı");
            return this.counter > 5 ? "BÜYÜK" : "KÜÇÜK";
        },
        getCounter2Result(){
            console.log("Counter 2 Çalıştı");
            return this.counter2 > 5 ? "BÜYÜK" : "KÜÇÜK";
        }
    },// Birini tetiklediginde sadece o fonksiyon çalışır.
    watch:{
        counter(newValue,oldValue){
            console.log(oldValue, "=>", newValue);
        }
    }
}).mount("#app");