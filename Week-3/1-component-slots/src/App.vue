<template>
  <Modal>

    <template #title>
      <h3>Slot ile gelen title</h3>
    </template>

    <template v-slot: content>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi expedita blanditiis inventore placeat aperiam, debitis unde illum amet earum nesciunt libero molestias fuga magni in ipsum. Recusandae ipsam sunt unde?</p>
    </template>

    <template #default>
      Bu default bilgi.
    </template>

  </Modal>
</template>

<script>
import Modal from "@/components/Modal"
export default {
components:{
  Modal
  }
}
</script>

<style>

</style>
