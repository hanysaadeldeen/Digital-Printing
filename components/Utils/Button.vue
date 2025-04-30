<template>
    <button
    :class="color?`text-black`:`text-secondary`"
    class="bg-white w-fit gradient-button border border-secondary font-bold rounded-full px-6 py-2 md:px-10 md:py-3 text-sm md:text-base  ">
       <span class="z-30  relative ">
         {{  title }} 
       </span>
    </button>
</template>

<script setup lang="ts">


interface Props {
    title: string
  color?: string
  backGround?:string
}

defineProps<Props>()
</script>

<style scoped>
.gradient-button {
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: 0.5s ease-in-out;
  background-color:white;
  

}
.gradient-button:hover{
background-color: transparent;
color: black;
border-color: transparent;
} 
.gradient-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -86%; 
  width: 100%;
  height: 100%;
  border-radius: 50px;
  background: linear-gradient(
    135deg,
    #AF99FF 0%,
    #FFF422 100%
  ); 
  transition: left 0.5s ease; 
  z-index: 1; 
}

.gradient-button:hover::before {
  transition: left 0.5s ease; 
  left: 0; 
}
</style>