<template>
  <div>
    <div class="boats">
      <div class="">
        <div class="row gap-3 justify-content-center mx-0">
          <div class="container">
            <h1 class="text-white">Our Boats</h1>
          </div>

          <div class="d-flex justify-content-center gap-3">
            <div class="dropdown">
              <button
                class="btn btn-outline-light dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sort Boats
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" @click="Deflaut" href="#">Default</a></li>
                <li><a class="dropdown-item" @click="Name" href="#">Name</a></li>
                <li><a class="dropdown-item" @click="Price" href="#">Price</a></li>
              </ul>
            </div>
            <div class="dropdown">
              <button
                class="btn btn-outline-light dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Filter Boats
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Default</a></li>
                <li>
                  <a
                    class="dropdown-item"
                    @click="filterB('Ranger Boats')"
                    href="#"
                    >Ranger Boats</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    @click="filterB('Tracker Boats')"
                    href="#"
                    >Tracker Boats</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    @click="filterB('Nitro Boats')"
                    href="#"
                    >Nitro Boats</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    @click="filterB('Mako Boats')"
                    href="#"
                    >Mako Boats</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    @click="filterB('Tahoe Boats')"
                    href="#"
                    >Tahoe Boats</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    @click="filterB('Tiara Yachts')"
                    href="#"
                    >Tiara Yachts</a
                  >
                </li>
              </ul>
            </div>
          </div>

          <div
            class="card border border-light my-2"
            v-for="boat in boats"
            style="width: 17rem"
            :key="boat.boatID"
          >
            <img
              :src="boat.boatUrl"
              class="card-img-top"
              :alt="boat.boatName"
            />
            <div class="card-body">
              <h5 class="card-title">{{ boat.boatName }}</h5>
              <h5 class="card-text text-success">R{{ boat.amount }}</h5>
              <p class="card-text opacity-50">
                {{ boat.Category }}
              </p>
              <router-link
                :to="{ name: 'single', params: { boatID: boat.boatID } }"
                class="btn btn-outline-dark"
                >View More</router-link
              >
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
    this.$store.dispatch("fetchBoats");
  },
  methods: {
            Deflaut() {
                this.$store.dispatch("fetchBoats")
            },
            Name() {
                this.$store.dispatch("fetchName")
            },
            Price() {
                this.$store.dispatch("fetchPrice")
            },   
        }
};
</script>

<style scoped></style>
