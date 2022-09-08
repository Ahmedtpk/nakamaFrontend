<template>
    <div class="w-max-screen h-screengit flex flex-row gap-4">
        <!-- <div class="h-fit w-fit py-2 px-2 rounded-lg bg-white border bg-opacity-60 flex gap-4 flex-col justify-start">
         <div class="flex flex-row">
        <img src="../assets/imanProfile.webp" alt="" class="rounded-full h-14 w-14 border-2 border-nakama-pink ml-2">
        <button class="text-xl text-black ml-2">Iman Ahmed</button>
      </div>
       <div class="flex flex-row">
        <img src="../assets/ahmedProfilBilde.png" alt="" class="rounded-full h-14 w-14 border-2 border-nakama-pink ml-2">
        <button class="text-xl text-black ml-2">Ahmed Ahmed</button>
      </div>
      <div class="flex flex-row">
        <img src="../assets/AmalProfilBilde.png" alt="" class="rounded-full h-14 w-14 border-2 border-nakama-pink ml-2">
        <button class="text-xl text-black ml-2">Amal Ahmed</button>
      </div>
       <div class="flex flex-row">
        <img src="../assets/IlhamProfilbilde.png" alt="" class="rounded-full h-14 w-14 border-2 border-nakama-pink ml-2">
        <button class="text-xl text-black ml-2">Ilham Ahmed</button>
      </div>
        </div> -->
        <FriendsComponent></FriendsComponent>
        <GroupsComponent></GroupsComponent>
        <EditProfileComponent></EditProfileComponent>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
const EditProfileComponent = defineAsyncComponent(
  () => import('@/components/EditProfileComponent')
)
const FriendsComponent = defineAsyncComponent(
  () => import('@/components/FriendsComponent')
)
const GroupsComponent = defineAsyncComponent(
  () => import('@/components/GroupsComponent')
)

export default {
  name: 'somethingName',
  props: {

  },
  components: {
    FriendsComponent
    ,
    GroupsComponent,
    EditProfileComponent
}
}
</script>