<template>
  <div class=" flex justify-center items-center h-screen w-screen">
    <div class=" flex flex-col justify-center items-center border-4 border-violet-800 h-4/5 w-3/5">
        <div class=" h-1/5" >
            <img alt="Vue logo" src="../assets/image-removebg-preview.png" class="ml-4">
            <p class="text-xl">Every new friend is a new adventure</p>
        </div>
        <div class=" h-3/5 w-4/5 flex flex-row">
            <div class=" w-2/5 flex flex-col bg-violet-100 border-violet-800 border-2 mr-4">
                <p class="text-2xl flex flex-start text-violet-800 font-bold">Login</p>
                <p class="text-s flex flex-start mt-4 ml-4">E-mail</p>
                <input type="text" class="border-2 w-40 ml-8 mt-4 border-violet-800">
                <p class="text-s flex flex-start mt-4 ml-4">Passord</p>
                <input type="text" class="border-2 w-40 ml-8 border-violet-800">
                <div class="flex flex-row mt-4 ">
                    <input type="checkbox" class="ml-1">
                    <p class="text-xs pt-0.5 mr-11 ml-1">Keep me logged in</p>
                    <div></div>
                    <button class="border-2 w-16 text-xs h-5 border-violet-800 bg-violet-800 text-white rounded ">logg inn</button>
                </div>
                <div class="flex flex-row mt-11">
                    <p class="text-xs mr-6 ml-2 font-bold ">ikke registrert?</p>
                    <button class="text-xs text-violet-800 font-bold">registerer her!</button>
                </div>
            </div>
             <div class=" w-3/5 bg-violet-200 border-violet-800 border-2">
                 <img src="../assets/happy-people-4316529-3613847.webp" alt="">
             </div>
        </div>
                <div class=" h-1/5 w-4/5"></div>
    </div>
  </div>
</template>