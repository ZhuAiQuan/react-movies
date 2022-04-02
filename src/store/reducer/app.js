/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-03-29 17:58:13
 * @LastEditTime: 2022-04-02 10:25:35
 * @LastEditors: zaq
 * @Reference: 
 */
const appData = {
  photos: [],
  geoInfo: {
    longitude: 0,
    latitude: 0
  },
  locate: {
    cityId: 0,
    isHot: 0,
    name: '',
    pinyin: ''
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