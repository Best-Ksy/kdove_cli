import router from "./router";
import {removeXcode} from "./utils/auth";
import {xcodeVerification} from "./api/user_api";
import store from './store'

const routerWhiteList = ['/register']

router.beforeEach((to,from,next) => {

    const xcode = store.getters.getXcode;
    console.log(xcode)
    if (xcode != null){
        if (to.path === "/register"){
            xcodeVerification(xcode).then(response => {
                const resp = response.data;
                if (resp.code === 501){
                    //用户状态过期移除xcode
                    removeXcode();
                    next();
                }else {
                    const userid = store.getters.getId;
                    if (userid === '' || userid === null){
                        const dataform = JSON.parse(resp.data)
                        console.log(dataform.id)
                        store.commit('SET_ID',dataform.id)
                        store.commit('SET_USERNAME',dataform.username)
                        store.commit('SET_UCODE',dataform.ucode)
                        store.commit('SET_NICKNAME',dataform.nickname)
                        store.commit('SET_REGDATE',dataform.regdate)
                        store.commit('SET_HEADURL',dataform.headurl)
                        store.commit('SET_EMAIL',dataform.email)
                        next({path: "/matching"})
                    }
                    //用户状态未过期
                    next({path: "/matching"})
                }
            })
        }else {
            xcodeVerification(xcode).then(response => {
                const resp = response.data;
                if (resp.code === 501){
                    //用户状态过期移除xcode
                    removeXcode();
                    next({path: "/register"})
                }else {
                    const userid = store.getters.getId;
                    if (userid === '' || userid === null){
                        const dataform = JSON.parse(resp.data)
                        console.log(dataform.id)
                        store.commit('SET_ID',dataform.id)
                        store.commit('SET_USERNAME',dataform.username)
                        store.commit('SET_UCODE',dataform.ucode)
                        store.commit('SET_NICKNAME',dataform.nickname)
                        store.commit('SET_REGDATE',dataform.regdate)
                        store.commit('SET_HEADURL',dataform.headurl)
                        store.commit('SET_EMAIL',dataform.email)
                        next()
                    }
                    //用户状态未过期
                    next()
                }
            })
        }
    }else {
        if (routerWhiteList.indexOf(to.path) !== -1){
            next();
        }
        // next({path: "/register?redirect=${to.path}"})
        next({path: "/register"})
    }
})