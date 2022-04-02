/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-04-01 13:54:41
 * @LastEditTime: 2022-04-02 10:22:01
 * @LastEditors: zaq
 * @Reference: 
 */
import axios from 'axios';

const timeout = 5000

export default class HttpRequest {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
    this.queue = {}
  }
  getInsideConfig() {
    return {
      timeout,
      headers: {},
      baseURL: this.baseUrl
    }
  }
  destroy(key) {
    this.queue[key] && delete this.queue[key]
  }
  interceptors(instance, key) {
    instance.interceptors.request.use(
      config => {
        this.queue[key] = true
        return config
      },
      err => Promise.reject(err)
    )
    instance.interceptors.response.use(
      res => {
        this.destroy(key);
        return res.data
      },
      err => {
        this.destroy(key);
        return Promise.reject(err)
      }
    )
  }
  request(options) {
    const instance = axios.create();
    const k = Math.floor(Math.random()*10000000);
    // options.url = `${options.url ? options.url : ''}?k=${k}`
    options.params = {
      ...options.params,
      k
    }
    const option = Object.assign(this.getInsideConfig(), options);
    this.interceptors(instance, k)
    return instance(option)
  }
}