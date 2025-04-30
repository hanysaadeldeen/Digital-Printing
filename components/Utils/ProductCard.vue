<template>
    <div>
        <div class="w-full mb-10 overflow-hidden rounded-2xl">
            <img :src="img" class="w-full  object-container hover:scale-125 transition-all duration-300 ease-in-out" :alt="title" >
        </div>
        <div class="info space-y-4 mb-8">
            <h1 class="text-2xl font-bold">{{ title }}</h1>
            <p class="text-secondary">{{ description }}</p>
        </div>
        <Button title="اطلب المنتج" />
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
    },
    description: {
        type: String,
        required: true
    }
})

</script>

<style scoped></style>