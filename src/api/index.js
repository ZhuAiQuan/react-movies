/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-04-01 13:21:48
 * @LastEditTime: 2022-04-02 10:40:58
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

export const getFilmsInfo = () => {
  return axios.request({
    url: '/gateway',
    method: 'get',
    params: {
      actId: 'ElzMZU125260'
    },
    headers: {
      'X-Host': 'mall.act.static-page.info'
    }
  })
}