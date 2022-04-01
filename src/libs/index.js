/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-04-01 14:11:57
 * @LastEditTime: 2022-04-01 16:41:23
 * @LastEditors: zaq
 * @Reference: 
 */
import HttpRequest from './axios'

const baseUrl = 'http://localhost:4000/api';
const axios = new HttpRequest(baseUrl)

export default axios