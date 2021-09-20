<template>
  <div>
    <app-header />
    <div class="flex flex-row">
      <SideBar @category-changed="updateBookmarkList"/>
      <app-bookmark-list v-if="bookmarkList.length > 0" :items ="bookmarkList"/>
      <div v-else>Bookmark Bulunmamaktadır.</div>
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
      const url = categoryId ? `/bookmarks?_expand=category&_expand=user&categoryId=${categoryId}` : `/bookmarks?_expand=category&_expand=user`
      this.$appAxios.get(url).then(bookmark_list_response =>{ //expand category sonunda Id ekliyor
      this.bookmarkList = bookmark_list_response?.data || [];
    })
    }
  }
};
</script>
