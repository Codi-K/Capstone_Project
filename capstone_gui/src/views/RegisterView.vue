<template>
  <div class="register">
    <div class="container-fluid w-50 p-5 pt-3">
      <div class="conatiner text-white my-3 mb-5">
        <h1>Register</h1>
      </div>
    <form @submit.prevent="register" >
      <div class="">
        <h4 for="exampleInputfirstName1" class="form-label text-white">Name</h4>
        <input
          type="firstName"
          class="form-control"
          id="exampleInputfirstName1"
          aria-describedby="emailHelp"
          v-model="payload.firstName"
          required
        />
      </div>
      <div class="my-3">
        <h4 for="exampleInputlastName1" class="form-label text-white">Surname</h4>
        <input
          type="lastName"
          class="form-control"
          id="exampleInputlastName1"
          aria-describedby="emailHelp"
          v-model="payload.lastName"
          required
        />
      </div>
      <div class="my-3">
        <h4 for="exampleInputuserAge1" class="form-label text-white">Age</h4>
        <input
          type="userAge"
          class="form-control"
          id="exampleInputuserAge1"
          aria-describedby="emailHelp"
          v-model="payload.userAge"
          required
        />
      </div>
      <div class="my-3">
        <h4 for="exampleInputgender1" class="form-label text-white">Gender</h4>
        <input
          type="gender"
          class="form-control"
          id="exampleInputgender1"
          aria-describedby="emailHelp"
          v-model="payload.gender"
          required
        />
      </div>

      <div class="my-3">
        <h4 for="exampleInputEmail1" class="form-label text-white">Email address</h4>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="payload.emailAdd"
          required
        />
      </div>
      <div class="my-3">
        <h4 for="exampleInputPassword1" class="form-label text-white">Password</h4>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          v-model="payload.userPass"
          required
        />
      </div>
      <div class="">
        <h4 for="exampleInputuserProfile1" class="form-label text-white">Image Link</h4>
        <input
          type="userProfile"
          class="form-control"
          id="exampleInputuserProfile1"
          v-model="payload.userProfile"
          required
        />
      </div>
      <button type="submit" class="btn btn-outline-light mt-4 animate__animated animate__bounce animate__delay-3s">Register</button>
    </form>
    <div>
      <h6 class="text-white py-4">
        If you have an account already <router-link to="/login" class="text-decoration-none btn btn-outline-light btn-sm animate__animated animate__bounce animate__delay-3s">LOGIN</router-link>
      </h6>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      payload: {
    firstName: "",
    lastName: "",
    userAge: "",
    gender: "",
    emailAdd: "",
    userPass: "",
    userProfile: "https://i.postimg.cc/HntQPB1k/Feels-Okay-Man.webp"
          }
        }
  },
  methods: {
    register() {
      this.$store.dispatch('addUser', this.payload)
    }
  }   
    }
</script>

<style scoped>

</style>