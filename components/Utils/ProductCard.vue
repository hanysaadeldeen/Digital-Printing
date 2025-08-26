<template>
    <div class="h-full flex flex-col justify-between items-center">
        <div class="w-full mb-4 md:mb-8 overflow-hidden rounded-2xl">
            <img :src="img"
                class="w-full  object-container hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out"
                width="424px" height="565px" :alt="title" loading="lazy">
        </div>
        <!-- <div class="info space-y-4 mb-8">
            <h1 class="text-2xl font-bold">{{ title }}</h1>
            <p class="text-secondary">{{ description }}</p>
        </div> -->
        <Button title="اطلب المنتج" :data="title" />
    </div>
</template>

<script setup lang="ts">
import Button from './Button.vue';

defineProps({
    img: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
})

</script>

<style scoped></style>