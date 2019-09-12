import request from '@/utils/request'

export function requestLogin(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}
