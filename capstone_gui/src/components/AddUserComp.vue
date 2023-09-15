<template>
  <div>
    <button
      type="button"
      class="btn btn-outline-dark animate__animated animate__bounce animate__delay-3s"
      data-bs-toggle="modal"
      data-bs-target="#exampleModald"
    >
      Add New User
    </button>
    <!-- Modal -->
    <div class="container">
      <div
        class="modal fade"
        id="exampleModald"
        tabindex="-1"
        aria-labelledby="exampleModalLabeld"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header text-center">
              <h1 class="modal-title fs-5" id="exampleModalLabeld">Add User</h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form>
              <div class="modal-body">
                <p class="title m-1">Name</p>
                <input type="firstName" class="w-100 rounded p-1" v-model="payload.firstName" required />
                <p class="title m-1">Surname</p>
                <input type="lastName" class="w-100 rounded p-1" v-model="payload.lastName" required />
                <p class="title m-1">Age</p>
                <input type="userAge" class="w-100 rounded p-1" v-model="payload.userAge" required />
                <p class="title m-1">Gender</p>
                <input type="gender" class="w-100 rounded p-1" v-model="payload.gender" required />
                <p class="title m-1">Role</p>
                <input type="role" class="w-100 rounded p-1" v-model="payload.userRole" required />
                <p class="title m-1">Email address</p>
                <input type="email" class="w-100 rounded p-1" v-model="payload.emailAdd" required />
                <p class="title m-1">Password</p>
                <input type="password" class="w-100 rounded p-1" v-model="payload.userPass" required />
                <p class="title m-1">Image Link</p>
                <input type="userProfile" class="w-100 rounded p-1" v-model="payload.userProfile" required/>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Close</button>
                <button @click="register" type="button" class="btn btn-outline-dark animate__animated animate__bounce animate__delay-3s">Save changes</button>
                <button type="reset" class="btn btn-outline-dark">Clear</button>
              </div>
            </form>
          </div>
        </div>
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
        userRole: "",
        emailAdd: "",
        userPass: "",
        userProfile: "https://i.postimg.cc/HntQPB1k/Feels-Okay-Man.webp",
      },
    };
  },
  methods: {
    register() {
      this.$store.dispatch("addUsers", this.payload);
    },
  },
};
</script>

<style scoped></style>
