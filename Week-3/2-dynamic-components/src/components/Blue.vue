<template>
    <h3 class="bg-blue text-white">Blue Component</h3>
    <input type="text"/>
</template>
<script>
export default {
    mounted(){
        console.log("Blue mounted");
    },
    activated(){
        console.log("Blue activated");
    },
    deactivated(){
        console.log("Blue deactivated");
    }
}
</script>