import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);


const getDefaultState = () => {
  return {

    id: '',
    username: '',
    ucode: 'ss',
    nickname: '',
    regdate: '',
    headurl:'',
    email:''
  }
}

const state = getDefaultState();

const mutations = {
  SET_ID: (state, id) => {
    state.id = id;
  },
  SET_USERNAME: (state, username) => {
    state.username = username
  },
  SET_UCODE: (state, ucode) => {
    state.ucode = ucode;
  },
  SET_NICKNAME: (state, nickname) => {
    state.nickname = nickname;
  },
  SET_REGDATE: (state, regdate) => {
    state.regdate = regdate;
  },
  SET_HEADURL: (state,headurl) => {
    state.headurl = headurl;
  },
  SET_EMAIL: (state,email) => {
    state.email = email;
  }

}

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {}
});

export {
  state,
    mutations
}
