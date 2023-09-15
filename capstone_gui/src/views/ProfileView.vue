<template>
  <div v-if="user">
    <div class="profile"></div>
    <div class="container-fluid story">
      <h1>User Profile</h1>
    </div>
    <div
      :user="user"
      :key="user.userID"
      class="d-flex justify-content-center gap-5 my-5"
    >
      <div>
        <img :src="user.userProfile" :alt="user.firstName" class="logo" />
      </div>
      <div class=" ">
        <h4>Name : {{ user.firstName }}</h4>
        <h4>Surname: {{ user.lastName }}</h4>
        <h4>Email Address: {{ user.emailAdd }}</h4>
      </div>
    </div>
     <button
          type="button"
          @click="deleteUser(user.userID)"
          class="btn btn-outline-dark text-danger my-2"
        >
          Delete
        </button>
  </div>
</template>

<script>
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
export default {
  computed: {
    user() {
      return cookies.get("ActualUser").result || this.$store.state.user;
        },
        boats() {
        return this.$store.state.boats
    }
  },
  methods: {
    deleteUser(userID) {
          this.$store.dispatch("deleteUsers", userID)
              alert("Are you sure you want to Delete?");
    },
  },
};
</script>
<style scoped></style>
