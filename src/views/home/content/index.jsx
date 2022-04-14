/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-02-21 17:17:52
 * @LastEditTime: 2022-04-14 14:55:08
 * @LastEditors: zaq
 * @Reference: 
 */
import React, { useEffect, useState, createContext } from 'react'
import List from '_c/list'
import './index.less'
import {throuch} from '../../../libs/tools'

export const context = createContext();
const { Provider } = context;
// const ListContainer = useRef()


export default function ListContent(props) {
  const [info, setInfo] = useState([1,2,3,4,5,6,7,8,9,10]);
  useEffect(() => {
    // request api 
    document.querySelector('.content').scrollTop = 0
  }, [props.type]);
  useEffect(() => {
    const dom = document.querySelector('.App>.content');
    dom.addEventListener('scroll', throuch(onScroll))
  }, []);
  function onScroll(e) {
    const { scrollTop, offsetHeight } = e.target;
    if (scrollTop / offsetHeight > 0.7) {// 判断快触底且计算后台字段数据不为空时 获取数据 /需要注意的是再向上滚动时不需要触发更新哦
      // 准备加载数据了
      console.log(scrollTop, offsetHeight)
    }
  }
  return (
    <div className='list-container'>
      <Provider value={{...props}}>
        <List data={info} />
      </Provider>
    </div>
  )
}
