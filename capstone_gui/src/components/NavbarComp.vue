<template>
  <div>
    <nav
      class="navbar navbar-expand-lg border-bottom border-dark p-0"  
    >
      <div class="container-fluid p-1">
        <router-link class="navbar-brand" to="/">
          <img
            src="https://i.ibb.co/ZN3Gc1x/Grand-Line.gif"
            class="img-fluid logo1"
            alt="Logo"
          />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item ">
              <router-link class="nav-link text-dark" aria-current="page" to="/"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-dark" to="/boats">Boats</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-dark" to="/OurStory">Our Story</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-dark" to="/support">Support</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-dark" to="/admin" v-show="isAdmin">Admin</router-link>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link text-dark" to="/cart"  v-show="userAdmin">Cart</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-dark" to="/profile" v-show="userAdmin">Profile</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-dark" @click="logOut" to="/login" v-show="userAdmin" >Logout</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { useCookies } from "vue3-cookies";
const {cookies} = useCookies();
export default {
  computed: {
    user() {
       const user = this.$store.state.user ||
        cookies.get('ActualUser')
      return user
    },
    result() {
      const result = this.user?.result
      return result
    },
    isAdmin() {
      return this.result?.userRole?.toLowerCase() === "admin"
    },
    userAdmin() {
      return this.result?.userRole?.toLowerCase() === "user"|| this.result?.userRole?.toLowerCase() === "admin"
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch("logOut")
    }
  }
};
</script>

<style scoped>
</style>
