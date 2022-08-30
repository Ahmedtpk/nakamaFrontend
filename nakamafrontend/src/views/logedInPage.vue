<template>
<div class="w-screen flex justify-center">
    <div class=" w-11/12 h-screen flex flex-col">
      <div class="w-full h-64  flex flex-row items-center">
          <p class="text-xl font-bold text-black w-1/3 flex justify-center">Discover new groups</p>
          <p class="text-xl font-bold text-black w-1/3 flex justify-center">Upcoming events</p>
          <p class="text-xl font-bold text-black w-1/3 flex justify-center">Create an event</p>
      </div>
      <div class="flex flex-row w-full h-full">
          <div class="w-1/3 h-full flex justify-center">
            <div class="h-fit pb-4  w-10/12 bg-nakama-beige flex justify-center rounded-lg shadow-xl flex-col">
              <GroupCard></GroupCard>
              <GroupCard></GroupCard>
              <GroupCard></GroupCard>
            </div>
          </div>
          <div class="w-1/3 h-full flex flex-col items-center">
             <PostCard class="mb-20"></PostCard>
             <PostCard></PostCard>
          </div>
          <div class="w-1/3 h-full flex justify-center">
             <CreatePost></CreatePost>
          </div>
      </div>
      <!-- <div class="border-2 h-16 flex flex-row bg-violet-100 mx-2 rounded-md mt-2 shadow-md border-violet-800">
          <div class="h-16 w-36 pt-4 ml-4"> <img src="../assets/image-removebg-preview.png" alt=""></div>
          <div class="w-1/2 mr-36"></div>
          <div class="flex flex-row mt-4 border-black h-8 w-26 bg-white rounded-md pt-1 pl-4 border">
              <input type="text" class="text-xs w-24">
              <img src="../assets/searchIcon.png" alt="" class="w-6 h-6 mr-2 pt-1">
          </div>
          <button class="text-xs font-bold text-black ml-8">Iman</button>
          <button class="ml-8"><img src="../assets/imanProfile.webp" alt="" class="rounded-full h8 w-8"></button>
      </div> -->
      <!-- <div class=" h-4/5 flex flex-col mx-2 rounded-md mt-8 bg-opacity-70 shadow-md ">
  
          <div class="flex flex-row">
              <p class="text-l font-bold text-black ml-16 mt-4">Discover new groups</p>
              <p class="text-l font-bold text-black ml-80 mt-4">Upcoming events</p>
              <p class="text-l font-bold text-black ml-80 mt-4 ">My calender</p>
          </div>
          <div class="flex flex-row h-4/5">
              <div class=" w-80 h-96  flex flex-col ml-2 mt-4 rounded-lg bg-violet-100 shadow-md">
                  <div class="border border-dottet border-t-0 border-r-0 border-l-0 mt-4 rounded border-black"></div>
                  <div class="flex flex-row">
                      <img src="../assets/vismaLogo-removebg-preview.png" alt="" class="h-12 w-16 mt-8">
                      <div class="flex flex-col">
                          <p class="text-l text-black flex self-start ml-4 mt-8">Visma Training</p>
                          <p class="text-xs font-bold text-black flex self-start ml-4 mt-2">weekly events</p>
                          <p class="text-xs  text-black mt-2 mb-6">join our sporty team and get in better shape!</p>
                          <button class="flex self-end pl-4  h-6 w-16 border border-violet-800 rounded text-white bg-violet-800">join!</button>
                          
                      </div>
                  </div>
                  <div class="border border-dottet border-t-0 border-r-0 border-l-0 mt-4 rounded border-black"></div>
                  <div class="flex flex-row">
                      <img src="../assets/academicworkwbg.png" alt="" class="h-12 w-14 mt-8">
                      <div class="flex flex-col">
                          <p class="text-l text-black flex self-start ml-4 mt-8">Academic Work</p>
                          <p class="text-xs font-bold text-black flex self-start ml-4 mt-2">weekly events</p>
                          <p class="text-xs  flex flex-start text-black mt-2 mb-6">Checkpoint celebration! Lets celebrate that we are done with another checkpoint.</p>
                          <button class="flex self-end pl-4  h-6 w-16 border border-violet-800 rounded text-white bg-violet-800 mr-4">join!</button>
                      </div>
                  </div>
                  <div class="border border-dottet border-t-0 border-r-0 border-l-0 mt-4 rounded border-black"></div>
              </div>
              <div class=" w-80 h-80 mt-4 flex flex-col ml-28  rounded-lg ">
                  <div class=" w-96 h-40 flex flex-col   rounded-lg bg-violet-100 shadow-md">
                     <div class="flex flex-row">
                      <img src="../assets/academicworkwbg.png" alt="" class="h-12 w-14 mt-4">
                      <div class="flex flex-col">
                          <div class="flex flex-row">
                               <p class="text-xs text-black flex font-bold  ml-4 mt-2">VismaITDS</p>
                                <p class="text-xs font-bold text-black flex  ml-4 mt-2">Monthly Event</p>
                                 <p class="text-xs font-bold text-red-800  flex  ml-4 mt-2">estimert tidspunkt:10/09</p>
                          </div>
                          <p class="text-l text-black flex self-start ml-4 mt-4">Lønningspils?</p>
                          <p class="text-xs  flex flex-start text-black mt-2 mb-6">Checkpoint celebration! Lets celebrate that we are done with another checkpoint.</p>
                          <div class="flex flex-row">
                              <button class=" ml-16 h-6 w-20 border border-violet-800 rounded text-white bg-violet-800 mr-4 mb-2">Interessert</button>
                              <button class="  pl-1 h-6 w-24 border border-violet-800 rounded text-white bg-violet-800 mr-4 mb-2">Foreslå dato</button>
                          </div>    
                      </div> 
                  </div>  
                  </div>
                  <div class=" w-96 h-40  flex flex-col  mt-2 rounded-lg bg-violet-100 shadow-md">
                       <div class="flex flex-row">
                      <img src="../assets/vismaLogo-removebg-preview.png" alt="" class="h-12 w-14 mt-4">
                      <div class="flex flex-col">
                           <div class="flex flex-row">
                               <p class="text-xs text-black flex font-bold  ml-4 mt-2">Kalle Anka</p>
                               <p class="text-xs text-black flex  ml-2 mt-2">posted in:</p>
                                <p class="text-xs font-bold text-black flex  ml-2 mt-2">Salgsteam</p>
                                 <p class="text-xs font-bold text-red-800  flex  ml-4 mt-2">Tidspunkt:10/09</p>
                          </div>
                          <p class="text-l text-black flex self-start ml-4 mt-4">Treningsøkt på tirsdag?</p>
                          <p class="text-xs  flex flex-start text-black mt-2 mb-2">Er det noen som vil bli med på trening denne tirsdagen? Alle fra andre team er også velkommen!</p>
                          <div class="flex flex-row">
                              <button class=" ml-24 h-6 w-20 border border-violet-800 rounded text-white bg-violet-800 mr-4 mb-2">Interessert</button>
                              <button class="  pl-1 h-6 w-16 border border-violet-800 rounded text-white bg-violet-800 mr-4 mb-2">Join</button>
                          </div>
                          
                      </div>
                      
                  </div>
                  </div>
              </div>
              <div class=" w-80 h-96 flex flex-col ml-36 mt-4 rounded-lg bg-violet-100 shadow-md pt-4"> This feature is still under development</div>
          </div>
          <div class="w-96 h-16  flex flex-row self-center mb-2 justify-evenly rounded-lg bg-violet-100 shadow-md pt-4">
              <img src="../assets/home-pngrepo-com.png" alt="" class="w-6 h-8 pb-2">
              <img src="../assets/plus-pngrepo-com.png" alt="" class="w-6 h-8 pb-2">
              <img src="../assets/chat-pngrepo-com.png" alt="" class="w-6 h-8 pb-2">
          </div>
      </div> -->
    </div>
</div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
const PostCard = defineAsyncComponent(
  () => import('@/components/PostCard')
)
const CreatePost = defineAsyncComponent(
  () => import('@/components/CreatePost')
)
const GroupCard = defineAsyncComponent(
  () => import('@/components/GroupCard')
)

export default {
  name: 'somethingName',
  props: {

  },
  components: {
    PostCard,
    CreatePost,
    GroupCard,
 
}
}
</script>