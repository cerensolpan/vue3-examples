<template>
    <div class="container">

        <div class="header">         
            <slot name="title"/>
        </div>

        <hr>

        <div class="content my-2">
            <slot name="content"/>
        </div>

        <slot/>

        <div class="footer text-right">
            <button class="mr-2">Kapat</button>
            <button class="green ml-2">Kaydet</button>
        </div>
        
    </div>

    
</template>