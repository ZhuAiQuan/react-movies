/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-02-21 17:17:52
 * @LastEditTime: 2022-04-14 14:58:02
 * @LastEditors: zaq
 * @Reference: 
 */
import React, { useEffect, useState, createContext } from 'react'
import List from '_c/list'
import './index.less'

export const context = createContext();
const { Provider } = context;


export default function ListContent(props) {
  const [info, setInfo] = useState([1,2,3,4,5,6,7,8,9,10]);

  return (
    <div className='list-container'>
      <Provider value={{...props}}>
        <List data={info} />
      </Provider>
    </div>
  )
}
