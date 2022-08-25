<template>
  <div class="border-4  flex justify-center items-center h-screen w-screen">
    <div class=" flex flex-col justify-center items-center border-4 h-4/5 w-3/5 border-violet-800">
        <div class=" h-1/5 mb-6" >
            <img alt="Vue logo" src="../assets/image-removebg-preview.png" class="ml-11">
            <p class="text-2xl">Every new friend is a new adventure</p>
        </div>
        <div class=" h-3/5 w-4/5 flex flex-row">
            <div class="border-2 w-2/5 flex flex-col border-violet-800 mr-4 bg-violet-100">
                <p class="text-violet-800 font-bold text-xl flex flex-start ml-4 mt-3">Registrer</p>
                <p class="text-xs flex flex-start ml-4 mt-2 font-bold">Navn</p>
                <input type="text" class="border-2 w-40 ml-8 border-violet-800 rounded">
                <p class="text-xs flex flex-start ml-4 mt-2 font-bold">E-mail</p>
                <input type="text" class="border-2 w-40 ml-8 border-violet-800 rounded">
                <p class="text-xs flex flex-start ml-4 mt-2 font-bold">passord</p>
                <input type="text" class="border-2 w-40 ml-8 border-violet-800 rounded">
                 <button class="border-2 w-16 text-xs h-5 flex self-end mr-4 mt-2 border-violet-800 pl-1 rounded bg-violet-800 text-white">Registrer</button>
                <div class="flex flex-row mt-8">
                    <p class="text-xs mr-6 ml-2 font-bold ">Har du en konto?</p>
                    <p class="text-xs font-bold text-violet-800">Logg inn her!</p>
                </div>
            </div>
             <div class="border-2 w-3/5 bg-violet-200 border-violet-800">
                <img src="../assets/happy-people-4316529-3613847.webp" alt="">
             </div>
        </div>
                <div class=" h-1/5 w-4/5"></div>
    </div>
  </div>
</template>