<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";

const showButton = ref(false);
const route = useRoute();

const handleScroll = () => {
    showButton.value = window.scrollY > window.innerHeight * 0.5;
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});

watch(route, () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<template>
    <button v-if="showButton" @click="scrollToTop"
        class="fixed bottom-10 right-10 text-[#686968] p-4 rounded-full shadow-lg transition duration-300 z-50 ease-in-out size-12 md:w-14 md:h-14 flex justify-center items-center opacity-0 animate-fadeIn bg-[#fff400] hover:bg-[#e9dd00]">
        <i class="fa-solid fa-chevron-up text-2xl "></i>
    </button>
</template>

<style>
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fadeIn {
    animation: fadeIn 0.5s ease-in-out forwards;
}
</style>
