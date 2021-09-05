<template>
    <h1>Home</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, non maiores aliquid mollitia incidunt veniam iure harum ut distinctio repellat, veritatis quibusdam doloremque vitae adipisci reprehenderit error minima nemo consequatur.</p>
    <input type="text" @keydown.enter="gotoDetails">
</template>

<script>
export default {
    methods:{
        gotoDetails(e){
            // this.$router.push(`/detay/${e.target.value}`)
            this.$router.push({
                name: "DetailPage",
                params:{
                    userId:e.target.value
                },
                query:{
                    type:"DetailAuth",
                    user:"Ceren"
                }
            })
        }
    }
}
</script>
