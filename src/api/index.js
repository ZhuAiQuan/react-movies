/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-04-01 13:21:48
 * @LastEditTime: 2022-04-01 17:35:04
 * @LastEditors: zaq
 * @Reference: 
 */
import axios from '@/libs';

export const getGeolocate = (latitude, longitude) => {
  return axios.request({
    url: '/gateway',
    method: 'get',
    headers: {
      'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16484499127525371113111553","bc":"110100"}',
      'X-Host': 'mall.film-ticket.city.locate',
      latitude,
      longitude
    }
  })
}
