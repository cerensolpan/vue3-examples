import {createStore} from "vuex";

const store= createStore({
    state:{
        user:{
            name:"Ceren",
            lname:"Ture",
            age:29,
            password:12345,
        },
        theme:"dark",
        fullName:"Baris Ture",
        permissions:[1,2,3,4,5],
        userList:["Cagla","Tugba","Didem"],
        itemList: [
            { id: 1, title: "Masa", type: "mobilya" },
            { id: 2, title: "Sandalye", type: "mobilya" },
            { id: 3, title: "TV", type: "elektronik" },
            { id: 4, title: "Monitor", type: "elektronik" },
            { id: 5, title: "Bardak", type: "plastik" }
          ]
    },
    mutations:{
        newItem(state,item){
            state.itemList.push(item);
        }
    },
    actions:{
        // newItem(context,item){
            newItem({ commit },item){
            console.log("item:>>", item);
            setTimeout(()=>{
                // context.state => state'in içindeki bilgilere ulaşabilirsin.
                // context.dispatch => başka bir action çalıştırabilirsin.
                // context.commit("newItem",item); // mutation çalıştırır.
                commit("newItem",item);
            },2000);
        }
    },
    getters: {
        _woodItems: state => state.itemList.filter(i => i.type === "mobilya"),
        _activeUser(state){
            const user = {
                ...state.user
            };
            delete user.password;
            return user;
        }    
    }
});

export default store;