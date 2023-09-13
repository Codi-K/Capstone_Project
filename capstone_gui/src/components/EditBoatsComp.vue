<template>
  <div>
    <button type="button" class="btn btn-outline-dark" @click="editModal(boat.boatID)" data-bs-toggle="modal"
      :data-bs-target="'#dexampleModal' + boat.boatID">
      Edit
    </button>
    <!-- Modal -->
    <div class="container">
      <div class="modal fade" :id="'dexampleModal' + boat.boatID" tabindex="-1"
        :aria-labelledby="'aexampleModalLabel' + boat.boatID" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header text-center">
              <h1 class="modal-title fs-5" id="aexampleModalLabel">
                Edit Product
              </h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form>
              <div class="modal-body">
                <p class="title m-1">Boat Name</p>
                <input type="text" class="w-100 rounded p-1" id="title" v-model="editBoats.boatName" />
                <p class="title m-1">Category</p>
                <input type="text" class="w-100 rounded p-1" v-model="editBoats.Category"  />
                <p class="title m-1">Description</p>
                <input type="text" class="w-100 rounded p-1" v-model="editBoats.boatDesc"  />
                <p class="title m-1">Price</p>
                <input type="text" class="w-100 rounded p-1" v-model="editBoats.amount" />
                <p class="title m-1">Quantity</p>
                <input type="text" class="w-100 rounded p-1" v-model="editBoats.quantity"  />
                <p class="title m-1">Image Link</p>
                <input type="text" class="w-100 rounded p-1" v-model="editBoats.boatUrl"  />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">
                  Close
                </button>
                <button @click.prevent="updateBoat(boat.boatID)" type="submit" class="btn btn-outline-dark">
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