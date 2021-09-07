<template>
      <div>
        <div class="p-2 grid grid-cols-5 gap-4">
            <BookmarkListItem v-for="i in 10" :key="i"/>
        </div>
      </div>
</template>
<script>
import BookmarkListItem from "./BookmarkListItem.vue"
export default {
    components:{
        BookmarkListItem
    }
}
</script>