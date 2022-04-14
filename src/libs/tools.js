/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-04-14 14:26:53
 * @LastEditTime: 2022-04-14 14:50:55
 * @LastEditors: zaq
 * @Reference: 
 */
export const throuch = (cb, timeout = 100) => {
  let state = false;
  return function(e) {
    if (state) return
    else {
      state = true;
      setTimeout(() => {
        cb(e);
        state = false;
      }, timeout);
    }
  }
}