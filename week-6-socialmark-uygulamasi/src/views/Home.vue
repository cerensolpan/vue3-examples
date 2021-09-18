<template>
  <div>
    <app-header />
    <div class="flex flex-row">
      <SideBar @category-changed="updateBookmarkList"/>
      <app-bookmark-list :items ="bookmarkList"/>
    </div>
  </div>
</template>
<script>
import SideBar from "../components/Home/Sidebar.vue";
export default {
  components: {
    SideBar,
  },
  data(){
    return{
      bookmarkList :[]
    }
  },
  created(){
    this.$appAxios.get("/bookmarks?_expand=category&_expand=user").then(bookmark_list_response =>{ //expand category sonunda Id ekliyor
      console.log(bookmark_list_response);
      this.bookmarkList = bookmark_list_response?.data || [];
    })
  },
  methods:{
    updateBookmarkList(categoryId){
         this.$appAxios.get(`/bookmarks?_expand=category&_expand=user&categoryId=${categoryId}`).then(bookmark_list_response =>{ //expand category sonunda Id ekliyor
      console.log(bookmark_list_response);
      this.bookmarkList = bookmark_list_response?.data || [];
    })
    }
  }
};
</script>
