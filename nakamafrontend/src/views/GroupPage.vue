<template>
    <div class="w-max-screen h-max-screen  flex justify-center">
        <div class="w-full h-full flex flex-col">
            <div class="w-full h-32 flex flex-row items-center">
          <p class="text-xl font-bold text-black w-1/3 flex justify-center">About Academic Work</p>
          <p class="text-xl font-bold text-black w-1/3 flex justify-center">Upcoming Academic Work events</p>
          <p class="text-xl font-bold text-black w-3/12 flex justify-center">Create an event</p>
      </div>
      <div class="flex flex-row w-full h-full ">
          <div class="w-4/12  flex-col h-full  red-700">
            <div class=" pb-4  h-2/3 w-11/12 flex flex-col overflow-hidden gap-6">
              <GroupIntroCard></GroupIntroCard>
              <!-- <GroupCard></GroupCard>
              <GroupCard></GroupCard>
              <GroupCard></GroupCard> -->
            </div>
            <div class="h-full flex gap-4 flex-col justify-center">
               <p class="text-xl font-bold text-black self-center"> Academic Work Calender</p>
              <UnderDevelopmentComponent class=""></UnderDevelopmentComponent>
            </div>
          </div>
          <div class="w-5/12 h-full flex flex-col items-center overflow-hidden gap-11 pb-7">
             <PostCard :posts="storeposts"></PostCard>
             <PostCard></PostCard>
          </div>
          <div class="w-3/12 h-full pb-7 flex justify-center overflow-hidden">
             <CreatePost></CreatePost>
          </div>
      </div>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import store from '@/store'
const PostCard = defineAsyncComponent(
  () => import('@/components/PostCard')
)
const CreatePost = defineAsyncComponent(
  () => import('@/components/CreatePost')
)
const GroupIntroCard = defineAsyncComponent(
  () => import('@/components/GroupIntroCard')
)
const UnderDevelopmentComponent = defineAsyncComponent(
  () => import('@/components/UnderDevelopmentComponent')
)
// const GroupCard = defineAsyncComponent(
//   () => import('@/components/GroupCard')
// )

export default {
  name: 'somethingName',
  props: {

  },
  components: {
    PostCard,
    CreatePost,
    GroupIntroCard,
    UnderDevelopmentComponent
    // GroupCard,
 
},
mounted () {
  this.teststore()
  setTimeout(() => {
    console.log(this.storeposts)
    
  }, 2000);
},
methods: {
    teststore() {
        this.$store.dispatch('posts/recivedposts')
        console.log('test funker')
    },
  },
computed: {
  storeposts () {
      return store.state.posts.posts
    },
  }
}
</script>