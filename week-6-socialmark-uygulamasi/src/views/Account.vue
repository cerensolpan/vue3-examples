<template>
<div>
    <app-header />
    <div class="flex flex-row">
        <side-bar/>
        <component :is="$route.meta.componentName" :items="bookmarkList"/>
        <!-- <app-bookmark-list v-if="bookmarkList.length > 0" :items ="bookmarkList"/>
        <div v-else>Bookmark Bulunmamaktadır.</div> -->
    </div>
</div>
</template>

<script>
import sideBar from "@/components/Account/sideBar"
import AppHeader from '../components/Shared/appHeader.vue'
export default {
    components:{
        sideBar,
        AppHeader
    },
    data(){
    return{
      bookmarkList :[]
    }
  },
  created(){
    // this.$appAxios.get("/bookmarks?_expand=category&_expand=user").then(bookmark_list_response =>{ //expand category sonunda Id ekliyor
    //   console.log(bookmark_list_response);
    //   this.bookmarkList = bookmark_list_response?.data || [];
    // })
  },
}
</script>