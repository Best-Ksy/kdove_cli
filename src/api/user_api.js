import request from './request'

export function getSmsCode(phoneNumber) {
    return request({
        url: '/reg/sms/getsms',
        method: 'GET',
        params: {phoneNumber:phoneNumber}
    })
}
export function smsVerification(data) {
    return request({
        url: '/reg/sms/verification',
        method: "POST",
        data
    })
}
export function xcodeVerification(xcode) {
    return request({
        url: '/reg/sms/verification/xcode',
        method: 'GET',
        params: {Xcode:xcode}
    })
}
