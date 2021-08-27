<template>
      <!-- <button @click="$emit('new-item', new Date().getTime())">Set Data</button> -->
      <button @click="newItem(new Date().getTime())">Set Data</button>
</template>
<script>
export default {
    inject:["newItem"]
}
</script>