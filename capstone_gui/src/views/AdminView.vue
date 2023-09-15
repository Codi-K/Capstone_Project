<template>
  <div>
    <!-- border line footer -->
    <div id="line_space">
      <div class="visually-hidden">Empty</div>
    </div>

    <h1><b>Our Boats</b></h1>

    <div class="container d-flex justify-content-center my-3">
      <AddBoatComp />
    </div>

    <!-- table for watches-->
    <div v-if="boats" class=" container-fluid table-responsive">
      <table class="table table-bordered border-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Quantity</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col">Picture</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="boat in boats" :key="boat.boatID">
            <th scope="row">{{ boat.boatID }}</th>
            <td>{{ boat.boatName }}</td>
            <td>{{ boat.boatDesc }}</td>
            <td>{{ boat.quantity }}</td>
            <td class="text-success">R{{ boat.amount }}</td>
            <td>{{ boat.Category }}</td>
            <td>
              <img
                :src="boat.boatUrl"
                class="watches_cards_images"
                :alt="boat.boatName"
              />
            </td>
            <td><EditBoatComp :boat="boat" /></td>
            <td>
              <button
                type="button"
                @click="deleteBoat(boat.boatID)"
                class="btn btn-outline-dark text-danger animate__animated animate__bounce animate__delay-3s"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>  
    </div>

    <!-- spinner -->
    <div v-else class="row justify-content-center gap-3">
      <SpinnerComp />
    </div>

    <!-- our users -->

    <!-- border line footer -->
    <div id="line_space">
      <div class="visually-hidden">Empty</div>
    </div>

    <h1 id="headings_in_admin_page"><b>Our Users</b></h1>

    <div class="container d-flex justify-content-center my-3">
      <AddUserComp />
    </div>

    <!-- table for users-->
    <div class="container-fluid table-responsive" v-if="users">
      <table class="table table-bordered border-dark ">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">firstName</th>
            <th scope="col">lastName</th>
            <th scope="col">userAge</th>
            <th scope="col">gender</th>
            <th scope="col">userRole</th>
            <th scope="col">emailAdd</th>
            <th scope="col">userProfile</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.userID">
            <th scope="row">{{ user.userID }}</th>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.userAge }}</td>
            <td>{{ user.gender }}</td>
            <td>{{ user.userRole }}</td>
            <td>{{ user.emailAdd }}</td>
            <td>
              <img
                :src="user.userProfile"
                class="watches_cards_images"
                :alt="user.firstName"
              />
            </td>
            <td><EditUserComp :user="user" /></td>
            <td>
              <button
                type="button"
                @click="deleteUser(user.userID)"
                class="btn btn-outline-dark text-danger animate__animated animate__bounce animate__delay-3s"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- spinner -->
    <div v-else class="row justify-content-center gap-3">
      <SpinnerComp />
    </div>
  </div>
</template>

<script>
import SpinnerComp from "@/components/SpinnerComp.vue";
import EditBoatComp from "@/components/EditBoatsComp.vue";
import EditUserComp from "@/components/EditUserComp.vue";
import AddBoatComp from "@/components/AddBoatComp.vue";
import AddUserComp from "@/components/AddUserComp.vue";

export default {
  components: {
    SpinnerComp,
    EditBoatComp,
    EditUserComp,
    AddBoatComp,
    AddUserComp
  },
  computed: {
    boats() {
      return this.$store.state.boats;
    },
    users() {
      return this.$store.state.users;
    },
  },
  methods: {
    deleteUser(userID) {
      this.$store.dispatch("deleteUsers", userID);
    },
    deleteBoat(boatID) {
      this.$store.dispatch("deleteBoats", boatID);
    },
  },
  mounted() {
    this.$store.dispatch("fetchBoats");
    this.$store.dispatch("fetchUsers");
  },
};
</script>

<style scoped></style>
