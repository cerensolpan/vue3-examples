<template>
<div class="card border p-2">
    <div class="d-flex justify-content-end">
        <button class="btn btn-primary btn-sm" @click="$router.push({ name: 'NewBookmark'})">+ Yeni Ekle</button>
    </div>

    <table class="table table-striped table-hover">
    <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">Başlık</th>
        <th scope="col">URL</th>
        <th scope="col">Sil</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="i in 10" :key="i">
        <th scope="row">1</th>
        <td>Vue3 Dokümantasyon</td>
        <td>https://v3.vuejs.org</td>
        <td>
            <button class="btn btn-sm btn-danger">Sil</button>
        </td>
        </tr>
    </tbody>
    </table>
</div>

</template>
<script>
export default {
    created(){
        this.$appAxios.get("/bookmarks").then(bookmarks_list_response =>{
            console.log(bookmarks_list_response);
        })
    }
}
</script>