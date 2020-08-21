import Vue from "vue";
import Vuex from "vuex";
import {getXcode,setXcode} from "../utils/auth";

Vue.use(Vuex);


const getDefaultState = () => {
  return {
    id: '',
    username: '',
    ucode: '',
    nickname: '',
    regdate: '',
    headurl:'',
    email:'',
    xcode: getXcode()
  }
}

export default new Vuex.Store({
  state: getDefaultState(),
  mutations: {
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
    },
    SET_XCODE: (state,xcode) =>{
      setXcode(xcode);
    }
  },
  getters: {
    getId: state => state.id,
    getUserName: state => state.username,
    getUcode: state => state.ucode,
    getNickName: state => state.nickname,
    getRegDate: state => state.regdate,
    getHeadUrl: state => state.headurl,
    getEmail: state => state.email,
    getXcode: state => state.xcode
  },
  modules: {}
});

