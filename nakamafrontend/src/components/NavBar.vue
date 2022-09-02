<template>
<div class="w-screen  flex justify-center ">
  <div class="flex flex-row items-center border-2 h-20 w-11/12 mt-3 bg-[#FEE5E8] mx-2 rounded-md  drop-shadow-xl border-black border-opacity-40">
    <img class="w-fit ml-4"  src="../assets/image-removebg-preview.png" alt="">
    <div class="  w-4/6"></div>
    <div class=" flex flex-row justify-end items-center w-2/6 h-full">
      <div class="flex flex-row items-center">
        <input type="text" class="w-48 h-10 border rounded-md border-black pl-2" placeholder="Search">
        <img src="../assets/searchIcon.png" alt="" class="w-6 h-6 absolute ml-40">
      </div>
      <div class="flex flex-row items-center">
        <button class="text-xl text-black ml-4">Iman</button>
        <img src="../assets/imanProfile.webp" alt="" class="rounded-full h-14 w-14 border-2 border-black ml-4 mr-8">
      </div>
    </div>        
  </div>
</div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>