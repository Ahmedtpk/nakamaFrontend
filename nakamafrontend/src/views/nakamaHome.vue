<template>
  <div>
    <img src="../assets/backgroundWithoutBlackBorder.png" class="z-0 opacity-90 absolute w-screen h-screen" alt="">
    <div class="flex justify-center items-center h-full w-full absolute">
    <div class="border-2 h-[550px] w-[860px] flex flex-col border-nakama-pink rounded font-semibold bg-white bg-opacity-75">
          <div class="flex justify-center items-center">
              <div class="flex flex-col items-center justify-center mt-36">
                <img src="../assets/rsz_shadow-removebg-preview.png" alt="" class="mt-16 w-[500px] h-[250px] opacity-10 absolute ">
                <img alt="Vue logo" src="../assets/image-removebg-preview.png" class="w-[550px] mt-12 absolute">
              </div>
          </div>
          <div class="mt-56 ">
            <p class="text-[30px] font-[Garamond] mb-7 text-center">Every new friend is a new adventure</p>
            <div class="flex flex-row justify-center">
              <StyledButton class="w-36" :text="'LOGIN'" @click="goToLogIn"></StyledButton>
              <div class="w-10"></div>
              <StyledButton class="w-36" :text="'REGISTER'" @click="goToRegistration"></StyledButton>   
            </div>      
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
  methods: {
    goToLogIn(){
      this.$router.push({ name: 'loggInnPage' })
    },
    goToRegistration() {
      this.$router.push({ name: 'registrerPage' })
    },
  },
  components: {
    StyledButton
  }
}
</script>

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
    /* body{
            background: url("../assets/backgroundWithoutBlackBorder.png");
            background-size: 100vw, 100vh;
            background-repeat: no-repeat;
        } */
</style>