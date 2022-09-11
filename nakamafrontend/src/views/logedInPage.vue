<template>
<div class=" w-max-screen h-max-screen flex justify-center">
    <div class="w-full h-full flex flex-col">
      <div class="w-full h-44  flex flex-row items-center">
          <p class="text-xl font-bold text-black w-4/12 flex justify-center">Discover new groups</p>
          <p class="text-xl font-bold text-black w-5/12 flex justify-center">Upcoming events</p>
          <p class="text-xl font-bold text-black w-3/12 flex justify-center">Create an event</p>
      </div>
      <div class="flex flex-row w-full h-full">
          <div class="w-4/12 h-full flex justify-center">
            <div class="h-fit pb-4 w-10/12 bg-white flex justify-center rounded-lg flex-col overflow-hidden">
							<div class="overflow-y-scroll overflow-x-hidden h-[600px] example">
								<GroupCard :groups="storegroups"></GroupCard>
							</div>
            </div>
          </div>
          <div class="w-5/12 h-[600px] flex flex-col items-center overflow-y-scroll overflow-x-hidden example">
             <PostCard class="" :posts="storeposts"></PostCard>
          </div>
          <div class="w-3/12 h-full flex justify-center overflow-hidden">
             <CreatePost></CreatePost>
          </div>
      </div>
    </div>
</div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
// import axios from 'axios'
import store from '@/store'
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
  data() {
    return {
      posts: Array
    }
  },
  mounted() {
    this.teststore()
    // this.getPosts()
    // setTimeout(() => {
    //     console.log(this.storeposts)
		// 		this.posts = this.storeposts
		// 		console.log(this.posts)
        
    // }, 2000);
  },
  methods: {
    teststore() {
        this.$store.dispatch('posts/recivedposts')
				this.$store.dispatch('groups/getGroups')
        console.log('test funker')
    },
  //  async createpost() {
	// 	try {
	// 		await axios.post("https://nakama1.herokuapp.com/createPost", {
	// 			userId: "1",
	// 			familyId: "1",
	// 			title: "from vue js til heruko",
	// 			description: "funker dette??????",
	// 			meatinTime: "nuuu",
	// 			postTime: "etter på"
  //   		})
	// 		this.teststore()
	// 		setTimeout(() => {
	// 			console.log(this.storeposts)
				
	// 		}, 2000);
	// 		} catch (error) {
	// 			console.log(error + 'can not set a post')
	// 		}
  //   },

    // async getPosts() {
    //     await fetch('https://nakama1.herokuapp.com/getallposts')
    //     .then(res => res.json())
    //     .then(data => this.posts = data.reverse())
    //     // .then(data => data = this.posts)
    // }
  },
  computed: {
    storeposts () {
      return store.state.posts.posts
    },
		storegroups () {
      return store.state.groups.groups
    },
	},
  components: {
    PostCard,
    CreatePost,
    GroupCard,
}
}
</script>

<style>
  .example::-webkit-scrollbar {
    display: none;
}

.example {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>