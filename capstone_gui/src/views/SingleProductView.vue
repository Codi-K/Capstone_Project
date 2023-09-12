<template>
    <div v-if="boats">
        <div v-for="boat in boats" :key="boat.boatID" >
            <img  :src="boat.boatUrl" :alt="boat.boatName">
            <div>
                <h1 >{{boat.boatName}}</h1>
                <h6 >{{boat.Category}}</h6>
                <h4 >R{{ boat.amount }}</h4>
                <p>{{ boat.boatDesc }}</p>
            </div>
            <div>
                <button class="btn btn-outline-dark" @click.prevent="AddtoCart(boat)">
                    Add to cart
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["boatID"],
    created() {
            this.$store.dispatch("fetchBoats",this.boatID)
    },
       computed: {
        boats() {
          return this.$store.state.boats;
          },   
    },
    methods: {
        AddtoCart(boat) {
            this.$store.dispatch('addCart', boat)
        }
    }

    }
</script>
<style  scoped>

</style> 