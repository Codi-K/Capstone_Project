<template>
  <div class="">
    <div class="singleView">
      <div>
        <h1 class="text-white">View More</h1>
      </div>
      <div v-if="boat" class="my-5">
        <router-link to="/boats" class="btn btn-lg btn-outline-light ms-auto">
          Go To Boats
        </router-link>
        <div v-for="item in boat" :key="item.boatID" class="d-flex changing ">
          <div class="container m-5">
            <img
              :src="item.boatUrl"
              class="watches_cards_image boat"
              :alt="item.boatName"
            />
          </div>
          <div class="m-5 p-5 border rounded border-light bg-light">
            <h1 class="">{{ item.boatName }}</h1>
            <h6>{{ item.Category }}</h6>
            <h4>R{{ item.amount }}</h4>
            <p class="py-3">{{ item.boatDesc }}</p>
          </div>
        </div>
        <div class="container d-flex justify-content-center gap-3">
          <button class="btn btn-outline-light" @click.prevent="AddtoCart(boat)">
            Add To Cart
          </button>
          <RequestTourComp />
        </div>
      </div>
      <div v-else>
        <SpinnerComp />
      </div>
    </div>
  </div>
</template>

<script>
import SpinnerComp from "@/components/SpinnerComp.vue";
import RequestTourComp from "@/components/RequestTourComp.vue";

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
    RequestTourComp,
  },
};
</script>
<style scoped>
@media (width< 1000px) {
  .changing{
    flex-direction: column;
 }
 
 .singleView{
  background-image: none;
  height: auto;
 }

 .boat{
    border-radius: 0rem;
  height: 5rem;
 }
}


</style>
