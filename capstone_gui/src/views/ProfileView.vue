<template>
    <div v-if="user">
        <div :user="user" :key="user.userID" >
            <img  :src="user.userProfile" :alt="user.firstName">
            <div>
                <p>{{ user.firstName }} {{ user.lastName }}</p>
                <p>{{ user.userAge }}</p>
                <p>{{ user.gender }}</p>
                <p>{{ user.emailAdd }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
export default {
       computed: {
        user() {
          return cookies.get('ActualUser').result || this.$store.state.user;
          },   
    },

    }
</script>
<style  scoped>

</style> 