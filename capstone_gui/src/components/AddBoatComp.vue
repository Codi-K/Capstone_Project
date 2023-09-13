<template>
  <div>
    <button
      type="button"
      class="btn btn-outline-dark"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Add New Boat
    </button>
    <!-- Modal -->
    <div class="container">
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header text-center">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Add Boat
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
                <p class="title m-1">Product Name</p>
                <input type="text" class="w-100 rounded p-1" id="title" v-model="newBoat.boatName" />
                <p class="title m-1">Category</p>
                <input type="text" class="w-100 rounded p-1" v-model="newBoat.Category" />
                <p class="title m-1">Description</p>
                <input type="text" class="w-100 rounded p-1" v-model="newBoat.boatDesc" />
                <p class="title m-1">Price</p>
                <input type="text" class="w-100 rounded p-1" v-model="newBoat.amount" />
                <p class="title m-1">Quantity</p>
                <input type="text" class="w-100 rounded p-1" v-model="newBoat.quantity" />
                <p class="title m-1">Image Link</p>
                <input type="text" class="w-100 rounded p-1" v-model="newBoat.boatUrl" />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-outline-dark"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  @click.prevent="AddBoat"
                  type="submit"
                  class="btn btn-outline-dark"
                >
                  Save changes
                </button>
                <button type="reset" class="btn btn-outline-dark">
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
  data() {
    return {
      newBoat: {
        boatName: "",
        boatDesc: "",
        quantity: "",
        amount: "",
        Category: "",
        boatUrl: "",
      },
    };
  },
  methods: {
    AddBoat() {
      this.$store.dispatch("addBoats", this.newBoat);
    },
  },
};
</script>

<style scoped></style>
