<template>
<div class=" w-[32rem] h-48 flex flex-col rounded-lg bg-nakama-beige shadow-xl">
  <div class="flex flex-row w-full h-3/4 mt-4 ml-2">
    <img src="../assets/academicworkwbg.png" alt="" class="h-12 w-14">
    <div class="mt-2 ml-2">
      <div class="flex flex-row w-full">
        <p class="text-xs font-bold">VismaITDS</p>
        <p class="text-xs font-bold text-black ml-2">Monthly Event</p>
        <p class="text-xs font-bold text-red-500 ml-auto mr-4">estimert tidspunkt:10/09</p>
      </div>
      <div class="mb-5">
        <p class="text-xl text-black flex self-start  ">Lønningspils?</p>
        <p class="text-l  text-black">Checkpoint celebration! Lets celebrate that we are done with another checkpoint.</p>
      </div>
      <div class="w-full flex items-center">
        <p class="text-s font-bold mr-2"> 34 Kommer</p>
        <p class="text-s font-bold text-black ml-2">22 Intresert</p>
        <StyledButton :text="'Intresert'" class="ml-auto mr-4 w-22"></StyledButton>
        <StyledButton :text="'velg dato'" class="mr-4 w-22"></StyledButton>
      </div>    
     </div>
    </div>
  </div> 
</template>

<script>
import { defineAsyncComponent } from 'vue'
const StyledButton = defineAsyncComponent(
  () => import('@/components/StyledButton')
)

export default {
  name: 'PostCard',
  props: {

  },
  components: {
    StyledButton
  }
}
</script>