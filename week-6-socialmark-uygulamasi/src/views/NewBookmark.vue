<template>
    <div class="login_register_container">
      <h3 class="text-2xl text-center mb-3">Yeni Ekle</h3>
      <input ref="title" type="text" v-model="userData.title" placeholder="Başlık" class="input mb-3" />
      <input type="text" v-model="userData.url" placeholder="URL" class="input mb-3" />
      <select v-model="userData.categoryId" class="input mb-3">
        <option disabled value="" selected>Kategori</option>
        <option v-for="category in categoryList" :key="category.id" :value="category.id">{{ category.name }}</option>
      </select>
      <textarea v-model="userData.description" placeholder="Açıklama" class="input mb-3" cols="30" rows="10"></textarea>
      <div class="flex items-center justify-end gap-x-1">
        <button @click="$router.push({name: 'HomePage'})" class="secondary-button">İptal</button>
        <button @click="onSave" class="default-button">Kaydet</button>
      </div>
    </div>
</template>
<script>
import {mapGetters} from "vuex"
export default {
  data(){
    return{
      categoryList:[],
      userData: {
        title:null,
        url: null,
        category_id:null,
        description:null,
      }
    };
  },
  mounted(){
    this.$appAxios.get("/categories").then(category_response =>{
      // console.log(category_response);
      this.categoryList = category_response?.data || [];
    })
    console.log(this.$refs.title);

    // setTimeout(() => {
    //   console.log(this.$refs.title);
    // },100)

    // this.$nextTick(() =>{
    //   console.log(this.$refs.title);
    // })

  },
  methods:{
    onSave(){
      console.log(this.userData);
      console.log(this._getCurrentUser);
      const saveData = {
        ... this.userData,
        userId : this._getCurrentUser?.id,
        created_at: new Date()
      }
      this.$appAxios.post("/bookmarks", saveData).then(save_bookmark_response =>{
        console.log(save_bookmark_response);
        this.userData=
         {
        title:null,
        url: null,
        categoryId:null,
        description:null,
      };
      this.$router.push({ name: "HomePage"});
      })
    }
  },
  computed :{
    ... mapGetters(["_getCurrentUser"])
  }

}
</script>