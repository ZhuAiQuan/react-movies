/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-04-14 10:41:36
 * @LastEditTime: 2022-04-14 10:49:55
 * @LastEditors: zaq
 * @Reference: 
 */
export function formatDate(time) {
  const t = new Date(time * 1000);
  const m = t.getMonth()+1;
  const d = t.getDate();
  const td = new Date();
  const tm = td.getMonth() + 1;
  const tdte = td.getDate();
  let desc = '';
  if (m === tm) {
    if (d === tdte) desc = '今天'
    if (d === tdte-1) desc = '昨天'
    if (d === tdte+1) desc = '明天'
    if (d === tdte+2) desc = '后天'
  }
  return `${desc}${m}月${d}日`
}