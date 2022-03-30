/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-02-22 09:30:16
 * @LastEditTime: 2022-03-30 09:30:16
 * @LastEditors: zaq
 * @Reference: 
 */
import { createStore, combineReducers } from 'redux';
import reducer from './reducer/test';
import app from './reducer/app'
// const defaultState = {
//   token: 'dzyydsyydsyydsyysy'
// }
const reducers = combineReducers({
  test: reducer,
  app
})

const store = createStore(reducers);

export default store;