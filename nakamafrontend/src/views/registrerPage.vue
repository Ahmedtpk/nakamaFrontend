<template>
  <div class="flex justify-center items-center h-screen w-screen">
    <img src="../assets/backgroundWithoutBlackBorder.png" class="z-0 opacity-60 absolute w-screen h-screen" alt="">
    <div class="z-10 flex flex-col justify-center items-center h-[600px] w-[800px] border-nakama-pink bg-white bg-opacity-60 drop-shadow-2xl">
        <div class="mb-6" >
            <img alt="Vue logo" src="../assets/image-removebg-preview.png" class="w-full">
            <p class="text-2xl">Every new friend is a new adventure</p>
        </div>
        <div class="rounded-2xl border-nakama-pink drop-shadow-2xl h-4/6 w-11/12 flex flex-row">
          <div class="rounded-l-2xl w-3/6 h-full flex flex-col bg-[#D6ECF6]">
            <div class="w-full h-full ml-10 mt-4 flex flex-col">
              <p class="text-nakama-pink font-bold text-3xl flex flex-start">Registrer</p>
              <p class="flex flex-start mb-2 mt-2 font-bold">Navn</p>
              <input type="text" class="border h-10 w-3/4 shadow-sm rounded" placeholder="Name*" v-model="email" required>
              <p class=" flex flex-start mb-2 mt-2 font-bold">E-mail</p>
              <input type="text" class="border h-10 w-3/4 shadow-sm rounded" placeholder="E-mail" v-model="name">
              <p class=" flex flex-start mb-2 mt-2 font-bold">passord</p>
              <input type="password" class="border h-10 w-3/4 shadow-sm rounded" placeholder="Password*" v-model="password" required>
            </div>
            <div class="flex flex-col  h-32 w-full">
              <StyledButton @click="submitRegistration" class="w-24 h-10 ml-6 mb-2 mt-2 pl-3" :text="'REGISTER'"></StyledButton>
              <div class="flex flex-row w-2/3 justify-between mt-3">
                <p class="text-sm  ml-4 font-bold" >Har du en konto?</p>
                <button @click="goToLogin" class="text-sm font-bold text-nakama-pink  border-nakama-pink">Logg inn her!</button>
              </div>
            </div>
          </div>
            <div class="rounded-r-2xl w-3/6 bg-[#D6ECF6]">
              <img src="../assets/backgroundWithoutBlackBorder.png" class="z-0 opacity-30 h-full w-3/6 absolute " alt="">
              <img src="../assets/happy-people-4316529-3613847.webp" class="absolute w-8/12 h-full -translate-x-8 translate-y-8" alt="">
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
import axios from 'axios'

export default {
  name: 'Hero-custom',
  props: {

  },
  components: {
    StyledButton
  },
  data () {
    return {
      name: null,
      email:null,
      password: null
    }
  },
  mounted() {
    // this.createUser()

  },
  methods: {
    submitRegistration() {
      // console.log('registrenring funker')
      // console.log(this.name)
      // console.log(this.password)
      this.createUser()
      this.$router.push({ name: 'loggInnPage' })
    },
    async createUser() {
      try {
        await axios.post("https://nakama1.herokuapp.com/createUserName", {
          username: this.name,
          password: this.password,
          })
          console.log('username created')
        } catch (error) {
          console.log(error)
        }
    },
    goToLogin() {
      this.$router.push({ name: 'loggInnPage' })
    }
  }
}
</script>

