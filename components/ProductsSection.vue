<template>
    <div class="container mx-auto">
        <div class="grid grid-cols-1 lg: md:grid-cols-3 xl:grid-cols-4 gap-y-8 gap-x-6  md:gap-y-14 md:gap-x-12">
<ProductCard  v-for="product in Products" :key="product.title" :title="product.title" :description="product.description"  :img="product.img" /> 
        </div>
    </div>
</template>

<script setup lang="ts">
import ProductCard from './Utils/ProductCard.vue';
import product from "../assets/img/product.svg"

interface Product {
    img:string
    title: string
    description: string
}

const Products:Product[] = [
    {
        img: product,
        title: "تغليف المنتجات",
        description:"أول انطباع يدوم ، اطبع كروت تعبر عن احترافيتك"
    },
    {
        img: product,
        title: "الاستيكرات والملصقات",
        description:"أول انطباع يدوم ، اطبع كروت تعبر عن احترافيتك"
    },
    {
        img: product,
        title: "الاستيكرات والملصقات",
        description:"أول انطباع يدوم ، اطبع كروت تعبر عن احترافيتك"
    },
    {
        img: product,
        title: "الاستيكرات والملصقات",
        description:"أول انطباع يدوم ، اطبع كروت تعبر عن احترافيتك"
    },
    {
        img: product,
        title: "الاستيكرات والملصقات",
        description:"أول انطباع يدوم ، اطبع كروت تعبر عن احترافيتك"
    }     ,
    {
        img: product,
        title: "الاستيكرات والملصقات",
        description:"أول انطباع يدوم ، اطبع كروت تعبر عن احترافيتك"
    },
    {
        img: product,
        title: "الاستيكرات والملصقات",
        description:"أول انطباع يدوم ، اطبع كروت تعبر عن احترافيتك"
    }     
]

</script>

<style scoped>

</style>