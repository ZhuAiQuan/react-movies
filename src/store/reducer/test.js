/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-02-22 09:31:22
 * @LastEditTime: 2022-02-22 10:24:51
 * @LastEditors: zaq
 * @Reference: 
 */
const testReducer = (preState, actions) => {
  const { type, data } = actions;
  switch(type) {
    case 'increment':
      return {...preState, ...data}
    default:
      return preState
  }
}

export default testReducer