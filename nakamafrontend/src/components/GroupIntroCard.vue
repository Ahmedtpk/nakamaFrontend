<template>
  <div class=" border-black w-full h-2/3 flex flex-col  border-t border-b">
    <div class="flex flex-row w-full h-3/4 mt-4 ml-2">
      <img src="../assets/academicworkwbg.png" alt="" class="h-full w-1/3">
      <div class="mt-2 ml-2 w-full">
        <div class="mb-3 w-full">
          <p class="text-xl text-black flex self-start  ">Academic Work</p>
          <p class="text-l  text-black">We are a group of loving developers who are always looking for new work friends! everyone is welcome to join ^.^</p>
        </div>
        <div class="w-full flex items-center">
        <StyledButton :text="'Follow'" class="ml-auto mr-4 w-22 mb-2"></StyledButton>
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