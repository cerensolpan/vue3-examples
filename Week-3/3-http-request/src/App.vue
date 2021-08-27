<template>
<div class="container">
  <h3>Alışveriş Listesi</h3>
  <div>
    <input type="text" placeholder="ne alacaksın?" @keydown.enter="onSave">
  </div>
  <ul>
    <li v-for="item in itemsList" :key="item.id" class="d-flex justify-content-between align-items-center">
      <span>{{item.title}}</span>
      <button class="sm red">Sil</button>
    </li>
  
  </ul>

  <small class="text-blue">{{itemCount}} adet alınacak ürün vardır.</small>
</div>
</template>

<script>
import axios from "axios";
export default {
data(){
  return{};
},
mounted(){
  axios.get("http://localhost:3000/items").then(items_response =>{
    console.log("items_response :>>",items_response);
    this.itemsList = items_response.data || [];
    console.log("this.itemsList :>>",this.itemsList);
});
},
methods:{
onSave(e){
  const saveObject = {
    title: e.target.value,
    created_at: new Date(),
    completed:false
    };
    // sudo npm install -g json-server
    // json-server --watch db.json
  axios.post("http://localhost:3000/items", saveObject).then(save_response =>{
    console.log(save_response);
    this.itemsList.push(save_response.data)
    e.target.value="";
    e.target.focus();
  })
},
onDelete(){
  axios.delete(`http://localhost:3000/items/${item.id}`).then(delete_response=>{
    console.log(delete_response);
  })
}
},
computed:{
  itemCount(){
     return this.itemsList.length || 0;
  }
}
}
</script>

<style>

</style>
