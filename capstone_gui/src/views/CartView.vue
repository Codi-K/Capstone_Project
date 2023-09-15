<template>
    <div>
        <div class="cart" v-if="cart">
            <div v-for="item in cart" :key="item.cartID">
                <img :src="item.boatUrl" :alt="item.boatName">
                <div>
                    <h2>R{{ item.amount }}</h2>
                    <h1>{{ item.boatName }}</h1>
                    <h5>{{ item.Catergory }}</h5>
                </div>
            </div>
            <div>
              <h3 class="text-white">  Total Amount : {{ getTotal }}</h3>
            </div>
            <button class="btn btn-outline-light animate__animated animate__bounce animate__delay-3s" @click.prevent="checkout">
            checkout 
        </button>
        </div>
        <div v-else>
            <SpinnerComp/>
        </div>
    </div>
</template>

<script>
import SpinnerComp from "@/components/SpinnerComp.vue";

import sweet from "sweetalert";
import router from "@/router";
import { mapGetters } from 'vuex';

export default {
    components: {
        SpinnerComp
    },
    props: ["cartID"],
    created() {
        this.$store.dispatch("fetchCart")
    },
    computed: {
        ...mapGetters(["getTotal"]),
        cart() {
            return this.$store.state.cart
        }
    },
    methods: {
        checkout() {
            sweet({
                title: "Checkout",
                text: "You order was Successfully sent",
                icon: "success",
                timer: 5000,
            });
             router.push({ name: "home" });
        }
    }
}
    
</script>

<style scoped>

</style>