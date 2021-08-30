export default{
    namespaced:true, //module'un adını başına koymasını sağlıyor. musteri/_contactName
    state:{
        contactName:"puresol",
        contactAdress:"Kanada"
    },
    mutations:{
        setItem(state,name){
            state.contactName = name;
        }
    },
    getters:{
        _contactName: state => state.contactName
    }
}
