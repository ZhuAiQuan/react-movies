/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-03-29 17:58:13
 * @LastEditTime: 2022-04-01 13:46:39
 * @LastEditors: zaq
 * @Reference: 
 */
const appData = {
  photos: [],
  geoInfo: {
    longitude: 0,
    latitude: 0
  }
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