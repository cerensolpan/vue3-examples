<template>
  <!-- <ul>
    <li v-for="user in userList" :key="user">{{ user }}</li>
  </ul> -->
  <!-- <ListSection :userList="userList"/> -->
  <ListSection/>
  <!-- <AddSection @new-item="$emit('new-item', $event)"/> -->
  <AddSection/>
<!-- <button @click="$emit('new-item', new Date().getTime())">Set Data</button> -->
</template>
<script>
    import ListSection from "@/components/ListSection";
    import AddSection from "@/components/AddSection";
export default {
    // props:["userList"],
    components:{ListSection,AddSection},
}
</script>
