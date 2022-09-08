<template>
 <div class="w-max-secreen h-max-screen  flex flex-col">
  <div class="w-full h-3/12 flex flex-col overflow-hidden">
    <p class="text-lg font-bold text-red-700 ml-2">03.09.2022 kl 17:00-21:00</p>
    <p class="text-4xl font-bold text-black ">Developers gathering: Brunch and minigolf!</p>
    <div class="flex flex-row">
      <p class="text-lg font-bold text-black ml-2 w-7/12"> Ekeberg minigolf park</p>
      <div class="flex flex-row gap-4">
        <div class="text-lg font-bold text-black flex flex-row gap-1"> <input type="checkbox" name="" id="">Interested</div>
        <div class="text-lg font-bold text-black flex flex-row gap-1"><input type="checkbox" name="" id="">Going</div>
        <StyledButton class="text-white text-lg h-8 w-20 bg-black px-0 py-0" :text="'Invite+'"></StyledButton>
      </div>
    </div>
  </div>
  <div class="flex flex-row w-full h-5/6">
    <div class="flex flex-col h-fit overflow-hidden gap-4">
      <div class="flex flex-row gap-10">
        <div class="flex flex-col w-4/12 h-fit pl-2 gap-2 overflow-hidden">
          <div class="h-16 w-full"></div>
          <p class="text-2xl text-black ml-4 h-22 ">Details:</p>
          <div class="h-fit border border-black bg-white rounded-xl pl-2 flex flex-col">
            <p class="my-1 text-xl">Om Arrangementet:</p>
            <p>doisjnløkfdj fsihjcø xlkælcdøkv jbøsxæxd kdkfvj bvcølkvfj fugpjidgvnj eidjsfguoh oijdfpj ijfgfhpidjighvkjø fdijpklødk ijofdkp ijsdofgfh</p>
            <p class="my-1 text-xl">praktisk info:</p>
            <p>doisjnløkfdj fsihjcø xlkælcdøkv jbøsxæxd kdkfvj bvcølkvfj fugpjidgvnj eidjsfguoh oijdfpj ijfgfhpidjighvkjø fdijpklødk ijofdkp ijsdofgfh</p>
            <p class="mt-1 font-bold">addresse: idshfløfkgbdvoj 22</p>
            <p class="mt-1 font-bold">arrangør: fjnnjfljdf</p>
          </div>
        </div>
         <div class="flex flex-col w-4/12 h-fit pl-2 gap-2 overflow-hidden">
          <div class="h-16 w-full"></div>
          <p class="text-2xl text-black ml-4 h-22 ">Kart:</p>
          <div class="h-fit border border-black bg-white rounded-xl  flex flex-col">
            <img src="../assets/KartBilde.png" alt="" class="rounded-xl">
          </div>
        </div>
      </div>
      <p class="font-bold text-lg text-black overflow-hidden">Comments:</p>
  <div class="flex flex-col gap-1 border border-black rounded-lg w-8/12 h-fit overflow-hidden">
      <div class="flex flex-row hover:shadow-lg hover:rounded-lg">
         <img src="../assets/imanProfile.webp" alt="" class="rounded-full h-6 w-6 border-2 border-black ml-2">
         <p class="text-sm text-black ml-2 flex self-center font-bold">Iman Ahmed</p>
         <p class="text-sm text-black ml-2 flex self-center"> kan jeg få vitamin wow please?</p>
       </div>
       <div class="flex flex-row hover:shadow-lg hover:rounded-lg">
         <img src="../assets/ahmedProfilBilde.png" alt="" class="rounded-full h-6 w-6 border-2 border-black ml-2">
         <p class="text-sm text-black ml-2 flex self-center font-bold">Ahmed Ahmed</p>
         <p class="text-sm text-black ml-2 flex self-center"> det er ikke lett sis, men stå på!</p>
       </div>
       <div class="flex flex-row hover:shadow-lg hover:rounded-lg">
         <img src="../assets/AmalProfilBilde.png" alt="" class="rounded-full h-6 w-6 border-2 border-black ml-2">
         <p class="text-sm text-black ml-2 flex self-center font-bold">Amal Ahmed</p>
         <p class="text-sm text-black ml-2 flex self-center"> Jeg har alt og er slank og pen men jeg er fortsatt ufornøyd T-T</p>
       </div>
  </div>
  <div class="flex flex-col gap-1 mt-4 w-10/12">
    <p class="font-bold text-lg text-black overflow-hidden">Write a comment:</p>
    <input type="text" class="h-16 w-8/12 border border-black rounded-lg " placeholder="Write a comment here*">
    <StyledButton class="text-white text-lg h-8 w-24 bg-black py-0 flex self-end" :text="'puplish!'"></StyledButton>
  </div>
    </div>
     <!-- <div class="flex flex-col w-1/4 h-full pl-2 gap-2 overflow-hidden">
      <div class="h-8 w-full"></div>
      <div class="flex flex-col">
         <p class="text-2xl text-black ml-4 h-22 ">Who`s coming?:</p>
        <div class="h-fit  flex flex-col">
          <FriendsComponent class="border-b-0 rounded-b-none"></FriendsComponent>
          <FriendsComponent class="border-t-0 rounded-t-none"></FriendsComponent>
        </div>
      </div>
    </div> -->
    <div class="flex flex-col w-4/12 items-end h-fit pl-2 gap-2 overflow-hidden">
      <div class="h-16 w-full"></div>
      <div class="flex flex-col">
         <p class="text-2xl text-black ml-4 h-22 ">Who`s Interested?:</p>
        <div class="h-fit  flex flex-col overflow-y-scroll">
          <FriendsComponent></FriendsComponent>
        </div>
      </div>
        <div class="flex flex-col  h-full pl-2 gap-2 overflow-hidden">
      <div class="h-8 w-full"></div>
      <div class="flex flex-col">
         <p class="text-2xl text-black ml-4 h-22 ">Who`s coming?:</p>
        <div class="h-fit  flex flex-col overflow-y-scroll">
          <FriendsComponent></FriendsComponent>
          
        </div>
      </div>
    </div>
    </div>
  </div>
   <!-- <p class="font-bold text-lg text-black overflow-hidden">Comments:</p>
  <div class="flex flex-col gap-1 border border-black rounded-lg w-8/12 h-fit overflow-hidden">
      <div class="flex flex-row hover:shadow-lg hover:rounded-lg">
         <img src="../assets/imanProfile.webp" alt="" class="rounded-full h-6 w-6 border-2 border-black ml-2">
         <p class="text-sm text-black ml-2 flex self-center font-bold">Iman Ahmed</p>
         <p class="text-sm text-black ml-2 flex self-center"> kan jeg få vitamin wow please?</p>
       </div>
       <div class="flex flex-row hover:shadow-lg hover:rounded-lg">
         <img src="../assets/ahmedProfilBilde.png" alt="" class="rounded-full h-6 w-6 border-2 border-black ml-2">
         <p class="text-sm text-black ml-2 flex self-center font-bold">Ahmed Ahmed</p>
         <p class="text-sm text-black ml-2 flex self-center"> det er ikke lett sis, men stå på!</p>
       </div>
       <div class="flex flex-row hover:shadow-lg hover:rounded-lg">
         <img src="../assets/AmalProfilBilde.png" alt="" class="rounded-full h-6 w-6 border-2 border-black ml-2">
         <p class="text-sm text-black ml-2 flex self-center font-bold">Amal Ahmed</p>
         <p class="text-sm text-black ml-2 flex self-center"> Jeg har alt og er slank og pen men jeg er fortsatt ufornøyd T-T</p>
       </div>
  </div>
  <div class="flex flex-col gap-1 mt-4 w-10/12">
    <p class="font-bold text-lg text-black overflow-hidden">Write a comment:</p>
    <input type="text" class="h-16 w-8/12 border border-black rounded-lg " placeholder="Write a comment here*">
    <StyledButton class="text-white text-lg h-8 w-24 bg-black py-0 flex" :text="'puplish!'"></StyledButton>
  </div> -->
 </div>   
</template>

<script>
import { defineAsyncComponent } from 'vue'
const StyledButton = defineAsyncComponent(
  () => import('@/components/StyledButton')
)
const FriendsComponent = defineAsyncComponent(
  () => import('@/components/FriendsComponent')
)
// const UnderDevelopmentComponent = defineAsyncComponent(
//   () => import('@/components/UnderDevelopmentComponent')
// )
export default {
  name: 'Hero-custom',
components: {
    StyledButton,
    FriendsComponent
    // UnderDevelopmentComponent
  }
}
</script>