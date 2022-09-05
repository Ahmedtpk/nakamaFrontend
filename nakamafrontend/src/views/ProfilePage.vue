<template>
  <div>
    <div class="w-max-screen h-screen flex">
      <div class="w-1/3 flex h-full flex-col gap-4">
          <div class="h-2/5 w-3/6 flex self-center mt-8"> <img src="../assets/imanProfile.webp" alt="" class="rounded-lg"></div>
          <div class="flex flex-row justify-center gap-4">
            <StyledButton @click="toggleEditProfile(showEditProfileComponent)" :text="`Edit Profile`" class="h-18 w-24"></StyledButton>
            <StyledButton @click="toggleFriensList(showFrindsListComponent)" :text="`My friends`" class="h-18 w-24"></StyledButton>
            <StyledButton @click="toggleGroupList(showGroupsListComponent)" :text="`My groups`" class="h-18 w-24"></StyledButton>
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
          <div class="w-1/2 h-[800px] flex flex-col items-center overflow-y-scroll overflow-x-hidden gap-11 pb-7">
             <PostCard :posts="storeposts" ></PostCard>
          </div>
        
          <div class="w-1/2 h-full pb-7 flex flex-col justify-center overflow-hidden gap-2">
            <UnderDevelopmentComponent class="h-1/2 w-10/12"></UnderDevelopmentComponent>
             <p class="text-xl font-bold text-black w-1/2 flex justify-center">Your invitations</p>
             <UnderDevelopmentComponent class="h-1/2 w-10/12"></UnderDevelopmentComponent>
          </div>
      </div>
      <GroupsComponent v-if="showGroupsListComponent" class="translate-y-10"></GroupsComponent>
      <FriendsComponent v-if="showFrindsListComponent" class="translate-y-10"></FriendsComponent>
      <EditProfileComponent v-if="showEditProfileComponent" class="translate-y-10"></EditProfileComponent>
     </div>
    </div>
  </div>
</template>
<!-- w-1/3 h-[600px] flex flex-col items-center overflow-y-scroll overflow-x-hidden" -->

<script>
import { defineAsyncComponent } from 'vue'
import store from '@/store'
const PostCard = defineAsyncComponent(
  () => import('@/components/PostCard')
)
const UnderDevelopmentComponent = defineAsyncComponent(
  () => import('@/components/UnderDevelopmentComponent')
)
const StyledButton = defineAsyncComponent(
  () => import('@/components/StyledButton')
)
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
  data () {
    return {
      show: false,
      showEditProfileComponent: false,
      showFrindsListComponent: false,
      showGroupsListComponent: false
    }
  },
  components: {
    PostCard,
    UnderDevelopmentComponent,
    StyledButton,
    FriendsComponent,
    GroupsComponent,
    EditProfileComponent
    // GroupIntroCard,
    // UnderDevelopmentComponent
    // GroupCard,
    ,
  },
  mounted () {
    this.teststore()
    // this.togglePopUps(1)
  },
  methods: {
    teststore() {
        this.$store.dispatch('posts/recivedposts')
				this.$store.dispatch('groups/getGroups')
    },
    toggleEditProfile(boolean) {
      switch (boolean) {
        case false:
          this.showEditProfileComponent = true
          this.showFrindsListComponent = false
          this.showGroupsListComponent = false
          break;
        case true:
          this.showEditProfileComponent = false
          this.showFrindsListComponent = false
          this.showGroupsListComponent = false
          break;
      }
    },
    toggleFriensList(boolean) {
      switch (boolean) {
        case false:
          this.showFrindsListComponent = true
          this.showGroupsListComponent = false
          this.showEditProfileComponent = false
          break;
        case true:
          this.showFrindsListComponent = false
          this.showGroupsListComponent = false
          this.showEditProfileComponent = false
          break;
      }
    },
    toggleGroupList(boolean) {
      switch (boolean) {
        case false:
          this.showGroupsListComponent = true
          this.showFrindsListComponent = false
          this.showEditProfileComponent = false
          break;
        case true:
          this.showGroupsListComponent = false
          this.showFrindsListComponent = false
          this.showEditProfileComponent = false
          break;
      }
    }
  },
  computed: {
    storeposts () {
      return store.state.posts.posts
    },
		storegroups () {
      return store.state.groups.groups
    },
	},
}
</script>