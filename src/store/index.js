/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-02-22 09:30:16
 * @LastEditTime: 2022-02-22 10:17:07
 * @LastEditors: zaq
 * @Reference: 
 */
import { createStore } from 'redux';
import reducer from './reducer/test';
const defaultState = {
  token: 'dzyydsyydsyydsyysy'
}

const store = createStore(reducer, defaultState);

export default store;