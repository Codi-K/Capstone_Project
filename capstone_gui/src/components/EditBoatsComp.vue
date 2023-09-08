<template>
  <div>
    <button type="button" class="btn btn-outline-dark text-success" @click="editModal(boat.boatID)" data-bs-toggle="modal"
      :data-bs-target="'#dexampleModal' + boat.boatID">
      Edit
    </button>
    <!-- Modal -->
    <div class="container">
      <div class="modal fade" :id="'dexampleModal' + boat.boatID" tabindex="-1"
        :aria-labelledby="'aexampleModalLabel' + boat.boatID" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content bg-dark">
            <div class="modal-header text-center">
              <h1 class="modal-title fs-5" id="aexampleModalLabel">
                Edit Product
              </h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form>
              <div class="modal-body">
                <p class="title text-white m-1">Product Name</p>
                <input type="text" id="title" v-model="editBoats.boatName" />
                <p class="title text-white m-1">Category</p>
                <input type="text" v-model="editBoats.Category"  />
                <p class="title text-white m-1">Description</p>
                <input type="text" v-model="editBoats.boatDesc"  />
                <p class="title text-white m-1">Price</p>
                <input type="text"  v-model="editBoats.amount" />
                <p class="title text-white m-1">Quantity</p>
                <input type="text" v-model="editBoats.quantity"  />
                <p class="title text-white m-1">Image Link</p>
                <input type="text" v-model="editBoats.boatUrl"  />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-outline-light" data-bs-dismiss="modal">
                  Close
                </button>
                <button @click="updateBoat(boat.boatID)" type="submit" class="btn btn-outline-light">
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
  props: ["boat"],
  data() {
    return {
      editBoats: {
        ...this.boat,
      },
      editBoatID: null,
      editBoat: {
        boatName: "",
        boatDesc: "",
        quantity: "",
        amount: "",
        Category: "",
        boatUrl: "",
      },
    };
  },
  computed: {
  },
  methods: {
    editModal(boatID) {
      this.editBoatID = boatID
      this.editBoat = {
        ...this.$store.state.boats.find(
          (boat) => boat.boatID === boatID
        )
      }
    },
    updateBoat(boatID) {
      this.$store.dispatch("editBoats", {
        boatID: boatID,
        ...this.editBoats
      })
    }
  },
};
</script>
<style scoped>
</style>