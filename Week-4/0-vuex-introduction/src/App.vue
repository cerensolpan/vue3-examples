<template>
  <p>
    <!-- <ul>
      <li v-for="user in $store.state.userList" :key="user">
        {{user}}
        </li>
    </ul> -->
    <!-- {{$store.state.fullName}} -->
    <!-- <button @click="updateName">FullName bilgisini değiştir.</button> -->
  </p>
  <UserList/>
  <NewUser />
</template>

<script>
// import {mapGetters} from "vuex"
import UserList from "@/components/UserList"
import NewUser from "@/components/NewUser"

export default {
  name: 'App',
  components:{
    UserList,
    NewUser
  },
  created(){
    // console.log(this.$store.state.user);
    // console.log(this.$store.state.theme);
    // console.log(this.$store.getters._woodItems);
    // console.log(this.$store.getters.activeUser);
    // console.log('this.activeUser :>>', this.activeUser);
  },
  methods:{
    // updateName(){
    //   this.$store.state.fullName="Ceren Ture"
    // }
  },
  computed:{
  //   // ...mapGetters(["woodItems","activeUser"]),
  //   ...mapGetters({
  //     woodItems : "_woodItems",
  //     activeUser : "_activeUser"
  //   })
   } 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
