<template>
  <div class="w-screen h-screen bg-gray-800 flex flex-row text-white items-start justify-center">
  <app-sidebar/>
  <invoice-content/>
  </div>
</template>
<script setup>
import appSidebar from "./components/appSidebar.vue"
import invoiceContent from "./components/invoiceContent.vue"
</script>

