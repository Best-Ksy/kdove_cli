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
        // headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data
    })
}
