<template>
  <div class="border-4  flex flex-col justify-center items-center h-screen w-screen">
    <div class="w-screen h-16 flex flex-row">
        <div> <img src="../assets/image-removebg-preview.png" alt="" class="h-14 w-40 ml-4 pb-2"></div>
        <div class="h-16 w-80"></div>
        <div class="text-xs border-2 h-16 w-60 pt-6">
            Velkommen tilbake Iman!
        </div>
    </div>
    <div class="border-2 h-4/5 w-4/5 flex flex-col">
        <p class="text-xl flex flex-start ml-4">alle posts</p>
        <div class="border-2 flex flex-row h-2/5">
            <div class="border-2 flex flex-col w-1/5">
                <img src="../assets/bowling.jpg" alt="" class="h-4/5">
                <p class="text-xs">bowling med front-end teamet</p>
            </div>
            <div class="border-2 flex flex-col w-1/5">
                <img src="../assets/bowling.jpg" alt="" class="h-4/5">
                <p class="text-xs">bowling med back-end teamet</p>
            </div>
            <div class="border-2 flex flex-col w-1/5">
                <img src="../assets/bowling.jpg" alt="" class="h-4/5">
                <p class="text-xs">bowling med salgs teamet</p>
            </div>
            <div class="border-2 flex flex-col w-1/5">
                <img src="../assets/bowling.jpg" alt="" class="h-4/5">
                <p class="text-xs">bowling girls-night</p>
            </div>
            <div class="border-2 flex flex-col w-1/5">
                <img src="../assets/bowling.jpg" alt="" class="h-4/5">
                <p class="text-xs">bowling boys-night</p>
            </div>
        </div>
        <!-- <div class="border-2 h-2/5 flex flex-col"> -->
            <p class="text-s mt-4 flex self-start ml-4">organiser en aktivitet</p>
            <input type="text" class="border-2 h-1/5">
            <button class="border-2 text-xs flex self-end mr-4 mt-11">pupliser</button>
        <!-- </div> -->
    </div>
  </div>
</template>