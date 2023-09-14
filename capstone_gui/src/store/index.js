import { createStore } from "vuex";
import axios from "axios";
import sweet from "sweetalert";
import router from "@/router";
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
import authenticate from "@/services/AuthenicateUser";

const dataUrl = "https://capstone-api-zblc.onrender.com/";

export default createStore({
  state: {
    users: null,
    user: null,
    boats: null,
    boat: null,
    orders: null,
    spinner: null,
    msg: null,
    cart: [],
  },
  getters: {
    getTotal(state) {
      return state.cart.reduce((total, item) => {
        const sumofItems = item.amount || 0;
        return total + sumofItems;
      }, 0);
    },
  },
  mutations: {
    // delete button users
    deleteUser(state, userID) {
      state.users = state.users.filter((user) => user.userID !== userID);
    },
    // delete button boats
    deleteBoat(state, boatID) {
      state.boats = state.boats.filter((boat) => boat.boatID !== boatID);
    },
    // add user
    addBoats(state, newBoats) {
      state.boats.push(newBoats);
    },
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
    setMsg(state, msg) {
      state.msg = msg;
    },
    addToCart(state, boat) {
      state.cart.push(boat);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    setCart(state, boat) {
      state.cart = boat;
    },
  },
  actions: {
    // users
    async fetchUsers(context) {
      try {
        const { data } = await axios.get(`${dataUrl}users`);
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
            timer: 4000,
          });
          router.push({ name: "home" });
        } else {
          sweet({
            title: "Error",
            text: msg,
            icon: "error",
            timer: 4000,
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
            timer: 4000,
          });
          context.dispatch("fetchUsers");
          router.push({ name: "login" });
        } else {
          sweet({
            title: "Error",
            text: msg,
            icon: "error",
            timer: 4000,
          });
        }
      } catch (e) {
        context.commit("setMsg", "An error has occured");
      }
    },
    //register (add user)
    async addUsers(context, payload) {
      try {
        const { msg } = (await axios.post(`${dataUrl}register`, payload)).data;
        if (msg) {
          sweet({
            title: "New user",
            text: msg,
            icon: "success",
            timer: 4000,
          });
          context.dispatch("fetchUsers");
        } else {
          sweet({
            title: "Error",
            text: msg,
            icon: "error",
            timer: 4000,
          });
        }
      } catch (e) {
        context.commit("setMsg", "An error has occured");
      }
    },
    // logout
    async logOut(context) {
      context.commit("setUser");
      cookies.remove("ActualUser");
      localStorage.removeItem("cart");
      sweet({
        title: "Logged Out",
        text: "You have been Logged Out",
        icon: "success",
        timer: 4000,
      });
    },
    //boats
    async fetchBoats(context) {
      try {
        const { data } = await axios.get(`${dataUrl}items`);
        context.commit("setBoats", data.results);
      } catch (e) {
        context.commit("setMsg", "An error has occurred");
      }
    },
    //delete user
    async deleteUsers(context, userID) {
      try {
        const { data } = await axios.delete(`${dataUrl}user/${userID}`);
        context.commit("deleteUser", userID);
        const { msg } = await data;
        if (msg) {
          context.commit("setMsg", msg);
          sweet({
            title: "Deleted",
            text: msg,
            icon: "success",
            timer: 4000,
          });
        }
      } catch (e) {
        context.commit("setMsg", "An error has occurred");
      }
    },
    //delete boats
    async deleteBoats(context, boatID) {
      try {
        const { data } = await axios.delete(`${dataUrl}item/${boatID}`);
        context.commit("deleteBoat", boatID);
        const { msg } = await data;
        if (msg) {
          context.commit("setMsg", msg);
          sweet({
            title: "Deleted",
            text: msg,
            icon: "success",
            timer: 4000,
          });
        }
      } catch (e) {
        context.commit("setMsg", "An error has occurred");
      }
    },
    //edit boats
    async editBoats(context, editedBoat) {
      try {
        const { data } = await axios.patch(
          `${dataUrl}item/${editedBoat.boatID}`,
          editedBoat
        );
        const { msg } = await data;
        if (msg) {
          context.commit("setMsg", msg);
          sweet({
            title: "Update",
            text: msg,
            icon: "success",
            timer: 4000,
          });
        } else {
          sweet({
            title: "Error",
            text: msg,
            icon: "error",
            timer: 4000,
          });
        }
        location.reload();
        context.dispatch("fetchBoats");
      } catch (e) {
        context.commit("setMsg", "An error has occurred");
      }
    },
    //edit User
    async editUsers(context, editedUser) {
      try {
        const { data } = await axios.patch(
          `${dataUrl}user/${editedUser.userID}`,
          editedUser
        );
        const { msg } = await data;
        if (msg) {
          context.commit("setMsg", msg);
          sweet({
            title: "Update",
            text: msg,
            icon: "success",
            timer: 4000,
          });
        }
        context.dispatch("fetchUsers");
      } catch (e) {
        context.commit("setMsg", "An error has occurred");
      }
    },
    // add Boat
    async addBoats(context, payload) {
      try {
        const { msg } = (await axios.post(`${dataUrl}items`, payload)).data;
        if (msg) {
          sweet({
            title: "Boat",
            text: msg,
            icon: "success",
            timer: 4000,
          });
          context.dispatch("fetchBoats");
          location.reload();
        } else {
          sweet({
            title: "Error",
            text: msg,
            icon: "error",
            timer: 4000,
          });
        }
      } catch (e) {
        context.commit("setMsg", "An error has occured");
      }
    },
    //single boat
    async fetchBoat(context, boatID) {
      try {
        const { data } = await axios.get(`${dataUrl}item/${boatID}`);
        context.commit("setBoat", data.result);
      } catch (e) {
        context.commit("setMsg", "An error has occurred");
      }
    },
    //add cart
    addCart(context, boat) {
      context.commit("addToCart", boat);
    },
    //fetch cart
    async fetchCart(context) {
      try {
        const cartdata = JSON.parse(localStorage.getItem("cart"));
        this.$store.commit("setCart", cartdata);
      } catch (e) {
        context.commit("setMsg", "Error has ocurred");
      }
    },
  },
  modules: {},
});
