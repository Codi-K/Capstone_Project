<template>
    <div>
        <div v-for="item in cart" :key="item.cartID">
            <img :src="item.boatUrl" :alt="item.boatName">
            <div>
                <h2>R{{ item.amount }}</h2>
                <h1>{{ item.boatName }}</h1>
                <h5>{{ item.Catergory }}</h5>
            </div>
        </div>
        <div>
            Total Amount : {{ getTotal }}
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