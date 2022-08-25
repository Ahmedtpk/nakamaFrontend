<template>
  <div class="flex justify-center items-center h-screen w-screen">
  <div class="border-4  h-3/5 w-3/5 flex flex-col border-violet-900 bg-violet-100">
        <div class="flex justify-center items-center">
            <div class="flex flex-col items-center justify-center">
                <img src="../assets/rsz_shadow-removebg-preview.png" alt="" class="mt-16">
              <img alt="Vue logo" src="../assets/image-removebg-preview.png">
              <p class="text-2xl mt-2">Every new friend is a new adventure</p>
            </div>
        </div>
        <div class="flex flex-row justify-center mt-20">
             <button class="border-2 h-6 w-20 pb-0.5 ml-4 border-violet-400 rounded">logg inn</button>
            <button class="border-2 h-6 w-20 pb-0.5 ml-8 border-violet-400 bg-violet-400 text-white rounded">registrer</button>
        </div>
     </div>
  </div>
</template>

<style>
     

    /* .backgroundDiv{
        width: fit-content;
        height: fit-content;
        overflow: hidden;
        padding: 0px;
        border: none;
        margin: 0px;
      
       
    } */
    /* .backgroundPic{
      width: 1450px;
      height: 600px;
      margin: -10px 0px -10px -180px;
    } */

    .imageInRektangel{
        height: 350px;
        width: 550px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transform: translate(27px, 1px);
        /* margin-top: 50px;
        margin-left: 100px;
        margin-right: 100px; */
    }

    .rektangelDiv{
        border: 2px solid #EF666F;
        height: 350px;
        width: 600px;
        margin-top: 100px;
        margin-left: 300px;
    }
    .rektangell{
        height: 350px;
        width: 600px;
        background-color: white;
        mix-blend-mode: soft-light;
        display: flex;
    }
    body{
        display: flex;
    }

    .friendsPic{
        height: 150px;
        width: 350px;
        position: relative;
        mix-blend-mode: darken;
    }
    .nakamaTekst{
        height: 350px;
        width: 550px;
        mix-blend-mode: normal;
        position: absolute;
    }
    body{
            background: url("../assets/backgroundWithoutBlackBorder.png");
            background-size: 100vw, 100vh;
            background-repeat: no-repeat;
        }
</style>