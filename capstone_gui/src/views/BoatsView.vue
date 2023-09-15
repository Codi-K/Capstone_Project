<template>
  <div>
    <div class="boats"  v-if="boats">
      <div class="">
        <div class="row gap-3 justify-content-center mx-0">
          <div class="container">
            <h1 class="text-white">Our Boats</h1>
          </div>

          <div class="d-flex justify-content-center gap-3">
            <div class="dropdown">
              <button
                class="btn btn-outline-light dropdown-toggle animate__animated animate__bounce animate__delay-1s"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sort Boats
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" @click="Deflaut" href="#">Default</a>
                </li>
                <li>
                  <a class="dropdown-item" @click="Name" href="#">Name</a>
                </li>
                <li>
                  <a class="dropdown-item" @click="Price" href="#">Price</a>
                </li>
              </ul>
            </div>
            <div class="dropdown">
              <button
                class="btn btn-outline-light dropdown-toggle animate__animated animate__bounce animate__delay-1s"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Filter Boats
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a
                    class="dropdown-item"
                    @click="filter('Ranger Boats')"
                    href="#"
                    >Ranger Boats</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    @click="filter('Tracker Boats')"
                    href="#"
                    >Tracker Boats</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    @click="filter('Nitro Boats')"
                    href="#"
                    >Nitro Boats</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    @click="filter('Mako Boats')"
                    href="#"
                    >Mako Boats</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    @click="filter('Tahoe Boats')"
                    href="#"
                    >Tahoe Boats</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    @click="filter('Tiara Yachts')"
                    href="#"
                    >Tiara Yachts</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="container" >
            <form class="d-flex justify-content-center" role="search">
              <input
                id="search_input_style"
                class="form-control bar"
                type="search"
                placeholder="Search..."
                aria-label="Search"
                v-model="search"
              />
              <button
                class="btn btn-outline-light"
                type="submit"
                id="search_button_style"
                @click.prevent="filterandSearch
                "
              >
                Search
              </button>
            </form>
          </div>

          <div
            class="card border border-light my-2"
            v-for="boat in filterandSearch"
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
                class="btn btn-outline-dark animate__animated animate__bounce animate__delay-3s"
                >View More</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <SpinnerComp/>
    </div>
  </div>
</template>

<script>
import SpinnerComp from "@/components/SpinnerComp.vue";

export default {
  data() {
    return {
      Category: null,
      search: ""
    }
  },
  components: {
    SpinnerComp
  },
  computed: {
    boats() {
      return this.$store.state.boats;
    },
    filterandSearch() {
      let filteredBoat = this.boats
      const categoryBoat = !!this.Category
      const searchBoat = !!this.search
      if (categoryBoat) {
        filteredBoat = filteredBoat.filter((boat)=> boat.Catergory.includes(this.Category))
      }
      if (searchBoat) {
        return this.searchBar(filteredBoat)
      }
      return filteredBoat
    }

  },
  mounted() {
    this.$store.dispatch("fetchBoats").then(() => {
      this.$store.commit("setCatergory", this.boats);
    });
  },
  methods: {
    Deflaut() {
      this.$store.dispatch("fetchBoats");
    },
    Name() {
      this.$store.dispatch("fetchName");
    },
    Price() {
      this.$store.dispatch("fetchPrice");
    },
    searchBar(filteredBoat) {
      const result = this.search.toLowerCase()
      return filteredBoat.filter((bot) => {
        const botBoat = bot.boatName.toLowerCase()
        return botBoat.includes(result)
      })
    },
    filter(category) {
      this.Category = category
    },
    filterDefault() {
      this.Category = ""
    }


  }
  };

</script>

<style scoped>
.bar{
  width: 89%;
}
</style>
