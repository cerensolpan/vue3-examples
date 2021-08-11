const app = Vue.createApp({
    data(){
        return{
            showContainer:false,
            counter:0,
          
        };

    },
    computed:{
        counterBoxClass(){
            return {
                'bg-success text-white':this.counter>0,'bg-danger text-black': this.counter<0
            }
        }
    }
});
app.mount("#app");