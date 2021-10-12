<template>
  <div class="w-screen h-screen bg-gray-800 flex flex-row text-white items-start justify-center">
  <app-sidebar :invoices="invoiceList" :editInvoice="editInvoice"/>
  <invoice-content :saveInvoice="saveInvoice" :activeInvoice="state.activeInvoice"/>
  </div>
</template>
<script setup>
import {ref,reactive} from "vue"
import appSidebar from "./components/appSidebar.vue"
import invoiceContent from "./components/invoiceContent.vue"
const invoiceList= ref([
  {
    id: new Date().getTime(),
    contact:{
    contact_name:"Demo 1",
    email:"demo@demo.com",
    city:"Demo City",
    country:"Demo Country",
    zipcode:"Demo Zipcode",
  },
   items:[
     {
        id: new Date().getTime(),
        name:"Demo Ürün",
        qrt:1,
        unit_price:10.0,
        total_price:10.0,
     }
   ]
  }
])
const state=reactive({activeInvoice:null})
const saveInvoice=(invoice)=>{
  invoiceList.value.push(invoice)
}
const editInvoice=(invoice)=>{
  state.activeInvoice = invoice
}

</script>

