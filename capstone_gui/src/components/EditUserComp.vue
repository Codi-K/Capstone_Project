<template>
  <div>
    <button
      type="button"
      class="btn btn-outline-dark text-success"
      @click="editModal(user.userID)"
      data-bs-toggle="modal"
      :data-bs-target="'#exampleModal' + user.userID"
    >
      Edit
    </button>
    <!-- Modal -->
    <div class="container">
      <div
        class="modal fade"
        :id="'exampleModal' + user.userID"
        tabindex="-1"
        :aria-labelledby="'exampleModalLabel' + user.userID"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content bg-dark">
            <div class="modal-header text-center">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Edit Product
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form>
              <div class="modal-body">
                <p class="title text-white m-1">Name</p>
                <input type="text" id="title" v-model="editUsers.firstName" />
                <p class="title text-white m-1">Suranme</p>
                <input type="text" v-model="editUsers.lastName" />
                <p class="title text-white m-1">Age</p>
                <input type="text" v-model="editUsers.userAge" />
                <p class="title text-white m-1">Gender</p>
                <input type="text" v-model="editUsers.gender" />
                <p class="title text-white m-1">Change Email Address</p>
                <input type="text" v-model="editUsers.emailAdd" />
                <p class="title text-white m-1">Change Password</p>
                <input type="text" v-model="editUsers.userPass" />
                <p class="title text-white m-1">Image Link</p>
                <input type="text" v-model="editUsers.userProfile" />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-outline-light"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  @click.prevent="updateUser(editUsers)"
                  type="submit"
                  class="btn btn-outline-light"
                >
                  Save changes
                </button>
                <button type="reset" class="btn btn-outline-light">
                  Clear
                </button>
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
  props: ["user"],
  data() {
    return {
      editUsers: {
        ...this.user,
      },
      editUserID: null,
      editUser: {
        firstName: "",
        lastName: "",
        userAge: "",
        gender: "",
        userRole: "",
        emailAdd: "",
        userPass: "",
        userProfile: "",
      },
    };
  },
  computed: {},
  methods: {
    editModal(userID) {
      this.editUserID = userID;
      this.editUser = {
        ...this.$store.state.users.find((user) => user.userID === userID),
      };
    },
    updateUser(editUsers) {
      this.$store.dispatch("editUsers", editUsers);
    },
  },
};
</script>
<style scoped></style>
