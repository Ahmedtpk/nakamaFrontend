<template>
  <div>
    <div v-for="(post, index) in posts" :key="index" class=" w-[32rem] h-fit flex flex-col rounded-lg bg-nakama-beige shadow-xl mb-16 cursor-pointer hover:shadow-2xl" @click="goToArrangementPage">
      <div class="flex flex-row w-full h-3/4 mt-4 ml-2">
        <img src="../assets/academicworkwbg.png" alt="" class="h-12 w-14">
        <div class="mt-2 ml-2">
          <div class="flex flex-row w-full mb-2">
            <p class="text-xs font-bold">VismaITDS</p>
            <p class="text-xs font-bold text-black ml-2">Monthly Event</p>
            <p class="text-xs font-bold text-red-500 ml-auto mr-4">estimert tidspunkt:10/09</p>
          </div>
          <div class="mb-5">
            <p class="text-xl text-black flex self-start mb-2 ">{{post.title}}?</p>
            <p class="text-l  text-black w-80">{{post.description}}</p>
          </div>
          <div class="w-full flex items-center mb-2">
            <p class="text-s font-bold mr-2"> 34 Kommer</p>
            <p class="text-s font-bold text-black ml-2">22 Intresert</p>
            <div class="translate-x-3">
              <StyledButton :text="'Intresert'" class="ml-auto mr-4 w-22"></StyledButton>
              <StyledButton :text="'velg dato'" class="mr-4 w-22"></StyledButton>
            </div>
          </div>
          <!-- <div v-for="(post, name) in posts" :key="name" class="flex flex-col">
              <p> name er {{post.title}}</p>
            </div>   -->
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
  name: 'PostCard',
  props: {
    posts: [Object]

  },
  data: () => {
    return {
      tests: [{name: 'Ahmed', value: 2}, {name: 'Ahmed', value: 2}, {name: 'Ahmed', value: 2}]
    }
  },
  components: {
    StyledButton
  },
  mounted () {
    // setTimeout(() => {
    //   console.log(this.posts)

    // }, 1000);
  },
  methods: {
    goToArrangementPage() {
      this.$router.push({ name: 'ArrangementPage' })
    }
  }
}
</script>