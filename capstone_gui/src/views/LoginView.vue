<template>
  <div class="login">
    <div class="container w-75 ">
      <div class="container p-5 text-white">
        <h1>LOGIN</h1>
      </div>
    <form class="mt-5 p-5 text-white">
      <div class="mb-3">
        <h1 for="exampleInputEmail1" class="form-label">Email address</h1>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="payload.emailAdd"
          required
        />
      </div>
      <div class="mb-3">
        <h1 for="exampleInputPassword1" class="form-label">Password</h1>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          v-model="payload.userPass"
          required
        />
      </div>
      <button @click.prevent="login" type="button" class="btn btn-outline-light btn-lg animate__animated animate__bounce animate__delay-3s">
        Login
      </button>
    </form>
    <div class="container py-4 text-white">
      <p>To create an account <router-link to="/register" class="btn btn-outline-light btn-sm animate__animated animate__bounce animate__delay-3s">REGISTER</router-link> </p>
    </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      payload: {
        emailAdd: "",
        userPass: "",
      },
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    login() {
      this.$store.dispatch("login", this.payload);
    },
  },
  beforeCreate() {
    this.$store.dispatch("fetchUsers");
  }
};
</script>

<style scoped></style>
