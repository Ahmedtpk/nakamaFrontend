<template>
  <div>
    <div v-for="(group, index) in groups" :key="index" class=" border-black w-full h-1/3 flex flex-col mt-6 border-t border-b hover:shadow-xl cursor-pointer" @click="goToGroupPage">
      <div class="flex flex-row w-full h-3/4 mt-4 ml-2">
    <img src="../assets/academicworkwbg.png" alt="" class="h-12 w-14">
    <div class="mt-2 ml-2 w-full">
      <div class="mb-3 w-3/4">
        <p class="text-xl text-black flex self-start  ">{{group.title}}</p>
        <p class="text-l  text-black">Join our group and lets have fun together!</p>
      </div>
      <div class="w-full flex items-center">
        <StyledButton :text="'Follow'" class="ml-auto mr-4 w-22 mb-2"></StyledButton>
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
  name: 'PostCard',
  props: {
    groups: [Object]

  },
  mounted () {
    setTimeout(() => {
      console.log(this.groups)
    }, 2000);

  },
  methods: {
    goToGroupPage() {
      this.$router.push({ name: 'GroupPage' })
    }
  },
  components: {
    StyledButton
}
}
</script>