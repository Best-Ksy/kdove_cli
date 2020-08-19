import Cookies from 'js-cookie'


const xcodeKey = 'THEWMLSAPELLLSWASCZ'

/*
* 登录时保存xcode(cookie)
* */
export function getXcode() {
    return Cookies.get(xcodeKey)
}

export function setXcode(xCode) {
    return Cookies.set(xcodeKey, xCode)
}

export function removeXcode() {
    return Cookies.remove(xcodeKey)
}
