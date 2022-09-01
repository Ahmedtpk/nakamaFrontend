<template>
    <div class="w-max-screen h-screen flex justify-end">
      <div class="w-1/3 flex h-full flex-col gap-4">
          <div class="h-2/5 w-3/6 flex self-center mt-8"> <img src="../assets/imanProfile.webp" alt="" class="rounded-lg"></div>
          <div class="flex flex-row justify-center gap-4">
            <StyledButton :text="`Edit Profile`" class="h-18 w-24"></StyledButton>
             <StyledButton :text="`My friends`" class="h-18 w-24"></StyledButton>
              <StyledButton :text="`My groups`" class="h-18 w-24"></StyledButton>
          </div>
          <div class=" flex flex-col gap-4 h-[20px]">
             <p class="text-xl font-bold text-black w-full ml-4">My calender</p>
             <div class="flex justify-center h-[20px]">
               <UnderDevelopmentComponent></UnderDevelopmentComponent>
             </div>
          </div>
      </div>
        <div class="w-8/12 h-full flex flex-col">
            <div class="w-full h-32 flex flex-row items-center">
          <p class="text-xl font-bold text-black w-1/2 flex justify-center">Your upcoming events</p>
          <p class="text-xl font-bold text-black w-1/2 flex justify-center">Your invitations</p>
      </div>
      <div class="flex flex-row w-full h-full gap-4 ">
          <div class="w-1/2 h-full flex flex-col items-center overflow-hidden gap-11 pb-7">
             <PostCard ></PostCard>
             <PostCard></PostCard>
          </div>
          <div class="w-1/2 h-full pb-7 flex flex-col justify-center overflow-hidden gap-2">
            <UnderDevelopmentComponent class="h-1/2 w-10/12"></UnderDevelopmentComponent>
             <p class="text-xl font-bold text-black w-1/2 flex justify-center">Your invitations</p>
             <UnderDevelopmentComponent class="h-1/2 w-10/12"></UnderDevelopmentComponent>

          </div>
      </div>
     </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
const PostCard = defineAsyncComponent(
  () => import('@/components/PostCard')
)
const UnderDevelopmentComponent = defineAsyncComponent(
  () => import('@/components/UnderDevelopmentComponent')
)
const StyledButton = defineAsyncComponent(
  () => import('@/components/StyledButton')
)
export default {
  name: 'somethingName',
  props: {

  },
  components: {
    PostCard,
    UnderDevelopmentComponent,
    StyledButton
    // GroupIntroCard,
    // UnderDevelopmentComponent
    // GroupCard,
    ,
}
}
</script>