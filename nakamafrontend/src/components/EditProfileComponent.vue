<template>
    <div class="h-fit  w-1/3 bg-nakama-beige bg-opacity-100 flex justify-center rounded-lg shadow-xl z-60 overflow-auto fixed border-2 border-nakama-pink">
        <div class="flex flex-col  w-4/5 mt-10">
            <p class="text-s text-black mb-4"> Edit Name:</p>
            <input type="text" class="border h-10 w-full shadow-sm rounded-lg mb-4" placeholder="Iman Ahmed*">
             <p class="text-s text-black mb-4"> Edit Age:</p>
            <input type="text" class="border h-10 w-full shadow-sm rounded-lg mb-4" placeholder="24*">
             <p class="text-s text-black mb-4"> Edit Company:</p>
            <input type="text" class="border h-10 w-full shadow-sm rounded-lg mb-4" placeholder="Kiwi Bogstad*">
             <p class="text-s text-black mb-4"> Edit Job:</p>
            <input type="text" class="border h-10 w-full shadow-sm rounded-lg mb-4" placeholder="cashier*">
             <p class="text-s text-black mb-4"> Update Bio:</p>
            <textarea class="border h-16 w-full shadow-sm rounded-lg mb-4"></textarea>
             <p class="text-s text-black mb-4"> Edit interests:</p>
            <input type="text" class="border h-10 w-full shadow-sm rounded-lg mb-4" placeholder="Reading, coding, k-drama and food ^^*">
            <StyledButton :text="'Update'" class=" flex self-end mt-4 mb-4"></StyledButton>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
const StyledButton = defineAsyncComponent(
  () => import('@/components/StyledButton')
)
// overflow-auto h-full w-full fixed top-0 right-0 flex z-60 justify-center
// <div class="h-screen w-screen right-0 top-12 bg-gray-200 bg-opacity-30 z-60 overflow-auto fixed flex items-center justify-center"> 
export default {
//   name: '',
//   props: {

//   },
  components: {
    StyledButton
}
}
</script>