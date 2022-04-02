/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-04-01 14:11:57
 * @LastEditTime: 2022-04-02 10:10:05
 * @LastEditors: zaq
 * @Reference: 
 */
import HttpRequest from './axios'

const baseUrl = '/api';
const axios = new HttpRequest(baseUrl)

export default axios