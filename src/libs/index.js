/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-04-01 14:11:57
 * @LastEditTime: 2022-04-02 14:41:30
 * @LastEditors: zaq
 * @Reference: 
 */
import HttpRequest from './axios'

const baseUrl = import.meta.env.DEV ? '/api' : 'https://m.maizuo.com/';
const axios = new HttpRequest(baseUrl)

export default axios