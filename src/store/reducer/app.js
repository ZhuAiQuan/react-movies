/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-03-29 17:58:13
 * @LastEditTime: 2022-03-30 09:59:48
 * @LastEditors: zaq
 * @Reference: 
 */
const appData = {
  photos: []
}
const appReducer= (preState = appData, actions) => {
  const {type, data} = actions;
  switch(type) {
    case 'photo_list':
      return {
        ...preState,
        ...data
      }
    default:
      return preState
  }
}
export default appReducer