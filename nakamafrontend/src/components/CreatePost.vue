<template>
    <div class="h-3/4  w-10/12 bg-nakama-beige flex justify-center rounded-lg shadow-xl">
        <div class="flex flex-col  w-4/5 mt-10">
            <p class="text-s text-black mb-4"> Event title:</p>
            <input type="text" class="border h-10 w-full shadow-sm rounded-lg mb-4" placeholder="Title*" v-model="title">
             <p class="text-s text-black mb-4"> Event description:</p>
            <textarea class="border h-16 w-full shadow-sm rounded-lg mb-4" v-model="description"></textarea>
             <p class="text-s text-black mb-4"> Event type:</p>
            <input type="text" class="border h-10 w-full shadow-sm rounded-lg mb-4" placeholder="Type*">
            <p class="text-s text-black mb-4"> Event group ID:</p>
            <input type="number" class="border h-10 w-full shadow-sm rounded-lg mb-4" placeholder="ID*">
             <p class="text-s text-black mb-4"> Event time / estimated time:</p>
            <input type="text" class="border h-10 w-full shadow-sm rounded-lg mb-4" placeholder="Time*">
            <StyledButton :text="'Create post'" class=" flex self-end mt-4 mb-4" @click="getvalues"></StyledButton>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import axios from 'axios'
const StyledButton = defineAsyncComponent(
  () => import('@/components/StyledButton')
)

export default {
  name: 'PostCard',
  props: {
  },
  data () {
    return {
      title: null,
      description: null,
      meatinTime: null,
      postTime: null
    }
  },
  methods: {
   async createpost() {
    try {
      let result = await axios.post("https://nakama1.herokuapp.com/createPost", {
        userId: "1",
        familyId: "1",
        title: this.title,
        description: this.description,
        meatinTime: this.meatinTime,
        postTime: this.postTime
      })
    this.$store.dispatch('posts/recivedposts')
    console.warn(result)
    } catch (error) {
      console.log(error)
      }
    },
    getvalues () {
      var today = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      console.log(date)
      this.postTime = date
      this.createpost()
    }
  },
  components: {
    StyledButton
}
}
</script>