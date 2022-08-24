<template>
  <div class="home">
  <div class="rektangelDiv">
        <div class="rektangell">
            <div class="imageInRektangel">
                <img src="../assets/shadow-removebg-preview.png" alt="" class="friendsPic">
                <!-- <img src="../assets/image-removebg-preview.png" alt="" class="nakamaTekst"> -->
            </div>
        </div>
        <button class="loggInnButton">logg inn</button>
        <button class="registrerButton">registrer</button>
     </div>
  </div>
</template>

<style>
    body.background-image{
        height: fit-content;
        width: fit-content; 
    }

    .backgroundDiv{
        width: fit-content;
        height: fit-content;
        overflow: hidden;
        padding: 0px;
        border: none;
        margin: 0px;
      
       
    }
    .backgroundPic{
      width: 1450px;
      height: 600px;
      margin: -10px 0px -10px -180px;
    }

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
    /* body{
            background: url("backgroundWithoutBlackBorder.png");
            background-size: 100vw, 100vh;
            background-repeat: no-repeat;
        } */
</style>