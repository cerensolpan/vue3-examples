<script setup>
import {onErrorCaptured, ref, defineAsyncComponent} from "@vue/runtime-core"
// import Todos from "./components/Todos.vue"
// import User from "./components/User.vue"
const Todos =defineAsyncComponent(()=> import("./components/Todos.vue"))
const User =defineAsyncComponent(()=> import("./components/User.vue"))
onErrorCaptured((e)=>{
  err.value=e;
  return true;
})
</script>

<template>
<span v-if="err" class="error">{{err}}</span>
  <suspense v-else>
      <template #default>
        <div>
          <User/>
          <hr>
          <Todos/>
        </div>
      </template>
      <template #fallback>
        <div>Loading..</div>
      </template>
  </suspense>
  <!-- <User/> -->
</template>


