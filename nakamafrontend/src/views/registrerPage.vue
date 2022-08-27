<template>
  <div class="flex justify-center items-center h-screen w-screen">
    <img src="../assets/backgroundWithoutBlackBorder.png" class="z-0 opacity-60 absolute w-screen h-screen" alt="">
    <div class="z-10 flex flex-col justify-center items-center h-4/5 w-3/5 border-nakama-pink bg-white bg-opacity-60 drop-shadow-2xl">
        <div class="mb-6" >
            <img alt="Vue logo" src="../assets/image-removebg-preview.png" class="w-[500px]">
            <p class="text-2xl">Every new friend is a new adventure</p>
        </div>
        <div class="rounded-2xl border-nakama-pink drop-shadow-2xl h-3/5 w-4/5 flex flex-row">
          <div class="rounded-l-2xl w-3/6 flex flex-col bg-[#D6ECF6]">
            <div class="w-full h-fit ml-10 mt-4 flex flex-col">
              <p class="text-nakama-pink font-bold text-[35px] flex flex-start">Registrer</p>
              <p class="flex flex-start mb-2 mt-2 font-bold">Navn</p>
              <input type="text" class="border h-10 w-3/4 shadow-sm rounded" placeholder="Name*">
              <p class=" flex flex-start mb-2 mt-2 font-bold">E-mail</p>
              <input type="text" class="border h-10 w-3/4 shadow-sm rounded" placeholder="E-mail">
              <p class=" flex flex-start mb-2 mt-2 font-bold">passord</p>
              <input type="text" class="border h-10 w-3/4 shadow-sm rounded" placeholder="Password*">
            </div>
            <div class="flex flex-col items-center h-20 w-full mt-8">
              <StyledButton class="w-2/5 ml-32 mb-2" :text="'REGISTER'"></StyledButton>
              <div class="flex flex-row w-2/3 justify-between mt-3">
                <p class="text  font-bold" >Har du en konto?</p>
                <a href="http://localhost:8081/#/loggInnPage" class="text font-bold text-nakama-pink">Logg inn her!</a>
              </div>
            </div>
          </div>
            <div class="rounded-r-2xl w-3/6 bg-[#D6ECF6]">
              <img src="../assets/backgroundWithoutBlackBorder.png" class="z-0 opacity-30 h-full w-3/6 absolute " alt="">
              <img src="../assets/happy-people-4316529-3613847.webp" class="absolute w-4/6 h-full -translate-x-20 translate-y-8" alt="">
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
  name: 'Hero-custom',
  props: {

  },
  components: {
    StyledButton
  }
}
</script>

