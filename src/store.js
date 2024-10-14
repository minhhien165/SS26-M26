import { createStore } from "vuex";
const store = createStore({
  state: {
    count: 0,
    profile: {
      id: 1,
      name: "Nguyễn Minh Hiển",
      gender: "Nam",
      birth: "01/06/2005",
      address: "Hà Đông, Hà Nội",
    },
    users: [
      {
        id: 1,
        name: "Nguyễn Văn A",
        gender: "Nam",
        birth: "01/01/2011",
        address: "Phú Thái, HD",
      },
      {
        id: 2,
        name: "Trần Thị B",
        gender: "Nữ",
        birth: "22/12/2012",
        address: "Kim Thành, HD",
      },
    ],
    numberRandom: [],
    company: "RikkeiAcademy",
    darkMode: JSON.parse(localStorage.getItem("darkMode")) || false,
    language: "Chuyển đổi ngôn ngữ",
    registeredUser: null,
    loggedInUser: null,
  },
  getters: {
    getCount: (state) => {
      return state.count;
    },
    getProfile: (state) => {
      return state.profile;
    },
    getUsers: (state) => {
      return state.users;
    },
    isDarkMode(state) {
      return state.darkMode;
    },
    getRegisteredUser: (state) => state.registeredUser,
    getLoggedInUser: (state) => state.loggedInUser,
  },
  mutations: {
    increasement: (state, payload) => {
      state.count += 1;
    },
    decreasement: (state, payload) => {
      state.count -= 1;
    },
    randomNumber: (state, payload) => {
      state.numberRandom = payload.amount;
    },
    changeCompany: (state, payload) => {
      state.company = payload.amount;
    },
    TOGGLE_DARK_MODE(state) {
      state.darkMode = !state.darkMode;
      localStorage.setItem("darkMode", JSON.stringify(state.darkMode));
    },
    changeLanguage: (state, payload) => {
      state.language = payload;
    },
    SET_REGISTERED_USER(state, user) {
      state.registeredUser = user;
    },
    SET_LOGGED_IN_USER(state, user) {
      state.loggedInUser = user;
    },
  },
  actions: {
    toggleDarkMode({ commit }) {
      commit("TOGGLE_DARK_MODE");
    },
    registerUser({ commit }, user) {
      commit("SET_REGISTERED_USER", user);
    },
    loginUser({ commit }, user) {
      commit("SET_LOGGED_IN_USER", user);
    },
  },
});

export default store;
