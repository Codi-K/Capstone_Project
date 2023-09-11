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
  },
  getters: {},
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
    // add watch
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
    //register (Add User)
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
    // logout
    async logOut(context) {
      context.commit("setUser");
      cookies.remove("ActualUser");
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
        await axios.delete(`${dataUrl}user/${userID}`);
        context.commit("deleteUser", userID);
      } catch (e) {
        context.commit("setMsg", "An error has occurred");
      }
    },
    //delete boats
    async deleteBoats(context, boatID) {
      try {
        await axios.delete(`${dataUrl}item/${boatID}`);
        context.commit("deleteBoat", boatID);
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
        context.dispatch("fetchBoats");
        const { msg } = await data;
        if (msg) {
          context.commit("setMsg", msg);
          
        }
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
        context.dispatch("fetchBoats");
      } catch (e) {
        context.commit("setMsg", "An error has occurred");
      }
    },
  },
  modules: {},
});
