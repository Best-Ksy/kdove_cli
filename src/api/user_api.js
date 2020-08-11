import request from './request'

export function getSmsCode(phoneNumber) {
    return request({
        url:'/reg/getsms',
        method:'get',
        params:{phoneNumber:phoneNumber}
    })

}
