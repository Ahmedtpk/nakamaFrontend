<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <div>
    <NavBar v-if="!$route.meta.hideNavbar"></NavBar>
    <router-view/>
    <!-- <NavigationFooter class="mt-auto"></NavigationFooter> -->
  </div>

</template>

<script>
import { defineAsyncComponent } from 'vue'

const NavBar = defineAsyncComponent(
  () => import('@/components/NavBar')
)
// const NavigationFooter = defineAsyncComponent(
//   () => import('@/components/NavigationFooter')
// )

export default {
  name: 'App',
  props: {

  },
  components: {
    NavBar,
    // NavigationFooter
  }
}
</script>

<!-- <style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style> -->
