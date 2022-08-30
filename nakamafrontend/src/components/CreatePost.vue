<template>
    <div class="h-3/4  w-10/12 bg-nakama-beige flex justify-center rounded-lg shadow-xl">
        <div class="flex flex-col  w-4/5 mt-10">
            <p class="text-s text-black mb-4"> Event title:</p>
            <input type="text" class="border h-10 w-full shadow-sm rounded-lg mb-4" placeholder="Title*">
             <p class="text-s text-black mb-4"> Event description:</p>
            <textarea class="border h-16 w-full shadow-sm rounded-lg mb-4"></textarea>
             <p class="text-s text-black mb-4"> Event type:</p>
            <input type="text" class="border h-10 w-full shadow-sm rounded-lg mb-4" placeholder="Type*">
             <p class="text-s text-black mb-4"> Event time / estimated time:</p>
            <input type="text" class="border h-10 w-full shadow-sm rounded-lg mb-4" placeholder="Time*">
            <StyledButton :text="'Create post'" class=" flex self-end mt-4 mb-4"></StyledButton>
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