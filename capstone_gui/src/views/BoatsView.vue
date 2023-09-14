<template>
  <div>
    <div class="boats">
      <div class="">
        <div class="row gap-3 justify-content-center mx-0">
          <div class="container">
            <h1 class="text-white">Our Boats</h1>
          </div>
          <div class="card border border-light my-2"  v-for="boat in boats" style="width: 17rem" :key="boat.boatID">
            <img :src="boat.boatUrl" class="card-img-top" :alt="boat.boatName" />
            <div class="card-body">
              <h5 class="card-title">{{ boat.boatName }}</h5>
              <h5 class="card-text text-success">
                R{{ boat.amount}}
              </h5>
              <p class="card-text opacity-50">
                {{ boat.Category }}
              </p>
              <router-link  :to="{name:'single', params:{boatID: boat.boatID}}" class="btn btn-outline-dark">View More</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    computed: {
        boats() {
          return this.$store.state.boats;
          },   
    },
    mounted() {
        this.$store.dispatch('fetchBoats')
    }
  
};
</script>

<style scoped></style>