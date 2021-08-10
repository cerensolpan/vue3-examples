const app = Vue.createApp({
    data(){
        return{
            showBorder:false,
            redBG:true,
            boxClass:"border red",
        };
    },
    computed:{
        boxClasses(){
            return {border: this.showBorder,red:this.redBG};
        }
    }

});
app.mount("#app");
