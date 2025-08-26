<template>
  <div class="px-4">
    <HeroSection />
    <div class="flex my-20">
      <Swiper slidesPerView="auto" :spaceBetween="10" :modules="modules" class="mySwiper">
        <SwiperSlide :class="FaqsFilter === 'PackagingPaperBags' && 'active'"
          @click="FaqsFilter = 'PackagingPaperBags'">
          أكياس و ورق تغليف
        </SwiperSlide>
        <SwiperSlide :class="FaqsFilter === 'Billboards' && 'active'" @click="FaqsFilter = 'Billboards'">
          لوحات إعلانية
        </SwiperSlide>
        <SwiperSlide :class="FaqsFilter === 'PrintCollaterals' && 'active'" @click="FaqsFilter = 'PrintCollaterals'">
          مطبوعات ورقية
        </SwiperSlide>
        <SwiperSlide :class="FaqsFilter === 'DiversePrintMaterials' && 'active'"
          @click="FaqsFilter = 'DiversePrintMaterials'">
          مطبوعات متنوعة
        </SwiperSlide>
      </Swiper>
    </div>
    <ProductsSection :ProductFilter="FaqsFilter" />
    <HookSection />
    <WhatsUpScroll />
    <ScrollToTop />
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const modules = [Pagination];
const FaqsFilter = ref("PrintCollaterals");

</script>

<style scoped>
.swiper-slide {
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: block;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  color: #8C8C8C;
  border: 1px solid #8C8C8C;
  border-radius: 12px;
  transition: all 0.3s ease;
  white-space: nowrap;
  width: fit-content;
}

@media (max-width: 768px) {
  .swiper-slide {
    padding: 8px 16px;
    font-size: 12px;
  }
}

.swiper-slide.active {
  background-color: #fff422;
  color: black;
  border-color: white;
}

.swiper-slide:hover {
  background-color: #f1e500;
  color: black;
  border-color: white;
}
</style>
