<template>
  <div>
    <div class="boats">
      <div class="d-flex justify-content-center gap-3">
        <div class="">
          <div class="card"  v-for="boat in boats" style="width: 18rem" :key="boat.boatID">
            <img :src="boat.boatUrl" class="card-img-top" :alt="boat.boatName" />
            <div class="card-body">
              <h5 class="card-title">{{ boat.boatName }}</h5>
              <h6 class="card-text text-success">
                R{{ boat.amount}}
              </h6>
              <p class="card-text">
                {{ boat.Category }}
              </p>
              <router-link  :to="{name:'single', params:{boatID: boat.boatID}}" class="btn btn-primary">View More</router-link>
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