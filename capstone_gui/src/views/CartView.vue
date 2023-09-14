<template>
    <div>
        <div class="cart">
            <div v-for="item in cart" :key="item.cartID">
                <img :src="item.boatUrl" class="watches_cards_images" :alt="item.boatName">
                <div>
                    <h2>R{{ item.amount }}</h2>
                    <h1>{{ item.boatName }}</h1>
                    <h5>{{ item.Catergory }}</h5>
                </div>
            </div>
            <div>
              <h3 class="text-white">  Total Amount : {{ getTotal }}</h3>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
        props:["cartID"],
    created() {
            this.$store.dispatch("fetchCart")
    },
        computed: {
            ...mapGetters(["getTotal"]),
            cart() {
                return this.$store.state.cart
            }
        }
    }
</script>

<style scoped>

</style>