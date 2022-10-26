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
    url: `/gateway?k=${Math.floor(Math.random()* 10000000)}`,
    method: 'get',
    headers: {
      'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16661630674065293919846401"}',
      'X-Host': 'mall.film-ticket.city.locate',
      latitude,
      longitude
    }
  })
}
export const getAllLocate = () => {
  return axios.request({
    url: `/gateway?k=${Math.floor(Math.random()* 10000000)}`,
    method: 'get',
    headers: {
      'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16661630674065293919846401"}',
      'X-Host': 'mall.film-ticket.city.list',
    }
  })
}

export const getFilmsInfo = () => {
  return axios.request({
    url: `/gateway?k=${Math.floor(Math.random()* 10000000)}`,
    method: 'get',
    params: {
      actId: 'ElzMZU125260'
    },
    headers: {
      'X-Host': 'mall.act.static-page.info'
    }
  })
}

export const getBannerInfo = (cityId) => {
  return axios.request({
    url: `/gateway?cityId=${cityId}&k=${Math.floor(Math.random()* 10000000)}`,
    method: 'get',
    headers: {
      'X-Host': 'mall.cfg.film-float.banner',
      'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16661630674065293919846401","bc":"440100"}'
    }
  })
}