<template>
    <h1>{{ $route.params.userId }}</h1>
    <p>Açıklamalar burada yer alacaktır.</p>
    <button @click="goBack">Geri Dön</button>
</template>
<script>
export default {
    created(){
        console.log(this.$route);
    },
    methods:{
        goBack(){
            this.$router.push("/")
        }
    }
}
</script>