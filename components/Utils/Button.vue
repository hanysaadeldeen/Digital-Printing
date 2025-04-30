<template>
    <button
    :class="color?`text-black`:`text-secondary`"
    class="bg-white border border-secondary font-bold rounded-full px-6 py-2 md:px-10 md:py-3 text-sm md:text-base  ">
       {{    title }} 
    </button>
</template>

<script setup lang="ts">


interface Props {
    title: string
    color?: string
}

defineProps<Props>()
</script>

<style scoped>

</style>