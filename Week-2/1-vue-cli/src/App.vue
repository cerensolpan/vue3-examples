<template>
<app-header/>
<div class="container">
    <h3>Bu ilk CLI uygulaması</h3>
</div>
<CounterItem></CounterItem>
<!--<benim-sayacim></benim-sayacim>-->
<!--<counter-item/>-->
<!--<counterItem/>-->
</template>

<script>
import CounterItem from "@/components/CounterItem"
export default {
    components:{
        CounterItem,
        // "benim-sayacim": CounterItem,
    }
}
</script>

<style>

</style>
