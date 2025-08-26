<template>
  "اطبع إبداعك الآن"
  <a :href="`https://wa.me/966508283283?text=اطبع إبداعك الآن`" target="_blank">
    <span
      class="fixed  bottom-28 right-10 text-white p-4 rounded-full shadow-lg transition duration-300 z-50 ease-in-out size-12 md:w-14 md:h-14 flex justify-center items-center  group  animate-fadeIn bg-[#25D366] hover:bg-green-600">
      <i class="fa-brands fa-whatsapp text-2xl md:text-3xl"></i>
    </span>
  </a>
</template>

<script setup>
const data = ref("طلب استشاره")

</script>
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
