import { createStore } from "vuex";
import axios from "axios";
import sweet from "sweetalert";
import router from "@/router";
import { useCookies } from "vue3-cookies";
const cookies = useCookies();
import authenticate from "@/services/AuthenicateUser";

const dataUrl = 'https://capstone-api-zblc.onrender.com/'

export default createStore({
  state: {
    users: null,
    user: null,
    boats: null,
    boat: null,
    orders: null,
    spinner: null,
  },
  getters: {},
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setUser(state, user) {
      state.user = user;
    },
    setBoats(state, boats) {
      state.boats = boats;
    },
    setBoat(state, boat) {
      state.boat = boat;
    },
    setSpinner(state, value) {
      state.spinner = value;
    },
    setToken(state, token) {
      state.token = token;
    },
    setMsg(state, msg) {
      state.msg = msg;
    },
  },
  actions: {
    //users
    // users
    async fetchUsers(context) {
      try {
        const { data } = (await axios.get(`${dataUrl}users`)).data;
        context.commit("setUsers", data.results);
      } catch (e) {
        context.commit("setMsg", "An error has occurred");
      }
    },
    //login
    async login(context, payload) {
      try {
        const { msg, token, result } = (
          await axios.post(`${dataUrl}user`, payload)
        ).data;
        if (result) {
          context.commit("setUser", { result, msg });
          cookies.set("ActualUser", { msg, token, result });
          authenticate.applyToken(token);
          sweet({
            title: msg,
            text: `Welcome back ${result?.firstName} ${result?.lastName}`,
            icon: "success",
            timer: 2000,
          });
          router.push({ name: "home" });
        } else {
          sweet({
            title: "Error",
            text: msg,
            icon: "error",
            timer: 2000,
          });
        }
      } catch (e) {
        context.commit("setMsg", "An error has occured");
      }
    },
    //register
    async addUser(context, payload) {
      try {
        const { msg } = (await axios.post(`${dataUrl}register`, payload)).data;
        if (msg) {
          sweet({
            title: "Registration",
            text: msg,
            icon: "success",
            timer: 2000,
          });
          context.dispatch("fetchUsers");
          router.push({ name: "login" });
        } else {
          sweet({
            title: "Error",
            text: msg,
            icon: "error",
            timer: 2000,
          });
        }
      } catch (e) {
        context.commit("setMsg", "An error has occured");
      }
    },
  },
  modules: {},
});
