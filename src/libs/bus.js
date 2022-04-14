/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-04-14 10:04:28
 * @LastEditTime: 2022-04-14 10:15:48
 * @LastEditors: zaq
 * @Reference: 
 */
class EventBus {
  constructor() {
    this.events = {}
  }
  on(event, cb) {
    if (this.events.hasOwnProperty(event) && Array.isArray(this.events[event])) this.events[event].push(cb)
    else this.events[event] = [cb]
  }
  emit(event, data) {
    if (this.events.hasOwnProperty(event) && Array.isArray(this.events[event])) {
      for(let i = 0; i < this.events[event].length; i++) {
        const cb = this.events[event][i];
        cb(data)
      }
    }
  }
  off(event) {
    if (this.events.hasOwnProperty(event)) delete this.events[event]
  }
  once(event, cb) {
    const that = this;
    function handle(arg) {
      cb(arg);
      that.off(event)
    }
    this.on(event, handle)
  }
}

const bus = new EventBus();

export default bus