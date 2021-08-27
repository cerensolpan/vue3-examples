<template>
  <div class="container">
    <!-- <UserSection :userList="userList" @new-item="userList.push($event)" /> -->
    <!-- <UserSection @new-item="userList.push($event)" /> -->
    <UserSection/>
  </div>
</template>

<script>
import UserSection from "@/components/UserSection";
export default {
  components: { UserSection },
  data() {
    return {
      // userList:["Ceren","Baris","Furkan"]
      provideData: {
        userList: ["Ceren", "Baris", "Furkan"],
      },
    };
  },
  methods:{
    newItem(item){
      this.provideData.userList.push(item)
    }
  },
  provide() {
    return {
      userList: this.provideData.userList,
      newItem: this.newItem,
    };
  },
};
</script>
