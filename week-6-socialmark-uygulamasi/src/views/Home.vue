<template>
  <div>
    <app-header />
    <div class="flex flex-row">
      <SideBar />
      <app-bookmark-list/>
    </div>
  </div>
</template>
<script>
import SideBar from "../components/Home/Sidebar.vue";
export default {
  components: {
    SideBar,
  },
};
</script>
