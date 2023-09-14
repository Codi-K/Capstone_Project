<template>
  <div>
    <div v-if="boat">
      <div v-for="item in boat" :key="item.boatID" class="d-flex">
        <div class="container">
          <img
            :src="item.boatUrl"
            class="watches_cards_image"
            :alt="item.boatName"
          />
        </div>
        <div>
          <h1>{{ item.boatName }}</h1>
          <h6>{{ item.Category }}</h6>
          <h4>R{{ item.amount }}</h4>
          <p>{{ item.boatDesc }}</p>
        </div>
      </div>
      <div class="container gap-3">
        <button class="btn btn-outline-dark" @click.prevent="AddtoCart(boat)">
          Add To Cart
        </button>
        <router-link to="/boats" class="btn btn-outline-dark">
          Go To Boats
        </router-link>
      </div>
    </div>
    <div v-else>
      <SpinnerComp />
    </div>
  </div>
</template>

<script>
import SpinnerComp from "@/components/SpinnerComp.vue";

export default {
  props: ["boatID"],
  created() {
    this.$store.dispatch("fetchBoat", this.boatID);
  },
  computed: {
    boat() {
      return this.$store.state.boat;
    },
  },
  methods: {
    AddtoCart(boat) {
      this.$store.dispatch("addCart", boat);
    },
  },
  components: {
    SpinnerComp,
  },
};
</script>
<style scoped></style>
