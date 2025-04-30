<template>
  <footer class="mt-10 md:mt-20 ">

    <div class=" px-4 container mx-auto mb-10 md:mb-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 bg-white gap-4">
      <div class="col-span-2">
        <div class="logo overflow-hidden flex flex-col gap-6 items-start">
          <img src="~/assets/img/footerLogo.svg" class="object-contain" alt="Logo" >
          <p class="w-full sm:max-w-[304px] text-base font-normal text-black">صفحة حلول الطباعة - أحد حلول Digital Order لتحوّل فكرتك لمطبوعات تليق بعلامتك.</p>
        </div>
      </div>
      <div class="FastLinks">
        <p class="text-secondary font-normal text-sm mb-6">روابط سريعة</p>
        <ul class="flex flex-col items-start gap-2">
          <li>عن الشركة</li>
          <li>الحلول</li>
        </ul>
      </div>
      <div class="leagl">
        <p class="text-secondary font-normal text-sm mb-6" >قانوني</p>
        <ul class="flex flex-col items-start gap-2">
          <li>سياسة الخصوصية</li>
          <li>الشروط والأحكام </li>
        </ul>
      </div>
      <div class="Follow">
        <p class="text-secondary font-normal text-sm mb-6">تابعنا</p>
        <div class="flex items-center justify-between gap-4 md:gap-6">
          <div class="bg-primary rounded-full p-1.5 text-center">
            <a href="#" target="_blank">

              <BxFacebook class="text-white text-2xl font-bold"/>
            </a>

          </div>
          <div class="bg-primary rounded-full p-1.5 text-center">
            <a href="#" target="_blank">

              <AkInstagramFill class="text-white text-2xl font-bold"/>
            
            </a>

          </div>
          <div class="bg-primary rounded-full p-1.5 text-center">
            <a href="#" target="_blank">

              <AkWhatsappFill class="text-white text-2xl font-bold"/>
              
            </a>

          </div>
          <div class="bg-primary rounded-full p-1.5 text-center">
            <a href="#" target="_blank">

              <AkLinkedInFill class="text-white text-2xl font-bold"/>
             
            </a>

          </div>
        </div>
      </div>
    </div>
  <div class="bg-black text-white rounded-t-card p-4 h-16  flex items-center justify-center  md:h-20 px-4">
    <p class="text-center font-normal text-sm">جميع الحقوق محفوظة 2025 © شركة ديجتال اوردر . بواسطة Digital Order</p>
  </div>
  </footer>
</template>

<script setup lang="ts">
import { BxFacebook,AkInstagramFill , AkWhatsappFill,AkLinkedInFill} from '@kalimahapps/vue-icons';
</script>


<style scoped>
ul li {
  list-style-type: none;
  color: #0A0911;
  font-weight: 400;
  font-size: 16px;

}</style>
